import { WebSocket, WebSocketServer } from "ws";
import { MVSHTTPServer } from "./server";
import { randomUUID } from "crypto";

const clients: Map<string, WebSocket> = new Map();

export function startWebsocketServer() {
  const ws = new WebSocketServer({ server: MVSHTTPServer });
  ws.on("connection", (ws) => {
    const clientID = randomUUID();
    console.log("Client connected");
    clients.set(clientID, ws);

    ws.on("message", (message) => {
      console.log(`Received: ${message}`);
      ws.send(`Server received: ${message}`); // Echo the message back to the client
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
