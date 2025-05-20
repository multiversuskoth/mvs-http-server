export namespace MVSRequests {
  export interface Access_REQUEST {
    auth: {
      fail_on_missing: boolean;

      steam: string;
    };
    metadata: {
      Platform: string;
    };

    options: string[];
  }

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
        Crc: number;
        advanced_filter: {
          boolean: string;
          subfilters: any[];

          tags: string[];
        };
      };
      headers: {
        "x-hydra-http-method": string;
      };

      url: string;

      verb: string;
    }[];
  }

  export interface Commerce_products_REQUEST {}

  export interface Commerce_purchases_me_REQUEST {}

  export interface Commerce_steam_mtx_user_info_me_REQUEST {}

  export interface Datarouter_api_v1_public_data_clients_REQUEST {
    Events: {
      EventName: string;

      deploymentId: string;

      platform: string;

      source: string;
    }[];
  }

  export interface Drives_multiversus_sync_REQUEST {
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
    ids: string[];
  }

  export interface Matches_id_REQUEST {
    player_data: {
      ":id": {
        game_server_region_data: {
          latency: number;

          region_id: string;
        }[];
      };
    };
  }

  export interface Matches_all_id_REQUEST {}

  export interface Matches_matchmaking_1v1_retail_request_REQUEST {
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

  export interface Profiles_id_inventory_REQUEST {
    item_slugs: string[];
    advanced_filter: {
      boolean: string;
      subfilters: any[];

      tags: string[];
    };
  }

  export interface Profiles_bulk_REQUEST {
    ids: string[];
  }

  export interface Sessions_auth_token_REQUEST {
    code: string;

    grant_type: string;
  }

  export interface Social_me_blocked_REQUEST {}

  export interface Ssc_invoke_attempt_daily_refresh_REQUEST {}

  export interface Ssc_invoke_claim_mission_rewards_REQUEST {
    ContainerSlug: string;
    MissionsToClaim: {
      MissionControllerSlug: string;

      MissionGuid: string;

      MissionSlug: string;
    }[];
  }

  export interface Ssc_invoke_create_party_lobby_REQUEST {
    AllMultiplayParams: {
      "1": {
        MultiplayClusterSlug: string;

        MultiplayProfileId: string;

        MultiplayRegionId: string;
      };
      "2": {
        MultiplayClusterSlug: string;

        MultiplayProfileId: string;

        MultiplayRegionId: string;
      };
      "3": {
        MultiplayClusterSlug: string;

        MultiplayProfileId: string;

        MultiplayRegionId: string;
      };
      "4": {
        MultiplayClusterSlug: string;

        MultiplayProfileId: string;

        MultiplayRegionId: string;
      };
    };
    AutoPartyPreference: boolean;

    CrossplayPreference: number;

    GameplayPreferences: number;

    HissCrc: number;

    LobbyTemplate: string;

    LobbyType: number;

    Platform: string;

    Version: string;
  }

  export interface Ssc_invoke_game_launch_event_REQUEST {
    account_platform_id: string;

    hydra_public_id: string;
    is_production: boolean;

    os: string;

    platform_name: string;

    resolution: string;

    user_name: string;
  }

  export interface Ssc_invoke_get_or_create_mission_object_REQUEST {}

  export interface Ssc_invoke_hiss_amalgamation_REQUEST {
    Crc: number;
  }

  export interface Ssc_invoke_lock_lobby_loadout_REQUEST {
    AutoPartyPreference: boolean;

    CrossplayPreference: number;

    GameplayPreferences: number;

    HissCrc: number;
    Loadout: {
      Character: string;

      Skin: string;
    };

    LobbyId: string;

    LobbyTemplate: string;

    Platform: string;

    Version: string;
  }

  export interface Ssc_invoke_perks_lock_REQUEST {
    ContainerMatchId: string;

    Perks: string[];
  }

  export interface Ssc_invoke_set_lobby_joinable_REQUEST {
    AutoPartyPreference: boolean;

    CrossplayPreference: number;

    GameplayPreferences: number;

    HissCrc: number;

    LobbyId: string;

    LobbyTemplate: string;

    Platform: string;

    Version: string;
  }

  export interface Ssc_invoke_set_ready_for_lobby_REQUEST {
    AutoPartyPreference: boolean;

    CrossplayPreference: number;

    GameplayPreferences: number;

    HissCrc: number;

    LobbyId: string;

    LobbyTemplate: string;

    MatchID: string;

    Platform: string;
    Ready: boolean;

    Version: string;
  }

  export interface Ssc_invoke_submit_end_of_match_stats_REQUEST {
    ContainerMatchId: string;
    EndOfMatchStats: {
      PlayerMissionUpdates: {
        ":id": {
          "Fighter:AgentSmith:Silence": number;

          "Fighter:AgentSmith:TeleAlly": number;

          "Fighter:BananaGuard:Buff": number;

          "Fighter:BananaGuard:Facebox": number;

          "Fighter:Batman:GrappleAlly": number;

          "Fighter:C025:lenoregrab": number;

          "Fighter:Finn:AirPojectileDestroy": number;

          "Fighter:Finn:BuyBmo": number;

          "Fighter:Garnet:FullBuff": number;

          "Fighter:Harley:BombSave": number;

          "Fighter:IronGiant:RageMission": number;

          "Fighter:Jason:RageHit": number;

          "Fighter:Jerry:AllyAttach": number;

          "Fighter:Lebron:Defense": number;

          "Fighter:Lebron:Pass": number;

          "Fighter:Marvin:ReverseProjectile": number;

          "Fighter:Marvin:bubble": number;

          "Fighter:Morty:AllySave": number;

          "Fighter:Morty:SplitNade": number;

          "Fighter:Reindog:IceCleanse": number;

          "Fighter:Reindog:LoveLeashAlly": number;

          "Fighter:Rick:AllySeed": number;

          "Fighter:Rick:PortalKB": number;

          "Fighter:Shaggy:EnragedAttackUsed": number;

          "Fighter:Shaggy:FinishedCombo": number;

          "Fighter:Shaggy:RageBuildComplete": number;

          "Fighter:Shaggy:SandwichHeal": number;

          "Fighter:Steven:Bubblestack": number;

          "Fighter:Steven:EnemyBubble": number;

          "Fighter:Taz:Chicken": number;

          "Fighter:Taz:Eat": number;

          "Hitbox:Stripe:Kickflip": number;

          "Hitbox:Velma:GrabAlly": number;

          "Hitbox:Velma:Van": number;

          "Marceline:Powerslide": number;

          "Objective:Match:Boss:M015:Defeated": number;

          "Objective:Match:Character:BugsBunny:HealSandwich": number;

          "Objective:Match:Character:Stripe:Gun": number;

          "Objective:Match:Character:WonderWoman:AllyLasso": number;

          "Objective:Match:Character:WonderWoman:FullChargeBubble": number;

          "Objective:Match:Enemies:AcmeSkyDronesDestroyed": number;

          "Objective:Match:Enemies:BuffApplied:Chicken": number;

          "Objective:Match:Enemies:BuffApplied:Frozen": number;

          "Objective:Match:Enemies:BuffApplied:Ignited": number;

          "Objective:Match:Enemies:BuffApplied:Shocked": number;

          "Objective:Match:Enemies:BuffApplied:Silence": number;

          "Objective:Match:Enemies:BuffApplied:Weakened": number;

          "Objective:Match:Hazards:SafetySpotlightAttacksDodged": number;

          "Objective:Match:Hazards:SafetySpotlightAttacksTaken": number;

          "Objective:Match:Hazards:SafetySpotlightHitsOutsideSpotlight": number;

          "Objective:Match:Hazards:TravelTube:HitOpponentsInto": number;

          "Objective:Match:Map:M007:EmblemOpened": number;

          "Objective:Match:PlayCoOp": number;

          "Objective:Match:PopAllyBubble": number;

          "Objective:Match:Rifts:LazarusPit:BuffedRingouts": number;

          "Objective:Match:Rifts:LazarusPit:FellIn": number;

          "Objective:Match:Rifts:LazarusPit:TempHealth": number;

          "Objective:Match:Special:DefenseHealth": number;

          "Objective:Match:Special:DefenseHealth:CollectEvidence": number;

          "Objective:Match:Special:DoorPortalEnemy": number;

          "Objective:Match:Special:DoorPortalProjectile": number;

          "Objective:Match:Special:GalleryBalloonsDestroyed": number;

          "Objective:Match:Special:GalleryTargetsDestroyed": number;

          "Objective:Match:Special:GhostHitOpponent": number;

          "Objective:Match:Special:GhostHitSelf": number;

          "Objective:Match:Special:GoblinTreasureCollected": number;

          "Objective:Match:Special:GoblinTreasureCollected:Rare": number;

          "Objective:Match:Special:GolfCount": number;

          "Objective:Match:Special:GolfHolesCompleted": number;

          "Objective:Match:Special:JumpRopeJumps": number;

          "Objective:Match:Special:RacePlacement": number;

          "Objective:Match:Special:ShmupEnemyDestroyed": number;

          "Objective:Match:Special:ShootingGalleryScore": number;

          "Objective:Match:Special:TargetsDestroyed": number;

          "Objective:Match:Special:TreasureCollected": number;

          "Objective:Match:Special:VolleyballShutout": number;

          "Stat:Game:Character:DebuffsCleansed": number;

          "Stat:Game:Character:Stock:DamageTaken": number;

          "Stat:Game:Character:TotalAirAttacksHit": number;

          "Stat:Game:Character:TotalAirAttacksUsed": number;

          "Stat:Game:Character:TotalAirDamageDealt": number;

          "Stat:Game:Character:TotalAirNormalsHit": number;

          "Stat:Game:Character:TotalAirNormalsUsed": number;

          "Stat:Game:Character:TotalAirSpecialsHit": number;

          "Stat:Game:Character:TotalAirSpecialsUsed": number;

          "Stat:Game:Character:TotalAirTime": number;

          "Stat:Game:Character:TotalArmorBreaks": number;

          "Stat:Game:Character:TotalArmorHitsTaken": number;

          "Stat:Game:Character:TotalAssists": number;

          "Stat:Game:Character:TotalAttackDamageDealt": number;

          "Stat:Game:Character:TotalAttacksDodged": number;

          "Stat:Game:Character:TotalAttacksHit": number;

          "Stat:Game:Character:TotalAttacksParried": number;

          "Stat:Game:Character:TotalAttacksUsed": number;

          "Stat:Game:Character:TotalChargeAttacksHit": number;

          "Stat:Game:Character:TotalChargeAttacksUsed": number;

          "Stat:Game:Character:TotalCooldownAbilitiesStarted": number;

          "Stat:Game:Character:TotalCrouchTime": number;

          "Stat:Game:Character:TotalDamageAdded": number;

          "Stat:Game:Character:TotalDamageDealt": number;

          "Stat:Game:Character:TotalDamageDodged": number;

          "Stat:Game:Character:TotalDamageMitigated": number;

          "Stat:Game:Character:TotalDamageParried": number;

          "Stat:Game:Character:TotalDamageTaken": number;

          "Stat:Game:Character:TotalDashAttacksHit": number;

          "Stat:Game:Character:TotalDashAttacksUsed": number;

          "Stat:Game:Character:TotalDirectionalAirDodgesUsed": number;

          "Stat:Game:Character:TotalDirectionalDodgesUsed": number;

          "Stat:Game:Character:TotalDirectionalGroundDodgesUsed": number;

          "Stat:Game:Character:TotalDodgesUsed": number;

          "Stat:Game:Character:TotalDoubleJumps": number;

          "Stat:Game:Character:TotalDoubleRingouts": number;

          "Stat:Game:Character:TotalDownAirNormalHit": number;

          "Stat:Game:Character:TotalDownAirNormalUsed": number;

          "Stat:Game:Character:TotalDownAirSpecialsHit": number;

          "Stat:Game:Character:TotalDownAirSpecialsUsed": number;

          "Stat:Game:Character:TotalDownGroundNormalHit": number;

          "Stat:Game:Character:TotalDownGroundNormalUsed": number;

          "Stat:Game:Character:TotalDownGroundSpecialsHit": number;

          "Stat:Game:Character:TotalDownGroundSpecialsUsed": number;

          "Stat:Game:Character:TotalDownNormalAttacksHit": number;

          "Stat:Game:Character:TotalDownNormalAttacksUsed": number;

          "Stat:Game:Character:TotalDownRingouts": number;

          "Stat:Game:Character:TotalDownSpecialsHit": number;

          "Stat:Game:Character:TotalDownSpecialsUsed": number;

          "Stat:Game:Character:TotalDownspikeRingouts": number;

          "Stat:Game:Character:TotalElectricAttacksHit": number;

          "Stat:Game:Character:TotalFireAttacksHit": number;

          "Stat:Game:Character:TotalFullyChargedAttacksHit": number;

          "Stat:Game:Character:TotalGreyHealthReceived": number;

          "Stat:Game:Character:TotalGroundAttacksHit": number;

          "Stat:Game:Character:TotalGroundAttacksUsed": number;

          "Stat:Game:Character:TotalGroundDamageDealt": number;

          "Stat:Game:Character:TotalGroundNormalsHit": number;

          "Stat:Game:Character:TotalGroundNormalsUsed": number;

          "Stat:Game:Character:TotalGroundSpecialsHit": number;

          "Stat:Game:Character:TotalGroundSpecialsUsed": number;

          "Stat:Game:Character:TotalHealingReceived": number;

          "Stat:Game:Character:TotalHitsTaken": number;

          "Stat:Game:Character:TotalIceAttacksHit": number;

          "Stat:Game:Character:TotalJumps": number;

          "Stat:Game:Character:TotalKnockbackAdded": number;

          "Stat:Game:Character:TotalKnockbackMitigated": number;

          "Stat:Game:Character:TotalLeftRingouts": number;

          "Stat:Game:Character:TotalNeutralAirDodgesUsed": number;

          "Stat:Game:Character:TotalNeutralAirNormalHit": number;

          "Stat:Game:Character:TotalNeutralAirNormalUsed": number;

          "Stat:Game:Character:TotalNeutralAirSpecialsHit": number;

          "Stat:Game:Character:TotalNeutralAirSpecialsUsed": number;

          "Stat:Game:Character:TotalNeutralDodgesUsed": number;

          "Stat:Game:Character:TotalNeutralGroundDodgesUsed": number;

          "Stat:Game:Character:TotalNeutralGroundNormalHit": number;

          "Stat:Game:Character:TotalNeutralGroundNormalUsed": number;

          "Stat:Game:Character:TotalNeutralGroundSpecialsHit": number;

          "Stat:Game:Character:TotalNeutralGroundSpecialsUsed": number;

          "Stat:Game:Character:TotalNeutralNormalAttacksHit": number;

          "Stat:Game:Character:TotalNeutralNormalAttacksUsed": number;

          "Stat:Game:Character:TotalNeutralSpecialsHit": number;

          "Stat:Game:Character:TotalNeutralSpecialsUsed": number;

          "Stat:Game:Character:TotalNormalAttacksHit": number;

          "Stat:Game:Character:TotalNormalAttacksUsed": number;

          "Stat:Game:Character:TotalPlatformDropThroughs": number;

          "Stat:Game:Character:TotalProjectileRingouts": number;

          "Stat:Game:Character:TotalProjectilesBlocked": number;

          "Stat:Game:Character:TotalProjectilesReflected": number;

          "Stat:Game:Character:TotalRightRingouts": number;

          "Stat:Game:Character:TotalRingouts": number;

          "Stat:Game:Character:TotalRingoutsEnemyLowPercent": number;

          "Stat:Game:Character:TotalRingoutsReceived": number;

          "Stat:Game:Character:TotalRingoutsWithLessDamage": number;

          "Stat:Game:Character:TotalRingoutsWithMoreDamage": number;

          "Stat:Game:Character:TotalShieldBreaksFromShieldBreaker": number;

          "Stat:Game:Character:TotalSideAirNormalHit": number;

          "Stat:Game:Character:TotalSideAirNormalUsed": number;

          "Stat:Game:Character:TotalSideAirSpecialsHit": number;

          "Stat:Game:Character:TotalSideAirSpecialsUsed": number;

          "Stat:Game:Character:TotalSideGroundNormalHit": number;

          "Stat:Game:Character:TotalSideGroundNormalUsed": number;

          "Stat:Game:Character:TotalSideGroundSpecialsHit": number;

          "Stat:Game:Character:TotalSideGroundSpecialsUsed": number;

          "Stat:Game:Character:TotalSideNormalAttacksHit": number;

          "Stat:Game:Character:TotalSideNormalAttacksUsed": number;

          "Stat:Game:Character:TotalSideSpecialsHit": number;

          "Stat:Game:Character:TotalSideSpecialsUsed": number;

          "Stat:Game:Character:TotalSpecialDamageDealt": number;

          "Stat:Game:Character:TotalSpecialsHit": number;

          "Stat:Game:Character:TotalSpecialsUsed": number;

          "Stat:Game:Character:TotalSweetSpotsHit": number;

          "Stat:Game:Character:TotalTauntsUsed": number;

          "Stat:Game:Character:TotalUpAirNormalHit": number;

          "Stat:Game:Character:TotalUpAirNormalUsed": number;

          "Stat:Game:Character:TotalUpAirSpecialsHit": number;

          "Stat:Game:Character:TotalUpAirSpecialsUsed": number;

          "Stat:Game:Character:TotalUpGroundNormalHit": number;

          "Stat:Game:Character:TotalUpGroundNormalUsed": number;

          "Stat:Game:Character:TotalUpGroundSpecialsHit": number;

          "Stat:Game:Character:TotalUpGroundSpecialsUsed": number;

          "Stat:Game:Character:TotalUpNormalAttacksHit": number;

          "Stat:Game:Character:TotalUpNormalAttacksUsed": number;

          "Stat:Game:Character:TotalUpRingouts": number;

          "Stat:Game:Character:TotalUpSpecialsHit": number;

          "Stat:Game:Character:TotalUpSpecialsUsed": number;

          "Stat:Game:Character:TotalWalkLeftTime": number;

          "Stat:Game:Character:TotalWalkRightTime": number;

          "Stat:Game:Character:TotalWalkTime": number;

          "Stat:Game:Character:TotalWallHangTime": number;
        };
      };
      PlayerNetworkStats: {
        BytesRecvPerFrame: number;

        BytesSendPerFrame: number;

        CompressionRecvRatio: number;

        CompressionRecvReduction: number;

        CompressionSendRatio: number;

        CompressionSendReduction: number;

        InputDelayAverage: number;

        InputDelayFinal: number;

        InputDelayMax: number;

        InputDelayMin: number;

        LargeDeltaTickAverage: number;

        LargeDeltaTickCount: number;

        LargeDeltaTickMax: number;

        LargeDeltaTickMin: number;

        MessageRecvStallCount: number;

        OverridePredictedPercentAverage: number;

        OverridePredictedPercentFinal: number;

        OverridePredictedPercentMax: number;

        OverrideZeroedPercentAverage: number;

        OverrideZeroedPercentFinal: number;

        OverrideZeroedPercentMax: number;

        PacketLossAverage: number;

        PacketLossFinal: number;

        PacketLossMax: number;

        PingAverage: number;

        PingFinal: number;

        PingMax: number;

        PingMin: number;

        RiftAverage: number;

        RiftFinal: number;

        RiftMax: number;

        RiftMin: number;

        RollbackFramesAverage: number;

        RollbackFramesFinal: number;

        RollbackFramesMax: number;

        RollbackFramesMin: number;

        RollbackFreqAverage: number;

        RollbackFreqFinal: number;

        RollbackFreqMax: number;

        RollbackFreqMin: number;
      };

      Score: number[];

      WinningTeamIndex: number;
    };

    MatchLength: number;
  }

  export interface Ssc_invoke_toast_player_REQUEST {
    ContainerMatchId: string;

    ToasteeId: string;
  }
}
