import {ServerConfiguration} from "../config/serverConfiguration";
import { Account } from "../database/Account";
import Characters from "../enums/characters";
import {PartialRecord} from "../utils/partialRecord";

export namespace MVSResponses {
  enum SeasonalName {
    season1 = "Season:SeasonOne",
    season2 = "Season:SeasonTwo",
    season3 = "Season:SeasonThree",
    season4 = "Season:SeasonFour",
    season5 = "Season:SeasonFive",
  }

  export interface Access_RESPONSE {
    account: {
      auth: {
        wb_network: {

          created_at: number;

          id: string;
        }[];
      };
      connections: {

        id: string;

        last_used: number;

        metadata: string;

        realtime_end_time: number;

        realtime_start_time: number;

        start_time: number;
        status: {
          current_environment: boolean;
          environment: {

            id: string;
          };
        };
      }[];

      created_at: number;
      data: {

        EULAAcceptTimestamp: number;

        EULAAcceptVersion: number;

        LastLoginPlatform: string;

        LastPlayedCharacterSlug: string;
      };
      deleted: boolean;
      email_verification: {

        state: string;
      };
      external_accounts: {};

      id: string;
      identity: {
        alternate: {
          steam: {

            avatar: string | null;
            email?: string | null;

            id?: string;

            username: string;
          } | null;
          wb_network: {
            avatar: string | null;
            email: string | null;

            id?: string;

            username: string;
          } | null;
        };

        avatar: string | null;

        current_platform: string;
        default_username: boolean;
        is_cross_platform: boolean;
        personal_data: {};

        platforms: string[];

        username: string;
        usernames: {

          auth: string;

          username: string;
        }[];
      };

      locale: string;
      opt_ins: {
        wbplay_optin: boolean;
      };
      orphaned: boolean;
      orphaned_reason: string | null;

      points: number;

      presence: string;

      presence_state: number;
      privacy_levels: {
        clan: {

          invitation: string;
        };
        match: {

          invitation: string;
        };
        presence: {

          state: string;
        };
        relationship: {

          follow: string;
        };
      };

      public_id: string;
      restriction_status: {};
      server_data: {

        AntiCheatServerKick: number;

        LastDailyRefresh: number;

        LastKnownDebugDelta: number;

        LastLoginPlatform: string;

        LastLoginTime: number;

        LastLogoutTime: number;

        LastRefreshBattlepassEvent: string;

        LastRefreshSeason: string;

        LastWeeklyRefresh: number;
        OpenBeta: boolean;
        ProfileIcon: {

          AssetPath: string;

          Slug: string;
        };

        RestedXP: number;

        RetroactiveRiftBattlepassPayoutTime: number;
        Transforms: {
          BannerKnightSlugFixed?: boolean;

          CharacterCurrencyRoundUp?: number;
          FixRankedCharactersInGold?: boolean;
          GoldStatTracker?: boolean;
          MmrSeason4?: boolean;
          OpenBetaFreebies?: boolean;
          Season2CharactersInMasterCalculated?: boolean;
          Season3PrestigeFix?: boolean;
          Season4FighterRoadPromo?: boolean;
          Season4FixRolloverRp?: boolean;
          Season4Promo?: boolean;
          Season4RankedRewardCatchup?: boolean;

          SeasonFourAcademiaMakeGood?: number;

          SeasonFourAcademiaMakeGoodScoreGranted?: number;

          ShaggySkinMakeGoodS4?: number;

          UpgradeWarMakeGood_8_5_2024?: number;
        };
      };
      server_owner_data: {};

      state: string;
      state_data: {};

      updated_at: number;
      wb_account: {

        age_category?: string;
        completed: boolean;
        email_verified?: boolean;
      };
      wbplay_data_synced: boolean;
      wbplay_identity: null;
    };
    achievements: any[];
    configuration: {
      apns: {
        enabled: boolean | null;
        environment: null;
        sha1: null;
      };
      auth: {
        override_client_restrictions: boolean;
      };
      gcm: {
        enabled: null;
        project_number: null;
      };
      gpgs: {
        google_play_client_id: null;
      };
      realtime: {

        "default-cluster": string;
        enabled: boolean;
        servers: {
          [key: string]: {
            [key: string]: {

              udp: string;

              ws: string;

              wss: string;
            };
          };
        };
      };
      server_side_code_deploy: {

        instance: string;

        sha: string;
      };
    };
    in_queue: boolean;
    maintenance: null;
    notifications: any[];
    profile: {

      account_id: string;
      aggregates: {
        "fighter-road-xp": {

          type_class: string;

          value: number;
        };
        "s1-battlepass-score": {

          type_class: string;

          value: number;
        };
        "s3-battlepass-score": {

          type_class: string;

          value: number;
        };
        "s4-battlepass-score": {

          type_class: string;

          value: number;
        };
      };
      calculations: {};

      created_at: number;
      cross_match_results: {};
      data: {
        HasCompletedFTUE: boolean;
        HasCompletedFirstMatch: boolean;
        IsChildAccount: boolean;

        MostRecentlyViewedCurrentRiftSeason: string;
        PerkPreferences: {
          Characters: {
            [K in Characters]?: {
              LastSelectedPage: number;
              PerkPages: {
                PageName: string;
                PerkSlugs: string[];
              }[];
            };

          };
        };
      };
      files: any[];

      id: string;
      inventory: {

        [K in Characters | Battlepass]?: {
          count: number;
          created_at?: number;
        };

      };

      last_login: number;
      matches: {
        "1v1_container"?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        "1v1_container_bot"?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        "2v2_container"?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        arena_container_four_player?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        custom_container_one_player?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        custom_container_one_player_online?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        custom_container_two_player?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        ffa_container?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
        rift_container_one_player?: {

          challenge_loss: number;

          challenge_win: number;

          longest_loss_streak: number;

          longest_win_streak: number;

          loss: number;

          loss_streak: number;

          win: number;

          win_streak: number;
        };
      };
      notifications: {};
      points: number | null;

      random_distribution: number;
      server_data: {

        BattlepassID: string;

        CurrentXP: number;
        HasReceivedBattlepassRewardFromOpenBeta: boolean;

        Level: number;
        MatchConfig: {
          MultiqueueConfigs: {

            Context: string;

            GameModeAlias: string;

            QueueType: string;

            TeamStyle: string;
          }[];
        };

        NumOwnedBaseRosterFighters: number;

        NumOwnedFighters: number;
        OpenBeta: boolean;
        SeasonalData: {
          [K in SeasonalName]?: {
            LastLoginDay?: number;
            NumDaysLoggedIn?: number;
            NumLogins?: number;
            Ranked?: {
              ClaimedRewards: string[];
              DataByMode: {
                "1v1": {
                  BestCharacter: {

                    CharacterSlug: string;

                    CurrentPoints: number;

                    GamesPlayed: number;

                    LastUpdateTimestamp: number;

                    MaxPoints: number;

                    SetsPlayed: number;
                  };
                  DataByCharacter: PartialRecord<Characters,
                  {

                      CurrentPoints: number;

                      DamageDealt: number;

                      DamageTaken: number;

                      Deaths: number;

                      GamesPlayed: number;

                      LastDecayMs: number;

                      LastUpdateTimestamp: number;

                      Losses: number;

                      MaxPoints: number;

                      Ringouts: number;

                      SetsPlayed: number;

                      Wins: number;
                    }>;

                  GamesPlayed: number;

                  LastUpdateTimestamp: number;

                  SetsPlayed: number;
                };
              };
            };
          };

        };

        TotalPrestige: number;
        Transforms: {
          currency_conversion_errored: {};
          welcome_back: boolean;
        };
        checked_grants: {
          s2_extension_make_good_boost: boolean;
        };

        debug_all_unlocked: number;
        exm_segment_membership: {
          exm_experiment_arm_map: {};
          exm_experiment_segments: any[];

          exm_global_segments: string[];
        };
        ftue: {

          current_ftue_step: string;
        };

        loss_streak: number;

        s2_extension_make_good_boost: number;
        stat_trackers: {

          HighestDamageDealt: number;

          OpenBetaGold: number;

          TotalAssists: number;

          TotalAttacksDodged: number;

          TotalDoubleRingouts: number;

          TotalRingoutLeader: number;

          TotalRingouts: number;

          TotalToastsGiven: number;

          TotalToastsReceived: number;

          TotalWins: number;

          Valentines2023Currency: number;
          character_highest_damage_dealt: {

            character_C018: number;

            character_Jason: number;

            character_arya: number;

            character_c16: number;

            character_shaggy: number;

            character_superman: number;

            character_wonder_woman: number;
          };
          character_matches: {

            character_BananaGuard: number;

            character_C018: number;

            character_Jason: number;

            character_c16: number;

            character_shaggy: number;

            character_wonder_woman: number;
          };
          character_ringouts: {

            character_C018: number;

            character_Jason: number;

            character_arya: number;

            character_c16: number;

            character_shaggy: number;

            character_superman: number;

            character_wonder_woman: number;
          };
          character_total_damage_dealt: {

            character_C018: number;

            character_Jason: number;

            character_arya: number;

            character_c16: number;

            character_shaggy: number;

            character_superman: number;

            character_wonder_woman: number;
          };
          character_wins: {

            character_C018: number;

            character_Jason: number;

            character_arya: number;

            character_c16: number;

            character_finn: number;

            character_shaggy: number;

            character_superman: number;

            character_tom_and_jerry: number;

            character_wonder_woman: number;
          };} &
          PartialRecord<"season1"|"season2"|"season3"|"season4"|"season5",{

            HighestDamageDealt: number;

            TotalWins: number;
            character_highest_damage_dealt: {

              character_shaggy: number;
            };
            character_matches: {

              character_BananaGuard: number;

              character_shaggy: number;
            };
            character_total_damage_dealt: {

              character_shaggy: number;
            };
            character_wins: {

              character_shaggy: number;
            }}>

      };
      server_owner_data: {};

      updated_at: number;

      user_segments: string[];
    };

    token: string;
    wb_network: {

      network_token: string;
    };
  }

  export interface Accounts_wb_network_bulk_RESPONSE {
    connections: any[];

    created_at: string;

    "data.EULAAcceptTimestamp": number;

    "data.EULAAcceptVersion": number;

    "data.LastLoginPlatform": string;

    "data.LastPlayedCharacterSlug": string;
    deleted: boolean;

    id: string;
    "identity.alternate.ps4": {
      avatar: null;

      username: string;
    }[];
    "identity.alternate.steam": {

      avatar: string;

      id: string;

      username: string;
    }[];
    "identity.alternate.twitch": {
      avatar: null;

      username: string;
    }[];
    "identity.alternate.wb_network": {
      avatar: null;

      id: string;

      username: string;
    }[];

    "identity.avatar": string;
    "identity.default_username": boolean;

    "identity.username": string;

    locale: string;
    orphaned: boolean;
    orphaned_reason: null;

    points: number;

    presence: string;

    presence_state: number;

    public_id: string;

    "server_data.AntiCheatServerKick": number;

    "server_data.Characters.character_C017.Mastery.CurrentXP": number;

    "server_data.Characters.character_C017.Mastery.Level": number;

    "server_data.Characters.character_C020.Mastery.CurrentXP": number;

    "server_data.Characters.character_C020.Mastery.Level": number;

    "server_data.Characters.character_C021.Mastery.CurrentXP": number;

    "server_data.Characters.character_C021.Mastery.Level": number;

    "server_data.Characters.character_C023A.Mastery.CurrentXP": number;

    "server_data.Characters.character_C023A.Mastery.Level": number;

    "server_data.Characters.character_arya.Mastery.CurrentXP": number;

    "server_data.Characters.character_arya.Mastery.Level": number;

    "server_data.Characters.character_batman.Mastery.CurrentXP": number;

    "server_data.Characters.character_batman.Mastery.Level": number;

    "server_data.Characters.character_bugs_bunny.Mastery.CurrentXP": number;

    "server_data.Characters.character_bugs_bunny.Mastery.Level": number;

    "server_data.Characters.character_c019.Mastery.CurrentXP": number;

    "server_data.Characters.character_c019.Mastery.Level": number;

    "server_data.Characters.character_creature.Mastery.CurrentXP": number;

    "server_data.Characters.character_creature.Mastery.Level": number;

    "server_data.Characters.character_finn.Mastery.CurrentXP": number;

    "server_data.Characters.character_finn.Mastery.Level": number;

    "server_data.Characters.character_garnet.Mastery.CurrentXP": number;

    "server_data.Characters.character_garnet.Mastery.Level": number;

    "server_data.Characters.character_harleyquinn.Mastery.CurrentXP": number;

    "server_data.Characters.character_harleyquinn.Mastery.Level": number;

    "server_data.Characters.character_jake.Mastery.CurrentXP": number;

    "server_data.Characters.character_jake.Mastery.Level": number;

    "server_data.Characters.character_shaggy.Mastery.CurrentXP": number;

    "server_data.Characters.character_shaggy.Mastery.Level": number;

    "server_data.Characters.character_steven.Mastery.CurrentXP": number;

    "server_data.Characters.character_steven.Mastery.Level": number;

    "server_data.Characters.character_superman.Mastery.CurrentXP": number;

    "server_data.Characters.character_superman.Mastery.Level": number;

    "server_data.Characters.character_taz.Mastery.CurrentXP": number;

    "server_data.Characters.character_taz.Mastery.Level": number;

    "server_data.Characters.character_tom_and_jerry.Mastery.CurrentXP": number;

    "server_data.Characters.character_tom_and_jerry.Mastery.Level": number;

    "server_data.Characters.character_velma.Mastery.CurrentXP": number;

    "server_data.Characters.character_velma.Mastery.Level": number;

    "server_data.Characters.character_wonder_woman.Mastery.CurrentXP": number;

    "server_data.Characters.character_wonder_woman.Mastery.Level": number;

    "server_data.CurrentXP": number;

    "server_data.FirstWinClaimTime": string;

    "server_data.LastDailyRefresh": string;

    "server_data.LastKnownDebugDelta": number;

    "server_data.LastLoginPlatform": string;

    "server_data.LastLoginTime": string;

    "server_data.LastLogoutTime": string;

    "server_data.LastRefreshBattlepassEvent": string;

    "server_data.LastRefreshSeason": string;

    "server_data.LastWeeklyRefresh": string;

    "server_data.Level": number;
    "server_data.OpenBeta": boolean;

    "server_data.ProfileIcon.AssetPath": string;

    "server_data.ProfileIcon.Slug": string;

    "server_data.RestedXP": number;

    "server_data.RetroactiveRiftBattlepassPayoutTime": string;
    "server_data.Transforms.BannerKnightSlugFixed": boolean;

    "server_data.Transforms.BatmanVsJokerMakeGood_6-18-2024": string;

    "server_data.Transforms.CharacterCurrencyRoundUp": string;
    "server_data.Transforms.FixRankedCharactersInGold": boolean;
    "server_data.Transforms.GoldStatTracker": boolean;
    "server_data.Transforms.MmrSeason4": boolean;
    "server_data.Transforms.OpenBetaFreebies": boolean;
    "server_data.Transforms.Season2CharactersInMasterCalculated": boolean;
    "server_data.Transforms.Season3PrestigeFix": boolean;
    "server_data.Transforms.Season4FighterRoadPromo": boolean;
    "server_data.Transforms.Season4FixRolloverRp": boolean;
    "server_data.Transforms.Season4Promo": boolean;
    "server_data.Transforms.Season4RankedRewardCatchup": boolean;

    "server_data.Transforms.SeasonFourAcademiaMakeGood": string;

    "server_data.Transforms.SeasonFourAcademiaMakeGoodScoreGranted": number;

    "server_data.Transforms.ShaggySkinMakeGoodS4": string;

    "server_data.Transforms.UpgradeWarMakeGood_8_5_2024": string;

    "server_data.active_boosts.bp.expiration_date": string;

    "server_data.active_boosts.bp.games_remaining": number;

    "server_data.active_boosts.gold.expiration_date": string;

    "server_data.active_boosts.gold.games_remaining": number;

    "server_data.active_boosts.xp.expiration_date": string;

    "server_data.active_boosts.xp.games_remaining": number;
    "server_data.founderpackcoolnameflag": boolean;

    state: string;

    updated_at: string;
    "wb_account.completed": boolean;
    "wb_account.email_verified": boolean;
    wbplay_data_synced: boolean;
    wbplay_identity: null;
  }

  export interface Auth_v1_oauth_token_RESPONSE {

    access_token: string;

    deployment_id: string;

    expires_at: string;

    expires_in: number;

    features: string[];

    id_token: string;

    nonce: string;

    organization_id: string;

    organization_user_id: string;

    product_id: string;

    product_user_id: string;
    product_user_id_created: boolean;

    sandbox_id: string;

    token_type: string;
  }

  export interface Batch_RESPONSE {
    responses: {
      body: {
        body: {

          Crc: number;

          MatchmakingCrc: number;
        };
        metadata: null;

        return_code: number;
      };
      headers: {

        "Access-Control-Allow-Origin": string;

        "Cache-Control": string;

        "Content-Length": string;

        "Content-Type": string;

        "X-Hydra-Event-Id": string;

        "X-Hydra-Info": string;

        "X-Hydra-Processing-Time": string;

        "X-Hydra-Server-Time": string;
      };

      status_code: number;
    }[];
  }

  export interface Commerce_products_RESPONSE {
    allow_free_purchase: boolean;
    available_for_purchase: boolean;

    created_at: string;
    data: {};

    description: string;

    id: string;
    is_store_defined: boolean;
    items: {

      currency_source_slug: string;

      inventory_item_slug: string;
      proxy_quantity: boolean;

      quantity: number;
    }[];

    name: string;
    prices: {

      backend_name: string;
      is_durable: boolean;

      item_id: string;

      name: string;

      quantity: number;

      slug: string;

      usd_price: number;

      xbox_service: string;
    }[];
    purchase_once: boolean;
    reward_actions: {

      action: string;
      options: {
        conditions: {};
        operations: {

          cmd: string;

          path: string;
          update_value: {
            source_options: {
              constant_value: boolean;
            };

            source_type: string;
          };
        }[];
      };
      target: null;
    }[];

    slug: string;

    tags: string[];

    updated_at: string;
    visible: boolean;
  }

  export interface Commerce_purchases_me_RESPONSE {

    current_page: number;
    purchases: any[];

    total_pages: number;

    total_purchases: number;
  }

  export interface Commerce_steam_mtx_user_info_me_RESPONSE {

    country: string;

    currency: string;

    state: string;

    status: string;
  }

  export interface Datarouter_api_v1_public_data_clients_RESPONSE {}

  export interface Dokken_v1_event_RESPONSE {

    EventsInRequest: number;

    EventsQueued: number;

    EventsWithUnknownSchema: number;
    NoErrors: boolean;
  }

  export interface Drives_multiversus_sync_RESPONSE {
    additions: any[];
    deletions: any[];
  }

  export interface File_storage_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_beginnermode_carousel_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_beginnermode_carousel_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_harley_rift_s5_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_harley_rift_s5_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_s5_bp_carousel_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_s5_bp_carousel_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_t_discord_qa_carousel_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_t_discord_qa_carousel_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_wonderwoman_arena_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface File_storage_wonderwoman_arena_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;

    created_at: string;
    data: {};

    download_url: string;

    file_size: number;

    file_type: string;

    filename: string;

    id: string;

    md5_checksum: string;

    name: string;

    s3_object_id: string;

    slug: string;

    updated_at: string;
  }

  export interface Friends_me_RESPONSE {

    page: number;

    page_size: number;
    results: {
      account: {
        avatar: {

          image_url: string;

          name: string;
        };

        presence_state: number;

        public_id: string;

        username: string;
      };

      created_at: string;
    }[];

    total: number;
  }

  export interface Friends_me_invitations_incoming_RESPONSE {

    page: number;

    page_size: number;
    results: {
      account: {
        avatar: {

          image_url: string;

          name: string;
        };

        presence_state: number;

        public_id: string;

        username: string;
      };

      created_at: string;

      id: string;

      sent_from: string;

      sent_to: string;

      state: string;

      updated_at: string;
    }[];

    total: number;
  }

  export interface Friends_me_invitations_outgoing_RESPONSE {

    page: number;

    page_size: number;
    results: {
      account: {
        avatar: {

          image_url: string;

          name: string;
        };

        presence_state: number;

        public_id: string;

        username: string;
      };

      created_at: string;

      id: string;

      sent_from: string;

      sent_to: string;

      state: string;

      updated_at: string;
    }[];

    total: number;
  }

  export interface Global_configuration_types_calendarflags_global_configurationscount1000page1partial_response1_RESPONSE {

    current_page: number;
    results: {

      created_at: string;
      "data.double_battlepass_xp": {
        default: boolean;
        rendered: boolean;
      };
      "data.double_gold": {
        default: boolean;
        rendered: boolean;
      };
      "data.double_mastery_xp": {
        default: boolean;
        rendered: boolean;
      };

      global_configuration_type_slug: string;

      id: string;

      slug: string;

      updated_at: string;
    }[];

    total_pages: number;

    total_results: number;
  }

  export interface Global_configuration_types_wwshopconfiguration_global_configurationscount1000page1partial_response1_RESPONSE {

    current_page: number;
    results: {

      created_at: string;

      "data.shopversion": number;

      global_configuration_type_slug: string;

      id: string;

      slug: string;

      updated_at: string;
    }[];

    total_pages: number;

    total_results: number;
  }

  export interface Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;
      highlight_store_product_quantity: null;
      items: {
        data: null;
        description: {
          localizations: {

            "store_product-announcer-pack-taz-account-cosmetics-store-description": string;
          };
        };
        embedded_object: {
          already_owned: boolean;
          data: null;
          description: {
            localizations: {

              "store_product-announcer-pack-taz-account-cosmetics-store-description": string;
            };
          };
          enabled: boolean;
          has_active_sku: boolean;
          is_player_purchasable: boolean;
          is_purchasable: boolean;
          is_store_purchasable: boolean;

          name: string;

          number_times_purchased: number;
          skus: {

            current_recurrence_purchase_count: number;
            data: null;
            description: {
              localizations: {

                "store_product-announcer-pack-taz-account-cosmetics-store-description": string;
              };
            };
            enabled: boolean;
            is_available_for_purchase: boolean;
            is_price_valid: boolean;
            max_per_recurrence: null;

            name: string;
            preferred: boolean;

            price_type: string;
            price_type_options: {
              currency_inventory_item: {
                data: {

                  AssetPath: string;

                  DisplayNameLocalizationKey: string;

                  RewardThumbnail: string;
                };

                description: string;

                id: string;

                name: string;

                slug: string;

                tags: string[];

                type_class: string;
              };

              quantity: number;
            };
            recurrence_is_active: boolean;

            sku: string;

            type: string;
            valid_user_segments: boolean;
            visual_data: any[];
          }[];

          slug: string;

          times_can_purchase: number;

          type: string;
          type_options: {

            quantity: number;
            reward_item: {
              data: {

                AssetPath: string;

                AssociatedCharacter: string;

                DisplayName: string;

                DisplayNameLocalizationKey: string;

                DisplayNameLocalizationNamespace: string;
                EnabledForShipping: boolean;

                Rarity: string;

                RewardThumbnail: string;

                RewardThumbnailMaterial: string;
              };

              description: string;

              id: string;

              name: string;

              slug: string;

              tags: string[];

              type_class: string;
            };
          };
          valid_user_segments: boolean;
          visual_data: {
            layers: {
              data: {
                Value: {
                  localizations: {

                    "announcer-pack": string;
                  };
                }[];
              };

              name: string;
              offset: {

                x: number;

                y: number;
              };

              type: string;
              type_options: {
                text: {
                  localizations: {

                    "store_product-announcer-pack-taz-account-cosmetics-store-description": string;
                  };
                };
              };
            }[];

            name: string;
          }[];
        };

        embedded_object_type: string;

        name: string;

        slug: string;

        type: string;
        visual_data: {
          layers: any[];

          name: string;
        }[];
      }[];
      name: {
        localizations: {

          "layout_area-account-cosmetics-store-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {

            text: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: {
      layers: {

        name: string;
        offset: {

          x: number;

          y: number;
        };

        type: string;
        type_options: {
          area_of_focus: {

            center_point_x: number;

            center_point_y: number;

            height: number;

            scale: number;

            width: number;
          };
          file_reference: {

            _customType: string;
            value: {

              content_key: string;

              drive_slug: string;

              file_size: number;

              filename: string;

              id: string;

              md5: string;

              mime_type: string;

              path: string;
              tags: any[];

              url: string;
            };
          };
        };
      }[];

      name: string;
    }[];

    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_battlepass_variant_id_RESPONSE {
    body: {};

    code: number;

    hydra_error: number;

    msg: string;

    relying_party_error: number;
  }

  export interface Layout_dokken_layout_type_personalized_currency_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;
      highlight_store_product_quantity: null;
      items: null[];
      name: {
        localizations: {

          "layout_area-special-store-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {

            text: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: {
      layers: {

        name: string;
        offset: {

          x: number;

          y: number;
        };

        type: string;
        type_options: {
          area_of_focus: {

            center_point_x: number;

            center_point_y: number;

            height: number;

            scale: number;

            width: number;
          };
          file_reference: {

            _customType: string;
            value: {

              content_key: string;

              drive_slug: string;

              file_size: number;

              filename: string;

              id: string;

              md5: string;

              mime_type: string;

              path: string;
              tags: any[];

              url: string;
            };
          };
        };
      }[];

      name: string;
    }[];

    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_road_layout_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;
      highlight_store_product_quantity: null;
      items: null[];
      name: {
        localizations: {

          "layout_area-fighter-road-store-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {

            text: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: any[];

    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;
      highlight_store_product_quantity: null;
      items: {
        data: null;
        description: {
          localizations: {

            "store_product-marceline-description": string;
          };
        };
        embedded_object: {
          already_owned: boolean;
          data: null;
          description: {
            localizations: {

              "store_product-marceline-description": string;
            };
          };
          enabled: boolean;
          has_active_sku: boolean;
          is_player_purchasable: boolean;
          is_purchasable: boolean;
          is_store_purchasable: boolean;

          name: string;

          number_times_purchased: number;
          skus: {

            current_recurrence_purchase_count: number;
            data: null;
            description: {
              localizations: {

                "store_product-marceline-description": string;
              };
            };
            enabled: boolean;
            is_available_for_purchase: boolean;
            is_price_valid: boolean;
            max_per_recurrence: null;

            name: string;
            preferred: boolean;

            price_type: string;
            price_type_options: {
              currency_inventory_item: {
                data: {};

                description: string;

                id: string;

                name: string;

                slug: string;

                tags: string[];

                type_class: string;
              };

              quantity: number;
            };
            recurrence_is_active: boolean;

            sku: string;

            type: string;
            valid_user_segments: boolean;
            visual_data: any[];
          }[];

          slug: string;

          times_can_purchase: number;

          type: string;
          type_options: {

            quantity: number;
            reward_item: {
              data: {

                AssetPath: string;

                AssociatedCharacter: string;

                ContentLevel: number;

                DisplayName: string;

                DisplayNameLocalizationKey: string;

                DisplayNameLocalizationNamespace: string;
                EnabledForShipping: boolean;

                FighterClass: string;
                IsUnlockedByDefault: boolean;
                ItemRewardTags: {

                  GameplayTags: string[];

                  ParentTags: string[];
                };

                MasteryRewardTrack: string;

                Rarity: string;

                RewardThumbnail: string;

                RewardThumbnailMaterial: string;
              };

              description: string;

              id: string;

              name: string;

              slug: string;

              tags: string[];

              type_class: string;
            };
          };
          valid_user_segments: boolean;
          visual_data: {
            layers: {

              name: string;
              offset: {

                x: number;

                y: number;
              };

              type: string;
              type_options: {
                text: {
                  localizations: {

                    "store_product-marceline-description": string;
                  };
                };
              };
            }[];

            name: string;
          }[];
        };

        embedded_object_type: string;

        name: string;

        slug: string;

        type: string;
        visual_data: {
          layers: any[];

          name: string;
        }[];
      }[];
      name: {
        localizations: {

          "layout_area-fighter-store-layout-main-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {
            area_of_focus: {

              center_point_x: number;

              center_point_y: number;

              height: number;

              scale: number;

              width: number;
            };

            ingame_path: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: {
      layers: {

        name: string;
        offset: {

          x: number;

          y: number;
        };

        type: string;
        type_options: {
          area_of_focus: {

            center_point_x: number;

            center_point_y: number;

            height: number;

            scale: number;

            width: number;
          };
          file_reference: {

            _customType: string;
            value: {

              content_key: string;

              drive_slug: string;

              file_size: number;

              filename: string;

              id: string;

              md5: string;

              mime_type: string;

              path: string;
              tags: any[];

              url: string;
            };
          };
        };
      }[];

      name: string;
    }[];

    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_main_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;

      highlight_store_product_quantity: number;
      items: {
        data: null;
        description: {
          localizations: {

            "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description": string;
          };
        };
        embedded_object: {
          already_owned: boolean;
          data: null;
          description: {
            localizations: {

              "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description": string;
            };
          };
          enabled: boolean;
          has_active_sku: boolean;
          is_player_purchasable: boolean;
          is_purchasable: boolean;
          is_store_purchasable: boolean;
          name: {
            localizations: {

              "store_product-future-queen-nubias-strength-gleamium-featured-backfill-name": string;
            };
          };

          number_times_purchased: number;
          skus: {

            current_recurrence_purchase_count: number;
            data: null;
            description: {
              localizations: {

                "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description": string;
              };
            };
            enabled: boolean;
            is_available_for_purchase: boolean;
            is_price_valid: boolean;
            max_per_recurrence: null;

            name: string;
            preferred: boolean;

            price_type: string;
            price_type_options: {
              original: {

                already_owned_adjusted_cost: number;
                currency_inventory_item: {
                  data: {

                    AssetPath: string;

                    DisplayNameLocalizationKey: string;

                    RewardThumbnail: string;
                  };

                  description: string;

                  id: string;

                  name: string;

                  slug: string;

                  tags: string[];

                  type_class: string;
                };

                original_cost: number;
                value: null;
              };

              quantity: number;
            };
            recurrence_is_active: boolean;

            sku: string;

            type: string;
            valid_user_segments: boolean;
            visual_data: any[];
          }[];

          slug: string;

          times_can_purchase: number;

          type: string;
          type_options: {
            store_products: {
              already_owned: boolean;

              bundle_ref_type: string;
              data: null;
              description: {
                localizations: {

                  "store_product-future-state-nubia-skin-store-description": string;
                };
              };
              enabled: boolean;
              has_active_sku: boolean;
              is_player_purchasable: boolean;
              is_purchasable: boolean;
              is_store_purchasable: boolean;

              name: string;

              number_times_purchased: number;
              skus: {

                current_recurrence_purchase_count: number;
                data: null;
                description: {
                  localizations: {

                    "store_product-future-state-nubia-skin-store-description": string;
                  };
                };
                enabled: boolean;
                is_available_for_purchase: boolean;
                is_price_valid: boolean;
                max_per_recurrence: null;

                name: string;
                preferred: boolean;

                price_type: string;
                price_type_options: {
                  currency_inventory_item: {
                    data: {

                      AssetPath: string;

                      DisplayNameLocalizationKey: string;

                      RewardThumbnail: string;
                    };

                    description: string;

                    id: string;

                    name: string;

                    slug: string;

                    tags: string[];

                    type_class: string;
                  };

                  quantity: number;
                };
                recurrence_is_active: boolean;

                sku: string;

                type: string;
                valid_user_segments: boolean;
                visual_data: any[];
              }[];

              slug: string;

              times_can_purchase: number;

              type: string;
              type_options: {

                quantity: number;
                reward_item: {
                  data: {

                    AssetPath: string;

                    AssociatedCharacter: string;

                    DisplayName: string;

                    DisplayNameLocalizationKey: string;

                    DisplayNameLocalizationNamespace: string;
                    EnabledForShipping: boolean;
                    ItemRewardTags: {

                      GameplayTags: string[];

                      ParentTags: string[];
                    };

                    Rarity: string;

                    RewardThumbnail: string;

                    RewardThumbnailMaterial: string;
                  };

                  description: string;

                  id: string;

                  name: string;

                  slug: string;

                  tags: string[];

                  type_class: string;
                };
              };
              valid_user_segments: boolean;
              visual_data: {
                layers: {

                  name: string;
                  offset: {

                    x: number;

                    y: number;
                  };

                  type: string;
                  type_options: {
                    text: {
                      localizations: {

                        "store_product-future-state-nubia-skin-store-description": string;
                      };
                    };
                  };
                }[];

                name: string;
              }[];
            }[];
          };
          valid_user_segments: boolean;
          visual_data: {
            layers: {

              name: string;
              offset: {

                x: number;

                y: number;
              };

              type: string;
              type_options: {
                text: {
                  localizations: {

                    "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description": string;
                  };
                };
              };
            }[];

            name: string;
          }[];
        };

        embedded_object_type: string;
        name: {
          localizations: {

            "store_product-future-queen-nubias-strength-gleamium-featured-backfill-name": string;
          };
        };

        slug: string;

        type: string;
        visual_data: {
          layers: {

            name: string;
            offset: {

              x: number;

              y: number;
            };

            type: string;
            type_options: {
              area_of_focus: {

                center_point_x: number;

                center_point_y: number;

                height: number;

                scale: number;

                width: number;
              };
              file_reference: {

                _customType: string;
                value: {

                  content_key: string;

                  drive_slug: string;

                  file_size: number;

                  filename: string;

                  id: string;

                  md5: string;

                  mime_type: string;

                  path: string;
                  tags: any[];

                  url: string;
                };
              };
            };
          }[];

          name: string;
        }[];
      }[];
      name: {
        localizations: {

          "layout_area-features-bundles-variant-1-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {
            area_of_focus: {

              center_point_x: number;

              center_point_y: number;

              height: number;

              scale: number;

              width: number;
            };

            ingame_path: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: {
      layers: {

        name: string;
        offset: {

          x: number;

          y: number;
        };

        type: string;
        type_options: {
          area_of_focus: {

            center_point_x: number;

            center_point_y: number;

            height: number;

            scale: number;

            width: number;
          };
          file_reference: {

            _customType: string;
            value: {

              content_key: string;

              drive_slug: string;

              file_size: number;

              filename: string;

              id: string;

              md5: string;

              mime_type: string;

              path: string;
              tags: any[];

              url: string;
            };
          };
        };
      }[];

      name: string;
    }[];

    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_prestige_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;
      highlight_store_product_quantity: null;
      items: {
        data: null;
        description: {
          localizations: {

            "store_product-raven-new-52-prestige-store-description": string;
          };
        };
        embedded_object: {
          already_owned: boolean;
          data: null;
          description: {
            localizations: {

              "store_product-raven-new-52-prestige-store-description": string;
            };
          };
          enabled: boolean;
          has_active_sku: boolean;
          is_player_purchasable: boolean;
          is_purchasable: boolean;
          is_store_purchasable: boolean;

          name: string;

          number_times_purchased: number;
          skus: {

            current_recurrence_purchase_count: number;
            data: null;
            description: {
              localizations: {

                "store_product-raven-new-52-prestige-store-description": string;
              };
            };
            enabled: boolean;
            is_available_for_purchase: boolean;
            is_price_valid: boolean;
            max_per_recurrence: null;

            name: string;
            preferred: boolean;

            price_type: string;
            price_type_options: {
              original: {
                currency_inventory_item: {
                  data: {

                    AssetPath: string;

                    RewardThumbnail: string;
                  };

                  description: string;

                  id: string;

                  name: string;

                  slug: string;

                  tags: string[];

                  type_class: string;
                };

                quantity: number;
              };

              quantity: number;
            };
            recurrence_is_active: boolean;

            sku: string;

            type: string;
            valid_user_segments: boolean;
            visual_data: any[];
          }[];

          slug: string;

          times_can_purchase: number;

          type: string;
          type_options: {

            quantity: number;
            reward_item: {
              data: {

                AssetPath: string;

                AssociatedCharacter: string;

                DisplayName: string;

                DisplayNameLocalizationKey: string;

                DisplayNameLocalizationNamespace: string;
                EnabledForShipping: boolean;
                ItemRewardTags: {

                  GameplayTags: string[];

                  ParentTags: string[];
                };

                Rarity: string;

                RewardThumbnail: string;

                RewardThumbnailMaterial: string;
              };

              description: string;

              id: string;

              name: string;

              slug: string;

              tags: string[];

              type_class: string;
            };
          };
          valid_user_segments: boolean;
          visual_data: {
            layers: {

              name: string;
              offset: {

                x: number;

                y: number;
              };

              type: string;
              type_options: {
                text: {
                  localizations: {

                    "store_product-raven-new-52-prestige-store-description": string;
                  };
                };
              };
            }[];

            name: string;
          }[];
        };

        embedded_object_type: string;

        name: string;

        slug: string;

        type: string;
        visual_data: {
          layers: any[];

          name: string;
        }[];
      }[];
      name: {
        localizations: {

          "layout_area-prestige-store-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {
            area_of_focus: {

              center_point_x: number;

              center_point_y: number;

              height: number;

              scale: number;

              width: number;
            };

            ingame_path: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: {
      layers: {

        name: string;
        offset: {

          x: number;

          y: number;
        };

        type: string;
        type_options: {
          area_of_focus: {

            center_point_x: number;

            center_point_y: number;

            height: number;

            scale: number;

            width: number;
          };
          file_reference: {

            _customType: string;
            value: {

              content_key: string;

              drive_slug: string;

              file_size: number;

              filename: string;

              id: string;

              md5: string;

              mime_type: string;

              path: string;
              tags: any[];

              url: string;
            };
          };
        };
      }[];

      name: string;
    }[];

    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_rift_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;
      highlight_store_product_quantity: null;
      items: {
        data: null;
        description: {
          localizations: {

            "store_product-small-power-within-bundle-description": string;
          };
        };
        embedded_object: {
          already_owned: boolean;
          data: null;
          description: {
            localizations: {

              "store_product-small-power-within-bundle-description": string;
            };
          };
          enabled: boolean;
          has_active_sku: boolean;
          is_player_purchasable: boolean;
          is_purchasable: boolean;
          is_store_purchasable: boolean;
          name: {
            localizations: {

              "store_product-small-power-within-bundle-name": string;
            };
          };

          number_times_purchased: number;
          skus: {

            current_recurrence_purchase_count: number;
            data: null;
            description: {
              localizations: {

                "store_product-small-power-within-bundle-description": string;
              };
            };
            enabled: boolean;
            is_available_for_purchase: boolean;
            is_price_valid: boolean;
            max_per_recurrence: null;

            name: string;
            preferred: boolean;

            price_type: string;
            price_type_options: {

              already_owned_adjusted_cost: number;
              currency_inventory_item: {
                data: {

                  AssetPath: string;

                  DisplayNameLocalizationKey: string;

                  RewardThumbnail: string;
                };

                description: string;

                id: string;

                name: string;

                slug: string;

                tags: string[];

                type_class: string;
              };

              original_cost: number;
              value: null;
            };
            recurrence_is_active: boolean;

            sku: string;

            type: string;
            valid_user_segments: boolean;
            visual_data: any[];
          }[];

          slug: string;
          times_can_purchase: null;

          type: string;
          type_options: {
            store_products: {
              already_owned: boolean;

              bundle_ref_type: string;
              data: null;
              description: {
                localizations: {

                  "store_product-armored-scars-catalog-description": string;
                };
              };
              enabled: boolean;
              has_active_sku: boolean;
              is_player_purchasable: boolean;
              is_purchasable: boolean;
              is_store_purchasable: boolean;

              name: string;

              number_times_purchased: number;
              skus: {

                current_recurrence_purchase_count: number;
                data: null;
                description: {
                  localizations: {

                    "store_product-armored-scars-catalog-description": string;
                  };
                };
                enabled: boolean;
                is_available_for_purchase: boolean;
                is_price_valid: boolean;
                max_per_recurrence: null;

                name: string;
                preferred: boolean;

                price_type: string;
                price_type_options: {
                  currency_inventory_item: {
                    data: {

                      AssetPath: string;

                      DisplayNameLocalizationKey: string;

                      RewardThumbnail: string;
                    };

                    description: string;

                    id: string;

                    name: string;

                    slug: string;

                    tags: string[];

                    type_class: string;
                  };

                  quantity: number;
                };
                recurrence_is_active: boolean;

                sku: string;

                type: string;
                valid_user_segments: boolean;
                visual_data: any[];
              }[];

              slug: string;
              times_can_purchase: null;

              type: string;
              type_options: {

                quantity: number;
                reward_item: {
                  data: {
                    AssetBundleData: {
                      Bundles: any[];
                    };

                    AssetPath: string;
                    Attunements: {

                      GameplayTags: string[];
                    };

                    Buffs: string[];

                    DisplayName: string;

                    DisplayNameLocalizationKey: string;

                    DisplayNameLocalizationNamespace: string;

                    Icon: string;

                    RewardThumbnail: string;

                    SlotType: string;

                    Slug: string;
                    bIsEnabled: boolean;
                  };

                  description: string;

                  id: string;

                  name: string;

                  slug: string;

                  tags: string[];

                  type_class: string;
                };
              };
              valid_user_segments: boolean;
              visual_data: {
                layers: {

                  name: string;
                  offset: {

                    x: number;

                    y: number;
                  };

                  type: string;
                  type_options: {
                    text: {
                      localizations: {

                        "store_product-armored-scars-catalog-description": string;
                      };
                    };
                  };
                }[];

                name: string;
              }[];
            }[];
          };
          valid_user_segments: boolean;
          visual_data: {
            layers: {

              name: string;
              offset: {

                x: number;

                y: number;
              };

              type: string;
              type_options: {
                text: {
                  localizations: {

                    "store_product-small-power-within-bundle-description": string;
                  };
                };
              };
            }[];

            name: string;
          }[];
        };

        embedded_object_type: string;
        name: {
          localizations: {

            "store_product-small-power-within-bundle-name": string;
          };
        };

        slug: string;

        type: string;
        visual_data: {
          layers: any[];

          name: string;
        }[];
      }[];
      name: {
        localizations: {

          "layout_area-rift-store-main-bundles-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {

            text: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: {
      layers: {

        name: string;
        offset: {

          x: number;

          y: number;
        };

        type: string;
        type_options: {
          area_of_focus: {

            center_point_x: number;

            center_point_y: number;

            height: number;

            scale: number;

            width: number;
          };
          file_reference: {

            _customType: string;
            value: {

              content_key: string;

              drive_slug: string;

              file_size: number;

              filename: string;

              id: string;

              md5: string;

              mime_type: string;

              path: string;
              tags: any[];

              url: string;
            };
          };
        };
      }[];

      name: string;
    }[];

    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_skin_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };

      description: string;
      enabled: boolean;
      highlight_store_product_quantity: null;
      items: {
        data: null;
        description: {
          localizations: {

            "store_product-distant-lands-skin-store-description": string;
          };
        };
        embedded_object: {
          already_owned: boolean;
          data: null;
          description: {
            localizations: {

              "store_product-distant-lands-skin-store-description": string;
            };
          };
          enabled: boolean;
          has_active_sku: boolean;
          is_player_purchasable: boolean;
          is_purchasable: boolean;
          is_store_purchasable: boolean;

          name: string;

          number_times_purchased: number;
          skus: {

            current_recurrence_purchase_count: number;
            data: null;
            description: {
              localizations: {

                "store_product-distant-lands-skin-store-description": string;
              };
            };
            enabled: boolean;
            is_available_for_purchase: boolean;
            is_price_valid: boolean;
            max_per_recurrence: null;

            name: string;
            preferred: boolean;

            price_type: string;
            price_type_options: {
              currency_inventory_item: {
                data: {

                  AssetPath: string;

                  DisplayNameLocalizationKey: string;

                  RewardThumbnail: string;
                };

                description: string;

                id: string;

                name: string;

                slug: string;

                tags: string[];

                type_class: string;
              };

              quantity: number;
            };
            recurrence_is_active: boolean;

            sku: string;

            type: string;
            valid_user_segments: boolean;
            visual_data: any[];
          }[];

          slug: string;

          times_can_purchase: number;

          type: string;
          type_options: {

            quantity: number;
            reward_item: {
              data: {

                AssetPath: string;

                AssociatedCharacter: string;

                DisplayName: string;

                DisplayNameLocalizationKey: string;

                DisplayNameLocalizationNamespace: string;
                EnabledForShipping: boolean;
                ItemRewardTags: {

                  GameplayTags: string[];

                  ParentTags: string[];
                };

                Rarity: string;

                RewardThumbnail: string;

                RewardThumbnailMaterial: string;
              };

              description: string;

              id: string;

              name: string;

              slug: string;

              tags: string[];

              type_class: string;
            };
          };
          valid_user_segments: boolean;
          visual_data: {
            layers: {

              name: string;
              offset: {

                x: number;

                y: number;
              };

              type: string;
              type_options: {
                text: {
                  localizations: {

                    "store_product-distant-lands-skin-store-description": string;
                  };
                };
              };
            }[];

            name: string;
          }[];
        };

        embedded_object_type: string;

        name: string;

        slug: string;

        type: string;
        visual_data: {
          layers: any[];

          name: string;
        }[];
      }[];
      name: {
        localizations: {

          "layout_area-skin-store-name": string;
        };
      };

      slug: string;

      template_slug: string;

      template_type: string;
      visual_data: {
        layers: {

          name: string;
          offset: {

            x: number;

            y: number;
          };

          type: string;
          type_options: {

            text: string;
          };
        }[];

        name: string;
      }[];
    }[];
    data: null;

    description: string;
    enabled: boolean;

    layout_type_slug: string;

    name: string;

    slug: string;

    variant_slug: string;
    visual_data: {
      layers: {

        name: string;
        offset: {

          x: number;

          y: number;
        };

        type: string;
        type_options: {
          area_of_focus: {

            center_point_x: number;

            center_point_y: number;

            height: number;

            scale: number;

            width: number;
          };
          file_reference: {

            _customType: string;
            value: {

              content_key: string;

              drive_slug: string;

              file_size: number;

              filename: string;

              id: string;

              md5: string;

              mime_type: string;

              path: string;
              tags: any[];

              url: string;
            };
          };
        };
      }[];

      name: string;
    }[];

    weight: number;
  }

  export interface Leaderboards_bulk_score_and_rank_id_RESPONSE {
    ranked_season5_1v1_all: {

      member: string;
      profile: {

        account_id: string;
        aggregates: {
          "fighter-road-xp": {

            type_class: string;

            value: number;
          };
          "s1-battlepass-score": {

            type_class: string;

            value: number;
          };
          "s3-battlepass-score": {

            type_class: string;

            value: number;
          };
          "s4-battlepass-score": {

            type_class: string;

            value: number;
          };
        };
        calculations: {};

        created_at: string;
        cross_match_results: {};
        files: any[];

        id: string;

        last_login: string;
        notifications: {};
        points: null;

        random_distribution: number;

        updated_at: string;
      };

      rank: number;

      score: number;
    };
    ranked_season5_1v1_character_Jason: {

      member: string;
      profile: {

        account_id: string;
        aggregates: {
          "fighter-road-xp": {

            type_class: string;

            value: number;
          };
          "s1-battlepass-score": {

            type_class: string;

            value: number;
          };
          "s3-battlepass-score": {

            type_class: string;

            value: number;
          };
          "s4-battlepass-score": {

            type_class: string;

            value: number;
          };
        };
        calculations: {};

        created_at: string;
        cross_match_results: {};
        files: any[];

        id: string;

        last_login: string;
        notifications: {};
        points: null;

        random_distribution: number;

        updated_at: string;
      };

      rank: number;

      score: number;
    };
  }

  export interface Matches_id_RESPONSE {

    access: string;

    access_level: string;
    account_id: null;
    arbitration: null;

    cluster: string;
    completion_time: null;

    created_at: string;
    criteria: {
      slug: null;
    };
    data: {};
    draw: null;

    id: string;
    last_warning_time: null;
    loss: any[];
    matchmaking: null;

    name: string;

    origin: string;
    players: {
      all: {

        account_id: string;
        data: {};
        identity: {
          alternate: {
            steam: {

              avatar: string;
              email: null;

              id: string;

              username: string;
            }[];
            wb_network: {
              avatar: null;
              email: null;

              id: string;

              username: string;
            }[];
          };

          avatar: string;

          current_platform: string;
          default_username: boolean;
          is_cross_platform: boolean;
          personal_data: {};

          platforms: string[];

          username: string;
          usernames: {

            auth: string;

            username: string;
          }[];
        };
        source: {};

        state: string;
      }[];

      count: number;

      current: string[];
    };

    rand: number;
    server_data: {
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

      GameVersion: string;

      HissCrc: number;
      IsLobbyJoinable: boolean;

      LeaderID: string;

      LobbyType: number;
      LockedLoadouts: {
        ":id": {

          Character: string;

          Skin: string;
        };
      };

      ModeString: string;
      Platforms: {

        ":id": string;
      };
      PlayerAutoPartyPreferences: {
        ":id": boolean;
      };
      PlayerGameplayPreferences: {

        ":id": number;
      };
      ReadyPlayers: {};
      Teams: {

        Length: number;
        Players: {
          ":id": {
            Account: {

              id: string;
            };

            BotSettingSlug: string;

            CrossplayPreference: number;

            JoinedAt: string;

            LobbyPlayerIndex: number;
          };
        };

        TeamIndex: number;
      }[];
    };
    shortcode: null;

    state: string;
    template: {

      created_at: string;
      data: {};
      game_server_config: null;
      game_server_integration_enabled: boolean;

      id: string;

      max_players: number;

      min_players: number;

      name: string;

      slug: string;

      type: string;

      updated_at: string;
    };

    updated_at: string;
    win: any[];
    winning_team: any[];
  }

  export interface Matches_all_63cef97ced0619f458cfac8fcount10page1fieldsserver_datatemplates2v2_containertemplates1v1_containertemplatesffa_containertemplates2v2_gamelifttemplates1v1_gamelifttemplatesffa_gamelifttemplatescustom_container_one_playertemplatescustom_container_two_playertemplatescustom_container_three_playertemplatescustom_container_four_playertemplatescustom_gamelift_two_playertemplatescustom_gamelift_three_playertemplatescustom_gamelift_four_playertemplates1v1_container_bottemplates1v3_container_bottemplates2v2_container_bottemplates2v2_gamelift_bottemplatesarena_container_parenttemplatesrift_container_one_playertemplatesrift_container_two_playertemplatesrift_gamelift_two_player_RESPONSE {

    current_page: number;
    matches: {

      access: string;

      access_level: string;
      account_id: null;
      arbitration: {
        conflict_resolved: boolean;

        end_time: string;

        start_time: string;
      };

      cluster: string;

      completion_time: string;

      created_at: string;
      criteria: {

        slug: string;
      };
      draw: boolean;
      game_server_instance: {
        allocations_last_updated: null;

        available_allocations: number;

        backend: string;
        backend_data: {

          server_id: number;

          uuid: string;
        };

        created_at: string;
        error: null;

        game_server_type_slug: string;

        id: string;
        launch_config: {

          fleet_id: string;

          profile_id: string;

          region_id: string;
        };
        optional_launch_config_params: {};
        owner: {};

        owner_id: string;

        owner_model: string;
        server_query: null;
        server_scaling_enabled: boolean;

        state: string;

        state_updated_at: string;
        unique_key: null;

        updated_at: string;
      };

      id: string;
      last_warning_time: null;

      loss: string[];
      matchmaking: null;

      name: string;

      origin: string;
      players: {
        all: {

          account_id: string;
          data: {
            BuffSnapshot: null;
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
          };
          identity: {
            alternate: {
              wb_network: {
                avatar: null;
                email: null;

                id: string;

                username: string;
              }[];
              xb1: {
                avatar: null;
                email: null;

                id: string;

                username: string;
              }[];
            };

            avatar: string;

            current_platform: string;
            default_username: boolean;
            is_cross_platform: boolean;
            personal_data: {};

            platforms: string[];

            username: string;
            usernames: {

              auth: string;

              username: string;
            }[];
          };
          reported_results: {
            draw: boolean;

            loss: string[];

            report_time: string;

            win: string[];
          };
          source: {
            extra: {
              data: {
                MultiplayParams: {

                  MultiplayClusterSlug: string;

                  MultiplayProfileId: string;

                  MultiplayRegionId: string;

                  MultiplayRegionSearchId: number;
                };

                allowed_buckets: string[];

                allowed_buckets_relaxed: string[];

                crossplay_buckets: string[];

                double_character_key: string;

                matchmaking_rating: number;

                player_count: number;

                rp: number;

                version: string;
              };

              from_match: string;
            };

            id: string;

            type: string;
          };

          state: string;
          state_data: null;
        }[];

        completed: string[];

        count: number;
        current: any[];
      };

      rand: number;
      server_data: {
        ClientSubmittedMatchLength: {

          ":id": number;
        };
        GameplayConfig: {
          ArenaModeInfo: null;

          Cluster: string;

          CountdownDisplay: string;

          Created: string;
          CustomGameSettings: {

            MatchTime: number;

            NumRingouts: number;
            bHazardsEnabled: boolean;
            bShieldsEnabled: boolean;
          };

          EventQueueSlug: string;
          HudSettings: {
            bDisplayPortraits: boolean;
            bDisplayStocks: boolean;
            bDisplayTimer: boolean;
          };

          Map: string;

          MatchDurationSeconds: number;

          MatchId: string;

          ModeString: string;
          Players: {
            ":id": {

              AccountId: string;

              Banner: string;

              BotBehaviorOverride: string;

              BotDifficultyMax: number;

              BotDifficultyMin: number;
              Buffs: any[];

              Character: string;

              GameplayPreferences: number;
              Gems: any[];

              Handicap: number;

              PartyId: string;
              PartyMember: null;

              Perks: string[];

              PlayerIndex: number;

              ProfileIcon: string;
              RankedDivision: null;
              RankedTier: null;

              RingoutVfx: string;

              Skin: string;

              StartingDamage: number;
              StatTrackers: string[][];

              Taunts: string[];

              TeamIndex: number;
              Username: {};
              WinStreak: null;
              bAutoPartyPreference: boolean;
              bIsBot: boolean;
              bUseCharacterDisplayName: boolean;
            };
          };

          RiftNodeAttunement: string;

          RiftNodeId: string;

          ScoreAttributionRule: string;

          ScoreEvaluationRule: string;
          Spectators: {};
          TeamData: any[];
          WorldBuffs: any[];
          bAllowMapHazards: boolean;
          bIsCasualSpecial: boolean;
          bIsCustomGame: boolean;
          bIsOnlineMatch: boolean;
          bIsPvP: boolean;
          bIsRanked: boolean;
          bIsRift: boolean;
          bIsTutorial: boolean;
          bModeGrantsProgress: boolean;
        };

        HissCrc: number;
        QosData: {
          ClientStats: {

            AccountId: string;

            NumPredictedOverrides: number;

            NumZeroedOverrides: number;

            PacketLoss: number;

            PingMs: number;

            PlayerIndex: number;
          }[];
          GameFinished: boolean;

          LastFrameId: number;
        };
        Rematch: {
          Votes: {
            ":id": boolean;
          };
        };

        SscMatchDurationSeconds: number;
        SubmittedMatchStats: {
          ":id": boolean;
        };

        Version: number;
        bGameplayEnded: boolean;
        bGameplayStarted: boolean;
      };
      shortcode: null;

      state: string;
      template: {

        created_at: string;
        data: {

          mode: string;
        };
        game_server_config: {

          game_server_region_priority: string;

          game_server_type_slug: string;
          require_player_region_data: boolean;
        };
        game_server_integration_enabled: boolean;

        id: string;

        max_players: number;

        min_players: number;

        name: string;

        slug: string;

        type: string;

        updated_at: string;
      };

      updated_at: string;

      win: string[];
      winning_team: any[];
    }[];

    total_matches: number;

    total_pages: number;
  }

  export interface Matches_all_id_RESPONSE {

    current_page: number;
    matches: {

      access: string;

      access_level: string;
      account_id: null;
      arbitration: {
        conflict_resolved: boolean;

        end_time: string;

        start_time: string;
      };

      cluster: string;

      completion_time: string;

      created_at: string;
      criteria: {

        slug: string;
      };
      draw: boolean;
      game_server_instance: {
        allocations_last_updated: null;

        available_allocations: number;

        backend: string;
        backend_data: {

          server_id: number;

          uuid: string;
        };

        created_at: string;
        error: null;

        game_server_type_slug: string;

        id: string;
        launch_config: {

          fleet_id: string;

          profile_id: string;

          region_id: string;
        };
        optional_launch_config_params: {};
        owner: {};

        owner_id: string;

        owner_model: string;
        server_query: null;
        server_scaling_enabled: boolean;

        state: string;

        state_updated_at: string;
        unique_key: null;

        updated_at: string;
      };

      id: string;
      last_warning_time: null;

      loss: string[];
      matchmaking: null;

      name: string;

      origin: string;
      players: {
        all: {

          account_id: string;
          data: {
            BuffSnapshot: null;
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
          };
          identity: {
            alternate: {
              steam: {

                avatar: string;
                email: null;

                id: string;

                username: string;
              }[];
              wb_network: {
                avatar: null;
                email: null;

                id: string;

                username: string;
              }[];
            };

            avatar: string;

            current_platform: string;
            default_username: boolean;
            is_cross_platform: boolean;
            personal_data: {};

            platforms: string[];

            username: string;
            usernames: {

              auth: string;

              username: string;
            }[];
          };
          reported_results: {
            draw: boolean;

            loss: string[];

            report_time: string;

            win: string[];
          };
          source: {
            extra: {
              data: {
                MultiplayParams: {

                  MultiplayClusterSlug: string;

                  MultiplayProfileId: string;

                  MultiplayRegionId: string;

                  MultiplayRegionSearchId: number;
                };

                allowed_buckets: string[];

                allowed_buckets_relaxed: string[];

                crossplay_buckets: string[];

                double_character_key: string;

                matchmaking_rating: number;

                player_count: number;

                rp: number;

                version: string;
              };

              from_match: string;
            };

            id: string;

            type: string;
          };

          state: string;
          state_data: null;
        }[];

        completed: string[];

        count: number;
        current: any[];
      };

      rand: number;
      server_data: {
        ClientSubmittedMatchLength: {

          ":id": number;
        };
        GameplayConfig: {
          ArenaModeInfo: null;

          Cluster: string;

          CountdownDisplay: string;

          Created: string;
          CustomGameSettings: {

            MatchTime: number;

            NumRingouts: number;
            bHazardsEnabled: boolean;
            bShieldsEnabled: boolean;
          };

          EventQueueSlug: string;
          HudSettings: {
            bDisplayPortraits: boolean;
            bDisplayStocks: boolean;
            bDisplayTimer: boolean;
          };

          Map: string;

          MatchDurationSeconds: number;

          MatchId: string;

          ModeString: string;
          Players: {
            ":id": {

              AccountId: string;

              Banner: string;

              BotBehaviorOverride: string;

              BotDifficultyMax: number;

              BotDifficultyMin: number;
              Buffs: any[];

              Character: string;

              GameplayPreferences: number;
              Gems: any[];

              Handicap: number;

              PartyId: string;
              PartyMember: null;

              Perks: string[];

              PlayerIndex: number;

              ProfileIcon: string;
              RankedDivision: null;
              RankedTier: null;

              RingoutVfx: string;

              Skin: string;

              StartingDamage: number;
              StatTrackers: string[][];

              Taunts: string[];

              TeamIndex: number;
              Username: {};
              WinStreak: null;
              bAutoPartyPreference: boolean;
              bIsBot: boolean;
              bUseCharacterDisplayName: boolean;
            };
          };

          RiftNodeAttunement: string;

          RiftNodeId: string;

          ScoreAttributionRule: string;

          ScoreEvaluationRule: string;
          Spectators: {};
          TeamData: any[];
          WorldBuffs: any[];
          bAllowMapHazards: boolean;
          bIsCasualSpecial: boolean;
          bIsCustomGame: boolean;
          bIsOnlineMatch: boolean;
          bIsPvP: boolean;
          bIsRanked: boolean;
          bIsRift: boolean;
          bIsTutorial: boolean;
          bModeGrantsProgress: boolean;
        };

        HissCrc: number;
        QosData: {
          ClientStats: {

            AccountId: string;

            NumPredictedOverrides: number;

            NumZeroedOverrides: number;

            PacketLoss: number;

            PingMs: number;

            PlayerIndex: number;
          }[];
          GameFinished: boolean;

          LastFrameId: number;
        };

        SscMatchDurationSeconds: number;
        SubmittedMatchStats: {
          ":id": boolean;
        };

        Version: number;
        bGameplayEnded: boolean;
        bGameplayStarted: boolean;
      };
      shortcode: null;

      state: string;
      template: {

        created_at: string;
        data: {

          mode: string;
        };
        game_server_config: {

          game_server_region_priority: string;

          game_server_type_slug: string;
          require_player_region_data: boolean;
        };
        game_server_integration_enabled: boolean;

        id: string;

        max_players: number;

        min_players: number;

        name: string;

        slug: string;

        type: string;

        updated_at: string;
      };

      updated_at: string;

      win: string[];
      winning_team: any[];
    }[];

    total_matches: number;

    total_pages: number;
  }

  export interface Matches_matchmaking_1v1_retail_request_RESPONSE {

    cluster: string;

    concurrent_identifier: string;

    created_at: string;

    criteria_slug: string;
    data: {
      MultiplayParams: {

        MultiplayClusterSlug: string;

        MultiplayProfileId: string;

        MultiplayRegionId: string;

        MultiplayRegionSearchId: number;
      };

      allowed_buckets: string[];

      allowed_buckets_relaxed: string[];

      crossplay_buckets: string[];

      double_character_key: string;

      matchmaking_rating: number;

      player_count: number;

      rp: number;

      version: string;
    };

    from_match: string;
    game_server: {

      backend: string;
      launch_configs: {

        backend: string;

        fleet_id: string;

        profile_id: string;

        region_id: string;
      }[];
      optional_launch_config_params: {};
      unique_key: null;
    };

    groups: number[];

    id: string;
    is_concurrent: boolean;
    party_id: null;
    player_connections: {

      ":id": string[];
    };
    players: {
      ":id": {

        account_id: string;
        aggregates: {};
        calculations: {};
        created_at: null;
        cross_match_results: {};
        data: {};
        files: any[];

        id: string;
        inventory: {};
        last_inbox_read: null;
        last_login: null;
        matches: {};
        notifications: {};
        points: null;
        private_data: {};
        random_distribution: null;
        server_data: {};
        server_owner_data: {};
        updated_at: null;
        user_segments: any[];
      };
    };
    players_connection_info: {
      ":id": {
        game_server_region_data: {

          latency: number;

          region_id: string;
        }[];
      };
    };
    recently_played: {
      ":id": any[];
    };
    relationships: any[];

    requester_account_id: string;
    reuse_match: boolean;
    server_data: null;
    server_submitted: boolean;

    state: number;

    updated_at: string;
    user_rule_config: any[];
  }

  export interface Profiles_id_inventory_RESPONSE {

    account_id: string;

    count: number;

    created_at: string;
    currency_sources: {
      expires_at: null;
      purchase_id: null;
      should_expire: boolean;

      source_platform: string;

      source_slug: string;

      total_earned: number;

      total_refunded: number;

      total_spent: number;
    }[];
    data: {};

    item_slug: string;

    result_type: string;
    server_data: {};

    updated_at: string;

    id: string;
    actions: any[];
    currency_data: {
      expires_at: null;
      purchase_id: null;
      should_expire: null;
      source_platform: null;
      source_slug: null;
      total_earned: null;

      total_refunded: number;
      total_spent: null;
    };
  }

  export interface Profiles_bulk_RESPONSE {
    account:Account;
    account_id: string;
    created_at: string;
    id: string;
    last_login: string;
    points: null;
    random_distribution: number;
    updated_at: string;
    user_segments: string[];
  }

  export interface Sdk_v1_product_5f8c5b9a91ca4e33b4afe3040b27e45e_RESPONSE {}

  export interface Sessions_auth_token_RESPONSE {

    access_token: string;
    account: {
      adult_age_gate: null;

      age_category: string;
      age_gate_date: null;
      avatar: {

        image_url: string;

        name: string;

        slug: string;
      };
      can_change_username: boolean;
      child_age_gate: null;
      completed: boolean;

      created_at: string;
      email_verified: boolean;

      game_age_category: string;
      game_age_information: null;
      game_links: {
        adult_age_gate: null;

        age_category: string;
        age_gate_date: null;
        age_information: null;
        all_platforms: {
          steam: {

            access_time: string;
          };
        };
        child_age_gate: null;

        created_at: string;

        game: string;
        is_requesting_game: boolean;

        last_accessed: string;

        last_game_login: string;

        last_seen_platform: string;

        public_id: string;
      }[];

      id: string;
      is_soft_locked: boolean;

      last_login: string;

      locale: string;
      mfa_active: boolean;
      password_set: boolean;

      presence_state: number;

      public_id: string;

      updated_at: string;

      username: string;
    };

    expires_in: number;
    mfa_required: boolean;
    sdk: {

      realtime: ServerConfiguration["realtime"]
    };
  }

  export interface Social_me_blocked_RESPONSE {

    page: number;

    page_size: number;
    results: any[];

    total: number;
  }

  export interface Ssc_invoke_attempt_daily_refresh_RESPONSE {
    body: {

      CurrentSeason: string;

      FreeCharacterRotation: string[];

      NextDailyRefreshTime: string;

      NextWeeklyRefreshTime: string;
      PlayerMissionObject: {
        ClaimLocks: {};
        MissionControllerContainers: {
          miscon_battlepassdaily_s5: {
            MissionControllers: {
              misctl_battlepass_daily_base_ffa_new: {
                Missions: {
                  mis_stats_dealalldamage_ffa: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_base_new: {
                Missions: {
                  mis_stats_dealalldamage_pvp: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                    bIsClaimable: boolean;
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_base_pve_new: {
                Missions: {
                  mis_stats_dealalldamage_pve: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_hard_new: {
                Missions: {
                  mis_stats_total_down_normals_hith: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                    bIsClaimable: boolean;
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_new_1: {
                Missions: {
                  mis_totalupringouts_assassin: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_new_2: {
                Missions: {
                  mis_ringout_2v2: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_battlepassweekly_s5: {
            MissionControllers: {
              misctl_battlepass_weekly_new: {
                Missions: {
                  mis_ringout_pve_weekly: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          "miscon_event_arenas5-3": {
            MissionControllers: {
              "misctl_event_arenas5-3": {
                Missions: {
                  mis_winarena: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_ftue: {
            MissionControllers: {
              misctl_ftue: {
                Missions: {
                  mis_ftue_play_rift_matches: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_ftue_daily_logins: {
                Missions: any[];

                UsedMissions: string[];
              };
              misctl_ftue_timed: {
                Missions: {
                  mis_ftue_play_team_friend_pvp: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c003: {
            MissionControllers: {
              misctl_unlockable_c003: {
                Missions: {
                  mis_airupspecial_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_sniper_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c011: {
            MissionControllers: {
              misctl_unlockable_c011: {
                Missions: {
                  MIS_Bubble_C011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_bubbleboy_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c016: {
            MissionControllers: {
              misctl_unlockable_c016: {
                Missions: {
                  mis_allypass_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_defense_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c019: {
            MissionControllers: {
              misctl_unlockable_c019: {
                Missions: {
                  mis_dealalldamage_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_saveally_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_splitnade_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c020: {
            MissionControllers: {
              misctl_unlockable_c020: {
                Missions: {
                  mis_allyseed_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_portalkb_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
        };
      };
      ReturnData: {};

      ServerTimeUtc: string;
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_claim_mission_rewards_RESPONSE {
    body: {
      ClaimLocks: {
        misctl_battlepass_daily_base_new: {
          mis_stats_dealalldamage_pvp: {

            "fa5df2a7-5015-4edf-b4f4-a1c7dd517d7d": number;
          };
        };
        misctl_battlepass_daily_hard_new: {
          mis_stats_total_down_normals_hith: {

            "f367cc26-94aa-472e-afb7-f5beca415eeb": number;
          };
        };
        misctl_battlepass_daily_new_2: {
          mis_stats_dealalldamage_bruiser: {

            "c18afb8d-c46e-45d6-95e7-c3a6592ccb89": number;
          };
        };
        misctl_battlepass_weekly_new: {
          mis_ringout_pvp_weekly: {

            "e2d513a5-227d-439a-a7c5-d95a6fdfd18d": number;
          };
        };
      };
      MissionControllerContainers: {
        miscon_battlepassdaily_s5: {
          MissionControllers: {
            misctl_battlepass_daily_base_ffa_new: {
              Missions: {
                mis_stats_dealalldamage_ffa: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
            misctl_battlepass_daily_base_new: {
              Missions: {}[];

              UsedMissions: string[];
            };
            misctl_battlepass_daily_base_pve_new: {
              Missions: {
                mis_stats_dealalldamage_pve: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
            misctl_battlepass_daily_hard_new: {
              Missions: {}[];

              UsedMissions: string[];
            };
            misctl_battlepass_daily_new_1: {
              Missions: {
                mis_totalupringouts_assassin: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
            misctl_battlepass_daily_new_2: {
              Missions: {
                mis_ringout_2v2: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        miscon_battlepassweekly_s5: {
          MissionControllers: {
            misctl_battlepass_weekly_new: {
              Missions: {
                mis_ringout_pve_weekly: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        "miscon_event_arenas5-3": {
          MissionControllers: {
            "misctl_event_arenas5-3": {
              Missions: {
                mis_winarena: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        miscon_ftue: {
          MissionControllers: {
            misctl_ftue: {
              Missions: {
                mis_ftue_play_rift_matches: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
            misctl_ftue_daily_logins: {
              Missions: any[];

              UsedMissions: string[];
            };
            misctl_ftue_timed: {
              Missions: {
                mis_ftue_play_team_friend_pvp: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        miscon_unlockable_c003: {
          MissionControllers: {
            misctl_unlockable_c003: {
              Missions: {
                mis_airupspecial_c003: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_dealalldamage_c003: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_ringout_c003: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_sniper_c003: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_usetaunts_c003: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        miscon_unlockable_c011: {
          MissionControllers: {
            misctl_unlockable_c011: {
              Missions: {
                MIS_Bubble_C011: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_bubbleboy_c011: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_dealalldamage_c011: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_ringout_c011: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_usetaunts_c011: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        miscon_unlockable_c016: {
          MissionControllers: {
            misctl_unlockable_c016: {
              Missions: {
                mis_allypass_c016: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_defense_c016: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_ringout_c016: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_usetaunts_c016: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        miscon_unlockable_c019: {
          MissionControllers: {
            misctl_unlockable_c019: {
              Missions: {
                mis_dealalldamage_c019: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_ringout_c019: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_saveally_c019: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_splitnade_c019: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_usetaunts_c019: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
        miscon_unlockable_c020: {
          MissionControllers: {
            misctl_unlockable_c020: {
              Missions: {
                mis_allyseed_c020: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_dealalldamage_c020: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_portalkb_c020: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_ringout_c020: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
                mis_usetaunts_c020: {

                  MissionGuid: string;
                  MissionObjectives: {

                    Progress: number;

                    Slug: string;
                  }[];
                };
              }[];

              UsedMissions: string[];
            };
          };
        };
      };
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_create_party_lobby_RESPONSE {
    body: {

      Cluster: string;
      lobby: {
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

        GameVersion: string;

        HissCrc: number;
        IsLobbyJoinable: boolean;

        LeaderID: string;

        LobbyType: number;
        LockedLoadouts: {
          ":id": {

            Character: string;

            Skin: string;
          };
        };

        MatchID: string;

        ModeString: string;
        Platforms: {

          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {

          ":id": number;
        };
        ReadyPlayers: {};
        Teams: {

          Length: number;
          Players: {
            ":id": {
              Account: {

                id: string;
              };

              BotSettingSlug: string;

              CrossplayPreference: number;

              JoinedAt: string;

              LobbyPlayerIndex: number;
            };
          };

          TeamIndex: number;
        }[];
      };
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_game_launch_event_RESPONSE {}

  export interface Ssc_invoke_get_calendar_events_RESPONSE {
    body: {
      Events: {
        controlled_data: any[];
        controlled_features: {

          feature_name: string;
          feature_settings: {
            features: {

              global_message_feature_name: string;
              global_message_feature_value: boolean;
            }[];
            global_message_lookups: {

              id: string;

              slug: string;
            }[];
          };
        }[];
        data: {
          description: {
            localizations: {

              join_discord_carousel_description: string;
            };
          };
          display_in_modal: boolean;
          featured: boolean;

          largeImage: string;

          priority: number;

          slug: string;

          smallImage: string;
          title: {
            localizations: {

              join_discord_carousel_title: string;
            };
          };
          titleSmall: {
            localizations: {

              join_discord_carousel_smalltitle: string;
            };
          };
        };
        disabled: boolean;
        end_at: null;
        entry: {

          calendar_type_slug: string;
          deleted: boolean;

          entry_type: string;

          id: string;

          name: string;

          root_entry_id: string;

          task_start_at: string;
        };

        event_record_id: string;

        event_type: string;

        start_at: string;

        state: string;
        tags: any[];
      }[];
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_get_country_code_RESPONSE {
    body: {

      region: string;
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_get_equipped_cosmetics_RESPONSE {
    body: {
      EquippedCosmetics: {

        AnnouncerPack: string;

        Banner: string;
        Gems: {

          GemSlots: string[];
        };

        RingoutVfx: string;
        StatTrackers: {

          StatTrackerSlots: string[];
        };
        Taunts: {
          character_BananaGuard: {

            TauntSlots: string[];
          };
          character_C017: {

            TauntSlots: string[];
          };
          character_C018: {

            TauntSlots: string[];
          };
          character_C020: {

            TauntSlots: string[];
          };
          character_C021: {

            TauntSlots: string[];
          };
          character_C023A: {

            TauntSlots: string[];
          };
          character_C023B: {

            TauntSlots: string[];
          };
          character_C025: {

            TauntSlots: string[];
          };
          character_C026: {

            TauntSlots: string[];
          };
          character_C027: {

            TauntSlots: string[];
          };
          character_C028: {

            TauntSlots: string[];
          };
          character_C029: {

            TauntSlots: string[];
          };
          character_C030: {

            TauntSlots: string[];
          };
          character_C031: {

            TauntSlots: string[];
          };
          character_Jason: {

            TauntSlots: string[];
          };
          character_arya: {

            TauntSlots: string[];
          };
          character_batman: {

            TauntSlots: string[];
          };
          character_bugs_bunny: {

            TauntSlots: string[];
          };
          character_c019: {

            TauntSlots: string[];
          };
          character_c024: {

            TauntSlots: string[];
          };
          character_c036: {

            TauntSlots: string[];
          };
          character_c038: {

            TauntSlots: string[];
          };
          character_c16: {

            TauntSlots: string[];
          };
          character_creature: {

            TauntSlots: string[];
          };
          character_finn: {

            TauntSlots: string[];
          };
          character_garnet: {

            TauntSlots: string[];
          };
          character_harleyquinn: {

            TauntSlots: string[];
          };
          character_jake: {

            TauntSlots: string[];
          };
          character_shaggy: {

            TauntSlots: string[];
          };
          character_steven: {

            TauntSlots: string[];
          };
          character_superman: {

            TauntSlots: string[];
          };
          character_taz: {

            TauntSlots: string[];
          };
          character_tom_and_jerry: {

            TauntSlots: string[];
          };
          character_velma: {

            TauntSlots: string[];
          };
          character_wonder_woman: {

            TauntSlots: string[];
          };
        };
      };
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_get_gm_leaderboards_RESPONSE {
    body: {
      OneVsOne: {

        AccountId: string;

        CharacterSlug: string;

        Rank: number;

        Score: number;
      }[];
      TwoVsTwo: {

        AccountId: string;

        CharacterSlug: string;

        Rank: number;

        Score: number;
      }[];
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_get_hiss_calendar_events_RESPONSE {
    body: {
      Events: {
        bIsCurrentlyActive: boolean;

        calendar_type_slug: string;
        controlled_data: any[];
        controlled_features: any[];

        created_at: string;
        data: {

          AnalyticsContext: number;

          AnalyticsId: string;

          AnalyticsSubType: number;

          AnalyticsType: number;

          ArenaLeaderboardSlug: string;

          DeepLinkingUrl: string;

          DisplayLocation: number;
          EventComponents: {

            Component: string;

            ComponentType: string;
            Link: {
              ButtonText: {
                localizations: {

                  loc_Default_Text: string;
                };
              };

              Link: string;
            };

            Priority: number;
          }[];

          FeaturedRewardHsda: string;

          GracePeriodInHours: number;
          MatchRewards: {
            LossRewards: any[];

            MatchTypes: string[];
            WinRewards: any[];
            bGrantMatchRewards: boolean;
          };

          Recurrence: number;

          ResetComponentCadence: number;

          StoreDeepLinkingUrl: string;
          TimeSpan: {
            EndTime: {

              Day: number;

              Hour: number;

              Minute: number;

              Month: number;

              Year: number;
            };
            StartTime: {

              Day: number;

              Hour: number;

              Minute: number;

              Month: number;

              Year: number;
            };
            bHasFiniteEndTime: boolean;
          };
          UiData: {};
          bDebugResetAtEnd: boolean;
          bIsEnabled: boolean;

          slug: string;
        };
        deleted: boolean;
        entry_options: {

          end_at: string;

          start_at: string;

          task_start_at: string;
        };

        entry_type: string;
        event_type: null;

        id: string;

        name: string;
        private_data: {};

        tags: string[];

        updated_at: string;
      }[];
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_get_milestone_reward_tracks_RESPONSE {
    body: {
      RewardTrackStates: {

        ClaimedRewards: string[];

        CompletedTiers: string[];

        CurrentScore: number;

        CurrentTier: number;

        Guid: string;

        HighestClaimedInifiniteTier: number;

        InfiniteTierThreshold: number;

        RewardTrackClass: string;

        TrackSlug: string;
        bHasPremium: boolean;
      }[];
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_get_or_create_mission_object_RESPONSE {
    body: {
      aggregates: {};
      calculations: {};

      created_at: string;
      expire_time: null;

      id: string;

      object_type_slug: string;
      owner: {};

      owner_id: string;

      owner_model: string;
      server_data: {
        ClaimLocks: {};
        MissionControllerContainers: {
          miscon_battlepassdaily_s5: {
            MissionControllers: {
              misctl_battlepass_daily_base_ffa_new: {
                Missions: {
                  mis_stats_dealalldamage_ffa: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_base_new: {
                Missions: {
                  mis_stats_dealalldamage_pvp: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                    bIsClaimable: boolean;
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_base_pve_new: {
                Missions: {
                  mis_stats_dealalldamage_pve: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_hard_new: {
                Missions: {
                  mis_stats_total_down_normals_hith: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                    bIsClaimable: boolean;
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_new_1: {
                Missions: {
                  mis_totalupringouts_assassin: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_battlepass_daily_new_2: {
                Missions: {
                  mis_ringout_2v2: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_battlepassweekly_s5: {
            MissionControllers: {
              misctl_battlepass_weekly_new: {
                Missions: {
                  mis_ringout_pve_weekly: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          "miscon_event_arenas5-3": {
            MissionControllers: {
              "misctl_event_arenas5-3": {
                Missions: {
                  mis_winarena: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_ftue: {
            MissionControllers: {
              misctl_ftue: {
                Missions: {
                  mis_ftue_play_rift_matches: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
              misctl_ftue_daily_logins: {
                Missions: any[];

                UsedMissions: string[];
              };
              misctl_ftue_timed: {
                Missions: {
                  mis_ftue_play_team_friend_pvp: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c003: {
            MissionControllers: {
              misctl_unlockable_c003: {
                Missions: {
                  mis_airupspecial_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_sniper_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c003: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c011: {
            MissionControllers: {
              misctl_unlockable_c011: {
                Missions: {
                  MIS_Bubble_C011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_bubbleboy_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c011: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c016: {
            MissionControllers: {
              misctl_unlockable_c016: {
                Missions: {
                  mis_allypass_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_defense_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c016: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c019: {
            MissionControllers: {
              misctl_unlockable_c019: {
                Missions: {
                  mis_dealalldamage_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_saveally_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_splitnade_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c019: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
          miscon_unlockable_c020: {
            MissionControllers: {
              misctl_unlockable_c020: {
                Missions: {
                  mis_allyseed_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_portalkb_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_ringout_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c020: {

                    MissionGuid: string;
                    MissionObjectives: {

                      Progress: number;

                      Slug: string;
                    }[];
                  };
                }[];

                UsedMissions: string[];
              };
            };
          };
        };
      };

      unique_key: string;

      updated_at: string;
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_hiss_amalgamation_RESPONSE {
    body: {

      Crc: number;

      MatchmakingCrc: number;
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_load_rifts_RESPONSE {
    body: {
      DynamicInstanceRuntimeData: {
        Tutorial_Rift_1: {
          RuntimeChapterData: {
            "4C63D9D74E00FD2CAD45DE83A3B1C00D": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {

                "0": string[];
              };
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "4E67AD8246BD4E3A2F9FA09B70107D6B": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            E1FE3E7C4E882AD695C9048A0A404433: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        academia_rift: {
          RuntimeChapterData: {
            FE067CBC4211793440D65291C1194884: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "07CC6C5348EC4BC57618C291BEED20E7": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "0D7C71EF4C8586F5ACF85A91885245AA": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2AB632EF407B13028DBC7BA7634811A3": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2E9656514C869A8A8A791087F7D1DCD2": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "37EF15424C73C1FE45EDF0A6875389C9": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "38E94F404996CAECE5DC04A7D56F2D44": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "586B2BFB46C3E7218EA5CFBA8B3F8D9A": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6229D549481479D0222DA2A7445CD115": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "777A16E841A417C5EEB438A7CB4A7AEA": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "8C8448DA4CB7E07468F568A5D81C7659": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9BAC123744BD4A15AF1EEFAFE6108CFC": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            A196649045B61CDEE921ED8A2F7CB73E: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            A56F960640B07FCFD12D29A69216780B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            AEC3D553414AB6C601B089A6AB8A0E33: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            CCC3373C471350688B93D1A09CD22C0E: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D2EC6C9C4A1375042D9DC29451D6AE9E: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D54658704133C2FD50A66592F946EB68: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D960C95F456A33C626A36B8AA6E3E4A0: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            E1668D864512BBFE000E988CDCEA1903: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            EE55BA134407DC6667A28DA63B8784B7: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        discipline_rogue_rift1: {
          RuntimeChapterData: {
            "54286C9B4346EE8E1F120AB2205F19AC": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        heroic_rogue_rift: {
          RuntimeChapterData: {
            "49F29D0E4C0B75751C5A1894D3D68BDD": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
          };
        };
        horror_rogue_rift: {
          RuntimeChapterData: {
            "39DF41EA4CC286F15048C1A0FADB9E2F": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "4F4AC2E44CA8713989F4DEA7EDC507E8": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "9BDA81444360717C3917A9B2D7FCB8FC": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F528472D41166DE07CE47988F3F367B8: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        jason_rift_4: {
          RuntimeChapterData: {
            B9F15D9B44C7F5FD7F980AA963E6E96D: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "08408312471255A457969CB322AC3014": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "0A956A444DCEA7843DFA7C9EF8EB7EC9": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "15FE4F35475BAC36AC52B38ADFDD7565": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "361A0CC748A5BE49D5D39F8EAB831A23": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3B3736D04A88B6333B98349A9F94E6BA": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "759447274279FA7F636C27B8838BCAA6": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7C886A314F0CA66E98644886E060DA46": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7D9699E541A8191B4BA213A616DE5293": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "832AC63444ADFCD65699C2BAF6F13D94": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "992D88DD44436FD00773399A7AB9C4DE": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9C7D77264F5692F1A7B3CDBB7E496A61": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B8AF6D2B4D8BE43ECE88D0A1AD19F36C: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            BC977AAF4847122C05A6DDAD745B9A23: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            BF2849DA465D447F4A2ECCB30E394FA5: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D18B1648495CB61F89552BB86E82FB26: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FA27A3B94923100902EEBC90DA995CEB: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FD6B39FA41743E72866E91A0131E015A: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
          };
        };
        mvs_joker_rift: {
          RuntimeChapterData: {
            "164A492D440EA7BFC8A6C9AF50F96A49": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "0CA53BEB41408C03787601A324E04D41": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "17AF96544D51E91A1B2970988D314D85": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "1F3CD9D9457EBC86102E1D91148348C2": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "29C3322D4765912CDAA02E8C54AF7C35": {
              EnemyTeams: {
                BotLoadouts: any[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "372CB43042F19B74A8594CA64EA78759": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3986C6274D8F3D499E72AA9BE0D90269": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3F42F84149C7905AA9726D8BE98AD51B": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "64A5C2E14196281AD3B39E9D5F6C621C": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "65EF1560462DF58FEAE157B06D342EAC": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6ADBFC734BFCDF0988AB90A67BF021F2": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "71D8FE73424D21104EC7D9BD830B1D06": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "80F912E94E7DFD27ABD399AA5F6711F9": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "84AF639E46BF07F0F35F1692D2AC6F4D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "87F8EA13421B089C628C27A47B858876": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "8D5B9453475C90F35DDC3FB7353321FF": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9F0128FC4EBDF7882586C2B704937B86": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            AF138A744A8CDF1ACBFB619B044CB3A4: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B008F64E4283CE4144495185DC255621: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            BDB1E2864291E380E2A57FB6A75A12DA: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            D94834C74FF7790C6E3281B9EDD29DE0: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D9C24BB8477FC0FF1B99B7AB47E52281: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            DBCC4E0C4C3F5EB9BA77FFA7E8858133: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            DDD33B244AED89173E90FAAF1BC33052: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            EF645A6A459DC8579E8856BAA6A09C82: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F04476BA49AE7B257A44B9BF0D156A24: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_batman_rewind: {
          RuntimeChapterData: {
            CACE1F524B60F3B7C8D769ADB22A23D5: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "014C90904AFA1434BE2B66BC8589D1EA": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "341387E2475C0B788CE04B923F1A056A": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "8E1863564C3D24A2A92D508E3548D1BF": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9B051AFA4CEEA1A6409A98AC837AC151": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B50FC54F433894642F634BAB7D6BBDE6: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            BF0B9E0048253B16BA55AAB1F68049B9: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C4A4B9824DBE31A0CA0809B8FCD7E161: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            C662BF104890459FD9ED32B7AF12D817: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            CD028C9542D3E31F9125179E38F57123: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E568F6CC4BE60BE41408A297B34E3761: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            EC567E2C40D3423F718CFE9486290A57: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            ED3596A042B1B7A555D077BEBC1CCDE3: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            F30A4CD34F2A478E7989FA817406C35A: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_clue_hunt: {
          RuntimeChapterData: {
            "543731E045AB26926CC339A912C08FD8": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "13CEB48342B28DF80D17519EA60E8478": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "1450B44E42527864AEBCE3A426F8E6DD": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "29090FAA4A2E76B933CAE7964E22AD18": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2C0B4A8345435333E0592594EF2A348A": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "397E2D8E481779C0B03FC9A735C459ED": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "3D2FFD754AA15372F413EA9C150736A2": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "41E309454CF6849A2322EDBFAA8E1BE3": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "4233F0854E794F239DFC378AF982A5D6": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5925B81A4CF07035A22D77863359AD3D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6C7EEA614759685605600FB9243FD6D2": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "791139FF4EF3F504411C39B4C17D547F": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7B19AB80433B94198DE119AAA06D7425": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "94719EFF4E29AFFF3BCBF68787EA9572": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9643CD314193C1045FCA6F885AF1CFFF": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            BA333DFE4D65194C248F19BBD657FB1F: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D2E8A2EC42AD983C8AB0969C386348FB: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D7AF551045BD0CA4A449E6AD9ED01318: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            DF0196FB490928CB808B4389F387B0A5: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E38EBCD04608C2223A5CF5A5319B0EAB: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F151CF3949C80753BBC78C9AF1A31D0D: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
          };
        };
        rift_haunted_megamix: {
          RuntimeChapterData: {
            A91723B44D9BFE53A6CC3BB1C16A9035: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "037BAD9848BEA0434D36AC994AC16DC5": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "0A10F3694AA1A77622A39BA5C35CA654": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "1824659E47AE2370A3FEF985074900A3": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "1CF61852485BAF6AEE164B96BE0F563D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "1D8631FE48786C903A6EA7988DC53A7B": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2472C51C473B3E689A1F1284FCCBF06E": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3B3B148046A283F43406C9A40F3BEF93": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            A516FC0C44514D37631DFDAED207FD7A: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            AFAADDF04232060211C7C083D9FC3554: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B3BD96A249499FB7B3612688196A2C1F: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            CD9A0491420BC428FB304FAE382EDD21: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D4CCA31240E2E14C1071B0AD9CBCD65B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D52EECB1466A74F40F3EC29616B211C9: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s1_beach: {
          RuntimeChapterData: {
            "3DDAC5B149852E9EBC987691647331AE": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "0520DFE349580B78E4834392A03E4576": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "2529B1264AD4FB8C03AAB48ACA794BBD": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3B35F3DA428080C3B8A8F8BA1ED2F341": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "4621C712435389D1803A7B97F0D17519": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "4906A15B42173572EF707EA1286C2D00": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "582668B54298EA7A00C5849074CCB3ED": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "7EECA4DB47545C16093018AD27A8AE7E": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "8CEC7C7244D4925A071EF4B5FFEA10AE": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A55CFB6A4BAAB999ACA28B89C36FA2E6: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            AE38A56940BDDDF5D74C63B6F94E71CD: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B1B954DF4DBBAC05D9C022A5465B87C8: {
              EnemyTeams: {
                BotLoadouts: any[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B1C7AF014B307F3C5B87339F153ECAB0: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            BF3634E2410E0B03B3450A9A64D4FF6A: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C27E6E224D3B9D5BE5774984D36C3E5F: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C758852445AEDDA0537AF9B14E0A9B13: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            DBF5599D4E22690A1DA3969AF919FD02: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E457A11346FB85E84CFEC5A9A329A990: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E8D0FC2E414E97B9E554FE9CCE8A559B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F96EF0AC4F7674645DCFB7B8941183A0: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FBAE91B245A9DDD8E50853B1A1FFDD07: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FCF1A470489DFB4EB6DFBC8C33679561: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FFCDC68F44615977D4C5DC80B0C0678B: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s1_sharks: {
          RuntimeChapterData: {
            B12B518E40B3ED2FA3C9449F858FC135: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "1CACFEF54B16DDDF7BC69F8CC271EDFA": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "238F11564682EDA5F1EA54A4E5A61C75": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2E2A986E457CD19143A28596989E183A": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "31C7853D465A596735E9068A92AD6FFA": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3B2C1FD348BFD16582E365891B4DBC33": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3CA914014D9DED4E2774E88D541242B6": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "603EBFB042B8A66BFD81C0B80D6B78BF": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "722F9F624EFD28C7886F94B128EAD00D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "80E947D6424FCA79396C309268278AC0": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "905BE6FB4FF03B3AD64C3E908AB23509": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "95CAB563405A4F0F3D3CCF9B2D6A919F": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            A65FE490433783F163DD8BA90F76F989: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B503D69644BC665102E86E852C28B628: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            BD737284419EF5E6DD5CD798687EC2E8: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            CD1BE7E54FFC58B1A7F8468C2516E507: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            D1A184804E8A618B5D838FAF0A6D637C: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E1D882FB44D057B59534C99738F4F41A: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F0F513BC4A182BD5BBB6EAA200272411: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F2ED74BE4BD8E25F906378A3D21A606D: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F8FA38CD44E040CB158C149C97BB6BBF: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FC087E934A11D5DBA6AD2E8F53B40B1F: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s2_mojo_jojo: {
          RuntimeChapterData: {
            "512DAB3C4D51B7C1695F85945F4FDF59": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "228421BD4761C7C38120FD818C798AF4": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "362037CB40F3D66203C6579559AF7420": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "53301FF3469F55C3C8ECE7A3950E757E": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "55ABE7374719AD7F75BBA9977ACF3ECF": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "5F86200D49DCB7B130FB208D60F83551": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6A9BB59747D09089E1FA5FA002CC6919": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7021DD504673FFF98061FEA846DFB04D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "735BCDBC4058BA1DCB7E019010FE8681": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "8D2AFA094CE2C6B7AD763381C646CE95": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "8EB94D7F4159D2CD8F34E59239CE46C0": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "93571B114BC21C4464DE17B90EE0EB80": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "9D858C9D4B1627C2EA8253A7B1E0D007": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            AD82C69146DB43CCE94DAFAC2A2DE6B5: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B25BD4854DB736E356D4D999F2A816DB: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            B4C74D264600BDC6B665CE9B2CE0694C: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D8339BF141DF0C9C7772EDAF5D89809D: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            DC447866448CBF65C25BE09CC91EDF77: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            DE778E704F4871DD5EE04595AE1A1F19: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FBDF2AAE41070BBDE863E6BB147D081C: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s3_c030: {
          RuntimeChapterData: {
            B50D41A0458B487F90025A880EE7C342: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "0022ED7644117BE46E8ECE912E0CEBDF": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "10ECD83B4BCD42D5BC0095B9167079D3": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "304C2D5443E203087CA0A19862A77E6A": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3E2BAB8E48AA0C17B91823A38797CFC8": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "43C7A6CD46762E6EB6831D98DC4B726F": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5D7D9B944F995B54DC3085B4A773C810": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6B2CBE54488FE1095921C1AB44E3D8F0": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7126C0F74156A13170228C99039CC221": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "73B962F046AA1918516AA195DDFBCFD4": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "938E8A2B43C7186577CC71AF580CA5A2": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A20DD5084681CE811E36F3A7A1D459F1: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A8E80F11450B43F4D11B18AF3389CABC: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            AB23C53843D1D03F0D85B1B02D415F83: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            AE96346A4B99D2AF38A1D5949AFF7EF0: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B9CB3BAB440BF36BD924E5A562D67B7D: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D3A2865540FE01A3CF169F9D68AB5962: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D4A7A1F742F121969A2A2693D6C1FC47: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E40B286F4EF2F021AC4860A56EE9D656: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            FB8B262D45FCD24D50750DA767F41534: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FC0954934975B27E16F0A093B9A6271D: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s4_Challenge: {
          RuntimeChapterData: {
            "9909BAE9439985B8AF2B0892819F929C": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "1468230342C09B3D4011C6845EAD4A0B": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "23FAF5164F59DFA33F068A9F51382FF1": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "7630021E446DB2EE18B0F9895475288D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            C941549046D6BC47564D1494A38E0496: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D18974E3455E2867F27649BBBAD57353: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s4_r1: {
          RuntimeChapterData: {
            F5F1EFBD4B07EF0822796D9E7DFC2C61: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "04CA420D4C7E71D1C7E56AA5F5E0CC72": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2308CE8441D7C4B3A5B1628E76BFBA03": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "3706572A43447004BB248D8B2FA4BB72": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "456E129D497FC2CC60D3B5AC628C61A0": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "65CF44264F561F4D0E53BE8028C0DBDE": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "698CE2014FB57C569A9B1BAE112B3435": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6C20EA7647BA5F47B6635C88F4175888": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "79D02A3E4A3380D7F20458826FA37433": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "8F296D124B598B4522F2979083ED340B": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "93AA6DA3412D1F4DA86026B927D316F6": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "94A97D9548D6B4EACDF4ABAB3AEB688B": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            A681AD8348439C35A79D4ABF0433258C: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A6AD7D3C469099ED118180B7400E6ADD: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B597963C494FB6C747E6F6BAA6AC3576: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C9FC708D4CC450E4BA5BE5B9CD248FB7: {
              EnemyTeams: {
                BotLoadouts: any[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            CF5370C24C77A1FB8290FCB54F002C7B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            CF6CEBD74E683E3BAF136AACE1BACC96: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            DEB97B314E1366C5789948818BF5C61F: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E31ABF43405F85B606E37AB3ABA9F40F: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E433D5954272E262F0968B86F8E65E16: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            F25B562C46F9FA594C25F68B489BD888: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s4_r3: {
          RuntimeChapterData: {
            "7669E3C7401F2994E01B4EB1E6FE1DE6": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "049A9DBF42A575F1C8E627A833B22E54": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "0A3A394E47109E864BC93F859EDB4DD9": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "230AC5824F9374D9B30484A1AC154FF3": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "31C9B87D412147F69575898E80B933B3": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "4997574D4934F6708AF69B9FBC79AC7D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "54FE623549129E220C03F5895FBD073A": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7FD81D2149A791B4CA35FEB60A388C4E": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "9BDF87B2488E7E98F5815A8EE97188D7": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A47D59EE4C6C2FA37749E28031D1E8D4: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            ACCC88634A8C0F032AE1F6974EC29D0B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B783F37442DF31A61962C58768886477: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            BB393169480643ED6132FDBA75FF1628: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            CC511B6141B2CF8784C2EEA89F809EEB: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D139B6C14EF1215737102580DBF4C463: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            D812C6C94F7C5DB35174399B62081D0B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            EC52400348F35BD0C30756B0AF9E93F4: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F288C7D54BFCC29FDC803FB2C28B135B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FA0BE25A48424276ECB10288C15075A5: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_s5_challenge_chaos: {
          RuntimeChapterData: {
            "4DD08BF94B1D1789AB07A7ABC9C2953A": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        rift_samura_jack: {
          RuntimeChapterData: {
            AA771E314C068D4E5E1BF9A00739944C: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "25CA06C34FE1FD7ABD92E3ACAD4D16D7": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2B6DF77945BD4F0D8850E184ED318246": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "30919D8844F500A64A56EAABA5CA2C38": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "47714E7347CD88C5D1309DB72581C857": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "59EB7EB649CBCA451DEFC0A34AE5DD54": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5C82E2764EC3D78BCF42FA8CEF4CB192": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "5E47CD0A4DDF51BEC4A5F382F808C9E6": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "6C163CC742128050D133149B24919F34": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "74521D6544D8ABFE949D6DAC0CD627BF": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "84059A2B4AFFA53D3C903CA210D06838": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "8821400C4210C537C3333580A1A2ED3C": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "957D6C57438045E47E0F94B0AE6C08F0": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9F98089949679C79344C67BAC2756E57": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            A56546264848287175FF53969CC1FC71: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            CCCC24FD428658487345939D511620ED: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D51580A141433D9665E1F89B026D9214: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E5B7581648F898312A298CAF131663A6: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            EAEEC61C440952392CDB47BA77572340: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
          };
        };
        rise_of_smith: {
          RuntimeChapterData: {
            EAFFB37446A9FA578120989CE18EDC6A: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "026096E148B3CC0BA1F1CB87D0D399AC": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "03FE6A254950A3F0AC3EFDBBB63BA43D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "1353912F41A5CC818E2AE3BE5E8EB1C1": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "21900DEE4743FC276EC94DB7434219C3": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3202F1214C788063038600B051B18002": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "4D6504594B38AD609F6F7F9A8C9F7F49": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5193596B47235C1ABBE7A99C9CC3C410": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "52373B5440C5545E2D3EC4AD90410D33": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7600CFF445502115DD6E7286A5BAE0C5": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9BEEA5A84C805DEA10EDB08092C28F5F": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9F039E5F49C59C7486375AB6F6389A11": {
              EnemyTeams: {
                BotLoadouts: any[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A3D6333C4D1C488C14976BA4E1E976B2: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            A658E9D4440CB869228D07A500DEF9EF: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A6C308CC4586166A563D4FB5C8147F18: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            ADD6B2BB4B6CD137D79B27968C1B7954: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C055C0E14DB635EF0BF978A46721D032: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            DA9585E2431B324A0DED329AB9F647CE: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            EAA1B47548EC6FBF924956AEDBE929B4: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FDCF1B864F56F4B5F25C93899853666D: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        s2_rift2: {
          RuntimeChapterData: {
            B1EC4D574F2EEDAA859C67B872761325: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "297DD7484F145C264348BE9BBB8E05BE": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3F4FD93547CBA417BED2558EA5EB5428": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5B4FE50942D47D10139185AACEF43C60": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "62188ADC44D81391D3AF13B86D016397": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "66DE8F9B49EBA2F9285B918A93823144": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6B371F94428C276FA0C2F48865B422F5": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "771D6CA44D417EB30DD708AA8D9433FF": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7E227F464D218C28E708748CAF448384": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7F8CBE6E4165CCDA06B2C599D90F4B09": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "7FC65772420439EF2396B0BDF34536FE": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "8750AA9D4A2FFDB0908E2895FB8B1862": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "932D3BA249C1A33FABF1F4BE269461B0": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "9889EFCB426A47E7637C318F76A36C15": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "9C5B4C61412F2AD4F87C7A94CDDF9B14": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B3926E0B42217A34A7C883B2D92FFE36: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C56A9077430BD6EC8F1B9B9D47AAF7CA: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C57C5D1E46CAD0667D142CBA76B12646: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            E2F2A6CF48DCDCB02D0E30931B09CF45: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F7DA6CDC4FCB0CB720FFD7A1F709280D: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FE96AE7A479BCB2415577C97EC978C0B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
          };
        };
        s2_rift3: {
          RuntimeChapterData: {
            "4AABA23941365B519E80FCB86F3B8211": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "086F081949C612277CEA3088D2BE388B": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "2B6EC7A54E7BB60E0204A6B59670123F": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "32F1970048E216E081191C9978B4D9E7": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "45632978484646AF36342BA94848E957": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "55B9BA834C078719E20A98B0070FC654": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5911DAB244B295C4180BFFB77B58F2FD": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6859DCA9414C05A2453BF39D56D9A8A2": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7311EF3E4F609F2E91239A9A07D205CC": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "75400CBE477C015409FB03BFB41A5389": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "8C3328974CE2625A936AEF8ED87B0494": {
              EnemyTeams: {
                BotLoadouts: any[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "93A993054AAC6091FDC393915C8B5AF3": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            B0444FDA42191D81027A5AB7CA95E9AD: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            BC2D702F4B866845C87A05B1A0110322: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D6F440A8471D45F6AFB9CB986AE72FDF: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F2EFCEDF42FF8CB3BCBE0EA3FD9C2CE2: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FC7313D243933E9297545EA59D49B5F8: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        s3_rift3: {
          RuntimeChapterData: {
            C53B5A904D11EAAC9553729D3985CFD9: {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "1285CEA34EA675FBA2785AABC53F0255": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "3E5D1BB54B66CBA41542B589EAFF1E3D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "4299766240352C2609D673BDD900EE1D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "5531B21B4AF138BB6E9DE785FDC63EF8": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "83A3C206437027992D619BA6DEF2C557": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "8817AA0443FB47164C8E70B394DB4767": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "8E3EFCF74B506851FB01B7A0A396DE40": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            CDBF43E04AFF5453F260A690E9868A6A: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D0D632A14889A445A632A2AAA46A8410: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            D4FB2DD241896CFCC4C139892991BC0D: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            DED11B5A411C3D130F3AB4B1B34DF14B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E29BE4AA4AEE48A9FE86DEAA08C153E9: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            E6B8237F460EE03A61FD6A9CE60AB093: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            EF6D36CC4944BF137244E5B7317C2B27: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F2190E7B4ED99AC89032DB99632AAABC: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F8C5E7D348B6763886272FB1B8B4A60C: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FA1ABD4F4EF9A8B56AE1AF8FE3709F16: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        s4_rift1: {
          RuntimeChapterData: {
            "9AB1535C481F4D812F7B4293B8E9CD44": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "14AD89DF4ED5BEE0635C84813C397553": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "28AA88BA4A2AB6868C89C094A7D80C73": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "421FBDD84D256DB2F84B09A33F2109D5": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "44817B534D8945BB32AA038C9DCC443B": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "4BA9CD054904ADAD671015A9737B6C22": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5A0EC4BD4CE743F11CB7BA876C973D57": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7A2312FA401AF979817282B92E934478": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "81070CD34D2AF8A84DEED68C4DB11D62": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "99FC89A04EB11AC3363927972983E155": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9A48450D493ACB630F188A9195E1259D": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9CE1F2D84D22A0C07C92C592D21A0B84": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9DFEBFF349B8C2EBCDA1D89190F2763F": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            AF3656B342B763CB74B50390FAB42DB4: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B5EA3BAB475FB97C28FD90A3BED365C5: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            BCA444704420E64B9534B399653064B5: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C0A5735E44BB4AC13FFF199F20CFE64C: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C121D01349A7232E0704B3A53F16B5C1: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C79624D14A4AC81CD16566A5078250F4: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            DD46493E4C9D39DB88A2C5B8FA30293D: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E070DFF74C7565F98CB426BF67D18AA5: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            F2B0ADC44484A784F23A5D82A5AB4E6A: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            FF83640443FAD965753F2BA76BD51D07: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        tech_rift: {
          RuntimeChapterData: {
            "9BE1F581473C20C6210CCF8A8D3DABC7": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "00639B1B40A922C1E07030A494513643": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "02268CBA4F0206F197E9068A1FCA39C8": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "1DBD50B346B480B7841D368F0FD6D294": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "38E1A3C74DBE9D2883D6A0AB269141E9": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "4336EA244550D5F05BAB139762EB6A43": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5059F5B64082D6131EB55BA40CEA6A5E": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5B952F1946848654E62037A2DE9F796C": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5C7F75F3451D785EB9E8CE912D2191F8": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "5D4ECE91474AFCE7DA386C96EDC926F4": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5DB3F20A44F47304FC7075B85AC99957": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5F008B734B4DC23F4D94838AE0C2892F": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "9FBE7FE641F76C67F72104992B945AC4": {
              EnemyTeams: {
                BotLoadouts: any[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            A03770A34F4E315822B3BE8416F46B62: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B156263F41FAD081CC3923A4AA5C1B8C: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            B2B01CF2484A38A19AA6E8B335E71602: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            E0B00D53411CCEE3FDDEC7B86F3F1346: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            E62AF6F04F9B42A0FEDD329DD93D8A80: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            ECC644AF4DB5F7B2356D5FA2F1B20EF5: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            F3F3290E4AE00564E703038852BD327B: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
          };
        };
        triple_threat: {
          RuntimeChapterData: {
            "65503D00479ACE98995010A26D232416": {

              CurrentDifficulty: number;

              HighestDifficultyCompleted: number;
              NodeCompletionsByDifficulty: {};
              bIsChapterComplete: boolean;
            };
          };
          RuntimeNodeData: {
            "12BD5C1A41543DD061DA279FE6487133": {
              EnemyTeams: {
                BotLoadouts: any[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "3C4E8586464EA3DB1744B0B403173181": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "5F4C2D27419A321D755E819CE3FADF3B": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "6DAE1BDB482A492F70FC749A620C1E9C": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "7AB230384E6BE006EDFAE48180225405": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            "7CBE995A49F7A8AC63CA77B1B5943FD4": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "85FB616D490E778474479EA9B80E5BD1": {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            "9294473E4F9E53E83764E78A73A1F1C7": {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            B8FEA71344458A53C88B5E8BC67A52BF: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            BB7C6CCB4DCE28A830F8288EE32D5475: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            C1053C74429EC027A939C4A26596D513: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
            ED5B8C9B4DF5B6B3202615A949E66371: {
              EnemyTeams: any[];
              FriendlyTeam: {
                BotLoadouts: any[];
              };
            };
            F12A6C1B4EDF296E125EA9B0444D0FBC: {
              EnemyTeams: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];

                LastKnownConfiguredStocks: number;

                Stocks: number;
              }[];
              FriendlyTeam: {
                BotLoadouts: {

                  AccountId: string;

                  Character: string;

                  Skin: string;

                  StartingDamage: number;
                }[];
              };
            };
          };
        };
      };
      PlayerInstanceRuntimeData: {
        Tutorial_Rift_1: {
          RuntimeChapterData: {
            "4C63D9D74E00FD2CAD45DE83A3B1C00D": {
              CauldronsByDifficulty: any[];
            };
          };
          RuntimeNodeData: {
            "4E67AD8246BD4E3A2F9FA09B70107D6B": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E1FE3E7C4E882AD695C9048A0A404433: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        academia_rift: {
          RuntimeChapterData: {
            FE067CBC4211793440D65291C1194884: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "07CC6C5348EC4BC57618C291BEED20E7": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "0D7C71EF4C8586F5ACF85A91885245AA": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2AB632EF407B13028DBC7BA7634811A3": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2E9656514C869A8A8A791087F7D1DCD2": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "37EF15424C73C1FE45EDF0A6875389C9": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "38E94F404996CAECE5DC04A7D56F2D44": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "586B2BFB46C3E7218EA5CFBA8B3F8D9A": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6229D549481479D0222DA2A7445CD115": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "777A16E841A417C5EEB438A7CB4A7AEA": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8C8448DA4CB7E07468F568A5D81C7659": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9BAC123744BD4A15AF1EEFAFE6108CFC": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A196649045B61CDEE921ED8A2F7CB73E: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A56F960640B07FCFD12D29A69216780B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AEC3D553414AB6C601B089A6AB8A0E33: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CCC3373C471350688B93D1A09CD22C0E: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D2EC6C9C4A1375042D9DC29451D6AE9E: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D54658704133C2FD50A66592F946EB68: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D960C95F456A33C626A36B8AA6E3E4A0: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E1668D864512BBFE000E988CDCEA1903: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            EE55BA134407DC6667A28DA63B8784B7: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        discipline_rogue_rift1: {
          RuntimeChapterData: {
            "54286C9B4346EE8E1F120AB2205F19AC": {
              CauldronsByDifficulty: any[];
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        heroic_rogue_rift: {
          RuntimeChapterData: {
            "49F29D0E4C0B75751C5A1894D3D68BDD": {
              CauldronsByDifficulty: any[];
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        horror_rogue_rift: {
          RuntimeChapterData: {
            "39DF41EA4CC286F15048C1A0FADB9E2F": {
              CauldronsByDifficulty: any[];
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4F4AC2E44CA8713989F4DEA7EDC507E8": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9BDA81444360717C3917A9B2D7FCB8FC": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F528472D41166DE07CE47988F3F367B8: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        jason_rift_4: {
          RuntimeChapterData: {
            B9F15D9B44C7F5FD7F980AA963E6E96D: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "08408312471255A457969CB322AC3014": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "0A956A444DCEA7843DFA7C9EF8EB7EC9": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "15FE4F35475BAC36AC52B38ADFDD7565": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "361A0CC748A5BE49D5D39F8EAB831A23": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3B3736D04A88B6333B98349A9F94E6BA": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "759447274279FA7F636C27B8838BCAA6": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7C886A314F0CA66E98644886E060DA46": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7D9699E541A8191B4BA213A616DE5293": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "832AC63444ADFCD65699C2BAF6F13D94": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "992D88DD44436FD00773399A7AB9C4DE": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9C7D77264F5692F1A7B3CDBB7E496A61": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B8AF6D2B4D8BE43ECE88D0A1AD19F36C: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BC977AAF4847122C05A6DDAD745B9A23: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BF2849DA465D447F4A2ECCB30E394FA5: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D18B1648495CB61F89552BB86E82FB26: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FA27A3B94923100902EEBC90DA995CEB: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FD6B39FA41743E72866E91A0131E015A: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        mvs_joker_rift: {
          RuntimeChapterData: {
            "164A492D440EA7BFC8A6C9AF50F96A49": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "0CA53BEB41408C03787601A324E04D41": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "17AF96544D51E91A1B2970988D314D85": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "1F3CD9D9457EBC86102E1D91148348C2": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "29C3322D4765912CDAA02E8C54AF7C35": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "372CB43042F19B74A8594CA64EA78759": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3986C6274D8F3D499E72AA9BE0D90269": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3F42F84149C7905AA9726D8BE98AD51B": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "64A5C2E14196281AD3B39E9D5F6C621C": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "65EF1560462DF58FEAE157B06D342EAC": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6ADBFC734BFCDF0988AB90A67BF021F2": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "71D8FE73424D21104EC7D9BD830B1D06": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "80F912E94E7DFD27ABD399AA5F6711F9": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "84AF639E46BF07F0F35F1692D2AC6F4D": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "87F8EA13421B089C628C27A47B858876": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8D5B9453475C90F35DDC3FB7353321FF": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9F0128FC4EBDF7882586C2B704937B86": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AF138A744A8CDF1ACBFB619B044CB3A4: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B008F64E4283CE4144495185DC255621: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BDB1E2864291E380E2A57FB6A75A12DA: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D94834C74FF7790C6E3281B9EDD29DE0: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D9C24BB8477FC0FF1B99B7AB47E52281: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DBCC4E0C4C3F5EB9BA77FFA7E8858133: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DDD33B244AED89173E90FAAF1BC33052: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            EF645A6A459DC8579E8856BAA6A09C82: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F04476BA49AE7B257A44B9BF0D156A24: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_batman_rewind: {
          RuntimeChapterData: {
            CACE1F524B60F3B7C8D769ADB22A23D5: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "014C90904AFA1434BE2B66BC8589D1EA": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "341387E2475C0B788CE04B923F1A056A": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8E1863564C3D24A2A92D508E3548D1BF": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9B051AFA4CEEA1A6409A98AC837AC151": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B50FC54F433894642F634BAB7D6BBDE6: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BF0B9E0048253B16BA55AAB1F68049B9: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C4A4B9824DBE31A0CA0809B8FCD7E161: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C662BF104890459FD9ED32B7AF12D817: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CD028C9542D3E31F9125179E38F57123: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E568F6CC4BE60BE41408A297B34E3761: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            EC567E2C40D3423F718CFE9486290A57: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            ED3596A042B1B7A555D077BEBC1CCDE3: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F30A4CD34F2A478E7989FA817406C35A: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_clue_hunt: {
          RuntimeChapterData: {
            "543731E045AB26926CC339A912C08FD8": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "13CEB48342B28DF80D17519EA60E8478": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "1450B44E42527864AEBCE3A426F8E6DD": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "29090FAA4A2E76B933CAE7964E22AD18": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2C0B4A8345435333E0592594EF2A348A": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "397E2D8E481779C0B03FC9A735C459ED": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3D2FFD754AA15372F413EA9C150736A2": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "41E309454CF6849A2322EDBFAA8E1BE3": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4233F0854E794F239DFC378AF982A5D6": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5925B81A4CF07035A22D77863359AD3D": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6C7EEA614759685605600FB9243FD6D2": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "791139FF4EF3F504411C39B4C17D547F": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7B19AB80433B94198DE119AAA06D7425": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "94719EFF4E29AFFF3BCBF68787EA9572": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9643CD314193C1045FCA6F885AF1CFFF": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BA333DFE4D65194C248F19BBD657FB1F: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D2E8A2EC42AD983C8AB0969C386348FB: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D7AF551045BD0CA4A449E6AD9ED01318: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DF0196FB490928CB808B4389F387B0A5: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E38EBCD04608C2223A5CF5A5319B0EAB: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F151CF3949C80753BBC78C9AF1A31D0D: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_haunted_megamix: {
          RuntimeChapterData: {
            A91723B44D9BFE53A6CC3BB1C16A9035: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "037BAD9848BEA0434D36AC994AC16DC5": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "0A10F3694AA1A77622A39BA5C35CA654": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "1824659E47AE2370A3FEF985074900A3": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "1CF61852485BAF6AEE164B96BE0F563D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "1D8631FE48786C903A6EA7988DC53A7B": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2472C51C473B3E689A1F1284FCCBF06E": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3B3B148046A283F43406C9A40F3BEF93": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A516FC0C44514D37631DFDAED207FD7A: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AFAADDF04232060211C7C083D9FC3554: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B3BD96A249499FB7B3612688196A2C1F: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CD9A0491420BC428FB304FAE382EDD21: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D4CCA31240E2E14C1071B0AD9CBCD65B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D52EECB1466A74F40F3EC29616B211C9: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s1_beach: {
          RuntimeChapterData: {
            "3DDAC5B149852E9EBC987691647331AE": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "0520DFE349580B78E4834392A03E4576": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2529B1264AD4FB8C03AAB48ACA794BBD": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3B35F3DA428080C3B8A8F8BA1ED2F341": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4621C712435389D1803A7B97F0D17519": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4906A15B42173572EF707EA1286C2D00": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "582668B54298EA7A00C5849074CCB3ED": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7EECA4DB47545C16093018AD27A8AE7E": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8CEC7C7244D4925A071EF4B5FFEA10AE": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A55CFB6A4BAAB999ACA28B89C36FA2E6: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AE38A56940BDDDF5D74C63B6F94E71CD: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B1B954DF4DBBAC05D9C022A5465B87C8: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B1C7AF014B307F3C5B87339F153ECAB0: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BF3634E2410E0B03B3450A9A64D4FF6A: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C27E6E224D3B9D5BE5774984D36C3E5F: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C758852445AEDDA0537AF9B14E0A9B13: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DBF5599D4E22690A1DA3969AF919FD02: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E457A11346FB85E84CFEC5A9A329A990: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E8D0FC2E414E97B9E554FE9CCE8A559B: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F96EF0AC4F7674645DCFB7B8941183A0: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FBAE91B245A9DDD8E50853B1A1FFDD07: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FCF1A470489DFB4EB6DFBC8C33679561: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FFCDC68F44615977D4C5DC80B0C0678B: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s1_sharks: {
          RuntimeChapterData: {
            B12B518E40B3ED2FA3C9449F858FC135: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "1CACFEF54B16DDDF7BC69F8CC271EDFA": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "238F11564682EDA5F1EA54A4E5A61C75": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2E2A986E457CD19143A28596989E183A": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "31C7853D465A596735E9068A92AD6FFA": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3B2C1FD348BFD16582E365891B4DBC33": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3CA914014D9DED4E2774E88D541242B6": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "603EBFB042B8A66BFD81C0B80D6B78BF": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "722F9F624EFD28C7886F94B128EAD00D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "80E947D6424FCA79396C309268278AC0": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "905BE6FB4FF03B3AD64C3E908AB23509": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "95CAB563405A4F0F3D3CCF9B2D6A919F": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A65FE490433783F163DD8BA90F76F989: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B503D69644BC665102E86E852C28B628: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BD737284419EF5E6DD5CD798687EC2E8: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CD1BE7E54FFC58B1A7F8468C2516E507: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D1A184804E8A618B5D838FAF0A6D637C: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E1D882FB44D057B59534C99738F4F41A: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F0F513BC4A182BD5BBB6EAA200272411: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F2ED74BE4BD8E25F906378A3D21A606D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F8FA38CD44E040CB158C149C97BB6BBF: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FC087E934A11D5DBA6AD2E8F53B40B1F: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s2_mojo_jojo: {
          RuntimeChapterData: {
            "512DAB3C4D51B7C1695F85945F4FDF59": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "228421BD4761C7C38120FD818C798AF4": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "362037CB40F3D66203C6579559AF7420": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "53301FF3469F55C3C8ECE7A3950E757E": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "55ABE7374719AD7F75BBA9977ACF3ECF": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5F86200D49DCB7B130FB208D60F83551": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6A9BB59747D09089E1FA5FA002CC6919": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7021DD504673FFF98061FEA846DFB04D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "735BCDBC4058BA1DCB7E019010FE8681": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8D2AFA094CE2C6B7AD763381C646CE95": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8EB94D7F4159D2CD8F34E59239CE46C0": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "93571B114BC21C4464DE17B90EE0EB80": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9D858C9D4B1627C2EA8253A7B1E0D007": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AD82C69146DB43CCE94DAFAC2A2DE6B5: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B25BD4854DB736E356D4D999F2A816DB: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B4C74D264600BDC6B665CE9B2CE0694C: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D8339BF141DF0C9C7772EDAF5D89809D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DC447866448CBF65C25BE09CC91EDF77: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DE778E704F4871DD5EE04595AE1A1F19: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FBDF2AAE41070BBDE863E6BB147D081C: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s3_c030: {
          RuntimeChapterData: {
            B50D41A0458B487F90025A880EE7C342: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "0022ED7644117BE46E8ECE912E0CEBDF": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "10ECD83B4BCD42D5BC0095B9167079D3": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "304C2D5443E203087CA0A19862A77E6A": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3E2BAB8E48AA0C17B91823A38797CFC8": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "43C7A6CD46762E6EB6831D98DC4B726F": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5D7D9B944F995B54DC3085B4A773C810": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6B2CBE54488FE1095921C1AB44E3D8F0": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7126C0F74156A13170228C99039CC221": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "73B962F046AA1918516AA195DDFBCFD4": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "938E8A2B43C7186577CC71AF580CA5A2": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A20DD5084681CE811E36F3A7A1D459F1: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A8E80F11450B43F4D11B18AF3389CABC: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AB23C53843D1D03F0D85B1B02D415F83: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AE96346A4B99D2AF38A1D5949AFF7EF0: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B9CB3BAB440BF36BD924E5A562D67B7D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D3A2865540FE01A3CF169F9D68AB5962: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D4A7A1F742F121969A2A2693D6C1FC47: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E40B286F4EF2F021AC4860A56EE9D656: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FB8B262D45FCD24D50750DA767F41534: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FC0954934975B27E16F0A093B9A6271D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s4_Challenge: {
          RuntimeChapterData: {
            "9909BAE9439985B8AF2B0892819F929C": {
              CauldronsByDifficulty: any[];
            };
          };
          RuntimeNodeData: {
            "1468230342C09B3D4011C6845EAD4A0B": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "23FAF5164F59DFA33F068A9F51382FF1": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7630021E446DB2EE18B0F9895475288D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C941549046D6BC47564D1494A38E0496: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D18974E3455E2867F27649BBBAD57353: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s4_r1: {
          RuntimeChapterData: {
            F5F1EFBD4B07EF0822796D9E7DFC2C61: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "04CA420D4C7E71D1C7E56AA5F5E0CC72": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2308CE8441D7C4B3A5B1628E76BFBA03": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3706572A43447004BB248D8B2FA4BB72": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "456E129D497FC2CC60D3B5AC628C61A0": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "65CF44264F561F4D0E53BE8028C0DBDE": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "698CE2014FB57C569A9B1BAE112B3435": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6C20EA7647BA5F47B6635C88F4175888": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "79D02A3E4A3380D7F20458826FA37433": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8F296D124B598B4522F2979083ED340B": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "93AA6DA3412D1F4DA86026B927D316F6": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "94A97D9548D6B4EACDF4ABAB3AEB688B": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A681AD8348439C35A79D4ABF0433258C: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A6AD7D3C469099ED118180B7400E6ADD: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B597963C494FB6C747E6F6BAA6AC3576: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C9FC708D4CC450E4BA5BE5B9CD248FB7: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CF5370C24C77A1FB8290FCB54F002C7B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CF6CEBD74E683E3BAF136AACE1BACC96: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DEB97B314E1366C5789948818BF5C61F: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E31ABF43405F85B606E37AB3ABA9F40F: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E433D5954272E262F0968B86F8E65E16: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F25B562C46F9FA594C25F68B489BD888: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s4_r3: {
          RuntimeChapterData: {
            "7669E3C7401F2994E01B4EB1E6FE1DE6": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "049A9DBF42A575F1C8E627A833B22E54": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "0A3A394E47109E864BC93F859EDB4DD9": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "230AC5824F9374D9B30484A1AC154FF3": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "31C9B87D412147F69575898E80B933B3": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4997574D4934F6708AF69B9FBC79AC7D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "54FE623549129E220C03F5895FBD073A": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7FD81D2149A791B4CA35FEB60A388C4E": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9BDF87B2488E7E98F5815A8EE97188D7": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A47D59EE4C6C2FA37749E28031D1E8D4: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            ACCC88634A8C0F032AE1F6974EC29D0B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B783F37442DF31A61962C58768886477: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BB393169480643ED6132FDBA75FF1628: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CC511B6141B2CF8784C2EEA89F809EEB: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D139B6C14EF1215737102580DBF4C463: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D812C6C94F7C5DB35174399B62081D0B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            EC52400348F35BD0C30756B0AF9E93F4: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F288C7D54BFCC29FDC803FB2C28B135B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FA0BE25A48424276ECB10288C15075A5: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_s5_challenge_chaos: {
          RuntimeChapterData: {
            "4DD08BF94B1D1789AB07A7ABC9C2953A": {
              CauldronsByDifficulty: any[];
            };
          };
          RuntimeNodeData: {
            "18B60082410502F30544A8BACAF46D79": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7BABC38C4621741FDB389C9B038B2532": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B655C654432C7F281AE2FFB6F5E95EB7: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D63808DE45F2D32073B51C961C7DFC20: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F8B224D143D6E9B2065D0589BC8B6019: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rift_samura_jack: {
          RuntimeChapterData: {
            AA771E314C068D4E5E1BF9A00739944C: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "25CA06C34FE1FD7ABD92E3ACAD4D16D7": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2B6DF77945BD4F0D8850E184ED318246": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "30919D8844F500A64A56EAABA5CA2C38": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "47714E7347CD88C5D1309DB72581C857": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "59EB7EB649CBCA451DEFC0A34AE5DD54": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5C82E2764EC3D78BCF42FA8CEF4CB192": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5E47CD0A4DDF51BEC4A5F382F808C9E6": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6C163CC742128050D133149B24919F34": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "74521D6544D8ABFE949D6DAC0CD627BF": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "84059A2B4AFFA53D3C903CA210D06838": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8821400C4210C537C3333580A1A2ED3C": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "957D6C57438045E47E0F94B0AE6C08F0": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9F98089949679C79344C67BAC2756E57": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A56546264848287175FF53969CC1FC71: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CCCC24FD428658487345939D511620ED: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D51580A141433D9665E1F89B026D9214: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E5B7581648F898312A298CAF131663A6: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            EAEEC61C440952392CDB47BA77572340: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        rise_of_smith: {
          RuntimeChapterData: {
            EAFFB37446A9FA578120989CE18EDC6A: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "026096E148B3CC0BA1F1CB87D0D399AC": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "03FE6A254950A3F0AC3EFDBBB63BA43D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "1353912F41A5CC818E2AE3BE5E8EB1C1": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "21900DEE4743FC276EC94DB7434219C3": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3202F1214C788063038600B051B18002": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4D6504594B38AD609F6F7F9A8C9F7F49": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5193596B47235C1ABBE7A99C9CC3C410": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "52373B5440C5545E2D3EC4AD90410D33": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7600CFF445502115DD6E7286A5BAE0C5": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9BEEA5A84C805DEA10EDB08092C28F5F": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9F039E5F49C59C7486375AB6F6389A11": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A3D6333C4D1C488C14976BA4E1E976B2: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A658E9D4440CB869228D07A500DEF9EF: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A6C308CC4586166A563D4FB5C8147F18: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            ADD6B2BB4B6CD137D79B27968C1B7954: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C055C0E14DB635EF0BF978A46721D032: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DA9585E2431B324A0DED329AB9F647CE: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            EAA1B47548EC6FBF924956AEDBE929B4: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FDCF1B864F56F4B5F25C93899853666D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        s2_rift2: {
          RuntimeChapterData: {
            B1EC4D574F2EEDAA859C67B872761325: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "297DD7484F145C264348BE9BBB8E05BE": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3F4FD93547CBA417BED2558EA5EB5428": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5B4FE50942D47D10139185AACEF43C60": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "62188ADC44D81391D3AF13B86D016397": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "66DE8F9B49EBA2F9285B918A93823144": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6B371F94428C276FA0C2F48865B422F5": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "771D6CA44D417EB30DD708AA8D9433FF": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7E227F464D218C28E708748CAF448384": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7F8CBE6E4165CCDA06B2C599D90F4B09": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7FC65772420439EF2396B0BDF34536FE": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8750AA9D4A2FFDB0908E2895FB8B1862": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "932D3BA249C1A33FABF1F4BE269461B0": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9889EFCB426A47E7637C318F76A36C15": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9C5B4C61412F2AD4F87C7A94CDDF9B14": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B3926E0B42217A34A7C883B2D92FFE36: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C56A9077430BD6EC8F1B9B9D47AAF7CA: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C57C5D1E46CAD0667D142CBA76B12646: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E2F2A6CF48DCDCB02D0E30931B09CF45: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F7DA6CDC4FCB0CB720FFD7A1F709280D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FE96AE7A479BCB2415577C97EC978C0B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        s2_rift3: {
          RuntimeChapterData: {
            "4AABA23941365B519E80FCB86F3B8211": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "086F081949C612277CEA3088D2BE388B": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "2B6EC7A54E7BB60E0204A6B59670123F": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "32F1970048E216E081191C9978B4D9E7": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "45632978484646AF36342BA94848E957": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "55B9BA834C078719E20A98B0070FC654": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5911DAB244B295C4180BFFB77B58F2FD": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6859DCA9414C05A2453BF39D56D9A8A2": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7311EF3E4F609F2E91239A9A07D205CC": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "75400CBE477C015409FB03BFB41A5389": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8C3328974CE2625A936AEF8ED87B0494": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "93A993054AAC6091FDC393915C8B5AF3": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B0444FDA42191D81027A5AB7CA95E9AD: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BC2D702F4B866845C87A05B1A0110322: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D6F440A8471D45F6AFB9CB986AE72FDF: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F2EFCEDF42FF8CB3BCBE0EA3FD9C2CE2: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FC7313D243933E9297545EA59D49B5F8: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        s3_rift3: {
          RuntimeChapterData: {
            C53B5A904D11EAAC9553729D3985CFD9: {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "1285CEA34EA675FBA2785AABC53F0255": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3E5D1BB54B66CBA41542B589EAFF1E3D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4299766240352C2609D673BDD900EE1D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5531B21B4AF138BB6E9DE785FDC63EF8": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "83A3C206437027992D619BA6DEF2C557": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8817AA0443FB47164C8E70B394DB4767": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "8E3EFCF74B506851FB01B7A0A396DE40": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            CDBF43E04AFF5453F260A690E9868A6A: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D0D632A14889A445A632A2AAA46A8410: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            D4FB2DD241896CFCC4C139892991BC0D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DED11B5A411C3D130F3AB4B1B34DF14B: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E29BE4AA4AEE48A9FE86DEAA08C153E9: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E6B8237F460EE03A61FD6A9CE60AB093: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            EF6D36CC4944BF137244E5B7317C2B27: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F2190E7B4ED99AC89032DB99632AAABC: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F8C5E7D348B6763886272FB1B8B4A60C: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FA1ABD4F4EF9A8B56AE1AF8FE3709F16: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        s4_rift1: {
          RuntimeChapterData: {
            "9AB1535C481F4D812F7B4293B8E9CD44": {
              CauldronsByDifficulty: any[];
            };
          };
          RuntimeNodeData: {
            "14AD89DF4ED5BEE0635C84813C397553": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "28AA88BA4A2AB6868C89C094A7D80C73": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "421FBDD84D256DB2F84B09A33F2109D5": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "44817B534D8945BB32AA038C9DCC443B": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4BA9CD054904ADAD671015A9737B6C22": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5A0EC4BD4CE743F11CB7BA876C973D57": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7A2312FA401AF979817282B92E934478": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "81070CD34D2AF8A84DEED68C4DB11D62": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "99FC89A04EB11AC3363927972983E155": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9A48450D493ACB630F188A9195E1259D": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9CE1F2D84D22A0C07C92C592D21A0B84": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9DFEBFF349B8C2EBCDA1D89190F2763F": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            AF3656B342B763CB74B50390FAB42DB4: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B5EA3BAB475FB97C28FD90A3BED365C5: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BCA444704420E64B9534B399653064B5: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C0A5735E44BB4AC13FFF199F20CFE64C: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C121D01349A7232E0704B3A53F16B5C1: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C79624D14A4AC81CD16566A5078250F4: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            DD46493E4C9D39DB88A2C5B8FA30293D: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E070DFF74C7565F98CB426BF67D18AA5: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F2B0ADC44484A784F23A5D82A5AB4E6A: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            FF83640443FAD965753F2BA76BD51D07: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        tech_rift: {
          RuntimeChapterData: {
            "9BE1F581473C20C6210CCF8A8D3DABC7": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "00639B1B40A922C1E07030A494513643": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "02268CBA4F0206F197E9068A1FCA39C8": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "1DBD50B346B480B7841D368F0FD6D294": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "38E1A3C74DBE9D2883D6A0AB269141E9": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "4336EA244550D5F05BAB139762EB6A43": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5059F5B64082D6131EB55BA40CEA6A5E": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5B952F1946848654E62037A2DE9F796C": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5C7F75F3451D785EB9E8CE912D2191F8": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5D4ECE91474AFCE7DA386C96EDC926F4": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5DB3F20A44F47304FC7075B85AC99957": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5F008B734B4DC23F4D94838AE0C2892F": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9FBE7FE641F76C67F72104992B945AC4": {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            A03770A34F4E315822B3BE8416F46B62: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B156263F41FAD081CC3923A4AA5C1B8C: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B2B01CF2484A38A19AA6E8B335E71602: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E0B00D53411CCEE3FDDEC7B86F3F1346: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            E62AF6F04F9B42A0FEDD329DD93D8A80: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            ECC644AF4DB5F7B2356D5FA2F1B20EF5: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F3F3290E4AE00564E703038852BD327B: {
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
        triple_threat: {
          RuntimeChapterData: {
            "65503D00479ACE98995010A26D232416": {
              CauldronsByDifficulty: {
                ClaimedTiers: boolean[];

                CurrentScore: number;
              }[];
            };
          };
          RuntimeNodeData: {
            "12BD5C1A41543DD061DA279FE6487133": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "3C4E8586464EA3DB1744B0B403173181": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "5F4C2D27419A321D755E819CE3FADF3B": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "6DAE1BDB482A492F70FC749A620C1E9C": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7AB230384E6BE006EDFAE48180225405": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "7CBE995A49F7A8AC63CA77B1B5943FD4": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "85FB616D490E778474479EA9B80E5BD1": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            "9294473E4F9E53E83764E78A73A1F1C7": {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            B8FEA71344458A53C88B5E8BC67A52BF: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            BB7C6CCB4DCE28A830F8288EE32D5475: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            C1053C74429EC027A939C4A26596D513: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            ED5B8C9B4DF5B6B3202615A949E66371: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
            F12A6C1B4EDF296E125EA9B0444D0FBC: {
              ClaimedBattlepassXp: {};
              ClaimedOneTimeRewardGuidsByDifficulty: {};
              CompletedMissions: {};
            };
          };
        };
      };
      RiftConfigs: {
        RiftChapterData: {
          "9BE1F581473C20C6210CCF8A8D3DABC7": {
            Attrition: {
              DifficultyModifiedSettings: {

                PercentageOfPlayerDamageCarriedIntoNextMatch: number;
                bDoEnemyStocksAndDamageCarryOver: boolean;
                bDoPlayerStocksAndDamageCarryOver: boolean;
              }[];
              bOverrideGlobalSettings: boolean;
            };
            BuddyLoadout: {

              BuddyLoadoutSetting: number;
              CustomBuddyLoadout: {
                Characters: any[];
                Skins: any[];
              };
            };
            CauldronsByDifficulty: {
              Tiers: {
                Reward: {
                  Constraints: any[];

                  DirectInventoryItemCount: number;

                  InventoryHsda: string;

                  RewardGrantMethod: string;

                  RewardGuid: string;
                };

                ScoreThreshold: number;
              }[];
            }[];
            CellSize: {

              X: number;

              Y: number;
            };

            ChapterThumbnail: string;
            Dialogue: {

              IntroDialogueSlug: string;
              bHasDialogue: boolean;
            };
            Difficulty: {
              DifficultyReleaseData: {
                ReleaseDate: {

                  Day: number;

                  Month: number;

                  Year: number;
                };
                bIsTimedRelease: boolean;
              }[];

              DifficultyScalars: string[];
            };

            DifficultyIndexToDifficulty: number[];

            EndNode: string;
            GridSize: {

              X: number;

              Y: number;
            };

            Guid: string;

            LeftMapPadding: number;

            MatchNodes: string[];

            Name: string;

            RiftMapBackground: string;

            RiftMapBackgroundTiling: string;

            StartNode: string;

            StartingRowVerticalOffset: number;

            UnlockDate: string;
          };
        };
        RiftData: {
          Attrition: {

            CostPerRun: number;

            InitialStocks: number;

            StockReplenishTimer: number;
            bAllowPurchaseLives: boolean;
            bTargetCostPerRunFromRiftPoolInsteadOfGlobalPool: boolean;
            bTargetRiftPoolInsteadOfGlobalPool: boolean;
          };

          Chapters: string[];
          ComingSoon: {
            EndTime: {

              Day: number;

              Hour: number;

              Minute: number;

              Month: number;

              Year: number;
            };
            StartTime: {

              Day: number;

              Hour: number;

              Minute: number;

              Month: number;

              Year: number;
            };
            bHasFiniteEndTime: boolean;
          };

          DailyRewardAttunement: string;

          Guid: string;

          Name: string;
          RiftEndTime: {

            Day: number;

            Hour: number;

            Minute: number;

            Month: number;

            Year: number;
          };
          RiftTags: {
            GameplayTags: any[];
            ParentTags: any[];
          };

          Season: string;
          bAllowCoOp: boolean;
          bRiftHasEndTime: boolean;
        };
        RiftEndNodeData: {
          "4D40CAF84969AC3514B70FAE75D53A2D": {
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;

            ParentNodes: string[];
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
        };
        RiftMatchNodeData: {
          "00639B1B40A922C1E07030A494513643": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};

              EnemySkinPortraitOverrides: string[];
              EnemyTeams: any[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;

              MatchDurationSecondsByDifficulty: number[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: {
              Rewards: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              }[];
            }[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "02268CBA4F0206F197E9068A1FCA39C8": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;

                TeamBuffs: string[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "1DBD50B346B480B7841D368F0FD6D294": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};

              EnemySkinPortraitOverrides: string[];
              EnemyTeams: any[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;

              MatchDurationSecondsByDifficulty: number[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "38E1A3C74DBE9D2883D6A0AB269141E9": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {

                GameplayTags: string[];

                ParentTags: string[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "4336EA244550D5F05BAB139762EB6A43": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "5059F5B64082D6131EB55BA40CEA6A5E": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;

                TeamBuffs: string[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "5B952F1946848654E62037A2DE9F796C": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};

              EnemySkinPortraitOverrides: string[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];

                Skins: string[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "5C7F75F3451D785EB9E8CE912D2191F8": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {

                GameplayTags: string[];

                ParentTags: string[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "5D4ECE91474AFCE7DA386C96EDC926F4": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};

              EnemySkinPortraitOverrides: string[];
              EnemyTeams: any[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;

              MatchDurationSecondsByDifficulty: number[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "5DB3F20A44F47304FC7075B85AC99957": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};

              EnemySkinPortraitOverrides: string[];
              EnemyTeams: any[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;

              MatchDurationSecondsByDifficulty: number[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "5F008B734B4DC23F4D94838AE0C2892F": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;

                TeamBuffs: string[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          "9FBE7FE641F76C67F72104992B945AC4": {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};

              EnemySkinPortraitOverrides: string[];
              EnemyTeams: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          A03770A34F4E315822B3BE8416F46B62: {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;

                TeamBuffs: string[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          B156263F41FAD081CC3923A4AA5C1B8C: {
            ChildNodes: any[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {

                GameplayTags: string[];

                ParentTags: string[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;

                TeamBuffs: string[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          B2B01CF2484A38A19AA6E8B335E71602: {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          E0B00D53411CCEE3FDDEC7B86F3F1346: {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;

                TeamBuffs: string[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          E62AF6F04F9B42A0FEDD329DD93D8A80: {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {

                GameplayTags: string[];

                ParentTags: string[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          ECC644AF4DB5F7B2356D5FA2F1B20EF5: {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;

                TeamBuffs: string[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };
              WorldBuffs: any[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                RewardGrantMethod: string;

                RewardGuid: string;

                RewardHsda: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
          F3F3290E4AE00564E703038852BD327B: {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            MatchData: {
              AllowedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };
              Attrition: {
                DifficultyModifiedSettings: {

                  PlayerStocksGrantedOnWin: number;
                  bDoEnemyStocksAndDamageCarryOver: boolean;
                }[];
                bForceDisableAttrition: boolean;
              };

              Attunement: string;
              BlockedDynamicTags: {
                GameplayTags: any[];
                ParentTags: any[];
              };

              CountdownDisplay: string;
              DifficultyScalarsOverride: {};
              EnemySkinPortraitOverrides: any[];
              EnemyTeams: {
                Bots: {

                  Banner: string;

                  BotBehaviorOverride: string;

                  CharacterSet: string;

                  ProfileIcon: string;

                  RingOutVfx: string;
                  Username: {
                    localizations: {

                      loc_Default_Text: string;
                    };
                  };
                  bUseCharacterDisplayName: boolean;
                }[];

                NumStocks: number;
                TeamBuffs: any[];
              }[];

              ForcedBuddyFighter: string;
              FriendlyTeam: {
                Bots: any[];

                NumStocks: number;

                TeamBuffs: string[];
              };
              GuestFighter: {
                Characters: any[];
                Skins: any[];
              };
              HudSettings: {
                bDisplayPortraits: boolean;
                bDisplayStocks: boolean;
                bDisplayTimer: boolean;
              };

              Map: string;
              MatchDurationSecondsByDifficulty: any[];

              NodeType: number;
              PermittedLoadout: {
                Characters: any[];
                Skins: any[];
              };

              WorldBuffs: string[];
              bAllowMapHazards: boolean;
              bIsTutorial: boolean;
              bShouldOverrideEnemyPortraits: boolean;
            };
            Missions: {

              ChapterDifficultyThreshold: number;

              Mission: string;
              Reward: {
                Constraints: any[];

                DirectInventoryItemCount: number;

                InventoryHsda: string;

                RewardGrantMethod: string;

                RewardGuid: string;
              };
            }[];
            OneTimeCompletionRewardsByDifficulty: any[];

            ParentNodes: string[];

            RiftMapBorderOverride: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
        };
        RiftStartNodeData: {
          EB352DE54C6E289907F2A3B2967CDE05: {

            ChildNodes: string[];
            Dialogue: {

              OnClicked: string;

              OnEOM_Lose: string;

              OnEOM_Win: string;
              bHasDialogue: boolean;
            };

            Guid: string;
            VisualData: {
              GridPosition: {

                X: number;

                Y: number;
              };
              Position: {

                X: number;

                Y: number;
              };
            };
          };
        };

        RiftType: number;

        slug: string;
      }[];
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_lock_lobby_loadout_RESPONSE {
    body: {

      AccountId: string;
      Loadout: {

        Character: string;

        Skin: string;
      };
      bAreAllLoadoutsLocked: boolean;
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_perks_get_all_pages_RESPONSE {
    body: {
      perk_pages: {
        character_Jason: {
          "0": {

            Description: string;

            DisplayName: string;

            Perks: string[];
          };
          "1": {

            Description: string;

            DisplayName: string;

            Perks: string[];
          };
          "2": {

            Description: string;

            DisplayName: string;

            Perks: string[];
          };
        };
        character_harleyquinn: {
          "0": {

            Description: string;

            DisplayName: string;

            Perks: string[];
          };
        };
      };
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_perks_lock_RESPONSE {
    body: {};
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_ranked_data_RESPONSE {
    body: {
      SeasonalData: {
        "Season:SeasonFive": {

          LastLoginDay: string;

          NumDaysLoggedIn: number;

          NumLogins: number;
          Ranked: {

            ClaimedRewards: string[];
            DataByMode: {
              "1v1": {
                BestCharacter: {

                  CharacterSlug: string;

                  CurrentPoints: number;

                  GamesPlayed: number;

                  LastUpdateTimestamp: string;

                  MaxPoints: number;

                  SetsPlayed: number;
                };
                DataByCharacter: {
                  character_Jason: {

                    CurrentPoints: number;

                    DamageDealt: number;

                    DamageTaken: number;

                    Deaths: number;

                    GamesPlayed: number;

                    LastDecayMs: number;

                    LastUpdateTimestamp: string;

                    Losses: number;

                    MaxPoints: number;

                    Ringouts: number;

                    SetsPlayed: number;

                    Wins: number;
                  };
                };

                GamesPlayed: number;

                LastUpdateTimestamp: string;

                SetsPlayed: number;
              };
            };
          };
        };
        "Season:SeasonFour": {

          LastLoginDay: string;

          NumDaysLoggedIn: number;

          NumLogins: number;
          Ranked: {

            ClaimedRewards: string[];
            DataByMode: {
              "1v1": {
                BestCharacter: {

                  CharacterSlug: string;

                  CurrentPoints: number;

                  GamesPlayed: number;

                  LastUpdateTimestamp: string;

                  MaxPoints: number;

                  SetsPlayed: number;
                };
                DataByCharacter: {
                  character_Jason: {

                    CurrentPoints: number;

                    DamageDealt: number;

                    DamageTaken: number;

                    Deaths: number;

                    GamesPlayed: number;

                    LastDecayMs: number;

                    LastUpdateTimestamp: string;

                    Losses: number;

                    MaxPoints: number;

                    Ringouts: number;

                    SetsPlayed: number;

                    Wins: number;
                  };
                };

                FinalLeaderboardRank: number;

                GamesPlayed: number;

                LastUpdateTimestamp: string;

                SetsPlayed: number;
              };
            };
            bEndOfSeasonRewardsGranted: boolean;
          };
        };
        "Season:SeasonThree": {
          Ranked: {

            ClaimedRewards: string[];
            DataByMode: {
              "1v1": {
                BestCharacter: {

                  CharacterSlug: string;

                  CurrentPoints: number;

                  GamesPlayed: number;

                  LastUpdateTimestamp: string;

                  MaxPoints: number;

                  SetsPlayed: number;
                };
                DataByCharacter: {
                  character_Jason: {

                    CurrentPoints: number;

                    DamageDealt: number;

                    DamageTaken: number;

                    Deaths: number;

                    GamesPlayed: number;

                    LastDecayMs: number;

                    LastUpdateTimestamp: string;

                    Losses: number;

                    MaxPoints: number;

                    Ringouts: number;

                    SetsPlayed: number;

                    Wins: number;
                  };
                };

                FinalLeaderboardRank: number;

                GamesPlayed: number;

                LastUpdateTimestamp: string;

                SetsPlayed: number;
              };
              "2v2": {
                BestCharacter: {

                  CharacterSlug: string;

                  CurrentPoints: number;

                  GamesPlayed: number;

                  LastUpdateTimestamp: string;

                  MaxPoints: number;

                  SetsPlayed: number;
                };
                DataByCharacter: {
                  character_Jason: {

                    CurrentPoints: number;

                    DamageDealt: number;

                    DamageTaken: number;

                    Deaths: number;

                    GamesPlayed: number;

                    LastDecayMs: number;

                    LastUpdateTimestamp: string;

                    Losses: number;

                    MaxPoints: number;

                    Ringouts: number;

                    SetsPlayed: number;

                    Wins: number;
                  };
                };

                FinalLeaderboardRank: number;

                GamesPlayed: number;

                SetsPlayed: number;
              };
            };
            bEndOfSeasonRewardsGranted: boolean;
          };
        };
        "Season:SeasonTwo": {
          Ranked: {

            ClaimedRewards: string[];
            DataByMode: {
              "1v1": {
                BestCharacter: {

                  CharacterSlug: string;

                  CurrentPoints: number;

                  GamesPlayed: number;

                  LastUpdateTimestamp: string;

                  MaxPoints: number;

                  SetsPlayed: number;
                };
                DataByCharacter: {
                  character_Jason: {

                    CurrentPoints: number;

                    DamageDealt: number;

                    DamageTaken: number;

                    Deaths: number;

                    GamesPlayed: number;

                    LastDecayMs: number;

                    LastUpdateTimestamp: string;

                    Losses: number;

                    MaxPoints: number;

                    Ringouts: number;

                    SetsPlayed: number;

                    Wins: number;
                  };
                };

                FinalLeaderboardRank: number;

                GamesPlayed: number;

                LastUpdateTimestamp: string;

                SetsPlayed: number;
              };
              "2v2": {
                BestCharacter: {

                  CharacterSlug: string;

                  CurrentPoints: number;

                  GamesPlayed: number;

                  LastUpdateTimestamp: string;

                  MaxPoints: number;

                  SetsPlayed: number;
                };
                DataByCharacter: {
                  character_Jason: {

                    CurrentPoints: number;

                    DamageDealt: number;

                    DamageTaken: number;

                    Deaths: number;

                    GamesPlayed: number;

                    LastDecayMs: number;

                    LastUpdateTimestamp: string;

                    Losses: number;

                    MaxPoints: number;

                    Ringouts: number;

                    SetsPlayed: number;

                    Wins: number;
                  };
                };

                FinalLeaderboardRank: number;

                GamesPlayed: number;

                LastUpdateTimestamp: string;

                SetsPlayed: number;
              };
            };
            bEndOfSeasonRewardsGranted: boolean;
          };
        };
      };
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_set_lobby_joinable_RESPONSE {
    body: {};
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_set_ready_for_lobby_RESPONSE {
    body: {

      MatchID: string;

      PlayerID: string;
      Ready: boolean;
      bAllPlayersReady: boolean;
    };
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_submit_end_of_match_stats_RESPONSE {
    body: {};
    metadata: null;

    return_code: number;
  }

  export interface Ssc_invoke_toast_player_RESPONSE {
    body: {};
    metadata: null;

    return_code: number;
  }

  export interface Telemetry_data_datarouter_api_v1_public_data_RESPONSE {}
}