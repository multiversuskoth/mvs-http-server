import {
  type Cosmetics,
  CosmeticsDefault,
  CosmeticsModel,
  type TauntSlotsClass,
} from "@mvsi/database/models/Cosmetics";
import { PlayerModel } from "@mvsi/database/models/Player";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getAllTauntsByChar, getAssetsByType } from "../../loadAssets";
import { getPlayerConfig, setPlayerConfig } from "../playerPresence/playerPresence.service";

function mergeCosmetics(cosmetics: Cosmetics): Cosmetics {
  const mergedTaunts: TauntSlotsClass = {};

  for (const character of getAssetsByType("CharacterData")) {
    if (cosmetics?.Taunts?.[character.slug]) {
      mergedTaunts[character.slug] = cosmetics.Taunts[character.slug];
    } else {
      mergedTaunts[character.slug] = {
        TauntSlots: [getAllTauntsByChar()[character.slug]?.Slugs?.[0] || "", "", "", ""],
      };
    }
  }

  const mergedCosmetics = {
    ...cosmetics,
    Taunts: mergedTaunts,
  };
  return mergedCosmetics;
}

export async function getAllPlayersEquippedComsetics(playerIds: string[]) {
  const multi = redisClient.multi();
  for (const playerId of playerIds) {
    multi.get(`player:${playerId}:cosmetics`);
  }
  const cosmeticsStrArray = await multi.exec();
  const comsetics = cosmeticsStrArray.map(
    (str) => JSON.parse(str as unknown as string) as Cosmetics,
  );

  return comsetics;
}

export async function updateCosmeticsBanner(accountId: string, newBanner: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: new ObjectId(accountId) },
    { $set: { Banner: newBanner } },
    { returnDocument: "after", upsert: true },
  )) as Cosmetics;
  await cacheEquippedCosmetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsAnnouncerPack(accountId: string, newAnnouncerPack: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: new ObjectId(accountId) },
    { $set: { AnnouncerPack: newAnnouncerPack } },
    { returnDocument: "after", upsert: true },
  )) as Cosmetics;
  await cacheEquippedCosmetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsRingoutVfx(accountId: string, newRingoutVfx: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: new ObjectId(accountId) },
    { $set: { RingoutVfx: newRingoutVfx } },
    { returnDocument: "after", upsert: true },
  )) as Cosmetics;
  await cacheEquippedCosmetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsStatTrackerSlot(
  accountId: string,
  index: number,
  value: string,
) {
  // Step 1: Fetch (or create) the document
  const doc = await CosmeticsModel.findById(accountId);

  // If not found, create a default StatTrackers array
  let statTrackerSlots: string[] = ["", "", ""];

  if (doc && doc.StatTrackers && Array.isArray(doc.StatTrackers.StatTrackerSlots)) {
    statTrackerSlots = [...doc.StatTrackers.StatTrackerSlots];
  }

  // Step 2: Update the array in JS
  statTrackerSlots[index] = value;

  // Step 3: Save the new array
  const updatedCosmetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: new ObjectId(accountId) },
    {
      $set: {
        StatTrackers: {
          StatTrackerSlots: statTrackerSlots,
        },
      },
    },
    { returnDocument: "after", upsert: true },
  )) as Cosmetics;

  await cacheEquippedCosmetics(accountId, mergeCosmetics(updatedCosmetics));
}

export async function updateCosmeticsTauntSlot(
  accountId: string,
  character: string,
  index: number,
  value: string,
) {
  const cachedCosmetics = await getCosmeticsConfigurationForPlayer(accountId);
  if (cachedCosmetics) {
    if (!cachedCosmetics.Taunts) {
      cachedCosmetics.Taunts = {};
    }
    if (!cachedCosmetics.Taunts[character]) {
      cachedCosmetics.Taunts[character] = { TauntSlots: [] };
    }
    cachedCosmetics.Taunts[character].TauntSlots![index] = value;

    const path = `Taunts.${character}.TauntSlots`;

    (await CosmeticsModel.findOneAndUpdate(
      { _id: new ObjectId(accountId) },

      {
        $set: { [path]: cachedCosmetics.Taunts[character].TauntSlots as any },
      },

      { returnDocument: "after", upsert: true },
    )) as Cosmetics;

    // Push to Redis
    await cacheEquippedCosmetics(accountId, cachedCosmetics);
  }
}

export async function getCosmeticsConfigurationForPlayer(accountId: string) {
  const cosmeticsStr = await redisClient.get(`player:${accountId}:cosmetics`);
  if (cosmeticsStr) {
    return JSON.parse(cosmeticsStr) as Cosmetics;
  }
  let cosmetics = (await CosmeticsModel.findById(accountId)) as Cosmetics;
  if (!cosmetics) {
    cosmetics = await CosmeticsModel.insertOne({
      ...CosmeticsDefault,
      _id: new ObjectId(accountId),
    });
  }
  const mergedCosmetics = mergeCosmetics(cosmetics);
  await cacheEquippedCosmetics(accountId, mergedCosmetics);
  return mergedCosmetics;
}

export async function cacheEquippedCosmetics(playerId: string, data: Cosmetics) {
  const result = await redisClient.set(`player:${playerId}:cosmetics`, JSON.stringify(data));
  return result;
}

export async function updateProfileIcon(accountId: string, newProfileIcon: string) {
  await PlayerModel.findOneAndUpdate(
    { _id: new ObjectId(accountId) },
    { $set: { profile_icon: newProfileIcon } },
    { returnDocument: "after", upsert: true },
  );
  const playerConfig = await getPlayerConfig(accountId);
  if (playerConfig) {
    playerConfig.ProfileIcon = newProfileIcon;
    await setPlayerConfig(accountId, playerConfig);
  }
}

export type Taunts_REQ = {
  CharacterSlug: string;
  TauntSlotIndex: number;
  TauntSlug: string;
};
export async function equip_taunt(accountId: string, tauntData: Taunts_REQ) {
  try {
    await updateCosmeticsTauntSlot(
      accountId,
      tauntData.CharacterSlug,
      tauntData.TauntSlotIndex,
      tauntData.TauntSlug,
    );
    return true;
  } catch (err) {
    logger.error("error saving taunt", err);
    return false;
  }
}
