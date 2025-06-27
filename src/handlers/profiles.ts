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
      ],
      random_distribution: 0.09829278289973609,
      id: account.id,
    },
  ]);
}
