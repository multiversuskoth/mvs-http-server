import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { account_static_ranked_data } from "./account.data";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get(
  "/ssc/invoke/ranked_data",
  async () => {
    return {
      body: account_static_ranked_data,
      metadata: null,
      return_code: 0,
    };
  },
  {
    detail: {
      description: "Get current account ranked data",
    },
  },
);

MAIN_APP.use(router);
