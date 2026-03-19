import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { currency_variant_static_data } from "./data/currency-variant.data";
import { fighter_road_static_data } from "./data/fighter-road.data";
import { fighter_variant_static_data } from "./data/fighter-variant.data";
import { personalizedShop_static_main_variants_data } from "./data/mainVariant.data";
import { prestige_variant_static_data } from "./data/prestige-variant.data";
import { rift_variant_static_data } from "./data/rift-variant.data";
import { skin_variant_static_data } from "./data/skin-variant.data";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get("/layout/dokken-layout-type/personalized/main-variant/:id", async () => {
  return personalizedShop_static_main_variants_data;
});

router.get("/layout/dokken-layout-type/personalized/account-cosmetics-variant/:id", async () => {
  return personalizedShop_static_main_variants_data;
});

router.get("/layout/dokken-layout-type/personalized/battlepass-variant/:id", async () => {
  return {
    code: 400,
    msg: "There are no valid Layout models for type slug dokken-layout-type and variant slug battlepass-variant.",
    hydra_error: 1,
    relying_party_error: 0,
    body: {},
  };
});
router.get("/layout/dokken-layout-type/personalized/currency-variant/:id", async () => {
  return currency_variant_static_data;
});

router.get("/layout/dokken-layout-type/personalized/fighter-road-layout/:id", async () => {
  return fighter_road_static_data;
});

router.get("/layout/dokken-layout-type/personalized/fighter-variant/:id", async () => {
  return fighter_variant_static_data;
});

router.get("/layout/dokken-layout-type/personalized/prestige-variant/:id", async () => {
  return prestige_variant_static_data;
});

router.get("/layout/dokken-layout-type/personalized/rift-variant/:id", async () => {
  return rift_variant_static_data;
});

router.get("/layout/dokken-layout-type/personalized/skin-variant/:id", async () => {
  return skin_variant_static_data;
});

MAIN_APP.use(router);
