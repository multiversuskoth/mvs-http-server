import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Base } from "@typegoose/typegoose/lib/defaultClasses";
import mongoose from "mongoose";
import toJSONVirtualId from "../utils/toJSONVirtualId";
import { Entries } from "type-fest";
import { dotify } from "../utils/dotify";
import { Configuration } from "./Configuration";

@modelOptions({ schemaOptions: { _id: false } })
export class Identity {
  @prop({ required: true })
  username!: string;

  @prop({ required: true })
  avatar!: string;

  @prop({ required: true })
  default_username!: boolean;
}

@modelOptions({ schemaOptions: { _id: false } })
export class WbAccount {
  @prop({ required: true })
  completed!: boolean;
  @prop()
  email_verified?: boolean;
}

@modelOptions({ schemaOptions: { _id: false } })
export class IdentityAlternateItem {
  @prop()
  id?: string;
  @prop({ required: true })
  username!: string;
  @prop()
  avatar?: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class IdentityAlternate {
  @prop()
  wb_network?: IdentityAlternateItem;
  @prop()
  twitch?: IdentityAlternateItem;
  @prop()
  xb1?: IdentityAlternateItem;
  @prop()
  ps4?: IdentityAlternateItem;
}

export class Account implements Base {
  _id!: mongoose.Types.ObjectId;

  id!: string;

  @prop({ required: true })
  updated_at!: number;

  @prop({ required: true })
  created_at!: number;

  @prop({ required: true })
  deleted!: boolean;

  @prop({ required: true })
  orphaned!: boolean;

  @prop({ default: null })
  orphaned_reason!: string | null;

  @prop({ required: true })
  public_id!: string;

  @prop({ required: true })
  identity!: Identity;

  @prop({ required: true })
  locale!: string;

  @prop({ required: true })
  wb_account!: WbAccount;

  @prop({ default: null })
  points!: number | null;

  @prop({ required: true })
  state!: string;

  @prop({ required: true })
  wbplay_data_synced!: false;

  // it might always be null
  // @prop({ required: true })
  // wbplay_identity!: null;

  @prop({ required: true })
  connections!: string[];

  public static flatten(account: Account, result: Record<any, any> = {}) {
    for (let [key, value] of Object.entries(account) as Entries<Account>) {
      if (!["wb_account", "identity"].includes(key)) {
        result[key] = value;
      } else {
        dotify(value, key, result, false);
      }
    }
    return result;
  }
}

export const accountModel = getModelForClass(Account);

accountModel.schema.set("toJSON", toJSONVirtualId);
