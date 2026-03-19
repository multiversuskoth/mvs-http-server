import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { leaderboard_static_data1 } from "./leaderboards.data";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get(
  "/ssc/invoke/get_gm_leaderboards",
  async () => {
    return {
      body: leaderboard_static_data1,
      metadata: null,
      return_code: 0,
    };
  },
  {
    detail: {
      description: "Get ranked leaderboards",
    },
  },
);

MAIN_APP.use(router);