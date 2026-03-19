import { PlayerModel } from "@mvsi/database/models/Player";
import { ObjectId } from "mongodb";
import { INVENTORY_DEFINITIONS as I_DEF, type InventoryDefData } from "../../data/inventoryDefs";
import { getPlayersPresence } from "../playerPresence/playerPresence.service";

export async function getProfileBulk(userIds: string[]) {
  const profiles = await PlayerModel.find({ _id: { $in: userIds.map((id) => new ObjectId(id)) } });

  return profiles.map((profile) => {
    const profileIcon = (I_DEF[profile.profile_icon].data as InventoryDefData).AssetPath;
    const profileData = {
      id: profile._id.toHexString(),
      account_id: profile._id.toHexString(),
      updated_at: profile.updatedAt,
      created_at: profile.createdAt,
      account: {
        deleted: false,
        orphaned: false,
        orphaned_reason: null,
        public_id: profile._id.toHexString(),
        "identity.default_username": true,
        state: "normal",
        wbplay_data_synced: false,
        wbplay_identity: null,
        locale: "en-US",
        "data.LastLoginPlatform": "EPlatform::PC",
        id: profile._id.toHexString(),
        "identity.username": profile.name,

        "server_data.ProfileIcon.Slug": profile.profile_icon,
        "server_data.ProfileIcon.AssetPath": profileIcon,
      },
    };
    return profileData;
  });
}

export async function searchProfiles(query: string) {
  const accounts = await PlayerModel.find(
    { name: { $regex: query, $options: "i" } },
    { limit: 25 },
  );
  const playersPresence = await getPlayersPresence(
    accounts.map((account) => account._id.toHexString()),
  );
  const profiles = accounts.map((account) => {
    const presenceState = playersPresence.find((p) => p.id === account._id.toHexString());
    const profileIcon = (I_DEF[account.profile_icon].data as InventoryDefData).AssetPath;
    const accountId = account._id.toHexString();
    const profileData = {
      score: null,
      result: {
        id: accountId,
        account_id: accountId,
        updated_at: account.updatedAt,
        created_at: account.createdAt,
        account: {
          deleted: false,
          orphaned: false,
          orphaned_reason: null,
          public_id: account._id.toHexString(),
          "identity.default_username": true,
          state: "normal",
          wbplay_data_synced: false,
          wbplay_identity: null,
          locale: "en-US",
          "data.LastLoginPlatform": "EPlatform::PC",
          id: account._id,
          "identity.username": account.name,
          "identity.alternate.wb_network": [
            {
              id: account._id.toHexString(),
              username: account.name,
              avatar: null,
            },
          ],

          presence: presenceState ? "online" : "offline",
          "server_data.ProfileIcon.Slug": account.profile_icon,
          "server_data.ProfileIcon.AssetPath": profileIcon,
        },
      },
    };
    return profileData;
  });
  const results = {
    cursor: null,
    start: 0,
    count: profiles.length,
    total: profiles.length,
    results: profiles,
  };
  return results;
}
