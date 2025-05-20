import { redisGetPlayer, RedisMatchTicket, redisOnMatchMakerStarted, redisPushTicketToQueue, redisUpdatePlayerStatus } from "../config/redis";
import { logger } from "../config/logger";
import { MVSTime } from "../utils/date";

export enum MATCH_TYPES {
  ONE_V_ONE = "1v1",
  TWO_V_TWO = "2v2",
  FFA = "FFA",
}

export async function queueMatch(playerIds: string[], partyId: string, matchmakingRequestId: string, matchType: MATCH_TYPES): Promise<void> {
  try {
    // Create a match ticket
    const ticket: RedisMatchTicket = {
      created_at: MVSTime(new Date()),
      matchmakingRequestId,
      partyId,
      party_size: playerIds.length,
      players: await Promise.all(
        playerIds.map(async (p) => {
          const playerConfig = await redisGetPlayer(p);
          return {
            id: p,
            region: "MVSI",
            skill: 0,
            ip: playerConfig.ip,
          };
        }),
      ),
    };

    // Add ticket to the matchmaking queue
    await redisPushTicketToQueue(matchType, ticket);

    // Update player status
    for (const playerId of playerIds) {
      await redisUpdatePlayerStatus(playerId, "queued");
    }

    // Publish a message that a party has been queued
    await redisOnMatchMakerStarted(matchmakingRequestId, partyId, playerIds);

    logger.info(`Party (${partyId}) has been added to ${matchType} matchmaking queue. Players (${playerIds.join(",")})`);
  } catch (error) {
    logger.error(`Error queueing player: ${error}`);
    throw error;
  }
}
