import { startRedis } from "./config/redis";
import { RollbackServer } from "./game/udp";
import { startMatchMakingWorker } from "./matchmaking-worker";

import { MVSHTTPServer, start } from "./server";
import { WebSocketService } from "./websocket";
startRedis().then(() => {
  start();
  //const websocket = new WebSocketService(MVSHTTPServer);
  //startMatchMakingWorker();
});

//const gameServer = new RollbackServer();
