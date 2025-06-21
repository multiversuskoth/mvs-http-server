import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";
import { GleamiumData } from "../data/gleamium";
import { unlockAll, unlockAllCharacters } from "../data/characters";
import { getProfileForMatch } from "../services/profileService";

export async function handleProfiles_id_inventory(req: Request<{}, {}, {}, MVSQueries.Profiles_id_inventory_QUERY>, res: Response) {
  const account = req.token;
  res.send([...unlockAll(account.id), GleamiumData]);
}

export async function handleProfiles_bulk(req: Request<{}, {}, { ids: string[] }, MVSQueries.Profiles_bulk_QUERY>, res: Response) {
  const account = req.token;
  if (req.query.account_fields) {
    const ids = req.body.ids;
    let response = [];
    for (let id of ids) {
      const profile = await getProfileForMatch(id);
      if (profile) {
        response.push(profile);
      }
    }
    res.send(response);
    return;
  }
  console.log("OTHER_PROFILE");
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
