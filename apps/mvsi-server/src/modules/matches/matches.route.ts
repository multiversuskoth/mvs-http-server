import { env } from "@mvsi/env";
import Elysia, { t } from "elysia";
import { getCurrentCRC } from "../../data/config";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { HydraQueryPaginated } from "../../types";
import { getActiveMatch, notifyActiveMatchEnded } from "../matchmaking/matchmaking.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get(
  "/matches/all/:id",
  async () => {
    return {
      matches: [],
      total_matches: 0,
      current_page: 1,
      total_pages: 1,
    };
  },
  {
    query: HydraQueryPaginated,
    detail: {
      description: "Get all matches for account",
    },
  },
);

router.put("/matches/:lobbyId", async ({ claims, params }) => {
  // This is really not needed but MVS calls this route after creating a lobby
  // Creating a lobby already sets up everything not sure what this is needed for
  return {
    updated_at: new Date(),
    created_at: new Date(),
    account_id: null,
    completion_time: null,
    name: "white-green-wind-breeze-OS5dF",
    state: "open",
    access_level: "public",
    origin: "client",
    rand: 0.6975513760957894,
    winning_team: [],
    win: [],
    loss: [],
    draw: null,
    arbitration: null,
    data: {},
    server_data: {
      Teams: [
        {
          TeamIndex: 0,
          Players: {
            [claims.id]: {
              Account: { id: claims.id },
              JoinedAt: new Date(),
              BotSettingSlug: "",
              LobbyPlayerIndex: 0,
              CrossplayPreference: 1,
            },
          },
          Length: 1,
        },
        { TeamIndex: 1, Players: {}, Length: 0 },
        { TeamIndex: 2, Players: {}, Length: 0 },
        { TeamIndex: 3, Players: {}, Length: 0 },
        { TeamIndex: 4, Players: {}, Length: 0 },
      ],
      LeaderID: claims.id,
      LobbyType: 0,
      ReadyPlayers: {},
      PlayerGameplayPreferences: { [claims.id]: 544 },
      PlayerAutoPartyPreferences: { [claims.id]: true },
      GameVersion: env.GAME_VERSION,
      HissCrc: getCurrentCRC(),
      Platforms: { [claims.id]: "PC" },
      AllMultiplayParams: {
        "1": {
          MultiplayClusterSlug: "ec2-us-east-1-dokken",
          MultiplayProfileId: "1252499",
          MultiplayRegionId: "",
        },
        "2": {
          MultiplayClusterSlug: "ec2-us-east-1-dokken",
          MultiplayProfileId: "1252922",
          MultiplayRegionId: "19c465a7-f21f-11ea-a5e3-0954f48c5682",
        },
        "3": { MultiplayClusterSlug: "", MultiplayProfileId: "1252925", MultiplayRegionId: "" },
        "4": {
          MultiplayClusterSlug: "ec2-us-east-1-dokken",
          MultiplayProfileId: "1252928",
          MultiplayRegionId: "19c465a7-f21f-11ea-a5e3-0954f48c5682",
        },
      },
      LockedLoadouts: {
        [claims.id]: { Character: "character_wonder_woman", Skin: "skin_wonder_woman_default" },
      },
      ModeString: "1v1",
      IsLobbyJoinable: true,
    },
    players: {
      all: [
        {
          account_id: claims.id,
          source: {},
          state: "join",
          data: {},
          identity: {
            username: claims.hydraUsername,
            avatar:
              "https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.584.png",
            default_username: true,
            personal_data: {},
            alternate: {
              wb_network: [
                {
                  id: claims.wb_network_id,
                  username: claims.username,
                  avatar: null,
                  email: null,
                },
              ],
              steam: [
                {
                  id: claims.steamId,
                  username: claims.username,
                  avatar:
                    "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
                  email: null,
                },
              ],
            },
            usernames: [
              { auth: "hydra", username: claims.hydraUsername },
              { auth: "steam", username: claims.username },
              { auth: "wb_network", username: claims.username },
            ],
            platforms: ["steam"],
            current_platform: "steam",
            is_cross_platform: false,
          },
        },
      ],
      current: [claims.id],
      count: 1,
    },
    matchmaking: null,
    cluster: "ec2-us-east-1-dokken",
    last_warning_time: null,
    template: {
      type: "async",
      name: "party_lobby",
      slug: "party_lobby",
      min_players: 2,
      max_players: 2,
      game_server_integration_enabled: false,
      game_server_config: null,
      created_at: new Date(),
      updated_at: new Date(),
      data: {},
      id: "",
    },
    criteria: { slug: null },
    shortcode: null,
    id: params.lobbyId,
    access: "public",
  };
});

router.put("/ssc/invoke/submit_end_of_match_stats", async () => {
  // TODO : Implement
  return { body: {}, metadata: null, return_code: 0 };
});

const mvsi_match_routes = new Elysia();

mvsi_match_routes.post(
  "/mvsi_register",
  async ({ body }) => {
    const match = await getActiveMatch(body.matchId);
    if (match?.matchKey !== body.key) {
      return "";
    }
    const playerKeys = Object.keys(match.matchConfig.Players);
    const players = playerKeys.map((playerKey) => {
      const player = match.matchConfig.Players[playerKey];
      const result = {
        player_index: player.PlayerIndex,
        ip: player.Ip,
        is_host: player.IsHost,
      };
      return result;
    });
    const result = {
      max_players: playerKeys.length,
      match_duration: 36000,
      players,
    };
    return result;
  },
  {
    body: t.Object({
      matchId: t.String(),
      key: t.String(),
    }),
  },
);

mvsi_match_routes.post(
  "/mvsi_end_match",
  async ({ body }) => {
    const match = await getActiveMatch(body.matchId);
    if (match?.matchKey !== body.key) {
      return "";
    }
    if (match) {
      await notifyActiveMatchEnded(
        Object.keys(match.matchConfig.Players).map((p) => match.matchConfig.Players[p].AccountId),
        match.matchConfig.MatchId,
      );
      return "";
    }
  },
  {
    body: t.Object({
      matchId: t.String(),
      key: t.String(),
    }),
  },
);

MAIN_APP.use(mvsi_match_routes);
MAIN_APP.use(router);
