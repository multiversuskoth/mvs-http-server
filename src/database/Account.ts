import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

import mongoose, { SchemaTypeOptions } from "mongoose";
import toJSONVirtualId from "../utils/toJSONVirtualId";
import { Entries } from "type-fest";
import { dotify } from "../utils/dotify";
import { MVSTime, ObjectWithDateStrings, ObjectWithUnix } from "../utils/date";

@modelOptions({ schemaOptions: { _id: false } })
export class IdentityAlternateItem {
  @prop()
  id?: string;
  @prop({ required: true })
  username!: string;
  @prop()
  avatar!: string | null;
  @prop()
  email?: string | null;
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

  @prop({ required: true })
  avatar!: string | null;

  @prop({ required: true })
  default_username!: boolean;

  // @prop({})
  // personal_data?: null;

  @prop()
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
  @prop({ required: true })
  start_time!: Date;
  @prop({ required: true })
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

  @prop({ required: true })
  created_at!: Date;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountAuth {
  @prop({ required: true, default: [] })
  wb_network!: AccountAuthWbNetwork[];
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountData {
  @prop({ required: true })
  EULAAcceptTimestamp!: number;
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

@modelOptions({ schemaOptions: { _id: false } })
export class AccountServerData {}

export class Account {
  _id!: mongoose.Types.ObjectId;

  id!: string;

  @prop({ required: true })
  updated_at!: Date;

  @prop({ required: true })
  created_at!: Date;

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

  // it might always be null
  // @prop({ required: true })
  // wbplay_identity!: null;

  @prop({ required: true })
  connections!: Connection[];

  public static addMeaninglessFields<T>(account: T): T & {
    server_owner_data: {};
    state_data: {};
    wbplay_identity: null;
  } {
    return { ...account, server_owner_data: {}, state_data: {}, wbplay_identity: null };
  }

  public static toMVSTime(account: Omit<Account, "_id">): ObjectWithUnix<Omit<Account, "_id">> {
    return {
      ...account,
      created_at: MVSTime(account.created_at),
      updated_at: MVSTime(account.updated_at),
      connections: account.connections.map((connection: Connection) => ({
        ...connection,
        last_used: MVSTime(connection.last_used),
        start_time: MVSTime(connection.start_time),
      })),
      auth: {
        ...account.auth,
        wb_network: account.auth.wb_network.map((wb_network) => ({
          ...wb_network,
          created_at: MVSTime(wb_network.created_at),
        })),
      },
    };
  }

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
