import { redisClient, QUEUE_KEY_1V1, QUEUE_KEY_2V2 } from "./config/redis";
import { logger } from "./config/logger";
import ObjectID from "bson-objectid";
import { MatchTicket, QueuedPlayer, Match, TeamEntry } from "./types/match";
import { MATCH_FOUND_NOTIFICATION, MATCH_NOTIFICATION_CHANNEL } from "./websocket";
import { randomBytes } from "crypto";

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

// Redis connection event handlers
redisClient.on("connect", () => {
  logger.info("Connected to Redis");
  startWorker();
});

redisClient.on("error", (err) => {
  logger.error(`Redis error: ${err}`);
});

function startWorker(): void {
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
    const ticketsStr = await redisClient.lRange(QUEUE_KEY_1V1, 0, -1);

    if (!ticketsStr || ticketsStr.length < MATCH_RULES["1v1"].teamsRequired) {
      return false; // Not enough tickets to make a match
    }

    logger.info(`Found ${ticketsStr.length} tickets in 1v1 queue, attempting to create a match`);

    // Parse ticket data from queue
    const tickets: MatchTicket[] = [];
    for (const ticketStr of ticketsStr) {
      try {
        const ticket = JSON.parse(ticketStr) as MatchTicket;

        // Verify all players in ticket are still valid
        const allValid = await verifyTicketPlayers(ticket);

        if (allValid && ticket.party_size === 1) {
          // For 1v1, we only want solo players
          tickets.push(ticket);

          // If we have enough tickets, stop looking
          if (tickets.length === MATCH_RULES["1v1"].teamsRequired) {
            break;
          }
        }
      } catch (error) {
        logger.error(`Error parsing ticket in 1v1 queue: ${error}`);
        // Continue to next ticket
      }
    }

    // Check if we have enough tickets for a match
    if (tickets.length === MATCH_RULES["1v1"].teamsRequired) {
      // Remove matched tickets from queue
      for (const ticket of tickets) {
        const ticketStr = JSON.stringify(ticket);
        await redisClient.lRem(QUEUE_KEY_1V1, 0, ticketStr);
        logger.info(`Removed ticket ${ticket.partyId} from 1v1 queue for match`);
      }

      // Create a match with these tickets
      await createMatch(tickets, "1v1");
      return true;
    }

    logger.info(`Not enough valid tickets for a 1v1 match (need ${MATCH_RULES["1v1"].teamsRequired}, found ${tickets.length})`);
    return false;
  } catch (error) {
    logger.error(`Error processing 1v1 queue: ${error}`);
    return false;
  }
}

// Process 2v2 matchmaking queue
async function process2v2Queue(): Promise<boolean> {
  try {
    // Get all tickets in the queue
    const ticketsStr = await redisClient.lRange(QUEUE_KEY_2V2, 0, -1);

    if (!ticketsStr || ticketsStr.length === 0) {
      return false; // No tickets in queue
    }

    logger.info(`Found ${ticketsStr.length} tickets in 2v2 queue, attempting to create a match`);

    // Parse ticket data from queue
    const validTickets: MatchTicket[] = [];
    let totalPlayers = 0;

    for (const ticketStr of ticketsStr) {
      try {
        const ticket = JSON.parse(ticketStr) as MatchTicket;

        // Verify all players in ticket are still valid
        const allValid = await verifyTicketPlayers(ticket);

        if (allValid) {
          validTickets.push(ticket);
          totalPlayers += ticket.party_size;

          // If we have enough players, stop looking
          if (totalPlayers >= MATCH_RULES["2v2"].totalPlayersRequired) {
            break;
          }
        }
      } catch (error) {
        logger.error(`Error parsing ticket in 2v2 queue: ${error}`);
        // Continue to next ticket
      }
    }

    // In 2v2, we need to find a combination of tickets that gives us exactly the right number of players
    // and forms exactly two teams
    // For now, we'll use a simple approach: just get exactly 2 teams of 2 players each

    // Check if we have enough players for a 2v2 match
    if (totalPlayers >= MATCH_RULES["2v2"].totalPlayersRequired) {
      // Try to form a match with these tickets
      const matchTickets = findTicketsForMatch(validTickets, MATCH_RULES["2v2"].totalPlayersRequired);

      if (matchTickets) {
        // Remove matched tickets from queue
        for (const ticket of matchTickets) {
          const ticketStr = JSON.stringify(ticket);
          await redisClient.lRem(QUEUE_KEY_2V2, 0, ticketStr);
          logger.info(`Removed ticket ${ticket.partyId} from 2v2 queue for match`);
        }

        // Create a match with these tickets
        await createMatch(matchTickets, "2v2");
        return true;
      }
    }

    logger.info(`Not enough valid players for a 2v2 match (need ${MATCH_RULES["2v2"].totalPlayersRequired}, found ${totalPlayers})`);
    return false;
  } catch (error) {
    logger.error(`Error processing 2v2 queue: ${error}`);
    return false;
  }
}

// Find a combination of tickets that gives the exact player count we need
function findTicketsForMatch(tickets: MatchTicket[], requiredPlayers: number): MatchTicket[] | null {
  // For now, we'll use a simple greedy approach:
  // Take tickets from largest party size to smallest until we get exactly the right number of players
  // In a real system, you would have more sophisticated matching logic (considering skill, wait time, etc.)

  // Sort tickets by party size (largest first)
  const sortedTickets = [...tickets].sort((a, b) => b.party_size - a.party_size);

  let selectedTickets: MatchTicket[] = [];
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
async function verifyTicketPlayers(ticket: MatchTicket): Promise<boolean> {
  for (const player of ticket.players) {
    const playerData = await redisClient.get(`player:${player.id}`);

    if (!playerData) {
      return false; // Player no longer exists
    }

    const playerObj = JSON.parse(playerData) as QueuedPlayer;
    if (playerObj.status !== "queued") {
      return false; // Player no longer queued
    }
  }

  return true;
}

// ChatGPT came up with this o.o
export function createTeams(tickets: MatchTicket[]): TeamEntry[] {
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
  const assignment = new Map<MatchTicket, 0 | 1>();
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

  // 4. flatten into per-player entries
  const result: TeamEntry[] = [];
  for (const teamIndex of [0, 1] as const) {
    let idxInTeam = 0;
    for (const party of shuffled) {
      if (assignment.get(party) !== teamIndex) continue;
      for (const player of party.players) {
        const playerIndex = teamIndex * slotsPerTeam + idxInTeam;
        result.push({
          playerId: player.id,
          partyId: party.partyId,
          playerIndex,
          teamIndex,
        });
        idxInTeam++;
      }
    }
  }

  return result;
}

// Create a match from selected tickets
async function createMatch(tickets: MatchTicket[], matchType: string): Promise<void> {
  try {
    // Count total players
    const totalPlayers = tickets.reduce((sum, ticket) => sum + ticket.players.length, 0);

    // Create match object
    const match: Match = {
      matchId: ObjectID().toHexString(),
      id: ObjectID().toHexString(),
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
      }))
    );

    // Update player statuses
    for (const player of players) {
      const playerData = await redisClient.get(`player:${player.playerId}`);
      if (playerData) {
        const player = JSON.parse(playerData);
        player.status = "in_match";
        player.currentMatchId = match.id;
        await redisClient.set(`player:${player.id}`, JSON.stringify(player));
      }
    }

    // Store match data
    await redisClient.set(`match:${match.id}`, JSON.stringify(match));

    const notification: MATCH_FOUND_NOTIFICATION = {
      players: createTeams(tickets),
      matchId: ObjectID().toHexString(),
      matchKey: randomBytes(32).toString("base64"),
      map : "M016_V3",
      mode:matchType
    };

    // Notify about the match creation
    await redisClient.publish(MATCH_NOTIFICATION_CHANNEL, JSON.stringify(notification));

    logger.info(`Created ${matchType} match ${match.id} with ${totalPlayers} players across ${tickets.length} tickets`);
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
    const made2v2Match = await process2v2Queue();

    if (made1v1Match || made2v2Match) {
      logger.info(`Successfully created matches in this cycle: 1v1=${made1v1Match}, 2v2=${made2v2Match}`);
    }
  } catch (error) {
    logger.error(`Error checking queue: ${error}`);
  }
}
