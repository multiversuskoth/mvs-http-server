import express, { Request, Response } from "express";
import { redisUpdatePlayerLoadout } from "../config/redis";
import env from "../env/env";
import { PerkPagesModel } from "../database/PerkPages";
import { Types } from "mongoose";

interface Lock_Lobby_Loadout_REQ {
  AutoPartyPreference: boolean;
  CrossplayPreference: number;
  GameplayPreferences: number;
  HissCrc: number;
  Loadout: Loadout;
  LobbyId: string;
  LobbyTemplate: string;
  Platform: string;
  Version: string;
}

interface Loadout {
  Character: string;
  Skin: string;
}

export interface Lock_Lobby_Loadout_RES {
  body: Lock_Lobby_Loadout_RES_BODY;
  metadata: any;
  return_code: number;
}

export interface Lock_Lobby_Loadout_RES_BODY {
  AccountId: string;
  Loadout: Loadout;
  bAreAllLoadoutsLocked: boolean;
}

export async function set_lock_lobby_loadout(req: Request, res: Response<Lock_Lobby_Loadout_RES>) {
  const account = req.token;
  const body = req.body as Lock_Lobby_Loadout_REQ;
  let ip = req.ip!.replace(/^::ffff:/, "");
  if (ip === "127.0.0.1") {
    ip = env.LOCAL_PUBLIC_IP;
  }
  await redisUpdatePlayerLoadout(account.id, body.Loadout.Character, body.Loadout.Skin, ip);

  res.send({
    body: {
      AccountId: account.id,
      Loadout: {
        Character: body.Loadout.Character,
        Skin: body.Loadout.Skin,
      },
      bAreAllLoadoutsLocked: true,
    },
    metadata: null,
    return_code: 0,
  });
}

export interface PERKS_ABSENT_RES {
  body: PERKS_ABSENT_RES_BODY;
  metadata: any;
  return_code: number;
}

export interface PERKS_ABSENT_RES_BODY {
  message: string;
}

export async function set_perks_absent(req: Request, res: Response<PERKS_ABSENT_RES>) {
  res.send({
    body: {
      message: "Early absent report",
    },
    metadata: null,
    return_code: 2,
  });
}

export async function perks_set_page(req: Request, res: Response) {
  const { Character, Description, DisplayName, PageIndex, Perks } = req.body;
  const account_id = req.token.id; // Assuming this is an ObjectId or convertible

  // Build the update path for this page
  const pageKey = `perk_pages.${Character}.${PageIndex}`;
  const updateValue = {
    DisplayName,
    Description,
    Perks,
  };
  // 2. Upsert the specific character/page index
  try {
    const updatedDoc = await PerkPagesModel.findOneAndUpdate(
      { account_id: new Types.ObjectId(account_id) },
      {
        $set: {
          [pageKey]: updateValue,
        },
      },
      { upsert: true, new: true }
    ).exec();
  } catch (err) {
    console.log("Error saving perks", err);
  }

  res.send({
    body: {},
    metadata: null,
    return_code: 0,
  });
}

export async function handleSsc_invoke_perks_get_all_pages(req: Request<{}, {}, {}, {}>, res: Response) {
  const accountId = req.token.id;

  PerkPagesModel.findOne({ account_id: new Types.ObjectId(accountId) })
    .select("perk_pages -_id")
    .lean()
    .exec()
    .then((doc) => {
      res.send({
        body: {
          perk_pages: doc?.perk_pages || {},
        },
        metadata: null,
        return_code: 0,
      });
    })
    .catch((e) => {
      console.log(e);
      res.send({
        body: {
          perk_pages: {},
        },
        metadata: null,
        return_code: 0,
      });
    });
}

export interface SET_LOBBY_MODE_REQ {
  AutoPartyPreference: boolean;
  CrossplayPreference: number;
  GameplayPreferences: number;
  HissCrc: number;
  LobbyId: string;
  LobbyTemplate: string;
  ModeString: string;
  Platform: string;
  Version: string;
}

export async function handle_ssc_set_lobby_mode(req: Request<{}, {}, SET_LOBBY_MODE_REQ, {}>, res: Response) {}
