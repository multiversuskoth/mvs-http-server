import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleMatches_id(req: Request<{}, {}, {}, {}>, res: Response) {
  res.send({
    updated_at: 1742088599,
    created_at: 1742088598,
    account_id: null,
    completion_time: null,
    name: "bold-floral-wildflower-meadow-knWCr",
    state: "open",
    access_level: "public",
    origin: "client",
    rand: 0.7653591542246007,
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
            "63cef97ced0619f458cfac8f": {
              Account: { id: "63cef97ced0619f458cfac8f" },
              JoinedAt: 1742088598,
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
      LeaderID: "63cef97ced0619f458cfac8f",
      LobbyType: 0,
      ReadyPlayers: {},
      PlayerGameplayPreferences: { "63cef97ced0619f458cfac8f": 544 },
      PlayerAutoPartyPreferences: { "63cef97ced0619f458cfac8f": true },
      GameVersion: "CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1",
      HissCrc: 1167552915,
      Platforms: { "63cef97ced0619f458cfac8f": "PC" },
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
      LockedLoadouts: { "63cef97ced0619f458cfac8f": { Character: "character_wonder_woman", Skin: "skin_wonder_woman_default" } },
      ModeString: "1v1",
      IsLobbyJoinable: true,
    },
    players: {
      all: [
        {
          account_id: "63cef97ced0619f458cfac8f",
          source: {},
          state: "join",
          data: {},
          identity: {
            username: "dark-wild-grass-voice-yRPU2",
            avatar: "https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.584.png",
            default_username: true,
            personal_data: {},
            alternate: {
              wb_network: [{ id: "pafd8d7950aa1484ea791d06662fa75ce", username: "MultiVersusKOTH", avatar: null, email: null }],
              steam: [
                {
                  id: "76561195177950873",
                  username: "multiversuskoth",
                  avatar: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
                  email: null,
                },
              ],
            },
            usernames: [
              { auth: "hydra", username: "dark-wild-grass-voice-yrpu2" },
              { auth: "steam", username: "multiversuskoth" },
              { auth: "wb_network", username: "multiversuskoth" },
            ],
            platforms: ["steam"],
            current_platform: "steam",
            is_cross_platform: false,
          },
        },
      ],
      current: ["63cef97ced0619f458cfac8f"],
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
      created_at: 1714587806,
      updated_at: 1729015209,
      data: {},
      id: "6632889e358a2a62107ca7fb",
    },
    criteria: { slug: null },
    shortcode: null,
    id: "67d6299612d277ef0c11cf72",
    access: "public",
  });
}

export async function handleMatches_all_id(req: Request<{}, {}, {}, MVSQueries.Matches_all_id_QUERY>, res: Response) {
  res.send("");
}
