import { env } from "@mvsi/env";
import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { MATCH_TYPES } from "../matchmaking/matchmaking.types";
import { updatePlayerLoadout } from "../playerPresence/playerPresence.service";
import { createPartyLobby, setLobbyMode } from "./lobby.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.put("/ssc/invoke/create_party_lobby", async ({ claims }) => {
  const lobby = await createPartyLobby(claims.id, claims.profile_id);
  return {
    body: {
      lobby,
      Cluster: "ec2-us-east-1-dokken",
    },
    metadata: null,
    return_code: 0,
  };
});

router.put("/ssc/invoke/set_lobby_joinable", async () => {
  return { body: {}, metadata: null, return_code: 0 };
});

router.put("/ssc/invoke/set_lobby_not_joinable", async () => {
  return { body: {}, metadata: null, return_code: 0 };
});

router.put(
  "/ssc/invoke/set_ready_for_lobby",
  async ({ body, claims }) => {
    return {
      body: { MatchID: body.MatchID, PlayerID: claims.id, Ready: true, bAllPlayersReady: true },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      MatchID: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/lock_lobby_loadout",
  async ({ claims, body }) => {
    await updatePlayerLoadout(claims.id, body.Loadout.Character, body.Loadout.Skin);
    return {
      body: {
        AccountId: claims.id,
        Loadout: {
          Character: body.Loadout.Character,
          Skin: body.Loadout.Skin,
        },
        bAreAllLoadoutsLocked: true,
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      Loadout: t.Object({
        Character: t.String(),
        Skin: t.String(),
      }),
    }),
  },
);

router.put(
  "/ssc/invoke/set_mode_for_lobby",
  async ({ claims, body }) => {
    await setLobbyMode(claims.id, body.LobbyId, body.ModeString);
    return { body: {}, metadata: null, return_code: 0 };
  },
  {
    body: t.Object({
      LobbyId: t.String(),
      ModeString: t.Enum(MATCH_TYPES),
    }),
  },
);

MAIN_APP.use(router);
