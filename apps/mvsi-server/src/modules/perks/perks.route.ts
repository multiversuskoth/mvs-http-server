import { logger } from "@mvsi/logger";
import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { PerksService } from "./perks.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get("/ssc/invoke/perks_get_all_pages", async ({ claims }) => {
  try {
    const perks = await PerksService.getPerksForAccount(claims.id);
    return {
      body: {
        perk_pages: perks?.perk_pages || {},
      },
      metadata: null,
      return_code: 0,
    };
  } catch (error) {
    logger.error(`Error getting perks for account ${claims.id}}`, error);
    return {
      body: {
        perk_pages: {},
      },
      metadata: null,
      return_code: 0,
    };
  }
});

router.put(
  "/ssc/invoke/perks_set_character_page",
  async ({ claims, body }) => {
    await PerksService.setPerksPage(claims.id, body);
    return { body: {}, metadata: null, return_code: 0 };
  },
  {
    body: t.Object({
      Character: t.String(),
      Description: t.String(),
      DisplayName: t.String(),
      PageIndex: t.String(),
      Perks: t.Array(t.String()),
    }),
  },
);

MAIN_APP.use(router);
