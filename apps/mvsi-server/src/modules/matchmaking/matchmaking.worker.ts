import { randomBytes } from "node:crypto";
import { logger } from "@mvsi/logger";
import { ObjectId } from "mongodb";
import { getRandomMapByType } from "../../data/maps";
import {
  GAME_MODES,
  type GameModeConfig,
  type PlayersConfigObject,
  TeamStyle,
} from "../gameModes/gameModes.config";
import { getPlayersConfig, type PlayerConfig } from "../playerPresence/playerPresence.service";
import {
  completeMatchmaking,
  getTicketsFromQueue,
  notifyActiveMatchCreated,
  notifyGameServerReady,
  removeTicketsFromQueue,
} from "./matchmaking.service";
import {
  MATCH_TYPES,
  type MatchmakingActiveMatch,
  type MatchmakingPlayer,
  type MatchmakingTicket,
} from "./matchmaking.types";

const CHECK_INTERVAL_MS = 2000;

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

class MatchCreationError extends Error {
  matchId: string;
  constructor(message: string, matchId: string) {
    super(message);
    this.name = "MatchCreationError";
    this.matchId = matchId;
  }
}

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
    const tickets = await getTicketsFromQueue(MATCH_TYPES.ONE_V_ONE);

    if (tickets.length < MATCH_RULES["1v1"].teamsRequired) {
      return false; // Not enough tickets to make a match
    }

    logger.info(`Found ${tickets.length} tickets in 1v1 queue, attempting to create a match`);

    // Parse ticket data from queue
    const matchedTickets: MatchmakingTicket[] = [];
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
      try {
        await removeTicketsFromQueue(MATCH_TYPES.ONE_V_ONE, matchedTickets);

        // Create a match with these tickets
        await createMatch(matchedTickets, MATCH_TYPES.ONE_V_ONE);
        return true;
      } catch (error) {
        logger.error(`Error removing matched tickets from queue: ${error}`);
        return false; // If we can't remove them, we can't proceed
      }
    }

    logger.info(
      `Not enough valid tickets for a 1v1 match (need ${MATCH_RULES["1v1"].teamsRequired}, found ${matchedTickets.length})`,
    );
    return false;
  } catch (error) {
    logger.error(`Error processing 1v1 queue: ${error}`);
    return false;
  }
}

// Process 1v1 matchmaking queue
async function process2v2Queue(): Promise<boolean> {
  try {
    // Get all tickets in the queue
    const tickets = await getTicketsFromQueue(MATCH_TYPES.TWO_V_TWO);

    if (tickets.length < MATCH_RULES["2v2"].totalPlayersRequired) {
      return false; // Not enough tickets to make a match
    }

    logger.info(`Found ${tickets.length} tickets in 2v2 queue, attempting to create a match`);

    // Parse ticket data from queue
    const matchedTickets: MatchmakingTicket[] = [];
    for (const ticket of tickets) {
      try {
        // Only solo tickets
        matchedTickets.push(ticket);

        // If we have enough tickets, stop looking
        if (matchedTickets.length === MATCH_RULES["2v2"].totalPlayersRequired) {
          break;
        }
      } catch (error) {
        logger.error(`Error parsing ticket in 2v2 queue: ${error}`);
        // Continue to next ticket
      }
    }

    // Check if we have enough tickets for a match
    if (matchedTickets.length === MATCH_RULES["2v2"].totalPlayersRequired) {
      // Remove matched tickets from queue
      try {
        await removeTicketsFromQueue(MATCH_TYPES.TWO_V_TWO, matchedTickets);

        // Create a match with these tickets
        await createMatch(matchedTickets, MATCH_TYPES.TWO_V_TWO);
        return true;
      } catch (error) {
        logger.error(`Error removing matched tickets from queue: ${error}`);
        return false; // If we can't remove them, we can't proceed
      }
    }

    logger.info(
      `Not enough valid tickets for a 2v2 match (need ${MATCH_RULES["2v2"].totalPlayersRequired}, found ${matchedTickets.length})`,
    );
    return false;
  } catch (error) {
    logger.error(`Error processing 2v2 queue: ${error}`);
    return false;
  }
}

async function configurePlayersForMatch(
  tickets: MatchmakingTicket[],
  gameModeConfig: GameModeConfig,
): Promise<PlayersConfigObject> {
  const isFFA = gameModeConfig.TeamStyle === TeamStyle.FFA;

  const numTeams = gameModeConfig.GameModeTeams.length;
  const maxPlayersPerTeam = gameModeConfig.GameModeTeams[0].MaxPlayerPerTeam;

  const allPlayers: { player: string; ticket: MatchmakingTicket }[] = [];
  tickets.forEach((ticket) => {
    ticket.playerIds.forEach((player) => {
      allPlayers.push({ player, ticket });
    });
  });

  const playerConfigs = await getPlayersConfig(allPlayers.map((p) => p.player));

  let playerAssignments: Pick<
    PlayerConfig,
    "AccountId" | "PlayerIndex" | "TeamIndex" | "PartyId" | "PartyMember"
  >[] = [];

  if (isFFA) {
    // FFA: Shuffle all players and assign sequential indices
    const shuffledPlayers = [...allPlayers].sort(() => Math.random() - 0.5);

    playerAssignments = shuffledPlayers.map((playerData, index) => ({
      AccountId: playerData.player,
      PartyId: playerData.ticket.partyId,
      PlayerIndex: index,
      TeamIndex: index,
      PartyMember: null,
    }));
  } else {
    // Team-based: Keep parties together
    const shuffledTickets = [...tickets].sort(() => Math.random() - 0.5);

    // Track team assignments
    type TeamAssignment = {
      teamIndex: number;
      players: { player: string; ticket: MatchmakingTicket }[];
    };

    const teamAssignments: TeamAssignment[] = Array.from({ length: numTeams }, (_, i) => ({
      teamIndex: i,
      players: [],
    }));

    // Assign tickets to teams
    shuffledTickets.forEach((ticket) => {
      const availableTeams = teamAssignments.filter(
        (team) => team.players.length + ticket.party_size <= maxPlayersPerTeam,
      );

      const selectedTeam = availableTeams[Math.floor(Math.random() * availableTeams.length)];

      ticket.playerIds.forEach((player) => {
        selectedTeam.players.push({ player, ticket });
      });
    });

    // Create assignments with interleaved indices
    teamAssignments.forEach((team) => {
      team.players.forEach((playerData, playerIdx) => {
        // Find teammate from same party (only if party size > 1)
        const teammate =
          playerData.ticket.party_size > 1
            ? playerData.ticket.playerIds.find((p) => p !== playerData.player)
            : null;

        playerAssignments.push({
          AccountId: playerData.player,
          PlayerIndex: team.teamIndex + playerIdx * numTeams,
          TeamIndex: team.teamIndex,
          PartyId: playerData.ticket.partyId,
          PartyMember: teammate ?? null,
        });
      });
    });
  }

  const players: PlayersConfigObject = {};
  playerAssignments.forEach((assignment) => {
    const playerConfig = playerConfigs.get(assignment.AccountId);
    if (!playerConfig) {
      throw new MatchCreationError("Could not find PlayerConfig", "");
    }
    players[assignment.AccountId] = {
      ...assignment,
      ...playerConfig,
    };
  });

  return players;
}

async function createMatch(tickets: MatchmakingTicket[], matchType: MATCH_TYPES): Promise<void> {
  try {
    const totalPlayers = tickets.reduce((sum, ticket) => sum + ticket.playerIds.length, 0);
    const matchId = new ObjectId().toHexString();
    const resultId = new ObjectId().toHexString();

    const players = tickets.flatMap((ticket) =>
      ticket.playerIds.map((player) => ({
        playerId: player,
        partyId: ticket.partyId,
      })),
    );

    const gameMode = GAME_MODES.get(matchType);
    if (!gameMode) {
      throw new MatchCreationError("Failed to get gamed mode", matchId);
    }
    const match: MatchmakingActiveMatch = {
      matchConfig: {
        Spectators: {},
        TeamData: [],
        bIsTutorial: false,
        bIsOnlineMatch: true,
        bIsRift: false,
        bIsPvP: true,
        bIsCustomGame: false,
        bIsRanked: false,
        bIsCasualSpecial: false,
        Cluster: "",
        bAllowMapHazards: true,
        WorldBuffs: [],
        RiftNodeAttunement: "Attunements:None",
        CountdownDisplay: "CountdownTypes:XvY",
        HudSettings: {
          bDisplayPortraits: true,
          bDisplayTimer: true,
          bDisplayStocks: true,
        },
        MatchDurationSeconds: gameMode.MatchDuration,
        ScoreEvaluationRule: "TargetScoreIsWin",
        ScoreAttributionRule: "AttributeToAttacker",
        CustomGameSettings: {
          NumRingouts: gameMode.NumRingouts,
          MatchTime: gameMode.MatchDuration,
          bHazardsEnabled: gameMode.bHazardsEnabled,
          bShieldsEnabled: gameMode.bShieldsEnabled,
        },
        ArenaModeInfo: null,
        RiftNodeId: "",
        bModeGrantsProgress: true,
        EventQueueSlug: "",
        MatchId: matchId,
        Created: new Date(),
        Map: getRandomMapByType(matchType),
        ModeString: matchType,
        Players: await configurePlayersForMatch(tickets, gameMode),
      },
      state: "pending",
      matchKey: randomBytes(32).toString("base64"),
      resultId,
    };

    await notifyActiveMatchCreated(match.matchConfig.MatchId, match);

    const playerIds = players.map((p) => p.playerId);

    for (const ticket of tickets) {
      await completeMatchmaking(
        matchId,
        ticket.matchmakingRequestId,
        ticket.playerIds.map((p) => p),
      );
    }
    await notifyGameServerReady(matchId, playerIds);

    logger.info(
      `Created ${matchType} match ${match.resultId} with ${totalPlayers} players across ${tickets.length} tickets`,
    );
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

    if (made1v1Match) {
      logger.info(`Successfully created matches in this cycle: 1v1=${made1v1Match}`);
    }

    if (made2v2Match) {
      logger.info(`Successfully created matches in this cycle: 2v2=${made1v1Match}`);
    }
  } catch (error) {
    logger.error(`Error checking queue: ${error}`);
  }
}
