import { startRedis } from "./config/redis";
import { startMatchMakingWorker } from "./matchmaking-worker";
startRedis().then(() => {
  startMatchMakingWorker();
});
