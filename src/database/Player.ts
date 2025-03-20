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
  "fighter-road-xp": PlayerAggregateItem;
  "s1-battlepass-score": PlayerAggregateItem;
  "s3-battlepass-score": PlayerAggregateItem;
  "s4-battlepass-score": PlayerAggregateItem;
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
  @prop({ required: true })
  Characters!: PlayerDataPerkPreferencesCharacters;
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class PlayerDataPerkPreferencesCharacters {
  @prop()
  character_BananaGuard?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C017?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C018?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C020?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C021?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C023A?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C023B?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C025?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C026?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C027?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C028?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C029?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C030?: PlayerDataPerkPreferenceItem;
  @prop()
  character_C031?: PlayerDataPerkPreferenceItem;
  @prop()
  character_Jason?: PlayerDataPerkPreferenceItem;
  @prop()
  character_arya?: PlayerDataPerkPreferenceItem;
  @prop()
  character_batman?: PlayerDataPerkPreferenceItem;
  @prop()
  character_bugs_bunny?: PlayerDataPerkPreferenceItem;
  @prop()
  character_c019?: PlayerDataPerkPreferenceItem;
  @prop()
  character_c024?: PlayerDataPerkPreferenceItem;
  @prop()
  character_c036?: PlayerDataPerkPreferenceItem;
  @prop()
  character_c038?: PlayerDataPerkPreferenceItem;
  @prop()
  character_c16?: PlayerDataPerkPreferenceItem;
  @prop()
  character_creature?: PlayerDataPerkPreferenceItem;
  @prop()
  character_finn?: PlayerDataPerkPreferenceItem;
  @prop()
  character_garnet?: PlayerDataPerkPreferenceItem;
  @prop()
  character_harleyquinn?: PlayerDataPerkPreferenceItem;
  @prop()
  character_jake?: PlayerDataPerkPreferenceItem;
  @prop()
  character_shaggy?: PlayerDataPerkPreferenceItem;
  @prop()
  character_steven?: PlayerDataPerkPreferenceItem;
  @prop()
  character_superman?: PlayerDataPerkPreferenceItem;
  @prop()
  character_taz?: PlayerDataPerkPreferenceItem;
  @prop()
  character_tom_and_jerry?: PlayerDataPerkPreferenceItem;
  @prop()
  character_velma?: PlayerDataPerkPreferenceItem;
  @prop()
  character_wonder_woman?: PlayerDataPerkPreferenceItem;
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

  id!: string;

  @prop({ required: true })
  files!: any[];

  @prop({
    ref: () => Account,
    foreignField: "_id",
    localField: "account_id",
    justOne: true,
  })
  account?: Account | (mongoose.Document & Account);

  @prop({ required: true, get: dateToMVSTime })
  updated_at!: number;
  @prop({ required: true, ref: () => Account })
  account_id!: mongoose.Types.ObjectId;
  @prop({ required: true, get: dateToMVSTime })
  created_at!: number;
  @prop({ required: true, get: dateToMVSTime })
  last_login!: number;
  @prop({ default: null })
  points: number | null = null;

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

  calculations = {};

  cross_match_results = {};

  server_owner_data = {};

  @prop({ required: true })
  notifications: any = {};

  @prop({ required: true })
  data!: PlayerData;

  @prop({ required: true })
  aggregates!: PlayerAggregates;

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
