# MVSI Server

A game backend server for **MultiVersus** built with the **Bun** runtime, **Elysia** HTTP framework, and **WebSockets**. This server handles player authentication, matchmaking, lobby management, cosmetics, friends, and real-time game communication using a custom binary protocol called **Hydra**.

> **⚠️ Bun Only:** This project is only compatible with the [Bun](https://bun.sh/) runtime due to its use of the Elysia HTTP framework and Bun-native WebSocket APIs. It will **not** work with Node.js or Deno.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Monorepo Structure](#monorepo-structure)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Process Modes](#process-modes)
- [Infrastructure](#infrastructure)
  - [MongoDB](#mongodb)
  - [Redis](#redis)
- [Hydra Protocol](#hydra-protocol)
- [Middleware & Authentication](#middleware--authentication)
- [Module Reference](#module-reference)
  - [Access](#access)
  - [Account](#account)
  - [Batch](#batch)
  - [Calendar Events](#calendar-events)
  - [Commerce](#commerce)
  - [Cosmetics](#cosmetics)
  - [Drive](#drive)
  - [Friends](#friends)
  - [Game Config](#game-config)
  - [Game Modes](#game-modes)
  - [Global Configuration](#global-configuration)
  - [Leaderboards](#leaderboards)
  - [Lobby](#lobby)
  - [Matches](#matches)
  - [Matchmaking](#matchmaking)
  - [Milestones](#milestones)
  - [Missions](#missions)
  - [Perks](#perks)
  - [Personalized Shop](#personalized-shop)
  - [Player Config](#player-config)
  - [Player Presence](#player-presence)
  - [Preferences](#preferences)
  - [Profiles](#profiles)
  - [Rifts](#rifts)
  - [Sessions](#sessions)
- [Data Layer](#data-layer)
- [Project Structure](#project-structure)

---

## Architecture Overview

The MVSI Server is a multi-process architecture composed of three independently runnable processes, all orchestrated from a single entry point (`src/entry.ts`):

```
┌─────────────────────────────────────────────────────────┐
│                      entry.ts                           │
│         (Bun.argv determines process mode)              │
├──────────────┬──────────────────┬───────────────────────┤
│   (default)  │   "websocket"    │      "worker"         │
│              │                  │                        │
│  HTTP Server │  WebSocket Server│  Matchmaking Worker    │
│  (Elysia)    │  (Elysia WS)    │  (Background Process)  │
│              │                  │                        │
│  - REST API  │  - Real-time     │  - Queue processing    │
│  - Hydra     │    messaging     │  - Match creation      │
│    protocol  │  - Hydra binary  │  - Periodic polling    │
│  - JWT auth  │  - Pub/Sub       │                        │
│  - MongoDB   │  - Heartbeats    │                        │
│  - Redis     │  - Redis         │  - Redis               │
└──────────────┴──────────────────┴───────────────────────┘
         │                │                   │
         └────────────────┼───────────────────┘
                          │
              ┌───────────┴───────────┐
              │    Redis (Pub/Sub)    │
              │    Redis (Cache)      │
              │    MongoDB (Storage)  │
              └───────────────────────┘
```

### Key Architectural Decisions

- **Bun Runtime** — Required for Elysia framework compatibility and native WebSocket support
- **Elysia Framework** — High-performance HTTP framework built for Bun with type-safe routing
- **Hydra Binary Protocol** — Custom binary serialization format for efficient client-server communication (both HTTP and WebSocket)
- **Redis Pub/Sub** — Inter-process communication between HTTP server, WebSocket server, and workers
- **MongoDB + Papr** — Persistent storage with schema-validated models via Papr ODM
- **JWT Authentication** — Stateless authentication using JSON Web Tokens signed with a session secret

---

## Monorepo Structure

This project is part of a monorepo located at `mono-mvs/`. The server depends on several shared workspace packages:

| Package | Path | Purpose |
|---------|------|---------|
| `@mvsi/database` | `packages/database/` | MongoDB connection, Papr ODM, and all data models (Player, Cosmetics, Friends, DataAssets, Config, etc.) |
| `@mvsi/env` | `packages/env/` | Type-safe environment variable validation using `@t3-oss/env-core` and Zod |
| `@mvsi/hydra` | `packages/hydra/` | Hydra binary protocol encoder/decoder for serializing/deserializing game data |
| `@mvsi/logger` | `packages/logger/` | Winston-based logging utility |
| `@mvsi/redis` | `packages/redis/` | Redis client setup, connection management, and Pub/Sub subscriber initialization |

Dependencies are linked via `workspace:*` in `package.json`.

---

## Prerequisites

- **[Bun](https://bun.sh/)** (latest stable version) — The only supported runtime
- **MongoDB** (v6+) — Primary database; must support change streams (requires replica set)
- **Redis** (v7+ recommended) — Used for caching, Pub/Sub messaging, and real-time state

---

## Environment Variables

All environment variables are validated at startup via `@mvsi/env` using Zod schemas. The server will fail to start if required variables are missing.

| Variable | Type | Required | Description |
|----------|------|----------|-------------|
| `MONGODB_URI` | string | ✅ | MongoDB connection string |
| `REDIS_URI` | string | ✅ | Redis connection string |
| `PUBLIC_URI` | string | ✅ | Public-facing server hostname/IP (used to construct WebSocket URLs) |
| `HTTP_PORT` | number | ✅ | Port for the HTTP/REST server |
| `WEBSOCKET_PORT` | number | ✅ | Port for the WebSocket server |
| `PORT` | number | ✅ | General port (fallback) |
| `SESSION_SECRET` | string | ✅ | Secret key for JWT signing/verification |
| `STEAM_KEY` | string | ✅ | Steam Web API key for user data fetching |
| `STEAM_RETURN_URL` | string | ✅ | Steam OpenID return URL |
| `STEAM_REALM` | string | ✅ | Steam OpenID realm |
| `LOCAL_PUBLIC_IP` | string | ✅ | Local public IP for game server registration |
| `GAME_VERSION` | string | ✅ | Current game version string |
| `UDP_PORT` | number | ✅ | UDP port for game server communication |
| `UDP_SERVER_IP` | string | ✅ | UDP game server IP address |
| `DATA_ASSET_TOKEN` | string | ✅ | Bearer token for data asset sync endpoints |
| `STORAGE_REGION` | string | ❌ | Object storage region (for file storage) |
| `STORAGE_BUCKET_NAME` | string | ❌ | Object storage bucket name |
| `STORAGE_ENDPOINT` | string | ❌ | Object storage endpoint URL |
| `STORAGE_ACCESS_KEY` | string | ❌ | Object storage access key |
| `STORAGE_SECRET_KEY` | string | ❌ | Object storage secret key |

Create a `.env` file in the project root with these values.

---

## Getting Started

```bash
# Install dependencies (from monorepo root)
bun install

# Start the HTTP server (default mode)
bun run src/entry.ts

# Start the WebSocket server
bun run src/entry.ts websocket

# Start the matchmaking worker
bun run src/entry.ts worker

# Load initial game data assets into MongoDB
bun run src/loader.ts
```

---

## Process Modes

The entry point (`src/entry.ts`) uses command-line arguments to determine which process to start:

### 1. HTTP Server (default)
**File:** `src/index.elysia.ts`

The main REST API server. On startup it:
1. Connects to MongoDB and Redis in parallel
2. Initializes the Redis Pub/Sub subscriber
3. Loads all game assets from MongoDB into memory
4. Loads server configuration (CRC, version) from MongoDB and watches for changes via change streams
5. Starts the Elysia HTTP server on `HTTP_PORT`

All route modules are imported as side effects, each registering themselves on the shared `MAIN_APP` Elysia instance.

### 2. WebSocket Server (`websocket`)
**File:** `src/websocketStart.ts` → `src/websocket.elysia.ts`

A dedicated Elysia WebSocket server for real-time communication. It:
1. Connects to Redis
2. Imports WebSocket handler modules for matchmaking, lobby, and friends
3. Manages connected player sessions (`Map<string, MVSI_Websocket>`)
4. Handles JWT authentication during the WebSocket handshake
5. Processes incoming Hydra binary messages
6. Sends heartbeat pings to keep connections alive
7. Cleans up player state (presence, lobby, matchmaking tickets) on disconnect

Real-time events are received via Redis Pub/Sub subscriptions and forwarded to connected clients as Hydra-encoded binary messages.

### 3. Matchmaking Worker (`worker`)
**File:** `src/workerStart.ts` → `src/modules/matchmaking/matchmaking.worker.ts`

A background process that:
1. Connects to Redis
2. Polls matchmaking queues every 2 seconds
3. Processes 1v1 and 2v2 queues, creating matches when enough players are available
4. Configures player loadouts, selects random maps, and sets up game mode rules
5. Publishes match notifications via Redis Pub/Sub to notify WebSocket clients

---

## Infrastructure

### MongoDB

**Connection:** Via `@mvsi/database` package using Papr ODM (built on the native MongoDB driver).

**Connection string:** Set via `MONGODB_URI` environment variable.

**Setup Requirements:**
- MongoDB must be configured as a **replica set** to support change streams (used by the config module to watch for CRC/version updates in real-time)
- The database is auto-initialized by Papr's `updateSchemas()` on startup

**Models (defined in `packages/database/models/`):**

| Model | Collection | Purpose |
|-------|-----------|---------|
| `PlayerModel` | players | Player accounts (Steam ID, username, profile icon, created date) |
| `CosmeticsModel` | cosmetics | Per-player equipped cosmetics (banner, announcer, ringout VFX, stat trackers, taunts) |
| `FriendModel` | friends | Friend relationships between players |
| `InvitationModel` | invitations | Pending friend requests/invitations |
| `DataAssetModel` | dataassets | Game assets (characters, skins, emotes, banners, etc.) with asset paths and slugs |
| `ConfigDataModel` | configs | Server configuration (CRC version number, game version) |
| `IPBlockModel` | blocks | IP-based access blocks |
| `PerkPagesModel` | perkpages | Player perk page configurations per character |
| `AnnouncementModel` | announcements | In-game announcements and splash screens |
| `FileStorageModel` | filestorage | File metadata for stored assets |

**Data Loading:**
- `src/loader.ts` — Bulk-loads initial game data (characters, skins, emotes, banners, ringouts, profile icons, announcer packs, stat trackers, gems, perks, taunts) from static data files into `DataAssetModel`
- `src/loadAssets.ts` — Loads all enabled `DataAsset` records from MongoDB into an in-memory cache at startup, with helper functions to query by type or character

### Redis

**Connection:** Via `@mvsi/redis` package using the official `redis` Node.js client.

**Connection string:** Set via `REDIS_URI` environment variable.

**Two clients are created:**
1. **Main client** (`redisClient`) — For read/write operations (GET, SET, JSON operations, list operations)
2. **Subscriber client** (`redisSub`) — A duplicate client dedicated to Pub/Sub subscriptions (Redis requires a separate connection for subscriptions)

**Redis is used for:**

#### 1. Player Presence (Key-Value)
- Key pattern: `player:{playerId}:presence`
- Stores: lobby ID, profile ID, online status, IP address
- Set on login, cleared on WebSocket disconnect

#### 2. Player Config (Key-Value)
- Key pattern: `player:{playerId}:config`
- Stores: full player configuration (character, skin, taunts, perks, gems, etc.)
- Updated when players change loadouts

#### 3. Cosmetics Cache (Key-Value)
- Key pattern: `player:{playerId}:cosmetics`
- Caches equipped cosmetics to avoid repeated MongoDB queries

#### 4. Lobby State (JSON)
- Key pattern: `lobby:{lobbyId}`
- Stores full lobby state as JSON (teams, leader, mode, locked loadouts, etc.)
- TTL-based expiration

#### 5. Matchmaking Queues (Lists)
- Key pattern: `matchmaking:queue:{matchType}` (e.g., `matchmaking:queue:1v1`)
- Players are pushed onto queues as serialized ticket JSON
- The matchmaking worker pops tickets to form matches

#### 6. Active Matches (JSON)
- Key pattern: `matchmaking:{matchId}`
- Stores active match state during the matchmaking flow

#### 7. Perk Locks (Key-Value)
- Key pattern: `matchmaking:{matchId}:perks:{playerId}`
- Tracks which players have locked their perks for a match

#### 8. Pub/Sub Channels
Real-time inter-process messaging:

| Channel | Purpose | Publisher | Subscriber |
|---------|---------|-----------|------------|
| `matchmaking:matchfound` | New match created | Worker / HTTP | WebSocket |
| `matchmaking:serverready` | Game server ready | HTTP (game server callback) | WebSocket |
| `matchmaking:complete` | Matchmaking completed | Service | WebSocket |
| `matchmaking:cancel` | Matchmaking cancelled | HTTP | WebSocket |
| `matchmaking:matchend` | Match ended | HTTP (game server callback) | WebSocket |
| `matchmaking:perkslocked` | All perks locked | HTTP | WebSocket |
| `lobby:created` | New lobby created | HTTP | WebSocket |
| `lobby:mode` | Lobby mode changed | HTTP | WebSocket |
| `lobby:queued` | Lobby party queued | HTTP | WebSocket |
| `friend:request:received` | Friend request sent | HTTP | WebSocket |

---

## Hydra Protocol

Hydra is a custom binary serialization protocol used for all client-server communication. It replaces JSON for efficiency over the wire.

**Implementation:** `packages/hydra/`

### Encoding (`HydraEncoder`)
Converts JavaScript objects to compact binary buffers. Supports:
- Primitives: null, boolean, integers (8/16/32/64-bit signed/unsigned), floats, doubles
- Strings: Variable-length with 8/16/32-bit length prefixes
- Collections: Arrays and Maps (objects) with variable-length counts
- Special types: Dates (Unix timestamps), compressed objects (zlib deflate), localizations, file references, calendar events
- WebSocket framing: Optional 3-byte header (type byte + 16-bit length) for WebSocket messages

### Decoding (`HydraDecoder`)
Reads binary buffers and reconstructs JavaScript objects. Each value is prefixed with a type code byte that determines how to read the following data.

### HTTP Integration
- **Request parsing:** The Elysia `onParse` hook detects `application/x-ag-binary` content type, reads the raw body as a buffer, and decodes it via `HydraDecoder`
- **Response mapping:** The `mapResponse` hook encodes JSON responses back to Hydra binary format and sets appropriate headers
- **Batch requests:** Internal batch requests are forwarded as JSON to avoid double-encoding

### WebSocket Integration
- Messages arrive as `Uint8Array` binary frames
- Decoded via `HydraDecoder.readWebSocket()` which reads a 2-byte size prefix followed by the payload
- Outgoing messages are encoded via `HydraEncoder` with WebSocket framing enabled

---

## Middleware & Authentication

Defined in `src/middleware/middlewares.ts`:

### `MAIN_APP`
The root Elysia instance. All route modules register themselves on this instance. Includes a global request logger.

### `MVSI_HYDRA`
An Elysia plugin that provides:
- **Global error handler** — Logs errors and returns appropriate status codes
- **Global request parser** — Detects Hydra binary content type and decodes request bodies
- **Global response mapper** — Encodes JSON responses to Hydra binary format
- **JWT plugin** — Registers the JWT utility (sign/verify) using `SESSION_SECRET`

### `MVSI_HYDRA_WITH_JWT`
Extends `MVSI_HYDRA` with:
- **JWT verification** — Reads the `x-hydra-access-token` header, verifies the JWT, and derives `claims` (player ID, username, Steam ID, etc.) into the request context
- Used by all authenticated route modules

### JWT Claims Schema
```typescript
{
  id: string;          // MongoDB ObjectId as string
  username: string;    // Player display name
  steam_id: string;    // Steam 64-bit ID
  public_id: string;   // Public-facing player ID
}
```

---

## Module Reference

All modules follow a consistent pattern:
- `*.route.ts` — Elysia route definitions, registered on `MAIN_APP`
- `*.service.ts` — Business logic (database operations, Redis operations, Pub/Sub publishing)
- `*.types.ts` — TypeScript type definitions and constants
- `*.data.ts` — Static/default data payloads
- `*.ws.ts` — WebSocket event handlers (Redis Pub/Sub subscriptions → client notifications)

### Access
**Path:** `src/modules/access/`
**Routes:** `POST /access`, `DELETE /access`

The authentication entry point. Handles the full login flow:
1. Receives an encrypted Steam app ticket from the client
2. Decrypts and validates the ticket using `steam-appticket` with the game's private key
3. Checks for IP-based blocks
4. Fetches the player's Steam profile (username, avatar) via the Steam Web API
5. Creates or updates the player record in MongoDB
6. Sets initial player presence and config in Redis
7. Signs a JWT with the player's claims
8. Returns access data (token, WebSocket endpoint, profile, configuration)

### Account
**Path:** `src/modules/account/`
**Routes:** `GET /ssc/invoke/ranked_data`

Returns static ranked season data (points, games played, wins, losses, damage, leaderboard ranks) across multiple seasons.

### Batch
**Path:** `src/modules/batch/`
**Routes:** `PUT /batch`

Processes multiple API requests in a single HTTP call. Accepts an array of request objects (URL, verb, body, headers), executes each against `MAIN_APP.handle()` internally, and returns a consolidated array of responses. This reduces round-trips for clients that need to fetch multiple resources.

### Calendar Events
**Path:** `src/modules/calendar_events/`
**Routes:** `GET /ssc/invoke/get_hiss_calendar_events`, `GET /ssc/invoke/get_calendar_events`, `GET /file_storage`, `GET /file_storage/:file`

Provides in-game calendar events, splash screen announcements, and serves announcement image files from storage.

### Commerce
**Path:** `src/modules/commerce/`
**Routes:** `GET /commerce/products`, `GET /commerce/purchases/me`, `GET /commerce/steam/mtx_user_info/me`

Returns product listings, player purchase history, and Steam microtransaction user info. Currently serves static data.

### Cosmetics
**Path:** `src/modules/cosmetics/`
**Routes:** `GET /ssc/invoke/get_equipped_cosmetics`, `PUT /ssc/invoke/equip_taunt`, `PUT /ssc/invoke/set_profile_icon`, `PUT /ssc/invoke/equip_stat_tracker`, `PUT /ssc/invoke/equip_announcer_pack`, `PUT /ssc/invoke/equip_banner`, `PUT /ssc/invoke/equip_ringout_vfx`

Manages all player cosmetic items:
- **Banners** — Profile banners
- **Announcer Packs** — In-game announcer voices
- **Ringout VFX** — Visual effects on knockouts
- **Stat Trackers** — Up to 3 stat tracking slots
- **Taunts** — Character-specific emote animations
- **Profile Icons** — Player avatar icons

Cosmetics are stored in MongoDB and cached in Redis. Default cosmetics are merged with player-specific ones on retrieval.

### Drive
**Path:** `src/modules/drive/`
**Routes:** `PUT /drives/multiversus/sync`

Handles syncing of images/assets to the client's local storage for in-game use (shop items, events, etc.). Currently returns empty additions/deletions.

### Friends
**Path:** `src/modules/friends/`
**Routes:** `GET /friends/me`, `GET /friends/me/invitations/incoming`, `GET /friends/me/invitations/outgoing`, `POST /friends/me/invitations`, `PUT /ssc/invoke/send_profile_notification`, `PUT /accounts/wb_network/bulk`, `GET /accounts/wb_network/:id`
**WebSocket:** `friends.ws.ts`

Full friend system with:
- Friend list retrieval with presence data
- Incoming/outgoing invitation management
- Sending friend requests (creates `InvitationModel` records)
- Real-time friend request notifications via Redis Pub/Sub → WebSocket
- Bulk friend detail lookups with player profiles and presence

### Game Config
**Path:** `src/modules/gameConfig/`
**Routes:** `PUT /ssc/invoke/hiss_amalgamation`, `GET /ssc/invoke/hiss_amalgamation`, `GET /ssc/invoke/get_country_code`, `PUT /ssc/invoke/game_launch_event`, `POST /ssc/invoke/attempt_daily_refresh`, `POST /syncAsset`

Serves the game's runtime configuration. Uses a **CRC (Cyclic Redundancy Check)** mechanism:
- Client sends its current CRC value
- If it matches the server's CRC, a minimal response is returned
- If mismatched, the full configuration (characters, skins, perks, gems, map rotations, game modes, rank settings, missions, etc.) is sent as a compressed Hydra payload
- The `syncAsset` endpoint allows external tools to push data asset updates

### Game Modes
**Path:** `src/modules/gameModes/`

Configuration-only module (no routes). Defines gameplay configurations for each match type:
- **1v1** — 2 teams of 1, 3 ringouts, 7-minute matches
- **2v2** — 2 teams of up to 2, 4 ringouts, 7-minute matches
- **FFA** — 4 teams of 1 (free-for-all), 4 ringouts, 7-minute matches
- **Casual** — 4 teams of 1, 1 ringout, 1-minute matches

Each config includes map rotations, match duration, hazard/shield settings, and team structures.

### Global Configuration
**Path:** `src/modules/global_configuration/`
**Routes:** `GET /global_configuration_types/calendarflags/global_configurations`, `GET /global_configuration_types/wwshopconfiguration/global_configurations`, `GET /global_configuration_types/eula/global_configurations/*`

Serves global client configuration (calendar flags, shop configuration, EULA).

### Leaderboards
**Path:** `src/modules/leaderboards/`
**Routes:** `GET /ssc/invoke/get_gm_leaderboards`

Returns grandmaster leaderboard data. Currently serves static data.

### Lobby
**Path:** `src/modules/lobby/`
**Routes:** `PUT /ssc/invoke/create_party_lobby`, `PUT /ssc/invoke/set_lobby_joinable`, `PUT /ssc/invoke/set_lobby_not_joinable`, `PUT /ssc/invoke/set_ready_for_lobby`, `PUT /ssc/invoke/lock_lobby_loadout`, `PUT /ssc/invoke/set_mode_for_lobby`
**WebSocket:** `lobby.ws.ts`

Manages party lobbies for pre-game grouping:
- **Create** — Creates a new lobby stored in Redis with the creator as leader
- **Join/Leave** — Players join lobby teams; presence is updated
- **Ready Up** — Players signal readiness
- **Lock Loadout** — Players lock their character/skin selection, updating their player config
- **Set Mode** — Leader changes the match type (1v1, 2v2, FFA, etc.)
- **Real-time updates** — Lobby state changes are broadcast to all lobby members via Redis Pub/Sub → WebSocket

### Matches
**Path:** `src/modules/matches/`
**Routes:** `GET /matches/all/:id`, `PUT /matches/:lobbyId`, `PUT /ssc/invoke/submit_end_of_match_stats`, `POST /mvsi_register`, `POST /mvsi_end_match`

Handles match lifecycle:
- **Match history** — Retrieves past match results
- **Lobby state updates** — Updates lobby state during matchmaking
- **End-of-match stats** — Processes post-match statistics
- **Game server registration** (`/mvsi_register`) — Internal endpoint for game servers to register and receive match configuration (map, players, game mode, CRC)
- **Match completion** (`/mvsi_end_match`) — Internal endpoint for game servers to report match end, triggers cleanup and notifications

### Matchmaking
**Path:** `src/modules/matchmaking/`
**Routes:** `POST /matches/matchmaking/{1v1,2v2,ffa,casual}-retail/request`, `POST /matches/matchmaking/request/:matchId/cancel`, `PUT /ssc/invoke/perks_lock`, `PUT /ssc/invoke/perks_absent`, `PUT /ssc/invoke/rematch_decline`, `PUT /ssc/invoke/toast_player`
**Worker:** `matchmaking.worker.ts`
**WebSocket:** `matchmaking.ws.ts`

The most complex module. Full matchmaking pipeline:

1. **Request** — Player/lobby submits a matchmaking request for a specific mode
2. **Queue** — A `MatchmakingTicket` is created and pushed onto the Redis queue for that mode
3. **Worker polling** — The background worker checks queues every 2 seconds
4. **Match creation** — When enough tickets are found, the worker:
   - Fetches player configs from Redis
   - Assigns teams based on the game mode
   - Selects a random map
   - Creates an `ActiveMatch` in Redis
   - Publishes "match found" via Pub/Sub
5. **Perk locking** — Players lock their perks; when all players have locked, a notification is sent
6. **Game server ready** — When the game server reports readiness, connection details are sent to players
7. **Match end** — Game server reports completion; players are notified and state is cleaned up
8. **Cancellation** — Players can cancel before a match is formed

**Redis Pub/Sub channels used:** `matchmaking:matchfound`, `matchmaking:serverready`, `matchmaking:complete`, `matchmaking:cancel`, `matchmaking:matchend`, `matchmaking:perkslocked`

### Milestones
**Path:** `src/modules/milestones/`
**Routes:** `GET /ssc/invoke/get_milestone_reward_tracks`

Returns milestone/reward track data for the account. Currently serves static data.

### Missions
**Path:** `src/modules/missions/`
**Routes:** `POST /ssc/invoke/get_or_create_mission_object`, `POST /ssc/invoke/claim_mission_rewards`

Manages daily/weekly missions. Creates mission objects with objectives and handles reward claiming.

### Perks
**Path:** `src/modules/perks/`
**Routes:** `GET /ssc/invoke/perks_get_all_pages`, `PUT /ssc/invoke/perks_set_character_page`

Manages perk loadout pages per character. Players can create named perk pages with different perk combinations for each character and switch between them.

### Personalized Shop
**Path:** `src/modules/personalizedShop/`
**Routes:** `GET /layout/dokken-layout-type/personalized/{variant}/:id`

Serves personalized shop layouts with multiple variants:
- Main variant, account cosmetics, battlepass, currency, fighter road, fighter, prestige, rift, skin variants
- Each variant returns static layout data for the in-game shop UI

### Player Config
**Path:** `src/modules/playerConfig/`

Service-only module (no direct routes). Manages per-player runtime configuration stored in Redis:
- Character, skin, taunts, perks, gems, banner, profile icon, ringout VFX, stat trackers
- Bot settings, team/player indices, gameplay preferences
- Updated when players change loadouts or equip cosmetics

### Player Presence
**Path:** `src/modules/playerPresence/`

Service-only module (no direct routes). Manages player online status in Redis:
- **Status**: online/offline
- **Lobby ID**: Current lobby the player is in
- **Profile ID**: Player's public profile ID
- **IP Address**: Player's connection IP
- Cleared on WebSocket disconnect (all player keys removed from Redis)

### Preferences
**Path:** `src/modules/preferences/`
**Routes:** `GET /objects/preferences/unique/:id/:id1`

Returns user global preferences including:
- Per-character preferences (default skins and taunts)
- Control preferences (controller scheme)
- Global equippables (announcer pack, banner, ringout VFX, stat trackers)
- Online preferences (auto-party, crossplay, DMCA mode)
- UI preferences

### Profiles
**Path:** `src/modules/profiles/`
**Routes:** `PUT /profiles/bulk`, `GET /profiles/search_queries/get-by-username/run`, `PUT /profiles/:id/inventory`

Handles player profile operations:
- **Bulk lookup** — Retrieve multiple player profiles by ID
- **Search** — Find players by username
- **Inventory** — Returns all unlocked characters and Gleamium (premium currency) data

### Rifts
**Path:** `src/modules/rifts/`
**Routes:** `PUT /ssc/invoke/create_rift_lobby`, `GET /ssc/invoke/load_rifts`

Manages Rift game mode (PvE/special mode):
- Creates rift-specific lobbies with chapter data and difficulty settings
- Loads rift configuration data (chapters, nodes, runtime data)
- Rift lobbies extend the base lobby type with additional rift-specific fields
- Rift data is defined in `src/data/rifts.ts`

### Sessions
**Path:** `src/modules/sessions/`
**Routes:** `POST /sessions/auth/token`

Handles session token exchange. Verifies a JWT code and returns an access token with account details and SDK configuration.

---

## Data Layer

### Static Data Files (`src/data/`)

These files contain hardcoded game data used for configuration and asset loading:

| File | Purpose |
|------|---------|
| `characters.ts` | Character slug definitions and unlock-all helper |
| `config.ts` | CRC version management with MongoDB change stream watching |
| `emots.ts` | Emote definitions |
| `eventQueue.ts` | Event queue configuration |
| `gameModes.ts` | Game mode configuration data (sent to clients) |
| `gems.ts` | Gem definitions |
| `gemsBuffs.ts` | Gem buff effect definitions |
| `gleamium.ts` | Premium currency (Gleamium) data |
| `inventoryDefs.ts` | Complete inventory item definitions with asset paths |
| `maps.ts` | Map pools and rotation configurations for all game modes |
| `milestones.ts` | Milestone reward track data |
| `missionContainers.ts` | Mission container definitions |
| `missionControllers.ts` | Mission controller logic |
| `missionList.ts` | Available mission definitions |
| `missionObjectives.ts` | Mission objective definitions |
| `missions.ts` | Mission system configuration |
| `perks.ts` | Perk definitions |
| `perksSet.ts` | Perk set/page data |
| `rankSettings.ts` | Ranked mode tier/division settings |
| `rifts.ts` | Rift mode configuration (chapters, nodes, runtime data) |
| `skins.ts` | Enabled skin definitions |
| `xpMultiplier.ts` | XP multiplier settings |

### Data Asset Sync

The server supports hot-reloading of data assets via two sync mechanisms:
1. **`POST /syncAsset`** (in `gameConfig.route.ts`) — Accepts asset updates, upserts to MongoDB, reloads in-memory cache, and increments CRC
2. **`src/dataAssetSync.ts`** — Express-based sync router (legacy) with the same functionality
3. **CRC Change Streams** — MongoDB change streams automatically propagate config changes to running server instances

---

## Project Structure

```
src/
├── entry.ts                    # Main entry point (process mode selector)
├── index.elysia.ts             # HTTP server setup and initialization
├── websocket.elysia.ts         # WebSocket server with Hydra protocol handling
├── websocketStart.ts           # WebSocket server bootstrap
├── workerStart.ts              # Matchmaking worker bootstrap
├── loader.ts                   # Initial data asset loader (run once)
├── loadAssets.ts               # In-memory asset cache management
├── dataAssetSync.ts            # Express-based data asset sync (legacy)
├── steam.ts                    # Steam API integration (ticket validation, user fetching)
├── types.ts                    # Shared Hydra query types
├── middleware/
│   └── middlewares.ts          # Elysia plugins (Hydra parsing, JWT auth, MAIN_APP)
├── utils/
│   └── date.ts                 # Date utility (Unix timestamp conversion)
├── data/                       # Static game data files
│   ├── characters.ts
│   ├── config.ts
│   ├── maps.ts
│   └── ... (20+ data files)
└── modules/                    # Feature modules
    ├── access/                 # Authentication & login
    ├── account/                # Account data & ranked stats
    ├── batch/                  # Batch API requests
    ├── calendar_events/        # In-game events & announcements
    ├── commerce/               # Shop products & purchases
    ├── cosmetics/              # Player cosmetic items
    ├── drive/                  # Asset sync to client
    ├── friends/                # Friend system & invitations
    ├── gameConfig/             # Game configuration & CRC management
    ├── gameModes/              # Game mode definitions
    ├── global_configuration/   # Global client config
    ├── leaderboards/           # Ranked leaderboards
    ├── lobby/                  # Party lobby management
    ├── matches/                # Match lifecycle & game server communication
    ├── matchmaking/            # Matchmaking queues, workers & real-time events
    ├── milestones/             # Milestone reward tracks
    ├── missions/               # Daily/weekly missions
    ├── perks/                  # Perk loadout pages
    ├── personalizedShop/       # In-game shop layouts
    ├── playerConfig/           # Runtime player config (Redis)
    ├── playerPresence/         # Player online status (Redis)
    ├── preferences/            # User preferences
    ├── profiles/               # Player profiles & inventory
    ├── rifts/                  # Rift PvE game mode
    └── sessions/               # Session token exchange
```
