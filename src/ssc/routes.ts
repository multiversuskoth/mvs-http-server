

import express, { Request, Response } from "express";
import { set_lock_lobby_loadout, set_perks_absent } from "./ssc";
import { app } from "../server";
export const sscRouter = express.Router();

sscRouter.put("/ssc/invoke/lock_lobby_loadout", (req: Request<{}, {}, {}, {}>, res: Response) => {
  console.log(req.body)
  set_lock_lobby_loadout(req, res);
});


sscRouter.put("/ssc/invoke/perks_absent", (req: Request<{}, {}, {}, {}>, res: Response) => {
  set_perks_absent(req, res);
});