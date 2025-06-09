import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";
import { GleamiumData } from "../data/gleamium";
import { unlockAll, unlockAllCharacters } from "../data/characters";

const profiles: any[] = [
  {
    updated_at: {
      _hydra_unix_date: 1742265214,
    },
    account_id: "63b3b7c7fc8aef5b5da03139",
    created_at: {
      _hydra_unix_date: 1672722376,
    },
    last_login: {
      _hydra_unix_date: 1742265213,
    },
    points: null,
    "data.IsChildAccount": false,
    "data.2v2_prompt_shown": 1,
    "data.HasCompletedFirstMatch": true,
    "data.HasCompletedFTUE": true,
    "data.MostRecentlyViewedCurrentRiftSeason": "Season:SeasonFive",
    "server_data.Level": 1,
    "server_data.CurrentXP": 0,
    "server_data.loss_streak": 0,
    "server_data.MatchConfig.MultiqueueConfigs": [
      {
        AllowDuplicateCharacters: true,
        AllowHazards: true,
        Context: "Matchmade",
        DisabledCharacters: [],
        GameModeAlias: "Versus",
        MatchDuration: 420,
        ModeDifficulty: "Unselected",
        MutatorData: [],
        NumRingoutsForWin: 4,
        QueueType: "Unranked",
        TeamStyle: "Duos",
      },
    ],
    user_segments: [
      "test-user-segment",
      "percentmaintenance",
      "issteam",
      "owns_batman",
      "owns_bugs_bunny",
      "owns_tom_and_jerry",
      "owns_jake_the_dog",
      "returning_user_open_beta",
      "owns_wonder_woman",
      "does_not_own_skin_lady_banana_guard",
      "bp-score-over-100",
      "does_not_own_the_joker",
      "does_not_own_agent_smith_or_decompiled",
      "owns_banana_guard",
      "beetlejuice_early_access_carousel_condititions",
      "powerpuff_dynamo_defense_pack_carousel_conditions",
      "lost_samurai_carousel_conditions",
      "nubia_early_access_usd_pinned_carousel_conditions",
      "nubia_early_access_carousel_condition",
      "not-new-player",
      "raven_early_access_usd_pinned_carousel_conditions",
      "owns-7-fighters-gleamium-bundle-condition",
      "fighter_store_eligible",
      "raven-early-access-carousel-condition",
      "marceline_early_access_carousel_condition",
      "marceline_early-access_usd_pinned_carousel_conditions",
      "bp_s4_5_conditions",
      "bp_s4_conditions",
    ],
    random_distribution: 0.6911729387046968,
    id: "63b3b7c8fc8aef5b5da0313a",
    account: {
      updated_at: {
        _hydra_unix_date: 1742265215,
      },
      created_at: {
        _hydra_unix_date: 1672722375,
      },
      deleted: false,
      orphaned: false,
      orphaned_reason: null,
      public_id: "pceabdc1c5d37434eac092d84d5f28b23",
      "identity.avatar": "https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.516.png",
      "identity.default_username": true,
      "identity.alternate.wb_network": [
        {
          id: "pba6c7498797048a0b25a45538f3f38b9",
          username: "MVSI_TESTER",
          avatar: null,
        },
      ],
      "identity.alternate.steam": [
        {
          id: "76561193810398085",
          username: "MVSI_TESTER",
          avatar: null,
        },
      ],
      "wb_account.completed": true,
      "wb_account.email_verified": false,
      points: 0,
      state: "normal",
      wbplay_data_synced: false,
      wbplay_identity: null,
      locale: "en-US",
      "data.EULAAcceptTimestamp": 1672722445,
      "data.EULAAcceptVersion": 2,
      "data.LastLoginPlatform": "EPlatform::PS5",
      "data.LastPlayedCharacterSlug": "character_shaggy",
      id: "63b3b7c7fc8aef5b5da03139",
      "identity.username": "weathered-frosty-dew-wood-MAWul",
      connections: [],
      presence_state: 1,
      presence: "online",
      "inventory.character_wonder_woman.count": 1,
    },
  },
];

export async function handleProfiles_id_inventory(req: Request<{}, {}, {}, MVSQueries.Profiles_id_inventory_QUERY>, res: Response) {
  const account = req.token;
  res.send([...unlockAll(account.id), GleamiumData]);
}

export async function handleProfiles_bulk(req: Request<{}, {}, {}, MVSQueries.Profiles_bulk_QUERY>, res: Response) {
  const account = req.token;
  if (req.query.account_fields) {
    //@ts-ignore
    const ids = req.body.ids as string[];
    let response = [];
    for (let id of ids) {
      let foundProfile = profiles[0];
      if (foundProfile) {
        foundProfile.account_id = id;
        foundProfile.account.id = id;
        console.log("FOUND PROFILE:");
        response.push(foundProfile);
      }
    }
    res.send(response);
    return;
  }
  res.send([
    {
      updated_at: {
        _hydra_unix_date: 1738953155,
      },
      account_id: "62dadd1a57a63708ed1caccb",
      created_at: {
        _hydra_unix_date: 1658510618,
      },
      last_login: {
        _hydra_unix_date: 1738799392,
      },
      points: null,
      "server_data.SeasonalData.Season:SeasonTwo.Ranked.bEndOfSeasonRewardsGranted": true,
      user_segments: [
        "test-user-segment",
        "percentmaintenance",
        "issteam",
        "owns_batman",
        "owns_bugs_bunny",
        "owns_arya_stark",
        "owns_velma",
        "owns_superman",
        "owns_garnet",
        "owns_finn_the_human",
        "owns_tom_and_jerry",
        "owns_jake_the_dog",
        "owns_steven_universe",
        "owns_taz",
        "owns_harley_quinn",
        "owns_lebron_james",
        "owns_the_iron_giant",
        "returning_user_open_beta",
        "owns_marvin_the_martian",
        "owns_morty",
        "owns_black_adam",
        "owns_gizmo",
        "owns_stripe",
        "owns_reindog",
        "owns_rick",
        "owns_wonder_woman",
        "owns_the_joker",
        "owns_jason",
        "Battlepass_level_greater_or_equal_to_60",
        "bp-score-over-100",
        "owns_battlepass_s1",
        "owns_battlepass_s2",
        "owns_agent_smith",
        "owns_beetlejuice",
        "owns_banana_guard",
        "owns_battlepass_s3",
        "s3-battlepass-tier-greater-or-equal-to-60",
        "experimentation-mvs_hydra_segment_test_true",
        "experimentation-mvs_fighter_affinity_pvp_bugs_alltime",
        "experimentation-mvs_purchaser_status_purchaser",
        "experimentation-mvs_fighter_affinity_pvp_taz_today",
        "lost_samurai_carousel_conditions",
        "s3-battlepass-tier-greater-or-equal-to-70",
        "owns_nubia",
        "nubia_early_access_gleamium_pinned_carousel_conditions",
        "not-new-player",
        "s4-battlepass-tier-greater-or-equal-to-45",
        "owns_raven",
        "raven_early_access_gleamium_pinned_carousel_conditions",
        "fighter_store_eligible",
        "fighter_currency_premium",
        "owns_marceline",
        "marceline_early_access_gleamium_pinned_carousel_conditions",
        "experimentation-mvs_store_organization_experiment-control",
        "bp_s4_5_conditions",
        "bp_s4_conditions",
      ],
      random_distribution: 0.09829278289973609,
      id: account.id,
    },
  ]);
}
