import { RollbackServer } from "./game/udp";
import { start } from "./server";
import { startWebsocketServer } from "./websocket";

start();
startWebsocketServer();
//const gameServer = new RollbackServer();
