import { Request, Response } from "express";
import { Cosmetics, CosmeticsModel, TauntSlotsClass } from "../database/Cosmetics";
import { Types } from "mongoose";
import { CHARACTER_SLUGS } from "../data/characters";
import { redisGetEquippedComsetics, redisSaveEquippedComsetics } from "../config/redis";

interface Profile_Icon_REQ {
  Slug: string;
}

interface Banner_REQ {
  BannerSlug: string;
}

interface Ringout_REQ {
  RingoutVfxSlug: string;
}

interface AnnouncerPack_REQ {
  AnnouncerPackSlug: string;
}

interface StatTracker_REQ {
  StatTrackerSlotIndex: string;
  StatTrackerSlug: string;
}

export async function updateCosmeticsBanner(accountId: string, newBanner: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { Banner: newBanner } },
    { new: true, upsert: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

function mergeCosmetics(cosmetics: Cosmetics): Cosmetics {
  const mergedTaunts: Record<string, TauntSlotsClass> = {};

  for (const character of CHARACTER_SLUGS) {
    if (cosmetics.Taunts && cosmetics.Taunts[character]) {
      mergedTaunts[character] = cosmetics.Taunts[character];
    } else {
      mergedTaunts[character] = { TauntSlots: [] };
    }
  }

  const mergedCosmetics = {
    ...cosmetics,
    Taunts: mergedTaunts,
  };
  return mergedCosmetics;
}

export async function updateCosmeticsAnnouncerPack(accountId: string, newAnnouncerPack: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { AnnouncerPack: newAnnouncerPack } },
    { new: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsRingoutVfx(accountId: string, newRingoutVfx: string) {
  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { RingoutVfx: newRingoutVfx } },
    { new: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsStatTrackerSlot(accountId: string, index: number, value: string) {
  const path = `StatTrackers.StatTrackerSlots.${index}`;

  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { [path]: value } },
    { new: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function updateCosmeticsTauntSlot(accountId: string, character: string, index: number, value: string) {
  const path = `Taunts.${character}.TauntSlots.${index}`;

  const updatedComsetics = (await CosmeticsModel.findOneAndUpdate(
    { _id: accountId },
    { $set: { [path]: value } },
    { new: true, upsert: true },
  ).lean()) as Cosmetics;
  await redisSaveEquippedComsetics(accountId, mergeCosmetics(updatedComsetics));
}

export async function getEquippedCosmetics(accountId: string) {
  let cachedCosmetics = await redisGetEquippedComsetics(accountId);
  if (cachedCosmetics) {
    return cachedCosmetics;
  }
  let cosmetics = (await CosmeticsModel.findById(accountId).lean()) as Cosmetics;
  if (!cosmetics) {
    cosmetics = new CosmeticsModel().toObject();
  }
  const mergedCosmetics = mergeCosmetics(cosmetics);
  await redisSaveEquippedComsetics(accountId, mergedCosmetics);
  return mergedCosmetics;
}
