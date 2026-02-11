import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { createPartyLobby } from "../lobby/lobby.service";
import { MATCH_TYPES } from "../matchmaking/matchmaking.types";
import { rifts_static_data1 } from "./rifts.data";
import { createRiftLobby } from "./rifts.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.put(
  "/ssc/invoke/create_rift_lobby",
  async ({ claims, body }) => {
    const lobby = await createRiftLobby(
      claims.id,
      body.RiftConfigSlug,
      body.ChapterGuid,
      body.ChapterDifficulty,
    );

    return {
      body: {
        lobby,
        Cluster: "ec2-us-east-1-dokken",
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      RiftConfigSlug: t.String(),
      ChapterGuid: t.String(),
      ChapterDifficulty: t.Number(),
    }),
  },
);

router.get(
  "/ssc/invoke/load_rifts",
  async () => {
    return {
      body: rifts_static_data1,
      metadata: null,
      return_code: 0,
    };
  },
  {
    detail: {
      description: "Get rift data",
    },
  },
);

MAIN_APP.use(router);
