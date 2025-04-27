import { NextFunction, Request, Response } from "express";
import { AccountToken } from "../handlers";
import * as jwt from "jsonwebtoken";
import env from "../env/env";

declare global {
  namespace Express {
    interface Request {
      token: AccountToken;
    }
  }
}

const HYDRA_ACCESS_TOKEN = "x-hydra-access-token";
export const SECRET = "SHHHH!!";

export function decodeToken(token: string) {
  return jwt.verify(token, SECRET) as AccountToken;
}

export const hydraTokenMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  if (req.url === "/access") {
    return next();
  }

  if (req.hostname === env.WB_DOMAIN) {
    return next();
  }
  const token = req.headers[HYDRA_ACCESS_TOKEN];

  if (typeof token === "string") {
    req.token = decodeToken(token);
    return next();
  } else {
    // If the token is missing or invalid (null or undefined), send an unauthorized response
    res.status(401);
  }
};
