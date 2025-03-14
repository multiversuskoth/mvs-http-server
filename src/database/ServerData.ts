import { modelOptions, prop } from "@typegoose/typegoose";
import { dot } from "dot-object";
import { Schema } from "mongoose";
import {dotify} from "../utils/dotify";

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
  @prop({ required: true })
  lastUpdateTimestamp!: number;
}

@modelOptions({ schemaOptions: { _id: false } })
class RatingsCharacters {
  @prop()
  garnet?: RatingsStat;
}

@modelOptions({ schemaOptions: { _id: false } })
class Ratings {
  @prop({ required: true })
  characters!: RatingsCharacters;
}

@modelOptions({ schemaOptions: { _id: false } })
class SeasonalDataItem {
  @prop({ required: true })
  LastLoginDay!: number;
  @prop({ required: true })
  NumDaysLoggedIn!: number;
  @prop({ required: true })
  NumLogins!: number;
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
}

@modelOptions({ schemaOptions: { _id: false } })
export class ServerData {
  @prop()
  "shuffle.0"?: Ratings;
  // "2v2_ranked":
  @prop()
  TotalPrestige?: number;
  @prop()
  OpenBeta?: Boolean;
  // @prop()
  // Transforms?: new Schema({
  //   welcome_back: Boolean;
  // };{_id:false});
  @prop()
  NumOwnedBaseRosterFighters?: number;
  @prop()
  NumOwnedFighters?: number;
  @prop()
  SeasonalData?: SeasonalDatas;
  // CasualQueue: ;

  public static flatten<
  P extends string
>(
    serverData: ServerData,
    prefix: P,
    result: Record<any, any> = {}
  ): {
    [K in keyof ServerData as `${P}.${K}`]: ServerData[K]
  } {
    dotify(serverData,prefix, result,false);
    return result as any
  }
}
