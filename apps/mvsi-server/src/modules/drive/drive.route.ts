import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.put(
  "/drives/multiversus/sync",
  async () => {
    return { additions: [], deletions: [] };
  },
  {
    detail: {
      description: "Sync images to local system drive to be used in game, like shopping, events, etc",
    },
  },
);

MAIN_APP.use(router);