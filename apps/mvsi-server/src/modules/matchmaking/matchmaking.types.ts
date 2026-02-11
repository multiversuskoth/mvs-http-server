import type { PlayerConfig } from "../playerPresence/playerPresence.service";

export const MATCHMAKING_MATCH_FOUND_CHANNEL = "matchmaking:matchfound";
export const MATCHMAKING_GAME_SERVER_READY_CHANNEL = "matchmaking:serverready";
export const MATCHMAKING_COMPLETE_CHANNEL = "matchmaking:complete";
export const MATCHMAKING_CANCEL_CHANNEL = "matchmaking:cancel";
export const MATCHMAKING_PERKS_LOCKED_CHANNEL = "matchmaking:perkslocked";
export const ACTIVEMATCH_END_CHANNEL = "activematch:end";

export enum MATCH_TYPES {
  ONE_V_ONE = "1v1",
  TWO_V_TWO = "2v2",
  FFA = "FFA",
  CASUAL = "casual",
  ONE_V_ONE_RANKED = "ranked-1v1",
  TWO_V_TWO_RANKED = "ranked-2v2",
  RIFTS = "rifts",
}

export const MATCH_STATE = {
  QUEUED: 2,
  CANCELLED: 3,
};

export type MatchmakingPlayer = {
  id: string;
  skill: number;
  region: string;
};

export type MatchmakingTicket = {
  party_size: number;
  region: string;
  skill: number;
  playerIds : string[];
  created_at: Date;
  partyId: string;
  matchmakingRequestId: string;
  matchType: MATCH_TYPES;
  partyLeaderId: string;
};

export type ServerInstanceReadyMessage = {
  containerMatchId: string;
  resultId: string;
  playerIds: string[];
};

export type MatchmakingCompleteMessage = {
  containerMatchId: string;
  matchmakingRequestId: string;
  resultId: string;
  playerIds: string[];
};

export type MatchmakingCancelMessage = {
  playersIds: string[];
  matchmakingId: string;
  matchType: MATCH_TYPES;
};

export type MatchEndMessage = {
  playersIds: string[];
  matchId: string;
};

export interface MatchmakingPlayerConfig {
  playerId: string;
  partyId: string;
  playerIndex: number;
  teamIndex: 0 | 1;
  isHost: boolean;
  ip: string;
}

export type MatchmakingPerksLockMessage = {
  containerMatchId: string;
  playerIds: string[];
};

export type MatchmakingActiveMatch = {
  matchKey: string;
  resultId: string;
  //tickets: MatchmakingTicket[];
  matchConfig: MatchConfig;
  state: string;
};

type CustomGameSettings = {
  bHazardsEnabled: boolean;
  bShieldsEnabled: boolean;
  MatchTime: number;
  NumRingouts: number;
};

type HudSettings = {
  bDisplayPortraits: boolean;
  bDisplayStocks: boolean;
  bDisplayTimer: boolean;
};

type MatchConfig = {
  ArenaModeInfo: null | string;
  RiftNodeId: string;
  ScoreEvaluationRule: string;
  bIsPvP: boolean;
  ScoreAttributionRule: string;
  MatchDurationSeconds: number;
  Created: Date;
  EventQueueSlug: string;
  bModeGrantsProgress: boolean;
  TeamData: any[];
  Spectators: object;
  bIsRanked: boolean;
  bIsCustomGame: boolean;
  Players: { [key: string]: PlayerConfig };
  CustomGameSettings: CustomGameSettings;
  HudSettings: HudSettings;
  bIsCasualSpecial: boolean;
  bAllowMapHazards: boolean;
  RiftNodeAttunement: string;
  CountdownDisplay: string;
  Cluster: string;
  WorldBuffs: any[];
  bIsTutorial: boolean;
  MatchId: string;
  bIsOnlineMatch: boolean;
  ModeString: string;
  Map: string;
  bIsRift: boolean;
};

type Payload = {
  match: {
    id: string;
  };
  custom_notification: string;
};

type MatchData = {
  MatchId: string;
  GameplayConfig: MatchConfig;
  template_id: string;
};

export type GameNotification = {
  data: MatchData;
  payload: Payload;
  header: string;
  cmd: string;
};
