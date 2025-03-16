import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

import mongoose from "mongoose";
import toJSONVirtualId from "../utils/toJSONVirtualId";
import { Entries } from "type-fest";
import { dotify } from "../utils/dotify";
import { dateToMVSTime } from "../utils/date";

@modelOptions({ schemaOptions: { _id: false } })
export class IdentityAlternateItem {
  @prop()
  id?: string;
  @prop({ required: true })
  username!: string;
  @prop({ default: null })
  avatar?: string;
  @prop({ default: null })
  email?: string;
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
  @prop()
  steam?: IdentityAlternateItem;
}

@modelOptions({ schemaOptions: { _id: false } })
export class Identity {
  @prop({ required: true })
  username!: string;

  @prop({ default: null })
  avatar?: string;

  @prop({ required: true })
  default_username!: boolean;

  // @prop({})
  // personal_data?: null;

  @prop({ required: true })
  alternate!: IdentityAlternate;
}

@modelOptions({ schemaOptions: { _id: false } })
export class WbAccount {
  @prop({ required: true })
  completed!: boolean;
  @prop()
  email_verified?: boolean;
  @prop()
  age_category?: string;
}

export class ConnectionStatusEnv {}

@modelOptions({ schemaOptions: { _id: false } })
export class ConnectionStatus {
  @prop({ required: true })
  environment!: ConnectionStatusEnv;
  @prop({ required: true })
  current_environment!: boolean;
}

@modelOptions({ schemaOptions: { _id: false } })
export class Connection {
  @prop({ required: true })
  id!: string;
  @prop({ required: true, get: dateToMVSTime })
  start_time!: Date;
  @prop({ required: true, get: dateToMVSTime })
  last_used!: Date;
  @prop({ required: true })
  metadata!: string;
  @prop({ required: true })
  realtime_start_time!: number;
  @prop({ required: true })
  realtime_end_time!: number;
  @prop({ required: true })
  status!: ConnectionStatus;
}

export class AccountAuthWbNetwork {
  id!: mongoose.Types.ObjectId;

  @prop({ required: true, get: dateToMVSTime })
  created_at!: Date;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountAuth {
  @prop({ type: AccountAuthWbNetwork, required: true, default: [] })
  wb_network!: AccountAuthWbNetwork[];
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountData {
  @prop({ required: true, get: dateToMVSTime })
  EULAAcceptTimestamp!: Date;
  @prop({ required: true })
  EULAAcceptVersion!: number;
  @prop({ required: true })
  LastLoginPlatform!: string;
  @prop({ required: true })
  LastPlayedCharacterSlug!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountEmailVerification {
  @prop({ required: true })
  state!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountExternalAccount {}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountOptIn {
  @prop({ required: true })
  wbplay_optin!: boolean;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountRestrictionStatus {}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountPrivacyLevelClan {
  @prop({ required: true })
  invitation!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountPrivacyLevelMatch {
  @prop({ required: true })
  invitation!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountPrivacyLevelPresence {
  @prop({ required: true })
  state!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountPrivacyLevelRelationship {
  @prop({ required: true })
  follow!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountPrivacyLevel {
  clan!: AccountPrivacyLevelClan;
  match!: AccountPrivacyLevelMatch;
  presence!: AccountPrivacyLevelPresence;
  relationship!: AccountPrivacyLevelRelationship;
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class AccountServerData {}

@modelOptions({
  schemaOptions: {
    toJSON: { ...toJSONVirtualId, getters: true },
  },
})
export class Account {
  _id!: mongoose.Types.ObjectId;

  id!: string;

  @prop({ required: true, get: dateToMVSTime })
  updated_at!: Date;
  @prop({ required: true, get: dateToMVSTime })
  created_at!: Date;

  @prop({ required: true })
  deleted!: boolean;

  @prop({ required: true })
  orphaned!: boolean;

  @prop({ default: null })
  orphaned_reason?: string;

  @prop({ required: true })
  public_id!: string;

  @prop({ required: true })
  identity!: Identity;

  @prop({ required: true })
  locale!: string;

  @prop({ required: true })
  wb_account!: WbAccount;

  @prop({ default: 0 })
  points!: number;

  @prop({ required: true })
  state!: string;

  @prop({ required: true })
  wbplay_data_synced!: false;

  @prop({ required: true })
  data!: AccountData;

  @prop({ required: true })
  email_verification!: AccountEmailVerification;

  @prop({ required: true })
  external_accounts!: AccountExternalAccount;

  @prop({ required: true })
  opt_ins!: AccountOptIn;

  @prop({ required: true })
  presence!: string;

  @prop({ required: true })
  presence_state!: number;

  @prop({ required: true })
  privacy_levels!: AccountPrivacyLevel;

  @prop({ required: true })
  restriction_status!: AccountRestrictionStatus;

  @prop({ required: true })
  auth!: AccountAuth;

  @prop({ required: true })
  server_data!: AccountServerData;

  server_owner_data = {};
  state_data = {};
  wbplay_identity = null;

  // it might always be null
  // @prop({ required: true })
  // wbplay_identity!: null;

  @prop({ type: Connection, required: true })
  connections!: Connection[];

  public static flatten(account: Account, result: Record<any, any> = {}) {
    for (const [key, value] of Object.entries(account) as Entries<Account>) {
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
