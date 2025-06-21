import ObjectID from "bson-objectid";
import { ON_LOBBY_MODE_UPDATED, redisClient, RedisOnGameModeUpdatedNotification } from "../config/redis";
import { logger } from "../config/logger";

export enum LOBBY_MODES {
  ONE_V_ONE = "1v1",
  TWO_V_TWO = "2v2",
  FFA = "FFA",
  ONE_V_ONE_RANKED = "1v1_ranked",
  TWO_V_TWO_RANKED = "2v2_ranked",
}

interface Lobby {
  id: string;
  created_at: string;
  owner: string;
  guest?: string;
  mode: LOBBY_MODES;
}

export async function createLobby(accountId: string, lobbyMode: LOBBY_MODES = LOBBY_MODES.ONE_V_ONE): Promise<Lobby> {
  const lobbyId = ObjectID().toHexString();
  const newLobby: Lobby = {
    id: lobbyId,
    created_at: new Date().toISOString(),
    mode: lobbyMode, // Default mode, can be changed later
    owner: accountId,
    // guest can be set later when a second player joins
  };
  await redisClient.hSet(`lobby:${lobbyId}`, {
    id: newLobby.id,
    created_at: newLobby.created_at,
    mode: newLobby.mode,
    owner: newLobby.owner,
  });

  logger.info(`Creating party lobby for ${accountId} - matchLobbyId:${lobbyId}`);
  return newLobby;
}

export async function changeLobbyMode(ownerId: string, lobbyId: string, newMode: LOBBY_MODES) {
  const lobby = await redisClient.hGetAll(`lobby:${lobbyId}`);
  if (!lobby.id) {
    throw new Error("Lobby not found");
  }
  if (lobby.owner !== ownerId) {
    throw new Error("You are not the owner of this lobby");
  }

  await redisClient.hSet(`player:${ownerId}:lobby:${lobbyId}`, { mode: newMode });
  const notification: RedisOnGameModeUpdatedNotification = {
    lobbyId: lobbyId,
    playersIds: [ownerId],
    modeString: newMode,
  };
  await redisClient.publish(ON_LOBBY_MODE_UPDATED, JSON.stringify(notification));
  logger.trace(`Changing party lobby for ${lobbyId} - to ${newMode}`);
  return lobby;
}
