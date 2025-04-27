import { WebSocket, WebSocketServer } from "ws";
import { MVSHTTPServer } from "./server";
import { randomUUID } from "crypto";
import { HydraDecoder } from "mvs-dump";
import { buffer } from "stream/consumers";
import { decodeToken } from "./middleware/auth";
import { AccountToken } from "./handlers";
import { initRedisSubscriber } from "./config/redis";
import { Server } from "https";

export class WebSocketPlayer {
  init: boolean = false;
  ws: WebSocket;
  deleted?: boolean;
  account: AccountToken;

  constructor(_ws: WebSocket) {
    this.ws = _ws;
  }

  send(data: Buffer<ArrayBuffer>) {
    if (!this.deleted) {
      this.ws.send(data);
    }
  }
}

export const websocket_clients: Map<string, WebSocketPlayer> = new Map();

const redisSub = initRedisSubscriber();

const pingBuffer = Buffer.from([0x0c]);

export const MATCH_NOTIFICATION_CHANNEL = "match:notifications";
export const PLAYER_QUEUED_CHANNEL = "player:queued";
export const PLAYER_DEQUEUED_CHANNEL = "player:dequeued";

// CHATGPT really figure this one out... Hats off to CHATGPT
export function parseInitHydraWebsocketMessage(buf: Buffer): { account: AccountToken; id: string } {
  // 1) JWT length prefix at byte 0x13 (19)
  const jwtLen = buf.readUInt16BE(0x13);

  // 2) extract JWT string
  const jwtStart = 0x15;
  const jwtEnd = jwtStart + jwtLen;
  const jwt = decodeToken(buf.toString("utf8", jwtStart, jwtEnd));

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
    account: jwt,
    id,
    ...rest,
  };
}
export class WebSocketService {
  private ws: WebSocketServer;
  constructor(server: Server) {
    this.ws = new WebSocketServer({ server });
    this.setupSocketHandlers();
  }

  setupSocketHandlers() {
    this.ws.on("connection", (ws, request) => {
      const clientID = randomUUID();
      console.log("Client connected");
      const playerWS = new WebSocketPlayer(ws);
      websocket_clients.set(clientID, playerWS);

      ws.on("message", (message) => {
        let buffer: Buffer;

        // Check if the message is already a Buffer
        if (Buffer.isBuffer(message)) {
          buffer = message;

          const decodedBody = parseInitHydraWebsocketMessage(buffer);
          if (!playerWS.init) {
            // Send ID, hard coded for now
            let buffer = Buffer.from([
              0x09, 0x01, 0x00, 0x24, 0x39, 0x35, 0x34, 0x65, 0x37, 0x37, 0x36, 0x30, 0x2d, 0x35, 0x33, 0x39, 0x62, 0x2d, 0x34, 0x33, 0x36, 0x63,
              0x2d, 0x61, 0x35, 0x37, 0x64, 0x2d, 0x62, 0x35, 0x36, 0x32, 0x33, 0x66, 0x36, 0x37, 0x61, 0x37, 0x34, 0x64,
            ]);
            playerWS.init = true;
            playerWS.account = decodedBody.account;
            playerWS.send(buffer);
            console.log("Confirm Connected");
          }

          // Need to send ping to client or client will disconnect
          setInterval(() => {
            playerWS.send(pingBuffer);
          }, 20000);
        }
      });

      ws.on("close", () => {
        let client = websocket_clients.get(clientID);
        if (client) {
          client.deleted = true;
          websocket_clients.delete(clientID);
          console.log("Client disconnected");
        }
      });

      ws.on("error", (error) => {
        console.error("WebSocket error:", error);
      });
    });
  }
}
export function startWebsocketServer() {
  const ws = new WebSocketServer({ server: MVSHTTPServer });
  ws.on("connection", (ws, request) => {
    const a = request;
    const clientID = randomUUID();
    console.log("Client connected");
    const playerWS = new WebSocketPlayer(ws);
    websocket_clients.set(clientID, playerWS);

    ws.on("message", (message) => {
      let buffer: Buffer;

      // Check if the message is already a Buffer
      if (Buffer.isBuffer(message)) {
        buffer = message;

        const decodedBody = parseInitHydraWebsocketMessage(buffer);
        if (!playerWS.init) {
          // Send ID, hard coded for now
          let buffer = Buffer.from([
            0x09, 0x01, 0x00, 0x24, 0x39, 0x35, 0x34, 0x65, 0x37, 0x37, 0x36, 0x30, 0x2d, 0x35, 0x33, 0x39, 0x62, 0x2d, 0x34, 0x33, 0x36, 0x63, 0x2d,
            0x61, 0x35, 0x37, 0x64, 0x2d, 0x62, 0x35, 0x36, 0x32, 0x33, 0x66, 0x36, 0x37, 0x61, 0x37, 0x34, 0x64,
          ]);
          playerWS.init = true;
          playerWS.account = decodedBody.account;
          playerWS.send(buffer);
          console.log("Confirm Connected");
        }

        // Need to send ping to client or client will disconnect
        setInterval(() => {
          playerWS.send(pingBuffer);
        }, 20000);
      }
    });

    ws.on("close", () => {
      let client = websocket_clients.get(clientID);
      if (client) {
        client.deleted = true;
        websocket_clients.delete(clientID);
        console.log("Client disconnected");
      }
    });

    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
    });
  });
}
