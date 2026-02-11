export type RiftsData = {
  leaderID: string;
  lobbyId: string;
  chapter: string;
  key: string;
  hostCharacter: string;
  hostSkin: string;
  //message: string[];
};

export type NodeCompletionsByDifficulty = {
  "0": string[];
  "1": string[];
  "2": string[];
  "3": string[];
};

export type RuntimeChapterDataItem = {
  bIsChapterComplete: boolean;
  NodeCompletionsByDifficulty: NodeCompletionsByDifficulty;
  CurrentDifficulty: number;
  HighestDifficultyCompleted: number;
};

export type RuntimeChapterData = {
  [chapterGuid: string]: RuntimeChapterDataItem;
};

export type RuntimeData = {
  RuntimeChapterData: RuntimeChapterData;
  RuntimeNodeData: unknown; // Replace with actual type when gather_rift_data return type is known
};

export type ExtraLobbyRiftData = {
  RiftConfigSlug: string;
  ChapterGuid: string;
  RuntimeData: RuntimeData;
  RiftState: Record<string, unknown>;
};

export type SoftObjectPath = {
  AssetPathName: string;
  SubPathString: string;
};

export type WeightedSkin = {
  Weight: number;
  Skin: SoftObjectPath;
};

export type WeightedCharacter = {
  Weight: number;
  Character: SoftObjectPath;
  Skins: WeightedSkin[];
};

export type CharacterDataList = WeightedCharacter[];


