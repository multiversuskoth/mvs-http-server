// ----- services/matchmakingService.ts -----
import { Match, MatchPlayer, MatchTicket, QueuedPlayer } from "../types/match";
import { QUEUE_KEY_1V1, QUEUE_KEY_2V2, redisClient } from "../config/redis";
import { logger } from "../config/logger";
import ObjectID from "bson-objectid";
import { MVSTime } from "../utils/date";
import { PARTY_QUEUED_CHANNEL, PARTY_QUEUED_NOTIFICATION } from "../websocket";

export class MatchmakingService {
  // Get queue key for a specific match type
  private static getQueueKeyForMatchType(matchType: string): string {
    switch (matchType) {
      case "1v1":
        return QUEUE_KEY_1V1;
      case "2v2":
        return QUEUE_KEY_2V2;
      default:
        return QUEUE_KEY_1V1; // Default to 1v1
    }
  }

  async queuePartyLobby(playerIds: string[], partyId: string, matchmakingRequestId: string, matchType: string = "1v1"): Promise<void> {
    try {
      // Update player status
      for (const playerId of playerIds) {
        const queuePlayer: QueuedPlayer = {
          id: playerId,
          status: "queued",
        };
        await redisClient.set(`player:${playerId}`, JSON.stringify(queuePlayer));
      }

      // Create a match ticket
      const ticket: MatchTicket = {
        created_at: MVSTime(new Date()),
        matchmakingRequestId,
        partyId,
        party_size: playerIds.length,
        players: playerIds.map((p) => {
          return {
            id: p,
            region: "MVSI",
            skill: 0,
          };
        }),
      };

      // Get the appropriate queue key
      const queueKey = MatchmakingService.getQueueKeyForMatchType(matchType);

      // Add ticket to the matchmaking queue
      await redisClient.lPush(queueKey, JSON.stringify(ticket));

      const notification: PARTY_QUEUED_NOTIFICATION = {
        partyId,
        playerIds,
        matchmakingRequestId,
      };

      // Publish a message that a party has been queued
      await redisClient.publish(PARTY_QUEUED_CHANNEL, JSON.stringify(notification));

      logger.info(`Party (${partyId}) has been added to ${matchType} matchmaking queue. Players (${playerIds.join(",")})`);
    } catch (error) {
      logger.error(`Error queueing player: ${error}`);
      throw error;
    }
  }

  // Queue a party (multiple players) for matchmaking
  /* async queueParty(players: Player[], matchType: string = "2v2"): Promise<void> {
    try {
      // Update all players' status
      for (const player of players) {
        player.status = "queued";
        await redisClient.set(`player:${player.id}`, JSON.stringify(player));
      }

      // Create a match ticket for this party
      const ticket = this.createMatchTicket(players, players.length);

      // Get the appropriate queue key
      const queueKey = MatchmakingService.getQueueKeyForMatchType(matchType);

      // Add ticket to the matchmaking queue
      await redisClient.lPush(queueKey, JSON.stringify(ticket));

      // Publish a message that players have been queued
      await redisClient.publish(
        MatchmakingService.PLAYER_QUEUED_CHANNEL,
        JSON.stringify({
          type: "PARTY_QUEUED",
          players: players.map((p) => ({ id: p.id, username: p.username })),
          matchType: matchType,
          ticketId: ticket.id,
        })
      );

      logger.info(`Party of ${players.length} players added to ${matchType} matchmaking queue with ticket ${ticket.id}`);
    } catch (error) {
      logger.error(`Error queueing party: ${error}`);
      throw error;
    }
  } */

  // Dequeue a player from matchmaking
  async dequeuePlayer(playerId: string, username?: string, matchType?: string): Promise<void> {
    try {
      // Get player data if username not provided
      let playerUsername = username;
      if (!playerUsername) {
        const playerData = await redisClient.get(`player:${playerId}`);
        if (playerData) {
          const player = JSON.parse(playerData);
          playerUsername = player.username;

          // Update player status if they were queued
          if (player.status === "queued") {
            player.status = "idle";
            await redisClient.set(`player:${player.id}`, JSON.stringify(player));
          }
        }
      }

      // If matchType is provided, only check that queue
      const queueKeys = matchType ? [MatchmakingService.getQueueKeyForMatchType(matchType)] : [QUEUE_KEY_1V1, QUEUE_KEY_2V2];

      // Check all relevant queues for tickets containing this player
      for (const queueKey of queueKeys) {
        const queue = await redisClient.lRange(queueKey, 0, -1);

        if (!queue) {
          continue;
        }

        // Find tickets containing this player
        for (const ticketStr of queue) {
          try {
            const ticket = JSON.parse(ticketStr) as MatchTicket;
            const playerIndex = ticket.players.findIndex((p) => p.id === playerId);

            // If player is in this ticket
            if (playerIndex >= 0) {
              if (ticket.party_size === 1) {
                // If solo ticket, remove the whole ticket
                await redisClient.lRem(queueKey, 0, ticketStr);
                logger.info(`Removed solo ticket ${ticket.partyId} for player ${playerUsername || playerId} from queue ${queueKey}`);
              } else {
                // If party ticket, this gets more complex - for now we'll dequeue the whole party
                // In a real system, you might have more complex logic here (notify other party members, etc.)
                await redisClient.lRem(queueKey, 0, ticketStr);

                // Update status of all other players in the party
                for (const partyPlayer of ticket.players) {
                  if (partyPlayer.id !== playerId) {
                    const playerData = await redisClient.get(`player:${partyPlayer.id}`);
                    if (playerData) {
                      const player = JSON.parse(playerData);
                      if (player.status === "queued") {
                        player.status = "idle";
                        await redisClient.set(`player:${partyPlayer.id}`, JSON.stringify(player));

                        // Notify other party members they were dequeued
                        await redisClient.publish(
                          MatchmakingService.PLAYER_DEQUEUED_CHANNEL,
                          JSON.stringify({
                            type: "PLAYER_DEQUEUED_FROM_PARTY",
                            playerId: partyPlayer.id,
                            reason: "Party member left the queue",
                          })
                        );
                      }
                    }
                  }
                }

                logger.info(`Removed party ticket ${ticket.partyId} with ${ticket.party_size} players from queue ${queueKey}`);
              }

              // Publish player dequeued notification
              await redisClient.publish(
                MatchmakingService.PLAYER_DEQUEUED_CHANNEL,
                JSON.stringify({
                  type: "PLAYER_DEQUEUED",
                  playerId: playerId,
                  username: playerUsername || "Unknown",
                  matchType: matchType || extractMatchTypeFromQueueKey(queueKey),
                })
              );

              // We found and processed the ticket, so we can break from the inner loop
              break;
            }
          } catch (error) {
            logger.error(`Error parsing ticket in queue ${queueKey}: ${error}`);
            // Continue to next ticket
          }
        }
      }
    } catch (error) {
      logger.error(`Error dequeuing player: ${error}`);
      throw error;
    }
  }

  // Notify all relevant parties about a match being created
  async notifyMatchCreated(match: Match): Promise<void> {
    try {
      // Extract all player IDs from all tickets
      const playerDetails = match.tickets.flatMap((ticket) =>
        ticket.players.map((player) => ({
          id: player.id,
        }))
      );

      // Publish match data to Redis channel for WebSocket servers to pick up
      await redisClient.publish(
        MatchmakingService.MATCH_NOTIFICATION_CHANNEL,
        JSON.stringify({
          type: "MATCH_CREATED",
          matchId: match.id,
          matchType: match.matchType,
          players: playerDetails,
        })
      );
    } catch (error) {
      logger.error(`Error notifying match creation: ${error}`);
      throw error;
    }
  }
}

// Helper function to extract match type from queue key
function extractMatchTypeFromQueueKey(queueKey: string): string {
  if (queueKey.endsWith(":1v1")) {
    return "1v1";
  } else if (queueKey.endsWith(":2v2")) {
    return "2v2";
  } else {
    return "unknown";
  }
}
