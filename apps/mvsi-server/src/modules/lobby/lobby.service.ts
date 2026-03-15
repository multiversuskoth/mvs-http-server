import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getCurrentCRC } from "../../data/config";
import { MATCH_TYPES } from "../matchmaking/matchmaking.types";
import { getPlayerConfig } from "../playerConfig/playerConfig.service";
import {
  type BaseLobby,
  type CustomLobby,
  type CustomLobbyMatchConfig,
  type CustomLobbySettings,
  LOBBY_CREATED_CHANNEL,
  LOBBY_MODE_UPDATED_CHANNEL,
  type LobbyTeam,
  type PartyLobby,
} from "./lobby.types";
import { TeamStyle } from "../gameModes/gameModes.config";
import { GAME_MODES_CONFIG } from "../../data/gameModes";
import { MAP_ROTATIONS } from "../../data/maps";
import {
  REALTIME_NOTIFICATION_CHANNEL,
  type RealtimeNotificationMessage,
} from "../notifications/notifications.types";

export async function getLobby(lobbyId: string) {
  const lobbyStr = await redisClient.get(`lobby:${lobbyId}`);
  if (lobbyStr) {
    return JSON.parse(lobbyStr) as BaseLobby;
  }
  return null;
}

export async function setLobbyJoinable(lobbyId: string, leaderId: string, joinable: boolean) {
  const lobby = await getLobby(lobbyId);
  if (lobby && lobby.LeaderID === leaderId) {
    lobby.IsLobbyJoinable = joinable;
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
  }
}

export async function invitePlayerToLobby(
  MatchID: string,
  InviterAccountId: string,
  InviteeAccountId: string,
  IsSpectator: boolean,
) {
  const lobby = await getLobby(MatchID);
  if (lobby) {
    const notification: RealtimeNotificationMessage = {
      topic: InviteeAccountId,
      notification: {
        data: {
          LobbyType: 0,
          MatchID,
          ContextData: {
            LobbyType: "Custom",
          },
          template_id: "InviteReceivedForLobby",
          IsSpectator,
          InviterAccountId,
        },
        payload: {
          frm: {
            id: "internal-server",
            type: "server-api-key",
          },
          template: "realtime",
          account_id: InviteeAccountId,
          profile_id: InviteeAccountId,
        },
        header: "",
        cmd: "profile-notification",
      },
    };
    await redisClient.publish(REALTIME_NOTIFICATION_CHANNEL, JSON.stringify(notification));
  }
}

export async function createBaseLobby(accountId: string) {
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

  const baseLobby: BaseLobby = {
    Teams: [
      {
        TeamIndex: 0,
        Players: {
          [accountId]: {
            Account: { id: accountId },
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
    IsLobbyJoinable: true,
    MatchID: new ObjectId().toHexString(),
  };
  return baseLobby;
}

export async function createPartyLobby(
  accountId: string,
  lobbyMode: MATCH_TYPES = MATCH_TYPES.ONE_V_ONE,
) {
  const baseLobby = await createBaseLobby(accountId);
  const partyLobby: PartyLobby = {
    ...baseLobby,
    ModeString: lobbyMode,
  };

  await setPlayerCurrentLobbyId(accountId, partyLobby.MatchID);
  await publishLobbyCreated(partyLobby);

  logger.info(`Creating party lobby for ${accountId} - matchLobbyId:${partyLobby.MatchID}`);

  return partyLobby;
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
  const lobby = (await getLobby(lobbyId)) as PartyLobby;
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
  if (lobby && lobby.LeaderID === leaderId) {
    await redisClient.del(`lobby:${lobby.MatchID}`);
    logger.verbose(`Deleted lobby ${lobbyId} for player ${leaderId}`);
  }
}

// CUSTOM LOBBIES

export function getGameModeMaps(gameModeSlug: keyof typeof GAME_MODES_CONFIG) {
  const mapRotationName = GAME_MODES_CONFIG[gameModeSlug].data.GameModeData
    .MapRotation as keyof typeof MAP_ROTATIONS;
  const mapRotation = MAP_ROTATIONS[mapRotationName].data.MapsInRotation.map((map) => ({
    Map: map.Map,
    IsSelected: true,
  }));
  return mapRotation;
}

export function getCustomLobbyDefaultSettings(
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
): CustomLobbySettings {
  const defaultMapConfig = GAME_MODES_CONFIG[gameModeSlug].data;
  const mapRotation = getGameModeMaps(gameModeSlug);
  const customLobbySettings: CustomLobbySettings = {
    GameModeSlug: gameModeSlug,
    match_config: {
      TeamStyle: defaultMapConfig.GameModeData.TeamStyle as TeamStyle,
      QueueType: "Unselected",
      Context: "Custom",
      ModeDifficulty: "Unselected",
      GameModeAlias: "Versus",
      NumRingoutsForWin: defaultMapConfig.GameModeData.GameModeTeams[0].NumRingouts,
      MatchDuration: defaultMapConfig.GameModeData.MatchDuration,
      AllowHazards: defaultMapConfig.GameModeData.bMapHazards,
      AllowDuplicateCharacters: true,
      AreRewardsSkipped: true,
      num_set_wins_required: 1,
      EnableShields: 1,
    },
    Maps: mapRotation,
    Handicaps: {},
  };
  return customLobbySettings;
}

export async function createCustomLobby(accountId: string) {
  const baseLobby = await createBaseLobby(accountId);
  const customLobby: CustomLobby = {
    ...baseLobby,
    ReadyPlayers: {
      [accountId]: true,
    },
    ...getCustomLobbyDefaultSettings("gm_classic_2v2"),
  };

  await setPlayerCurrentLobbyId(accountId, customLobby.MatchID);
  await publishLobbyCreated(customLobby);

  logger.info(`Creating custom lobby for ${accountId} - matchLobbyId:${customLobby.MatchID}`);
  return customLobby;
}

export async function updateTeamStyleForCustomLobby(
  lobbyId: string,
  leaderId: string,
  newStyle: TeamStyle,
) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby?.LeaderID === leaderId) {
    lobby.match_config.TeamStyle = newStyle;
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
  }
  return lobby;
}

export async function updateGameModeForCustomLobby(
  lobbyId: string,
  leaderId: string,
  gameModeSlug: keyof typeof GAME_MODES_CONFIG,
) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby?.LeaderID === leaderId) {
    lobby.GameModeSlug = gameModeSlug;
    lobby.Maps = getGameModeMaps(gameModeSlug);
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
    const notification: RealtimeNotificationMessage = {
      topic: lobby.MatchID,
      notification: {
        data: {
          Maps: lobby.Maps,
          MatchID: lobby.MatchID,
          template_id: "MapsSetForCustomGame",
        },
        payload: {
          match: {
            id: lobby.MatchID,
          },
          custom_notification: "realtime",
        },
        header: "",
        cmd: "update",
      },
    };
    await redisClient.publish(REALTIME_NOTIFICATION_CHANNEL, JSON.stringify(notification));
  }
  return lobby;
}

export async function updateIntSettingForCustomLobby(
  lobbyId: string,
  leaderId: string,
  settingKey: keyof CustomLobbyMatchConfig,
  settingValue: any,
) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby?.LeaderID === leaderId) {
    // @ts-ignore
    lobby.match_config[settingKey] = settingValue;
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
  }
  return lobby;
}

export async function updateEnabledMapsForCustomLobby(
  lobbyId: string,
  leaderId: string,
  mapsSlugs: string[],
) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby?.LeaderID === leaderId) {
    lobby.Maps.forEach((map) => {
      map.IsSelected = mapsSlugs.includes(map.Map);
    });
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
  }
  return lobby.Maps;
}

export async function updateHandicapsForCustomLobby(
  lobbyId: string,
  leaderId: string,
  playerHandicap: number,
  playerId: string,
) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby?.LeaderID === leaderId) {
    lobby.Handicaps[playerId] = playerHandicap;
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
  }
  return lobby.Handicaps;
}

export async function switchTeamForCustomLobby(
  lobbyId: string,
  playerId: string,
  teamIndex: number,
) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby) {
    const currentTeam = lobby.Teams.find((team) => team.Players[playerId]);
    if (currentTeam) {
      const otherTeam = lobby.Teams.find((team) => team.TeamIndex === teamIndex);
      if (otherTeam) {
        const playerData = currentTeam.Players[playerId];
        delete currentTeam.Players[playerId];
        currentTeam.Length -= 1;
        otherTeam.Players[playerId] = playerData;
        otherTeam.Length += 1;
        await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
        return playerData;
      }
      return currentTeam.Players[playerId];
    }
    throw new Error("Player not found in any team");
  }
}

export async function addCustomGameBot(lobbyId: string, playerId: string, teamIndex: number) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby) {
    const currentTeam = lobby.Teams.find((team) => team.Players[playerId]);
    if (currentTeam) {
      const otherTeam = lobby.Teams.find((team) => team.TeamIndex === teamIndex);
      if (otherTeam) {
        const playerData = currentTeam.Players[playerId];
        delete currentTeam.Players[playerId];
        currentTeam.Length -= 1;
        otherTeam.Players[playerId] = playerData;
        otherTeam.Length += 1;
        await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
        return playerData;
      }
      return currentTeam.Players[playerId];
    }
    throw new Error("Player not found in any team");
  }
}

export async function resetCustomLobbySettings(lobbyId: string, leaderId: string) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby?.LeaderID === leaderId) {
    const resetLobby = {
      ...lobby,
      ...getCustomLobbyDefaultSettings(lobby.GameModeSlug),
    };
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(resetLobby));
    return resetLobby;
  }
}

export async function joinCustomLobby(lobbyId: string, accountId: string, isSpectator: boolean) {
  const lobby = (await getLobby(lobbyId)) as CustomLobby;
  if (lobby) {
    if (!lobby.IsLobbyJoinable) {
      return null;
    }
    const teamStyle = lobby.match_config.TeamStyle;
    let teamWithSpace: LobbyTeam | undefined;
    if (
      teamStyle === TeamStyle.FFA ||
      teamStyle === TeamStyle.Other ||
      teamStyle === TeamStyle.Solos
    ) {
      teamWithSpace = lobby.Teams.find((team) => team.Length < 1);
    } else if (teamStyle === TeamStyle.Duos) {
      teamWithSpace = lobby.Teams.find((team) => team.Length < 2);
    } else if (isSpectator) {
      teamWithSpace = lobby.Teams.find((team) => team.TeamIndex === 4 && team.Length < 4);
    }
    if (teamWithSpace) {
      teamWithSpace.Players[accountId] = {
        Account: { id: accountId },
        JoinedAt: new Date(),
        BotSettingSlug: "",
        LobbyPlayerIndex: teamWithSpace.Length,
        CrossplayPreference: 1,
      };
      teamWithSpace.Length++;

      lobby.ReadyPlayers[accountId] = false;
      lobby.PlayerAutoPartyPreferences[accountId] = false;
      lobby.PlayerGameplayPreferences[accountId] = 964;
      lobby.Platforms[accountId] = "PC";
      const playerConfig = await getPlayerConfig(accountId);
      if (playerConfig) {
        lobby.LockedLoadouts[accountId] = {
          Character: playerConfig.Character,
          Skin: playerConfig.Skin,
        };
      }
    }
    await redisClient.set(`lobby:${lobby.MatchID}`, JSON.stringify(lobby));
    await setPlayerCurrentLobbyId(accountId, lobby.MatchID);
    return lobby;
  }
}
