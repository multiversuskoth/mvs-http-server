import Redis, { RedisClientType } from "redis";

const redisConfig = {
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD,
};

export const QUEUE_KEY_1V1 = 'matchmaking:queue:1v1';
export const QUEUE_KEY_2V2 = 'matchmaking:queue:2v2';

// Create Redis client
export const redisClient = Redis.createClient(redisConfig);

// Set up event handlers
redisClient.on("connect", () => {
  //logger.info('Connected to Redis');
});

redisClient.on("error", (err) => {
  //logger.error(`Redis error: ${err}`);
});

let redisSub:RedisClientType | null = null;

// Create a separate client for subscribing
export function initRedisSubscriber() {
  if(!redisSub) {
    return  redisClient.duplicate();
  }
  return redisSub;
}
