import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { MATCH_TYPES } from "../matchmaking/matchmaking.types";
import {
  createCustomLobby,
  createPartyLobby,
  invitePlayerToLobby,
  joinCustomLobby,
  resetCustomLobbySettings,
  setLobbyJoinable,
  setLobbyMode,
  switchTeamForCustomLobby,
  updateEnabledMapsForCustomLobby,
  updateGameModeForCustomLobby,
  updateHandicapsForCustomLobby,
  updateIntSettingForCustomLobby,
  updateTeamStyleForCustomLobby,
} from "./lobby.service";
import { updatePlayerLoadout } from "../playerConfig/playerConfig.service";
import { TeamStyle } from "../gameModes/gameModes.config";
import { CustomLobbyMatchConfig } from "./lobby.types";
import { GAME_MODES_CONFIG } from "../../data/gameModes";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.put("/ssc/invoke/create_party_lobby", async ({ claims }) => {
  const lobby = await createPartyLobby(claims.id);
  return {
    body: {
      lobby,
      Cluster: "ec2-us-east-1-dokken",
    },
    metadata: null,
    return_code: 0,
  };
});

router.put(
  "/ssc/invoke/set_lobby_joinable",
  async ({ body, claims }) => {
    await setLobbyJoinable(body.LobbyId, claims.id, true);
    return { body: {}, metadata: null, return_code: 0 };
  },
  {
    body: t.Object({
      AutoPartyPreference: t.Boolean(),
      CrossplayPreference: t.Number(),
      GameplayPreferences: t.Number(),
      HissCrc: t.Number(),
      LobbyId: t.String(),
      LobbyTemplate: t.String(),
      Platform: t.String(),
      Version: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/set_lobby_not_joinable",
  async ({ body, claims }) => {
    await setLobbyJoinable(body.LobbyId, claims.id, false);
    return { body: {}, metadata: null, return_code: 0 };
  },
  {
    body: t.Object({
      AutoPartyPreference: t.Boolean(),
      CrossplayPreference: t.Number(),
      GameplayPreferences: t.Number(),
      HissCrc: t.Number(),
      LobbyId: t.String(),
      LobbyTemplate: t.String(),
      Platform: t.String(),
      Version: t.String(),
    }),
  },
);

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
  "/ssc/invoke/leave_player_lobby",
  async ({ body, claims }) => {
    const lobby = await createPartyLobby(claims.id);
    return {
      body: { lobby },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      AutoPartyPreference: t.Boolean(),
      CrossplayPreference: t.Number(),
      GameplayPreferences: t.Number(),
      HissCrc: t.Number(),
      LobbyId: t.String(),
      LobbyTemplate: t.String(),
      Platform: t.String(),
      Version: t.String(),
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
  "/ssc/invoke/create_custom_game_lobby",
  async ({ claims }) => {
    const lobby = await createCustomLobby(claims.id);
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
      AllMultiplayParams: t.Record(
        t.String(),
        t.Object({
          MultiplayClusterSlug: t.String(),
          MultiplayProfileId: t.String(),
          MultiplayRegionId: t.String(),
        }),
      ),
      AutoPartyPreference: t.Boolean(),
      CrossplayPreference: t.Number(),
      GameplayPreferences: t.Number(),
      HissCrc: t.Number(),
      LobbyTemplate: t.String(),
      LobbyType: t.Number(),
      Platform: t.String(),
      Version: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/invite_to_player_lobby",
  async ({ claims, body }) => {
    await invitePlayerToLobby(body.LobbyId, claims.id, body.InviteeAccountID, body.IsSpectator);
    return {
      body: {
        MatchID: body.LobbyId,
        IsSpectator: body.IsSpectator,
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      AutoPartyPreference: t.Boolean(),
      CrossplayPreference: t.Number(),
      GameplayPreferences: t.Number(),
      HissCrc: t.Number(),
      InviteeAccountID: t.String(),
      IsSpectator: t.Boolean(),
      LobbyId: t.String(),
      LobbyTemplate: t.String(),
      MatchID: t.String(),
      Platform: t.String(),
      Version: t.String(),
    }),
  },
);

// CUSTOM LOBBIES

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

router.put(
  "/ssc/invoke/join_custom_game_lobby",
  async ({ claims, body }) => {
    const lobby = await joinCustomLobby(body.HostId, claims.id, body.IsSpectator);
    const response = {
      body: {
        lobby,
        Cluster: "ec2-us-east-1-dokken",
        bIsJoiningCrossPlatform: false,
        ConnectionQuality: 0,
      },
      metadata: null,
      return_code: 0,
    };
    console.log("Join custom lobby response:", JSON.stringify(response, null, 2));
    return response;
  },
  {
    body: t.Object({
      AutoPartyPreference: t.Boolean(),
      CrossplayPreference: t.Number(),
      GameplayPreferences: t.Number(),
      HissCrc: t.Number(),
      HostId: t.String(),
      IsSpectator: t.Boolean(),
      LobbyTemplate: t.String(),
      Platform: t.String(),
      Version: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/update_team_style_for_custom_game",
  async ({ claims, body }) => {
    const lobby = await updateTeamStyleForCustomLobby(body.MatchID, claims.id, body.TeamStyle);
    return { body: { lobby }, metadata: null, return_code: 0 };
  },
  {
    body: t.Object({
      MatchID: t.String(),
      TeamStyle: t.Enum(TeamStyle),
    }),
  },
);

router.put(
  "/ssc/invoke/update_int_setting_for_custom_game",
  async ({ claims, body }) => {
    await updateIntSettingForCustomLobby(
      body.MatchID,
      claims.id,
      body.SettingKey as keyof CustomLobbyMatchConfig,
      body.SettingValue,
    );
    return { body, metadata: null, return_code: 0 };
  },
  {
    body: t.Object({
      MatchID: t.String(),
      SettingKey: t.String(),
      SettingValue: t.Any(),
    }),
  },
);

router.put(
  "/ssc/invoke/set_game_mode_for_custom_game",
  async ({ claims, body }) => {
    const lobby = await updateGameModeForCustomLobby(
      body.MatchID,
      claims.id,
      body.GameModeSlug as keyof typeof GAME_MODES_CONFIG,
    );
    const response = {
      body: {
        lobby,
      },
      metadata: null,
      return_code: 0,
    };
    return response;
  },
  {
    body: t.Object({
      MatchID: t.String(),
      GameModeSlug: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/set_enabled_maps_for_custom_game",
  async ({ claims, body }) => {
    const Maps = await updateEnabledMapsForCustomLobby(body.MatchID, claims.id, body.MapSlugs);

    const response = {
      body: {
        MatchID: body.MatchID,
        Maps,
      },
      metadata: null,
      return_code: 0,
    };
    return response;
  },
  {
    body: t.Object({
      MatchID: t.String(),
      MapSlugs: t.Array(t.String()),
    }),
  },
);

router.put(
  "/ssc/invoke/set_player_handicap_for_custom_game",
  async ({ claims, body }) => {
    const Handicaps = await updateHandicapsForCustomLobby(
      body.MatchID,
      claims.id,
      body.PlayerHandicap,
      body.PlayerId,
    );
    return {
      body: {
        MatchID: body.MatchID,
        Handicaps,
      },
      metadata: null,
      return_code: 0,
    };
  },
  {
    body: t.Object({
      MatchID: t.String(),
      PlayerHandicap: t.Number(),
      PlayerId: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/switch_custom_game_lobby_team",
  async ({ claims, body }) => {
    const Player = await switchTeamForCustomLobby(body.MatchID, claims.id, body.TeamIndex);
    const response = {
      body: {
        MatchID: body.MatchID,
        Player,
        TeamIndex: body.TeamIndex,
      },
      metadata: null,
      return_code: 0,
    };
    return response;
  },
  {
    body: t.Object({
      MatchID: t.String(),
      TeamIndex: t.Number(),
    }),
  },
);

router.put(
  "/ssc/invoke/add_custom_game_bot",
  async ({ claims, body }) => {
    const Player = await switchTeamForCustomLobby(body.MatchID, claims.id, body.TeamIndex);
    const response = {
      body: {
        MatchID: body.MatchID,
        Player,
        TeamIndex: body.TeamIndex,
      },
      metadata: null,
      return_code: 0,
    };
    return response;
  },
  {
    body: t.Object({
      BotAccountID: t.String(),
      BotSettingSlug: t.String(),
      CharacterAssetPath: t.String(),
      CharacterSlug: t.String(),
      MatchID: t.String(),
      SkinAssetPath: t.String(),
      SkinSlug: t.String(),
      TeamIndex: t.Number(),
    }),
  },
);

router.put(
  "/ssc/invoke/reset_custom_lobby_to_defaults",
  async ({ claims, body }) => {
    const lobby = await resetCustomLobbySettings(body.MatchID, claims.id);
    if (!lobby) {
      return {
        body: { error: "Lobby not found or user is not the leader" },
        metadata: null,
        return_code: 1,
      };
    }
    const response = {
      body: {
        MatchID: body.MatchID,
        GameModeSlug: lobby.GameModeSlug,
        MatchConfig: lobby.match_config,
        Maps: lobby.Maps,
      },
      metadata: null,
      return_code: 0,
    };
    return response;
  },
  {
    body: t.Object({
      MatchID: t.String(),
      TeamStyle: t.Enum(TeamStyle),
    }),
  },
);

MAIN_APP.use(router);
