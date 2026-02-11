import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { create_mission_static_data } from "./missions.data";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.post("/ssc/invoke/get_or_create_mission_object", async ({ claims }) => {
  const data = create_mission_static_data(claims.id);
  return {
    body: data,
    metadata: null,
    return_code: 0,
  };
});

router.post("/ssc/invoke/claim_mission_rewards", async () => {
  return {
    body: {
      MissionControllerContainers: {},
      ClaimLocks: {},
    },
    metadata: null,
    return_code: 0,
  };
});

MAIN_APP.use(router);