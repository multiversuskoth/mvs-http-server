import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getCurrentCRC } from "../../data/config";
import { MATCH_TYPES } from "../matchmaking/matchmaking.types";
import { getPlayerConfig } from "../playerConfig/playerConfig.service";
import {
  type BaseLobby,
  type CustomLobby,
  type CustomLobbyMatchConfig,
  type CustomLobbySettings,
  LOBBY_CREATED_CHANNEL,
  LobbyCreatedMessage,
  type LobbyTeam,
  type PartyLobby,
} from "./lobby.types";
import type { TeamStyle } from "../gameModes/gameModes.config";
import { GAME_MODES_CONFIG } from "../../data/gameModes";
import { MAP_ROTATIONS } from "../../data/maps";
import {
  REALTIME_NOTIFICATION_CHANNEL,
  type RealtimeNotificationMessage,
} from "../notifications/notifications.types";

const LOBBY_EX = 2 * 24 * 60 * 60; // 2 days

function lobbyKey(lobbyId: string) {
  return `lobby:${lobbyId}`;
}

// json.set expects RedisJSON but our lobby objects are always valid JSON — centralise the cast
const jsonSet = (key: string, path: string, value: unknown) =>
  redisClient.json.set(key, path, value as Parameters<typeof redisClient.json.set>[2]);

// ─── Lua scripts ──────────────────────────────────────────────────────────────

const LUA_SET_LOBBY_JOINABLE = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
redis.call('JSON.SET', KEYS[1], '$.IsLobbyJoinable', ARGV[2])
return 1
`;

const LUA_SET_LOBBY_MODE = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return redis.error_reply('Lobby not found') end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return redis.error_reply('Not the leader') end
redis.call('JSON.SET', KEYS[1], '$.ModeString', '"' .. ARGV[2] .. '"')
return 1
`;

// NOTE: original lockLobby checked LeaderID !== leaderId (preserved as-is)
const LUA_LOCK_LOBBY = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID == ARGV[1] then return nil end
redis.call('JSON.SET', KEYS[1], '$.IsLobbyJoinable', 'false')
return 1
`;

const LUA_DELETE_LOBBY = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
redis.call('DEL', KEYS[1])
return 1
`;

const LUA_UPDATE_TEAM_STYLE = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
redis.call('JSON.SET', KEYS[1], '$.match_config.TeamStyle', '"' .. ARGV[2] .. '"')
return redis.call('JSON.GET', KEYS[1])
`;

const LUA_UPDATE_GAME_MODE = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
redis.call('JSON.SET', KEYS[1], '$.GameModeSlug', '"' .. ARGV[2] .. '"')
redis.call('JSON.SET', KEYS[1], '$.Maps', ARGV[3])
return redis.call('JSON.GET', KEYS[1])
`;

const LUA_UPDATE_INT_SETTING = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
redis.call('JSON.SET', KEYS[1], '$.match_config.' .. ARGV[2], ARGV[3])
return redis.call('JSON.GET', KEYS[1])
`;

// ARGV[1]=leaderId, ARGV[2..n]=enabled map slugs
const LUA_UPDATE_ENABLED_MAPS = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
local enabled = {}
for i = 2, #ARGV do enabled[ARGV[i]] = true end
for i, m in ipairs(l.Maps) do
  l.Maps[i].IsSelected = enabled[m.Map] ~= nil
end
redis.call('JSON.SET', KEYS[1], '$.Maps', cjson.encode(l.Maps))
return cjson.encode(l.Maps)
`;

// ARGV[1]=leaderId, ARGV[2]=playerId, ARGV[3]=JSON-encoded handicap number
const LUA_UPDATE_HANDICAP = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
l.Handicaps[ARGV[2]] = tonumber(ARGV[3])
redis.call('JSON.SET', KEYS[1], '$.Handicaps.' .. ARGV[2], ARGV[3])
return cjson.encode(l.Handicaps)
`;

// ARGV[1]=playerId, ARGV[2]=targetTeamIndex (0-based)
const LUA_SWITCH_TEAM = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return redis.error_reply('Lobby not found') end
local l = cjson.decode(s)
local pid = ARGV[1]
local targetIdx = tonumber(ARGV[2])

local fromJsonIdx = nil
local pdata = nil
for i, team in ipairs(l.Teams) do
  if team.Players[pid] then
    fromJsonIdx = i - 1
    pdata = team.Players[pid]
    break
  end
end
if fromJsonIdx == nil then return redis.error_reply('Player not found') end

local targetExists = false
for i, team in ipairs(l.Teams) do
  if team.TeamIndex == targetIdx then targetExists = true; break end
end
if not targetExists then return cjson.encode(pdata) end

redis.call('JSON.DEL',      KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Players.' .. pid)
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Length', -1)
redis.call('JSON.SET',      KEYS[1], '$.Teams[' .. targetIdx .. '].Players.' .. pid, cjson.encode(pdata))
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. targetIdx .. '].Length', 1)
return cjson.encode(pdata)
`;

// ARGV[1]=accountId, ARGV[2]='true'/'false' isSpectator, ARGV[3]=joinedAt ISO,
// ARGV[4]=lockedLoadout JSON or ''
const LUA_JOIN_CUSTOM_LOBBY = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.IsLobbyJoinable == false then return cjson.encode(false) end

local accountId   = ARGV[1]
local isSpectator = ARGV[2] == 'true'
local ts          = ARGV[3]
local loadout     = ARGV[4]
local style       = l.match_config.TeamStyle

local teamJsonIdx = nil
local teamLen     = nil
for i, team in ipairs(l.Teams) do
  local ok = false
  if style == 'FFA' or style == 'Other' or style == 'Solos' then
    ok = team.Length < 1
  elseif style == 'Duos' then
    ok = team.Length < 2
  elseif isSpectator then
    ok = team.TeamIndex == 4 and team.Length < 4
  end
  if ok then
    teamJsonIdx = i - 1
    teamLen     = team.Length
    break
  end
end
if teamJsonIdx == nil then return nil end

local pdata = cjson.encode({
  Account           = { id = accountId },
  JoinedAt          = ts,
  BotSettingSlug    = '',
  LobbyPlayerIndex  = teamLen,
  CrossplayPreference = 1
})

redis.call('JSON.SET',       KEYS[1], '$.Teams[' .. teamJsonIdx .. '].Players.' .. accountId, pdata)
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. teamJsonIdx .. '].Length', 1)
redis.call('JSON.SET',       KEYS[1], '$.PlayerAutoPartyPreferences.' .. accountId, 'false')
redis.call('JSON.SET',       KEYS[1], '$.PlayerGameplayPreferences.' .. accountId, '964')
redis.call('JSON.SET',       KEYS[1], '$.Platforms.' .. accountId, '"PC"')
if loadout ~= '' then
  redis.call('JSON.SET', KEYS[1], '$.LockedLoadouts.' .. accountId, loadout)
end
return redis.call('JSON.GET', KEYS[1])
`;

// ARGV[1]=accountId
// ARGV[1]=accountId, ARGV[2]='true'/'false'
const LUA_SET_PLAYER_READY = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
local pid = ARGV[1]
local ready = ARGV[2] == 'true'
if ready then
  redis.call('JSON.SET', KEYS[1], '$.ReadyPlayers.' .. pid, 'true')
  l.ReadyPlayers[pid] = true
else
  redis.call('JSON.DEL', KEYS[1], '$.ReadyPlayers.' .. pid)
  l.ReadyPlayers[pid] = nil
end
local readyCount = 0
for _ in pairs(l.ReadyPlayers) do readyCount = readyCount + 1 end
local totalPlayers = 0
for _, team in ipairs(l.Teams) do
  if team.TeamIndex ~= 4 then totalPlayers = totalPlayers + team.Length end
end
return (readyCount >= totalPlayers and totalPlayers > 0) and 1 or 0
`;

// ARGV[1]=leaderId, ARGV[2]=kickeeId
const LUA_KICK_FROM_LOBBY = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return redis.error_reply('Not the leader') end
local pid = ARGV[2]
if pid == ARGV[1] then return redis.error_reply('Cannot kick yourself') end

local fromJsonIdx = nil
local pdata = nil
for i, team in ipairs(l.Teams) do
  if team.Players[pid] then
    fromJsonIdx = i - 1
    pdata = team.Players[pid]
    break
  end
end
if fromJsonIdx == nil then return nil end

redis.call('JSON.DEL',       KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Players.' .. pid)
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Length', -1)
redis.call('JSON.DEL', KEYS[1], '$.ReadyPlayers.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.PlayerAutoPartyPreferences.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.PlayerGameplayPreferences.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.Platforms.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.LockedLoadouts.' .. pid)
return cjson.encode(pdata)
`;

// ARGV[1]=promoteTargetId
const LUA_PROMOTE_LEADER = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
local target = ARGV[1]
local found = false
for _, team in ipairs(l.Teams) do
  if team.Players[target] then found = true; break end
end
if not found then return nil end
redis.call('JSON.SET', KEYS[1], '$.LeaderID', '"' .. target .. '"')
return cjson.encode(l.ReadyPlayers)
`;

// ARGV[1]=accountId
const LUA_LEAVE_CUSTOM_LOBBY = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
local pid = ARGV[1]

local fromJsonIdx = nil
local pdata = nil
for i, team in ipairs(l.Teams) do
  if team.Players[pid] then
    fromJsonIdx = i - 1
    pdata = team.Players[pid]
    break
  end
end
if fromJsonIdx == nil then return nil end

redis.call('JSON.DEL',       KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Players.' .. pid)
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Length', -1)
redis.call('JSON.DEL', KEYS[1], '$.ReadyPlayers.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.PlayerAutoPartyPreferences.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.PlayerGameplayPreferences.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.Platforms.' .. pid)
redis.call('JSON.DEL', KEYS[1], '$.LockedLoadouts.' .. pid)

l.ReadyPlayers[pid] = nil

local newLeader = nil
if l.LeaderID == pid then
  for i, team in ipairs(l.Teams) do
    for otherId, _ in pairs(team.Players) do
      if otherId ~= pid then newLeader = otherId; break end
    end
    if newLeader then break end
  end
  if newLeader then
    redis.call('JSON.SET', KEYS[1], '$.LeaderID', '"' .. newLeader .. '"')
    redis.call('JSON.SET', KEYS[1], '$.ReadyPlayers.' .. newLeader, 'true')
    l.ReadyPlayers[newLeader] = true
  else
    redis.call('DEL', KEYS[1])
  end
end

local leaderID = newLeader or l.LeaderID
return cjson.encode({ playerData = pdata, readyPlayers = l.ReadyPlayers, leaderID = leaderID })
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function evalLua(script: string, keys: string[], args: string[]) {
  return redisClient.eval(script, { keys, arguments: args });
}

function broadcastCustomLobby(
  lobbyId: string,
  data: { template_id: string } & Record<string, unknown>,
) {
  const notification: RealtimeNotificationMessage = {
    topic: lobbyId,
    notification: {
      data: { MatchID: lobbyId, ...data },
      payload: { match: { id: lobbyId }, custom_notification: "realtime" },
      header: "",
      cmd: "update",
    },
  };
  console.log("Broadcasting custom lobby update:", JSON.stringify(notification, null, 2));
  return redisClient.publish(REALTIME_NOTIFICATION_CHANNEL, JSON.stringify(notification));
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getLobby(lobbyId: string) {
  const lobby = await redisClient.json.get(lobbyKey(lobbyId));
  return (lobby ?? null) as BaseLobby | null;
}

export async function setLobbyJoinable(lobbyId: string, leaderId: string, joinable: boolean) {
  await evalLua(
    LUA_SET_LOBBY_JOINABLE,
    [lobbyKey(lobbyId)],
    [leaderId, joinable ? "true" : "false"],
  );
}

export async function invitePlayerToLobby(
  MatchID: string,
  InviterAccountId: string,
  InviteeAccountId: string,
  IsSpectator: boolean,
) {
  const lobby = await getLobby(MatchID);
  if (lobby) {
    const notification: RealtimeNotificationMessage = {
      topic: InviteeAccountId,
      notification: {
        data: {
          LobbyType: 0,
          MatchID,
          ContextData: {
            LobbyType: "Custom",
          },
          template_id: "InviteReceivedForLobby",
          IsSpectator,
          InviterAccountId,
        },
        payload: {
          frm: {
            id: "internal-server",
            type: "server-api-key",
          },
          template: "realtime",
          account_id: InviteeAccountId,
          profile_id: InviteeAccountId,
        },
        header: "",
        cmd: "profile-notification",
      },
    };
    await redisClient.publish(REALTIME_NOTIFICATION_CHANNEL, JSON.stringify(notification));
  }
}

export async function createBaseLobby(accountId: string) {
  const [playerConfig, playerCurrentLobbyId] = await Promise.all([
    getPlayerConfig(accountId),
    getPlayerCurrentLobbyId(accountId),
  ]);

  if (!playerConfig) {
    throw new Error("PlayerConfig not found");
  }

  if (playerCurrentLobbyId) {
    await deleteLobby(playerCurrentLobbyId, accountId);
  }

  const baseLobby: BaseLobby = {
    Teams: [
      {
        TeamIndex: 0,
        Players: {
          [accountId]: {
            Account: { id: accountId },
            JoinedAt: new Date(),
            BotSettingSlug: "",
            LobbyPlayerIndex: 0,
            CrossplayPreference: 1,
          },
        },
        Length: 1,
      },
      { TeamIndex: 1, Players: {}, Length: 0 },
      { TeamIndex: 2, Players: {}, Length: 0 },
      { TeamIndex: 3, Players: {}, Length: 0 },
      { TeamIndex: 4, Players: {}, Length: 0 },
    ],
    LeaderID: accountId,
    LobbyType: 0,
    ReadyPlayers: {},
    PlayerGameplayPreferences: { [accountId]: playerConfig.GameplayPreferences },
    PlayerAutoPartyPreferences: { [accountId]: playerConfig.bAutoPartyPreference },
    GameVersion: env.GAME_VERSION,
    HissCrc: getCurrentCRC(),
    Platforms: { [accountId]: "PC" },
    AllMultiplayParams: {
      "1": {
        MultiplayClusterSlug: "ec2-us-east-1-dokken",
        MultiplayProfileId: "1252499",
        MultiplayRegionId: "",
      },
      "2": {
        MultiplayClusterSlug: "ec2-us-east-1-dokken",
        MultiplayProfileId: "1252922",
        MultiplayRegionId: "19c465a7-f21f-11ea-a5e3-0954f48c5682",
      },
      "3": { MultiplayClusterSlug: "", MultiplayProfileId: "1252925", MultiplayRegionId: "" },
      "4": {
        MultiplayClusterSlug: "ec2-us-east-1-dokken",
        MultiplayProfileId: "1252928",
        MultiplayRegionId: "19c465a7-f21f-11ea-a5e3-0954f48c5682",
      },
    },
    LockedLoadouts: { [accountId]: { Character: playerConfig.Character, Skin: playerConfig.Skin } },
    IsLobbyJoinable: true,
    MatchID: new ObjectId().toHexString(),
  };
  return baseLobby;
}

export async function createPartyLobby(
  accountId: string,
  lobbyMode: MATCH_TYPES = MATCH_TYPES.ONE_V_ONE,
) {
  const baseLobby = await createBaseLobby(accountId);
  const partyLobby: PartyLobby = {
    ...baseLobby,
    ModeString: lobbyMode,
  };

  await setPlayerCurrentLobbyId(accountId, partyLobby.MatchID);
  await publishLobbyCreated(partyLobby);

  logger.info(`Creating party lobby for ${accountId} - matchLobbyId:${partyLobby.MatchID}`);

  return partyLobby;
}

export async function setPlayerCurrentLobbyId(playerId: string, lobbyId: string) {
  await redisClient.set(`player:${playerId}:lobby`, lobbyId);
}

export async function getPlayerCurrentLobbyId(playerId: string) {
  return redisClient.get(`player:${playerId}:lobby`);
}

export async function publishLobbyCreated(lobby: BaseLobby) {
  const key = lobbyKey(lobby.MatchID);
  await redisClient
    .multi()
    .json.set(key, "$", lobby as Parameters<typeof redisClient.json.set>[2])
    .expire(key, LOBBY_EX)
    .exec();
  const lobbyCreatedMessage: LobbyCreatedMessage = {
    lobbyId: lobby.MatchID,
    accountId: lobby.LeaderID,
  };
  await redisClient.publish(LOBBY_CREATED_CHANNEL, JSON.stringify(lobbyCreatedMessage));
}

export async function setLobbyMode(leaderId: string, lobbyId: string, newMode: MATCH_TYPES) {
  await evalLua(LUA_SET_LOBBY_MODE, [lobbyKey(lobbyId)], [leaderId, newMode]);
  const notification: RealtimeNotificationMessage = {
    topic: lobbyId,
    notification: {
      data: {
        template_id: "OnLobbyModeUpdated",
        LobbyId: lobbyId,
        ModeString: newMode,
      },
      payload: {
        custom_notification: "realtime",
      },
      header: "",
      cmd: "update",
    },
  };
  await redisClient.publish(REALTIME_NOTIFICATION_CHANNEL, JSON.stringify(notification));
  logger.info(`Changing party lobby for ${lobbyId} - to ${newMode}`);
}

export async function lockLobby(lobbyId: string, leaderId: string) {
  await evalLua(LUA_LOCK_LOBBY, [lobbyKey(lobbyId)], [leaderId]);
}

export async function deleteLobby(lobbyId: string, leaderId: string) {
  const deleted = await evalLua(LUA_DELETE_LOBBY, [lobbyKey(lobbyId)], [leaderId]);
  if (deleted) {
    logger.verbose(`Deleted lobby ${lobbyId} for player ${leaderId}`);
  }
}

export async function leaveLobby(lobbyId: string, accountId: string) {
  const result = await evalLua(LUA_LEAVE_CUSTOM_LOBBY, [lobbyKey(lobbyId)], [accountId]);
  if (!result) return null;

  const { playerData, readyPlayers, leaderID } = JSON.parse(result as string) as {
    playerData: LobbyTeam["Players"][string];
    readyPlayers: Record<string, boolean>;
    leaderID: string;
  };

  await Promise.all([
    redisClient.del(`player:${accountId}:lobby`),
    broadcastCustomLobby(lobbyId, {
      template_id: "PlayerLeftLobby",
      Player: playerData,
      ReadyPlayers: readyPlayers,
      NewLeader: leaderID,
    }),
  ]);
  const partyLobby = await createPartyLobby(accountId);
  return partyLobby;
}

// CUSTOM LOBBIES

export function getGameModeMaps(gameModeSlug: keyof typeof GAME_MODES_CONFIG) {
  const mapRotationName = GAME_MODES_CONFIG[gameModeSlug].data.GameModeData
    .MapRotation as keyof typeof MAP_ROTATIONS;
  const mapRotation = MAP_ROTATIONS[mapRotationName].data.MapsInRotation.map((map) => ({
    Map: map.Map,
    IsSelected: true,
  }));
  return mapRotation;
}

export function getCustomLobbyDefaultSettings(
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
): CustomLobbySettings {
  const defaultMapConfig = GAME_MODES_CONFIG[gameModeSlug].data;
  const mapRotation = getGameModeMaps(gameModeSlug);
  const customLobbySettings: CustomLobbySettings = {
    GameModeSlug: gameModeSlug,
    match_config: {
      TeamStyle: defaultMapConfig.GameModeData.TeamStyle as TeamStyle,
      QueueType: "Unselected",
      Context: "Custom",
      ModeDifficulty: "Unselected",
      GameModeAlias: "Versus",
      NumRingoutsForWin: defaultMapConfig.GameModeData.GameModeTeams[0].NumRingouts,
      MatchDuration: defaultMapConfig.GameModeData.MatchDuration,
      AllowHazards: defaultMapConfig.GameModeData.bMapHazards,
      AllowDuplicateCharacters: true,
      AreRewardsSkipped: true,
      num_set_wins_required: 1,
      EnableShields: 1,
    },
    Maps: mapRotation,
    Handicaps: {},
  };
  return customLobbySettings;
}

export async function createCustomLobby(accountId: string) {
  const baseLobby = await createBaseLobby(accountId);
  const customLobby: CustomLobby = {
    ...baseLobby,
    ReadyPlayers: {
      [accountId]: true,
    },
    ...getCustomLobbyDefaultSettings("gm_classic_2v2"),
  };

  await setPlayerCurrentLobbyId(accountId, customLobby.MatchID);
  await publishLobbyCreated(customLobby);

  logger.info(`Creating custom lobby for ${accountId} - matchLobbyId:${customLobby.MatchID}`);
  return customLobby;
}

export async function updateTeamStyleForCustomLobby(
  lobbyId: string,
  leaderId: string,
  newStyle: TeamStyle,
) {
  const result = await evalLua(LUA_UPDATE_TEAM_STYLE, [lobbyKey(lobbyId)], [leaderId, newStyle]);
  if (!result) return null;
  const lobby = JSON.parse(result as string) as CustomLobby;
  await broadcastCustomLobby(lobbyId, { template_id: "TeamStyleChangedForCustomGame", lobby });
  return lobby;
}

export async function updateGameModeForCustomLobby(
  lobbyId: string,
  leaderId: string,
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
) {
  const maps = getGameModeMaps(gameModeSlug);
  const result = await evalLua(
    LUA_UPDATE_GAME_MODE,
    [lobbyKey(lobbyId)],
    [leaderId, gameModeSlug, JSON.stringify(maps)],
  );
  if (!result) {
    return null;
  }
  await broadcastCustomLobby(lobbyId, {
    template_id: "GameModeSetForCustomGame",
    GameModeSlug: gameModeSlug,
  });
  const lobby = JSON.parse(result as string) as CustomLobby;
  await broadcastCustomLobby(lobbyId, {
    template_id: "MapsSetForCustomGame",
    Maps: lobby.Maps,
  });
  return lobby;
}

export async function updateIntSettingForCustomLobby(
  lobbyId: string,
  leaderId: string,
  settingKey: keyof CustomLobbyMatchConfig,
  settingValue: any,
) {
  const result = await evalLua(
    LUA_UPDATE_INT_SETTING,
    [lobbyKey(lobbyId)],
    [leaderId, settingKey, JSON.stringify(settingValue)],
  );
  if (!result) return null;
  await broadcastCustomLobby(lobbyId, {
    template_id: "IntSettingUpdatedForCustomGame",
    SettingKey: settingKey,
    SettingValue: settingValue,
  });
  return JSON.parse(result as string) as CustomLobby;
}

export async function updateEnabledMapsForCustomLobby(
  lobbyId: string,
  leaderId: string,
  mapsSlugs: string[],
) {
  const result = await evalLua(
    LUA_UPDATE_ENABLED_MAPS,
    [lobbyKey(lobbyId)],
    [leaderId, ...mapsSlugs],
  );
  await broadcastCustomLobby(lobbyId, {
    template_id: "MapsSetForCustomGame",
    Maps: JSON.parse(result as string) as CustomLobby["Maps"],
  });
  return result ? (JSON.parse(result as string) as CustomLobby["Maps"]) : null;
}

export async function updateHandicapsForCustomLobby(
  lobbyId: string,
  leaderId: string,
  playerHandicap: number,
  playerId: string,
) {
  const result = await evalLua(
    LUA_UPDATE_HANDICAP,
    [lobbyKey(lobbyId)],
    [leaderId, playerId, JSON.stringify(playerHandicap)],
  );
  return result ? (JSON.parse(result as string) as CustomLobby["Handicaps"]) : null;
}

export async function switchTeamForCustomLobby(
  lobbyId: string,
  playerId: string,
  teamIndex: number,
) {
  const result = await evalLua(
    LUA_SWITCH_TEAM,
    [lobbyKey(lobbyId)],
    [playerId, teamIndex.toString()],
  );
  if (!result) return null;
  const playerData = JSON.parse(result as string) as LobbyTeam["Players"][string];
  await broadcastCustomLobby(lobbyId, {
    template_id: "PlayerSwitchedCustomLobbyTeams",
    Player: playerData,
    TeamIndex: teamIndex,
  });
  return playerData;
}

export async function addCustomGameBot(
  lobbyId: string,
  playerId: string,
  teamIndex: number,
  botConfig?: {
    Fighter: { AssetPath: string; Slug: string };
    Skin: { AssetPath: string; Slug: string };
    BotSettingSlug: string;
  },
) {
  const result = await evalLua(
    LUA_SWITCH_TEAM,
    [lobbyKey(lobbyId)],
    [playerId, teamIndex.toString()],
  );
  if (!result) return null;
  const playerData = JSON.parse(result as string) as LobbyTeam["Players"][string];
  await broadcastCustomLobby(lobbyId, {
    template_id: "BotAddedToCustomGame",
    TeamIndex: teamIndex,
    Bot: {
      ...botConfig,
      Account: { id: playerId },
      AccountID: playerId,
      LobbyPlayerIndex: playerData.LobbyPlayerIndex,
    },
  });
  return playerData;
}

export async function resetCustomLobbySettings(lobbyId: string, leaderId: string) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby | null;
  if (!lobby?.LeaderID || lobby.LeaderID !== leaderId) return null;

  const resetLobby: CustomLobby = {
    ...lobby,
    ...getCustomLobbyDefaultSettings(lobby.GameModeSlug),
  };
  await jsonSet(lobbyKey(lobbyId), "$", resetLobby);
  return resetLobby;
}

export async function joinCustomLobby(lobbyId: string, accountId: string, isSpectator: boolean) {
  const playerConfig = await getPlayerConfig(accountId);
  const lockedLoadout = playerConfig
    ? JSON.stringify({ Character: playerConfig.Character, Skin: playerConfig.Skin })
    : "";

  const result = await evalLua(
    LUA_JOIN_CUSTOM_LOBBY,
    [lobbyKey(lobbyId)],
    [accountId, isSpectator ? "true" : "false", new Date().toISOString(), lockedLoadout],
  );

  if (!result) return null;
  const raw = result as string;
  // Lua returns cjson.encode(false) = "false" when lobby is not joinable
  if (raw === "false") return null;

  const lobby = JSON.parse(raw) as CustomLobby;
  const playerTeam = lobby.Teams.find((t) => t.Players[accountId]);
  const cluster = lobby.AllMultiplayParams["1"]?.MultiplayClusterSlug ?? "";

  await Promise.all([
    setPlayerCurrentLobbyId(accountId, lobby.MatchID),
    redisClient.publish(
      LOBBY_CREATED_CHANNEL,
      JSON.stringify({ lobbyId: lobby.MatchID, accountId } satisfies LobbyCreatedMessage),
    ),
    broadcastCustomLobby(lobby.MatchID, {
      template_id: "PlayerJoinedLobby",
      Player: playerTeam?.Players[accountId],
      TeamIndex: playerTeam?.TeamIndex,
      Cluster: cluster,
      LockedLoadouts: lobby.LockedLoadouts,
      ModeString: null,
    }),
  ]);
  return lobby;
}

export async function setPlayerReady(lobbyId: string, PlayerID: string, Ready: boolean) {
  const result = await evalLua(
    LUA_SET_PLAYER_READY,
    [lobbyKey(lobbyId)],
    [PlayerID, Ready ? "true" : "false"],
  );
  const lobby = (await getLobby(lobbyId)) as CustomLobby | null;
  const data = {
    MatchID: lobbyId,
    PlayerID,
    Ready,
    bAllPlayersReady: result === 1,
  };
  if (lobby) {
    await broadcastCustomLobby(lobbyId, {
      template_id: "PlayerReadyForLobby",
      ...data,
    });
  }
  return data;
}

export async function kickFromLobby(lobbyId: string, leaderId: string, kickeeId: string) {
  const result = await evalLua(LUA_KICK_FROM_LOBBY, [lobbyKey(lobbyId)], [leaderId, kickeeId]);
  if (!result) return null;
  const player = JSON.parse(result as string) as LobbyTeam["Players"][string];
  await Promise.all([
    redisClient.del(`player:${kickeeId}:lobby`),
    broadcastCustomLobby(lobbyId, {
      template_id: "PlayerKickedFromLobby",
      Player: player,
      KickeeAccountID: kickeeId,
    }),
  ]);
  return player;
}

export async function promoteToLobbyLeader(lobbyId: string, promoteTarget: string) {
  const result = await evalLua(LUA_PROMOTE_LEADER, [lobbyKey(lobbyId)], [promoteTarget]);
  if (!result) return null;
  const ReadyPlayers = JSON.parse(result as string) as Record<string, boolean>;
  await broadcastCustomLobby(lobbyId, {
    template_id: "LobbyLeaderChanged",
    LeaderID: promoteTarget,
    ReadyPlayers,
  });
  return { MatchID: lobbyId, LeaderID: promoteTarget, ReadyPlayers };
}
