

import express, { Request, Response } from "express";
import { set_lock_lobby_loadout } from "./ssc";
import { expressApp } from "../server";
export const sscRouter = express.Router();

sscRouter.put("/ssc/invoke/lock_lobby_loadout", (req: Request<{}, {}, {}, {}>, res: Response) => {
  set_lock_lobby_loadout(req, res);
});