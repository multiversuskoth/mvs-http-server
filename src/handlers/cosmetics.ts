import { Request, Response } from "express";
import { Types } from "mongoose";
import { CosmeticsModel } from "../database/Cosmetics";
import {
  updateCosmeticsAnnouncerPack,
  updateCosmeticsBanner,
  updateCosmeticsRingoutVfx,
  updateCosmeticsStatTrackerSlot,
} from "../services/cosmeticsService";

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
  StatTrackerSlotIndex: number;
  StatTrackerSlug: string;
}

export async function equip_stat_tracker(req: Request, res: Response) {
  const account = req.token;
  const body = req.body as StatTracker_REQ;
  try {
    await updateCosmeticsStatTrackerSlot(account.id, body.StatTrackerSlotIndex, body.StatTrackerSlug);
    res.send({
      body: req.body,
      metadata: null,
      return_code: 0,
    });
  } catch (err) {
    console.log("Error saving cosmetic", err);
    res.send({});
  }
}

export async function equip_announce_pack(req: Request, res: Response) {
  const account = req.token;
  const body = req.body as AnnouncerPack_REQ;
  try {
    await updateCosmeticsAnnouncerPack(account.id, body.AnnouncerPackSlug);
    res.send({
      body: {
        EquippedAnnouncerPack: body.AnnouncerPackSlug,
      },
      metadata: null,
      return_code: 0,
    });
  } catch (err) {
    console.log("Error saving cosmetic", err);
    res.send({});
  }
}

export async function equip_ringout_vfx(req: Request, res: Response) {
  const account = req.token;
  const body = req.body as Ringout_REQ;
  try {
    await updateCosmeticsRingoutVfx(account.id, body.RingoutVfxSlug);
    res.send({
      body: {
        EquippedRingoutVfx: body.RingoutVfxSlug,
      },
      metadata: null,
      return_code: 0,
    });
  } catch (err) {
    console.log("Error saving cosmetic", err);
    res.send({});
  }
}

export async function equip_banner(req: Request, res: Response) {
  const account = req.token;
  const body = req.body as Banner_REQ;
  try {
    await updateCosmeticsBanner(account.id, body.BannerSlug);
    res.send({
      body: {
        EquippedBanner: body.BannerSlug,
      },
      metadata: null,
      return_code: 0,
    });
  } catch (err) {
    console.log("Error saving banner", err);
    res.send({});
  }
}

export async function set_profile_icon(req: Request, res: Response) {
  const account = req.token;
  const body = req.body as Profile_Icon_REQ;

  // TODO: SAVE ON PLAYERTESTER MODEL INSTEAD

}
