import { randomUUID } from "node:crypto";
import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import type { MVSI_Websocket } from "../../websocket.elysia";
import { getLobby, lockLobby } from "../lobby/lobby.service";
import { LOBBY_QUEUED_CHANNEL } from "../lobby/lobby.types";
import {
  ACTIVEMATCH_END_CHANNEL,
  MATCH_STATE,
  type MATCH_TYPES,
  MATCHMAKING_CANCEL_CHANNEL,
  MATCHMAKING_COMPLETE_CHANNEL,
  MATCHMAKING_GAME_SERVER_READY_CHANNEL,
  MATCHMAKING_MATCH_FOUND_CHANNEL,
  MATCHMAKING_PERKS_LOCKED_CHANNEL,
  type MatchEndMessage,
  type MatchmakingActiveMatch,
  type MatchmakingCancelMessage,
  type MatchmakingCompleteMessage,
  type MatchmakingPerksLockMessage,
  type MatchmakingTicket,
  type ServerInstanceReadyMessage,
} from "./matchmaking.types";

const MATCHMAKING_TICKET_KEY = (matchmakingRequestId: string) =>
  `matchmakingTicket:${matchmakingRequestId}`;
const MATCH_KEY = (matchId: string) => `matchmaking:${matchId}`;
const MATCH_PERKS_PLAYER_KEY = (matchId: string, playerId: string) =>
  `${MATCH_KEY(matchId)}:perks:${playerId}`;

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
          id: player.ProfileId,
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
  const matchStr = await redisClient.get(MATCH_KEY(matchId));
  if (matchStr) {
    const redisMatch = JSON.parse(matchStr) as MatchmakingActiveMatch;
    return redisMatch;
  }
  return null;
}

export async function updateActiveMatch(matchId: string, match: MatchmakingActiveMatch) {
  const data = JSON.stringify(match);
  await redisClient.set(MATCH_KEY(matchId), data, { EX: 60 * 20 });
}

export async function notifyActiveMatchCreated(
  containerMatchId: string,
  match: MatchmakingActiveMatch,
) {
  const EX = 60 * 20;
  const data = JSON.stringify(match);
  await redisClient.set(MATCH_KEY(containerMatchId), data, { EX });
  await redisClient.publish(MATCHMAKING_MATCH_FOUND_CHANNEL, data);
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
      party_size: playerIds.length,
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

    const message: MatchmakingCancelMessage = {
      playersIds: [accountId],
      matchmakingId,
      matchType: matchMakingTicket.matchType,
    };
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

export async function notifyGameServerReady(containerMatchId: string, playerIds: string[]) {
  const message: ServerInstanceReadyMessage = {
    containerMatchId,
    playerIds,
    resultId: new ObjectId().toHexString(),
  };
  await redisClient.publish(MATCHMAKING_GAME_SERVER_READY_CHANNEL, JSON.stringify(message));
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
  const EX = 60 * 20;
  await redisClient.set(
    MATCH_PERKS_PLAYER_KEY(containerMatchId, accountId),
    JSON.stringify(perks),
    { EX },
  );
  const match = await getActiveMatch(containerMatchId);
  if (match && match.state !== "locked") {
    const playerIds = Object.keys(match.matchConfig.Players);
    const allPerksLocked = await getAllPlayersPerkLocked(containerMatchId, playerIds);

    if (allPerksLocked.size === playerIds.length) {
      Object.keys(match.matchConfig.Players).forEach((playerId) => {
        const player = match.matchConfig.Players[playerId];
        player.Perks = allPerksLocked.get(playerId) || [];
      });
      await updateActiveMatch(containerMatchId, match);
      await notifyAllPerksLocked(containerMatchId, playerIds);
    }
    return true;
  }
  return false;
}

async function notifyAllPerksLocked(containerMatchId: string, playerIds: string[]) {
  const message: MatchmakingPerksLockMessage = { containerMatchId, playerIds };
  await redisClient.publish(MATCHMAKING_PERKS_LOCKED_CHANNEL, JSON.stringify(message));
  logger.info(`All perks locked ${containerMatchId}, players, (${playerIds.join(",")})`);
}

export async function verifyAllPlayersPerkLocked(containerMatchId: string, playerIds: string[]) {
  let perksLocked = true;
  for (const playerId of playerIds) {
    const perks = await getPlayerPerksForMatch(containerMatchId, playerId);
    if (!perks) {
      perksLocked = false;
    }
  }
  return perksLocked;
}

export async function getAllPlayersPerkLocked(containerMatchId: string, playerIds: string[]) {
  const playerPerksMap = new Map<string, string[]>();
  for (const playerId of playerIds) {
    const perks = await getPlayerPerksForMatch(containerMatchId, playerId);
    if (perks) {
      playerPerksMap.set(playerId, perks);
    }
  }
  return playerPerksMap;
}

export async function getPlayerPerksForMatch(containerMatchId: string, playerId: string) {
  const playerPerkStr = (await redisClient.GET(
    MATCH_PERKS_PLAYER_KEY(containerMatchId, playerId),
  )) as string;
  if (playerPerkStr) {
    const playerPerk = JSON.parse(playerPerkStr) as string[];
    return playerPerk;
  }
  return null;
}

export function stopMatchTick(ws: MVSI_Websocket) {
  if (ws.data.matchTick) {
    clearInterval(ws.data.matchTick);
    ws.data.matchTick = undefined;
  }
}

export async function getTicketsFromQueue(queueKey: string) {
  const ticketsStr = await redisClient.lRange(queueKey, 0, -1);
  const tickets = ticketsStr.map((t) => JSON.parse(t) as MatchmakingTicket);
  return tickets;
}

export async function removeTicketsFromQueue(queueType: MATCH_TYPES, tickets: MatchmakingTicket[]) {
  for (const ticket of tickets) {
    const success = await redisClient.lRem(queueType, 0, JSON.stringify(ticket));
    if (success > 0) {
      logger.info(`Removed ticket ${ticket.partyId} from ${queueType} queue for match`);
    }
  }
}

export async function addTicketToQueue(queueKey: string, data: MatchmakingTicket) {
  const datStr = JSON.stringify(data);
  await redisClient.lPush(queueKey, datStr);
  await redisClient.set(MATCHMAKING_TICKET_KEY(data.matchmakingRequestId), datStr);
}

async function notifyLobbyPartyQueuedStarted(ticket: MatchmakingTicket) {
  await redisClient.publish(LOBBY_QUEUED_CHANNEL, JSON.stringify(ticket));
}
