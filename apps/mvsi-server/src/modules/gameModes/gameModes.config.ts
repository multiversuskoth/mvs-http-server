import { maps1v1, maps2v2 } from "../../data/maps";
import { MATCH_TYPES } from "../matchmaking/matchmaking.types";
import type { PlayerConfig } from "../playerPresence/playerPresence.service";

export type PlayersConfigObject = {
  [playerId: string]: PlayerConfig;
};

type GameModeTeamConfig = {
  Players: any[];
  Required: boolean;
  MinPlayerPerTeam: number;
  MaxPlayerPerTeam: number;

  RequiredTeamPlayerBuffs: string[];
};

export enum TeamStyle {
  Solos,
  Duos,
  FFA,
  Other,
}

export type GameModeConfig = {
  TeamStyle: TeamStyle;
  MapRotation: string[];
  GameModeTeams: GameModeTeamConfig[];
  MatchDuration: number;
  bShieldsEnabled: boolean;
  bHazardsEnabled: boolean;
  NumRingouts: number;
};

const ONE_V_ONE_GAMEPLAY_CONFIG: GameModeConfig = {
  TeamStyle: TeamStyle.Solos,
  MapRotation: maps1v1,
  MatchDuration: 420,
  NumRingouts: 3,
  bHazardsEnabled: false,
  bShieldsEnabled: true,
  GameModeTeams: [
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
  ],
};

const TWO_V_TWO_GAMEPLAY_CONFIG: GameModeConfig = {
  TeamStyle: TeamStyle.Duos,
  MapRotation: maps2v2,
  MatchDuration: 420,
  bHazardsEnabled: false,
  bShieldsEnabled: true,
  NumRingouts: 4,
  GameModeTeams: [
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 2,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 2,
      RequiredTeamPlayerBuffs: [],
    },
  ],
};

const FFA_GAMEPLAY_CONFIG: GameModeConfig = {
  TeamStyle: TeamStyle.FFA,
  MapRotation: maps2v2,
  MatchDuration: 420,
  bHazardsEnabled: false,
  bShieldsEnabled: true,
  NumRingouts: 4,
  GameModeTeams: [
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
  ],
};

const CASUAL_GAMEPLAY_CONFIG: GameModeConfig = {
  TeamStyle: TeamStyle.FFA,
  MapRotation: maps2v2,
  MatchDuration: 60,
  bHazardsEnabled: false,
  bShieldsEnabled: true,
  NumRingouts: 1,
  GameModeTeams: [
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
    {
      Players: [],
      Required: true,
      MinPlayerPerTeam: 1,
      MaxPlayerPerTeam: 1,
      RequiredTeamPlayerBuffs: [],
    },
  ],
};

export const GAME_MODES = new Map<MATCH_TYPES, GameModeConfig>();

GAME_MODES.set(MATCH_TYPES.ONE_V_ONE, ONE_V_ONE_GAMEPLAY_CONFIG);
GAME_MODES.set(MATCH_TYPES.TWO_V_TWO, TWO_V_TWO_GAMEPLAY_CONFIG);
GAME_MODES.set(MATCH_TYPES.FFA, FFA_GAMEPLAY_CONFIG);
GAME_MODES.set(MATCH_TYPES.CASUAL, CASUAL_GAMEPLAY_CONFIG);
