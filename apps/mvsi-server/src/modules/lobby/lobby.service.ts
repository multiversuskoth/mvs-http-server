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
  LOBBY_JOINED_CHANNEL,
  type LobbyCreatedMessage,
  type LobbyTeam,
  type PartyLobby,
} from "./lobby.types";
import { TeamStyle } from "../gameModes/gameModes.config";
import { GAME_MODES_CONFIG } from "../../data/gameModes";
import { MAP_ROTATIONS } from "../../data/maps";
import {
  REALTIME_NOTIFICATION_CHANNEL,
  type RealtimeNotificationMessage,
} from "../notifications/notifications.types";

const LOBBY_EX = 2 * 24 * 60 * 60; // 2 days
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function lobbyKey(lobbyId: string) {
  return `lobby:${lobbyId}`;
}

function generateCode(len = 5): string {
  let out = "";
  for (let i = 0; i < len; i++) {
    out += ALPHABET[(Math.random() * ALPHABET.length) | 0];
  }
  return out;
}
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

// ARGV[1]=leaderId, ARGV[2]=gameModeSlug, ARGV[3]=match_config JSON,
// ARGV[4]=maps JSON, ARGV[5]=worldBuffs JSON, ARGV[6]=buffMatrix JSON
// Atomically applies game settings and refreshes PlayerBuffs from current teams.
const LUA_APPLY_GAME_SETTINGS = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
redis.call('JSON.SET', KEYS[1], '$.GameModeSlug', '"' .. ARGV[2] .. '"')
redis.call('JSON.SET', KEYS[1], '$.match_config', ARGV[3])
redis.call('JSON.SET', KEYS[1], '$.Maps',         ARGV[4])
redis.call('JSON.SET', KEYS[1], '$.WorldBuffs',   ARGV[5])
local matrix = cjson.decode(ARGV[6])
local newBuffs = {}
for _, team in ipairs(l.Teams) do
  local teamKey = tostring(team.TeamIndex)
  local teamData = matrix[teamKey]
  if teamData then
    local teamBuffs = teamData.teamBuffs or {}
    local playerBuffsMap = teamData.players or {}
    local slotIdx = 0
    for pid, _ in pairs(team.Players) do
      local playerSpecificBuffs = playerBuffsMap[tostring(slotIdx)] or {}
      local combined = {}
      for _, b in ipairs(playerSpecificBuffs) do table.insert(combined, b) end
      for _, b in ipairs(teamBuffs) do table.insert(combined, b) end
      if #combined > 0 then newBuffs[pid] = combined end
      slotIdx = slotIdx + 1
    end
  end
end
redis.call('JSON.SET', KEYS[1], '$.PlayerBuffs', cjson.encode(newBuffs))
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

// ARGV[1]=leaderId, ARGV[2]=merged worldBuffs JSON (required + user slugs already merged)
const LUA_SET_WORLD_BUFFS = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
redis.call('JSON.SET', KEYS[1], '$.WorldBuffs', ARGV[2])
return 1
`;

// ARGV[1]=leaderId, ARGV[2]=playerId, ARGV[3]=JSON-encoded handicap number
const LUA_UPDATE_HANDICAP = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
l.Handicaps[ARGV[1]] = tonumber(ARGV[2])
redis.call('JSON.SET', KEYS[1], '$.Handicaps.' .. ARGV[1], ARGV[2])
return redis.call('JSON.GET', KEYS[1])
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
if not targetExists then return cjson.encode({ playerData = pdata, gameModeSlug = l.GameModeSlug }) end

redis.call('JSON.DEL',      KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Players.' .. pid)
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. fromJsonIdx .. '].Length', -1)
redis.call('JSON.SET',      KEYS[1], '$.Teams[' .. targetIdx .. '].Players.' .. pid, cjson.encode(pdata))
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. targetIdx .. '].Length', 1)
return cjson.encode({ playerData = pdata, gameModeSlug = l.GameModeSlug })
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

// ARGV[1]=leaderId, ARGV[2]=botAccountId, ARGV[3]=teamIndex (0-based), ARGV[4]=bot pdata JSON (no LobbyPlayerIndex)
const LUA_ADD_CUSTOM_GAME_BOT = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
local botId     = ARGV[2]
local targetIdx = tonumber(ARGV[3])
local teamJsonIdx   = nil
local globalPlayerCount = 0
for i, team in ipairs(l.Teams) do
  globalPlayerCount = globalPlayerCount + team.Length
  if team.TeamIndex == targetIdx then
    teamJsonIdx = i - 1
  end
end
if teamJsonIdx == nil then return nil end
local pdata = cjson.decode(ARGV[4])
pdata.LobbyPlayerIndex = globalPlayerCount
redis.call('JSON.SET',       KEYS[1], '$.Teams[' .. teamJsonIdx .. '].Players.' .. botId, cjson.encode(pdata))
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. teamJsonIdx .. '].Length', 1)
return cjson.encode({ playerData = pdata, gameModeSlug = l.GameModeSlug })
`;

// ARGV[1]=leaderId, ARGV[2]=botAccountId, ARGV[3]=fighter JSON, ARGV[4]=skin JSON, ARGV[5]=botSettingSlug
const LUA_UPDATE_BOT_FIGHTER = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end
local botId = ARGV[2]
local teamJsonIdx = nil
for i, team in ipairs(l.Teams) do
  if team.Players[botId] then
    teamJsonIdx = i - 1
    break
  end
end
if teamJsonIdx == nil then return nil end
local prefix = '$.Teams[' .. teamJsonIdx .. '].Players.' .. botId .. '.'
redis.call('JSON.SET', KEYS[1], prefix .. 'Fighter',       ARGV[3])
redis.call('JSON.SET', KEYS[1], prefix .. 'Skin',          ARGV[4])
redis.call('JSON.SET', KEYS[1], prefix .. 'BotSettingSlug', '"' .. ARGV[5] .. '"')
local updated = l.Teams[teamJsonIdx + 1].Players[botId]
updated.Fighter       = cjson.decode(ARGV[3])
updated.Skin          = cjson.decode(ARGV[4])
updated.BotSettingSlug = ARGV[5]
return cjson.encode(updated)
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
return cjson.encode({ playerData = pdata, gameModeSlug = l.GameModeSlug })
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
    if l.LobbyCode and l.LobbyCode ~= '' then
      redis.call('DEL', 'lobby_code:' .. l.LobbyCode)
    end
    redis.call('DEL', KEYS[1])
  end
end

local leaderID = newLeader or l.LeaderID
return cjson.encode({ playerData = pdata, readyPlayers = l.ReadyPlayers, leaderID = leaderID, gameModeSlug = l.GameModeSlug })
`;

// ARGV[1]=matrix JSON: { [teamIdx]: { teamBuffs: string[], players: { [playerIdx]: string[] } } }
const LUA_REFRESH_PLAYER_BUFFS = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
local matrix = cjson.decode(ARGV[1])
local newBuffs = {}
for _, team in ipairs(l.Teams) do
  local teamKey = tostring(team.TeamIndex)
  local teamData = matrix[teamKey]
  if teamData then
    local teamBuffs = teamData.teamBuffs or {}
    local playerBuffsMap = teamData.players or {}
    local slotIdx = 0
    for pid, _ in pairs(team.Players) do
      local playerSpecificBuffs = playerBuffsMap[tostring(slotIdx)] or {}
      local combined = {}
      for _, b in ipairs(playerSpecificBuffs) do table.insert(combined, b) end
      for _, b in ipairs(teamBuffs) do table.insert(combined, b) end
      if #combined > 0 then newBuffs[pid] = combined end
      slotIdx = slotIdx + 1
    end
  end
end
redis.call('JSON.SET', KEYS[1], '$.PlayerBuffs', cjson.encode(newBuffs))
return 1
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
  console.log(JSON.stringify(notification, null, 2));
  return redisClient.publish(REALTIME_NOTIFICATION_CHANNEL, JSON.stringify(notification));
}

const TEAM_STYLE_TO_GAME_MODE: Partial<Record<TeamStyle, keyof typeof GAME_MODES_CONFIG>> = {
  [TeamStyle.Duos]: "gm_classic_2v2",
  [TeamStyle.Solos]: "gm_classic_1v1",
  [TeamStyle.FFA]: "gm_classic_ffa",
};

async function applyGameSettings(
  lobbyId: string,
  leaderId: string,
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
) {
  const settings = getCustomLobbyDefaultSettings(gameModeSlug);
  const matrix = computeBuffMatrix(gameModeSlug);
  const result = await evalLua(
    LUA_APPLY_GAME_SETTINGS,
    [lobbyKey(lobbyId)],
    [
      leaderId,
      gameModeSlug,
      JSON.stringify(settings.match_config),
      JSON.stringify(settings.Maps),
      JSON.stringify(settings.WorldBuffs),
      JSON.stringify(matrix),
    ],
  );
  return result ? (JSON.parse(result as string) as CustomLobby) : null;
}

function computeBuffMatrix(gameModeSlug: keyof typeof GAME_MODES_CONFIG) {
  const gmTeams = GAME_MODES_CONFIG[gameModeSlug].data.GameModeData.GameModeTeams;
  const matrix: Record<string, { teamBuffs: string[]; players: Record<string, string[]> }> = {};
  gmTeams.forEach((gmTeam, teamIdx) => {
    const players: Record<string, string[]> = {};
    (gmTeam.Players ?? []).forEach((p, playerIdx) => {
      if (p.RequiredPlayerBuffs?.length > 0) {
        players[playerIdx.toString()] = p.RequiredPlayerBuffs;
      }
    });
    matrix[teamIdx.toString()] = {
      teamBuffs: gmTeam.RequiredTeamPlayerBuffs ?? [],
      players,
    };
  });
  return matrix;
}

async function refreshPlayerBuffs(lobbyId: string, gameModeSlug: keyof typeof GAME_MODES_CONFIG) {
  const matrix = computeBuffMatrix(gameModeSlug);
  await evalLua(LUA_REFRESH_PLAYER_BUFFS, [lobbyKey(lobbyId)], [JSON.stringify(matrix)]);
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
  const playerConfig = await getPlayerConfig(accountId);

  if (!playerConfig) {
    throw new Error("PlayerConfig not found");
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

  await notifyLobbyJoined(partyLobby);

  logger.info(`Creating party lobby for ${accountId} - matchLobbyId:${partyLobby.MatchID}`);

  return partyLobby;
}

export async function notifyLobbyJoined(lobby: BaseLobby) {
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
  await redisClient.publish(LOBBY_JOINED_CHANNEL, JSON.stringify(lobbyCreatedMessage));
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

export async function leaveLobby(lobbyId: string, accountId: string, createParty = true) {
  const lobby = await getLobby(lobbyId);
  let newLobby: BaseLobby | null = null;
  if (lobby) {
    if (createParty) {
      newLobby = await createPartyLobby(accountId);
    }
    if ((lobby as CustomLobby).match_config) {
      const result = await evalLua(LUA_LEAVE_CUSTOM_LOBBY, [lobbyKey(lobbyId)], [accountId]);
      if (result) {
        const { playerData, readyPlayers, leaderID, gameModeSlug } = JSON.parse(
          result as string,
        ) as {
          playerData: LobbyTeam["Players"][string];
          readyPlayers: Record<string, boolean>;
          leaderID: string;
          gameModeSlug: keyof typeof GAME_MODES_CONFIG | undefined;
        };

        await Promise.all([
          gameModeSlug ? refreshPlayerBuffs(lobbyId, gameModeSlug) : Promise.resolve(),
          broadcastCustomLobby(lobbyId, {
            template_id: "PlayerLeftLobby",
            Player: playerData,
            ReadyPlayers: readyPlayers,
            NewLeader: leaderID,
          }),
        ]);
      }
    } else {
      await redisClient.del(lobbyKey(lobbyId));
    }
  }
  return newLobby;
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

export function getWorldBuffs(gameModeSlug: keyof typeof GAME_MODES_CONFIG) {
  const worldBuffs = GAME_MODES_CONFIG[gameModeSlug].data.GameModeData.RequiredWorldBuffs ?? [];
  return worldBuffs;
}

export function getRequiredPlayerBuffs(
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
  lobbyTeams: ReadonlyArray<LobbyTeam>,
) {
  const gmTeams = GAME_MODES_CONFIG[gameModeSlug].data.GameModeData.GameModeTeams;
  const playerBuffs: Record<string, string[]> = {};
  for (const lobbyTeam of lobbyTeams) {
    const reqTeamBuffs = gmTeams[lobbyTeam.TeamIndex].RequiredTeamPlayerBuffs;
    Object.keys(lobbyTeam.Players).forEach((playerID, playerIdx) => {
      const reqPlayerBuffs = gmTeams[lobbyTeam.TeamIndex].Players[playerIdx].RequiredPlayerBuffs;
      if (reqPlayerBuffs.length > 0 || reqTeamBuffs.length > 0) {
        playerBuffs[playerID] = [...reqPlayerBuffs, ...reqTeamBuffs];
      }
    });
  }
  return playerBuffs;
}

export function getCustomLobbyDefaultSettings(
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
): CustomLobbySettings {
  const defaultMapConfig = GAME_MODES_CONFIG[gameModeSlug].data;

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
    Maps: getGameModeMaps(gameModeSlug),
    WorldBuffs: getWorldBuffs(gameModeSlug),
    PlayerBuffs: {},
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

  await notifyLobbyJoined(customLobby);

  logger.info(`Creating custom lobby for ${accountId} - matchLobbyId:${customLobby.MatchID}`);
  return customLobby;
}

export async function updateTeamStyleForCustomLobby(
  lobbyId: string,
  leaderId: string,
  newStyle: TeamStyle,
) {
  const gameModeSlug = TEAM_STYLE_TO_GAME_MODE[newStyle] ?? "gm_classic_2v2";
  const lobby = await applyGameSettings(lobbyId, leaderId, gameModeSlug);
  if (!lobby) return null;
  await broadcastCustomLobby(lobbyId, { template_id: "TeamStyleChangedForCustomGame", lobby });
  return lobby;
}

export async function updateGameModeForCustomLobby(
  lobbyId: string,
  leaderId: string,
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
) {
  const lobby = await applyGameSettings(lobbyId, leaderId, gameModeSlug);
  if (!lobby) return null;

  if (lobby) {
    for (const team of lobby.Teams) {
      for (const playerId of Object.keys(team.Players)) {
        if (playerId !== lobby.LeaderID) {
          await broadcastCustomLobby(playerId, {
            template_id: "GameModeUpdatedForCustomGame",
            MatchID: lobbyId,
            lobby,
          });
        }
      }
    }
  }
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
  const lobby = JSON.parse(result as string) as CustomLobby;

  for (const team of lobby.Teams) {
    for (const teamPlayerId of Object.keys(team.Players)) {
      if (teamPlayerId !== leaderId) {
        await broadcastCustomLobby(teamPlayerId, {
          template_id: "IntSettingUpdatedForCustomGame",
          MatchID: lobbyId,
          SettingKey: settingKey,
          SettingValue: settingValue,
        });
      }
    }
  }

  return lobby;
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
  ownerId: string,
  playerHandicap: number,
  playerId: string,
) {
  if (ownerId !== playerId) {
    return null;
  }
  const result = await evalLua(
    LUA_UPDATE_HANDICAP,
    [lobbyKey(lobbyId)],
    [playerId, JSON.stringify(playerHandicap)],
  );
  if (!result) {
    return null;
  }
  const lobby = JSON.parse(result as string) as CustomLobby;
  const Handicaps = lobby.Handicaps;
  for (const team of lobby.Teams) {
    for (const teamPlayerId of Object.keys(team.Players)) {
      if (teamPlayerId !== playerId) {
        await broadcastCustomLobby(teamPlayerId, {
          template_id: "PlayerHandicapSetForCustomGame",
          MatchID: lobbyId,
          Handicaps,
        });
      }
    }
  }

  return Handicaps;
}

export async function setWorldBuffsForCustomLobby(
  lobbyId: string,
  leaderId: string,
  worldBuffSlugs: string[],
) {
  const slugResult = (await redisClient.json.get(lobbyKey(lobbyId), {
    path: "$.GameModeSlug",
  })) as string[] | null;
  const gameModeSlug = slugResult?.[0] as keyof typeof GAME_MODES_CONFIG | undefined;
  if (!gameModeSlug) return null;

  const requiredBuffs = getWorldBuffs(gameModeSlug);
  const merged = [...new Set([...requiredBuffs, ...worldBuffSlugs])];

  const result = await evalLua(
    LUA_SET_WORLD_BUFFS,
    [lobbyKey(lobbyId)],
    [leaderId, JSON.stringify(merged)],
  );
  if (!result) return null;

  await broadcastCustomLobby(lobbyId, {
    template_id: "WorldBuffsSetForCustomGame",
    WorldBuffs: merged,
  });
  return merged;
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
  const { playerData, gameModeSlug } = JSON.parse(result as string) as {
    playerData: LobbyTeam["Players"][string];
    gameModeSlug: keyof typeof GAME_MODES_CONFIG;
  };
  await refreshPlayerBuffs(lobbyId, gameModeSlug);
  await broadcastCustomLobby(lobbyId, {
    template_id: "PlayerSwitchedCustomLobbyTeams",
    Player: playerData,
    TeamIndex: teamIndex,
  });
  return playerData;
}

export async function addCustomGameBot(
  lobbyId: string,
  leaderId: string,
  teamIndex: number,
  botConfig: {
    BotAccountID: string;
    BotSettingSlug: string;
    Fighter: { AssetPath: string; Slug: string };
    Skin: { AssetPath: string; Slug: string };
  },
) {
  const pdata = {
    Account: { id: botConfig.BotAccountID },
    AccountID: botConfig.BotAccountID,
    BotSettingSlug: botConfig.BotSettingSlug,
    Fighter: botConfig.Fighter,
    Skin: botConfig.Skin,
    JoinedAt: new Date(),
    CrossplayPreference: 0,
  };

  const result = await evalLua(
    LUA_ADD_CUSTOM_GAME_BOT,
    [lobbyKey(lobbyId)],
    [leaderId, botConfig.BotAccountID, teamIndex.toString(), JSON.stringify(pdata)],
  );
  if (!result) return null;

  const { playerData, gameModeSlug } = JSON.parse(result as string) as {
    playerData: typeof pdata & { LobbyPlayerIndex: number };
    gameModeSlug: keyof typeof GAME_MODES_CONFIG;
  };

  await Promise.all([
    refreshPlayerBuffs(lobbyId, gameModeSlug),
    broadcastCustomLobby(lobbyId, {
      template_id: "BotAddedToCustomGame",
      TeamIndex: teamIndex,
      Bot: playerData,
    }),
  ]);
  return playerData;
}

export async function updateCustomGameBotFighter(
  lobbyId: string,
  leaderId: string,
  botAccountId: string,
  fighter: { AssetPath: string; Slug: string },
  skin: { AssetPath: string; Slug: string },
  botSettingSlug: string,
) {
  const result = await evalLua(
    LUA_UPDATE_BOT_FIGHTER,
    [lobbyKey(lobbyId)],
    [leaderId, botAccountId, JSON.stringify(fighter), JSON.stringify(skin), botSettingSlug],
  );
  if (!result) return null;

  const bot = JSON.parse(result as string) as {
    Account: { id: string };
    AccountID: string;
    BotSettingSlug: string;
    Fighter: { AssetPath: string; Slug: string };
    Skin: { AssetPath: string; Slug: string };
    LobbyPlayerIndex: number;
  };

  await broadcastCustomLobby(lobbyId, { template_id: "BotSettingsUpdatedForCustomGame", Bot: bot });
  return bot;
}

export async function resetCustomLobbySettings(lobbyId: string, leaderId: string) {
  const slugResult = (await redisClient.json.get(lobbyKey(lobbyId), {
    path: "$.GameModeSlug",
  })) as string[] | null;
  const gameModeSlug = slugResult?.[0] as keyof typeof GAME_MODES_CONFIG | undefined;
  if (!gameModeSlug) return null;

  const lobby = await applyGameSettings(lobbyId, leaderId, gameModeSlug);
  if (!lobby) return null;

  const data = {
    MatchID: lobbyId,
    GameModeSlug: lobby.GameModeSlug,
    MatchConfig: lobby.match_config,
    Maps: lobby.Maps,
  };
  await broadcastCustomLobby(lobbyId, {
    template_id: "CustomGameResetToDefaults",
    ...data,
  });

  return data;
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

  await refreshPlayerBuffs(lobbyId, lobby.GameModeSlug);
  const updatedLobby = await getLobby(lobbyId);

  const playerTeam = lobby.Teams.find((t) => t.Players[accountId]);
  const cluster = lobby.AllMultiplayParams["1"]?.MultiplayClusterSlug ?? "";

  await redisClient.publish(
    LOBBY_JOINED_CHANNEL,
    JSON.stringify({ lobbyId: lobby.MatchID, accountId } satisfies LobbyCreatedMessage),
  );

  if (updatedLobby) {
    for (const team of lobby.Teams) {
      for (const playerId of Object.keys(team.Players)) {
        if (playerId !== accountId) {
          await broadcastCustomLobby(playerId, {
            MatchID: lobbyId,
            template_id: "PlayerJoinedLobby",
            Player: playerTeam?.Players[accountId],
            TeamIndex: playerTeam?.TeamIndex,
            Cluster: cluster,
            LockedLoadouts: lobby.LockedLoadouts,
            ModeString: null,
          });
        }
      }
    }
  }

  return updatedLobby;
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
  const { playerData: player, gameModeSlug: kickGameModeSlug } = JSON.parse(result as string) as {
    playerData: LobbyTeam["Players"][string];
    gameModeSlug: keyof typeof GAME_MODES_CONFIG;
  };
  await Promise.all([
    refreshPlayerBuffs(lobbyId, kickGameModeSlug),
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

export async function generateLobbyCode(lobbyId: string, leaderId: string) {
  const lobby = await getLobby(lobbyId);
  if (!lobby || lobby.LeaderID !== leaderId) {
    return null;
  }
  let code = "";
  let result = null;
  if (!result) {
    code = generateCode(5);
    result = await redisClient.set(`lobby_code:${code}`, lobbyId, {
      NX: true,
      EX: LOBBY_EX,
    });
  }
  await redisClient.json.set(lobbyKey(lobbyId), "$.LobbyCode", code);
  return code;
}

export async function getLobbyIdFromCode(code: string) {
  const lobbyId = await redisClient.get(`lobby_code:${code}`);
  return lobbyId;
}
