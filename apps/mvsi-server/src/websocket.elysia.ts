import { env } from "@mvsi/env";
import { HydraDecoder, HydraEncoder } from "@mvsi/hydra";
import { logger } from "@mvsi/logger";
import { initRedisSubscriber, type RedisClient } from "@mvsi/redis";
import Elysia, { t } from "elysia";
import type { ElysiaWS } from "elysia/ws";
import type { ServerWebSocket } from "elysia/ws/bun";
import * as jwt from "jsonwebtoken";
import type { JWT_CLAIMS } from "./middleware/middlewares";
import { deleteLobby } from "./modules/lobby/lobby.service";
import { removeTicketsFromQueue, stopMatchTick } from "./modules/matchmaking/matchmaking.service";
import { MATCH_TYPES, type MatchmakingTicket } from "./modules/matchmaking/matchmaking.types";
import { clearPlayerKeys } from "./modules/playerPresence/playerPresence.service";

const PING_BUFFER = Buffer.from([0x0c]);

type WebSocketData = {
  account: JWT_CLAIMS | undefined;
  init: boolean;
  deleted?: boolean;
  matchTick: NodeJS.Timeout | undefined;
  ticket?: MatchmakingTicket;
  lobbyId?: string;
  ip: string;
};

type DecoreatedWebsocket = {
  players: Map<string, MVSI_Websocket>;
  redisSub: RedisClient;
  sendHydra: (ws: ServerWebSocket<WebSocketData>, data: Object) => void;
};

export type MVSI_Websocket = ElysiaWS<WebSocketData & DecoreatedWebsocket>;

const sendHydra = new Elysia({ name: "sendHydra" }).derive({ as: "global" }, () => {
  return {
    sendHydra: (ws: ServerWebSocket<WebSocketData>, data: Object) => {
      if (!ws.data.deleted) {
        const encoder = new HydraEncoder(true);
        encoder.encodeValue(data);
        ws.send(encoder.returnValue());
      }
    },
  };
});

export const MAIN_WEBSOCKET = new Elysia()
  .get("/", () => "HTTP server is running\n")
  .macro("withData", {
    async resolve() {
      const data: WebSocketData = {
        account: undefined,
        init: false,
        deleted: false,
        matchTick: undefined,
        ip: "",
      };
      return data;
    },
  })
  .decorate("players", new Map<string, MVSI_Websocket>())
  .decorate("redisSub", initRedisSubscriber())
  .use(sendHydra)
  .ws("/*", {
    withData: true,
    body: t.Uint8Array(),
    open(ws) {
      const ip = ws.remoteAddress.replace(/^::ffff:/, "");
      ws.data.ip = ip;
    },
    sendPings: true,

    close(ws) {
      if (ws.data.account) {
        ws.data.deleted = true;
        stopMatchTick(ws);
        attemptRemoveMatchTicket(ws);
        if (ws.data.lobbyId) {
          deleteLobby(ws.data.lobbyId, ws.data.account.id);
        }
        clearPlayerKeys(ws.data.account.id);
        ws.data.players.delete(ws.data.account.id);
        logger.info(`Player ${ws.data.account.id} disconnected`);
      }
    },
    async message(ws, message) {
      const data = ws.data;
      if (!data.init) {
        await handleHandshake(ws, Buffer.from(message));
        ws.subscribe("heartbeat");
        // Need to send ping to client or client will disconnect
        ws.sendBinary(PING_BUFFER);
      }
    },
    error({ error }) {
      logger.error(error);
    },
  });

handleHeartBeats();

function handleHeartBeats() {
  setInterval(() => {
    MAIN_WEBSOCKET.server?.publish("heartbeat", PING_BUFFER);
  }, 20000);
}

function attemptRemoveMatchTicket(ws: MVSI_Websocket) {
  if (ws.data.ticket) {
    const ticket = ws.data.ticket;
    Object.values(MATCH_TYPES).forEach((value) => {
      removeTicketsFromQueue(value, [ticket]);
    });
  }
}

async function handleHandshake(playerWS: MVSI_Websocket, message: Buffer) {
  const decodedBody = parseInitHydraWebsocketMessage(message);
  // Send ID, hard coded for now
  const buffer = Buffer.from([
    0x09, 0x01, 0x00, 0x24, 0x39, 0x35, 0x34, 0x65, 0x37, 0x37, 0x36, 0x30, 0x2d, 0x35, 0x33, 0x39,
    0x62, 0x2d, 0x34, 0x33, 0x36, 0x63, 0x2d, 0x61, 0x35, 0x37, 0x64, 0x2d, 0x62, 0x35, 0x36, 0x32,
    0x33, 0x66, 0x36, 0x37, 0x61, 0x37, 0x34, 0x64,
  ]);
  playerWS.data.init = true;
  playerWS.data.account = decodedBody.account;
  playerWS.sendBinary(buffer);
  if (playerWS.data.account) {
    playerWS.data.players.set(playerWS.data.account.id, playerWS);
    logger.info(`Player ${playerWS.data.account.id} connected to websocket`);
  }
}

// CHATGPT really figure this one out... Hats off to CHATGPT
export function parseInitHydraWebsocketMessage(buf: Buffer): { account: JWT_CLAIMS; id: string } {
  // 1) JWT length prefix at byte 0x13 (19)
  const jwtLen = buf.readUInt16BE(0x13);

  // 2) extract JWT string
  const jwtStart = 0x15;
  const jwtEnd = jwtStart + jwtLen;

  const token = jwt.verify(buf.toString("utf8", jwtStart, jwtEnd), env.SESSION_SECRET);

  // 3) extract the next 12 raw bytes as `id`
  // IT FIGURE OUT THAT THIS WAS AN ID!!! NEVER would of seen this one
  const idLenght = jwtEnd + 12;
  const idBuf = buf.subarray(jwtEnd, idLenght);
  const id = idBuf.toString("hex");

  // 4) now the TLV payload starts at the connection object:
  //    byte 0x1d1 is the MAP8 (0x60) that opens your
  //    { connection: { … } } block.
  const hydraObectStart = idLenght;

  // reuse your existing TLV decoder (from the last snippet)
  const rest = new HydraDecoder(buf.subarray(hydraObectStart)).readValue();

  return {
    account: token,
    id,
    ...rest,
  };
}
