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
import { MapToRecord } from "../utils/mapToRecord";
import Characters from "../enums/characters";
import characterKeysValidator from "../utils/characterKeysValidator";

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class PlayerAggregateItem {
  @prop({ required: true })
  type_class!: string;

  @prop({ required: true })
  value!: number;
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class PlayerAggregates {
  @prop({ required: true })
  "fighter-road-xp"!: PlayerAggregateItem;
  @prop({ required: true })
  "s1-battlepass-score"!: PlayerAggregateItem;
  @prop({ required: true })
  "s3-battlepass-score"!: PlayerAggregateItem;
  @prop({ required: true })
  "s4-battlepass-score"!: PlayerAggregateItem;
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class PlayerDataPerkPreferenceItemPerkPage {
  PageName!: string;
  PerkSlugs!: string[];
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class PlayerDataPerkPreferenceItem {
  LastSelectedPage!: number;
  PerkPages!: PlayerDataPerkPreferenceItemPerkPage[];
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class PlayerDataPerkPreferences {
  @prop({ type: PlayerDataPerkPreferenceItem, required: true, validate: characterKeysValidator })
  Characters!: Map<Characters, PlayerDataPerkPreferenceItem>;
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class PlayerData {
  @prop({ required: true })
  HasCompletedFTUE!: boolean;
  @prop({ required: true })
  HasCompletedFirstMatch!: boolean;
  @prop({ required: true })
  IsChildAccount!: boolean;
  @prop({ required: true })
  MostRecentlyViewedCurrentRiftSeason!: string;

  @prop({ required: true })
  PerkPreferences!: PlayerDataPerkPreferences;
}

@modelOptions({
  schemaOptions: {
    toJSON: { ...toJSONVirtualId, getters: true },
  },
})
export class Player {
  _id!: mongoose.Types.ObjectId;
  // _id!: string;

  id!: string;

  files = [];

  @prop({
    ref: () => Account,
    foreignField: "_id",
    localField: "account_id",
    justOne: true,
  })
  account?: Account;

  @prop({ type: Date, required: true, get: dateToMVSTime })
  updated_at!: number;
  @prop({ required: true, ref: () => Account })
  account_id!: string;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  created_at!: number;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  last_login!: number;

  points = null;

  @prop({ required: true })
  random_distribution!: number;

  @prop({ required: true })
  inventory!: Inventory;

  @prop({ required: true })
  server_data!: ServerData;

  @prop({
    type: String,
    enum: UserSegment,
  })
  user_segments!: UserSegment[];

  calculations = {};

  cross_match_results = {};

  server_owner_data = {};

  notifications = [];

  @prop({ required: true })
  data!: PlayerData;

  @prop({ required: true })
  aggregates!: PlayerAggregates;

  @prop({ required: true })
  matches!: Matches;

  public static flatten(player: MapToRecord<Player>, result: Record<any, any> = {}): Record<any, any> {
    for (const [key, value] of Object.entries(player) as Entries<Player>) {
      if (!["inventory", "server_data", "matches"].includes(key)) {
        result[key] = value;
      }
    }

    Inventory.flatten(player.inventory, "inventory", result);
    Matches.flatten(player.matches, "matches", result);
    if (player.server_data != null) {
      ServerData.flatten(player.server_data, "server_data", result);
    }
    if (player.account != null) {
      result.account = {};
      Account.flatten(player.account, result.account);
    }
    return result;
  }
}

export const playerModel = getModelForClass(Player);
