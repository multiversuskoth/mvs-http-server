import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";
import ObjectID from "bson-objectid";
import { randomUUID } from "crypto";
import { MVSTime } from "../utils/date";
import env from "../env/env";
import { cancelMatchmaking, MATCH_TYPES, queueMatch } from "../services/matchmakingService";

export async function handleMatches_id(req: Request<{}, {}, {}, {}>, res: Response) {
  const account = req.token;
  res.send({
    updated_at: { _hydra_unix_date: 1742265244 },
    created_at: { _hydra_unix_date: 1742265244 },
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
            [account.id]: {
              Account: { id: account.id },
              JoinedAt: { _hydra_unix_date: MVSTime(new Date()) },
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
      LeaderID: account.id,
      LobbyType: 0,
      ReadyPlayers: {},
      PlayerGameplayPreferences: { [account.id]: 544 },
      PlayerAutoPartyPreferences: { [account.id]: true },
      GameVersion: env.GAME_VERSION,
      HissCrc: 1167552915,
      Platforms: { [account.id]: "PC" },
      AllMultiplayParams: {
        "1": { MultiplayClusterSlug: "ec2-us-east-1-dokken", MultiplayProfileId: "1252499", MultiplayRegionId: "" },
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
      LockedLoadouts: { [account.id]: { Character: "character_wonder_woman", Skin: "skin_wonder_woman_default" } },
      ModeString: "1v1",
      IsLobbyJoinable: true,
    },
    players: {
      all: [
        {
          account_id: account.id,
          source: {},
          state: "join",
          data: {},
          identity: {
            username: account.hydraUsername,
            avatar: "https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.584.png",
            default_username: true,
            personal_data: {},
            alternate: {
              wb_network: [{ id: account.wb_network_id, username: account.username, avatar: null, email: null }],
              steam: [
                {
                  id: "76561195177950873",
                  username: account.username,
                  avatar: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
                  email: null,
                },
              ],
            },
            usernames: [
              { auth: "hydra", username: account.hydraUsername },
              { auth: "steam", username: account.username },
              { auth: "wb_network", username: account.username },
            ],
            platforms: ["steam"],
            current_platform: "steam",
            is_cross_platform: false,
          },
        },
      ],
      current: [account.id],
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
      created_at: { _hydra_unix_date: MVSTime(new Date()) },
      updated_at: { _hydra_unix_date: MVSTime(new Date()) },
      data: {},
      id: ObjectID().toHexString(),
    },
    criteria: { slug: null },
    shortcode: null,
    id: ObjectID().toHexString(),
    access: "public",
  });
}

export async function handleMatches_all_id(req: Request<{}, {}, {}, MVSQueries.Matches_all_id_QUERY>, res: Response) {
  res.send({
    matches: [],
    total_matches: 0,
    current_page: 1,
    total_pages: 1,
  });
}

export interface MATCH_MAKING_REQUEST {
  data: {
    MultiplayParams: {
      MultiplayClusterSlug: string;
      MultiplayProfileId: string;
      MultiplayRegionId: string;
      MultiplayRegionSearchId: number;
    };
    crossplay_buckets: string[];
    version: string;
  };
  game_server: {
    launch_data: {
      id: number;

      profile: string;
    };
  };
  match: string;
}

export async function handleMatches_matchmaking_1v1_retail_request(req: Request<{}, {}, MATCH_MAKING_REQUEST, {}>, res: Response) {
  const account = req.token;
  const data = {
    updated_at: { _hydra_unix_date: MVSTime(new Date()) },
    requester_account_id: account.id,
    is_concurrent: false,
    concurrent_identifier: randomUUID(),
    created_at: { _hydra_unix_date: MVSTime(new Date()) },
    data: {
      MultiplayParams: req.body.data.MultiplayParams,
      crossplay_buckets: ["All", "PC"],
      version: env.GAME_VERSION,
      matchmaking_rating: 606.406234735998,
      player_count: 1,
      double_character_key: "character_wonder_woman",
      rp: 0,
      allowed_buckets: ["Any"],
      allowed_buckets_relaxed: ["Any"],
    },
    server_data: null,
    criteria_slug: "1v1-retail",
    cluster: req.body.data.MultiplayParams.MultiplayClusterSlug,
    players_connection_info: {
      [account.id]: {
        game_server_region_data: [{ region_id: "19c465a7-f21f-11ea-a5e3-0954f48c5682", latency: 0.04239736124873161 }],
      },
    },
    player_connections: { [account.id]: [randomUUID()] },
    players: {
      [account.id]: {
        updated_at: null,
        account_id: account.id,
        created_at: null,
        last_login: null,
        last_inbox_read: null,
        points: null,
        data: {},
        server_data: {},
        private_data: {},
        server_owner_data: {},
        inventory: {},
        matches: {},
        cross_match_results: {},
        notifications: {},
        aggregates: {},
        calculations: {},
        files: [],
        user_segments: [],
        random_distribution: null,
        id: account.profile_id,
      },
    },
    groups: [1],
    relationships: [],
    recently_played: { [account.id]: [] },
    from_match: req.body.match,
    reuse_match: false,
    party_id: null,
    state: 2,
    user_rule_config: [],
    game_server: {
      unique_key: null,
      backend: "multiplay",
      launch_configs: [
        {
          profile_id: "1252922",
          fleet_id: "6edd4138-20ef-11ec-a2b7-4a5119a45304",
          region_id: "19c714ff-f21f-11ea-b144-4d87911ee195",
          backend: "multiplay",
        },
      ],
      optional_launch_config_params: {},
    },
    server_submitted: false,
    id: ObjectID().toHexString(),
  };
  res.send(data);
  await queueMatch(account.id, [account.id], data.from_match, data.id, MATCH_TYPES.ONE_V_ONE);
}

export async function handleMatches_matchmaking_2v2_retail_request(req: Request<{}, {}, MATCH_MAKING_REQUEST, {}>, res: Response) {
  const account = req.token;
  const newMatchId = ObjectID().toHexString();

  const data = {
    id: newMatchId,
    updated_at: { _hydra_unix_date: MVSTime(new Date()) },
    requester_account_id: account.id,
    is_concurrent: false,
    concurrent_identifier: randomUUID(),
    created_at: { _hydra_unix_date: MVSTime(new Date()) },
    data: {
      MultiplayParams: req.body.data.MultiplayParams,
      crossplay_buckets: ["All", "PC"],
      version: env.GAME_VERSION,
      matchmaking_rating: 724.7928014055103,
      player_count: 1,
      double_character_key: "character_TODO_SAME_CHAR_IN_SAME_TEAM",
      rp: 0,
      allowed_buckets: ["Any"],
      allowed_buckets_relaxed: ["Any"],
    },
    server_data: null,
    criteria_slug: "2v2-retail",
    cluster: req.body.data.MultiplayParams.MultiplayClusterSlug,
    players_connection_info: {
      [account.id]: {
        game_server_region_data: [{ region_id: "19c465a7-f21f-11ea-a5e3-0954f48c5682", latency: 0.04791003838181496 }],
      },
    },
    player_connections: {
      [account.id]: [randomUUID()],
    },
    players: {
      [account.id]: {
        id: account.profile_id,
        updated_at: null,
        account_id: account.id,
        created_at: null,
        last_login: null,
        last_inbox_read: null,
        points: null,
        data: {},
        cross_match_results: {},
        notifications: {},
        aggregates: {},
        calculations: {},
        files: [],
        random_distribution: null,
      },
    },
    groups: [1],
    relationships: [],
    recently_played: {
      [account.id]: [],
    },
    from_match: req.body.match,
    reuse_match: false,
    party_id: null,
    state: 2,
    user_rule_config: [],
    game_server: {
      unique_key: null,
      backend: "multiplay",
      launch_configs: [
        {
          profile_id: "1252928",
          fleet_id: "6edd4138-20ef-11ec-a2b7-4a5119a45304",
          region_id: "19c714ff-f21f-11ea-b144-4d87911ee195",
          backend: "multiplay",
        },
      ],
      optional_launch_config_params: {},
    },
    server_submitted: false,
  };

  res.send(data);

  await queueMatch(account.id, [account.id], data.from_match, data.id, MATCH_TYPES.TWO_V_TWO);
}

export async function handle_cancel_matchmaking(req: Request<{ id: string }, {}, {}, {}>, res: Response) {
  await cancelMatchmaking(req.token.id, req.params.id);
}
