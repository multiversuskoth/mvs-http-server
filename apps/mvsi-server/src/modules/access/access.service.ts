import { IPBlockModel } from "@mvsi/database/models/Block";
import { CosmeticsModel } from "@mvsi/database/models/Cosmetics";
import { FriendModel } from "@mvsi/database/models/Friends";
import { PlayerModel } from "@mvsi/database/models/Player";
import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { type DecodedEncryptedAppTicket, parseEncryptedAppTicket } from "steam-appticket";
import type { JWT_CLAIMS } from "../../middleware/middlewares";
import { fetchSteamUser, STEAM_PRIVATE_KEY } from "../../steam";
import { getCosmeticsConfigurationForPlayer } from "../cosmetics/cosmetics.service";
import { setPlayerConfig } from "../playerConfig/playerConfig.service";
import { setPlayerPresence } from "../playerPresence/playerPresence.service";
import type { PlayerPresence } from "../playerPresence/playerPresence.types";

async function handleAccess(ip: string, steamTicket: string) {
  const blockedIP = await IPBlockModel.findOne({ ip });
  if (blockedIP) {
    return null;
  }

  const ticket = Buffer.from(steamTicket, "hex");
  let parsedTicket: DecodedEncryptedAppTicket | null = null;
  try {
    parsedTicket = parseEncryptedAppTicket(ticket, STEAM_PRIVATE_KEY);
  } catch (_) {
    return null;
  }

  if (!parsedTicket) {
    return null;
  }

  const steam_id = parsedTicket?.steamID.getSteamID64();
  if (!steam_id) {
    return null;
  }

  const now = new Date();

  let player = await PlayerModel.findOneAndUpdate(
    { steam_id, blocked: { $ne: true } },
    {
      $set: { ip, last_login: now },
    },
    { returnDocument: "after" },
  );

  if (!player) {
    const blocked = await PlayerModel.findOne({ steam_id }, { projection: { blocked: 1 } });
    if (blocked?.blocked) return null;

    const steamUser = await fetchSteamUser(steam_id);
    logger.info("Fetching steam");

    player = await PlayerModel.findOneAndUpdate(
      { steam_id, blocked: { $ne: true } },
      {
        $set: { ip, last_login: now },
        $setOnInsert: {
          steam_id,
          name: steamUser.personaname,
          steam_name: steamUser.personaname,
        },
      },
      { upsert: true, returnDocument: "after" },
    );
    await CosmeticsModel.insertOne({
      _id: player?._id,
    });
    await FriendModel.insertOne({
      _id: player?._id,
    });

    if (!player) return null; // in case it got blocked between calls
  }

  let wsEndpoint = `ws://${env.PUBLIC_URI}:${env.WEBSOCKET_PORT}`;
  if (ip === "127.0.0.1" || ip === "::1") {
    wsEndpoint = `ws://127.0.0.1:${env.WEBSOCKET_PORT}`;
  }
  const claims: JWT_CLAIMS = {
    id: player._id.toHexString(),
    profile_id: player.profile_id.toHexString(),
    public_id: player.public_id,
    wb_network_id: player.public_id,
    hydraUsername: player.name,
    username: player.name,
    steamId: steam_id,
  };

  logger.info(`Player ${claims.id} - ${claims.username} connected`);

  const cosmetics = await getCosmeticsConfigurationForPlayer(claims.id);
  const presence: PlayerPresence = {
    currentLobbyId: "",
    status: "online",
    profileId: player.profile_id.toHexString(),
    ip: ip,
  };

  await setPlayerPresence(claims.id, presence);

  await setPlayerConfig(claims.id, {
    AccountId: claims.id,
    Username: {},
    bUseCharacterDisplayName: false,
    Character: player.character,
    Skin: player.variant,
    Taunts: cosmetics?.Taunts?.[player.character]?.TauntSlots ?? [],
    Perks: [],
    Banner: cosmetics.Banner,
    ProfileIcon: player.profile_icon,
    RingoutVfx: cosmetics.RingoutVfx,
    bIsBot: false,
    BotBehaviorOverride: "",
    BotDifficultyMin: 0,
    BotDifficultyMax: 0,
    Buffs: [],
    StatTrackers: cosmetics.StatTrackers.StatTrackerSlots?.map((stat) => [stat, 1]) ?? [],
    Gems: cosmetics.Gems.GemSlots?.map((gem) => ({ Gem: gem, ChargeLevel: 1 })) ?? [],
    StartingDamage: 0,
    Handicap: 0,
    GameplayPreferences: player.gameplay_preferences ?? 544,
    bAutoPartyPreference: false,
    RankedTier: null,
    RankedDivision: null,
    WinStreak: null,
    IsHost: false,
    Ip: ip,
  });

  return {
    claims,
    profileIcon: player.profile_icon,
    wsEndpoint,
  };
}

export const AccessService = { handleAccess };
