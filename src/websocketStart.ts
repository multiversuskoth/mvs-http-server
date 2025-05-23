import { startRedis } from "./config/redis";

import { WebSocketService } from "./websocket";
import * as http from "http";
import * as fs from "fs";
import path from "path";

// Create HTTP server
const options = {
  key: fs.readFileSync(path.join(__dirname, "../dokken-api.wbagora.com-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../dokken-api.wbagora.com.pem")),
};
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("HTTP server is running\n");
});
const websocket = new WebSocketService(server);
startRedis().then(() => {
  // Start the HTTP server on port 3000
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`WebSocket server is listening on port ${PORT}`);
  });
});
