//* AUTO GENERATED */
export namespace MVSRequests {
  export interface Access_REQUEST {
    auth: {
      fail_on_missing: boolean;
      /**
       *
       * 0802109DEF91B1021800204E2A80015AFAA999B9283496D5A7262B8A5A71C94C9D77E7C9DD70A5FCAF0A178A24452B4FDD36A71372AD09173EFF958D65B42715AC027D638D6CBE976D8C743C77727D54F7D2B5490A1BB98C14681EE49618AEA41E7208B7EC0B5AA564E11EBEE4AF19E116C852791F160F5051649DF80D1332050062C324B525558A831C55E2C78ED6
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
    /**
     *
     * configuration
     *
     */
    options: string[];
  }

  export interface Accounts_wb_network_bulk_REQUEST {
    /**
     *
     * p3a525c56c9c9491ea11deaa2bdbcd074
     *
     */
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
          /**
           *
           * currency
           *
           */
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
       */
      url: string;
      /**
       *
       * PUT
       *
       */
      verb: string;
    }[];
  }

  export interface Commerce_products_REQUEST {}

  export interface Commerce_purchases_me_REQUEST {}

  export interface Commerce_steam_mtx_user_info_me_REQUEST {}

  export interface Datarouter_api_v1_public_data_clients_REQUEST {
    Events: {
      /**
       *
       * GameHeartbeat
       *
       */
      EventName: string;
      /**
       *
       * dc943966edb54a6eb9c1334ca8cc1990
       *
       * 29da23b21f7f41319c7fa5e86e20dc2b
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
    /**
     *
     * multiversus/academiamrt_storebackground-3464663366363666303637346237346635623838653130346564346135616261.png
     *
     */
    keys: string[];
  }

  export interface File_storage_REQUEST {}

  export interface File_storage_beginnermode_carousel_keyart_REQUEST {}

  export interface File_storage_beginnermode_carousel_thumbnail_REQUEST {}

  export interface File_storage_harley_rift_s5_keyart_REQUEST {}

  export interface File_storage_harley_rift_s5_thumbnail_REQUEST {}

  export interface File_storage_s5_bp_carousel_keyart_REQUEST {}

  export interface File_storage_s5_bp_carousel_thumbnail_REQUEST {}

  export interface File_storage_t_discord_qa_carousel_keyart_REQUEST {}

  export interface File_storage_t_discord_qa_carousel_thumbnail_REQUEST {}

  export interface File_storage_wonderwoman_arena_keyart_REQUEST {}

  export interface File_storage_wonderwoman_arena_thumbnail_REQUEST {}

  export interface Friends_me_REQUEST {}

  export interface Friends_me_invitations_incoming_REQUEST {}

  export interface Friends_me_invitations_outgoing_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_battlepass_variant_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_currency_variant_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_fighter_road_layout_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_fighter_variant_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_main_variant_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_prestige_variant_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_rift_variant_id_REQUEST {}

  export interface Layout_dokken_layout_type_personalized_skin_variant_id_REQUEST {}

  export interface Leaderboards_bulk_score_and_rank_id_REQUEST {
    /**
     *
     * ranked_season5_1v1_character_Jason
     *
     */
    ids: string[];
  }

  export interface Matches_id_REQUEST {
    player_data: {
      ":id": {
        game_server_region_data: {
          /**
           *
           * 0.04337269812822342
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

  export interface Matches_all_id_REQUEST {}

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
      /**
       *
       * All
       *
       */
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
     * 67d45cd0b8655ea25ca3a0a9
     *
     */
    match: string;
  }

  export interface Profiles_id_inventory_REQUEST {
    /**
     *
     * gleamium
     *
     */
    item_slugs: string[];
    advanced_filter: {
      /**
       *
       * any
       *
       */
      boolean: string;
      subfilters: any[];
      /**
       *
       * currency
       *
       */
      tags: string[];
    };
  }

  export interface Profiles_bulk_REQUEST {
    /**
     *
     * 62ef70cecd66b47f1cc1f5ea
     *
     */
    ids: string[];
  }

  export interface Sessions_auth_token_REQUEST {
    /**
     *
     * I+MPokHx/JkCFmuHpcEiaqRG+8IJX/+xaKk2jiZBgAL/w8IIGsREtPP1rE6cBwjdioTLgasxCk4+oFHMwDtsieaJu3H6OI5faBq3SMTVCg4=
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

  export interface Social_me_blocked_REQUEST {}

  export interface Ssc_invoke_attempt_daily_refresh_REQUEST {}

  export interface Ssc_invoke_claim_mission_rewards_REQUEST {
    /**
     *
     * miscon_battlepassdaily_s5
     *
     * miscon_battlepassweekly_s5
     *
     */
    ContainerSlug: string;
    MissionsToClaim: {
      /**
       *
       * misctl_battlepass_daily_hard_new
       *
       * misctl_battlepass_weekly_new
       *
       */
      MissionControllerSlug: string;
      /**
       *
       * f367cc26-94aa-472e-afb7-f5beca415eeb
       *
       * e2d513a5-227d-439a-a7c5-d95a6fdfd18d
       *
       */
      MissionGuid: string;
      /**
       *
       * mis_stats_total_down_normals_hith
       *
       * mis_ringout_pvp_weekly
       *
       */
      MissionSlug: string;
    }[];
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

  export interface Ssc_invoke_hiss_amalgamation_REQUEST {
    /**
     *
     * 1167552915
     *
     */
    Crc: number;
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
       * character_wonder_woman
       *
       */
      Character: string;
      /**
       *
       * skin_wonder_woman_default
       *
       */
      Skin: string;
    };
    /**
     *
     * 67d45cd0b8655ea25ca3a0a9
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
     * 67d45cfdda22dc702a4383d7
     *
     */
    ContainerMatchId: string;
    /**
     *
     * perk_gen_well_rounded
     *
     */
    Perks: string[];
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
     * 67d45cd0b8655ea25ca3a0a9
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
     * 67d45cd0b8655ea25ca3a0a9
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
     * 67d45cd0b8655ea25ca3a0a9
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

  export interface Ssc_invoke_submit_end_of_match_stats_REQUEST {
    /**
     *
     * 67d45cfdda22dc702a4383d7
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
           * 1
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
           * 8
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
           * 123.70502471923828
           *
           */
          "Stat:Game:Character:Stock:DamageTaken": number;
          /**
           *
           * 17
           *
           */
          "Stat:Game:Character:TotalAirAttacksHit": number;
          /**
           *
           * 53
           *
           */
          "Stat:Game:Character:TotalAirAttacksUsed": number;
          /**
           *
           * 64.50927734375
           *
           */
          "Stat:Game:Character:TotalAirDamageDealt": number;
          /**
           *
           * 16
           *
           */
          "Stat:Game:Character:TotalAirNormalsHit": number;
          /**
           *
           * 44
           *
           */
          "Stat:Game:Character:TotalAirNormalsUsed": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalAirSpecialsHit": number;
          /**
           *
           * 9
           *
           */
          "Stat:Game:Character:TotalAirSpecialsUsed": number;
          /**
           *
           * 69.83333587646484
           *
           */
          "Stat:Game:Character:TotalAirTime": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalArmorBreaks": number;
          /**
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
           * 89.55269622802734
           *
           */
          "Stat:Game:Character:TotalAttackDamageDealt": number;
          /**
           *
           * 9
           *
           */
          "Stat:Game:Character:TotalAttacksDodged": number;
          /**
           *
           * 33
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
           * 95
           *
           */
          "Stat:Game:Character:TotalAttacksUsed": number;
          /**
           *
           * 5
           *
           */
          "Stat:Game:Character:TotalChargeAttacksHit": number;
          /**
           *
           * 43
           *
           */
          "Stat:Game:Character:TotalChargeAttacksUsed": number;
          /**
           *
           * 19
           *
           */
          "Stat:Game:Character:TotalCooldownAbilitiesStarted": number;
          /**
           *
           * 0.30000001192092896
           *
           */
          "Stat:Game:Character:TotalCrouchTime": number;
          /**
           *
           * 14.5
           *
           */
          "Stat:Game:Character:TotalDamageAdded": number;
          /**
           *
           * 133.38719177246094
           *
           */
          "Stat:Game:Character:TotalDamageDealt": number;
          /**
           *
           * 58.42000198364258
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
           * 376.3334655761719
           *
           */
          "Stat:Game:Character:TotalDamageTaken": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDashAttacksHit": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalDashAttacksUsed": number;
          /**
           *
           * 17
           *
           */
          "Stat:Game:Character:TotalDirectionalAirDodgesUsed": number;
          /**
           *
           * 33
           *
           */
          "Stat:Game:Character:TotalDirectionalDodgesUsed": number;
          /**
           *
           * 16
           *
           */
          "Stat:Game:Character:TotalDirectionalGroundDodgesUsed": number;
          /**
           *
           * 33
           *
           */
          "Stat:Game:Character:TotalDodgesUsed": number;
          /**
           *
           * 5
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
           * 5
           *
           */
          "Stat:Game:Character:TotalDownAirNormalHit": number;
          /**
           *
           * 11
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
           * 0
           *
           */
          "Stat:Game:Character:TotalDownAirSpecialsUsed": number;
          /**
           *
           * 4
           *
           */
          "Stat:Game:Character:TotalDownGroundNormalHit": number;
          /**
           *
           * 6
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
           */
          "Stat:Game:Character:TotalDownGroundSpecialsUsed": number;
          /**
           *
           * 9
           *
           */
          "Stat:Game:Character:TotalDownNormalAttacksHit": number;
          /**
           *
           * 17
           *
           */
          "Stat:Game:Character:TotalDownNormalAttacksUsed": number;
          /**
           *
           * 0
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
           * 2
           *
           */
          "Stat:Game:Character:TotalFullyChargedAttacksHit": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalGreyHealthReceived": number;
          /**
           *
           * 16
           *
           */
          "Stat:Game:Character:TotalGroundAttacksHit": number;
          /**
           *
           * 42
           *
           */
          "Stat:Game:Character:TotalGroundAttacksUsed": number;
          /**
           *
           * 51.29191970825195
           *
           */
          "Stat:Game:Character:TotalGroundDamageDealt": number;
          /**
           *
           * 11
           *
           */
          "Stat:Game:Character:TotalGroundNormalsHit": number;
          /**
           *
           * 31
           *
           */
          "Stat:Game:Character:TotalGroundNormalsUsed": number;
          /**
           *
           * 5
           *
           */
          "Stat:Game:Character:TotalGroundSpecialsHit": number;
          /**
           *
           * 11
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
           * 53
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
           * 23
           *
           */
          "Stat:Game:Character:TotalJumps": number;
          /**
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
           * 2
           *
           */
          "Stat:Game:Character:TotalNeutralAirNormalHit": number;
          /**
           *
           * 7
           *
           */
          "Stat:Game:Character:TotalNeutralAirNormalUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralAirSpecialsHit": number;
          /**
           *
           * 8
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
           * 2
           *
           */
          "Stat:Game:Character:TotalNeutralGroundNormalHit": number;
          /**
           *
           * 9
           *
           */
          "Stat:Game:Character:TotalNeutralGroundNormalUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralGroundSpecialsHit": number;
          /**
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalNeutralGroundSpecialsUsed": number;
          /**
           *
           * 31
           *
           */
          "Stat:Game:Character:TotalNeutralNormalAttacksHit": number;
          /**
           *
           * 16
           *
           */
          "Stat:Game:Character:TotalNeutralNormalAttacksUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalNeutralSpecialsHit": number;
          /**
           *
           * 11
           *
           */
          "Stat:Game:Character:TotalNeutralSpecialsUsed": number;
          /**
           *
           * 27
           *
           */
          "Stat:Game:Character:TotalNormalAttacksHit": number;
          /**
           *
           * 75
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
           * 1
           *
           */
          "Stat:Game:Character:TotalRightRingouts": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalRingouts": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalRingoutsEnemyLowPercent": number;
          /**
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalRingoutsReceived": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalRingoutsWithLessDamage": number;
          /**
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
           * 10
           *
           */
          "Stat:Game:Character:TotalSideAirNormalHit": number;
          /**
           *
           * 23
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
           * 0
           *
           */
          "Stat:Game:Character:TotalSideAirSpecialsUsed": number;
          /**
           *
           * 3
           *
           */
          "Stat:Game:Character:TotalSideGroundNormalHit": number;
          /**
           *
           * 14
           *
           */
          "Stat:Game:Character:TotalSideGroundNormalUsed": number;
          /**
           *
           * 5
           *
           */
          "Stat:Game:Character:TotalSideGroundSpecialsHit": number;
          /**
           *
           * 8
           *
           */
          "Stat:Game:Character:TotalSideGroundSpecialsUsed": number;
          /**
           *
           * 13
           *
           */
          "Stat:Game:Character:TotalSideNormalAttacksHit": number;
          /**
           *
           * 37
           *
           */
          "Stat:Game:Character:TotalSideNormalAttacksUsed": number;
          /**
           *
           * 5
           *
           */
          "Stat:Game:Character:TotalSideSpecialsHit": number;
          /**
           *
           * 8
           *
           */
          "Stat:Game:Character:TotalSideSpecialsUsed": number;
          /**
           *
           * 26.24850082397461
           *
           */
          "Stat:Game:Character:TotalSpecialDamageDealt": number;
          /**
           *
           * 6
           *
           */
          "Stat:Game:Character:TotalSpecialsHit": number;
          /**
           *
           * 20
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
           */
          "Stat:Game:Character:TotalUpAirNormalHit": number;
          /**
           *
           * 5
           *
           */
          "Stat:Game:Character:TotalUpAirNormalUsed": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalUpAirSpecialsHit": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalUpAirSpecialsUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpGroundNormalHit": number;
          /**
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
           * 0
           *
           */
          "Stat:Game:Character:TotalUpGroundSpecialsUsed": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalUpNormalAttacksHit": number;
          /**
           *
           * 5
           *
           */
          "Stat:Game:Character:TotalUpNormalAttacksUsed": number;
          /**
           *
           * 0
           *
           */
          "Stat:Game:Character:TotalUpRingouts": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalUpSpecialsHit": number;
          /**
           *
           * 1
           *
           */
          "Stat:Game:Character:TotalUpSpecialsUsed": number;
          /**
           *
           * 5.7833333015441895
           *
           */
          "Stat:Game:Character:TotalWalkLeftTime": number;
          /**
           *
           * 4.449999809265137
           *
           */
          "Stat:Game:Character:TotalWalkRightTime": number;
          /**
           *
           * 10.233333587646484
           *
           */
          "Stat:Game:Character:TotalWalkTime": number;
          /**
           *
           * 1.2166666984558105
           *
           */
          "Stat:Game:Character:TotalWallHangTime": number;
        };
      };
      PlayerNetworkStats: {
        /**
         *
         * 22.971542358398438
         *
         */
        BytesRecvPerFrame: number;
        /**
         *
         * 27.309011459350586
         *
         */
        BytesSendPerFrame: number;
        /**
         *
         * 0.4445424973964691
         *
         */
        CompressionRecvRatio: number;
        /**
         *
         * 236025
         *
         */
        CompressionRecvReduction: number;
        /**
         *
         * 0.6133713722229004
         *
         */
        CompressionSendRatio: number;
        /**
         *
         * 141549
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
         * 0
         *
         */
        LargeDeltaTickAverage: number;
        /**
         *
         * 0
         *
         */
        LargeDeltaTickCount: number;
        /**
         *
         * 0
         *
         */
        LargeDeltaTickMax: number;
        /**
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
         * 31.13129997253418
         *
         */
        PingAverage: number;
        /**
         *
         * 30
         *
         */
        PingFinal: number;
        /**
         *
         * 38
         *
         */
        PingMax: number;
        /**
         *
         * 29
         *
         */
        PingMin: number;
        /**
         *
         * 0.010494167916476727
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
         * 5
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
         * 3.20731782913208
         *
         */
        RollbackFramesAverage: number;
        /**
         *
         * 2
         *
         */
        RollbackFramesFinal: number;
        /**
         *
         * 10
         *
         */
        RollbackFramesMax: number;
        /**
         *
         * 1
         *
         */
        RollbackFramesMin: number;
        /**
         *
         * 3.20731782913208
         *
         */
        RollbackFreqAverage: number;
        /**
         *
         * 2
         *
         */
        RollbackFreqFinal: number;
        /**
         *
         * 4390
         *
         */
        RollbackFreqMax: number;
        /**
         *
         * 1
         *
         */
        RollbackFreqMin: number;
      };
      /**
       *
       * 3
       *
       */
      Score: number[];
      /**
       *
       * 0
       *
       */
      WinningTeamIndex: number;
    };
    /**
     *
     * 131
     *
     */
    MatchLength: number;
  }

  export interface Ssc_invoke_toast_player_REQUEST {
    /**
     *
     * 67d45cfdda22dc702a4383d7
     *
     */
    ContainerMatchId: string;
    /**
     *
     * 665a7f968ec47506466fbd2d
     *
     */
    ToasteeId: string;
  }
}
