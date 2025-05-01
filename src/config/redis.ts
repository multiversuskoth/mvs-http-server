import ObjectID from "bson-objectid";
import redis, { createClient } from "redis";
import type { RedisClientType } from "redis";
import { logger } from "./logger";

const redisConfig = {
  username: "default",
  password: "CjBT1Zx0aIuF3zYe5sivhoqVaIXFTSqQ",
  socket: {
    host: "redis-17157.c263.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 17157,
  },
};

export const ON_GAMEPLAY_CONFIG_NOTIFIED_CHANNEL = "match:notifications";
export const ALL_PERKS_LOCKED_CHANNEL = "perks:notifications";
export const GAME_SERVER_INSTANCE_READY_CHANNEL = "game_server_ready:notifications";
export const MATCHMAKING_COMPLETE_CHANNEL = "matchmaking:complete";
export const ON_MATCH_MAKER_STARTED_CHANNEL = "party:queued";

export type RedisClient = RedisClientType<redis.RedisModules, redis.RedisFunctions, redis.RedisScripts>;

// Create Redis client
export const redisClient = createClient(redisConfig);
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
    redisSub.on("error", (err) => console.error(err));
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

export interface RedisTeamEntry {
  playerId: string;
  partyId: string;
  playerIndex: number;
  teamIndex: 0 | 1;
}

export interface MVS_NOTIFICATION {}

export interface ON_MATCH_MAKER_STARTED_NOTIFICATION extends MVS_NOTIFICATION {
  playerIds: string[];
  matchmakingRequestId: string;
  partyId: string;
}

export interface MATCH_FOUND_NOTIFICATION extends MVS_NOTIFICATION {
  players: RedisTeamEntry[];
  matchId: string;
  matchKey: string;
  map: string;
  mode: string;
}
export interface ALL_PERKS_LOCK_NOTIFICATION extends MVS_NOTIFICATION {
  playersIds: string[];
  matchId: string;
}

type RedisStatTrackerEntry = [statKey: string, statValue: number];

export interface RedisPlayerConfig {
  taunts: string[];
  RingoutVfx: string;
  Character: string;
  Banner: string;
  StatTrackers: RedisStatTrackerEntry[];
  Perks: string[];
}

export interface RedisAllPerksLockedNotification {
  containerMatchId: string;
  playerIds: string[];
}

export interface RedisGameServerInstanceReadyNotification {
  containerMatchId: string;
  resultId: string;
  playerIds: string[];
}

export interface RedisMatchMakingCompleteNotification {
  containerMatchId: string;
  matchmakingRequestId: string;
  resultId: string;
  playerIds: string[];
}

export interface RedisPlayer {
  status: string;
  character: string;
  skin: string;
}

export interface RedisEquippedCosmetics {
  Taunts: {
    [character: string]: {
      TauntSlots: string[];
    };
  };
  AnnouncerPack: string;
  Banner: string;
  StatTrackers: {
    StatTrackerSlots: string[];
  };
  RingoutVfx: string;
  Gems: {
    GemSlots: string[];
  };
}

const MATCH_KEY = (containerMatchId: string) => `match:${containerMatchId}`;
const MATCH_PERKS_KEY = (containerMatchId: string) => `${MATCH_KEY(containerMatchId)}:perks`;
const MATCH_PERKS_PLAYER_KEY = (containerMatchId: string, playerId: string) => `${MATCH_KEY(containerMatchId)}:perks:${playerId}`;

export async function redisCreatePartyLobby() {}

export async function redisSaveEquippedComsetics(playerId: string, data: RedisEquippedCosmetics) {
  await redisClient.set(`cosmetics:${playerId}`, JSON.stringify(data));
}

export async function redisGetAllPlayersEquippedComsetics(playerIds: string[]) {
  const multi = redisClient.multi();
  for (const playerId of playerIds) {
    multi.get(`cosmetics:${playerId}`);
  }
  const cosmeticsStrArray = await multi.exec();
  const comsetics = cosmeticsStrArray.map((str) => JSON.parse(str as string) as RedisEquippedCosmetics);

  return comsetics;
}

export async function redisGetPlayers(playerIds: string[]) {
  const multi = redisClient.multi();
  for (const playerId of playerIds) {
    multi.hGetAll(`player:${playerId}`);
  }
  const players = (await multi.exec()) as unknown as RedisPlayer[];

  return players;
}

export async function redisGetEquippedComsetics(playerId: string) {
  const cosmeticsStr = await redisClient.get(`cosmetics:${playerId}`);
  if (cosmeticsStr) {
    return JSON.parse(cosmeticsStr) as RedisEquippedCosmetics;
  }
  return null;
}

export async function redisGetMatchTickets(queueKey: string) {
  const ticketsStr = await redisClient.lRange(queueKey, 0, -1);
  const tickets = ticketsStr.map((t) => JSON.parse(t) as RedisMatchTicket);
  return tickets;
}

export async function redisPopMatchTicketsFromQueue(queueType: string, tickets: RedisMatchTicket[]) {
  const multi = redisClient.multi();
  for (const ticket of tickets) {
    multi.lRem(queueType, 0, JSON.stringify(ticket));
    logger.info(`Removed ticket ${ticket.partyId} from 1v1 queue for match`);
  }
  await multi.exec();
}

export async function redisUpdatePlayerLoadout(playerId: string, character: string, skin: string) {
  await redisClient.hSet(`player:${playerId}`, { character, skin });
}

export async function redisUpdatePlayerStatus(playerId: string, status: string) {
  await redisClient.hSet(`player:${playerId}`, { status: status });
}

export async function redisPushTicketToQueue(queueKey: string, data: RedisMatchTicket) {
  await redisClient.lPush(queueKey, JSON.stringify(data));
}

export async function redisOnMatchMakerStarted(matchmakingRequestId: string, partyId: string, playerIds: string[]) {
  const notification: ON_MATCH_MAKER_STARTED_NOTIFICATION = {
    matchmakingRequestId,
    partyId,
    playerIds,
  };
  await redisClient.publish(ON_MATCH_MAKER_STARTED_CHANNEL, JSON.stringify(notification));
}

export async function redisOnGameplayConfigNotified(notification: MATCH_FOUND_NOTIFICATION) {
  await redisClient.publish(ON_GAMEPLAY_CONFIG_NOTIFIED_CHANNEL, JSON.stringify(notification));
}

export async function redisGetPlayer(playerId: string) {
  const player = (await redisClient.hGetAll(`player:${playerId}`)) as unknown as RedisPlayer;
  return player;
}

export async function redisGetMatch(containerMatchId: string) {
  const matchStr = await redisClient.get(MATCH_KEY(containerMatchId));
  if (matchStr) {
    const redisMatch = JSON.parse(matchStr) as RedisMatch;
    return redisMatch;
  }
  return null;
}

export async function redisUpdateMatch(containerMatchId: string, match: RedisMatch) {
  await redisClient.set(MATCH_KEY(containerMatchId), JSON.stringify(match));
}

export async function redisLockPerks(data: RedisLockPerk) {
  const EX = 60 * 20;
  await redisClient.set(MATCH_PERKS_PLAYER_KEY(data.containerMatchId, data.playerId), JSON.stringify(data.perks), { EX });
}

export async function redisMatchMakingComplete(containerMatchId: string, matchmakingRequestId: string, playerIds: string[]) {
  const notification: RedisMatchMakingCompleteNotification = {
    containerMatchId,
    playerIds,
    matchmakingRequestId,
    resultId: ObjectID().toHexString(),
  };
  await redisClient.publish(MATCHMAKING_COMPLETE_CHANNEL, JSON.stringify(notification));
}

export async function redisGameServerInstanceReady(containerMatchId: string, playerIds: string[]) {
  const notification: RedisGameServerInstanceReadyNotification = {
    containerMatchId,
    playerIds,
    resultId: ObjectID().toHexString(),
  };
  await redisClient.publish(GAME_SERVER_INSTANCE_READY_CHANNEL, JSON.stringify(notification));
}

export async function redisPublishAllPerksLocked(containerMatchId: string, playerIds: string[]) {
  const notification: RedisAllPerksLockedNotification = { containerMatchId, playerIds };
  await redisClient.publish(ALL_PERKS_LOCKED_CHANNEL, JSON.stringify(notification));
}

export async function redisGetPlayerPerk(containerMatchId: string, playerId: string) {
  const playerPerkStr = await redisClient.GET(MATCH_PERKS_PLAYER_KEY(containerMatchId, playerId));
  if (playerPerkStr) {
    const playerPerk = JSON.parse(playerPerkStr) as string[];
    return playerPerk;
  }
  return null;
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
