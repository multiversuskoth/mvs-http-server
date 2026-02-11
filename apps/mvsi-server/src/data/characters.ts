import { ObjectId } from "mongodb"
import { getAllAssets, getAssetsByType } from "../loadAssets";


export function unlockAllPerks(accountId: string) {
  return getAssetsByType("MvsPerkHsda").map((perk) => {
    const characterMap = Object.fromEntries(
      getAssetsByType("CharacterData").map((char) => [
        char.slug,
        true,
      ]),
    );

    return {
      id: new ObjectId().toHexString(),
      count: 1,
      data: {},
      actions: [],
      server_data: {
        characters: characterMap,
      },
      account_id: accountId,
      item_slug: perk.slug,
      currency_data: {
        source_slug: null,
        total_spent: null,
        total_earned: null,
        total_refunded: 0,
        should_expire: null,
        expires_at: null,
        purchase_id: null,
        source_platform: null,
      },
      updated_at: {
        _hydra_unix_date: 1719953609,
      },
      created_at: {
        _hydra_unix_date: 1719953609,
      },
      result_type: "simple",
    };
  });
}
export function unlockAll(accountId: string) {
  const all = [
    ...unlockAllCharacters(accountId),
    ...unlockAllPerks(accountId),
  ];
  return all;
}

export function unlockAllCharacters(accountId: string) {
  return getAllAssets().map((asset) => {
    return {
      id: new ObjectId().toHexString(),
      count: 1,
      data: {},
      actions: [],
      server_data: {},
      item_slug: asset.slug,
      account_id: accountId,
      currency_data: {
        source_slug: null,
        total_spent: null,
        total_earned: null,
        total_refunded: 0,
        should_expire: null,
        expires_at: null,
        purchase_id: null,
        source_platform: null,
      },
      updated_at: {
        _hydra_unix_date: 1719953609,
      },
      created_at: {
        _hydra_unix_date: 1719953609,
      },
      result_type: "simple",
    };
  });
}
