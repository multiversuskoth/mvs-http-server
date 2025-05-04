import jwtConfiguration from "../config/jwtConfiguration";
import serverConfiguration from "../config/serverConfiguration";
import { accountModel } from "../database/Account";
import env from "../env/env";
import { MVSRequests } from "../interfaces/requests_types";
import { MVSResponses } from "../interfaces/responses_types";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import createJwtToken from "../utils/createJWTToken";
import { playerModel } from "../database/Player";

export async function handleSessions_Auth_Token(
  req: Request<{}, MVSResponses.Sessions_auth_token_RESPONSE, MVSRequests.Sessions_auth_token_REQUEST, {}>,
  res: Response,
) {
  // let steamTicket = Buffer.from(req.body.code, "hex");
  // let appSteamTicket = parseAppTicket(steamTicket);

  // if (appSteamTicket == null) {
  //   res.sendStatus(StatusCodes.BAD_REQUEST);
  //   return;
  // }

  const appSteamTicket = { steamID: "123" };

  const foundUser = await playerModel
    .findOne({
      "identity.alternate.steam.id": appSteamTicket.steamID,
    })
    .populate("account");

  if (foundUser == null) {
    return res.sendStatus(401);
  }

  // const now = new Date();

  const jwtToken = createJwtToken(appSteamTicket.steamID);

  const responseJson: MVSResponses.Sessions_auth_token_RESPONSE = {
    access_token: jwtToken,
    account: foundUser.account!,
    // seconds
    expires_in: jwtConfiguration.expiresSeconds,
    mfa_required: false,
    sdk: {
      realtime: serverConfiguration.realtime,
    },
  };

  res.json(responseJson);
}
