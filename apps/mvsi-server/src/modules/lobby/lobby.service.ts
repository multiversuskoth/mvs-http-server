import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getCurrentCRC } from "../../data/config";
import { MATCH_TYPES } from "../matchmaking/matchmaking.types";
import { getPlayerConfig } from "../playerConfig/playerConfig.service";
import {
  type BaseLobby,
  LOBBY_CREATED_CHANNEL,
  LOBBY_MODE_UPDATED_CHANNEL,
  type Lobby,
} from "./lobby.types";

export async function getLobby(lobbyId: string) {
  const lobbyStr = await redisClient.get(`lobby:${lobbyId}`);
  if (lobbyStr) {
    return JSON.parse(lobbyStr) as Lobby;
  }
  return null;
}

export async function createPartyLobby(
  accountId: string,
  profileId: string,
  lobbyMode: MATCH_TYPES = MATCH_TYPES.ONE_V_ONE,
) {
  const [playerConfig, playerCurrentLobbyId] = await Promise.all([
    getPlayerConfig(accountId),
    getPlayerCurrentLobbyId(accountId),
  ]);

  if (!playerConfig) {
    throw new Error("PlayerConfig not found");
  }

  if (playerCurrentLobbyId) {
    await deleteLobby(playerCurrentLobbyId, accountId);
  }

  const newLobby: Lobby = {
    Teams: [
      {
        TeamIndex: 0,
        Players: {
          [accountId]: {
            Account: { id: accountId },
            ProfileId: profileId,
            JoinedAt: new Date(),
            BotSettingSlug: "",
            LobbyPlayerIndex: 0,
            CrossplayPreference: 1,
          },
        },
        Length: 1,
      },
      { TeamIndex: 1, Players: {}, Length: 0 },
      { TeamIndex: 2, Players: {}, Length: 0 },
      { TeamIndex: 3, Players: {}, Length: 0 },
      { TeamIndex: 4, Players: {}, Length: 0 },
    ],
    LeaderID: accountId,
    LobbyType: 0,
    ReadyPlayers: {},
    PlayerGameplayPreferences: { [accountId]: playerConfig.GameplayPreferences },
    PlayerAutoPartyPreferences: { [accountId]: playerConfig.bAutoPartyPreference },
    GameVersion: env.GAME_VERSION,
    HissCrc: getCurrentCRC(),
    Platforms: { [accountId]: "PC" },
    AllMultiplayParams: {
      "1": {
        MultiplayClusterSlug: "ec2-us-east-1-dokken",
        MultiplayProfileId: "1252499",
        MultiplayRegionId: "",
      },
      "2": {
        MultiplayClusterSlug: "ec2-us-east-1-dokken",
        MultiplayProfileId: "1252922",
        MultiplayRegionId: "19c465a7-f21f-11ea-a5e3-0954f48c5682",
      },
      "3": { MultiplayClusterSlug: "", MultiplayProfileId: "1252925", MultiplayRegionId: "" },
      "4": {
        MultiplayClusterSlug: "ec2-us-east-1-dokken",
        MultiplayProfileId: "1252928",
        MultiplayRegionId: "19c465a7-f21f-11ea-a5e3-0954f48c5682",
      },
    },
    LockedLoadouts: { [accountId]: { Character: playerConfig.Character, Skin: playerConfig.Skin } },
    ModeString: lobbyMode,
    IsLobbyJoinable: true,
    MatchID: new ObjectId().toHexString(),
  };
  await setPlayerCurrentLobbyId(accountId, newLobby.MatchID);
  await publishLobbyCreated(newLobby);

  logger.info(`Creating party lobby for ${accountId} - matchLobbyId:${newLobby.MatchID}`);

  return newLobby;
}

export async function setPlayerCurrentLobbyId(playerId: string, lobbyId: string) {
  await redisClient.set(`player:${playerId}:lobby`, lobbyId);
}

export async function getPlayerCurrentLobbyId(playerId: string) {
  const lobbyId = await redisClient.get(`player:${playerId}:lobby`);
  return lobbyId;
}

export async function publishLobbyCreated(lobby: BaseLobby) {
  const EX = 2 * 24 * 60 * 60; // 2 days just to be safe remove old lobbies
  await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby), { EX });
  await redisClient.publish(LOBBY_CREATED_CHANNEL, JSON.stringify(lobby));
}

export async function setLobbyMode(leaderId: string, lobbyId: string, newMode: MATCH_TYPES) {
  const lobby = await getLobby(lobbyId);
  if (!lobby) {
    throw new Error("Lobby not found");
  }
  if (lobby.LeaderID !== leaderId) {
    throw new Error("You are not the owner of this lobby");
  }
  lobby.ModeString = newMode;
  await redisClient.set(`lobby:${lobbyId}`, JSON.stringify(lobby));

  await redisClient.publish(LOBBY_MODE_UPDATED_CHANNEL, JSON.stringify(lobby));
  logger.info(`Changing party lobby for ${lobbyId} - to ${newMode}`);
  return lobby;
}

export async function lockLobby(lobbyId: string, leaderId: string) {
  const lobby = await getLobby(lobbyId);
  if (lobby && lobby.LeaderID !== leaderId) {
    lobby.IsLobbyJoinable = false;
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
  }
}

export async function deleteLobby(lobbyId: string, leaderId: string) {
  const lobby = await getLobby(lobbyId);
  if (lobby && lobby.LeaderID !== leaderId) {
    await redisClient.del(`lobby:${lobby.MatchID}`);
  }
}
