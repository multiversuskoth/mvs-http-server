

import express, { Request, Response } from "express";
import { handleSsc_invoke_perks_get_all_pages, perks_set_page, set_lock_lobby_loadout, set_perks_absent } from "./ssc";
import { app } from "../server";
export const sscRouter = express.Router();

sscRouter.put("/ssc/invoke/lock_lobby_loadout", (req: Request<{}, {}, {}, {}>, res: Response) => {
  console.log(req.body)
  set_lock_lobby_loadout(req, res);
});


sscRouter.put("/ssc/invoke/perks_absent", (req: Request<{}, {}, {}, {}>, res: Response) => {
  set_perks_absent(req, res);
});

sscRouter.put("/ssc/invoke/perks_set_character_page", (req: Request<{}, {}, {}, {}>, res: Response) => {
  perks_set_page(req, res);
});

sscRouter.get("/ssc/invoke/perks_get_all_pages", async (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  await handleSsc_invoke_perks_get_all_pages(req, res);
});
