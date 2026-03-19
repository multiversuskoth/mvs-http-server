import type { MatchmakingTicket } from "./matchmaking.types";

// ── Regions ──────────────────────────────────────────────────────────

export const REGIONS = [
  "WEST_US",
  "CENTRAL_US",
  "EAST_US",
  "MEXICO_CITY",
  "SAO_PAULO",
  "MANCHESTER",
  //"FRANKFURT",
  //"TEL_AVIV",
  //"JOHANNESBURG",
  "SINGAPORE",
  "TOKYO",
  "MELBOURNE",
] as const;

export type Region = (typeof REGIONS)[number];

type RegionInfo = {
  lat: number;
  lon: number;
};

/** Latitude / longitude per region (data-center city). */
export const REGION_COORDS: Record<Region, RegionInfo> = {
  WEST_US: { lat: 34.0522, lon: -118.2437 }, // Los Angeles
  CENTRAL_US: { lat: 32.7767, lon: -96.797 }, // Dallas
  EAST_US: { lat: 39.0438, lon: -77.4874 }, // Ashburn, VA
  MEXICO_CITY: { lat: 19.4326, lon: -99.1332 },
  SAO_PAULO: { lat: -23.5505, lon: -46.6333 },
  //FRANKFURT: { lat: 50.1109, lon: 8.6821 },
  MANCHESTER: { lat: 53.4808, lon: -2.2426 },
  //TEL_AVIV: { lat: 32.0853, lon: 34.7818 },
  //JOHANNESBURG: { lat: -26.2041, lon: 28.0473 },
  SINGAPORE: { lat: 1.3521, lon: 103.8198 },
  TOKYO: { lat: 35.6762, lon: 139.6503 },
  MELBOURNE: { lat: -37.8136, lon: 144.9631 },
};

// ── Closest region lookup ────────────────────────────────────────────

/** Haversine distance in km between two lat/lon points. */
function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Returns the closest region to the given latitude / longitude. */
export function getClosestRegion(lat: number, lon: number): Region {
  let closest: Region = REGIONS[0];
  let minDist = Infinity;

  for (const region of REGIONS) {
    const coords = REGION_COORDS[region];
    const dist = haversineKm(lat, lon, coords.lat, coords.lon);
    if (dist < minDist) {
      minDist = dist;
      closest = region;
    }
  }

  return closest;
}

// ── Region proximity ─────────────────────────────────────────────────

type RegionProximityEntry = {
  region: Region;
  /** Milliseconds the ticket must wait in queue before this region is allowed. */
  waitMs: number;
};

/**
 * For each home region, an ordered list of neighboring regions with
 * the queue wait time (ms) required before that neighbor becomes eligible.
 */
export const REGION_PROXIMITY: Record<Region, RegionProximityEntry[]> = {
  WEST_US: [
    { region: "CENTRAL_US", waitMs: 10_000 },
    { region: "EAST_US", waitMs: 20_000 },
    { region: "MEXICO_CITY", waitMs: 20_000 },
    { region: "TOKYO", waitMs: 30_000 },
    //{ region: "MANCHESTER", waitMs: 30_000 },
  ],
  CENTRAL_US: [
    { region: "WEST_US", waitMs: 10_000 },
    { region: "EAST_US", waitMs: 10_000 },
    { region: "MEXICO_CITY", waitMs: 20_000 },
    { region: "MANCHESTER", waitMs: 30_000 },
  ],
  EAST_US: [
    { region: "CENTRAL_US", waitMs: 10_000 },
    { region: "WEST_US", waitMs: 15_000 },
    { region: "MEXICO_CITY", waitMs: 15_000 },
    { region: "MANCHESTER", waitMs: 25_000 },
    //{ region: "FRANKFURT", waitMs: 25_000 },
  ],
  MEXICO_CITY: [
    { region: "CENTRAL_US", waitMs: 10_000 },
    { region: "WEST_US", waitMs: 15_000 },
    { region: "EAST_US", waitMs: 15_000 },
  ],
  SAO_PAULO: [{ region: "EAST_US", waitMs: 40_000 }],
  /* FRANKFURT: [
    { region: "MANCHESTER", waitMs: 0 },
    { region: "TEL_AVIV", waitMs: 15_000 },
    { region: "EAST_US", waitMs: 25_000 },
  ], */
  MANCHESTER: [
    //{ region: "FRANKFURT", waitMs: 0 },
    { region: "EAST_US", waitMs: 15_000 },
    { region: "CENTRAL_US", waitMs: 25_000 },
  ],
  //TEL_AVIV: [{ region: "FRANKFURT", waitMs: 10_000 }],
  //JOHANNESBURG: [],
  SINGAPORE: [
    { region: "TOKYO", waitMs: 10_000 },
    { region: "MELBOURNE", waitMs: 20_000 },
  ],
  TOKYO: [
    { region: "SINGAPORE", waitMs: 15_000 },
    { region: "WEST_US", waitMs: 20_000 },
  ],
  MELBOURNE: [
    { region: "SINGAPORE", waitMs: 15_000 },
    { region: "TOKYO", waitMs: 25_000 },
  ],
};

// ── Match server selection ───────────────────────────────────────────

/**
 * For each cross-region pairing, the middle-ground server region that
 * gives the most balanced latency for both sides.
 *
 * Key format: `"REGION_A:REGION_B"` (alphabetically sorted).
 * Only reachable pairs (from REGION_PROXIMITY) need an entry.
 * Same-region matches and undefined pairs default to the anchor's region.
 */
const MATCH_SERVER_OVERRIDES: Record<string, Region> = {
  // ── North America ──
  "CENTRAL_US:WEST_US": "CENTRAL_US",
  "EAST_US:WEST_US": "CENTRAL_US",
  "MEXICO_CITY:WEST_US": "WEST_US",
  "CENTRAL_US:EAST_US": "CENTRAL_US",
  "CENTRAL_US:MEXICO_CITY": "CENTRAL_US",
  "EAST_US:MEXICO_CITY": "CENTRAL_US",

  // ── NA ↔ EU ──
  "MANCHESTER:WEST_US": "EAST_US",
  "CENTRAL_US:MANCHESTER": "EAST_US",
  "EAST_US:MANCHESTER": "EAST_US",
  "EAST_US:FRANKFURT": "MANCHESTER",
  "FRANKFURT:WEST_US": "EAST_US",

  // ── South America ↔ NA ──
  "EAST_US:SAO_PAULO": "EAST_US",

  // ── Europe ──
  //"FRANKFURT:MANCHESTER": "FRANKFURT",
  //"FRANKFURT:TEL_AVIV": "FRANKFURT",
  //"MANCHESTER:TEL_AVIV": "FRANKFURT",

  // ── EU ↔ Africa ──
  //"FRANKFURT:JOHANNESBURG": "FRANKFURT",

  // ── Asia-Pacific ──
  "SINGAPORE:TOKYO": "SINGAPORE",
  "MELBOURNE:SINGAPORE": "SINGAPORE",
  "MELBOURNE:TOKYO": "SINGAPORE",

  // ── Asia ↔ NA ──
  "TOKYO:WEST_US": "WEST_US",
};

function pairKey(a: Region, b: Region): string {
  return a < b ? `${a}:${b}` : `${b}:${a}`;
}

/**
 * Given the regions of the matched players, returns the server region
 * that provides the most balanced experience.
 * Falls back to `anchorRegion` for same-region or undefined pairs.
 */
export function getMatchServerRegion(anchorRegion: Region, ...otherRegions: Region[]): Region {
  // If everyone is in the same region, use it directly
  if (otherRegions.every((r) => r === anchorRegion)) return anchorRegion;

  // For two distinct regions, look up the override
  const uniqueRegions = [...new Set([anchorRegion, ...otherRegions])];
  if (uniqueRegions.length === 2) {
    const override = MATCH_SERVER_OVERRIDES[pairKey(uniqueRegions[0], uniqueRegions[1])];
    if (override) return override;
  }

  // 3+ distinct regions or no override defined: pick the region that
  // appears most frequently, tie-break with the anchor
  const counts = new Map<Region, number>();
  for (const r of [anchorRegion, ...otherRegions]) {
    counts.set(r, (counts.get(r) ?? 0) + 1);
  }
  let best = anchorRegion;
  let bestCount = 0;
  for (const [region, count] of counts) {
    if (count > bestCount) {
      bestCount = count;
      best = region;
    }
  }
  return best;
}

// ── Skill range ──────────────────────────────────────────────────────

const BASE_SKILL_RANGE = 100;
const SKILL_EXPAND_INTERVAL_SEC = 5;
const SKILL_EXPAND_AMOUNT = 50;
const SKILL_INFINITE_AFTER_SEC = 20;

/**
 * Returns the allowed skill range (± from the ticket's skill)
 * based on how long the ticket has been in the queue.
 *
 * - Starts at ±100
 * - Every 5 seconds expands by 50
 * - After 20 seconds range becomes infinite
 */
export function getSkillRange(elapsedMs: number): number {
  const elapsedSec = elapsedMs / 1000;
  if (elapsedSec >= SKILL_INFINITE_AFTER_SEC) return Infinity;
  const expansions = Math.floor(elapsedSec / SKILL_EXPAND_INTERVAL_SEC);
  return BASE_SKILL_RANGE + expansions * SKILL_EXPAND_AMOUNT;
}

// ── Region expansion ─────────────────────────────────────────────────

/**
 * Returns the set of allowed regions for a ticket based on how long
 * it has been in the queue.
 *
 * - Starts with only the home region
 * - Each neighbor unlocks once `elapsedMs` reaches its `waitMs` threshold
 */
export function getAllowedRegions(homeRegion: Region, elapsedMs: number): Set<Region> {
  const allowed = new Set<Region>([homeRegion]);
  const neighbors = REGION_PROXIMITY[homeRegion];
  if (!neighbors) return allowed;

  for (const entry of neighbors) {
    if (elapsedMs >= entry.waitMs) {
      allowed.add(entry.region);
    }
  }
  return allowed;
}

// ── Ticket compatibility ─────────────────────────────────────────────

/**
 * Checks if ticket `a` meets the criteria to match with ticket `b`.
 * Only ticket `a`'s expanded skill range and allowed regions are evaluated.
 */
export function areTicketsCompatible(
  a: MatchmakingTicket,
  b: MatchmakingTicket,
  now: number,
): boolean {
  const elapsedA = now - new Date(a.created_at).getTime();

  // ── Skill check ── ticket A's range must cover the difference
  const rangeA = getSkillRange(elapsedA);
  const skillDiff = Math.abs(a.skill - b.skill);
  if (skillDiff > rangeA) return false;

  // ── Region check ── ticket A's allowed regions must include B's region
  const regionsA = getAllowedRegions(a.region as Region, elapsedA);
  if (!regionsA.has(b.region as Region)) return false;

  return true;
}

// ── Match finding ────────────────────────────────────────────────────

/**
 * From a pool of tickets, finds groups whose **total player count**
 * equals `totalPlayers`. Tickets may be solo (partySize 1) or duo
 * (partySize 2), so a 4-player match can be filled by any mix of
 * solos and duos that adds up to 4.
 *
 * The anchor ticket's expanded criteria must accept every other ticket
 * in the group. Tickets can only appear in one group.
 *
 * Uses a greedy approach: iterates tickets and greedily builds groups
 * from the first compatible candidates found.
 */
export function findMatchedGroups(
  tickets: MatchmakingTicket[],
  totalPlayers: number,
): MatchmakingTicket[][] {
  const now = Date.now();
  const matched: MatchmakingTicket[][] = [];
  const used = new Set<string>(); // track by matchmakingRequestId

  for (let i = 0; i < tickets.length; i++) {
    const anchor = tickets[i];
    if (used.has(anchor.matchmakingRequestId)) continue;

    const group: MatchmakingTicket[] = [anchor];
    let playerCount = anchor.partySize;

    for (let j = i + 1; j < tickets.length && playerCount < totalPlayers; j++) {
      const candidate = tickets[j];
      if (used.has(candidate.matchmakingRequestId)) continue;

      // Adding this candidate would exceed the required player count
      if (playerCount + candidate.partySize > totalPlayers) continue;

      // Candidate must be compatible with the anchor ticket
      if (!areTicketsCompatible(anchor, candidate, now)) continue;

      group.push(candidate);
      playerCount += candidate.partySize;
    }

    if (playerCount === totalPlayers) {
      for (const t of group) used.add(t.matchmakingRequestId);
      matched.push(group);
    }
  }

  return matched;
}
