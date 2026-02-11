import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { RIFTS_CONFIG } from "../../data/rifts";
import {
  deleteLobby,
  getLobby,
  getPlayerCurrentLobbyId,
  publishLobbyCreated,
} from "../lobby/lobby.service";
import type { RiftLobby } from "../lobby/lobby.types";
import type { ExtraLobbyRiftData, RiftsData } from "./rfits.types";

export async function createRiftLobby(
  accountId: string,
  RiftConfigSlug: string,
  ChapterGuid: string,
  ChapterDifficulty: number,
) {
  const lobbyId = await getPlayerCurrentLobbyId(accountId);
  if (!lobbyId) {
    throw new Error("Player Lobby ID not found");
  }
  const lobby = await getLobby(lobbyId);
  if (!lobby) {
    throw new Error("Lobby not found");
  }

  const riftsData: RiftsData = {
    leaderID: accountId,
    lobbyId: lobby.MatchID,
    chapter: RiftConfigSlug,
    key: "",
    hostCharacter: "",
    hostSkin: "",
  };
  const extraLobbyRiftData: ExtraLobbyRiftData = {
    RiftConfigSlug: RiftConfigSlug,
    ChapterGuid: ChapterGuid,
    RuntimeData: {
      RuntimeChapterData: {
        [ChapterGuid]: {
          bIsChapterComplete: false,
          NodeCompletionsByDifficulty: {
            "0": [],
            "1": [],
            "2": [],
            "3": [],
          },
          CurrentDifficulty: ChapterDifficulty,
          HighestDifficultyCompleted: ChapterDifficulty,
        },
      },
      RuntimeNodeData: {},
    },
    RiftState: {},
  };
  lobby.MatchID = new ObjectId().toHexString();
  const { ModeString, ...lobbyWithoutModeString } = lobby;

  const riftLobby: RiftLobby & ExtraLobbyRiftData = {
    ...lobbyWithoutModeString,
    ...extraLobbyRiftData,
  };

  await setRiftLobbyForPlayer(accountId, riftsData);
  await deleteLobby(lobbyId, accountId);
  await publishLobbyCreated(riftLobby);
  logger.info(`RIFT lobby created for ${accountId} - matchLobbyId:${riftLobby.MatchID}`);
  return riftLobby;
}

export async function getRiftLobbyForPlayer(accountId: string) {
  const playerRiftsData = await redisClient.get(`player:${accountId}:rifts`);
  if (playerRiftsData) {
    return JSON.parse(playerRiftsData) as RiftsData;
  }
  return null;
}

export async function setRiftLobbyForPlayer(accountId: string, riftsData: RiftsData) {
  await redisClient.set(`player:${accountId}:rifts`, JSON.stringify(riftsData));
}

export async function gatherChapterCodeNames(rift_name: string) {
  const riftConfig = getRiftChapter(rift_name);
  const chapterCodeNames = Object.keys(riftConfig);
  return chapterCodeNames;
}

export function getRiftChapter(value: string) {
  const riftConfig = RIFTS_CONFIG[value as keyof typeof RIFTS_CONFIG];
  const chapters = riftConfig.data.RiftMatchNodeData;
  for (const node of Object.keys(chapters)) {
    const nodeData = chapters[node];
    const nodeCodeName = nodeData.Guid;
    nodeCodeNames.push(nodeCodeName);
  }
  return chapters;
}

export function getRiftRuntimeNodeData(rift_name: string) {
  const riftConfig = getRiftChapter(rift_name);
}
