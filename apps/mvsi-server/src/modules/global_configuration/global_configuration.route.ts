import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);
const eulaRouter = new Elysia();

router.get(
  "/global_configuration_types/calendarflags/global_configurations",
  async () => {
    return "";
  },
  {
    detail: {
      description: "Unknown",
      hide: true,
    },
  },
);

router.get(
  "/global_configuration_types/wwshopconfiguration/global_configurations",
  async () => {
    return "";
  },
  {
    detail: {
      description: "Unknown",
      hide: true,
    },
  },
);

eulaRouter.get("/global_configuration_types/eula/global_configurations/*", () => "");

MAIN_APP.use(router);
MAIN_APP.use(eulaRouter);
