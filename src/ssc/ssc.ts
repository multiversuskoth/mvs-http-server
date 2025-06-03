import express, { Request, Response } from "express";
import { redisUpdatePlayerLoadout } from "../config/redis";

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
    ip = "73.209.44.199";
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
