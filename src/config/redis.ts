import ObjectID from "bson-objectid";
import redis, { createClient } from "redis";
import type { RedisClientType } from "redis";
import { logger } from "./logger";
import env from "../env/env";
import { MATCH_TYPES } from "../services/matchmakingService";

const redisConfig = {
  username: env.REDIS_USERNAME,
  password: env.REDIS_PW,
  socket: {
    host: env.REDIS,
    port: env.REDIS_PORT,
  },
};

export const ON_GAMEPLAY_CONFIG_NOTIFIED_CHANNEL = "match:notifications";
export const ALL_PERKS_LOCKED_CHANNEL = "perks:notifications";
export const GAME_SERVER_INSTANCE_READY_CHANNEL = "game_server_ready:notifications";
export const MATCHMAKING_COMPLETE_CHANNEL = "matchmaking:complete";
export const ON_LOBBY_MODE_UPDATED = "OnLobbyModeUpdated";
export const ON_MATCH_MAKER_STARTED_CHANNEL = "party:queued";
export const ON_CANCEL_MATCHMAKING = "matchmaking:cancel";
export const ON_END_OF_MATCH = "match:end";

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
  isHost: boolean;
  ip: string;
}

export interface MVS_NOTIFICATION {}

export interface ON_MATCH_MAKER_STARTED_NOTIFICATION extends MVS_NOTIFICATION {
  party_size: number;
  players: RedisMatchPlayer[];
  created_at: number;
  partyId: string;
  matchmakingRequestId: string;
  matchType: MATCH_TYPES;
  partyLeaderId: string;
}

export interface MATCH_FOUND_NOTIFICATION extends MVS_NOTIFICATION {
  players: RedisTeamEntry[];
  matchId: string;
  matchKey: string;
  map: string;
  mode: string;
}

export interface RedisMatchEndNotification extends MVS_NOTIFICATION {
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
  ip: string;
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

export interface RedisOnGameModeUpdatedNotification {
  lobbyId: string;
  playersIds: string[];
  modeString: string;
}

export interface RedisCancelMatchMakingNotification {
  playersIds: string[];
  matchmakingId: string;
}

const MATCH_KEY = (containerMatchId: string) => `match:${containerMatchId}`;
const MATCH_PERKS_KEY = (containerMatchId: string) => `${MATCH_KEY(containerMatchId)}:perks`;
const MATCH_PERKS_PLAYER_KEY = (containerMatchId: string, playerId: string) => `${MATCH_KEY(containerMatchId)}:perks:${playerId}`;

export async function redisCreatePartyLobby() {}

export async function redisSaveEquippedComsetics(playerId: string, data: RedisEquippedCosmetics) {
  await redisClient.set(`player:${playerId}:cosmetics`, JSON.stringify(data));
}

export async function redisGetAllPlayersEquippedComsetics(playerIds: string[]) {
  const multi = redisClient.multi();
  for (const playerId of playerIds) {
    multi.get(`player:${playerId}:cosmetics`);
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
  const cosmeticsStr = await redisClient.get(`player:${playerId}:cosmetics`);
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
    logger.info(`Removed ticket ${ticket.partyId} from ${queueType} queue for match`);
  }
  await multi.exec();
}

export async function redisUpdatePlayerLoadout(playerId: string, character: string, skin: string, ip: string) {
  await redisClient.hSet(`player:${playerId}`, { character, skin, ip });
}

export async function redisUpdatePlayerStatus(playerId: string, status: string) {
  await redisClient.hSet(`player:${playerId}`, { status: status });
}

export async function redisPushTicketToQueue(queueKey: string, data: RedisMatchTicket) {
  await redisClient.lPush(queueKey, JSON.stringify(data));
}

export async function redisOnMatchMakerStarted(notification: ON_MATCH_MAKER_STARTED_NOTIFICATION) {
  await redisClient.publish(ON_MATCH_MAKER_STARTED_CHANNEL, JSON.stringify(notification));
}

export async function redisOnGameplayConfigNotified(notification: MATCH_FOUND_NOTIFICATION) {
  const EX = 60 * 20;
  await redisClient.set(notification.matchId, JSON.stringify(notification), { EX });
  await redisClient.publish(ON_GAMEPLAY_CONFIG_NOTIFIED_CHANNEL, JSON.stringify(notification));
}

export async function redisGetMatchConfig(matchId: string) {
  const res = await redisClient.get(matchId);
  return JSON.parse(res as string) as MATCH_FOUND_NOTIFICATION;
}

export async function redisPublisdEndOfMatch(playerIds: string[], matchId: string) {
  const notification: RedisMatchEndNotification = {
    playersIds: playerIds,
    matchId,
  };
  logger.trace("Publishing ON_END_OF_MATCH");
  await redisClient.publish(ON_END_OF_MATCH, JSON.stringify(notification));
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
  const EX = 60 * 20;
  await redisClient.set(MATCH_KEY(containerMatchId), JSON.stringify(match), { EX });
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
  logger.info(`All perks locked ${containerMatchId}, players, (${playerIds.join(",")})`);
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
export async function redisDeletePlayerKeys(playerId: string): Promise<void> {
  const pattern = `player:${playerId}*`;
  let cursor = 0;

  do {
    const result = await redisClient.scan(cursor, {
      MATCH: pattern,
      COUNT: 100,
    });

    cursor = Number(result.cursor);
    const keys = result.keys;

    if (keys.length > 0) {
      await redisClient.del(keys);
      console.log(`Deleted keys:`, keys);
    }
  } while (cursor !== 0);

  console.log(`All keys matching "${pattern}" have been deleted.`);
}
