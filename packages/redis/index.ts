import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import type redis from "redis";
import type { RedisClientType } from "redis";
import { createClient } from "redis";

export type RedisClient = RedisClientType<
  redis.RedisModules,
  redis.RedisFunctions,
  redis.RedisScripts
>;

// Create Redis client
export const redisClient = createClient({ url: env.REDIS_URI });
export async function startRedis() {
  // Set up event handlers
  redisClient.on("connect", () => {
    logger.info("Connected to Redis");
  });

  redisClient.on("error", (err) => {
    logger.error(`Redis error: ${err}`);
  });

  await redisClient.connect();
}

let redisSub: RedisClient | null = null;

// Create a separate client for subscribing
export function initRedisSubscriber() {
  if (!redisSub) {
    redisSub = redisClient.duplicate();
    redisSub.connect();
    redisSub.on("connect", (err) => logger.info("Connected to SUB Redis"));
    redisSub.on("error", (err) => logger.error(err));
  }
  return redisSub;
}
