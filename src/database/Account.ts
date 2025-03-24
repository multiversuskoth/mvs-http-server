import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

import mongoose from "mongoose";
import toJSONVirtualId from "../utils/toJSONVirtualId";
import { Entries } from "type-fest";
import { dotify } from "../utils/dotify";
import { dateToMVSTime } from "../utils/date";

@modelOptions({ schemaOptions: { _id: false } })
export class IdentityAlternateItem {
  @prop({ default: undefined, type: String })
  id?: string;
  @prop({ required: true })
  username!: string;
  @prop({ default: null, type: String })
  avatar: string | null = null;
  @prop({ default: null, type: String })
  email: string | null = null;
}

@modelOptions({ schemaOptions: { _id: false } })
export class IdentityAlternate {
  @prop({ type: IdentityAlternateItem, default: null })
  wb_network: IdentityAlternateItem | null = null;
  @prop({ type: IdentityAlternateItem, default: null })
  twitch: IdentityAlternateItem | null = null;

  @prop({ type: IdentityAlternateItem, default: null })
  xb1: IdentityAlternateItem | null = null;
  @prop({ type: IdentityAlternateItem, default: null })
  ps4: IdentityAlternateItem | null = null;
  @prop({ type: IdentityAlternateItem, default: null })
  steam: IdentityAlternateItem | null = null;
}

@modelOptions({ schemaOptions: { _id: false } })
export class IdentityUsername {
  @prop({ required: true })
  auth!: string;

  @prop({ required: true })
  username!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class Identity {
  @prop({ required: true })
  username!: string;

  @prop({ default: null, type: String })
  avatar: string | null = null;

  @prop({ required: true })
  default_username!: boolean;

  // @prop({})
  // personal_data?: null;

  @prop({ required: true })
  alternate!: IdentityAlternate;

  @prop({ required: true })
  current_platform!: string;

  @prop({ required: true })
  is_cross_platform!: boolean;

  personal_data = {};

  @prop({ type: String, required: true })
  platforms!: string[];

  @prop({ type: IdentityUsername, required: true })
  usernames!: IdentityUsername[];
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

export class ConnectionStatusEnv {
  @prop({ required: true })
  id!: string;
}

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
  @prop({ type: Date, required: true, get: dateToMVSTime })
  start_time!: number;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  last_used!: number;
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

  @prop({ type: Date, required: true, get: dateToMVSTime })
  created_at!: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountAuth {
  @prop({ type: AccountAuthWbNetwork, required: true, default: [] })
  wb_network!: AccountAuthWbNetwork[];
}

@modelOptions({ schemaOptions: { _id: false } })
export class AccountData {
  @prop({ type: Date, required: true, get: dateToMVSTime })
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

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class AccountServerDataProfileIcon {
  @prop({ required: true })
  AssetPath!: string;
  @prop({ required: true })
  Slug!: string;
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
export class AccountServerDataTransforms {
  @prop({})
  BannerKnightSlugFixed?: boolean;

  @prop({ required: true, type: Date, get: dateToMVSTime })
  CharacterCurrencyRoundUp?: number;

  @prop({})
  FixRankedCharactersInGold?: boolean;

  @prop({})
  GoldStatTracker?: boolean;

  @prop({})
  MmrSeason4?: boolean;

  @prop({})
  OpenBetaFreebies?: boolean;

  @prop({})
  Season2CharactersInMasterCalculated?: boolean;

  @prop({})
  Season3PrestigeFix?: boolean;

  @prop({})
  Season4FighterRoadPromo?: boolean;

  @prop({})
  Season4FixRolloverRp?: boolean;

  @prop({})
  Season4Promo?: boolean;

  @prop({})
  Season4RankedRewardCatchup?: boolean;

  @prop({ required: true, type: Date, get: dateToMVSTime })
  SeasonFourAcademiaMakeGood?: number;

  @prop()
  SeasonFourAcademiaMakeGoodScoreGranted?: number;

  @prop({ required: true, type: Date, get: dateToMVSTime })
  ShaggySkinMakeGoodS4?: number;

  @prop({ required: true, type: Date, get: dateToMVSTime })
  UpgradeWarMakeGood_8_5_2024?: number;
}

@modelOptions({
  schemaOptions: { _id: false },
})
export class AccountServerData {
  @prop({ required: true })
  AntiCheatServerKick!: number;
  @prop({ required: true, type: Date, get: dateToMVSTime })
  LastDailyRefresh!: number;
  @prop({ required: true })
  LastKnownDebugDelta!: number;
  @prop({ required: true })
  LastLoginPlatform!: string;
  @prop({ required: true })
  LastLoginTime!: number;

  LastLogoutTime!: number;
  LastRefreshBattlepassEvent!: string;
  LastRefreshSeason!: string;

  @prop({ required: true, type: Date, get: dateToMVSTime })
  LastWeeklyRefresh!: number;
  OpenBeta!: boolean;

  ProfileIcon!: AccountServerDataProfileIcon;

  RestedXP!: number;
  @prop({ required: true, type: Date, get: dateToMVSTime })
  RetroactiveRiftBattlepassPayoutTime!: number;

  Transforms!: AccountServerDataTransforms;
}

@modelOptions({
  schemaOptions: {
    toJSON: { ...toJSONVirtualId, getters: true },
  },
})
export class Account {
  _id!: mongoose.Types.ObjectId;

  id!: string;

  @prop({ type: Date, required: true, get: dateToMVSTime })
  updated_at!: number;
  @prop({ type: Date, required: true, get: dateToMVSTime })
  created_at!: number;

  @prop({ required: true })
  deleted!: boolean;

  @prop({ required: true })
  orphaned!: boolean;

  @prop({ default: null, type: String })
  orphaned_reason: string | null = null;

  @prop({ required: true })
  public_id!: string;

  @prop({ required: true })
  identity!: Identity;

  @prop({ required: true })
  locale!: string;

  @prop({ required: true })
  wb_account!: WbAccount;

  points = 0;

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
