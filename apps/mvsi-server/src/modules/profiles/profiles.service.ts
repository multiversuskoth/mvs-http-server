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
        public_id: profile.public_id,
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
  const playersPresence = await getPlayersPresence(accounts.map((f) => f._id.toHexString()));
  const profiles = accounts.map((profile) => {
    const presenceState = playersPresence.find(
      (p) => p.profileId === profile.profile_id.toHexString(),
    );
    const profileIcon = (I_DEF[profile.profile_icon].data as InventoryDefData).AssetPath;
    const profileData = {
      score: null,
      result: {
        id: profile.profile_id,
        account_id: profile._id,
        updated_at: profile.updatedAt,
        created_at: profile.createdAt,
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
          id: profile._id,
          "identity.username": profile.name,
          "identity.alternate.wb_network": [
            {
              id: profile.public_id,
              username: profile.name,
              avatar: null,
            },
          ],

          presence: presenceState?.status ?? "offline",
          "server_data.ProfileIcon.Slug": profile.profile_icon,
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
