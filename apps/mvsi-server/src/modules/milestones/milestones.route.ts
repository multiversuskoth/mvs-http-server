import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { milestones_static_data1 } from "./milestones.data";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get(
  "/ssc/invoke/get_milestone_reward_tracks",
  async () => {
    return {
      body: milestones_static_data1,
      metadata: null,
      return_code: 0,
    };
  },
  {
    detail: {
      description: "Get account milestone data",
    },
  },
);

MAIN_APP.use(router);