import { logger } from "@mvsi/logger";
import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { getPlayerConfig, setPlayerConfig } from "../playerConfig/playerConfig.service";
import {
  equip_taunt,
  getCosmeticsConfigurationForPlayer,
  type Taunts_REQ,
  updateCosmeticsAnnouncerPack,
  updateCosmeticsBanner,
  updateCosmeticsRingoutVfx,
  updateCosmeticsStatTrackerSlot,
  updateProfileIcon,
} from "./cosmetics.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get("/ssc/invoke/get_equipped_cosmetics", async ({ claims }) => {
  try {
    const EquippedCosmetics = await getCosmeticsConfigurationForPlayer(claims.id);
    return {
      body: {
        EquippedCosmetics,
      },
      metadata: null,
      return_code: 0,
    };
  } catch (error) {
    logger.error("Error getting cosmetics", error);
  }
});

router.put("/ssc/invoke/equip_taunt", async ({ claims, body }) => {
  await equip_taunt(claims.id, body as Taunts_REQ);

  return {
    body,
    metadata: null,
    return_code: 0,
  };
});

router.put(
  "/ssc/invoke/set_profile_icon",
  async ({ claims, body }) => {
    const [playerConfig] = await Promise.all([
      getPlayerConfig(claims.id),
      updateProfileIcon(claims.id, body.Slug),
    ]);
    if (playerConfig) {
      playerConfig.ProfileIcon = body.Slug;
      await setPlayerConfig(claims.id, playerConfig);
    }
    return {
      body: {
        EquippedProfileIcon: body.Slug,
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({ Slug: t.String() }),
  },
);
router.put(
  "/ssc/invoke/equip_stat_tracker",
  async ({ claims, body }) => {
    const [playerConfig, cosmetics] = await Promise.all([
      getPlayerConfig(claims.id),
      getCosmeticsConfigurationForPlayer(claims.id),
      updateCosmeticsStatTrackerSlot(claims.id, body.StatTrackerSlotIndex, body.StatTrackerSlug),
    ]);
    if (playerConfig) {
      (playerConfig.StatTrackers =
        cosmetics.StatTrackers.StatTrackerSlots?.map((stat) => [stat, 1]) ?? []),
        await setPlayerConfig(claims.id, playerConfig);
    }
    return {
      body: body,
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      StatTrackerSlotIndex: t.Number(),
      StatTrackerSlug: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/equip_announcer_pack",
  async ({ claims, body }) => {
    await updateCosmeticsAnnouncerPack(claims.id, body.AnnouncerPackSlug);
    return {
      body: {
        EquippedAnnouncerPack: body.AnnouncerPackSlug,
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      AnnouncerPackSlug: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/equip_banner",
  async ({ claims, body }) => {
    const [playerConfig] = await Promise.all([
      getPlayerConfig(claims.id),
      updateCosmeticsBanner(claims.id, body.BannerSlug),
    ]);

    if (playerConfig) {
      playerConfig.Banner = body.BannerSlug;
      await setPlayerConfig(claims.id, playerConfig);
    }

    return {
      body: {
        EquippedBanner: body.BannerSlug,
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      BannerSlug: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/equip_ringout_vfx",
  async ({ claims, body }) => {
    const [playerConfig] = await Promise.all([
      getPlayerConfig(claims.id),
      updateCosmeticsRingoutVfx(claims.id, body.RingoutVfxSlug),
    ]);

    if (playerConfig) {
      playerConfig.RingoutVfx = body.RingoutVfxSlug;
      await setPlayerConfig(claims.id, playerConfig);
    }

    return {
      body: {
        RingoutVfxSlug: body.RingoutVfxSlug,
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      RingoutVfxSlug: t.String(),
    }),
  },
);

MAIN_APP.use(router);
