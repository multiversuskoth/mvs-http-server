import { WebSocket, WebSocketServer } from "ws";
import { MVSHTTPServer } from "./server";
import { randomUUID } from "crypto";
import { HydraDecoder } from "mvs-dump";

export class WebSocketPlayer {
  init: boolean = false;
  ws: WebSocket;
  deleted?: boolean;

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

const pingBuffer = Buffer.from([0x0c]);

export function startWebsocketServer() {
  const ws = new WebSocketServer({ server: MVSHTTPServer });
  ws.on("connection", (ws) => {
    const clientID = randomUUID();
    console.log("Client connected");
    const playerWS = new WebSocketPlayer(ws);
    websocket_clients.set(clientID, playerWS);

    ws.on("message", (message) => {
      if (!playerWS.init) {
        // Send ID, hard coded for now
        let buffer = Buffer.from([
          0x09, 0x01, 0x00, 0x24, 0x39, 0x35, 0x34, 0x65, 0x37, 0x37, 0x36, 0x30, 0x2d, 0x35, 0x33, 0x39, 0x62, 0x2d, 0x34, 0x33, 0x36, 0x63, 0x2d,
          0x61, 0x35, 0x37, 0x64, 0x2d, 0x62, 0x35, 0x36, 0x32, 0x33, 0x66, 0x36, 0x37, 0x61, 0x37, 0x34, 0x64,
        ]);
        playerWS.init = true;
        playerWS.send(buffer);
        console.log("Confirm Connected");
      }

      // Need to send ping to client or client will disconnect
      setInterval(() => {
        playerWS.send(pingBuffer);
      }, 20000);
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
