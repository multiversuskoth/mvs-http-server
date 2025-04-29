import Redis, { RedisClientType } from "redis";

const redisConfig = {
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD,
};

export const QUEUE_KEY_1V1 = "matchmaking:queue:1v1";
export const QUEUE_KEY_2V2 = "matchmaking:queue:2v2";

// Create Redis client
export const redisClient = Redis.createClient(redisConfig);

// Set up event handlers
redisClient.on("connect", () => {
  //logger.info('Connected to Redis');
});

redisClient.on("error", (err) => {
  //logger.error(`Redis error: ${err}`);
});

let redisSub: RedisClientType | null = null;

// Create a separate client for subscribing
export function initRedisSubscriber() {
  if (!redisSub) {
    return redisClient.duplicate();
  }
  return redisSub;
}

export interface RedisLockPerk {
  containerMatchId: string;
  playerId: string;
  perks: string[];
}

export interface RedisMatchPlayer {
  id: string;
  skill: number;
  region: string;
  //partyId: string;
}

export interface RedisMatchTicket {
  party_size: number;
  players: RedisMatchPlayer[];
  created_at: number;
  partyId: string;
  matchmakingRequestId: string;
}

export interface RedisMatch {
  matchId: string;
  resultId: string;
  tickets: RedisMatchTicket[];
  status: string;
  createdAt: number;
  matchType: string;
  totalPlayers: number;
}

const MATCH_KEY = (containerMatchId: string) => `match:${containerMatchId}`;
const MATCH_PERKS_KEY = (containerMatchId: string) => `${MATCH_KEY(containerMatchId)}:perks`;
const MATCH_PERKS_PLAYER_KEY = (containerMatchId: string, playerId: string) => `${MATCH_KEY(containerMatchId)}:perks:${playerId}`;

export async function redisLockPerks(data: RedisLockPerk) {
  const EX = 60 * 20;
  redisClient.set(MATCH_PERKS_PLAYER_KEY(data.containerMatchId, data.playerId), JSON.stringify(data.perks), { EX });
}

export async function redisGetAllLockedPerks(containerMatchId: string) {
  const matchStr = await redisClient.get(MATCH_KEY(containerMatchId));
  if (matchStr) {
    const redisMatch = JSON.parse(matchStr) as RedisMatch;
    const multi = redisClient.multi();

    const playersIds = redisMatch.tickets.flatMap((ticket) => ticket.players.map((player) => player.id));
    for (const playerId of playersIds) {
      multi.get(MATCH_PERKS_PLAYER_KEY(containerMatchId, playerId));
    }
    const results = await multi.exec();
    if (results) {
      let playerIndex = 0;
      const perks = results.map((reply) => {
        return { playerId: playersIds[playerIndex++], perks: JSON.parse(reply as string) as string[] };
      });
      return perks;
    }
  }
  throw new Error("Unable To Get All Player Perks");
}
