import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { startRedis } from "@mvsi/redis";
import "./modules/matchmaking/matchmaking.ws"
import "./modules/lobby/lobby.ws";
import "./modules/friends/friends.ws";
import { MAIN_WEBSOCKET } from "./websocket.elysia";

startRedis().then(() => {
  const PORT = env.WEBSOCKET_PORT || 3000;
  MAIN_WEBSOCKET.listen(PORT);
  logger.info(`WebSocket server is listening on port ${PORT}`);
});
