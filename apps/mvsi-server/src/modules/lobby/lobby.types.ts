import type { MATCH_TYPES } from "../matchmaking/matchmaking.types";

export const LOBBY_CREATED_CHANNEL = "lobby:created";
export const LOBBY_MODE_UPDATED_CHANNEL = "lobby:mode";
export const LOBBY_QUEUED_CHANNEL = "lobby:queued";

export type LobbyPlayerStatus = {
  id: string;
  profileId: string;
  ready: boolean;
};

export type LobbyPlayer = {
  Account: { id: string };
  ProfileId: string;
  JoinedAt: Date;
  BotSettingSlug: string;
  LobbyPlayerIndex: number;
  CrossplayPreference: number;
};

export type LobbyTeam = {
  TeamIndex: number;
  Players: Record<string, LobbyPlayer>;
  Length: number;
};

export type MultiplayParams = {
  MultiplayClusterSlug: string;
  MultiplayProfileId: string;
  MultiplayRegionId: string;
};

export type LockedLoadout = {
  Character: string;
  Skin: string;
};

// Base lobby type without ModeString
export type BaseLobby = {
  Teams: LobbyTeam[];
  LeaderID: string;
  LobbyType: number;
  ReadyPlayers: Record<string, unknown>;
  PlayerGameplayPreferences: Record<string, number>;
  PlayerAutoPartyPreferences: Record<string, boolean>;
  GameVersion: string;
  HissCrc: number;
  Platforms: Record<string, string>;
  AllMultiplayParams: Record<string, MultiplayParams>;
  LockedLoadouts: Record<string, LockedLoadout>;
  IsLobbyJoinable: boolean;
  MatchID: string;
};

// Regular Lobby requires ModeString
export type Lobby = BaseLobby & {
  ModeString: MATCH_TYPES;
};

// RiftLobby includes ExtraLobbyRiftData and explicitly excludes ModeString
// ExtraLobbyRiftData should be imported from rifts module when creating RiftLobby
export type RiftLobby = BaseLobby & {
  ModeString?: never;
  // Additional rift-specific fields should be added via intersection
  // Example: RiftLobby & ExtraLobbyRiftData
};