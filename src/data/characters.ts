import ObjectID from "bson-objectid";

export const CHARACTER_SLUGS = [
  "character_wonder_woman",
  "character_velma",
  "character_tom_and_jerry",
  "character_superman",
  "character_steven",
  "character_shaggy",
  "character_jake",
  "character_harleyquinn",
  "character_garnet",
  "character_finn",
  "character_creature",
  "character_C028",
  "character_C023B",
  "character_C023A",
  "character_C021",
  "character_C020",
  "character_c019",
  "character_C018",
  "character_C017",
  "character_c16",
  "character_taz",
  "character_bugs_bunny",
  "character_batman",
  "character_arya",
  "character_Jason",
  "character_BananaGuard",
  "character_Meeseeks",
  "character_supershaggy",
  "character_c036",
  "character_C030",
  "character_C026",
  "character_c024",
  "character_C025",
  "character_C027",
  "character_C031",
  "character_c038",
  "character_C029",
  "character_C022",
];

const perks = ["perk_snowball_effect", "perk_char_HangryMan"];

export function unlockAllPerks(accountId: string) {
  return perks.map((perk) => {
    const characterMap = Object.fromEntries(CHARACTER_SLUGS.map((slug) => [slug, true]));

    return {
      id: ObjectID().toHexString(),
      count: 1,
      data: {},
      actions: [],
      server_data: {
        characters: characterMap,
      },
      account_id: accountId,
      item_slug: perk,
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
  const all = [...unlockAllCharacters(accountId), ...unlockAllPerks(accountId)];
  return all;
}

export function unlockAllCharacters(accountId: string) {
  return CHARACTER_SLUGS.map((slug) => {
    return {
      id: ObjectID().toHexString(),
      count: 1,
      data: {},
      actions: [],
      server_data: {},
      item_slug: slug,
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
