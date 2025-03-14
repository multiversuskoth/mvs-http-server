import mongoose, { Schema } from "mongoose";
import { Inventory } from "./Inventory";
import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  ReturnModelType,
} from "@typegoose/typegoose";
import { Base } from "@typegoose/typegoose/lib/defaultClasses";
import { ServerData } from "./ServerData";
import { Entries } from "type-fest";
import { Matches } from "./Matches";
import UserSegment from "../enums/user_segment";
import { Account } from "./Account";
import toJSONVirtualId from "../utils/toJSONVirtualId";
import {
  BeAnObject,
  IObjectWithTypegooseFunction,
} from "@typegoose/typegoose/lib/types";

// @modelOptions({ schemaOptions: { minimize: false } })
export class Player implements Base {
  _id!: mongoose.Types.ObjectId;

  id!: string;

  @prop({
    ref: () => Account,
    foreignField: "_id",
    localField: "account_id",
    justOne: true,
  })
  account?: Account | (mongoose.Document & Account);

  @prop({ required: true })
  updated_at!: number;
  @prop({ required: true, ref: () => Account })
  account_id!: mongoose.Types.ObjectId;
  @prop({ required: true })
  created_at!: number;
  @prop({ required: true })
  last_login!: number;
  @prop({ default: null })
  points!: number | null;

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

  public static flatten(
    player: Player,
    result: Record<any, any> = {}
  ): Record<any, any> {
    for (let [key, value] of Object.entries(player) as Entries<Player>) {
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

playerModel.schema.set("toJSON", toJSONVirtualId);
