import { startRedis } from "./config/redis";

import { start } from "./server";

startRedis().then(() => {
  start();
});

