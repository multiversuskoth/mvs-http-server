import Router from "express";
import UserSegment from "../enums/user_segment";
import BattlePassScoreTypeClass from "../enums/battle_pass_score_type_class";
import mongoose from "mongoose";
import { Player, playerModel } from "../database/Player";
import { infer, z } from "zod";
import { StatusCodes } from "http-status-codes";
import { Account, accountModel } from "../database/Account";
import { MVSRequests } from "@/interfaces/requests_types";
import { MVSResponses } from "@/interfaces/responses_types";
import { Request, Response } from "express";

const PutAccountsRequest = z.object({
  ids: z.array(z.string()),
});
const PutAccountsQueryParams = z.object({
  fields: z.union([z.array(z.string()), z.string()]).optional(),
  partial_response: z.number().optional(),
});

export async function handleAccounts_wb_network_bulk(
  req: Request<{}, MVSResponses.Accounts_wb_network_bulk_RESPONSE, MVSRequests.Profiles_bulk_REQUEST, {}>,
  res: Response
) {
  res.appendHeader("X-Hydra-Server-Time", (Date.now() / 1000).toString());
  res.appendHeader("Content-Type", "application/x-ag-binary");

  let responseObject: Array<any> = [];
  let requestBody;
  {
    let parseQueryFields = PutAccountsRequest.safeParse(req.body);
    if (!parseQueryFields.success) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    requestBody = parseQueryFields.data;
  }

  let queryFields;
  {
    let parseQueryFields = PutAccountsQueryParams.safeParse(req.query);
    if (!parseQueryFields.success) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    queryFields = parseQueryFields.data;
  }

  let includeFields = new Set([
    "id",
    "updated_at!",
    "created_at",
    "deleted",
    "orphaned",
    "orphaned_reason",
    "public_id",
    "locale",
    "wb_account",
    "points",
    "state",
    "wbplay_data_synced",
    "connections",
  ]);

  let selectSettings: Record<string, number> = {};
  for (let includeField of includeFields) {
    selectSettings[includeField] = 1;
  }
  if (queryFields.fields != null) {
    if (!Array.isArray(queryFields.fields)) {
      queryFields.fields = Array(queryFields.fields);
    }
    for (let queryField of queryFields.fields) {
      selectSettings[queryField] = 1;
    }
  }

  let accountsQuery = accountModel
    .find({}, selectSettings)
    .where("_id")
    .in(requestBody.ids);

  let accounts = await accountsQuery;
  let mapAccountIdToPlayer: Map<string, (typeof accounts)[0]> = new Map();

  accounts.map((doc) => {
    mapAccountIdToPlayer.set(doc._id.toHexString(), doc);
  });

  for (let accountId of requestBody.ids) {
    let account = mapAccountIdToPlayer.get(accountId);
    if (account != undefined) {
      responseObject.push(Account.flatten(account.toJSON() as any as Account));
    } else {
      responseObject.push(null);
    }
  }

  res.json(responseObject);
}
