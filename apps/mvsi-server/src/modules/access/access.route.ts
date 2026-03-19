import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA } from "../../middleware/middlewares";
import { access_static_data } from "./access.data";
import { handleAccess } from "./access.service";

const router = new Elysia().use(MVSI_HYDRA);

router.post(
  "/access",
  async ({ body, jwt, request, server }) => {
    const ip = server?.requestIP(request)?.address;
    if (!ip) {
      return;
    }
    const result = await handleAccess(ip.replace(/^::ffff:/, ""), body.auth);
    if (!result) {
      return;
    }
    const token = await jwt.sign(result.claims);
    const accessData = access_static_data(
      result.profileIcon,
      token,
      result.claims,
      result.wsEndpoint,
    );

    return accessData;
  },
  {
    body: t.Object({
      auth: t.Object({
        steam: t.String(),
        steamID: t.Optional(t.String()),
      }),
    }),
  },
);

router.delete("/access", () => "");

MAIN_APP.use(router);
