import { randomUUID } from "node:crypto";
import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getLobby, lockLobby } from "../lobby/lobby.service";
import { LOBBY_QUEUED_CHANNEL } from "../lobby/lobby.types";
import {
  ACTIVEMATCH_END_CHANNEL,
  MATCH_STATE,
  type MATCH_TYPES,
  MATCHMAKING_CANCEL_CHANNEL,
  MATCHMAKING_COMPLETE_CHANNEL,
  MATCHMAKING_MATCH_FOUND_CHANNEL,
  MATCHMAKING_PERKS_LOCKED_CHANNEL,
  type MatchEndMessage,
  type MatchmakingActiveMatch,
  type MatchmakingCancelMessage,
  type MatchmakingCompleteMessage,
  type MatchmakingTicket,
} from "./matchmaking.types";

const MATCHMAKING_TICKET_KEY = (matchmakingRequestId: string) =>
  `matchmakingTicket:${matchmakingRequestId}`;
const MATCH_KEY = (matchId: string) => `match:${matchId}`;

export async function requestMatchmakingByLobby(
  lobbyId: string,
  accountId: string,
  matchType: MATCH_TYPES,
  MultiplayParams: any,
  slug: string,
) {
  // TODO: Get region_id and latency from player presence
  const region_id = "19c465a7-f21f-11ea-a5e3-0954f48c5682";
  const latency = 0.04791003838181496;
  const lobby = await getLobby(lobbyId);
  if (!lobby) {
    return;
  }

  const newMatchId = new ObjectId().toHexString();
  const data = {
    id: newMatchId,
    updated_at: new Date(),
    requester_account_id: lobby.LeaderID,
    is_concurrent: false,
    concurrent_identifier: randomUUID(),
    created_at: new Date(),
    data: {
      MultiplayParams: MultiplayParams,
      crossplay_buckets: ["All", "PC"],
      version: env.GAME_VERSION,
      matchmaking_rating: 724.7928014055103,
      player_count: lobby.Teams[0].Length,
      double_character_key: "character_TODO_SAME_CHAR_IN_SAME_TEAM",
      rp: 0,
      allowed_buckets: ["Any"],
      allowed_buckets_relaxed: ["Any"],
    },
    server_data: null,
    criteria_slug: slug,
    cluster: MultiplayParams.MultiplayClusterSlug,
    players_connection_info: Object.fromEntries(
      Object.entries(lobby.Teams[0].Players).map(([accountId]) => [
        accountId,
        {
          game_server_region_data: [{ region_id: region_id, latency: latency }],
        },
      ]),
    ),
    player_connections: Object.fromEntries(
      Object.keys(lobby.Teams[0].Players).map((accountId) => [accountId, [randomUUID()]]),
    ),
    players: Object.fromEntries(
      Object.entries(lobby.Teams[0].Players).map(([accountId, player]) => [
        accountId,
        {
          id: accountId,
          updated_at: null,
          account_id: accountId,
          created_at: null,
          last_login: null,
          last_inbox_read: null,
          points: null,
          data: {},
          cross_match_results: {},
          notifications: {},
          aggregates: {},
          calculations: {},
          files: [],
          random_distribution: null,
        },
      ]),
    ),
    groups: [lobby.Teams[0].Length],
    relationships: [],
    recently_played: Object.fromEntries(
      Object.keys(lobby.Teams[0].Players).map((accountId) => [accountId, []]),
    ),
    from_match: lobbyId,
    reuse_match: false,
    party_id: null,
    state: MATCH_STATE.QUEUED,
    user_rule_config: [],
    game_server: {
      unique_key: null,
      backend: "multiplay",
      launch_configs: [
        {
          profile_id: "1252928",
          fleet_id: "6edd4138-20ef-11ec-a2b7-4a5119a45304",
          region_id: "19c714ff-f21f-11ea-b144-4d87911ee195",
          backend: "multiplay",
        },
      ],
      optional_launch_config_params: {},
    },
    server_submitted: false,
  };

  await queueMatchmaking(accountId, [accountId], data.from_match, data.id, matchType);
  return data;
}

export async function getActiveMatch(matchId: string) {
  const match = (await redisClient.json.get(MATCH_KEY(matchId))) as MatchmakingActiveMatch | null;
  return match;
}

export async function notifyActiveMatchCreated(
  containerMatchId: string,
  match: MatchmakingActiveMatch,
) {
  const EX = 60 * 20;
  await redisClient.json.set(MATCH_KEY(containerMatchId), "$", match);
  await redisClient.expire(MATCH_KEY(containerMatchId), EX);
  await redisClient.publish(MATCHMAKING_MATCH_FOUND_CHANNEL, JSON.stringify(match));
}

export async function queueMatchmaking(
  partyLeaderId: string,
  playerIds: string[],
  partyId: string,
  matchmakingRequestId: string,
  matchType: MATCH_TYPES,
): Promise<void> {
  try {
    const ticket: MatchmakingTicket = {
      region: "MVSI",
      skill: 0,
      created_at: new Date(),
      matchType,
      partyLeaderId,
      matchmakingRequestId,
      partyId,
      partySize: playerIds.length,
      playerIds,
    };
    await lockLobby(matchmakingRequestId, partyLeaderId);
    await notifyLobbyPartyQueuedStarted(ticket);
    await addTicketToQueue(ticket.matchType, ticket);

    logger.info(
      `Party (${partyId}) matchmakingRequestId(${matchmakingRequestId}) has been added to ${matchType} matchmaking queue. Players (${playerIds.join(
        ",",
      )})`,
    );
  } catch (error) {
    logger.error(`Error queueing player: ${error}`);
    throw error;
  }
}

export async function cancelMatchmaking(accountId: string, matchmakingId: string) {
  const matchMakingTicketStr = await redisClient.get(MATCHMAKING_TICKET_KEY(matchmakingId));
  if (matchMakingTicketStr) {
    const matchMakingTicket = JSON.parse(matchMakingTicketStr) as MatchmakingTicket;
    if (matchMakingTicket.partyLeaderId !== accountId) {
      return;
    }

    const message: MatchmakingCancelMessage = {
      playersIds: matchMakingTicket.playerIds,
      matchmakingRequestId: matchmakingId,
    };
    await removeTicketsFromQueue(matchMakingTicket.matchType, [matchMakingTicket]);
    await redisClient.publish(MATCHMAKING_CANCEL_CHANNEL, JSON.stringify(message));
  }
}

export async function notifyActiveMatchEnded(playerIds: string[], matchId: string) {
  const notification: MatchEndMessage = {
    playersIds: playerIds,
    matchId,
  };

  await redisClient.publish(ACTIVEMATCH_END_CHANNEL, JSON.stringify(notification));
}

export async function completeMatchmaking(
  containerMatchId: string,
  matchmakingRequestId: string,
  playerIds: string[],
) {
  const message: MatchmakingCompleteMessage = {
    containerMatchId,
    playerIds,
    matchmakingRequestId,
    resultId: new ObjectId().toHexString(),
  };
  await redisClient.publish(MATCHMAKING_COMPLETE_CHANNEL, JSON.stringify(message));
}

export async function lockPerks(containerMatchId: string, accountId: string, perks: string[]) {
  const script = `
    redis.call('JSON.SET', KEYS[1], '$.matchConfig.Players["' .. ARGV[1] .. '"].Perks', ARGV[2])
    local result = redis.call('JSON.GET', KEYS[1], '$.matchConfig.Players')
    local decoded = cjson.decode(result)
    local players = decoded[1]
    
    local ids = {}
    local ready = true
    for id, config in pairs(players) do
        table.insert(ids, id)
        if not config.Perks or #config.Perks == 0 then ready = false end
    end

    if ready then
        redis.call('JSON.SET', KEYS[1], '$.state', '"locked"')
        local msg = { containerMatchIdKey = KEYS[1], playerIds = ids }
        redis.call('PUBLISH', '${MATCHMAKING_PERKS_LOCKED_CHANNEL}', cjson.encode(msg))
        return true
    end
    return false
  `;

  const result = await redisClient.eval(script, {
    keys: [MATCH_KEY(containerMatchId)],
    arguments: [accountId, JSON.stringify(perks)],
  });
  return Boolean(result);
}

export async function getMatchmakingQueue(queueKey: string) {
  const ids = await redisClient.zRange(queueKey, 0, -1);
  return ids;
}

export async function getQueueTickets(ids: string[]) {
  const tickets = await redisClient.mGet(ids.map((id) => MATCHMAKING_TICKET_KEY(id)));
  return tickets.map((ticket) => JSON.parse(ticket as string) as MatchmakingTicket);
}

export async function removeTicketsFromQueue(queueType: MATCH_TYPES, tickets: MatchmakingTicket[]) {
  for (const ticket of tickets) {
    await redisClient.del(MATCHMAKING_TICKET_KEY(ticket.matchmakingRequestId));
    const success = await redisClient.zRem(queueType, ticket.matchmakingRequestId);
    if (success > 0) {
      logger.info(`Removed ticket ${ticket.partyId} from ${queueType} queue for match`);
    }
  }
}

export async function addTicketToQueue(queueKey: string, data: MatchmakingTicket) {
  const pipeline = redisClient.multi();
  pipeline.zAdd(queueKey, {
    score: data.created_at.getTime(),
    value: data.matchmakingRequestId,
  });
  const datStr = JSON.stringify(data);
  pipeline.set(MATCHMAKING_TICKET_KEY(data.matchmakingRequestId), datStr);
  await pipeline.execAsPipeline();
}

async function notifyLobbyPartyQueuedStarted(ticket: MatchmakingTicket) {
  await redisClient.publish(LOBBY_QUEUED_CHANNEL, JSON.stringify(ticket));
}
