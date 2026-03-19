import Elysia from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { calendar_static_data1 } from "./calendar_events.data";
import { CalendarEventsService } from "./calendar_events.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get(
  "/ssc/invoke/get_hiss_calendar_events",
  async () => {
    return {
      body: calendar_static_data1,
      metadata: null,
      return_code: 0,
    };
  },
  {
    detail: {
      description: "Get current in game events. Includes all type of events",
    },
  },
);

router.get(
  "/ssc/invoke/get_calendar_events",
  async () => {
    return {
      body: {
        Events: await CalendarEventsService.getSplashScreenAnnouncementEvents(),
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    detail: {
      description: "Get splashscreen announcement event details",
    },
  },
);

router.get(
  "/file_storage",
  async () => {
    return await CalendarEventsService.getAnnouncementImagesFileStorage();
  },
  {
    detail: { description: "Get announcement image files storage" },
  },
);

router.get(
  "/file_storage/:file",
  async ({ params }) => {
    return await CalendarEventsService.getAnnouncementImageDetail(params.file);
  },
  {
    detail: { description: "Get an announcement image file detail" },
  },
);

MAIN_APP.use(router);
