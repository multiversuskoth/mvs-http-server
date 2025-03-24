import { modelOptions, mongoose, prop } from "@typegoose/typegoose";
import { Entries } from "type-fest";
import { dateToMVSTime } from "../utils/date";
import Characters from "../enums/characters";
import characterKeysValidator from "../utils/characterKeysValidator";
import { MapToRecord } from "../utils/mapToRecord";

@modelOptions({ schemaOptions: { _id: false } })
class RatingsStat {
  @prop({ required: true })
  mean!: number;
  @prop({ required: true })
  deviance!: number;
  @prop({ required: true })
  confidence!: number;
  @prop({ required: true })
  streak!: number;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  lastUpdateTimestamp!: number;

  public static flatten<P extends string>(
    ratingsStat: RatingsStat,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof RatingsStat as `${P}.${K}`]: RatingsStat[K];
  } {
    for (const [key, value] of Object.entries(ratingsStat) as Entries<RatingsStat>) {
      result[prefix + "." + key] = value;
    }
    return result as any;
  }
}

// @modelOptions({ schemaOptions: { _id: false } })
// class RatingsCharacters {
//   @prop()
//   garnet?: RatingsStat;

//   public static flatten<P extends string>(
//     ratingsCharacters: RatingsCharacters,
//     prefix: P,
//     result: Record<any, any> = {},
//   ): {
//     [K in keyof RatingsCharacters as `${P}.${K}`]: RatingsCharacters[K];
//   } {
//     for (const [key, value] of Object.entries(ratingsCharacters) as Entries<RatingsCharacters>) {
//       if (value != null) {
//         RatingsStat.flatten(value, prefix + "." + key, result);
//       }
//     }
//     return result as any;
//   }
// }

// @modelOptions({ schemaOptions: { _id: false } })
// class Ratings {
//   @prop({ required: true })
//   characters!: RatingsCharacters;

//   public static flatten<P extends string>(
//     ratings: Ratings,
//     prefix: P,
//     result: Record<any, any> = {},
//   ): {
//     [K in keyof Ratings as `${P}.${K}`]: Ratings[K];
//   } {
//     for (const [key, value] of Object.entries(ratings) as Entries<Ratings>) {
//       if (value != null) {
//         RatingsCharacters.flatten(value, prefix + "." + key, result);
//       }
//     }
//     return result as any;
//   }
// }

@modelOptions({ schemaOptions: { _id: false } })
export class SeasonalDataItemRankedDataByModeBestCharacter {
  @prop({ enum: Characters })
  CharacterSlug!: string;
  @prop({ required: true })
  CurrentPoints!: number;
  @prop({ required: true })
  GamesPlayed!: number;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  LastUpdateTimestamp!: number;
  @prop({ required: true })
  MaxPoints!: number;
  @prop({ required: true })
  SetsPlayed!: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class SeasonalDataItemRankedDataByModeCharacterData {
  @prop({ required: true })
  CurrentPoints!: number;

  @prop({ required: true })
  DamageDealt!: number;

  @prop({ required: true })
  DamageTaken!: number;

  @prop({ required: true })
  Deaths!: number;

  @prop({ required: true })
  GamesPlayed!: number;

  @prop({ required: true })
  LastDecayMs!: number;

  @prop({ type: Date, required: true, get: dateToMVSTime })
  LastUpdateTimestamp!: number;

  @prop({ required: true })
  Losses!: number;

  @prop({ required: true })
  MaxPoints!: number;

  @prop({ required: true })
  Ringouts!: number;

  @prop({ required: true })
  SetsPlayed!: number;

  @prop({ required: true })
  Wins!: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class SeasonalDataItemRankedDataByModeGamesPlayed {
  @prop({ enum: Characters })
  CharacterSlug!: string;
  @prop({ required: true })
  CurrentPoints!: number;
  @prop({ required: true })
  GamesPlayed!: number;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  LastUpdateTimestamp!: number;
  @prop({ required: true })
  MaxPoints!: number;
  @prop({ required: true })
  SetsPlayed!: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class SeasonalDataItemRankedDataByMode {
  @prop({ required: true })
  BestCharacter!: SeasonalDataItemRankedDataByModeBestCharacter;
  @prop({ type: SeasonalDataItemRankedDataByModeCharacterData, required: true, validate: characterKeysValidator })
  DataByCharacter!: Map<Characters, SeasonalDataItemRankedDataByModeCharacterData>;
  @prop({ required: true })
  GamesPlayed!: number;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  LastUpdateTimestamp!: number;
  @prop({ required: true })
  SetsPlayed!: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class SeasonalDataItemRankedMode {
  @prop({ required: true })
  "1v1"!: SeasonalDataItemRankedDataByMode;
}

@modelOptions({ schemaOptions: { _id: false } })
export class SeasonalDataItemRanked {
  @prop({ type: String, required: true })
  ClaimedRewards!: string[];
  @prop({ required: true })
  DataByMode!: SeasonalDataItemRankedMode;
}

@modelOptions({ schemaOptions: { _id: false } })
class SeasonalDataItem {
  @prop({ type: Date, get: dateToMVSTime })
  LastLoginDay?: number;
  @prop()
  NumDaysLoggedIn?: number;
  @prop()
  NumLogins?: number;
  @prop()
  Ranked?: SeasonalDataItemRanked;

  public static flatten<P extends string>(
    seasonalDataItem: SeasonalDataItem,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof SeasonalDataItem as `${P}.${K}`]: SeasonalDataItem[K];
  } {
    for (const [key, value] of Object.entries(seasonalDataItem) as Entries<SeasonalDataItem>) {
      result[prefix + "." + key] = value;
    }
    return result as any;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
class SeasonalDatas {
  @prop()
  "Season:SeasonOne"?: SeasonalDataItem;
  @prop()
  "Season:SeasonTwo"?: SeasonalDataItem;
  @prop()
  "Season:SeasonThree"?: SeasonalDataItem;
  @prop()
  "Season:SeasonFour"?: SeasonalDataItem;
  @prop()
  "Season:SeasonFive"?: SeasonalDataItem;

  public static flatten<P extends string>(
    seasonalDatas: MapToRecord<SeasonalDatas>,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof SeasonalDatas as `${P}.${K}`]: SeasonalDatas[K];
  } {
    for (const [key, value] of Object.entries(seasonalDatas) as Entries<SeasonalDatas>) {
      if (value != null) {
        SeasonalDataItem.flatten(value, prefix + "." + key, result);
      }
    }
    return result as any;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataMatchMultiqueueConfig {
  @prop({ required: true })
  Context!: string;
  @prop({ required: true })
  GameModeAlias!: string;
  @prop({ required: true })
  QueueType!: string;
  @prop({ required: true })
  TeamStyle!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataMatchConfig {
  @prop({ type: ServerDataMatchMultiqueueConfig, required: true })
  MultiqueueConfigs!: ServerDataMatchMultiqueueConfig[];
}

export class ServerDataExmSegmentMembership {
  exm_experiment_arm_map = {};
  exm_experiment_segments = [];

  @prop({ type: String, required: true })
  exm_global_segments!: string[];
}

export class ServerDataStatTrackerSeason {
  @prop({ required: true })
  HighestDamageDealt!: number;

  @prop({ required: true })
  TotalWins!: number;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_highest_damage_dealt!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_matches!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_ringouts!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_total_damage_dealt!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_wins!: Map<Characters, number>;
}

export class ServerDataStatTrackers {
  @prop({ required: true })
  HighestDamageDealt!: number;

  @prop({ required: true })
  OpenBetaGold!: number;

  @prop({ required: true })
  TotalAssists!: number;

  @prop({ required: true })
  TotalAttacksDodged!: number;

  @prop({ required: true })
  TotalDoubleRingouts!: number;

  @prop({ required: true })
  TotalRingoutLeader!: number;

  @prop({ required: true })
  TotalRingouts!: number;

  @prop({ required: true })
  TotalToastsGiven!: number;

  @prop({ required: true })
  TotalToastsReceived!: number;

  @prop({ required: true })
  TotalWins!: number;

  @prop({ required: true })
  Valentines2023Currency!: number;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_highest_damage_dealt!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_matches!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_ringouts!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_total_damage_dealt!: Map<Characters, number>;

  @prop({ type: Number, required: true, validate: characterKeysValidator })
  character_wins!: Map<Characters, number>;

  @prop()
  season1?: ServerDataStatTrackerSeason;

  @prop()
  season2?: ServerDataStatTrackerSeason;

  @prop()
  season3?: ServerDataStatTrackerSeason;

  @prop()
  season4?: ServerDataStatTrackerSeason;

  @prop()
  season5?: ServerDataStatTrackerSeason;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataTransformCurrencyConversionErrored {}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataTransform {
  currency_conversion_errored = {};
  @prop({ required: true })
  welcome_back!: boolean;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataCheckedGrants {
  @prop({ required: true })
  s2_extension_make_good_boost!: boolean;
}

export class ServerDataFTUE {
  @prop({ required: true })
  current_ftue_step!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataShuffle0 {
  @prop({ type: RatingsStat, required: true, validate: characterKeysValidator })
  "ratings"?: Map<Characters, RatingsStat>;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataShuffle {
  @prop({ required: true })
  "0"?: ServerDataShuffle0;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerData {
  @prop()
  "shuffle"?: ServerDataShuffle;
  // "2v2_ranked":
  @prop({ required: true })
  TotalPrestige!: number;

  @prop({ required: true })
  OpenBeta!: boolean;

  @prop({ type: mongoose.Types.ObjectId, required: true })
  BattlepassID!: string;

  @prop({ required: true })
  CurrentXP!: number;

  @prop({ required: true })
  HasReceivedBattlepassRewardFromOpenBeta!: boolean;

  @prop({ required: true })
  Level!: number;

  @prop({ required: true })
  MatchConfig!: ServerDataMatchConfig;

  @prop({ required: true })
  NumOwnedBaseRosterFighters!: number;

  @prop({ required: true })
  NumOwnedFighters!: number;

  @prop({ required: true })
  SeasonalData!: SeasonalDatas;

  @prop({ required: true })
  Transforms!: ServerDataTransform;

  @prop({ required: true })
  checked_grants!: ServerDataCheckedGrants;

  @prop({ required: true })
  debug_all_unlocked!: number;

  @prop({ required: true })
  exm_segment_membership!: ServerDataExmSegmentMembership;

  @prop({ required: true })
  ftue!: ServerDataFTUE;

  @prop({ required: true, default: 0 })
  loss_streak!: number;

  @prop({ required: true })
  s2_extension_make_good_boost!: number;

  @prop({ required: true })
  stat_trackers!: ServerDataStatTrackers;

  public static flatten<P extends string>(
    serverData: MapToRecord<ServerData>,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof ServerData as `${P}.${K}`]: ServerData[K];
  } {
    for (const [key, value] of Object.entries(serverData) as Entries<ServerData>) {
      if (!["SeasonalData"].includes(key)) {
        result[prefix + "." + key] = value;
      }
    }
    // if (serverData["shuffle.0.ratings"] != null) {
    //   Ratings.flatten(serverData["shuffle.0.ratings"], prefix + ".shuffle.0.ratings", result);
    // }
    if (serverData.SeasonalData != null) {
      SeasonalDatas.flatten(serverData.SeasonalData, prefix + ".SeasonalData", result);
    }
    // dotify(serverData, prefix, result, false);
    return result as any;
  }
}
