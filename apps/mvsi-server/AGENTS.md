# AGENTS.md — AI Agent Guide for MVSI Server

This document provides comprehensive context for AI coding agents working on the `mvsi-server` codebase. It covers architecture, conventions, critical constraints, and module-specific guidance.

---

## Critical Constraints

### Bun-Only Runtime
- This project **only** runs on [Bun](https://bun.sh/). Do **not** use Node.js or Deno APIs unless they are also supported by Bun.
- Bun-specific APIs (`Bun.argv`, `Bun.serve`, etc.) are used directly.
- The Elysia HTTP framework and its WebSocket implementation are Bun-native and will not work in other runtimes.

### Monorepo Workspace Dependencies
- This app lives at `apps/mvsi-server/` within the `mono-mvs` monorepo.
- Shared packages are at `../../packages/` and linked via `workspace:*` in `package.json`.
- **Never** duplicate code that already exists in a shared package. Import from:
  - `@mvsi/database` — MongoDB connection and all models
  - `@mvsi/env` — Environment variable access (`env.VARIABLE_NAME`)
  - `@mvsi/hydra` — `HydraEncoder` and `HydraDecoder`
  - `@mvsi/logger` — `logger.info()`, `logger.error()`, etc.
  - `@mvsi/redis` — `redisClient`, `startRedis()`, `initRedisSubscriber()`
- Path aliases are configured in `tsconfig.json` for `@mvsi/env` and `@mvsi/logger`.

### Hydra Binary Protocol
- All client-facing HTTP endpoints use the Hydra binary protocol, **not** JSON.
- Request bodies arrive as binary buffers with content type `application/x-ag-binary` and are decoded by the middleware.
- Response objects are plain JavaScript objects — the middleware automatically encodes them to Hydra binary.
- When writing route handlers, **return plain objects** — do not manually encode to Hydra.
- The `x-mvsi-batch` header indicates a request is from the batch endpoint and should use JSON content type internally.
- WebSocket messages are also Hydra-encoded with a 3-byte WebSocket framing prefix.

---

## Architecture Overview

### Three Process Modes
The server runs as three separate processes, all from `src/entry.ts`:

1. **HTTP Server** (default) — `src/index.elysia.ts`
   - All REST API routes
   - Connects to both MongoDB and Redis
   - Loads game assets into memory on startup
   - Watches MongoDB change streams for config updates

2. **WebSocket Server** (`bun run src/entry.ts websocket`) — `src/websocketStart.ts`
   - Real-time client communication
   - Connects to Redis only (no MongoDB)
   - Subscribes to Redis Pub/Sub channels for event forwarding
   - Manages connected player map (`Map<string, MVSI_Websocket>`)

3. **Matchmaking Worker** (`bun run src/entry.ts worker`) — `src/workerStart.ts`
   - Background queue processor
   - Connects to Redis only (no MongoDB)
   - Polls matchmaking queues every 2 seconds
   - Creates matches and publishes results via Pub/Sub

### Inter-Process Communication
All three processes communicate exclusively through **Redis Pub/Sub**. When the HTTP server needs to notify a connected WebSocket client (e.g., "match found"), it publishes a message to a Redis channel. The WebSocket server subscribes to that channel and forwards the message to the appropriate client(s).

**Important:** Never assume the HTTP server and WebSocket server share memory. They are separate processes.

---

## Code Conventions

### Module Structure
Each feature module lives in `src/modules/{moduleName}/` and follows this pattern:

| File | Purpose | Required? |
|------|---------|-----------|
| `{module}.route.ts` | Elysia route definitions | Yes (if HTTP endpoints exist) |
| `{module}.service.ts` | Business logic, DB/Redis operations | Usually |
| `{module}.types.ts` | TypeScript interfaces, enums, constants | If needed |
| `{module}.data.ts` | Static response data | If needed |
| `{module}.ws.ts` | WebSocket Pub/Sub handlers | If real-time features exist |

### Route Registration Pattern
All routes register themselves on the shared `MAIN_APP` instance:

```typescript
import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT); // or MVSI_HYDRA for unauthenticated

router.get("/my/endpoint", async ({ claims }) => {
  // claims is available when using MVSI_HYDRA_WITH_JWT
  return { some: "data" }; // Auto-encoded to Hydra binary
});

MAIN_APP.use(router); // MUST register on MAIN_APP
```

**Key rules:**
- Always create a new `Elysia()` instance for the router, then `.use()` the appropriate middleware.
- Use `MVSI_HYDRA_WITH_JWT` for authenticated endpoints (provides `claims` in context).
- Use `MVSI_HYDRA` for unauthenticated endpoints (e.g., `/access`, `/sessions/auth/token`).
- Always call `MAIN_APP.use(router)` at the bottom of the file.
- Route files are imported as side effects in `src/index.elysia.ts`.

### SSC Invoke Pattern
Many routes follow the "Server-Side Code Invoke" pattern with URLs like `/ssc/invoke/{action}`. These are typically `PUT` or `GET` endpoints that return:

```typescript
{
  body: { /* actual response data */ },
  metadata: null,
  return_code: 0,
}
```

Follow this pattern when adding new SSC endpoints.

### WebSocket Event Pattern
WebSocket modules subscribe to Redis Pub/Sub channels and forward messages to connected clients:

```typescript
import { MAIN_WEBSOCKET } from "../../websocket.elysia";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;
const clients = MAIN_WEBSOCKET.decorator.players;

subscriber.subscribe("channel:name", (message) => {
  const data = JSON.parse(message);
  const client = clients.get(data.playerId);
  if (client) {
    client.data.sendHydra(client, { /* hydra response object */ });
  }
});
```

### Redis Key Patterns
Follow existing key naming conventions:
- Player presence: `player:{id}:presence`
- Player config: `player:{id}:config`
- Lobbies: `lobby:{id}`
- Matchmaking queues: `matchmaking:queue:{type}`
- Active matches: `matchmaking:{matchId}`
- Perk locks: `matchmaking:{matchId}:perks:{playerId}`

### Redis Pub/Sub Channel Naming
- Use colon-separated hierarchical names: `{domain}:{event}`
- Define channel constants in the module's `*.types.ts` file
- Examples: `matchmaking:matchfound`, `lobby:created`, `friend:request:received`

### Error Handling
- Use `logger.error()` from `@mvsi/logger` for all error logging.
- Route error handlers are registered globally via `MVSI_HYDRA`'s `onError` hook.
- Service functions should throw errors that propagate to the global handler.
- For expected failures (e.g., player not found), return appropriate HTTP status codes via `set.status`.

### TypeScript
- Strict mode is enabled (`strict: true` in `tsconfig.json`).
- `noUnusedLocals` and `noUnusedParameters` are enabled — remove unused code.
- Target is `ES2022` with bundler module resolution.
- Use `.ts` extensions in imports (Bun supports this natively).

---

## Database Guide

### MongoDB (via Papr)
- **Connection:** `@mvsi/database` handles connection via `connect()`.
- **ODM:** Uses [Papr](https://github.com/plexinc/papr) (schema-based MongoDB ODM built on the native driver).
- **Models** are defined in `packages/database/models/` and imported as `@mvsi/database/models/{ModelName}`.
- **Change streams** are used by the config system — MongoDB **must** run as a replica set.
- Use `ObjectId` from `@mvsi/database/papr` (re-exported from `mongodb`).

**Common operations:**
```typescript
import { PlayerModel } from "@mvsi/database/models/Player";
import { ObjectId } from "mongodb";

// Find
const player = await PlayerModel.findOne({ _id: new ObjectId(id) });

// Upsert
await DataAssetModel.findOneAndUpdate(
  { assetPath: path },
  { $set: { ... } },
  { upsert: true }
);
```

### Redis
- **Client:** `redisClient` from `@mvsi/redis` — standard Redis operations.
- **Subscriber:** `initRedisSubscriber()` returns a dedicated Pub/Sub client.
- Use `redisClient.json.set()` / `redisClient.json.get()` for complex objects (Redis JSON).
- Use `redisClient.set()` / `redisClient.get()` for simple key-value pairs.
- Use `redisClient.lPush()` / `redisClient.lRange()` for queue operations.
- Use `redisClient.publish()` to send Pub/Sub messages.
- Always `JSON.stringify()` objects before publishing and `JSON.parse()` when receiving.

---

## Module-Specific Guidance

### Adding a New Module
1. Create `src/modules/{name}/` directory.
2. Create `{name}.route.ts` with route definitions.
3. Create `{name}.service.ts` for business logic.
4. Create `{name}.types.ts` for type definitions.
5. Import the route file in `src/index.elysia.ts` as a side effect:
   ```typescript
   import "./modules/{name}/{name}.route.ts";
   ```
6. If the module needs real-time features, create `{name}.ws.ts` and import it in `src/websocketStart.ts`.

### Matchmaking System
This is the most complex system. Key flows:

**Queuing:**
1. HTTP endpoint receives request → creates `MatchmakingTicket` → pushes to Redis list
2. If player is in a lobby, the lobby is locked and all party members are included in the ticket
3. Publishes `lobby:queued` notification

**Match Creation (Worker):**
1. Worker reads tickets from queue via `lRange` + `lRem`
2. Groups tickets based on mode rules (2 for 1v1, 4 for 2v2, etc.)
3. Fetches player configs from Redis
4. Creates `MatchmakingActiveMatch` object in Redis
5. Publishes `matchmaking:matchfound` → WebSocket notifies clients

**Perk Lock → Game Start:**
1. Each player sends perk lock via HTTP
2. Service stores perks in Redis and checks if all players locked
3. When all locked → publishes `matchmaking:perkslocked`
4. Game server registers via `/mvsi_register` → gets match config
5. Game server reports ready → publishes `matchmaking:serverready`
6. WebSocket sends connection details to all players

### Lobby System
- Lobbies are stored entirely in Redis (JSON) with TTL expiration.
- The lobby leader controls the mode and initiates matchmaking.
- When a lobby queues for matchmaking, all members are grouped into one ticket.
- Lobby IDs are tracked per-player in Redis for quick lookup.

### Authentication Flow
1. Client sends encrypted Steam app ticket to `POST /access`
2. Server decrypts ticket using the Steam private key
3. Validates the ticket and fetches Steam profile data
4. Creates/updates MongoDB player record
5. Sets Redis presence + config
6. Returns JWT + WebSocket URL + game configuration

The JWT is then used for all subsequent HTTP requests (via `x-hydra-access-token` header) and WebSocket authentication (during handshake).

### Cosmetics System
- Default cosmetics are defined in `CosmeticsDefault` (from `@mvsi/database/models/Cosmetics`).
- Player cosmetics are merged with defaults on retrieval (missing fields fall back to defaults).
- Changes are persisted to MongoDB and cached in Redis.
- When a player equips a taunt, the system loads available taunts for that character from the asset cache and updates both the cosmetics record and the player config.

---

## Testing & Development

### Running the Server Locally
```bash
# Terminal 1: HTTP Server
bun run src/entry.ts

# Terminal 2: WebSocket Server
bun run src/entry.ts websocket

# Terminal 3: Matchmaking Worker
bun run src/entry.ts worker
```

All three processes must be running for full functionality.

### Loading Initial Data
```bash
bun run src/loader.ts
```
This populates MongoDB with all game assets (characters, skins, emotes, etc.) from the static data files.

### Hot Asset Reloading
Use the `POST /syncAsset` endpoint with a valid `DATA_ASSET_TOKEN` to update individual data assets without restarting the server. This:
1. Upserts the asset in MongoDB
2. Reloads the in-memory asset cache
3. Increments the CRC (clients will fetch fresh config on next request)

---

## Common Pitfalls

1. **Forgetting `MAIN_APP.use(router)`** — Routes won't be registered.
2. **Using `MVSI_HYDRA` instead of `MVSI_HYDRA_WITH_JWT`** — `claims` won't be available in context.
3. **Not importing route files in `index.elysia.ts`** — Side-effect imports are required for registration.
4. **Sharing state between HTTP and WebSocket servers** — They are separate processes; use Redis.
5. **Not handling Hydra encoding** — Don't manually encode; the middleware handles it. Return plain objects.
6. **MongoDB without replica set** — Change streams (used by config) require a replica set.
7. **Forgetting to `JSON.stringify` before `redisClient.publish()`** — Pub/Sub messages are strings.
8. **Not cleaning up Redis keys on disconnect** — The WebSocket `close` handler calls `clearPlayerKeys()`. If you add new per-player Redis keys, add cleanup logic there.
9. **Running with Node.js** — Will fail. Elysia and Bun WebSocket APIs are Bun-specific.

---

## Environment Variables Reference

All defined in `packages/env/src/env.ts` using `@t3-oss/env-core` + Zod:

| Variable | Type | Required | Description |
|----------|------|----------|-------------|
| `MONGODB_URI` | string | ✅ | MongoDB connection string (must be replica set for change streams) |
| `REDIS_URI` | string | ✅ | Redis connection string |
| `PUBLIC_URI` | string | ✅ | Public hostname/IP for WebSocket URL construction |
| `HTTP_PORT` | number | ✅ | HTTP server port |
| `WEBSOCKET_PORT` | number | ✅ | WebSocket server port |
| `PORT` | number | ✅ | General port |
| `SESSION_SECRET` | string | ✅ | JWT signing secret |
| `STEAM_KEY` | string | ✅ | Steam Web API key |
| `STEAM_RETURN_URL` | string | ✅ | Steam OpenID return URL |
| `STEAM_REALM` | string | ✅ | Steam OpenID realm |
| `LOCAL_PUBLIC_IP` | string | ✅ | Local public IP for game server communication |
| `GAME_VERSION` | string | ✅ | Current game version |
| `UDP_PORT` | number | ✅ | UDP game server port |
| `UDP_SERVER_IP` | string | ✅ | UDP game server IP |
| `DATA_ASSET_TOKEN` | string | ✅ | Auth token for data asset sync endpoints |
| `STORAGE_*` | string | ❌ | Optional object storage configuration (region, bucket, endpoint, keys) |

---

## Key Files Quick Reference

| File | Purpose |
|------|---------|
| `src/entry.ts` | Process mode router (HTTP / WebSocket / Worker) |
| `src/index.elysia.ts` | HTTP server initialization and route imports |
| `src/websocket.elysia.ts` | WebSocket server with connection lifecycle management |
| `src/websocketStart.ts` | WebSocket server bootstrap (Redis connect + WS module imports) |
| `src/workerStart.ts` | Matchmaking worker bootstrap |
| `src/middleware/middlewares.ts` | Core Elysia plugins (MAIN_APP, Hydra parsing, JWT auth) |
| `src/loadAssets.ts` | In-memory game asset cache |
| `src/loader.ts` | One-time data asset seeder |
| `src/steam.ts` | Steam API integration |
| `src/data/config.ts` | CRC/version management with change streams |
| `src/data/maps.ts` | Map pools and rotation configs |
| `packages/database/` | MongoDB connection, Papr ODM, all data models |
| `packages/redis/` | Redis client and Pub/Sub subscriber setup |
| `packages/hydra/` | Binary protocol encoder/decoder |
| `packages/env/` | Type-safe environment variables |
| `packages/logger/` | Winston logger |
