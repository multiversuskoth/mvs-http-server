import { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";
import { MVSResponses } from "../interfaces/responses_types";
import { MVSRequests } from "../interfaces/requests_types";
import { Account, accountModel } from "../database/Account";

export async function handleAccounts_wb_network_bulk(
  req: Request<{}, MVSResponses.Accounts_wb_network_bulk_RESPONSE, MVSRequests.Profiles_bulk_REQUEST, MVSQueries.Accounts_wb_network_bulk_QUERY>,
  res: Response,
) {
  const responseObject: Array<any> = [];
  const requestBody = req.body;

  const queryFields = req.query;

  const includeFields = new Set([
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

  const selectSettings: Record<string, number> = {};
  for (const includeField of includeFields) {
    selectSettings[includeField] = 1;
  }
  if (queryFields.fields != null) {
    if (!Array.isArray(queryFields.fields)) {
      queryFields.fields = Array(queryFields.fields);
    }
    for (const queryField of queryFields.fields) {
      selectSettings[queryField] = 1;
    }
  }

  const accountsQuery = accountModel.find({}, selectSettings).where("_id").in(requestBody.ids);

  const accounts = await accountsQuery;
  const mapAccountIdToPlayer: Map<string, (typeof accounts)[0]> = new Map();

  accounts.map((doc) => {
    mapAccountIdToPlayer.set(doc._id.toHexString(), doc);
  });

  for (const accountId of requestBody.ids) {
    const account = mapAccountIdToPlayer.get(accountId);
    if (account != undefined) {
      responseObject.push(Account.flatten(account.toJSON() as any as Account));
    } else {
      responseObject.push(null);
    }
  }

  res.json(responseObject);
}
