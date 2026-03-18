import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getCurrentCRC } from "../../data/config";
import { MATCH_TYPES, MatchmakingActiveMatch } from "../matchmaking/matchmaking.types";
import { getPlayerConfig, getPlayersConfig } from "../playerConfig/playerConfig.service";
import type { PlayerConfig } from "../playerConfig/playerConfig.types";
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
  REALTIME_NOTIFICATION_TOPIC_CHANNEL,
  type RealtimeNotificationTopicMessage,
} from "../notifications/notifications.types";
import { randomBytes } from "node:crypto";
import { notifyActiveMatchCreated } from "../matchmaking/matchmaking.service";

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
// Atomically applies game settings, rearranges teams when TeamStyle changes,
// and refreshes PlayerBuffs. Returns current lobby unchanged on invalid transitions.
const LUA_APPLY_GAME_SETTINGS = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)
if l.LeaderID ~= ARGV[1] then return nil end

local newConfig = cjson.decode(ARGV[3])
local newStyle  = newConfig.TeamStyle
local oldStyle  = l.match_config.TeamStyle

if oldStyle ~= newStyle then
  -- Collect non-spectator players in team order
  local players = {}
  for _, team in ipairs(l.Teams) do
    if team.TeamIndex ~= 4 then
      for pid, pdata in pairs(team.Players) do
        table.insert(players, { pid = pid, pdata = pdata })
      end
    end
  end
  local total = #players

  -- Validate transition rules
  if newStyle == 'Solos' and total > 2 then
    return redis.call('JSON.GET', KEYS[1])
  end

  -- Build TeamIndex -> Teams array index lookup
  local teamByIdx = {}
  for i, team in ipairs(l.Teams) do
    teamByIdx[team.TeamIndex] = i
  end

  -- Clear all non-spectator teams
  for _, team in ipairs(l.Teams) do
    if team.TeamIndex ~= 4 then
      team.Players = {}
      team.Length  = 0
    end
  end

  -- Redistribute players according to new style
  for i, player in ipairs(players) do
    local targetTeamIdx
    if newStyle == 'FFA' then
      targetTeamIdx = i - 1        -- each player gets own team: 0,1,2,3
    elseif newStyle == 'Duos' then
      targetTeamIdx = math.floor((i - 1) / 2)  -- pairs: 0,0,1,1
    elseif newStyle == 'Solos' then
      targetTeamIdx = i - 1        -- one per team: 0,1
    else
      targetTeamIdx = 0
    end
    local arrIdx = teamByIdx[targetTeamIdx]
    if arrIdx then
      l.Teams[arrIdx].Players[player.pid] = player.pdata
      l.Teams[arrIdx].Length = l.Teams[arrIdx].Length + 1
    end
  end

  redis.call('JSON.SET', KEYS[1], '$.Teams', cjson.encode(l.Teams))
end

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

// ARGV[1]=playerId, ARGV[2]=targetTeamIndex (0-based).
// Duos: only teams 0/1, max 2 per team. Any mode: team 4 (spectators) max 4.
const LUA_SWITCH_TEAM = `
local s = redis.call('JSON.GET', KEYS[1])
if not s then return nil end
local l = cjson.decode(s)

local pid = ARGV[1]
local targetIdx = tonumber(ARGV[2])
local style = l.match_config.TeamStyle

-- Find player's current team
local fromJsonIdx = nil
local fromTeamIdx = nil
local pdata = nil
for i, team in ipairs(l.Teams) do
  if team.Players[pid] then
    fromJsonIdx = i - 1
    fromTeamIdx = team.TeamIndex
    pdata = team.Players[pid]
    break
  end
end
if fromJsonIdx == nil then return nil end

-- Find target team by TeamIndex
local targetJsonIdx = nil
local targetLen = nil
for i, team in ipairs(l.Teams) do
  if team.TeamIndex == targetIdx then
    targetJsonIdx = i - 1
    targetLen = team.Length
    break
  end
end
if targetJsonIdx == nil then return nil end

-- No-op if already on that team
if fromJsonIdx == targetJsonIdx then
  return cjson.encode({ playerData = pdata, gameModeSlug = l.GameModeSlug })
end

-- Capacity rules per direction:
if targetIdx == 4 then
  -- → Spectator: any mode, max 4
  if targetLen >= 4 then return nil end
elseif fromTeamIdx == 4 then
  -- Spectator → player: capacity depends on game mode
  if style == 'Duos' then
    if targetIdx ~= 0 and targetIdx ~= 1 then return nil end
    if targetLen >= 2 then return nil end
  elseif style == 'FFA' then
    if targetIdx < 0 or targetIdx > 3 then return nil end
    if targetLen >= 1 then return nil end
  else
    -- Solos / Other
    if targetIdx ~= 0 and targetIdx ~= 1 then return nil end
    if targetLen >= 1 then return nil end
  end
else
  -- Player → player: Duos only, teams 0/1, max 2
  if style ~= 'Duos' then return nil end
  if targetIdx ~= 0 and targetIdx ~= 1 then return nil end
  if targetLen >= 2 then return nil end
end

redis.call('JSON.DEL',       KEYS[1], '$.Teams[' .. fromJsonIdx   .. '].Players.' .. pid)
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. fromJsonIdx   .. '].Length', -1)
redis.call('JSON.SET',       KEYS[1], '$.Teams[' .. targetJsonIdx .. '].Players.' .. pid, cjson.encode(pdata))
redis.call('JSON.NUMINCRBY', KEYS[1], '$.Teams[' .. targetJsonIdx .. '].Length', 1)
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

-- compute global player count for LobbyPlayerIndex
local totalPlayers = 0
for _, team in ipairs(l.Teams) do
  totalPlayers = totalPlayers + team.Length
end

local teamJsonIdx = nil
for i, team in ipairs(l.Teams) do
  local ok = false
  if isSpectator then
    ok = team.TeamIndex == 4 and team.Length < 4
  elseif style == 'FFA' then
    ok = team.TeamIndex ~= 4 and team.Length < 1
  elseif style == 'Solos' or style == 'Other' then
    ok = (team.TeamIndex == 0 or team.TeamIndex == 1) and team.Length < 1
  elseif style == 'Duos' then
    ok = (team.TeamIndex == 0 or team.TeamIndex == 1) and team.Length < 2
  end
  if ok then
    teamJsonIdx = i - 1
    break
  end
end
if teamJsonIdx == nil then return nil end

local pdata = cjson.encode({
  Account           = { id = accountId },
  JoinedAt          = ts,
  BotSettingSlug    = '',
  LobbyPlayerIndex  = totalPlayers,
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
redis.call('JSON.SET', KEYS[1], '$.ReadyPlayers.' .. target, 'true')
return redis.call('JSON.GET', KEYS[1])
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
  const notification: RealtimeNotificationTopicMessage = {
    topic: lobbyId,
    notification: {
      data: { MatchID: lobbyId, ...data },
      payload: { match: { id: lobbyId }, custom_notification: "realtime" },
      header: "",
      cmd: "update",
    },
  };
  return redisClient.publish(REALTIME_NOTIFICATION_TOPIC_CHANNEL, JSON.stringify(notification));
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
    const notification: RealtimeNotificationTopicMessage = {
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
    await redisClient.publish(REALTIME_NOTIFICATION_TOPIC_CHANNEL, JSON.stringify(notification));
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
  const notification: RealtimeNotificationTopicMessage = {
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
  await redisClient.publish(REALTIME_NOTIFICATION_TOPIC_CHANNEL, JSON.stringify(notification));
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
  for (const team of lobby.Teams) {
    for (const playerId of Object.keys(team.Players)) {
      if (playerId !== lobby.LeaderID) {
        await broadcastCustomLobby(playerId, {
          template_id: "TeamStyleChangedForCustomGame",
          MatchID: lobbyId,
          lobby,
        });
      }
    }
  }

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
  console.log(JSON.stringify(bot, null, 2));
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

export async function promoteToLobbyLeader(
  lobbyId: string,
  leaderID: string,
  promoteTarget: string,
) {
  const result = await evalLua(LUA_PROMOTE_LEADER, [lobbyKey(lobbyId)], [promoteTarget]);
  if (!result) return null;
  const lobby = JSON.parse(result as string) as CustomLobby;
  for (const team of lobby.Teams) {
    for (const playerId of Object.keys(team.Players)) {
      if (playerId !== leaderID) {
        await broadcastCustomLobby(playerId, {
          template_id: "LobbyLeaderChanged",
          LeaderID: promoteTarget,
          MatchID: lobbyId,
          ReadyPlayers: lobby.ReadyPlayers,
        });
      }
    }
  }
  return { MatchID: lobbyId, LeaderID: promoteTarget, ReadyPlayers: lobby.ReadyPlayers };
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

export async function startCustomMatch(lobbyId: string, leaderId: string) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby | null;
  if (!lobby || lobby.LeaderID !== leaderId) {
    return null;
  }
  const matchId = new ObjectId().toHexString();
  const resultId = new ObjectId().toHexString();
  const selectedMaps = lobby.Maps.filter((m) => m.IsSelected);
  const randomMap = selectedMaps[Math.floor(Math.random() * selectedMaps.length)] ?? lobby.Maps[0];

  const playerConfigs = await getPlayersConfig(Object.keys(lobby.PlayerGameplayPreferences));

  const BOT_DIFFICULTY: Record<string, { min: number; max: number }> = {
    VeryEasy: { min: 0, max: 0 },
    Easy: { min: 1, max: 1 },
    Medium: { min: 2, max: 2 },
    Hard: { min: 3, max: 3 },
  };

  const Players: Record<string, PlayerConfig> = {};
  const Spectators: Record<string, PlayerConfig> = {};

  for (const team of lobby.Teams) {
    const isSpectatorTeam = team.TeamIndex === 4;
    for (const [playerId, lobbyPlayer] of Object.entries(team.Players)) {
      const isBot = lobbyPlayer.BotSettingSlug !== "";
      const buffs = lobby.PlayerBuffs?.[playerId] ?? [];
      const handicap = lobby.Handicaps?.[playerId] ?? 0;

      let playerConfig: PlayerConfig;

      if (isBot) {
        const botPlayer = lobbyPlayer as LobbyTeam["Players"][string] & {
          Fighter?: { AssetPath: string; Slug: string };
          Skin?: { AssetPath: string; Slug: string };
        };
        const diff = BOT_DIFFICULTY[lobbyPlayer.BotSettingSlug] ?? BOT_DIFFICULTY.Medium;
        playerConfig = {
          AccountId: playerId,
          Username: playerId,
          bUseCharacterDisplayName: false,
          PlayerIndex: lobbyPlayer.LobbyPlayerIndex,
          TeamIndex: team.TeamIndex,
          Character: botPlayer.Fighter?.Slug ?? "",
          Skin: botPlayer.Skin?.Slug ?? "",
          Taunts: [],
          Perks: [],
          Banner: "",
          ProfileIcon: "",
          RingoutVfx: "",
          bIsBot: true,
          BotBehaviorOverride: "",
          BotDifficultyMin: diff.min,
          BotDifficultyMax: diff.max,
          Buffs: buffs,
          StatTrackers: [],
          Gems: [],
          StartingDamage: 0,
          Handicap: handicap,
          GameplayPreferences: 0,
          bAutoPartyPreference: false,
          PartyMember: null,
          PartyId: null,
          RankedTier: null,
          RankedDivision: null,
          WinStreak: null,
          IsHost: false,
          Ip: "",
        };
      } else {
        const config = playerConfigs.get(playerId);
        if (!config) continue;
        const loadout = lobby.LockedLoadouts[playerId];
        playerConfig = {
          ...config,
          PlayerIndex: lobbyPlayer.LobbyPlayerIndex,
          TeamIndex: team.TeamIndex,
          Character: loadout?.Character ?? config.Character,
          Skin: loadout?.Skin ?? config.Skin,
          Buffs: buffs,
          Handicap: handicap,
          GameplayPreferences: Number(
            lobby.PlayerGameplayPreferences?.[playerId] ?? config.GameplayPreferences,
          ),
          PartyId: null,
          PartyMember: null,
          IsHost: playerId === lobby.LeaderID,
        };
      }

      if (isSpectatorTeam) {
        Spectators[playerId] = playerConfig;
      } else {
        Players[playerId] = playerConfig;
      }
    }
  }

  const match: MatchmakingActiveMatch = {
    matchConfig: {
      Spectators,
      TeamData: [],
      bIsTutorial: false,
      bIsOnlineMatch: true,
      bIsRift: false,
      bIsPvP: true,
      bIsCustomGame: true,
      bIsRanked: false,
      bIsCasualSpecial: false,
      Cluster: "",
      bAllowMapHazards: lobby.match_config.AllowHazards,
      WorldBuffs: lobby.WorldBuffs,
      RiftNodeAttunement: "Attunements:None",
      CountdownDisplay: "CountdownTypes:XvY",
      HudSettings: {
        bDisplayPortraits: true,
        bDisplayTimer: true,
        bDisplayStocks: true,
      },
      MatchDurationSeconds: lobby.match_config.MatchDuration,
      ScoreEvaluationRule: "TargetScoreIsWin",
      ScoreAttributionRule: "AttributeToAttacker",
      CustomGameSettings: {
        NumRingouts: lobby.match_config.NumRingoutsForWin,
        MatchTime: lobby.match_config.MatchDuration,
        bHazardsEnabled: lobby.match_config.AllowHazards,
        bShieldsEnabled: Boolean(lobby.match_config.EnableShields),
      },
      ArenaModeInfo: null,
      RiftNodeId: "",
      bModeGrantsProgress: true,
      EventQueueSlug: "",
      MatchId: matchId,
      Created: new Date(),
      Map: randomMap.Map,
      ModeString: lobby.ModeString ?? "",
      Players,
    },
    state: "pending",
    matchKey: randomBytes(32).toString("base64"),
    resultId,
  };

  await notifyActiveMatchCreated(match.matchConfig.MatchId, match);

  return match;
}
