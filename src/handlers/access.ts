import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { Account, accountModel } from "../database/Account";
import { Configuration, configurationModel } from "../database/Configuration";
import {
  Default__v,
  FlattenMaps,
  HydratedDocument,
  Require_id,
} from "mongoose";
import { MVSRequests } from "@/interfaces/requests_types";
import { MVSResponses } from "@/interfaces/responses_types";
import { Request, Response } from "express";

type AccountDoc = HydratedDocument<Account>;
type ConfigurationDoc = HydratedDocument<Configuration>;

const PostAccessRequest = z.object({
  auth: z.object({
    fail_on_missing: z.boolean(),
    steam: z.string(), // hex string with 286 characters
  }),
  metadata: z.object({
    Platform: z.string(),
  }),
  options: z.array(z.string()),
});

export async function handleAccess(
  req: Request<
    {},
    MVSResponses.Access_RESPONSE,
    MVSRequests.Access_REQUEST,
    {}
  >,
  res: Response
) {
  let requestBody;
  {
    let parseQueryFields = PostAccessRequest.safeParse(req.body);
    if (!parseQueryFields.success) {
      console.log(parseQueryFields.error)
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    requestBody = parseQueryFields.data;
  }

  let query = [
    accountModel.findOne().exec(),
    configurationModel.findById("configuration").exec(),
  ];
  let [account, configuration] = await Promise.all(query);
  if (configuration == undefined) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return;
  }

  let result: ReturnType<ConfigurationDoc["toJSON"]> & {
    account: ReturnType<AccountDoc["toJSON"]> | null;
  } = { ...configuration?.toJSON(), account: account?.toJSON() };

  res.json(result);
}