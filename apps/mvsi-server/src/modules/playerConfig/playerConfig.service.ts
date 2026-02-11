import { PlayerModel } from "@mvsi/database/models/Player";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getCosmeticsConfigurationForPlayer } from "../cosmetics/cosmetics.service";
import type { PlayerConfig } from "./playerConfig.types";

export async function setPlayerConfig(
  playerId: string,
  playerConfig: Omit<PlayerConfig, "PlayerIndex" | "TeamIndex" | "PartyId" | "PartyMember">,
) {
  await redisClient.set(`player:${playerId}:config`, JSON.stringify(playerConfig));
}

export async function getPlayerConfig(playerId: string) {
  const playerConfigStr = await redisClient.get(`player:${playerId}:config`);
  if (playerConfigStr) {
    return JSON.parse(playerConfigStr) as PlayerConfig;
  }
}

export async function getPlayersConfig(playerIds: string[]) {
  const multi = redisClient.multi();
  for (const playerId of playerIds) {
    multi.get(`player:${playerId}:config`);
  }
  const players = (await multi.exec()) as string[];

  return new Map(
    players.map((player) => {
      const playerConfig = JSON.parse(player) as PlayerConfig;
      return [playerConfig.AccountId, playerConfig];
    }),
  );
}

export async function updatePlayerLoadout(playerId: string, character: string, skin: string) {
  try {
    const [cosmetics, playerConfig] = await Promise.all([
      getCosmeticsConfigurationForPlayer(playerId),
      getPlayerConfig(playerId),
      PlayerModel.findOneAndUpdate(
        { _id: new ObjectId(playerId) },
        {
          $set: {
            character: character,
            variant: skin,
          },
        },
      ),
    ]);

    if (playerConfig) {
      playerConfig.Taunts = cosmetics?.Taunts?.[character]?.TauntSlots ?? [];
      playerConfig.Character = character;
      playerConfig.Skin = skin;
      await setPlayerConfig(playerId, playerConfig);
    }
  } catch (err) {
    logger.error(err);
  }
}
