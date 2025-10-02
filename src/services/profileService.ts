import { logger } from "../config/logger";
import { INVENTORY_DEFINITIONS, InventoryDefData } from "../data/inventoryDefs";
import { PlayerTesterModel } from "../database/PlayerTester";

interface ProfileMatch {
  account_id: string;
  random_distribution: number;
  id: string;
  account: ProfileAccounntMatch;
}

interface ProfileAccounntMatch {
  deleted: boolean;
  orphaned: boolean;
  orphaned_reason: string | null;
  public_id: string;
  "identity.default_username": boolean;
  state: string;
  wbplay_data_synced: boolean;
  wbplay_identity: null;
  locale: string;
  "data.LastLoginPlatform": "EPlatform::PC";
  id: string;
  "identity.username": string;
  presence_state: number;
  presence: string;
  "server_data.ProfileIcon.Slug": string;
  "server_data.ProfileIcon.AssetPath": string;
}

export async function getProfileForMatch(accountId: string): Promise<ProfileMatch | undefined> {
  const profile = await PlayerTesterModel.findById(accountId);
  if (profile) {
    return {
      account_id: accountId,
      random_distribution: 0.6911729387046968,
      id: profile.profile_id.toHexString(),
      account: {
        deleted: false,
        orphaned: false,
        orphaned_reason: null,
        public_id: profile.public_id,
        "identity.default_username": true,
        state: "normal",
        wbplay_data_synced: false,
        wbplay_identity: null,
        locale: "en-US",
        "data.LastLoginPlatform": "EPlatform::PC",
        id: accountId,
        "identity.username": profile.name,
        presence_state: 1,
        presence: "online",
        "server_data.ProfileIcon.Slug": profile.profile_icon,
        "server_data.ProfileIcon.AssetPath": (INVENTORY_DEFINITIONS[profile.profile_icon].data as InventoryDefData).AssetPath,
      },
    };
  } else {
    logger.error(`Could not find profile ${accountId}. This should nerver happen!`);
  }
}
