import { redisClient, startRedis } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import {
  MATCH_TYPES,
  type MatchmakingPlayer,
  type MatchmakingTicket,
} from "../modules/matchmaking/matchmaking.types";

const MIN_TICKETS_PER_SECOND = 2;
const MAX_TICKETS_PER_SECOND = 400;
const QUEUE_KEY = MATCH_TYPES.ONE_V_ONE;
const BATCH_SIZE = 500; // Tickets to process per batch
const TICKET_GENERATION_INTERVAL_MS = 1_000; // 1 second
const PROCESSING_INTERVAL_MS = 1_000; // 2 seconds
const TEST_DURATION_MS = 60 * 60 * 1_000; // 1 hour in milliseconds
const STATS_INTERVAL_MS = 30_000; // Display statistics every 30 seconds
const MAX_TICKETS = 20_000; // Maximum number of tickets to maintain
const INDEX_NAME = "idx:tickets";
const MATCHMAKING_TICKET_KEY = (matchmakingRequestId: string) =>
  `matchmakingTicket:${matchmakingRequestId}`;

// Time thresholds for expanding search
const ONE_MINUTE_MS = 60 * 1_000;
const TWO_MINUTES_MS = 120 * 1_000;
const INITIAL_SKILL_RANGE = 100;
const EXPANDED_SKILL_RANGE = 400; // Maximum skill range expansion
const SKILL_RANGE_INCREMENT = 60;

// Statistics tracking
interface TestStatistics {
  startTime: number;
  ticketsAdded: number;
  ticketsMatched: number;
  ticketsUnmatched: number;
  ticketsProcessed: number;
  batchesProcessed: number;
  totalSearchTime: number;
  totalInsertTime: number;
  totalProcessingTime: number;
  searchQueries: number;
  searchesWithResults: number;
}

interface BatchStatistics {
  batchNumber: number;
  processed: number;
  matched: number;
  unmatched: number;
  processingTime: number;
  avgSearchTime: number;
  firstQuery?: string;
  longestWaitTime?: number; // in milliseconds
}

// Helper function to sleep
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Regions and skills for testing
const REGIONS = ["US", "EU", "ASIA", "BR", "OCE"];
const MIN_SKILL = 100;
const MAX_SKILL = 3500;

// Generate random tickets with region and skill at ticket level
function generateTicket(_index: number): MatchmakingTicket {
  const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
  const skill = Math.floor(Math.random() * (MAX_SKILL - MIN_SKILL + 1)) + MIN_SKILL;
  const matchmakingRequestId = new ObjectId().toHexString();
  const partyId = new ObjectId().toHexString();
  const partyLeaderId = new ObjectId().toHexString();

  /* const player: MatchmakingPlayer = {
    id: new ObjectId().toHexString(),
    skill: skill,
    region: region,
  }; */

  return {
    party_size: 1,
    region: region,
    skill: skill,
    playerIds: [new ObjectId().toHexString()],
    created_at: new Date(),
    partyId: partyId,
    matchmakingRequestId: matchmakingRequestId,
    matchType: MATCH_TYPES.ONE_V_ONE,
    partyLeaderId: partyLeaderId,
  };
}

// Create Redis Search index for HASH structure
async function createSearchIndex(): Promise<boolean> {
  try {
    // Check if index exists
    try {
      await redisClient.ft.info(INDEX_NAME);
      console.log("Redis Search index already exists");
      return true;
    } catch {
      // Index doesn't exist, create it for HASH structure
      const createIndex = redisClient.ft.create.bind(redisClient.ft) as (
        index: string,
        schema: {
          [key: string]: {
            type: "TAG" | "NUMERIC" | "TEXT" | "GEO";
            AS?: string;
          };
        },
        options?: { ON: string; PREFIX: string },
      ) => Promise<"OK">;

      await createIndex(
        INDEX_NAME,
        {
          region: {
            type: "TAG",
          },
          skill: {
            type: "NUMERIC",
          },
        },
        {
          ON: "HASH",
          PREFIX: "matchmakingTicket:",
        },
      );
      console.log("Redis Search index created successfully");
      return true;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Failed to create Redis Search index:", message);
    return false;
  }
}

// Add tickets to Redis and queue
async function addTicketsToQueue(
  tickets: MatchmakingTicket[],
  stats: TestStatistics,
): Promise<void> {
  const startTime = performance.now();
  const pipeline = redisClient.multi();

  for (const ticket of tickets) {
    const ticketKey = MATCHMAKING_TICKET_KEY(ticket.matchmakingRequestId);

    // Store as Hash using HSET (ensure region is valid)
    const validRegion =
      ticket.region && REGIONS.includes(ticket.region) ? ticket.region : REGIONS[0];
    pipeline.hSet(ticketKey, {
      matchmakingRequestId: ticket.matchmakingRequestId,
      partyId: ticket.partyId,
      partyLeaderId: ticket.partyLeaderId,
      party_size: ticket.party_size.toString(),
      region: validRegion,
      skill: ticket.skill?.toString() ?? "0",
      matchType: ticket.matchType,
      created_at: ticket.created_at.toISOString(),
      playerIds: JSON.stringify(ticket.playerIds),
    });

    // Push to queue
    pipeline.rPush(QUEUE_KEY, ticket.matchmakingRequestId);
  }

  await pipeline.exec();
  const insertTime = performance.now() - startTime;
  stats.ticketsAdded += tickets.length;
  stats.totalInsertTime += insertTime;
}

// Calculate search parameters based on ticket age
function calculateSearchParameters(ticket: MatchmakingTicket): {
  skillRange: number;
  regions: string[];
} {
  const now = Date.now();
  const ticketAge = now - new Date(ticket.created_at).getTime();

  // Validate and get ticket region (ensure it's a valid region)
  const ticketRegion =
    ticket.region?.trim() && REGIONS.includes(ticket.region) ? ticket.region : REGIONS[0];

  // Calculate skill range based on age
  let skillRange = INITIAL_SKILL_RANGE;
  if (ticketAge >= ONE_MINUTE_MS) {
    // Expand skill range: +100 per minute, capped at 500
    const minutesElapsed = Math.floor((ticketAge - ONE_MINUTE_MS) / ONE_MINUTE_MS);
    skillRange = Math.min(
      INITIAL_SKILL_RANGE + minutesElapsed * SKILL_RANGE_INCREMENT,
      EXPANDED_SKILL_RANGE,
    );
  }

  // Determine regions to search
  const regions: string[] = [ticketRegion];
  if (ticketAge >= TWO_MINUTES_MS) {
    // Include all regions after 2 minutes (excluding the ticket's region to avoid duplicates)
    regions.push(...REGIONS.filter((r) => r !== ticketRegion));
  }

  // Ensure no duplicates and all regions are valid
  const uniqueRegions = Array.from(new Set(regions.filter((r) => REGIONS.includes(r))));

  return { skillRange, regions: uniqueRegions };
}

// Search for matching tickets
async function searchMatchingTickets(
  ticket: MatchmakingTicket,
  stats: TestStatistics,
): Promise<{ matchingKeys: string[]; query: string }> {
  const { skillRange, regions } = calculateSearchParameters(ticket);
  const ticketSkill = ticket.skill ?? 0;
  const minSkill = Math.max(MIN_SKILL, ticketSkill - skillRange);
  const maxSkill = Math.min(MAX_SKILL, ticketSkill + skillRange);

  const searchStartTime = performance.now();
  stats.searchQueries++;

  try {
    // Validate regions (filter out empty/invalid values)
    const validRegions = regions.filter((r) => r?.trim() && REGIONS.includes(r));

    if (validRegions.length === 0) {
      console.warn(
        `No valid regions for ticket ${ticket.matchmakingRequestId}, using default region`,
      );
      validRegions.push(REGIONS[0]);
    }

    // Build query for all relevant regions
    const regionQuery = validRegions.map((r) => `@region:{${r}}`).join(" | ");
    const skillQuery = `@skill:[${minSkill} ${maxSkill}]`;
    const query =
      validRegions.length === 1
        ? `@region:{${validRegions[0]}} ${skillQuery}`
        : `(${regionQuery}) ${skillQuery}`;

    // Execute Redis Search query (exclude current ticket)
    const searchResult = await redisClient.ft.search(INDEX_NAME, query, {
      LIMIT: { from: 0, size: 10 },
    });

    const searchTime = performance.now() - searchStartTime;
    stats.totalSearchTime += searchTime;

    if (searchResult?.documents && searchResult.documents.length > 0) {
      // Filter out the current ticket from results
      const currentTicketKey = MATCHMAKING_TICKET_KEY(ticket.matchmakingRequestId);
      const matchingTicketKeys = searchResult.documents
        .map((doc) => doc.id)
        .filter((key) => key !== currentTicketKey);

      if (matchingTicketKeys.length > 0) {
        stats.searchesWithResults++;
        return { matchingKeys: matchingTicketKeys, query };
      }
    }

    return { matchingKeys: [], query };
  } catch (error) {
    const searchTime = performance.now() - searchStartTime;
    stats.totalSearchTime += searchTime;
    const message = error instanceof Error ? error.message : String(error);
    const { skillRange, regions } = calculateSearchParameters(ticket);
    const validRegions = regions.filter((r) => r?.trim() && REGIONS.includes(r));
    const minSkill = Math.max(MIN_SKILL, (ticket.skill ?? 0) - skillRange);
    const maxSkill = Math.min(MAX_SKILL, (ticket.skill ?? 0) + skillRange);
    const query =
      validRegions.length === 1
        ? `@region:{${validRegions[0]}} @skill:[${minSkill} ${maxSkill}]`
        : `(${validRegions.map((r) => `@region:{${r}}`).join(" | ")}) @skill:[${minSkill} ${maxSkill}]`;
    console.error(`Search query failed for ticket ${ticket.matchmakingRequestId}: ${message}`);
    console.error(
      `  Query params: regions=${validRegions.join(",")}, skill=[${minSkill} ${maxSkill}], ticket.region="${ticket.region}"`,
    );
    return { matchingKeys: [], query };
  }
}

// Load ticket data from Redis (without processing)
async function loadTicketData(ticketId: string): Promise<{
  ticket: MatchmakingTicket;
  ticketKey: string;
} | null> {
  const ticketKey = MATCHMAKING_TICKET_KEY(ticketId);
  const ticketData = await redisClient.hGetAll(ticketKey);

  if (!ticketData || Object.keys(ticketData).length === 0) {
    return null;
  }

  // Reconstruct ticket object (validate region)
  const ticketRegion =
    ticketData.region && REGIONS.includes(ticketData.region) ? ticketData.region : REGIONS[0];
  const created_at = new Date(ticketData.created_at);
  const ticket: MatchmakingTicket = {
    matchmakingRequestId: ticketData.matchmakingRequestId,
    partyId: ticketData.partyId,
    partyLeaderId: ticketData.partyLeaderId,
    party_size: parseInt(ticketData.party_size, 10),
    region: ticketRegion,
    skill: parseInt(ticketData.skill, 10),
    matchType: ticketData.matchType as MATCH_TYPES,
    created_at: created_at,
    playerIds: JSON.parse(ticketData.playerIds),
  };

  return { ticket, ticketKey };
}

// Attempt to match two tickets by deleting them from Redis
async function attemptMatch(
  ticketKey: string,
  matchedTicketKey: string,
  matchedTicketId: string,
): Promise<boolean> {
  // Attempt to delete both tickets atomically
  const pipeline = redisClient.multi();
  pipeline.del(ticketKey);
  pipeline.del(matchedTicketKey);
  pipeline.lRem(QUEUE_KEY, 1, matchedTicketId);

  const results = await pipeline.exec();

  if (!results || results.length < 2) {
    return false;
  }

  // Check if deletions were successful
  // DEL returns the number of keys deleted (1 if deleted, 0 if not found)
  const ticketDeleteCount = Array.isArray(results[0])
    ? (results[0][1] as number)
    : (results[0] as number);

  const matchedTicketDeleteCount = Array.isArray(results[1])
    ? (results[1][1] as number)
    : (results[1] as number);

  // Both tickets must be successfully deleted for the match to succeed
  return ticketDeleteCount > 0 && matchedTicketDeleteCount > 0;
}

// Process a batch of tickets from queue
async function processBatch(batchNumber: number, stats: TestStatistics): Promise<BatchStatistics> {
  const batchStartTime = performance.now();
  const batchStats: BatchStatistics = {
    batchNumber,
    processed: 0,
    matched: 0,
    unmatched: 0,
    processingTime: 0,
    avgSearchTime: 0,
  };

  const searchTimes: number[] = [];

  // Pop first BATCH_SIZE tickets from queue
  const ticketIds: string[] = [];
  for (let i = 0; i < BATCH_SIZE; i++) {
    const ticketId = await redisClient.lPop(QUEUE_KEY);
    if (!ticketId) {
      break;
    }
    ticketIds.push(ticketId);
  }

  if (ticketIds.length === 0) {
    return batchStats;
  }

  // Step 1: Load all ticket data concurrently
  const ticketDataArray = await Promise.all(
    ticketIds.map(async (ticketId) => ({
      ticketId,
      data: await loadTicketData(ticketId),
    })),
  );

  // Filter out tickets that don't exist in Redis
  const validTickets = ticketDataArray.filter(
    (item): item is { ticketId: string; data: { ticket: MatchmakingTicket; ticketKey: string } } =>
      item.data !== null,
  );

  if (validTickets.length === 0) {
    return batchStats;
  }

  // Step 2: Search for matches for all tickets concurrently
  const searchResults = await Promise.all(
    validTickets.map(async ({ ticketId, data }) => {
      const { ticket, ticketKey } = data;
      const searchStartTime = performance.now();
      const { matchingKeys, query } = await searchMatchingTickets(ticket, stats);
      const searchTime = performance.now() - searchStartTime;
      searchTimes.push(searchTime);

      // Convert matching keys to ticket IDs
      const matchingTicketIds = matchingKeys.map((key) => key.replace("matchmakingTicket:", ""));

      return {
        ticketId,
        ticketKey,
        ticket,
        matchingTicketIds,
        query,
        searchTime,
      };
    }),
  );

  // Capture first search query for logging
  const firstQuery = searchResults.find((r) => r.query)?.query;

  // Step 3: Process matches sequentially, tracking matched tickets
  const matchedTicketIds = new Set<string>();
  const unmatchedTicketIds: string[] = [];
  const unmatchedWaitTimes: { ticketId: string; waitTime: number; created_at: Date }[] = [];
  const LONG_WAIT_THRESHOLD_MS = 150 * 1_000; // 150 seconds
  const batchProcessingTime = Date.now();

  for (const { ticketId, ticketKey, ticket, matchingTicketIds } of searchResults) {
    // Skip if already matched
    if (matchedTicketIds.has(ticketId)) {
      continue;
    }

    batchStats.processed++;
    stats.ticketsProcessed++;

    // Try to match with each candidate from search results
    let matched = false;
    for (const matchedTicketId of matchingTicketIds) {
      // Skip if this candidate is already matched or is the current ticket
      if (matchedTicketIds.has(matchedTicketId) || matchedTicketId === ticketId) {
        continue;
      }

      // Attempt to match
      const matchedTicketKey = MATCHMAKING_TICKET_KEY(matchedTicketId);
      const matchSuccess = await attemptMatch(ticketKey, matchedTicketKey, matchedTicketId);

      if (matchSuccess) {
        // Successfully matched - mark both tickets as matched
        matchedTicketIds.add(ticketId);
        matchedTicketIds.add(matchedTicketId);
        batchStats.matched++;
        stats.ticketsMatched++;
        matched = true;
        break;
      }
      // If match failed, the candidate was already taken - try next candidate
    }

    if (!matched) {
      // No match found after checking all candidates
      batchStats.unmatched++;
      stats.ticketsUnmatched++;
      unmatchedTicketIds.push(ticketId);

      // Calculate wait time for unmatched tickets
      const waitTime = batchProcessingTime - ticket.created_at.getTime();
      unmatchedWaitTimes.push({ ticketId, waitTime, created_at: ticket.created_at });

      // Log tickets queued for longer than threshold
      if (waitTime > LONG_WAIT_THRESHOLD_MS) {
        const waitTimeSeconds = (waitTime / 1_000).toFixed(2);
        console.warn(
          `⚠️  Ticket ${ticketId} has been queued for ${waitTimeSeconds}s (created at ${ticket.created_at.toISOString()})`,
        );
      }
    }
  }

  // Find longest wait time among unmatched tickets
  if (unmatchedWaitTimes.length > 0) {
    const longestWait = unmatchedWaitTimes.reduce((max, current) =>
      current.waitTime > max.waitTime ? current : max,
    );
    batchStats.longestWaitTime = longestWait.waitTime;
  }

  // Batch push unmatched tickets back to queue
  if (unmatchedTicketIds.length > 0) {
    const pipeline = redisClient.multi();
    for (const ticketId of unmatchedTicketIds) {
      pipeline.rPush(QUEUE_KEY, ticketId);
    }
    await pipeline.exec();
  }

  // Store first query for batch statistics display
  batchStats.firstQuery = firstQuery;

  batchStats.processingTime = performance.now() - batchStartTime;
  stats.totalProcessingTime += batchStats.processingTime;
  batchStats.avgSearchTime =
    searchTimes.length > 0
      ? searchTimes.reduce((sum, time) => sum + time, 0) / searchTimes.length
      : 0;

  return batchStats;
}

// Display batch statistics
function displayBatchStatistics(batchStats: BatchStatistics): void {
  console.log("\n" + "-".repeat(60));
  console.log(`Batch #${batchStats.batchNumber} Statistics`);
  console.log("-".repeat(60));
  console.log(`Tickets Processed: ${batchStats.processed}`);
  console.log(`Matched: ${batchStats.matched}`);
  console.log(`Unmatched (back to queue): ${batchStats.unmatched}`);
  console.log(`Batch Processing Time: ${batchStats.processingTime.toFixed(2)}ms`);
  console.log(`Average Search Time: ${batchStats.avgSearchTime.toFixed(2)}ms`);
  if (batchStats.firstQuery) {
    console.log(`First Search Query: ${batchStats.firstQuery}`);
  }
  if (batchStats.longestWaitTime !== undefined) {
    const waitTimeSeconds = (batchStats.longestWaitTime / 1_000).toFixed(2);
    console.log(
      `Longest Wait Time (unmatched): ${waitTimeSeconds}s (${batchStats.longestWaitTime.toFixed(0)}ms)`,
    );
  }
  console.log("-".repeat(60) + "\n");
}

// Display overall statistics
function displayStatistics(stats: TestStatistics, queueLength: number): void {
  const elapsed = (Date.now() - stats.startTime) / 1_000; // seconds
  const elapsedMinutes = Math.floor(elapsed / 60);
  const elapsedSeconds = Math.floor(elapsed % 60);

  const avgSearchTime = stats.searchQueries > 0 ? stats.totalSearchTime / stats.searchQueries : 0;
  const avgInsertTime = stats.ticketsAdded > 0 ? stats.totalInsertTime / stats.ticketsAdded : 0;
  const avgProcessingTime =
    stats.batchesProcessed > 0 ? stats.totalProcessingTime / stats.batchesProcessed : 0;
  const matchRate =
    stats.ticketsProcessed > 0 ? (stats.ticketsMatched / stats.ticketsProcessed) * 100 : 0;

  console.log("\n" + "=".repeat(60));
  console.log("OVERALL STATISTICS");
  console.log("=".repeat(60));
  console.log(`Elapsed Time: ${elapsedMinutes}m ${elapsedSeconds}s`);
  console.log(`Queue Length: ${queueLength.toLocaleString()}`);
  console.log(`Total Tickets Added: ${stats.ticketsAdded.toLocaleString()}`);
  console.log(`Tickets Processed: ${stats.ticketsProcessed.toLocaleString()}`);
  console.log(`Tickets Matched: ${stats.ticketsMatched.toLocaleString()}`);
  console.log(`Tickets Unmatched: ${stats.ticketsUnmatched.toLocaleString()}`);
  console.log(`Match Rate: ${matchRate.toFixed(2)}%`);
  console.log(`Batches Processed: ${stats.batchesProcessed}`);
  console.log(`Search Queries: ${stats.searchQueries}`);
  console.log(`Searches With Results: ${stats.searchesWithResults}`);
  console.log(`Avg Search Time: ${avgSearchTime.toFixed(2)}ms`);
  console.log(`Avg Insert Time: ${avgInsertTime.toFixed(2)}ms`);
  console.log(`Avg Batch Processing Time: ${avgProcessingTime.toFixed(2)}ms`);
  console.log(`Tickets/Second Added: ${(stats.ticketsAdded / elapsed).toFixed(2)}`);
  console.log(`Tickets/Second Processed: ${(stats.ticketsProcessed / elapsed).toFixed(2)}`);
  console.log("=".repeat(60) + "\n");
}

// Delete search index
async function deleteSearchIndex(): Promise<void> {
  try {
    console.log("Redis Search index deleted");
    process.exit(0);    
    await redisClient.ft.dropIndex(INDEX_NAME);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log("Index deletion skipped:", message);
  }
}

// Main test function
async function runTest() {
  let ticketGenerationInterval: ReturnType<typeof setInterval> | null = null;
  let processingInterval: ReturnType<typeof setInterval> | null = null;
  let statsInterval: ReturnType<typeof setInterval> | null = null;
  const testEndTime = Date.now() + TEST_DURATION_MS;
  let batchNumber = 0;

  const stats: TestStatistics = {
    startTime: Date.now(),
    ticketsAdded: 0,
    ticketsMatched: 0,
    ticketsUnmatched: 0,
    ticketsProcessed: 0,
    batchesProcessed: 0,
    totalSearchTime: 0,
    totalInsertTime: 0,
    totalProcessingTime: 0,
    searchQueries: 0,
    searchesWithResults: 0,
  };

  try {
    await startRedis();
    console.log("Redis connected, starting test...\n");
    const durationMinutes = TEST_DURATION_MS / (60 * 1_000);
    console.log(
      `Configuration: ${MIN_TICKETS_PER_SECOND}-${MAX_TICKETS_PER_SECOND} tickets/second, ` +
        `${BATCH_SIZE} tickets per batch, ${durationMinutes} minutes duration, ` +
        `${TICKET_GENERATION_INTERVAL_MS}ms generation interval, ${PROCESSING_INTERVAL_MS}ms processing interval\n`,
    );

    // Step 0: Create Redis Search index
    const hasSearchIndex = await createSearchIndex();
    if (!hasSearchIndex) {
      console.error("Redis Search is not available. Please ensure RediSearch module is installed.");
      return;
    }
    console.log("\n");

    // Start ticket generation interval (every 1 second)
    ticketGenerationInterval = setInterval(async () => {
      try {
        // Check if we're at the limit
        const queueLength = await redisClient.lLen(QUEUE_KEY);
        const currentCount = queueLength; // Approximate count

        if (currentCount >= MAX_TICKETS) {
          console.log(
            `Ticket limit reached (~${currentCount.toLocaleString()}/${MAX_TICKETS.toLocaleString()}), skipping generation\n`,
          );
          return;
        }

        // Generate random number of tickets (50-500)
        const ticketCount = Math.floor(
          Math.random() * (MAX_TICKETS_PER_SECOND - MIN_TICKETS_PER_SECOND + 1) +
            MIN_TICKETS_PER_SECOND,
        );

        // Adjust if would exceed limit
        const remainingCapacity = MAX_TICKETS - currentCount;
        const actualTicketCount = Math.min(ticketCount, remainingCapacity);

        if (actualTicketCount > 0) {
          const tickets = Array.from({ length: actualTicketCount }, (_, i) => generateTicket(i));
          await addTicketsToQueue(tickets, stats);
          console.log(
            `Generated ${actualTicketCount} tickets. Queue length: ${(await redisClient.lLen(QUEUE_KEY)).toLocaleString()}\n`,
          );
        }
      } catch (error) {
        console.error("Error generating tickets:", error);
      }
    }, TICKET_GENERATION_INTERVAL_MS);

    // Start processing interval (every 2 seconds)
    processingInterval = setInterval(async () => {
      try {
        batchNumber++;
        const batchStats = await processBatch(batchNumber, stats);
        stats.batchesProcessed++;

        if (batchStats.processed > 0) {
          displayBatchStatistics(batchStats);
        }

        // Check if test duration is complete
        if (Date.now() >= testEndTime) {
          if (processingInterval) {
            clearInterval(processingInterval);
            processingInterval = null;
          }
          if (ticketGenerationInterval) {
            clearInterval(ticketGenerationInterval);
            ticketGenerationInterval = null;
          }
          if (statsInterval) {
            clearInterval(statsInterval);
            statsInterval = null;
          }
        }
      } catch (error) {
        console.error("Error processing batch:", error);
      }
    }, PROCESSING_INTERVAL_MS);

    // Start statistics display interval (every 30 seconds)
    statsInterval = setInterval(async () => {
      const queueLength = await redisClient.lLen(QUEUE_KEY);
      displayStatistics(stats, queueLength);
    }, STATS_INTERVAL_MS);

    // Wait for test duration to complete
    while (Date.now() < testEndTime) {
      await sleep(PROCESSING_INTERVAL_MS);
    }

    // Stop all intervals
    if (ticketGenerationInterval) {
      clearInterval(ticketGenerationInterval);
      ticketGenerationInterval = null;
    }
    if (processingInterval) {
      clearInterval(processingInterval);
      processingInterval = null;
    }
    if (statsInterval) {
      clearInterval(statsInterval);
      statsInterval = null;
    }

    console.log(`\n=== Test duration complete ===\n`);

    // Wait a bit for any pending operations
    await sleep(PROCESSING_INTERVAL_MS);

    // Display final statistics
    const finalQueueLength = await redisClient.lLen(QUEUE_KEY);
    displayStatistics(stats, finalQueueLength);

    // Clean up queue and tickets
    console.log("Cleaning up remaining tickets...");
    const remainingTicketIds: string[] = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const ticketId = await redisClient.lPop(QUEUE_KEY);
      if (ticketId === null) {
        break;
      }
      remainingTicketIds.push(ticketId);
      if (remainingTicketIds.length >= 100) {
        // Process in batches for deletion
        const pipeline = redisClient.multi();
        for (const id of remainingTicketIds) {
          pipeline.del(MATCHMAKING_TICKET_KEY(id));
        }
        await pipeline.exec();
        remainingTicketIds.length = 0;
      }
    }

    // Delete remaining tickets
    if (remainingTicketIds.length > 0) {
      const pipeline = redisClient.multi();
      for (const id of remainingTicketIds) {
        pipeline.del(MATCHMAKING_TICKET_KEY(id));
      }
      await pipeline.exec();
    }

    // Clear queue
    await redisClient.del(QUEUE_KEY);

    // Clean up search index
    await deleteSearchIndex();

    console.log("\nTest completed successfully!");
  } catch (error) {
    console.error("Test failed:", error);
    // Clean up intervals
    if (ticketGenerationInterval) {
      clearInterval(ticketGenerationInterval);
    }
    if (processingInterval) {
      clearInterval(processingInterval);
    }
    if (statsInterval) {
      clearInterval(statsInterval);
    }

    // Display final statistics even on error
    try {
      const queueLength = await redisClient.lLen(QUEUE_KEY);
      displayStatistics(stats, queueLength);
    } catch {
      // Ignore errors when displaying stats
    }

    throw error;
  } finally {
    // Ensure intervals are cleared
    if (ticketGenerationInterval) {
      clearInterval(ticketGenerationInterval);
    }
    if (processingInterval) {
      clearInterval(processingInterval);
    }
    if (statsInterval) {
      clearInterval(statsInterval);
    }
    await redisClient.quit();
  }
}

// Run the test
runTest();
