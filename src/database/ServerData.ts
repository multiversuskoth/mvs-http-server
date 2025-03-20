import { modelOptions, mongoose, prop } from "@typegoose/typegoose";
import { Entries } from "type-fest";
import { dateToMVSTime } from "../utils/date";

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
  @prop({ required: true, get: dateToMVSTime })
  lastUpdateTimestamp!: Date;

  public static flatten<P extends string>(
    ratingsStat: RatingsStat,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof RatingsStat as `${P}.${K}`]: RatingsStat[K];
  } {
    for (const [key, value] of Object.entries(ratingsStat) as Entries<RatingsStat>) {
      if (!["lastUpdateTimestamp"].includes(key)) {
        result[prefix + "." + key] = value;
      }
    }
    result[prefix + ".lastUpdateTimestamp"] = dateToMVSTime(ratingsStat.lastUpdateTimestamp);
    return result as any;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
class RatingsCharacters {
  @prop()
  garnet?: RatingsStat;

  public static flatten<P extends string>(
    ratingsCharacters: RatingsCharacters,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof RatingsCharacters as `${P}.${K}`]: RatingsCharacters[K];
  } {
    for (const [key, value] of Object.entries(ratingsCharacters) as Entries<RatingsCharacters>) {
      if (value != null) {
        RatingsStat.flatten(value, prefix + "." + key, result);
      }
    }
    return result as any;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
class Ratings {
  @prop({ required: true })
  characters!: RatingsCharacters;

  public static flatten<P extends string>(
    ratings: Ratings,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof Ratings as `${P}.${K}`]: Ratings[K];
  } {
    for (const [key, value] of Object.entries(ratings) as Entries<Ratings>) {
      if (value != null) {
        RatingsCharacters.flatten(value, prefix + "." + key, result);
      }
    }
    return result as any;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
class SeasonalDataItem {
  @prop({ required: true, get: dateToMVSTime })
  LastLoginDay!: Date;
  @prop({ required: true })
  NumDaysLoggedIn!: number;
  @prop({ required: true })
  NumLogins!: number;

  public static flatten<P extends string>(
    seasonalDataItem: SeasonalDataItem,
    prefix: P,
    result: Record<any, any> = {},
  ): {
    [K in keyof SeasonalDataItem as `${P}.${K}`]: SeasonalDataItem[K];
  } {
    for (const [key, value] of Object.entries(seasonalDataItem) as Entries<SeasonalDataItem>) {
      if (!["LastLoginDay"].includes(key)) {
        result[prefix + "." + key] = value;
      }
    }
    result[prefix + ".LastLoginDay"] = dateToMVSTime(seasonalDataItem.LastLoginDay);
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
    seasonalDatas: SeasonalDatas,
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
  /**
   *
   * Matchmade
   *
   */
  Context!: string;
  /**
   *
   * Versus
   *
   */
  GameModeAlias!: string;
  /**
   *
   * Unranked
   *
   */
  QueueType!: string;
  /**
   *
   * Duos
   *
   */
  TeamStyle!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerDataMatchConfig {
  MultiqueueConfigs!: ServerDataMatchMultiqueueConfig;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerData {
  @prop()
  "shuffle.0"?: Ratings;
  // "2v2_ranked":
  @prop()
  TotalPrestige?: number;

  @prop()
  OpenBeta?: boolean;

  // @prop()
  // Transforms?: new Schema({
  //   welcome_back: Boolean;
  // };{_id:false});

  @prop()
  BattlepassID?: mongoose.Types.ObjectId;

  @prop()
  CurrentXP?: number;

  @prop()
  HasReceivedBattlepassRewardFromOpenBeta?: boolean;

  @prop()
  Level?: number;

  @prop()
  MatchConfig!: ServerDataMatchConfig;

  @prop()
  NumOwnedBaseRosterFighters?: number;
  @prop()
  NumOwnedFighters?: number;
  @prop()
  SeasonalData?: SeasonalDatas;
  // CasualQueue: ;

  public static flatten<P extends string>(
    serverData: ServerData,
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
    if (serverData["shuffle.0"] != null) {
      Ratings.flatten(serverData["shuffle.0"], prefix + ".shuffle.0", result);
    }
    if (serverData.SeasonalData != null) {
      SeasonalDatas.flatten(serverData.SeasonalData, prefix + ".SeasonalData", result);
    }
    // dotify(serverData, prefix, result, false);
    return result as any;
  }
}
