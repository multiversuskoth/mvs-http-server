import { startRedis } from "@mvsi/redis";
import { startMatchMakingWorker } from "./modules/matchmaking/matchmaking.worker";

startRedis().then(() => {
  startMatchMakingWorker();
});
