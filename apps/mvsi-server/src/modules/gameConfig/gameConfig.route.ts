import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import Elysia, { t } from "elysia";
import { getCurrentCRC, MATCHMAKING_CRC } from "../../data/config";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { MVSTime } from "../../utils/date";
import { GameConfigService } from "./gameConfig.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.put(
  "/ssc/invoke/hiss_amalgamation",
  async ({ body }) => {
    if (body.Crc !== getCurrentCRC()) {
      const gameConfig = await GameConfigService.generateGameConfig_hiss();
      return {
        body: gameConfig,
        metadata: null,
        return_code: 200,
      };
    }
    return {
      body: { Crc: getCurrentCRC(), MatchmakingCrc: MATCHMAKING_CRC },
      metadata: null,
      return_code: 304,
    };
  },
  {
    body: t.Object({
      Crc: t.Number(),
    }),
    detail: {
      summary:
        "Get current game config. Returns HTTP 304, if client CRC matches server CRC. Game configs include which assets and features are enabled/disabled",
    },
  },
);

router.get(
  "/ssc/invoke/hiss_amalgamation",
  async () => {
    const gameConfig = await GameConfigService.generateGameConfig_hiss();
    return {
      body: gameConfig,
      metadata: null,
      return_code: 200,
    };
  },
  {
    detail: {
      summary: "Get current game config. Does not check against server CRC",
    },
  },
);

router.get("/ssc/invoke/get_country_code", () => {
  return { body: { region: "US" }, metadata: null, return_code: 0 };
});

router.put("/ssc/invoke/game_launch_event", () => {
  return "";
});

router.post("/ssc/invoke/attempt_daily_refresh", () => {
  return {
    body: {
      ServerTimeUtc: { _hydra_unix_date: MVSTime(new Date()) },
      CurrentSeason: "Season:SeasonFive",
      NextDailyRefreshTime: { _hydra_unix_date: MVSTime(new Date()) + 86400 },
      NextWeeklyRefreshTime: { _hydra_unix_date: MVSTime(new Date()) + 604800 },
      FreeCharacterRotation: [],
      ReturnData: {},
      PlayerMissionObject: {
        MissionControllerContainers: {},
        ClaimLocks: {},
      },
    },
    metadata: null,
    return_code: 0,
  };
});

router.post("/syncAsset", async ({ body, headers, status }) => {
  logger.info("Trying syncAsset");
  try {
    if (headers.authorization !== `Bearer ${env.DATA_ASSET_TOKEN}`) {
      status(403);
      return;
    }
    await GameConfigService.syncAsset(body as any);
    status(200);
  } catch (e) {
    status(404);
    //@ts-expect-error
    return e.codeName;
  }
  return;
});

MAIN_APP.use(router);
