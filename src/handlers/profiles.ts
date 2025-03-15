import { Player, playerModel } from "../database/Player";
import { infer, z } from "zod";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { MVSResponses } from "../interfaces/responses_types";
import { MVSRequests } from "../interfaces/requests_types";

const PutProfilesRequest = z.object({
  ids: z.array(z.string()),
});
const PutProfilesQueryParams = z.object({
  account_fields: z.union([z.array(z.string()), z.string()]).optional(),
  partial_response: z.number().optional(),
});

export async function handleProfiles_bulk(
  req: Request<{}, MVSResponses.Profiles_bulk_RESPONSE, MVSRequests.Profiles_bulk_REQUEST, {}>,
  res: Response
) {
  res.appendHeader("X-Hydra-Server-Time", (Date.now() / 1000).toString());
  res.appendHeader("Content-Type", "application/x-ag-binary");

  let includeAccount = false;

  let responseObject: Array<any> = [];
  let requestBody;
  {
    let parseQueryFields = PutProfilesRequest.safeParse(req.body);
    if (!parseQueryFields.success) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    requestBody = parseQueryFields.data;
  }

  let queryFields;
  {
    let parseQueryFields = PutProfilesQueryParams.safeParse(req.query);
    if (!parseQueryFields.success) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    queryFields = parseQueryFields.data;
  }

  let includeFields = new Set([
    "inventory",
    "points",
    "account_id",
    "matches",
    "user_segments",
    "random_distribution",
    "last_login",
    "created_at",
    "account_id",
    "updated_at",
    "id",
  ]);

  let selectSettings: Record<string, number> = {};
  for (let includeField of includeFields) {
    selectSettings[includeField] = 1;
  }
  if (queryFields.account_fields != null) {
    if (!Array.isArray(queryFields.account_fields)) {
      queryFields.account_fields = Array(queryFields.account_fields);
    }
    for (let queryField of queryFields.account_fields) {
      selectSettings[queryField] = 1;
      if (queryField == "presence") {
        includeAccount = true;
      }
    }
  }

  let playersQuery = playerModel.find({}, selectSettings).where("account_id").in(requestBody.ids);

  if (includeAccount) {
    playersQuery = playersQuery.populate("account");
  }
  let players = await playersQuery;
  let mapAccountIdToPlayer: Map<string, (typeof players)[0]> = new Map();
  players.map((doc) => {
    mapAccountIdToPlayer.set(doc.account_id._id.toHexString(), doc);
  });
  for (let accountId of requestBody.ids) {
    let player = mapAccountIdToPlayer.get(accountId);
    if (player != undefined) {
      responseObject.push(Player.flatten(player.toJSON()));
    } else {
      responseObject.push(null);
    }
  }

  res.json(responseObject);
}
