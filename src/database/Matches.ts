import { modelOptions, prop } from "@typegoose/typegoose";
import { Entries } from "type-fest";

@modelOptions({ schemaOptions: { _id: false } })
class MatchesStat {
  @prop({ required: true })
  win!: number;
  @prop({ required: true })
  loss!: number;
  @prop({ required: true })
  win_streak!: number;
  @prop({ required: true })
  longest_win_streak!: number;

  public static flatten(
    matchesStat: MatchesStat,
    prefix: string
  ): Record<any, any> {
    let result: Record<any, any> = [];
    for (let [key, value] of Object.entries(matchesStat) as Entries<Matches>) {
      result[prefix + "." + key] = value;
    }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class Matches {
  @prop()
  "2v2-set"?: MatchesStat;
  @prop()
  "2v2_container"?: MatchesStat;
  @prop()
  rift_container_one_player?: MatchesStat;
  @prop()
  "1v1_container_bot"?: MatchesStat;
  @prop()
  "2v2_container_bot"?: MatchesStat;
  @prop()
  rift_container_two_player?: MatchesStat;

  public static flatten(matches: Matches, prefix: string,
    result: Record<any,any> = {}): Record<any, any> {
    for (let [key, value] of Object.entries(matches) as Entries<Matches>) {
      if (value != undefined) {
        result = Object.assign(
          result,
          MatchesStat.flatten(value, prefix + "." + key)
        );
      }
    }
    return result;
  }
}
