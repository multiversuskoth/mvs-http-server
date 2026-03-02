import { redisClient } from "@mvsi/redis";
import type { PlayerPresence } from "./playerPresence.types";
import { logger } from "@mvsi/logger";

const PLAYER_PRESENCE_ONLINE_TTL = 60;

export async function setPlayerPresence(playerId: string, presence: PlayerPresence) {
  await redisClient.hSet(`player:${playerId}`, presence as unknown as Record<string, string>);
  await redisClient.expire(`player:${playerId}`, PLAYER_PRESENCE_ONLINE_TTL);
}

export async function refreshPlayerPresence(playerId: string) {
  await redisClient.expire(`player:${playerId}`, PLAYER_PRESENCE_ONLINE_TTL);
}

export async function refreshPlayersPresence(playerIds: string[]) {
  // All commands are sent in one batch automatically
  await Promise.all(
    playerIds.map((playerId) =>
      redisClient.expire(`player:${playerId}`, PLAYER_PRESENCE_ONLINE_TTL),
    ),
  );
}

export async function getPlayersPresence(playerIds: string[]) {
  const multi = redisClient.multi();
  for (const playerId of playerIds) {
    multi.hGetAll(`player:${playerId}`);
  }
  const players = (await multi.exec()) as unknown as PlayerPresence[];

  return players;
}

export async function updatePlayerStatus(playerId: string, status: string) {
  await redisClient.hSet(`player:${playerId}`, { status: status });
}

export async function clearPlayerKeys(playerId: string): Promise<void> {
  const keysToDelete = [
    `player:${playerId}`,
    `player:${playerId}:rifts`,
    `player:${playerId}:config`,
    `player:${playerId}:cosmetics`,
    `player:${playerId}:lobby`,
  ];

  await redisClient.del(keysToDelete);

  logger.verbose(`Disconnected players deleted all keys for player ${playerId}.`);
}
