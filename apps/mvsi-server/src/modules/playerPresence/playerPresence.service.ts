import type { PlayerPresence } from "./playerPresence.types";
import { redisClient } from "@mvsi/redis";
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
  console.log("Getting player presence for playerIds", playerIds);
  const multi = await redisClient.multi();
  for (const playerId of playerIds) {
    multi.hGetAll(`player:${playerId}`);
  }
  const results = (await multi.exec()) as unknown as PlayerPresence[];
  console.log("Fetched player presence for playerIds", playerIds, ":", results);
  const playersWithIds = playerIds
    .map((playerId, index) => {
      const data = results[index];

      // If the key didn't exist, Redis returns an empty object {} for hGetAll
      // We check if it's empty to avoid returning "ghost" players
      if (Object.keys(data).length === 0) return null;

      return {
        id: playerId, // Adding the key back here
        ...data,
      };
    })
    .filter((p) => p !== null); // Remove nulls if any IDs weren't found
  return playersWithIds;
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
  ];

  await redisClient.del(keysToDelete);

  logger.verbose(`Disconnected players deleted all keys for player ${playerId}.`);
}
