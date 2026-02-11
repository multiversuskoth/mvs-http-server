import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import {
  cancelMatchmaking,
  getActiveMatch,
  lockPerks,
  requestMatchmakingByLobby,
  verifyAllPlayersPerkLocked,
} from "./matchmaking.service";
import { MATCH_TYPES } from "./matchmaking.types";

const RequestMatchSchema = t.Object({
  data: t.Object({
    MultiplayParams: t.Object({
      MultiplayClusterSlug: t.String(),
      MultiplayProfileId: t.String(),
      MultiplayRegionId: t.String(),
      MultiplayRegionSearchId: t.Number(),
    }),
    version: t.String(),
  }),
  match: t.String(),
});

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.post(
  "/matches/matchmaking/1v1-retail/request",
  async ({ claims, body }) => {
    return await requestMatchmakingByLobby(
      body.match,
      claims.id,
      MATCH_TYPES.ONE_V_ONE,
      body.data.MultiplayParams,
      "1v1-retail",
    );
  },
  {
    body: RequestMatchSchema,
  },
);

router.post(
  "/matches/matchmaking/2v2-retail/request",
  async ({ claims, body }) => {
    return await requestMatchmakingByLobby(
      body.match,
      claims.id,
      MATCH_TYPES.TWO_V_TWO,
      body.data.MultiplayParams,
      "2v2-retail",
    );
  },
  {
    body: RequestMatchSchema,
  },
);

router.post(
  "/matches/matchmaking/ffa-retail/request",
  async ({ claims, body }) => {
    return await requestMatchmakingByLobby(
      body.match,
      claims.id,
      MATCH_TYPES.FFA,
      body.data.MultiplayParams,
      "ffa-retail",
    );
  },
  {
    body: RequestMatchSchema,
  },
);

router.post(
  "/matches/matchmaking/casual-retail/request",
  async ({ claims, body }) => {
    return await requestMatchmakingByLobby(
      body.match,
      claims.id,
      MATCH_TYPES.CASUAL,
      body.data.MultiplayParams,
      "casual-retail",
    );
  },
  {
    body: RequestMatchSchema,
  },
);

router.post("/matches/matchmaking/request/:matchId/cancel", async ({ claims, params }) => {
  return await cancelMatchmaking(claims.id, params.matchId);
});

router.put("/ssc/invoke/rematch_decline", async () => {
  // TODO : Implement
  return { body: [], metadata: null, return_code: 0 };
});

router.put("/ssc/invoke/toast_player", async () => {
  // TODO : Implement
  return { body: [], metadata: null, return_code: 0 };
});

router.put(
  "/ssc/invoke/perks_lock",
  async ({ body, claims }) => {
    await lockPerks(body.ContainerMatchId, claims.id, body.Perks);
    return { body: {}, metadata: null, return_code: 0 };
  },
  {
    body: t.Object({
      ContainerMatchId: t.String(),
      Perks: t.Array(t.String()),
    }),
  },
);

router.put(
  "/ssc/invoke/perks_absent",
  async ({ body }) => {
    const activeMatch = await getActiveMatch(body.ContainerMatchId);
    if (activeMatch) {
      return await verifyAllPlayersPerkLocked(
        body.ContainerMatchId,
        Object.keys(activeMatch.matchConfig.Players).map(
          (p) => activeMatch.matchConfig.Players[p].AccountId,
        ),
      );
    }

    return {
      body: {
        message: "Early absent report",
      },
      metadata: null,
      return_code: 2,
    };
  },
  {
    body: t.Object({
      ContainerMatchId: t.String(),
    }),
  },
);

MAIN_APP.use(router);
