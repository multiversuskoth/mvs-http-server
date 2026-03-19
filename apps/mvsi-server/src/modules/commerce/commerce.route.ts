import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { HydraQuerySchema } from "../../types";
import { data1, data2 } from "./commerce.data";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get(
  "/commerce/products",
  async ({ query }) => {
    if (query.partial_response) {
      return data1;
    }

    return data2;
  },
  {
    query: HydraQuerySchema,
  },
);

router.get("/commerce/purchases/me", () => {
  return { purchases: [], total_purchases: 0, current_page: 1, total_pages: 0 };
});

router.get("/commerce/steam/mtx_user_info/me", () => {
  return { currency: "USD", state: "TX", country: "US", status: "Trusted" };
});

MAIN_APP.use(router);