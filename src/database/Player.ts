import mongoose from "mongoose";
import { Inventory } from "./Inventory";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { ServerData } from "./ServerData";
import { Entries } from "type-fest";
import { Matches } from "./Matches";
import UserSegment from "../enums/user_segment";
import { Account } from "./Account";
import toJSONVirtualId from "../utils/toJSONVirtualId";
import { dateToMVSTime } from "../utils/date";

@modelOptions({
  schemaOptions: {
    toJSON: { ...toJSONVirtualId, getters: true },
  },
})
export class Player {
  _id!: mongoose.Types.ObjectId;

  id!: string;

  @prop({
    ref: () => Account,
    foreignField: "_id",
    localField: "account_id",
    justOne: true,
  })
  account?: Account | (mongoose.Document & Account);

  @prop({ required: true, get: dateToMVSTime })
  updated_at!: Date;
  @prop({ required: true, ref: () => Account })
  account_id!: mongoose.Types.ObjectId;
  @prop({ required: true, get: dateToMVSTime })
  created_at!: Date;
  @prop({ required: true, get: dateToMVSTime })
  last_login!: Date;
  @prop({ default: null })
  points?: number;

  @prop({ required: true })
  random_distribution!: number;

  @prop({ required: true })
  inventory!: Inventory;

  @prop({ required: true, select: false })
  server_data!: ServerData;

  @prop({
    type: String,
    enum: UserSegment,
  })
  user_segments?: UserSegment[];
  // data: Data,
  // aggregates: Aggregates,
  @prop({ required: true })
  matches!: Matches;

  public static flatten(player: Player, result: Record<any, any> = {}): Record<any, any> {
    for (const [key, value] of Object.entries(player) as Entries<Player>) {
      if (!["inventory", "server_data", "matches"].includes(key)) {
        result[key] = value;
      }
    }
    Inventory.flatten(player.inventory, "inventory", result);
    Matches.flatten(player.matches, "matches", result);
    ServerData.flatten(player.server_data, "server_data", result);
    if (player.account != null) {
      result.account = {};
      Account.flatten(player.account, result.account);
    }
    return result;
  }
}

export const playerModel = getModelForClass(Player);
