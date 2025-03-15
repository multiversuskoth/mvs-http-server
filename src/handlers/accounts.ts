import { Account, accountModel } from "../database/Account";
import { MVSRequests } from "../interfaces/requests_types";
import { MVSResponses } from "../interfaces/responses_types";
import { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleAccounts_wb_network_bulk(
  req: Request<{}, MVSResponses.Accounts_wb_network_bulk_RESPONSE, MVSRequests.Profiles_bulk_REQUEST, MVSQueries.Accounts_wb_network_bulk_QUERY>,
  res: Response
) {
  let responseObject: Array<any> = [];
  let requestBody = req.body;

  let queryFields = req.query;

  let includeFields = new Set([
    "id",
    "updated_at",
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

  let accountsQuery = accountModel.find({}, selectSettings).where("_id").in(requestBody.ids);

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
