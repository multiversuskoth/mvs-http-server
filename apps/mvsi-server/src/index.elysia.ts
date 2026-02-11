import { connect } from "@mvsi/database";
import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { initRedisSubscriber, startRedis } from "@mvsi/redis";
import { LoadConfig } from "./data/config";
import { loadAssets } from "./loadAssets";
import { MAIN_APP } from "./middleware/middlewares";

import "./modules/access/access.route.ts";
import "./modules/account/account.route.ts";
import "./modules/batch/batch.route.ts";
import "./modules/calendar_events/calendar_events.route.ts";
import "./modules/commerce/commerce.route.ts";
import "./modules/cosmetics/cosmetics.route.ts";
import "./modules/drive/drive.route.ts";
import "./modules/friends/friends.route.ts";
import "./modules/gameConfig/gameConfig.route.ts";
import "./modules/global_configuration/global_configuration.route.ts";
import "./modules/leaderboards/leaderboards.route.ts";
import "./modules/lobby/lobby.route.ts";
import "./modules/matches/matches.route.ts";
import "./modules/matchmaking/matchmaking.route.ts";
import "./modules/milestones/milestones.route.ts";
import "./modules/missions/missions.route.ts";
import "./modules/perks/perks.route.ts";
import "./modules/personalizedShop/personalizedShop.route.ts";
import "./modules/preferences/preferences.route.ts";
import "./modules/profiles/profiles.route.ts";
import "./modules/rifts/rifts.route.ts";
import "./modules/sessions/sessions.route.ts";

export const HYDRA_ACCESS_TOKEN = "x-hydra-access-token";
export const HYDRA_CONTENT_TYPE = "application/x-ag-binary";

export async function start() {
  await Promise.all([connect(), startRedis()]);
  await initRedisSubscriber();
  await loadAssets();
  await LoadConfig();

  MAIN_APP.listen(env.HTTP_PORT, (ctx) => {
    logger.info(`MVSI Server running on ${ctx.port}`);
  });
}
start();
