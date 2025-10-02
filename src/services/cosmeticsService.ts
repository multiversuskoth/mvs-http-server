import { redisGetEquippedComsetics, redisSaveEquippedComsetics, redisUpdatePlayerKey } from "../config/redis";

import { Cosmetics, CosmeticsModel, TauntSlotsClass } from "../database/Cosmetics";
import { PlayerTesterModel, PlayerTester } from "../database/PlayerTester";
import { getAllTauntsByChar, getAssetsByType } from "../loadAssets";

function mergeCosmetics(cosmetics: Cosmetics): Cosmetics {
  const mergedTaunts: Record<string, TauntSlotsClass> = {};

   for (const character of getAssetsByType("CharacterData")) {
    if (cosmetics.Taunts && cosmetics.Taunts[character.slug]) {
      mergedTaunts[character.slug] = cosmetics.Taunts[character.slug];
    } else {
      mergedTaunts[character.slug] = { TauntSlots: [getAllTauntsByChar()[character.slug].Slugs[0]] };
    }
  }

  for (const character of getAssetsByType("CharacterData")) {
    if (cosmetics.Taunts && cosmetics.Taunts[character.slug]) {
      mergedTaunts[character.slug] = cosmetics.Taunts[character.slug];
    } else {
      mergedTaunts[character.slug] = {
        TauntSlots: [
          getAllTauntsByChar()[character.slug]?.Slugs?.[0] || "",
          "",
          "",
          "",
        ],
      };
    }
  }

  const mergedCosmetics = {
    ...cosmetics,
    Taunts: mergedTaunts,
  };
  return mergedCosmetics;
}

export async function updateCosmeticsBanner(accountId: string, newBanner: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { Banner: newBanner } },
    { new: true, upsert: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsAnnouncerPack(accountId: string, newAnnouncerPack: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { AnnouncerPack: newAnnouncerPack } },
    { new: true, upsert: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsRingoutVfx(accountId: string, newRingoutVfx: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { RingoutVfx: newRingoutVfx } },
    { new: true, upsert: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsStatTrackerSlot(accountId: string, index: number, value: string) {
  // Step 1: Fetch (or create) the document
  let doc = await CosmeticsModel.findById(accountId).lean();

  // If not found, create a default StatTrackers array
  let statTrackerSlots: string[] = [
    "",
    "",
    "",
  ];

  if (doc && doc.StatTrackers && Array.isArray(doc.StatTrackers.StatTrackerSlots)) {
    statTrackerSlots = [...doc.StatTrackers.StatTrackerSlots];
  }

  // Step 2: Update the array in JS
  statTrackerSlots[index] = value;

  // Step 3: Save the new array
  const updatedCosmetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { "StatTrackers.StatTrackerSlots": statTrackerSlots } },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  ).lean()) as Cosmetics;

  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedCosmetics));
}

export async function updateCosmeticsTauntSlot(accountId: string, character: string, index: number, value: string) {
  let cachedCosmetics = await getEquippedCosmetics(accountId);
  if (cachedCosmetics) {
    cachedCosmetics.Taunts[character].TauntSlots[index] = value;

    const path = `Taunts.${character}.TauntSlots`;
    const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
      { _id: accountId },
      { $set: { [path]: cachedCosmetics.Taunts[character].TauntSlots } },
      { new: true, upsert: true },
    ).lean()) as Cosmetics;

    // Push to Redis
    await redisSaveEquippedComsetics(accountId, cachedCosmetics);
  }
}

export async function getEquippedCosmetics(accountId: string) {
  let cachedCosmetics = await redisGetEquippedComsetics(accountId);
  if (cachedCosmetics) {
    return cachedCosmetics;
  }
  let cosmetics = (await CosmeticsModel.findById(accountId).lean()) as Cosmetics;
  if (!cosmetics) {
    cosmetics = new CosmeticsModel().toObject();
    (await CosmeticsModel.create({ ...cosmetics, _id: accountId, account_id: accountId })).save();
  }
  const mergedCosmetics = mergeCosmetics(cosmetics);
  await redisSaveEquippedComsetics(accountId, mergedCosmetics);
  return mergedCosmetics;
}

export async function updateProfileIcon(accountId: string, newProfileIcon: string) {
  await PlayerTesterModel.findOneAndUpdate({ _id: accountId }, { $set: { profile_icon: newProfileIcon } }, { new: true, upsert: true }).lean();
  await redisUpdatePlayerKey(accountId, "profile_icon", newProfileIcon);
}