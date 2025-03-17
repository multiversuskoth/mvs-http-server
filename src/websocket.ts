import { WebSocket, WebSocketServer } from "ws";
import { MVSHTTPServer } from "./server";
import { randomUUID } from "crypto";
import { HydraDecoder } from "mvs-dump";

interface WebSocketPlayer {
  init: boolean;
  ws: WebSocket;
}

const clients: Map<string, WebSocketPlayer> = new Map();

const pingBuffer = Buffer.from([0x0c]);

export function startWebsocketServer() {
  const ws = new WebSocketServer({ server: MVSHTTPServer });
  ws.on("connection", (ws) => {
    const clientID = randomUUID();
    console.log("Client connected");
    const playerWS: WebSocketPlayer = {
      init: false,
      ws,
    };
    clients.set(clientID, playerWS);

    ws.on("message", (message) => {
      if (!playerWS.init) {
        let buffer = Buffer.from([
          0x09, 0x01, 0x00, 0x24, 0x39, 0x35, 0x34, 0x65, 0x37, 0x37, 0x36, 0x30, 0x2d, 0x35, 0x33, 0x39, 0x62, 0x2d, 0x34, 0x33, 0x36, 0x63, 0x2d,
          0x61, 0x35, 0x37, 0x64, 0x2d, 0x62, 0x35, 0x36, 0x32, 0x33, 0x66, 0x36, 0x37, 0x61, 0x37, 0x34, 0x64,
        ]);
        playerWS.init = true;
        ws.send(buffer);
        console.log("Confirm Connected");
      }

      setInterval(() => {
        ws.send(pingBuffer);
      }, 5000);
    });

    ws.on("close", () => {
      clients.delete(clientID);
      console.log("Client disconnected");
    });

    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
    });
  });
}
