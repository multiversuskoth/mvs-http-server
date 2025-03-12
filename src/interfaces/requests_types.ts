export namespace MVSRequests {
  export interface Access_REQUEST {
    auth: {
      fail_on_missing: boolean;
      /**
       *
       * 08021098D0D1EE051800204E2A8001476011E60D3AA73FEBD33192DE6120067B4E7334E54EAC48757660CAAC7A93C5FBC7FD7059A8881E4F76F3545BD94A6E60074DA813B1BFB32E4019B0BA219ABAA22F2DAA83A2C87A593350E3372A0B98FFC0E6C394C4790B08168403E5D7DA21D82F7C738FB0A0122476EB1384DD63507FDEACA5C77F5A297A8505B0E03214B2
       *
       */
      steam: string;
    };
    metadata: {
      /**
       *
       * PC
       *
       */
      Platform: string;
    };
    options: string[];
  }

  export interface Accounts_me_relationships_id_block_REQUEST {}

  export interface Accounts_me_relationships_id_unblock_REQUEST {}

  export interface Accounts_wb_network_bulk_REQUEST {
    ids: string[];
  }

  export interface Batch_REQUEST {
    options: {
      allow_failures: boolean;
      parallel: boolean;
    };
    requests: {
      body: {
        /**
         *
         * 1167552915
         *
         */
        Crc: number;
        advanced_filter: {
          /**
           *
           * any
           *
           */
          boolean: string;
          subfilters: any[];
          tags: string[];
        };
      };
      headers: {
        /**
         *
         * GET
         *
         */
        "x-hydra-http-method": string;
      };
      /**
       *
       * /ssc/invoke/hiss_amalgamation
       *
       * /profiles/63cef97ced0619f458cfac8f/inventory
       *
       * /matches/all/62d779c3f666a3c04a8f7a8c?count=20&page=1&fields=server_data&templates=2v2_container&templates=1v1_container&templates=ffa_container&templates=2v2_gamelift&templates=1v1_gamelift&templates=ffa_gamelift&templates=custom_container_one_player&templates=custom_container_two_player&templates=custom_container_three_player&templates=custom_container_four_player&templates=custom_gamelift_two_player&templates=custom_gamelift_three_player&templates=custom_gamelift_four_player&templates=1v1_container_bot&templates=1v3_container_bot&templates=2v2_container_bot&templates=2v2_gamelift_bot&templates=arena_container_parent
       *
       * /matches/all/63cef97ced0619f458cfac8f?count=20&page=1&fields=server_data&templates=2v2_container&templates=1v1_container&templates=ffa_container&templates=2v2_gamelift&templates=1v1_gamelift&templates=ffa_gamelift&templates=custom_container_one_player&templates=custom_container_two_player&templates=custom_container_three_player&templates=custom_container_four_player&templates=custom_gamelift_two_player&templates=custom_gamelift_three_player&templates=custom_gamelift_four_player&templates=1v1_container_bot&templates=1v3_container_bot&templates=2v2_container_bot&templates=2v2_gamelift_bot&templates=arena_container_parent
       *
       */
      url: string;
      /**
       *
       * PUT
       *
       * GET
       *
       */
      verb: string;
    }[];
  }

  export interface Datarouter_api_v1_public_data_clients_REQUEST {
    Events: {
      /**
       *
       * GameStartup
       *
       * GameHeartbeat
       *
       */
      EventName: string;
      /**
       *
       * 29da23b21f7f41319c7fa5e86e20dc2b
       *
       * dc943966edb54a6eb9c1334ca8cc1990
       *
       */
      deploymentId: string;
      /**
       *
       * Windows 10 (Release 2009) 10.0.19045.1.768.64bit
       *
       */
      platform: string;
      /**
       *
       * client
       *
       */
      source: string;
    }[];
  }

  export interface Drives_multiversus_sync_REQUEST {
    keys: string[];
  }

  export interface Friends_me_invitations_REQUEST {
    /**
     *
     * p39b6ef94a0ad40e29ed342f99f40e2db
     *
     */
    account_id: string;
  }

  export interface Leaderboards_bulk_score_and_rank_id_REQUEST {
    ids: string[];
  }

  export interface Matches_id_REQUEST {
    player_data: {
      ":id": {
        game_server_region_data: {
          /**
           *
           * 0.04276302456855774
           *
           */
          latency: number;
          /**
           *
           * 19c465a7-f21f-11ea-a5e3-0954f48c5682
           *
           */
          region_id: string;
        }[];
      };
    };
  }

  export interface Matches_matchmaking_1v1_retail_request_REQUEST {
    data: {
      MultiplayParams: {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252922
         *
         */
        MultiplayProfileId: string;
        /**
         *
         * 19c465a7-f21f-11ea-a5e3-0954f48c5682
         *
         */
        MultiplayRegionId: string;
        /**
         *
         * 1
         *
         */
        MultiplayRegionSearchId: number;
      };
      crossplay_buckets: string[];
      /**
       *
       * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
       *
       */
      version: string;
    };
    game_server: {
      launch_data: {
        /**
         *
         * 1
         *
         */
        id: number;
        /**
         *
         * 1252922
         *
         */
        profile: string;
      };
    };
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    match: string;
  }

  export interface Matches_matchmaking_ranked_1v1_retail_request_REQUEST {
    data: {
      MultiplayParams: {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252922
         *
         */
        MultiplayProfileId: string;
        /**
         *
         * 19c465a7-f21f-11ea-a5e3-0954f48c5682
         *
         */
        MultiplayRegionId: string;
        /**
         *
         * 1
         *
         */
        MultiplayRegionSearchId: number;
      };
      crossplay_buckets: string[];
      /**
       *
       * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
       *
       */
      version: string;
    };
    game_server: {
      launch_data: {
        /**
         *
         * 1
         *
         */
        id: number;
        /**
         *
         * 1252922
         *
         */
        profile: string;
      };
    };
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    match: string;
  }

  export interface Matches_matchmaking_request_id_cancel_REQUEST {}

  export interface Profiles_id_inventory_REQUEST {
    item_slugs: string[];
  }

  export interface Profiles_bulk_REQUEST {
    ids: string[];
  }

  export interface Sessions_auth_token_REQUEST {
    /**
     *
     * I+MPokHx/JkCFmuHpcEiavYwKjKnp5BukUdWe1OlLqGC3yurVX4PndUzw0YD/zY2V2F2Z4sCT6A+oFHMwDtsic30zdadK5+Dw1YxH/4i9UU=
     *
     */
    code: string;
    /**
     *
     * authorization_code
     *
     */
    grant_type: string;
  }

  export interface Social_me_block_p2a3c488f51fb4bb19c8689be86997b8a_REQUEST {}

  export interface Social_me_unblock_p2a3c488f51fb4bb19c8689be86997b8a_REQUEST {}

  export interface Ssc_invoke_attempt_daily_refresh_REQUEST {}

  export interface Ssc_invoke_claim_all_milestone_reward_track_tiers_REQUEST {
    /**
     *
     * mrt_mastery_jason
     *
     * mrt_battlepass_season_five
     *
     * bp_valentines_dailylogin_milestonerewardtrack1
     *
     */
    TrackSlug: string;
  }

  export interface Ssc_invoke_claim_milestone_reward_track_tiers_REQUEST {
    Tiers: number[][];
    /**
     *
     * MRT_FighterRoadV2
     *
     * MRT_Bonus_Weekly_Mission
     *
     */
    TrackSlug: string;
  }

  export interface Ssc_invoke_claim_mission_rewards_REQUEST {
    /**
     *
     * miscon_battlepassweekly_s5
     *
     * miscon_battlepassdaily_s5
     *
     */
    ContainerSlug: string;
    MissionsToClaim: {
      /**
       *
       * misctl_battlepass_weekly_new
       *
       * misctl_battlepass_daily_base_new
       *
       */
      MissionControllerSlug: string;
      /**
       *
       * 107f0018-8d09-4859-b308-07de2f4d0694
       *
       * a30ca0e3-7eb0-4b49-9f6d-cdcca1c2f77d
       *
       * b32be6de-3ad3-43da-9964-c6cf408d1cd8
       *
       */
      MissionGuid: string;
      /**
       *
       * mis_hit_up_attack_air_tank_weekly
       *
       * mis_ringout_pvp_weekly
       *
       * mis_stats_dealalldamage_pvp
       *
       */
      MissionSlug: string;
    }[];
  }

  export interface Ssc_invoke_create_custom_game_lobby_REQUEST {
    AllMultiplayParams: {
      "1": {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252499
         *
         */
        MultiplayProfileId: string;
        /**
         *
         *
         *
         */
        MultiplayRegionId: string;
      };
      "2": {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252922
         *
         */
        MultiplayProfileId: string;
        /**
         *
         * 19c465a7-f21f-11ea-a5e3-0954f48c5682
         *
         */
        MultiplayRegionId: string;
      };
      "3": {
        /**
         *
         *
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252925
         *
         */
        MultiplayProfileId: string;
        /**
         *
         *
         *
         */
        MultiplayRegionId: string;
      };
      "4": {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252928
         *
         */
        MultiplayProfileId: string;
        /**
         *
         * 19c465a7-f21f-11ea-a5e3-0954f48c5682
         *
         */
        MultiplayRegionId: string;
      };
    };
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 0
     *
     */
    LobbyType: number;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_create_party_lobby_REQUEST {
    AllMultiplayParams: {
      "1": {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252499
         *
         */
        MultiplayProfileId: string;
        /**
         *
         *
         *
         */
        MultiplayRegionId: string;
      };
      "2": {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252922
         *
         */
        MultiplayProfileId: string;
        /**
         *
         * 19c465a7-f21f-11ea-a5e3-0954f48c5682
         *
         */
        MultiplayRegionId: string;
      };
      "3": {
        /**
         *
         *
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252925
         *
         */
        MultiplayProfileId: string;
        /**
         *
         *
         *
         */
        MultiplayRegionId: string;
      };
      "4": {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        MultiplayClusterSlug: string;
        /**
         *
         * 1252928
         *
         */
        MultiplayProfileId: string;
        /**
         *
         * 19c465a7-f21f-11ea-a5e3-0954f48c5682
         *
         */
        MultiplayRegionId: string;
      };
    };
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * party_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 0
     *
     */
    LobbyType: number;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_equip_banner_REQUEST {
    /**
     *
     * banner_s1_golden_goliath
     *
     * banner_s1_master_master
     *
     * banner_foretold_champion_rare
     *
     */
    BannerSlug: string;
  }

  export interface Ssc_invoke_equip_stat_tracker_REQUEST {
    /**
     *
     * 0
     *
     * 1
     *
     */
    StatTrackerSlotIndex: number;
    /**
     *
     * stattracking_ranked_seasonfive_charactersingold_1v1
     *
     * stat_tracking_bundle_ranked_season_two_wins_1v1
     *
     */
    StatTrackerSlug: string;
  }

  export interface Ssc_invoke_equip_taunt_REQUEST {
    /**
     *
     * character_Jason
     *
     */
    CharacterSlug: string;
    /**
     *
     * 1
     *
     */
    TauntSlotIndex: number;
    /**
     *
     * emote_pass_the_salt
     *
     */
    TauntSlug: string;
  }

  export interface Ssc_invoke_game_launch_event_REQUEST {
    /**
     *
     * 76561199472918169
     *
     */
    account_platform_id: string;
    /**
     *
     * paee40f62bd814a53bf9f4d21e43ea2c1
     *
     */
    hydra_public_id: string;
    is_production: boolean;
    /**
     *
     * GenericOSVersionLabel GenericOSSubVersionLabel
     *
     */
    os: string;
    /**
     *
     * steam
     *
     */
    platform_name: string;
    /**
     *
     * 2560x1440
     *
     */
    resolution: string;
    /**
     *
     * MultiVersusKOTH
     *
     */
    user_name: string;
  }

  export interface Ssc_invoke_get_or_create_mission_object_REQUEST {}

  export interface Ssc_invoke_invite_to_player_lobby_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 62e95383b488ee2289aef406
     *
     */
    InviteeAccountID: string;
    IsSpectator: boolean;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    LobbyId: string;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_join_custom_game_lobby_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    HostId: string;
    IsSpectator: boolean;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_kick_from_lobby_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 62e95383b488ee2289aef406
     *
     */
    KickeeAccountID: string;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    LobbyId: string;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_leave_player_lobby_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    LobbyId: string;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_lobby_code_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    LobbyId: string;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_lock_lobby_loadout_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    Loadout: {
      /**
       *
       * character_BananaGuard
       *
       * character_Jason
       *
       * character_c16
       *
       */
      Character: string;
      /**
       *
       * skin_bananaguard_default
       *
       * skin_c035_s25
       *
       * skin_c016_s18
       *
       */
      Skin: string;
    };
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    LobbyId: string;
    /**
     *
     * party_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_perks_lock_REQUEST {
    /**
     *
     * 67cf0bdd38150fa35c03b5af
     *
     * 67cf0c7ec51aaceb6778d2c9
     *
     * 67cf0e30410383470e2dd0e1
     *
     */
    ContainerMatchId: string;
    Perks: string[];
  }

  export interface Ssc_invoke_perks_purchase_REQUEST {
    /**
     *
     * character_harleyquinn
     *
     */
    Character: string;
    Perks: string[];
  }

  export interface Ssc_invoke_perks_set_character_page_REQUEST {
    /**
     *
     * character_harleyquinn
     *
     * character_Jason
     *
     */
    Character: string;
    /**
     *
     *
     *
     */
    Description: string;
    /**
     *
     * Custom Set 1
     *
     * Custom Set 3
     *
     * Custom Set 2
     *
     */
    DisplayName: string;
    /**
     *
     * 0
     *
     * 2
     *
     * 1
     *
     */
    PageIndex: number;
    Perks: string[];
  }

  export interface Ssc_invoke_promote_to_lobby_leader_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    LobbyId: string;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * 62e95383b488ee2289aef406
     *
     */
    PromoteTarget: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_rematch_accept_REQUEST {
    /**
     *
     * 67cf0bdd38150fa35c03b5af
     *
     */
    ContainerMatchId: string;
  }

  export interface Ssc_invoke_send_profile_notification_REQUEST {
    /**
     *
     * 62ea8899706c79b6eca58d2f
     *
     * 62ec5254e7de359de7a0f3b7
     *
     */
    AccountId: string;
    /**
     *
     * pafd8d7950aa1484ea791d06662fa75ce
     *
     */
    SenderWBPNAccountID: string;
    /**
     *
     * 67cf0b8f59e56837868f0a0b
     *
     */
    WBPNInvitationID: string;
    /**
     *
     * WBPNFriendRequestReceivedNotification
     *
     * WBPNBlockedNotification
     *
     * WBPNUnblockedNotification
     *
     */
    template_id: string;
  }

  export interface Ssc_invoke_set_enabled_maps_for_custom_game_REQUEST {
    MapSlugs: string[];
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
  }

  export interface Ssc_invoke_set_game_mode_for_custom_game_REQUEST {
    /**
     *
     * gm_chickensvsicecubes_1v1
     *
     * gm_classic_1v1
     *
     */
    GameModeSlug: string;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
  }

  export interface Ssc_invoke_set_lobby_joinable_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    LobbyId: string;
    /**
     *
     * party_lobby
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_set_mode_for_lobby_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    LobbyId: string;
    /**
     *
     * party_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 1v1
     *
     * ranked-1v1
     *
     */
    ModeString: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_set_ready_for_lobby_REQUEST {
    AutoPartyPreference: boolean;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    LobbyId: string;
    /**
     *
     * party_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    MatchID: string;
    /**
     *
     * PC
     *
     */
    Platform: string;
    Ready: boolean;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_set_world_buffs_for_custom_game_REQUEST {
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    WorldBuffSlugs: string[];
  }

  export interface Ssc_invoke_start_custom_match_REQUEST {
    AutoPartyPreference: boolean;
    BotData: {};
    /**
     *
     * ec2-us-east-1-dokken
     *
     */
    ClusterID: string;
    /**
     *
     * 1
     *
     */
    CrossplayPreference: number;
    /**
     *
     * 544
     *
     */
    GameplayPreferences: number;
    /**
     *
     * 1167552915
     *
     */
    HissCrc: number;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    LobbyId: string;
    /**
     *
     * custom_game_lobby
     *
     */
    LobbyTemplate: string;
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * 1252922
     *
     */
    MultiplayProfileID: string;
    /**
     *
     * 19c465a7-f21f-11ea-a5e3-0954f48c5682
     *
     */
    MultiplayRegionID: string;
    /**
     *
     * 1
     *
     */
    MultiplayRegionSearchID: number;
    /**
     *
     * PC
     *
     */
    Platform: string;
    /**
     *
     * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
     *
     */
    Version: string;
  }

  export interface Ssc_invoke_submit_end_of_match_stats_REQUEST {
    /**
     *
     * 67cf0bdd38150fa35c03b5af
     *
     * 67cf0c7ec51aaceb6778d2c9
     *
     * 67cf0e30410383470e2dd0e1
     *
     */
    ContainerMatchId: string;
    EndOfMatchStats: {
      PlayerMissionUpdates: {
        ":id": {
          /**
           *
           * 0
           *
           */
          "Fighter:AgentSmith:Silence": number;
          /**
           *
           * 0
           *
           */
          "Fighter:AgentSmith:TeleAlly": number;
          /**
           *
           * 0
           *
           */
          "Fighter:BananaGuard:Buff": number;
          /**
           *
           * 0
           *
           */
          "Fighter:BananaGuard:Facebox": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Batman:GrappleAlly": number;
          /**
           *
           * 0
           *
           */
          "Fighter:C025:lenoregrab": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Finn:AirPojectileDestroy": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Finn:BuyBmo": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Garnet:FullBuff": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Harley:BombSave": number;
          /**
           *
           * 0
           *
           */
          "Fighter:IronGiant:RageMission": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Fighter:Jason:RageHit": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Jerry:AllyAttach": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Lebron:Defense": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Lebron:Pass": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Marvin:ReverseProjectile": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Marvin:bubble": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Morty:AllySave": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Morty:SplitNade": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Reindog:IceCleanse": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Reindog:LoveLeashAlly": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Rick:AllySeed": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Rick:PortalKB": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Shaggy:EnragedAttackUsed": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Shaggy:FinishedCombo": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Shaggy:RageBuildComplete": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Shaggy:SandwichHeal": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Steven:Bubblestack": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Steven:EnemyBubble": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Taz:Chicken": number;
          /**
           *
           * 0
           *
           */
          "Fighter:Taz:Eat": number;
          /**
           *
           * 0
           *
           */
          "Hitbox:Stripe:Kickflip": number;
          /**
           *
           * 0
           *
           */
          "Hitbox:Velma:GrabAlly": number;
          /**
           *
           * 0
           *
           */
          "Hitbox:Velma:Van": number;
          /**
           *
           * 0
           *
           */
          "Marceline:Powerslide": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Boss:M015:Defeated": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Character:BugsBunny:HealSandwich": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Character:Stripe:Gun": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Character:WonderWoman:AllyLasso": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Character:WonderWoman:FullChargeBubble": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Enemies:AcmeSkyDronesDestroyed": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Enemies:BuffApplied:Chicken": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Enemies:BuffApplied:Frozen": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Enemies:BuffApplied:Ignited": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Enemies:BuffApplied:Shocked": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Enemies:BuffApplied:Silence": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Enemies:BuffApplied:Weakened": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Hazards:SafetySpotlightAttacksDodged": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Hazards:SafetySpotlightAttacksTaken": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Hazards:SafetySpotlightHitsOutsideSpotlight": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Hazards:TravelTube:HitOpponentsInto": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Map:M007:EmblemOpened": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:PlayCoOp": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:PopAllyBubble": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Rifts:LazarusPit:BuffedRingouts": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Rifts:LazarusPit:FellIn": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Rifts:LazarusPit:TempHealth": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:DefenseHealth": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:DefenseHealth:CollectEvidence": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:DoorPortalEnemy": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:DoorPortalProjectile": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GalleryBalloonsDestroyed": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GalleryTargetsDestroyed": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GhostHitOpponent": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GhostHitSelf": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GoblinTreasureCollected": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GoblinTreasureCollected:Rare": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GolfCount": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:GolfHolesCompleted": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:JumpRopeJumps": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:RacePlacement": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:ShmupEnemyDestroyed": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:ShootingGalleryScore": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:TargetsDestroyed": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:TreasureCollected": number;
          /**
           *
           * 0
           *
           */
          "Objective:Match:Special:VolleyballShutout": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:DebuffsCleansed": number;
          /**
           *
           * 48.13999938964844
           *
           * 90.5886459350586
           *
           * 0
           *
           */
          "Stat:Game:Character:Stock:DamageTaken": number;
          /**
           *
           * 10
           *
           * 19
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAirAttacksHit": number;
          /**
           *
           * 30
           *
           * 90
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAirAttacksUsed": number;
          /**
           *
           * 123.27750396728516
           *
           * 131.6581268310547
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAirDamageDealt": number;
          /**
           *
           * 9
           *
           * 19
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAirNormalsHit": number;
          /**
           *
           * 18
           *
           * 65
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAirNormalsUsed": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAirSpecialsHit": number;
          /**
           *
           * 12
           *
           * 25
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAirSpecialsUsed": number;
          /**
           *
           * 44.099998474121094
           *
           * 102.08333587646484
           *
           * 4.666666507720947
           *
           */
          "Stat:Game:Character:TotalAirTime": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalArmorBreaks": number;
          /**
           *
           * 2
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalArmorHitsTaken": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAssists": number;
          /**
           *
           * 196.98875427246094
           *
           * 297.4160461425781
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAttackDamageDealt": number;
          /**
           *
           * 5
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAttacksDodged": number;
          /**
           *
           * 25
           *
           * 58
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAttacksHit": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAttacksParried": number;
          /**
           *
           * 58
           *
           * 186
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalAttacksUsed": number;
          /**
           *
           * 0
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalChargeAttacksHit": number;
          /**
           *
           * 6
           *
           * 12
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalChargeAttacksUsed": number;
          /**
           *
           * 4
           *
           * 6
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalCooldownAbilitiesStarted": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalCrouchTime": number;
          /**
           *
           * 42.04999923706055
           *
           * 46.04999923706055
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDamageAdded": number;
          /**
           *
           * 259.46624755859375
           *
           * 310.4310607910156
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDamageDealt": number;
          /**
           *
           * 27.694236755371094
           *
           * 9.5
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDamageDodged": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDamageMitigated": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDamageParried": number;
          /**
           *
           * 159.59088134765625
           *
           * 243.2251434326172
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDamageTaken": number;
          /**
           *
           * 1
           *
           * 7
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDashAttacksHit": number;
          /**
           *
           * 3
           *
           * 16
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDashAttacksUsed": number;
          /**
           *
           * 17
           *
           * 13
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalDirectionalAirDodgesUsed": number;
          /**
           *
           * 22
           *
           * 23
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalDirectionalDodgesUsed": number;
          /**
           *
           * 5
           *
           * 10
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDirectionalGroundDodgesUsed": number;
          /**
           *
           * 22
           *
           * 23
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalDodgesUsed": number;
          /**
           *
           * 6
           *
           * 18
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDoubleJumps": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDoubleRingouts": number;
          /**
           *
           * 0
           *
           * 2
           *
           */
          "Stat:Game:Character:TotalDownAirNormalHit": number;
          /**
           *
           * 0
           *
           * 9
           *
           */
          "Stat:Game:Character:TotalDownAirNormalUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDownAirSpecialsHit": number;
          /**
           *
           * 3
           *
           * 14
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDownAirSpecialsUsed": number;
          /**
           *
           * 0
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalDownGroundNormalHit": number;
          /**
           *
           * 0
           *
           * 2
           *
           */
          "Stat:Game:Character:TotalDownGroundNormalUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDownGroundSpecialsHit": number;
          /**
           *
           * 0
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalDownGroundSpecialsUsed": number;
          /**
           *
           * 0
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalDownNormalAttacksHit": number;
          /**
           *
           * 0
           *
           * 11
           *
           */
          "Stat:Game:Character:TotalDownNormalAttacksUsed": number;
          /**
           *
           * 0
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalDownRingouts": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDownSpecialsHit": number;
          /**
           *
           * 3
           *
           * 17
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDownSpecialsUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDownspikeRingouts": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalElectricAttacksHit": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalFireAttacksHit": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalFullyChargedAttacksHit": number;
          /**
           *
           * 50.17774963378906
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGreyHealthReceived": number;
          /**
           *
           * 15
           *
           * 39
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGroundAttacksHit": number;
          /**
           *
           * 28
           *
           * 96
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGroundAttacksUsed": number;
          /**
           *
           * 124.13875579833984
           *
           * 170.03292846679688
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGroundDamageDealt": number;
          /**
           *
           * 13
           *
           * 38
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGroundNormalsHit": number;
          /**
           *
           * 19
           *
           * 78
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGroundNormalsUsed": number;
          /**
           *
           * 2
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGroundSpecialsHit": number;
          /**
           *
           * 9
           *
           * 18
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGroundSpecialsUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalHealingReceived": number;
          /**
           *
           * 43
           *
           * 51
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalHitsTaken": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalIceAttacksHit": number;
          /**
           *
           * 18
           *
           * 48
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalJumps": number;
          /**
           *
           * 450
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalKnockbackAdded": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalKnockbackMitigated": number;
          /**
           *
           * 2
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalLeftRingouts": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralAirDodgesUsed": number;
          /**
           *
           * 7
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralAirNormalHit": number;
          /**
           *
           * 11
           *
           * 15
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralAirNormalUsed": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralAirSpecialsHit": number;
          /**
           *
           * 3
           *
           * 5
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralAirSpecialsUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralDodgesUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralGroundDodgesUsed": number;
          /**
           *
           * 1
           *
           * 4
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralGroundNormalHit": number;
          /**
           *
           * 1
           *
           * 7
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralGroundNormalUsed": number;
          /**
           *
           * 0
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalNeutralGroundSpecialsHit": number;
          /**
           *
           * 6
           *
           * 10
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralGroundSpecialsUsed": number;
          /**
           *
           * 30
           *
           * 68
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralNormalAttacksHit": number;
          /**
           *
           * 12
           *
           * 22
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralNormalAttacksUsed": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralSpecialsHit": number;
          /**
           *
           * 9
           *
           * 15
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralSpecialsUsed": number;
          /**
           *
           * 22
           *
           * 57
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNormalAttacksHit": number;
          /**
           *
           * 37
           *
           * 143
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNormalAttacksUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalPlatformDropThroughs": number;
          /**
           *
           * 0
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalProjectileRingouts": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalProjectilesBlocked": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalProjectilesReflected": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalRightRingouts": number;
          /**
           *
           * 3
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalRingouts": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalRingoutsEnemyLowPercent": number;
          /**
           *
           * 1
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalRingoutsReceived": number;
          /**
           *
           * 2
           *
           * 3
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalRingoutsWithLessDamage": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalRingoutsWithMoreDamage": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalShieldBreaksFromShieldBreaker": number;
          /**
           *
           * 3
           *
           * 6
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideAirNormalHit": number;
          /**
           *
           * 5
           *
           * 31
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideAirNormalUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideAirSpecialsHit": number;
          /**
           *
           * 4
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideAirSpecialsUsed": number;
          /**
           *
           * 9
           *
           * 33
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideGroundNormalHit": number;
          /**
           *
           * 17
           *
           * 63
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideGroundNormalUsed": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideGroundSpecialsHit": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideGroundSpecialsUsed": number;
          /**
           *
           * 12
           *
           * 39
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideNormalAttacksHit": number;
          /**
           *
           * 22
           *
           * 94
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideNormalAttacksUsed": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideSpecialsHit": number;
          /**
           *
           * 5
           *
           * 4
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSideSpecialsUsed": number;
          /**
           *
           * 50.4275016784668
           *
           * 4.275000095367432
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSpecialDamageDealt": number;
          /**
           *
           * 3
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSpecialsHit": number;
          /**
           *
           * 21
           *
           * 43
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSpecialsUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalSweetSpotsHit": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalTauntsUsed": number;
          /**
           *
           * 1
           *
           * 3
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpAirNormalHit": number;
          /**
           *
           * 2
           *
           * 10
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpAirNormalUsed": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpAirSpecialsHit": number;
          /**
           *
           * 2
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpAirSpecialsUsed": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpGroundNormalHit": number;
          /**
           *
           * 1
           *
           * 6
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpGroundNormalUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpGroundSpecialsHit": number;
          /**
           *
           * 2
           *
           * 5
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpGroundSpecialsUsed": number;
          /**
           *
           * 2
           *
           * 4
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpNormalAttacksHit": number;
          /**
           *
           * 3
           *
           * 16
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpNormalAttacksUsed": number;
          /**
           *
           * 1
           *
           * 2
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpRingouts": number;
          /**
           *
           * 1
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpSpecialsHit": number;
          /**
           *
           * 4
           *
           * 7
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpSpecialsUsed": number;
          /**
           *
           * 1.7999999523162842
           *
           * 4.9666666984558105
           *
           * 0.8999999761581421
           *
           */
          "Stat:Game:Character:TotalWalkLeftTime": number;
          /**
           *
           * 1.7000000476837158
           *
           * 4.616666793823242
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalWalkRightTime": number;
          /**
           *
           * 3.5
           *
           * 9.583333015441895
           *
           * 0.8999999761581421
           *
           */
          "Stat:Game:Character:TotalWalkTime": number;
          /**
           *
           * 0.9166666865348816
           *
           * 0.6499999761581421
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalWallHangTime": number;
        };
      };
      PlayerNetworkStats: {
        /**
         *
         * 20.458072662353516
         *
         * 22.474082946777344
         *
         * 18.69588279724121
         *
         */
        BytesRecvPerFrame: number;
        /**
         *
         * 25.650310516357422
         *
         * 26.993146896362305
         *
         * 24.614572525024414
         *
         */
        BytesSendPerFrame: number;
        /**
         *
         * 0.44518834352493286
         *
         * 0.4438442587852478
         *
         * 0.3922589421272278
         *
         */
        CompressionRecvRatio: number;
        /**
         *
         * 126790
         *
         * 349337
         *
         * 27431
         *
         */
        CompressionRecvReduction: number;
        /**
         *
         * 0.6187708973884583
         *
         * 0.6134199500083923
         *
         * 0.574874222278595
         *
         */
        CompressionSendRatio: number;
        /**
         *
         * 78590
         *
         * 211024
         *
         * 17238
         *
         */
        CompressionSendReduction: number;
        /**
         *
         * 2
         *
         */
        InputDelayAverage: number;
        /**
         *
         * 2
         *
         */
        InputDelayFinal: number;
        /**
         *
         * 2
         *
         */
        InputDelayMax: number;
        /**
         *
         * 2
         *
         */
        InputDelayMin: number;
        /**
         *
         * 0.034882303327322006
         *
         * 0.03517819941043854
         *
         * 0
         *
         */
        LargeDeltaTickAverage: number;
        /**
         *
         * 1
         *
         * 0
         *
         */
        LargeDeltaTickCount: number;
        /**
         *
         * 0.034882303327322006
         *
         * 0.03517819941043854
         *
         * 0
         *
         */
        LargeDeltaTickMax: number;
        /**
         *
         * 0.034882303327322006
         *
         * 0.03517819941043854
         *
         * 0
         *
         */
        LargeDeltaTickMin: number;
        /**
         *
         * 0
         *
         */
        MessageRecvStallCount: number;
        /**
         *
         * 0
         *
         */
        OverridePredictedPercentAverage: number;
        /**
         *
         * 0
         *
         */
        OverridePredictedPercentFinal: number;
        /**
         *
         * 0
         *
         */
        OverridePredictedPercentMax: number;
        /**
         *
         * 0
         *
         */
        OverrideZeroedPercentAverage: number;
        /**
         *
         * 0
         *
         */
        OverrideZeroedPercentFinal: number;
        /**
         *
         * 0
         *
         */
        OverrideZeroedPercentMax: number;
        /**
         *
         * 0
         *
         */
        PacketLossAverage: number;
        /**
         *
         * 0
         *
         */
        PacketLossFinal: number;
        /**
         *
         * 0
         *
         */
        PacketLossMax: number;
        /**
         *
         * 16.684289932250977
         *
         * 28.427947998046875
         *
         * 17.772010803222656
         *
         */
        PingAverage: number;
        /**
         *
         * 16
         *
         * 28
         *
         * 17
         *
         */
        PingFinal: number;
        /**
         *
         * 22
         *
         * 36
         *
         * 21
         *
         */
        PingMax: number;
        /**
         *
         * 15
         *
         * 26
         *
         * 16
         *
         */
        PingMin: number;
        /**
         *
         * 0.007665901444852352
         *
         * 0.005257213953882456
         *
         * 0.29798516631126404
         *
         */
        RiftAverage: number;
        /**
         *
         * 0
         *
         */
        RiftFinal: number;
        /**
         *
         * 3
         *
         * 5
         *
         * 14
         *
         */
        RiftMax: number;
        /**
         *
         * -1
         *
         */
        RiftMin: number;
        /**
         *
         * 1.0294123888015747
         *
         * 1.565183401107788
         *
         * 0
         *
         */
        RollbackFramesAverage: number;
        /**
         *
         * 1
         *
         * 0
         *
         */
        RollbackFramesFinal: number;
        /**
         *
         * 2
         *
         * 4
         *
         * 0
         *
         */
        RollbackFramesMax: number;
        /**
         *
         * 1
         *
         * 0
         *
         */
        RollbackFramesMin: number;
        /**
         *
         * 1.0294123888015747
         *
         * 1.565183401107788
         *
         * 0
         *
         */
        RollbackFreqAverage: number;
        /**
         *
         * 1
         *
         * 0
         *
         */
        RollbackFreqFinal: number;
        /**
         *
         * 383
         *
         * 401
         *
         * 0
         *
         */
        RollbackFreqMax: number;
        /**
         *
         * 1
         *
         * 0
         *
         */
        RollbackFreqMin: number;
      };
      Score: number[];
      /**
       *
       * 1
       *
       * 0
       *
       */
      WinningTeamIndex: number;
    };
    /**
     *
     * 76
     *
     * 200
     *
     * 9
     *
     */
    MatchLength: number;
  }

  export interface Ssc_invoke_switch_custom_game_lobby_team_REQUEST {
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * 4
     *
     */
    TeamIndex: number;
  }

  export interface Ssc_invoke_toast_player_REQUEST {
    /**
     *
     * 67cf0e30410383470e2dd0e1
     *
     */
    ContainerMatchId: string;
    /**
     *
     * 62e95383b488ee2289aef406
     *
     */
    ToasteeId: string;
  }

  export interface Ssc_invoke_update_int_setting_for_custom_game_REQUEST {
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * NumRingoutsForWin
     *
     * MatchDuration
     *
     */
    SettingKey: string;
    /**
     *
     * 2
     *
     * 300
     *
     */
    SettingValue: number;
  }

  export interface Ssc_invoke_update_team_style_for_custom_game_REQUEST {
    /**
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     */
    MatchID: string;
    /**
     *
     * Solos
     *
     */
    TeamStyle: string;
  }

  export interface Virtual_commerce_purchases_id_toasts_gleamium_REQUEST {}
}
