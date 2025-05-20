import {
  redisClient,
  RedisMatchTicket,
  ON_GAMEPLAY_CONFIG_NOTIFIED_CHANNEL,
  MATCHMAKING_COMPLETE_CHANNEL,
  RedisMatch,
  RedisTeamEntry,
  MATCH_FOUND_NOTIFICATION,
  redisGameServerInstanceReady,
  redisMatchMakingComplete,
  redisPopMatchTicketsFromQueue,
  redisGetPlayer,
  redisUpdateMatch,
  redisOnGameplayConfigNotified,
  redisGetMatchTickets,
} from "./config/redis";
import { logger } from "./config/logger";
import ObjectID from "bson-objectid";
import { randomBytes } from "crypto";
import { MATCH_TYPES } from "./services/matchmakingService";

const CHECK_INTERVAL_MS = 1000;

const MATCH_RULES = {
  "1v1": {
    playersPerTeam: 1,
    teamsRequired: 2,
    totalPlayersRequired: 2,
  },
  "2v2": {
    playersPerTeam: 2,
    teamsRequired: 2,
    totalPlayersRequired: 4,
  },
};

export function startMatchMakingWorker(): void {
  logger.info("Starting matchmaking worker...");

  // Run the first check immediately
  checkQueues();

  // Then set up interval to check regularly
  setInterval(checkQueues, CHECK_INTERVAL_MS);

  logger.info(`Matchmaking worker started, checking queue every ${CHECK_INTERVAL_MS}ms`);
}

// Process 1v1 matchmaking queue
async function process1v1Queue(): Promise<boolean> {
  try {
    // Get all tickets in the queue
    const tickets = await redisGetMatchTickets(MATCH_TYPES.ONE_V_ONE);

    if (tickets.length < MATCH_RULES["1v1"].teamsRequired) {
      return false; // Not enough tickets to make a match
    }

    logger.info(`Found ${tickets.length} tickets in 1v1 queue, attempting to create a match`);

    // Parse ticket data from queue
    const matchedTickets: RedisMatchTicket[] = [];
    for (const ticket of tickets) {
      try {
        if (ticket.party_size === 1) {
          // For 1v1, we only want solo players
          matchedTickets.push(ticket);

          // If we have enough tickets, stop looking
          if (matchedTickets.length === MATCH_RULES["1v1"].teamsRequired) {
            break;
          }
        }
      } catch (error) {
        logger.error(`Error parsing ticket in 1v1 queue: ${error}`);
        // Continue to next ticket
      }
    }

    // Check if we have enough tickets for a match
    if (matchedTickets.length === MATCH_RULES["1v1"].teamsRequired) {
      // Remove matched tickets from queue
      await redisPopMatchTicketsFromQueue(MATCH_TYPES.ONE_V_ONE, matchedTickets);

      // Create a match with these tickets
      await createMatch(matchedTickets, "1v1");
      return true;
    }

    logger.info(`Not enough valid tickets for a 1v1 match (need ${MATCH_RULES["1v1"].teamsRequired}, found ${matchedTickets.length})`);
    return false;
  } catch (error) {
    logger.error(`Error processing 1v1 queue: ${error}`);
    return false;
  }
}

// Find a combination of tickets that gives the exact player count we need
function findTicketsForMatch(tickets: RedisMatchTicket[], requiredPlayers: number): RedisMatchTicket[] | null {
  // For now, we'll use a simple greedy approach:
  // Take tickets from largest party size to smallest until we get exactly the right number of players
  // In a real system, you would have more sophisticated matching logic (considering skill, wait time, etc.)

  // Sort tickets by party size (largest first)
  const sortedTickets = [...tickets].sort((a, b) => b.party_size - a.party_size);

  let selectedTickets: RedisMatchTicket[] = [];
  let currentCount = 0;

  for (const ticket of sortedTickets) {
    if (currentCount + ticket.party_size <= requiredPlayers) {
      selectedTickets.push(ticket);
      currentCount += ticket.party_size;

      if (currentCount === requiredPlayers) {
        return selectedTickets;
      }
    }
  }

  // If we get here, we couldn't find an exact match
  return null;
}

// Verify that all players in a ticket are still valid and queued
async function verifyTicketPlayers(ticket: RedisMatchTicket): Promise<boolean> {
  for (const player of ticket.players) {
    const redisPlayer = await redisGetPlayer(player.id);

    if (!redisPlayer) {
      return false; // Player no longer exists
    }
    if (redisPlayer.status !== "queued") {
      return false; // Player no longer queued
    }
  }

  return true;
}

// ChatGPT came up with this o.o
export async function createTeams(tickets: RedisMatchTicket[]): Promise<RedisTeamEntry[]> {
  // 1. total number of players
  const totalPlayers = tickets.reduce((sum, t) => sum + t.players.length, 0);
  if (totalPlayers % 2 !== 0) {
    throw new Error("Need an even number of total players");
  }
  const slotsPerTeam = totalPlayers / 2;

  // 2. shuffle parties (Fisher–Yates)
  const shuffled = tickets.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 3. assign each party to team 0 or 1
  const usedSlots = { 0: 0, 1: 0 };
  const assignment = new Map<RedisMatchTicket, 0 | 1>();
  for (const party of shuffled) {
    const size = party.players.length;
    if (usedSlots[0] + size <= slotsPerTeam) {
      assignment.set(party, 0);
      usedSlots[0] += size;
    } else {
      assignment.set(party, 1);
      usedSlots[1] += size;
    }
  }

  const randomHost = Math.floor(Math.random() * totalPlayers);

  // 4. flatten into per-player entries
  const result: RedisTeamEntry[] = [];
  for (const teamIndex of [0, 1] as const) {
    let idxInTeam = 0;
    for (const party of shuffled) {
      if (assignment.get(party) !== teamIndex) continue;
      for (const player of party.players) {
        const playerIndex = teamIndex * slotsPerTeam + idxInTeam;
        const isHost = playerIndex === randomHost;
        result.push({
          playerId: player.id,
          partyId: party.partyId,
          playerIndex,
          teamIndex,
          isHost: isHost,
          ip: (await redisGetPlayer(player.id)).ip,
        });
        idxInTeam++;
      }
    }
  }

  return result;
}

// Create a match from selected tickets
async function createMatch(tickets: RedisMatchTicket[], matchType: string): Promise<void> {
  try {
    // Count total players
    const totalPlayers = tickets.reduce((sum, ticket) => sum + ticket.players.length, 0);
    const matchId = ObjectID().toHexString();
    const resultId = ObjectID().toHexString();

    // Create match object
    const match: RedisMatch = {
      matchId,
      resultId,
      tickets,
      status: "pending",
      createdAt: Date.now(),
      matchType,
      totalPlayers,
    };

    // Get all player IDs from all tickets
    const players = tickets.flatMap((ticket) =>
      ticket.players.map((player) => ({
        playerId: player.id,
        partyId: ticket.partyId,
      })),
    );

    // Store match data
    await redisUpdateMatch(match.matchId, match);

    const notification: MATCH_FOUND_NOTIFICATION = {
      players: await createTeams(tickets),
      matchId,
      matchKey: randomBytes(32).toString("base64"),
      map: "M016_V3",
      mode: matchType,
    };

    const playerIds = players.map((p) => p.playerId);
    // Notify about the match creation
    await redisOnGameplayConfigNotified(notification);
    // Notify about the matchmaking complete
    for (const ticket of tickets) {
      await redisMatchMakingComplete(
        matchId,
        ticket.matchmakingRequestId,
        ticket.players.map((p) => p.id),
      );
      await redisGameServerInstanceReady(matchId, playerIds);
    }

    logger.info(`Created ${matchType} match ${match.resultId} with ${totalPlayers} players across ${tickets.length} tickets`);
  } catch (error) {
    logger.error(`Error creating match: ${error}`);
  }
}

// Worker process
async function checkQueues(): Promise<void> {
  try {
    // First try to make 1v1 matches
    const made1v1Match = await process1v1Queue();

    // Then try to make 2v2 matches
    //const made2v2Match = await process2v2Queue();

    if (made1v1Match) {
      logger.info(`Successfully created matches in this cycle: 1v1=${made1v1Match}`);
    }
  } catch (error) {
    logger.error(`Error checking queue: ${error}`);
  }
}
