import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

import { MVSTime } from "../utils/date";

@modelOptions({
  schemaOptions: {
    _id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
})
export class Profile {
  @prop({ required: true })
  accountData!: Account;

  @prop({ required: true, type: () => Inventory })
  inventory!: Inventory;

  @prop({ default: null, type: () => CharacterPerkPreferences })
  charPerkPreferences: CharacterPerkPreferences | null = null;

  @prop({ type: () => [ArchivedBattlePass] })
  battlePassData: ArchivedBattlePass[] = [];

  @prop({ type: () => [MatchConfig] })
  multiQueueConfigs: MatchConfig[] = [];

  @prop({ required: true, type: () => RankedData })
  rankedSeasonsData!: RankedData;

  @prop({ required: true })
  statTrackers!: StatTrackers;

  @prop({ required: true })
  ownedPerks!: OwnedPerks;

  @prop({ required: true, type: () => MatchHistory })
  matchHistory!: MatchHistory;
}

export interface PerkPage {
  PageName: string;
  PerkSlugs: string[];
}

@modelOptions({ schemaOptions: { _id: false } })
export class CharacterPerkPreferences {
  @prop({ default: null, type: Number })
  LastSelectedPage: number | null = null;

  @prop()
  PerkPages: PerkPage[] = [];
}

@modelOptions({ schemaOptions: { _id: false } })
export class ArchivedBattlePass {
  @prop({ required: true })
  CurrentTier!: number;

  @prop({ required: true })
  CurrentXP!: number;

  @prop({ required: true })
  ConfigSlug!: string;

  @prop({ required: true })
  IsPremium!: boolean;
}

@modelOptions({ schemaOptions: { _id: false } })
export class MatchConfig {
  @prop({ required: true })
  AllowHazards!: boolean;

  @prop({ required: true })
  Context!: string;

  @prop({ required: true })
  GameModeAlias!: string;

  @prop({ required: true })
  MatchDuration!: number;

  @prop({ required: true })
  ModeDifficulty!: string;

  @prop({ required: true })
  NumRingoutsForWin!: number;

  @prop({ required: true })
  QueueType!: string;

  @prop({ required: true })
  TeamStyle!: string;

  @prop({ required: true })
  AllowDuplicateCharacters!: boolean;

  @prop({ required: true, type: [String] })
  DisabledCharacters!: string[];
}

export interface RankData {
  current_points: number;
  max_points: number;
  games_played: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class RankedData {
  //   v0Ranked: RankData = {
  //     current_points: 0,
  //     max_points: 0,
  //     games_played: 0
  //   };
  [season: string]: RankData;
}

@modelOptions({ schemaOptions: { _id: false } })
export class InventoryItem {
  @prop({ required: true })
  count!: number;
  @prop({ required: true, type: Date, get: MVSTime })
  created_at!: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class Inventory {
  @prop({ required: true })
  characters!: { [key: string]: InventoryItem };

  @prop({ required: true })
  gleamium!: InventoryItem; // TODO: change name to our own currency

  @prop({ required: true })
  battlePassSeasons!: { [key: string]: InventoryItem };

  //   @prop()
  //   ringOutVfxDecompiled?: InventoryItem; //TODO: figure out what this is

  @prop({ required: true })
  characterCurrency!: InventoryItem;

  @prop({ required: true })
  skins!: { [key: string]: InventoryItem };
}

export interface MatchStats {
  win: number;
  loss: number;
  win_streak: number;
  loss_streak: number;
  longest_win_streak: number;
  longest_loss_streak: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class MatchHistory {
  @prop()
  v1v1Container: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  v2v2Set?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  v2v2Container?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  customContainerTwoPlayer?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  riftContainerTwoPlayer?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  v2v2ContainerBot?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  customContainerFourPlayer?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  customContainerThreePlayer?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };

  @prop()
  v1v3ContainerBot?: MatchStats = {
    win: 0,
    loss: 0,
    win_streak: 0,
    loss_streak: 0,
    longest_win_streak: 0,
    longest_loss_streak: 0,
  };
}

export interface IdentityAlternate {
  id?: string | null;
  username?: string | null;
  avatar?: string | null;
}

export interface Identity {
  username: string;
  avatar: string | null;
  default_username: boolean;
  alternate: {
    wb_network: IdentityAlternate[];
    twitch: IdentityAlternate[];
    discord: IdentityAlternate[];
    google: IdentityAlternate[];
    nintendo: IdentityAlternate[];
    xb1: IdentityAlternate[];
    steam?: IdentityAlternate[];
    ps4?: IdentityAlternate[];
    epic?: IdentityAlternate[];
  };
}

export interface Account {
  id: string;
  updated_at: number;
  created_at: number;
  deleted: boolean;
  orphaned: boolean;
  orphaned_reason: string | null;
  public_id: string;
  identity: Identity;
  wb_account: {
    completed: boolean;
    email_verified: boolean;
  };
  points: number;
  state: string;
  wbplay_data_synced: boolean;
  wbplay_identity: string | null;
  locale?: string;
}

export interface StatTrackers {
  character_wins?: { [character: string]: number };
  [key: string]: number | { [key: string]: number } | undefined;
}

export interface OwnedPerks {
  [characterSlug: string]: {
    [perkSlug: string]: number;
  };
}

export const profileModel = getModelForClass(Profile);

/**
 * The interfaces and classes below represent certain structures/objects that could be derived from the profiles dump, but I still need to figure out,
 *  or may not necessarily apply to our version of the game, or may simply not be relevant to the actual profile class.
 */

// export interface AggregateData {
//   type_class: string;
//   value: number;
// }

// @modelOptions({schemaOptions: {_id: false}})
// export class Aggregates {
//   @prop()
//   snBattlePassScores: AggregateData[] = [];

//   @prop({required: true})
//   fighterRoadXp!: AggregateData;

// }
// export interface SeasonalArenaData {
//   CurrentPoints: number;
// }

// export interface SeasonalModeData {
//   A2: SeasonalArenaData;
// }

// export interface SeasonalDataByMode {
//   Normal: SeasonalModeData;
// }

// export interface SeasonData {
//   Arenas: {
//       DataByMode: SeasonalDataByMode;
//   };
// }

// @modelOptions({schemaOptions: {_id: false}})
// export class ServerSeasonalData {
//   @prop({required: true})
//   data!: { [seasonElementKey: string]: SeasonData };
// }

// @modelOptions({schemaOptions: {_id: false}})
// export class GameData {
//   @prop({required: true})
//   perkPreferences!: { [characterSlug: string]: CharacterPerkPreferences };
//   @prop({required: true})
//   archivedBattlePasses!: BattlePassData[];
//   @prop({required: true})
//   matchConfig!: { multiqueueConfigs: MultiqueueConfigs };
//   @prop({required: true})
//   rankedData!: RankedData;
//   @prop({required: true})
//   inventory!: Inventory;
//   @prop({required: true})
//   matchHistory!: MatchHistory;
//   @prop()
//   aggregates?: Aggregates;  //TODO: Not sure what this is, figure out what this is
//   @prop()
//   userSegments?: string[];  //TODO: Not sure what this is, figure out what this is
//   @prop({required: true})
//   accountData!: AccountData;
//   @prop()
//   serverData!: {
//       debug_all_unlocked: number;
//       Level: number;
//       CurrentXP: number;
//       loss_streak: number;
//       BattlepassID: string;
//       OwnedPerks?: ServerOwnedPerks;
//       stat_trackers?: ServerStatTrackers;
//       NumOwnedBaseRosterFighters: number;
//       exm_segment_membership: {
//           exm_global_segments: string[];
//           exm_experiment_segments: string[];
//       };
//       CasualQueue?: {
//           Modes?: {
//               "2v2-CoOp"?: {
//                   LastPickedDate?: number;
//                   LastPickedSeq?: number;
//                   TotalPicked?: number;
//               };
//           };
//           TotalGames?: number;
//       };
//       NumOwnedFighters: number;
//       archived_battlepasses?: BattlePassData;
//       MatchConfig?: { MultiqueueConfigs?: MultiqueueConfigs };
//       "1v1_ranked"?: { "1"?: RankedData };
//       "2v2_ranked"?: { "1"?: RankedData };
//       RecentlyToasted?: string[];
//       TotalPrestige?: number;
//       OpenBeta?: boolean; //TODO: we may not need this property
//       Transforms?: {
//           welcome_back?: boolean;
//           currency_conversion_errored?: {  //TODO: we may not need this property
//               Version_1?: boolean;
//               Version_2?: boolean;
//               Version_3?: boolean;
//           };
//       };
//       HasReceivedBattlepassRewardFromOpenBeta?: boolean; //TODO: we may not need this property
//       SeasonalData?: ServerSeasonalData;
//       loss_streak_ranked_1v1?: number;
//       win_streak_ranked_2v2?: number;
//       loss_streak_ranked_2v2?: number;
//   };

//   @prop()
//   data?: {
//       "2v2_prompt_shown"?: number;
//       HasCompletedFirstMatch?: boolean;
//       HasCompletedFTUE?: boolean;
//       MostRecentlyViewedCurrentRiftSeason?: string;
//   };
// }
