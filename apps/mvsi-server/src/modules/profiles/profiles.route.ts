import Elysia, { t } from "elysia";
import { unlockAll } from "../../data/characters";
import { GleamiumData } from "../../data/gleamium";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { getProfileBulk, searchProfiles } from "./profiles.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.put(
  "/profiles/bulk",
  async ({ body }) => {
    const profiles = await getProfileBulk(body.ids);
    return profiles;
  },
  {
    body: t.Object({
      ids: t.Array(t.String()),
    }),
  },
);

router.get(
  "/profiles/search_queries/get-by-username/run",
  async ({ query }) => {
    const profiles = await searchProfiles(query.username);
    return profiles;
  },
  {
    query: t.Object({
      username: t.String(),
    }),
  },
);

router.put("/profiles/:id/inventory", async ({ claims }) => {
  const inventory = [...unlockAll(claims.id), GleamiumData];
  return inventory;
});

MAIN_APP.use(router);
