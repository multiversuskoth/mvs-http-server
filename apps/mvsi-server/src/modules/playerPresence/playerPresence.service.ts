import { redisClient } from "@mvsi/redis";
import type { PlayerPresence } from "./playerPresence.types";

export async function setPlayerPresence(playerId: string, presence: PlayerPresence) {
  await redisClient.hSet(`player:${playerId}`, presence as unknown as Record<string, string>);
}

export async function setPlayerStatus(playerId: string, status: string) {
  await redisClient.hSet(`player:${playerId}`, { status: status });
}

export async function getPlayerStatus(playerId: string) {
  const status = await redisClient.hGet(`player:${playerId}`, "status");
  return status;
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
    `player:${playerId}:presence`,
    `player:${playerId}:rifts`,
    `player:${playerId}:config`,
    `player:${playerId}:cosmetics`,
    `player:${playerId}:lobby`,
  ];

  await redisClient.del(keysToDelete);

  console.log(`Disconnected players deleted all keys for player ${playerId}.`);
}
