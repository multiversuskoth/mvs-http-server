//* AUTO GENERATED */
export namespace MVSResponses {
  export interface Access_RESPONSE {
    account: {
      auth: {
        wb_network: {
          /**
           *
           * 2023-01-23T21:17:48.000Z
           *
           */
          created_at: string;
          /**
           *
           * pafd8d7950aa1484ea791d06662fa75ce
           *
           */
          id: string;
        }[];
      };
      connections: {
        /**
         *
         * V2wvUvGjnf0Ma23VCEJXFZHDPewZ8FdaYjXGvpqsdzxMHk9BvyPLMTymAOM6WDqW3J4Vek/x3v2yVbxo5r+VbkOpzsk9pVW5zj/0bxOaYgMXPCe4opBb2LY7twuGq4cHh4B7uer44UVxHP/VjzQbHGqEa8BzzdjMrZn3rPGl0H5S9sOkokqiEw==
         *
         */
        id: string;
        /**
         *
         * 1741621720
         *
         */
        last_used: number;
        /**
         *
         * `0Platform0PC
         *
         */
        metadata: string;
        /**
         *
         * 0
         *
         */
        realtime_end_time: number;
        /**
         *
         * 0
         *
         */
        realtime_start_time: number;
        /**
         *
         * 1741621720
         *
         */
        start_time: number;
        status: {
          current_environment: boolean;
          environment: {
            /**
             *
             * 620d88aae6bbaf409686b6fc
             *
             */
            id: string;
          };
        };
      }[];
      /**
       *
       * 2023-01-23T21:17:48.000Z
       *
       */
      created_at: string;
      data: {
        /**
         *
         * 1674508690
         *
         */
        EULAAcceptTimestamp: number;
        /**
         *
         * 5
         *
         */
        EULAAcceptVersion: number;
        /**
         *
         * EPlatform::PC
         *
         */
        LastLoginPlatform: string;
        /**
         *
         * character_C018
         *
         */
        LastPlayedCharacterSlug: string;
      };
      deleted: boolean;
      email_verification: {
        /**
         *
         * unverified
         *
         */
        state: string;
      };
      external_accounts: {};
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       */
      id: string;
      identity: {
        alternate: {
          steam: {
            /**
             *
             * https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg
             *
             */
            avatar: string;
            email: {};
            /**
             *
             * 76561195177950873
             *
             */
            id: string;
            /**
             *
             * multiversuskoth
             *
             */
            username: string;
          }[];
          wb_network: {
            avatar: {};
            email: {};
            /**
             *
             * pafd8d7950aa1484ea791d06662fa75ce
             *
             */
            id: string;
            /**
             *
             * MultiVersusKOTH
             *
             */
            username: string;
          }[];
        };
        /**
         *
         * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.584.png
         *
         */
        avatar: string;
        /**
         *
         * steam
         *
         */
        current_platform: string;
        default_username: boolean;
        is_cross_platform: boolean;
        personal_data: {};
        platforms: string[];
        /**
         *
         * dark-wild-grass-voice-yRPU2
         *
         */
        username: string;
        usernames: {
          /**
           *
           * hydra
           *
           */
          auth: string;
          /**
           *
           * dark-wild-grass-voice-yrpu2
           *
           */
          username: string;
        }[];
      };
      /**
       *
       * en-US
       *
       */
      locale: string;
      opt_ins: {
        wbplay_optin: boolean;
      };
      orphaned: boolean;
      orphaned_reason: {};
      /**
       *
       * 0
       *
       */
      points: number;
      /**
       *
       * online
       *
       */
      presence: string;
      /**
       *
       * 1
       *
       */
      presence_state: number;
      privacy_levels: {
        clan: {
          /**
           *
           * default
           *
           */
          invitation: string;
        };
        match: {
          /**
           *
           * default
           *
           */
          invitation: string;
        };
        presence: {
          /**
           *
           * default
           *
           */
          state: string;
        };
        relationship: {
          /**
           *
           * default
           *
           */
          follow: string;
        };
      };
      /**
       *
       * paee40f62bd814a53bf9f4d21e43ea2c1
       *
       */
      public_id: string;
      restriction_status: {};
      server_data: {
        /**
         *
         * 2
         *
         */
        AntiCheatServerKick: number;
        /**
         *
         * 2025-03-10T12:00:00.000Z
         *
         */
        LastDailyRefresh: string;
        /**
         *
         * 0
         *
         */
        LastKnownDebugDelta: number;
        /**
         *
         * PC
         *
         */
        LastLoginPlatform: string;
        /**
         *
         * Tue Mar 14 2023 00:14:29 GMT+0000 (Coordinated Universal Time)
         *
         */
        LastLoginTime: string;
        /**
         *
         * 2023-03-14T17:44:29.198Z
         *
         */
        LastLogoutTime: string;
        /**
         *
         * evt_battlepass_season_five
         *
         */
        LastRefreshBattlepassEvent: string;
        /**
         *
         * Season:SeasonFive
         *
         */
        LastRefreshSeason: string;
        /**
         *
         * 2025-03-04T12:00:00.000Z
         *
         */
        LastWeeklyRefresh: string;
        OpenBeta: boolean;
        ProfileIcon: {
          /**
           *
           * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_Default.ProfileIcon_Default
           *
           */
          AssetPath: string;
          /**
           *
           * profile_icon_default
           *
           */
          Slug: string;
        };
        /**
         *
         * 300
         *
         */
        RestedXP: number;
        /**
         *
         * 2024-06-24T16:24:37.000Z
         *
         */
        RetroactiveRiftBattlepassPayoutTime: string;
        Transforms: {
          BannerKnightSlugFixed: boolean;
          /**
           *
           * 2024-11-12T19:37:33.000Z
           *
           */
          CharacterCurrencyRoundUp: string;
          FixRankedCharactersInGold: boolean;
          GoldStatTracker: boolean;
          MmrSeason4: boolean;
          OpenBetaFreebies: boolean;
          Season2CharactersInMasterCalculated: boolean;
          Season3PrestigeFix: boolean;
          Season4FighterRoadPromo: boolean;
          Season4FixRolloverRp: boolean;
          Season4Promo: boolean;
          Season4RankedRewardCatchup: boolean;
          /**
           *
           * 2024-12-13T15:39:16.000Z
           *
           */
          SeasonFourAcademiaMakeGood: string;
          /**
           *
           * 0
           *
           */
          SeasonFourAcademiaMakeGoodScoreGranted: number;
          /**
           *
           * 2024-11-15T23:28:01.000Z
           *
           */
          ShaggySkinMakeGoodS4: string;
          /**
           *
           * 2024-08-07T01:07:34.000Z
           *
           */
          UpgradeWarMakeGood_8_5_2024: string;
        };
      };
      server_owner_data: {};
      /**
       *
       * normal
       *
       */
      state: string;
      state_data: {};
      /**
       *
       * 2025-03-10T15:48:41.000Z
       *
       */
      updated_at: string;
      wb_account: {
        /**
         *
         * adult
         *
         */
        age_category: string;
        completed: boolean;
        email_verified: boolean;
      };
      wbplay_data_synced: boolean;
      wbplay_identity: {};
    };
    achievements: any[];
    configuration: {
      apns: {
        enabled: {};
        environment: {};
        sha1: {};
      };
      auth: {
        override_client_restrictions: boolean;
      };
      gcm: {
        enabled: {};
        project_number: {};
      };
      gpgs: {
        google_play_client_id: {};
      };
      realtime: {
        /**
         *
         * ec2-us-east-1-dokken
         *
         */
        "default-cluster": string;
        enabled: boolean;
        servers: {
          "ec2-us-east-1-dokken": {
            "dokken-realtime-1/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://52.73.198.117:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-1.wbagora.com:9101
               *
               */
              wss: string;
            };
            "dokken-realtime-1/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://52.73.198.117:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-1.wbagora.com:9102
               *
               */
              wss: string;
            };
            "dokken-realtime-2/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://54.91.137.166:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-2.wbagora.com:9101
               *
               */
              wss: string;
            };
            "dokken-realtime-2/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://54.91.137.166:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-2.wbagora.com:9102
               *
               */
              wss: string;
            };
            "dokken-realtime-3/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://54.144.160.165:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-3.wbagora.com:9101
               *
               */
              wss: string;
            };
            "dokken-realtime-3/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://54.144.160.165:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-3.wbagora.com:9102
               *
               */
              wss: string;
            };
            "dokken-realtime-4/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://35.170.47.9:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-4.wbagora.com:9101
               *
               */
              wss: string;
            };
            "dokken-realtime-4/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://35.170.47.9:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-4.wbagora.com:9102
               *
               */
              wss: string;
            };
            "dokken-realtime-5/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://52.72.177.178:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-5.wbagora.com:9101
               *
               */
              wss: string;
            };
            "dokken-realtime-5/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://52.72.177.178:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-dokken-realtime-5.wbagora.com:9102
               *
               */
              wss: string;
            };
          };
        };
      };
      server_side_code_deploy: {
        /**
         *
         * a5bc65aa-b129-4f8c-8fc9-b7d20a392463
         *
         */
        instance: string;
        /**
         *
         * 5a98f8bc35424a1bcfaab95d51f8ef40afb83c9c
         *
         */
        sha: string;
      };
    };
    in_queue: boolean;
    maintenance: {};
    notifications: any[];
    profile: {
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       */
      account_id: string;
      aggregates: {
        "fighter-road-xp": {
          /**
           *
           * current_value
           *
           */
          type_class: string;
          /**
           *
           * 203423
           *
           */
          value: number;
        };
        "s1-battlepass-score": {
          /**
           *
           * current_value
           *
           */
          type_class: string;
          /**
           *
           * 6000
           *
           */
          value: number;
        };
        "s3-battlepass-score": {
          /**
           *
           * current_value
           *
           */
          type_class: string;
          /**
           *
           * 133729
           *
           */
          value: number;
        };
        "s4-battlepass-score": {
          /**
           *
           * current_value
           *
           */
          type_class: string;
          /**
           *
           * 50430
           *
           */
          value: number;
        };
      };
      calculations: {};
      /**
       *
       * 2023-01-23T21:17:48.000Z
       *
       */
      created_at: string;
      cross_match_results: {};
      data: {
        HasCompletedFTUE: boolean;
        HasCompletedFirstMatch: boolean;
        IsChildAccount: boolean;
        /**
         *
         * Season:SeasonFour
         *
         */
        MostRecentlyViewedCurrentRiftSeason: string;
        PerkPreferences: {
          Characters: {
            character_C018: {
              /**
               *
               * 0
               *
               */
              LastSelectedPage: number;
              PerkPages: {
                /**
                 *
                 * CUSTOM 1
                 *
                 */
                PageName: string;
                PerkSlugs: string[];
              }[];
            };
            character_arya: {
              /**
               *
               * 0
               *
               */
              LastSelectedPage: number;
              PerkPages: {
                /**
                 *
                 * CUSTOM 1
                 *
                 */
                PageName: string;
                PerkSlugs: string[];
              }[];
            };
            character_finn: {
              /**
               *
               * 0
               *
               */
              LastSelectedPage: number;
              PerkPages: {
                /**
                 *
                 * CUSTOM 1
                 *
                 */
                PageName: string;
                PerkSlugs: string[];
              }[];
            };
            character_garnet: {
              /**
               *
               * 0
               *
               */
              LastSelectedPage: number;
              PerkPages: {
                /**
                 *
                 * CUSTOM 1
                 *
                 */
                PageName: string;
                PerkSlugs: string[];
              }[];
            };
            character_jake: {
              /**
               *
               * 0
               *
               */
              LastSelectedPage: number;
              PerkPages: {
                /**
                 *
                 * CUSTOM 1
                 *
                 */
                PageName: string;
                PerkSlugs: string[];
              }[];
            };
            character_superman: {
              /**
               *
               * 0
               *
               */
              LastSelectedPage: number;
              PerkPages: {
                /**
                 *
                 * CUSTOM 1
                 *
                 */
                PageName: string;
                PerkSlugs: string[];
              }[];
            };
            character_tom_and_jerry: {
              /**
               *
               * 0
               *
               */
              LastSelectedPage: number;
              PerkPages: {
                /**
                 *
                 * CUSTOM 1
                 *
                 */
                PageName: string;
                PerkSlugs: string[];
              }[];
            };
          };
        };
      };
      files: any[];
      /**
       *
       * 63cef97ced0619f458cfac90
       *
       */
      id: string;
      inventory: {
        "battlepass-season-1": {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-05-30T15:50:02.000Z
           *
           */
          created_at: string;
        };
        character_BananaGuard: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-06-05T21:32:11.000Z
           *
           */
          created_at: string;
        };
        character_C029: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2025-02-08T02:54:17.000Z
           *
           */
          created_at: string;
        };
        character_Jason: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-07-02T20:53:29.000Z
           *
           */
          created_at: string;
        };
        character_batman: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-11-15T16:40:38.000Z
           *
           */
          created_at: string;
        };
        character_bugs_bunny: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-11-15T16:40:51.000Z
           *
           */
          created_at: string;
        };
        character_c019: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2025-01-05T02:52:25.000Z
           *
           */
          created_at: string;
        };
        character_c024: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-08-24T16:18:33.000Z
           *
           */
          created_at: string;
        };
        character_c16: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2025-01-22T03:32:47.000Z
           *
           */
          created_at: string;
        };
        character_currency: {
          /**
           *
           * 18000
           *
           */
          count: number;
          created_at: {};
        };
        character_finn: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-12-06T04:03:57.000Z
           *
           */
          created_at: string;
        };
        character_garnet: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-11-25T23:01:11.000Z
           *
           */
          created_at: string;
        };
        character_jake: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-11-25T23:01:08.000Z
           *
           */
          created_at: string;
        };
        character_shaggy: {
          /**
           *
           * 1
           *
           */
          count: number;
        };
        character_steven: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2025-01-30T23:12:48.000Z
           *
           */
          created_at: string;
        };
        character_superman: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2025-01-05T02:52:07.000Z
           *
           */
          created_at: string;
        };
        character_tom_and_jerry: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-11-25T23:01:03.000Z
           *
           */
          created_at: string;
        };
        character_wonder_woman: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-11-12T19:38:27.000Z
           *
           */
          created_at: string;
        };
        skin_c034_s01: {
          /**
           *
           * 1
           *
           */
          count: number;
          /**
           *
           * 2024-07-05T21:05:46.000Z
           *
           */
          created_at: string;
        };
      };
      /**
       *
       * 2025-03-10T15:48:40.000Z
       *
       */
      last_login: string;
      matches: {
        "1v1_container": {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 12
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 18
           *
           */
          longest_win_streak: number;
          /**
           *
           * 2516
           *
           */
          loss: number;
          /**
           *
           * 0
           *
           */
          loss_streak: number;
          /**
           *
           * 3016
           *
           */
          win: number;
          /**
           *
           * 4
           *
           */
          win_streak: number;
        };
        "1v1_container_bot": {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 0
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 4
           *
           */
          longest_win_streak: number;
          /**
           *
           * 1
           *
           */
          loss: number;
          /**
           *
           * 0
           *
           */
          loss_streak: number;
          /**
           *
           * 4
           *
           */
          win: number;
          /**
           *
           * 4
           *
           */
          win_streak: number;
        };
        "2v2_container": {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 0
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 6
           *
           */
          longest_win_streak: number;
          /**
           *
           * 53
           *
           */
          loss: number;
          /**
           *
           * 0
           *
           */
          loss_streak: number;
          /**
           *
           * 57
           *
           */
          win: number;
          /**
           *
           * 1
           *
           */
          win_streak: number;
        };
        arena_container_four_player: {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 1
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 1
           *
           */
          longest_win_streak: number;
          /**
           *
           * 1
           *
           */
          loss: number;
          /**
           *
           * 1
           *
           */
          loss_streak: number;
          /**
           *
           * 1
           *
           */
          win: number;
          /**
           *
           * 0
           *
           */
          win_streak: number;
        };
        custom_container_one_player: {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 1
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 1
           *
           */
          longest_win_streak: number;
          /**
           *
           * 2
           *
           */
          loss: number;
          /**
           *
           * 1
           *
           */
          loss_streak: number;
          /**
           *
           * 1
           *
           */
          win: number;
          /**
           *
           * 0
           *
           */
          win_streak: number;
        };
        custom_container_one_player_online: {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 0
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 1
           *
           */
          longest_win_streak: number;
          /**
           *
           * 14
           *
           */
          loss: number;
          /**
           *
           * 0
           *
           */
          loss_streak: number;
          /**
           *
           * 1
           *
           */
          win: number;
          /**
           *
           * 0
           *
           */
          win_streak: number;
        };
        custom_container_two_player: {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 4
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 36
           *
           */
          longest_win_streak: number;
          /**
           *
           * 35
           *
           */
          loss: number;
          /**
           *
           * 0
           *
           */
          loss_streak: number;
          /**
           *
           * 60
           *
           */
          win: number;
          /**
           *
           * 36
           *
           */
          win_streak: number;
        };
        ffa_container: {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 2
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 2
           *
           */
          longest_win_streak: number;
          /**
           *
           * 3
           *
           */
          loss: number;
          /**
           *
           * 2
           *
           */
          loss_streak: number;
          /**
           *
           * 2
           *
           */
          win: number;
          /**
           *
           * 0
           *
           */
          win_streak: number;
        };
        rift_container_one_player: {
          /**
           *
           * 0
           *
           */
          challenge_loss: number;
          /**
           *
           * 0
           *
           */
          challenge_win: number;
          /**
           *
           * 0
           *
           */
          longest_loss_streak: number;
          /**
           *
           * 2
           *
           */
          longest_win_streak: number;
          /**
           *
           * 0
           *
           */
          loss: number;
          /**
           *
           * 0
           *
           */
          loss_streak: number;
          /**
           *
           * 2
           *
           */
          win: number;
          /**
           *
           * 2
           *
           */
          win_streak: number;
        };
      };
      notifications: {};
      points: {};
      /**
       *
       * 0.25115115419482414
       *
       */
      random_distribution: number;
      server_data: {
        /**
         *
         * 63cef9c6609607a8deb2c31d
         *
         */
        BattlepassID: string;
        /**
         *
         * 0
         *
         */
        CurrentXP: number;
        HasReceivedBattlepassRewardFromOpenBeta: boolean;
        /**
         *
         * 1
         *
         */
        Level: number;
        MatchConfig: {
          MultiqueueConfigs: {
            /**
             *
             * Matchmade
             *
             */
            Context: string;
            /**
             *
             * Versus
             *
             */
            GameModeAlias: string;
            /**
             *
             * Unranked
             *
             */
            QueueType: string;
            /**
             *
             * Duos
             *
             */
            TeamStyle: string;
          }[];
        };
        /**
         *
         * 14
         *
         */
        NumOwnedBaseRosterFighters: number;
        /**
         *
         * 15
         *
         */
        NumOwnedFighters: number;
        OpenBeta: boolean;
        SeasonalData: {
          "Season:SeasonFive": {
            /**
             *
             * 2025-03-10T00:00:00.000Z
             *
             */
            LastLoginDay: string;
            /**
             *
             * 14
             *
             */
            NumDaysLoggedIn: number;
            /**
             *
             * 144
             *
             */
            NumLogins: number;
            Ranked: {
              ClaimedRewards: string[];
              DataByMode: {
                "1v1": {
                  BestCharacter: {
                    /**
                     *
                     * character_Jason
                     *
                     */
                    CharacterSlug: string;
                    /**
                     *
                     * 2137
                     *
                     */
                    CurrentPoints: number;
                    /**
                     *
                     * 371
                     *
                     */
                    GamesPlayed: number;
                    /**
                     *
                     * 2025-02-08T02:53:45.000Z
                     *
                     */
                    LastUpdateTimestamp: string;
                    /**
                     *
                     * 2179
                     *
                     */
                    MaxPoints: number;
                    /**
                     *
                     * 160
                     *
                     */
                    SetsPlayed: number;
                  };
                  DataByCharacter: {
                    character_Jason: {
                      /**
                       *
                       * 2137
                       *
                       */
                      CurrentPoints: number;
                      /**
                       *
                       * 109764
                       *
                       */
                      DamageDealt: number;
                      /**
                       *
                       * 120253
                       *
                       */
                      DamageTaken: number;
                      /**
                       *
                       * 856
                       *
                       */
                      Deaths: number;
                      /**
                       *
                       * 371
                       *
                       */
                      GamesPlayed: number;
                      /**
                       *
                       * 0
                       *
                       */
                      LastDecayMs: number;
                      /**
                       *
                       * 2025-03-02T08:15:12.000Z
                       *
                       */
                      LastUpdateTimestamp: string;
                      /**
                       *
                       * 79
                       *
                       */
                      Losses: number;
                      /**
                       *
                       * 2179
                       *
                       */
                      MaxPoints: number;
                      /**
                       *
                       * 837
                       *
                       */
                      Ringouts: number;
                      /**
                       *
                       * 160
                       *
                       */
                      SetsPlayed: number;
                      /**
                       *
                       * 80
                       *
                       */
                      Wins: number;
                    };
                  };
                  /**
                   *
                   * 371
                   *
                   */
                  GamesPlayed: number;
                  /**
                   *
                   * 2025-03-02T08:15:12.000Z
                   *
                   */
                  LastUpdateTimestamp: string;
                  /**
                   *
                   * 160
                   *
                   */
                  SetsPlayed: number;
                };
              };
            };
          };
          "Season:SeasonFour": {
            /**
             *
             * 2025-01-31T00:00:00.000Z
             *
             */
            LastLoginDay: string;
            /**
             *
             * 27
             *
             */
            NumDaysLoggedIn: number;
            /**
             *
             * 45
             *
             */
            NumLogins: number;
            Ranked: {
              ClaimedRewards: string[];
              DataByMode: {
                "1v1": {
                  BestCharacter: {
                    /**
                     *
                     * character_Jason
                     *
                     */
                    CharacterSlug: string;
                    /**
                     *
                     * 2457
                     *
                     */
                    CurrentPoints: number;
                    /**
                     *
                     * 1189
                     *
                     */
                    GamesPlayed: number;
                    /**
                     *
                     * 2024-11-13T15:47:31.000Z
                     *
                     */
                    LastUpdateTimestamp: string;
                    /**
                     *
                     * 2605
                     *
                     */
                    MaxPoints: number;
                    /**
                     *
                     * 493
                     *
                     */
                    SetsPlayed: number;
                  };
                  DataByCharacter: {
                    character_Jason: {
                      /**
                       *
                       * 2457
                       *
                       */
                      CurrentPoints: number;
                      /**
                       *
                       * 361469
                       *
                       */
                      DamageDealt: number;
                      /**
                       *
                       * 379378
                       *
                       */
                      DamageTaken: number;
                      /**
                       *
                       * 2780
                       *
                       */
                      Deaths: number;
                      /**
                       *
                       * 1189
                       *
                       */
                      GamesPlayed: number;
                      /**
                       *
                       * 0
                       *
                       */
                      LastDecayMs: number;
                      /**
                       *
                       * 2025-01-31T20:44:58.000Z
                       *
                       */
                      LastUpdateTimestamp: string;
                      /**
                       *
                       * 239
                       *
                       */
                      Losses: number;
                      /**
                       *
                       * 2605
                       *
                       */
                      MaxPoints: number;
                      /**
                       *
                       * 2713
                       *
                       */
                      Ringouts: number;
                      /**
                       *
                       * 493
                       *
                       */
                      SetsPlayed: number;
                      /**
                       *
                       * 238
                       *
                       */
                      Wins: number;
                    };
                  };
                  /**
                   *
                   * 694
                   *
                   */
                  FinalLeaderboardRank: number;
                  /**
                   *
                   * 1189
                   *
                   */
                  GamesPlayed: number;
                  /**
                   *
                   * 2025-01-31T20:44:58.000Z
                   *
                   */
                  LastUpdateTimestamp: string;
                  /**
                   *
                   * 493
                   *
                   */
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
                    /**
                     *
                     * character_Jason
                     *
                     */
                    CharacterSlug: string;
                    /**
                     *
                     * 2858
                     *
                     */
                    CurrentPoints: number;
                    /**
                     *
                     * 1591
                     *
                     */
                    GamesPlayed: number;
                    /**
                     *
                     * 2024-09-18T01:39:41.000Z
                     *
                     */
                    LastUpdateTimestamp: string;
                    /**
                     *
                     * 2929
                     *
                     */
                    MaxPoints: number;
                    /**
                     *
                     * 672
                     *
                     */
                    SetsPlayed: number;
                  };
                  DataByCharacter: {
                    character_Jason: {
                      /**
                       *
                       * 2858
                       *
                       */
                      CurrentPoints: number;
                      /**
                       *
                       * 376835
                       *
                       */
                      DamageDealt: number;
                      /**
                       *
                       * 481079
                       *
                       */
                      DamageTaken: number;
                      /**
                       *
                       * 3411
                       *
                       */
                      Deaths: number;
                      /**
                       *
                       * 1591
                       *
                       */
                      GamesPlayed: number;
                      /**
                       *
                       * 0
                       *
                       */
                      LastDecayMs: number;
                      /**
                       *
                       * 2024-11-11T23:10:40.000Z
                       *
                       */
                      LastUpdateTimestamp: string;
                      /**
                       *
                       * 403
                       *
                       */
                      Losses: number;
                      /**
                       *
                       * 2929
                       *
                       */
                      MaxPoints: number;
                      /**
                       *
                       * 3929
                       *
                       */
                      Ringouts: number;
                      /**
                       *
                       * 672
                       *
                       */
                      SetsPlayed: number;
                      /**
                       *
                       * 404
                       *
                       */
                      Wins: number;
                    };
                  };
                  /**
                   *
                   * 857
                   *
                   */
                  FinalLeaderboardRank: number;
                  /**
                   *
                   * 1591
                   *
                   */
                  GamesPlayed: number;
                  /**
                   *
                   * 2024-11-11T23:10:40.000Z
                   *
                   */
                  LastUpdateTimestamp: string;
                  /**
                   *
                   * 672
                   *
                   */
                  SetsPlayed: number;
                };
                "2v2": {
                  BestCharacter: {
                    /**
                     *
                     * character_Jason
                     *
                     */
                    CharacterSlug: string;
                    /**
                     *
                     * 35
                     *
                     */
                    CurrentPoints: number;
                    /**
                     *
                     * 0
                     *
                     */
                    GamesPlayed: number;
                    /**
                     *
                     * 2024-09-18T01:39:41.000Z
                     *
                     */
                    LastUpdateTimestamp: string;
                    /**
                     *
                     * 35
                     *
                     */
                    MaxPoints: number;
                    /**
                     *
                     * 1
                     *
                     */
                    SetsPlayed: number;
                  };
                  DataByCharacter: {
                    character_Jason: {
                      /**
                       *
                       * 35
                       *
                       */
                      CurrentPoints: number;
                      /**
                       *
                       * 0
                       *
                       */
                      DamageDealt: number;
                      /**
                       *
                       * 0
                       *
                       */
                      DamageTaken: number;
                      /**
                       *
                       * 0
                       *
                       */
                      Deaths: number;
                      /**
                       *
                       * 0
                       *
                       */
                      GamesPlayed: number;
                      /**
                       *
                       * 0
                       *
                       */
                      LastDecayMs: number;
                      /**
                       *
                       * 2024-09-18T01:39:41.000Z
                       *
                       */
                      LastUpdateTimestamp: string;
                      /**
                       *
                       * 0
                       *
                       */
                      Losses: number;
                      /**
                       *
                       * 35
                       *
                       */
                      MaxPoints: number;
                      /**
                       *
                       * 0
                       *
                       */
                      Ringouts: number;
                      /**
                       *
                       * 0
                       *
                       */
                      SetsPlayed: number;
                      /**
                       *
                       * 0
                       *
                       */
                      Wins: number;
                    };
                  };
                  /**
                   *
                   * 129774
                   *
                   */
                  FinalLeaderboardRank: number;
                  /**
                   *
                   * 0
                   *
                   */
                  GamesPlayed: number;
                  /**
                   *
                   * 0
                   *
                   */
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
                    /**
                     *
                     * character_Jason
                     *
                     */
                    CharacterSlug: string;
                    /**
                     *
                     * 2709
                     *
                     */
                    CurrentPoints: number;
                    /**
                     *
                     * 2270
                     *
                     */
                    GamesPlayed: number;
                    /**
                     *
                     * 2024-07-26T04:35:44.000Z
                     *
                     */
                    LastUpdateTimestamp: string;
                    /**
                     *
                     * 2745
                     *
                     */
                    MaxPoints: number;
                    /**
                     *
                     * 1317
                     *
                     */
                    SetsPlayed: number;
                  };
                  DataByCharacter: {
                    character_Jason: {
                      /**
                       *
                       * 2709
                       *
                       */
                      CurrentPoints: number;
                      /**
                       *
                       * 518935
                       *
                       */
                      DamageDealt: number;
                      /**
                       *
                       * 670230
                       *
                       */
                      DamageTaken: number;
                      /**
                       *
                       * 4941
                       *
                       */
                      Deaths: number;
                      /**
                       *
                       * 2270
                       *
                       */
                      GamesPlayed: number;
                      /**
                       *
                       * 0
                       *
                       */
                      LastDecayMs: number;
                      /**
                       *
                       * 2024-09-17T05:37:40.000Z
                       *
                       */
                      LastUpdateTimestamp: string;
                      /**
                       *
                       * 752
                       *
                       */
                      Losses: number;
                      /**
                       *
                       * 2745
                       *
                       */
                      MaxPoints: number;
                      /**
                       *
                       * 5496
                       *
                       */
                      Ringouts: number;
                      /**
                       *
                       * 1317
                       *
                       */
                      SetsPlayed: number;
                      /**
                       *
                       * 753
                       *
                       */
                      Wins: number;
                    };
                  };
                  /**
                   *
                   * 745
                   *
                   */
                  FinalLeaderboardRank: number;
                  /**
                   *
                   * 2272
                   *
                   */
                  GamesPlayed: number;
                  /**
                   *
                   * 2024-09-17T05:37:40.000Z
                   *
                   */
                  LastUpdateTimestamp: string;
                  /**
                   *
                   * 1318
                   *
                   */
                  SetsPlayed: number;
                };
                "2v2": {
                  BestCharacter: {
                    /**
                     *
                     * character_Jason
                     *
                     */
                    CharacterSlug: string;
                    /**
                     *
                     * 1035
                     *
                     */
                    CurrentPoints: number;
                    /**
                     *
                     * 107
                     *
                     */
                    GamesPlayed: number;
                    /**
                     *
                     * 2024-08-20T02:02:32.000Z
                     *
                     */
                    LastUpdateTimestamp: string;
                    /**
                     *
                     * 1047
                     *
                     */
                    MaxPoints: number;
                    /**
                     *
                     * 48
                     *
                     */
                    SetsPlayed: number;
                  };
                  DataByCharacter: {
                    character_Jason: {
                      /**
                       *
                       * 1035
                       *
                       */
                      CurrentPoints: number;
                      /**
                       *
                       * 18082
                       *
                       */
                      DamageDealt: number;
                      /**
                       *
                       * 26826
                       *
                       */
                      DamageTaken: number;
                      /**
                       *
                       * 177
                       *
                       */
                      Deaths: number;
                      /**
                       *
                       * 107
                       *
                       */
                      GamesPlayed: number;
                      /**
                       *
                       * 0
                       *
                       */
                      LastDecayMs: number;
                      /**
                       *
                       * 2024-08-24T16:45:00.000Z
                       *
                       */
                      LastUpdateTimestamp: string;
                      /**
                       *
                       * 26
                       *
                       */
                      Losses: number;
                      /**
                       *
                       * 1047
                       *
                       */
                      MaxPoints: number;
                      /**
                       *
                       * 193
                       *
                       */
                      Ringouts: number;
                      /**
                       *
                       * 48
                       *
                       */
                      SetsPlayed: number;
                      /**
                       *
                       * 25
                       *
                       */
                      Wins: number;
                    };
                  };
                  /**
                   *
                   * 37414
                   *
                   */
                  FinalLeaderboardRank: number;
                  /**
                   *
                   * 107
                   *
                   */
                  GamesPlayed: number;
                  /**
                   *
                   * 2024-08-24T16:45:00.000Z
                   *
                   */
                  LastUpdateTimestamp: string;
                  /**
                   *
                   * 48
                   *
                   */
                  SetsPlayed: number;
                };
              };
              bEndOfSeasonRewardsGranted: boolean;
            };
          };
        };
        /**
         *
         * 57890
         *
         */
        TotalPrestige: number;
        Transforms: {
          currency_conversion_errored: {
            Version_1: boolean;
            Version_2: boolean;
            Version_3: boolean;
          };
          welcome_back: boolean;
        };
        checked_grants: {
          s2_extension_make_good_boost: boolean;
        };
        /**
         *
         * 0
         *
         */
        debug_all_unlocked: number;
        exm_segment_membership: {
          exm_experiment_arm_map: {};
          exm_experiment_segments: any[];
          exm_global_segments: string[];
        };
        ftue: {
          /**
           *
           * eDONE
           *
           */
          current_ftue_step: string;
        };
        /**
         *
         * 0
         *
         */
        loss_streak: number;
        /**
         *
         * 1
         *
         */
        s2_extension_make_good_boost: number;
        stat_trackers: {
          /**
           *
           * 656
           *
           */
          HighestDamageDealt: number;
          /**
           *
           * 350
           *
           */
          OpenBetaGold: number;
          /**
           *
           * 48
           *
           */
          TotalAssists: number;
          /**
           *
           * 46128
           *
           */
          TotalAttacksDodged: number;
          /**
           *
           * 18
           *
           */
          TotalDoubleRingouts: number;
          /**
           *
           * 22
           *
           */
          TotalRingoutLeader: number;
          /**
           *
           * 13411
           *
           */
          TotalRingouts: number;
          /**
           *
           * 704
           *
           */
          TotalToastsGiven: number;
          /**
           *
           * 704
           *
           */
          TotalToastsReceived: number;
          /**
           *
           * 3121
           *
           */
          TotalWins: number;
          /**
           *
           * 5200
           *
           */
          Valentines2023Currency: number;
          character_highest_damage_dealt: {
            /**
             *
             * 167
             *
             */
            character_C018: number;
            /**
             *
             * 656
             *
             */
            character_Jason: number;
            /**
             *
             * 18
             *
             */
            character_arya: number;
            /**
             *
             * 459
             *
             */
            character_shaggy: number;
            /**
             *
             * 18
             *
             */
            character_superman: number;
          };
          character_matches: {
            /**
             *
             * 1
             *
             */
            character_BananaGuard: number;
            /**
             *
             * 2
             *
             */
            character_C018: number;
            /**
             *
             * 5606
             *
             */
            character_Jason: number;
            /**
             *
             * 66
             *
             */
            character_shaggy: number;
          };
          character_ringouts: {
            /**
             *
             * 3
             *
             */
            character_C018: number;
            /**
             *
             * 13365
             *
             */
            character_Jason: number;
            /**
             *
             * 3
             *
             */
            character_arya: number;
            /**
             *
             * 37
             *
             */
            character_shaggy: number;
            /**
             *
             * 3
             *
             */
            character_superman: number;
          };
          character_total_damage_dealt: {
            /**
             *
             * 295
             *
             */
            character_C018: number;
            /**
             *
             * 1407040.925918579
             *
             */
            character_Jason: number;
            /**
             *
             * 41
             *
             */
            character_arya: number;
            /**
             *
             * 3694.185760498047
             *
             */
            character_shaggy: number;
            /**
             *
             * 60
             *
             */
            character_superman: number;
          };
          character_wins: {
            /**
             *
             * 3
             *
             */
            character_C018: number;
            /**
             *
             * 3052
             *
             */
            character_Jason: number;
            /**
             *
             * 2
             *
             */
            character_arya: number;
            /**
             *
             * 4
             *
             */
            character_finn: number;
            /**
             *
             * 58
             *
             */
            character_shaggy: number;
            /**
             *
             * 1
             *
             */
            character_superman: number;
            /**
             *
             * 1
             *
             */
            character_tom_and_jerry: number;
          };
          season1: {
            /**
             *
             * 131.25
             *
             */
            HighestDamageDealt: number;
            /**
             *
             * 2
             *
             */
            TotalWins: number;
            character_highest_damage_dealt: {
              /**
               *
               * 131.25
               *
               */
              character_shaggy: number;
            };
            character_matches: {
              /**
               *
               * 1
               *
               */
              character_BananaGuard: number;
              /**
               *
               * 2
               *
               */
              character_shaggy: number;
            };
            character_total_damage_dealt: {
              /**
               *
               * 199.18576049804688
               *
               */
              character_shaggy: number;
            };
            character_wins: {
              /**
               *
               * 2
               *
               */
              character_shaggy: number;
            };
          };
          season2: {
            /**
             *
             * 546.0574951171875
             *
             */
            HighestDamageDealt: number;
            /**
             *
             * 32
             *
             */
            TotalAssists: number;
            /**
             *
             * 19596
             *
             */
            TotalAttacksDodged: number;
            /**
             *
             * 6
             *
             */
            TotalDoubleRingouts: number;
            /**
             *
             * 12
             *
             */
            TotalRingoutLeader: number;
            /**
             *
             * 5774
             *
             */
            TotalRingouts: number;
            /**
             *
             * 1349
             *
             */
            TotalWins: number;
            character_highest_damage_dealt: {
              /**
               *
               * 546.0574951171875
               *
               */
              character_Jason: number;
            };
            character_matches: {
              /**
               *
               * 2409
               *
               */
              character_Jason: number;
            };
            character_ringouts: {
              /**
               *
               * 5774
               *
               */
              character_Jason: number;
            };
            character_total_damage_dealt: {
              /**
               *
               * 545648.9259185791
               *
               */
              character_Jason: number;
            };
            character_wins: {
              /**
               *
               * 1349
               *
               */
              character_Jason: number;
            };
            ranked: {
              "1v1": {
                /**
                 *
                 * 1
                 *
                 */
                CharactersInGold: number;
                /**
                 *
                 * 779
                 *
                 */
                Wins: number;
              };
              "2v2": {
                /**
                 *
                 * 1
                 *
                 */
                CharactersInGold: number;
              };
            };
          };
          season3: {
            /**
             *
             * 591
             *
             */
            HighestDamageDealt: number;
            /**
             *
             * 12501
             *
             */
            TotalAttacksDodged: number;
            /**
             *
             * 7
             *
             */
            TotalDoubleRingouts: number;
            /**
             *
             * 3
             *
             */
            TotalRingoutLeader: number;
            /**
             *
             * 3957
             *
             */
            TotalRingouts: number;
            /**
             *
             * 920
             *
             */
            TotalWins: number;
            character_highest_damage_dealt: {
              /**
               *
               * 591
               *
               */
              character_Jason: number;
            };
            character_matches: {
              /**
               *
               * 1600
               *
               */
              character_Jason: number;
            };
            character_ringouts: {
              /**
               *
               * 3957
               *
               */
              character_Jason: number;
            };
            character_total_damage_dealt: {
              /**
               *
               * 379634
               *
               */
              character_Jason: number;
            };
            character_wins: {
              /**
               *
               * 920
               *
               */
              character_Jason: number;
            };
            ranked: {
              "1v1": {
                /**
                 *
                 * 1
                 *
                 */
                CharactersInGold: number;
                /**
                 *
                 * 404
                 *
                 */
                Wins: number;
              };
            };
          };
          season4: {
            /**
             *
             * 643
             *
             */
            HighestDamageDealt: number;
            /**
             *
             * 2
             *
             */
            TotalAssists: number;
            /**
             *
             * 10418
             *
             */
            TotalAttacksDodged: number;
            /**
             *
             * 1
             *
             */
            TotalDoubleRingouts: number;
            /**
             *
             * 1
             *
             */
            TotalRingoutLeader: number;
            /**
             *
             * 2785
             *
             */
            TotalRingouts: number;
            /**
             *
             * 599
             *
             */
            TotalWins: number;
            character_highest_damage_dealt: {
              /**
               *
               * 167
               *
               */
              character_C018: number;
              /**
               *
               * 643
               *
               */
              character_Jason: number;
            };
            character_matches: {
              /**
               *
               * 2
               *
               */
              character_C018: number;
              /**
               *
               * 1217
               *
               */
              character_Jason: number;
            };
            character_ringouts: {
              /**
               *
               * 3
               *
               */
              character_C018: number;
              /**
               *
               * 2782
               *
               */
              character_Jason: number;
            };
            character_total_damage_dealt: {
              /**
               *
               * 295
               *
               */
              character_C018: number;
              /**
               *
               * 370542
               *
               */
              character_Jason: number;
            };
            character_wins: {
              /**
               *
               * 1
               *
               */
              character_C018: number;
              /**
               *
               * 598
               *
               */
              character_Jason: number;
            };
            ranked: {
              "1v1": {
                /**
                 *
                 * 1
                 *
                 */
                CharactersInGold: number;
                /**
                 *
                 * 242
                 *
                 */
                Wins: number;
              };
            };
          };
          season5: {
            /**
             *
             * 656
             *
             */
            HighestDamageDealt: number;
            /**
             *
             * 14
             *
             */
            TotalAssists: number;
            /**
             *
             * 3608
             *
             */
            TotalAttacksDodged: number;
            /**
             *
             * 4
             *
             */
            TotalDoubleRingouts: number;
            /**
             *
             * 4
             *
             */
            TotalRingoutLeader: number;
            /**
             *
             * 889
             *
             */
            TotalRingouts: number;
            /**
             *
             * 241
             *
             */
            TotalWins: number;
            character_highest_damage_dealt: {
              /**
               *
               * 656
               *
               */
              character_Jason: number;
              /**
               *
               * 459
               *
               */
              character_shaggy: number;
            };
            character_matches: {
              /**
               *
               * 380
               *
               */
              character_Jason: number;
              /**
               *
               * 64
               *
               */
              character_shaggy: number;
            };
            character_ringouts: {
              /**
               *
               * 852
               *
               */
              character_Jason: number;
              /**
               *
               * 37
               *
               */
              character_shaggy: number;
            };
            character_total_damage_dealt: {
              /**
               *
               * 111216
               *
               */
              character_Jason: number;
              /**
               *
               * 3495
               *
               */
              character_shaggy: number;
            };
            character_wins: {
              /**
               *
               * 185
               *
               */
              character_Jason: number;
              /**
               *
               * 56
               *
               */
              character_shaggy: number;
            };
            ranked: {
              "1v1": {
                /**
                 *
                 * 1
                 *
                 */
                CharactersInGold: number;
                /**
                 *
                 * 80
                 *
                 */
                Wins: number;
              };
            };
          };
        };
      };
      server_owner_data: {};
      /**
       *
       * 2025-03-10T15:48:42.000Z
       *
       */
      updated_at: string;
      user_segments: string[];
    };
    /**
     *
     * V2wvUvGjnf0Ma23VCEJXFZHDPewZ8FdaYjXGvpqsdzxMHk9BvyPLMTymAOM6WDqW3J4Vek/x3v2yVbxo5r+VbkOpzsk9pVW5zj/0bxOaYgMXPCe4opBb2LY7twuGq4cHh4B7uer44UVxHP/VjzQbHGqEa8BzzdjMrZn3rPGl0H5S9sOkokqiEw==
     *
     */
    token: string;
    wb_network: {
      /**
       *
       * I+MPokHx/JkCFmuHpcEiavYwKjKnp5BukUdWe1OlLqGC3yurVX4PndUzw0YD/zY2V2F2Z4sCT6A+oFHMwDtsic30zdadK5+Dw1YxH/4i9UU=
       *
       */
      network_token: string;
    };
  }

  export interface Accounts_me_relationships_id_block_RESPONSE {
    /**
     *
     * 62ec5254e7de359de7a0f3b7
     *
     */
    account_id: string;
    /**
     *
     * 2025-03-10T15:56:20.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * 67cf0ba4beb4039cbde45421
     *
     */
    id: string;
    /**
     *
     * blocked
     *
     */
    level: string;
    /**
     *
     * 63cef97ced0619f458cfac8f
     *
     */
    owner: string;
    server_data: {};
    sources: any[];
    /**
     *
     * 2025-03-10T15:56:20.000Z
     *
     */
    updated_at: string;
  }

  export interface Accounts_me_relationships_id_unblock_RESPONSE {
    /**
     *
     * 62ec5254e7de359de7a0f3b7
     *
     */
    account_id: string;
    /**
     *
     * 2025-03-10T15:56:20.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * 67cf0ba4beb4039cbde45421
     *
     */
    id: string;
    /**
     *
     * default
     *
     */
    level: string;
    /**
     *
     * 63cef97ced0619f458cfac8f
     *
     */
    owner: string;
    server_data: {};
    sources: any[];
    /**
     *
     * 2025-03-10T15:56:24.000Z
     *
     */
    updated_at: string;
  }

  export interface Accounts_wb_network_bulk_RESPONSE {
    connections: any[];
    /**
     *
     * 2024-06-09T03:32:49.000Z
     *
     */
    created_at: string;
    deleted: boolean;
    /**
     *
     * 6665226141e1c384d52f7c27
     *
     */
    id: string;
    "identity.alternate.ps4": {
      avatar: {};
      /**
       *
       * im_kinda_sad
       *
       */
      username: string;
    }[];
    "identity.alternate.wb_network": {
      avatar: {};
      /**
       *
       * p27f58a6c649741d1bfe8efd3a8d9d47c
       *
       */
      id: string;
      /**
       *
       * Imkindas
       *
       */
      username: string;
    }[];
    "identity.alternate.xb1": {
      avatar: {};
      /**
       *
       * Imkindamad69
       *
       */
      username: string;
    }[];
    /**
     *
     * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.173.png
     *
     */
    "identity.avatar": string;
    "identity.default_username": boolean;
    /**
     *
     * polished-clever-smoke-shadow-WEDRb
     *
     */
    "identity.username": string;
    /**
     *
     * en-US
     *
     */
    locale: string;
    orphaned: boolean;
    orphaned_reason: {};
    /**
     *
     * 0
     *
     */
    points: number;
    /**
     *
     * offline
     *
     */
    presence: string;
    /**
     *
     * 0
     *
     */
    presence_state: number;
    /**
     *
     * p94d5e05350df443fb98c821858b550a9
     *
     */
    public_id: string;
    /**
     *
     * 2024-10-27T11:00:00.000Z
     *
     */
    "server_data.LastDailyRefresh": string;
    /**
     *
     * 0
     *
     */
    "server_data.LastKnownDebugDelta": number;
    /**
     *
     * XBoxSeriesX
     *
     */
    "server_data.LastLoginPlatform": string;
    /**
     *
     * Season:SeasonThree
     *
     */
    "server_data.LastRefreshSeason": string;
    /**
     *
     * 2024-10-22T11:00:00.000Z
     *
     */
    "server_data.LastWeeklyRefresh": string;
    /**
     *
     * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/WB_IG_ProfileIcon_C017_YouStay.WB_IG_ProfileIcon_C017_YouStay
     *
     */
    "server_data.ProfileIcon.AssetPath": string;
    /**
     *
     * WB_IG_ProfileIcon_C017_YouStay
     *
     */
    "server_data.ProfileIcon.Slug": string;
    /**
     *
     * 2024-06-22T17:47:47.000Z
     *
     */
    "server_data.RetroactiveRiftBattlepassPayoutTime": string;
    /**
     *
     * 2024-12-03T05:46:52.000Z
     *
     */
    "server_data.Transforms.CharacterCurrencyRoundUp": string;
    "server_data.Transforms.Season2CharactersInMasterCalculated": boolean;
    /**
     *
     * 2024-11-15T23:47:31.000Z
     *
     */
    "server_data.Transforms.ShaggySkinMakeGoodS4": string;
    /**
     *
     * 2024-08-07T17:08:28.000Z
     *
     */
    "server_data.Transforms.UpgradeWarMakeGood_8_5_2024": string;
    /**
     *
     * normal
     *
     */
    state: string;
    /**
     *
     * 2024-12-03T05:46:52.000Z
     *
     */
    updated_at: string;
    "wb_account.completed": boolean;
    wbplay_data_synced: boolean;
    wbplay_identity: {};
  }

  export interface Auth_v1_oauth_token_RESPONSE {
    /**
     *
     * eyJraWQiOiIyMDIyLTA2LTE0VDA2OjE3OjU3LjA0NzkyODcwMFoiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJjbGllbnRJZCI6Inh5emE3ODkxNHVjZzhxR3JFMnRCRXRqRjZpV1djOU9RIiwicHJvZHVjdElkIjoiNWY4YzViOWE5MWNhNGUzM2I0YWZlMzA0MGIyN2U0NWUiLCJpc3MiOiJlb3MiLCJlbnYiOiJwcm9kIiwib3JnYW5pemF0aW9uSWQiOiJvLTdreXY4dXd0ejc0bmpubDU0NGtieHp0NXhxZXBodyIsImZlYXR1cmVzIjpbIkFjaGlldmVtZW50cyIsIkFudGlDaGVhdCIsIkNvbm5lY3QiLCJFY29tIiwiTG9iYmllcyIsIk1hdGNobWFraW5nIiwiTm90aWZpY2F0aW9ucyIsIlBsYXllckRhdGFTdG9yYWdlIiwiU3RhdHMiLCJUaXRsZVN0b3JhZ2UiXSwiZGVwbG95bWVudElkIjoiMjlkYTIzYjIxZjdmNDEzMTljN2ZhNWU4NmUyMGRjMmIiLCJzYW5kYm94SWQiOiIzYTIxMmMwZGE0ZjE0MzhlODQwYzIxNTY1ZGY0YjZmZSIsInRva2VuVHlwZSI6ImNsaWVudFRva2VuIiwiZXhwIjoxNzQxNjI1MjkxLCJpYXQiOjE3NDE2MjE2OTEsImp0aSI6IjMzN2NkZGZmMGU4YTQ1MzdiZTQ2ZTdhZDBkMzhiZjMyIn0.AoEzEToEquFzuIyOCfljrokHNv9EqHsOaj7M9IY-V3UC0sTK0YBWUSjq3DryutUxUdciIi2GzeW6GDb7yxsGUCIUmF9TP4njxBUtpQ10c2r5E9WxHNLL6kXEHV0qmirvXiGtMcYaQ3grHATIUdelHRVTL035q0lpzic_KDRjJ2chXlCHdhGIuXEz3xtxXOyOl6kSoxVTG35fLsMhxkO1eBq0gupPJbhiAmuXfgMugiSZpMB002q3jSrtodgd5efhVNW0lg8SI-7f5271ceKoqjX6aEkPcaBFLTDZKanlhs3O6nW4aErt0gShOdxrwa7y4fkPUK3zuEsuPw4bHjuXgQ
     *
     * eyJraWQiOiIyMDIyLTA2LTE0VDA2OjE3OjU3LjA0NzkyODcwMFoiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJjbGllbnRJZCI6Inh5emE3ODkxNHVjZzhxR3JFMnRCRXRqRjZpV1djOU9RIiwicHJvZHVjdElkIjoiNWY4YzViOWE5MWNhNGUzM2I0YWZlMzA0MGIyN2U0NWUiLCJpc3MiOiJlb3MiLCJlbnYiOiJwcm9kIiwib3JnYW5pemF0aW9uSWQiOiJvLTdreXY4dXd0ejc0bmpubDU0NGtieHp0NXhxZXBodyIsImZlYXR1cmVzIjpbIkFjaGlldmVtZW50cyIsIkFudGlDaGVhdCIsIkNvbm5lY3QiLCJFY29tIiwiTG9iYmllcyIsIk1hdGNobWFraW5nIiwiTm90aWZpY2F0aW9ucyIsIlBsYXllckRhdGFTdG9yYWdlIiwiU3RhdHMiLCJUaXRsZVN0b3JhZ2UiXSwiZGVwbG95bWVudElkIjoiZGM5NDM5NjZlZGI1NGE2ZWI5YzEzMzRjYThjYzE5OTAiLCJzYW5kYm94SWQiOiIzYTIxMmMwZGE0ZjE0MzhlODQwYzIxNTY1ZGY0YjZmZSIsInRva2VuVHlwZSI6ImNsaWVudFRva2VuIiwiZXhwIjoxNzQxNjI1MzA3LCJpYXQiOjE3NDE2MjE3MDcsImp0aSI6IjdhODkyMDAxZjU4MTRjZDY5ZGVmYzRjMGJjYWU5NWYwIn0.NSZGz0yAFodb2WmRC0Es00Q8TH_RiIy8jMl6bp7kEZYWSVWcWTd1R-5kkLNQGWho04cB7-t9fqnWUGDOJWRrCBIJeH2ls-C6BcgqhyEofufk8xtGcMAZ5BaoNq3K4nQF9L2lEDxeYIzQATwcZAGZEC1goqpeVXRhnlZbasghX6CNrKM5rDAp3dBg56fP7_R2pNnvdWIHfB6fAT0JQdhvPWyCI-auJnDNmTybLPYkm-Xx-ofZfd6HJ_2y-9MqTPikhq5GKRIVoN4dk82BUtgWsZ4HluxoDfP6waPHJEBR0ATT1q-xU2GC4uqE7G5lUJsFfU3x4Ba7vAJ1o4EIxgaZVw
     *
     * eyJraWQiOiIyMDIyLTA2LTE0VDA2OjE3OjU3LjA0NzkyODcwMFoiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJjbGllbnRJZCI6Inh5emE3ODkxNHVjZzhxR3JFMnRCRXRqRjZpV1djOU9RIiwicHJvZHVjdElkIjoiNWY4YzViOWE5MWNhNGUzM2I0YWZlMzA0MGIyN2U0NWUiLCJpc3MiOiJlb3MiLCJlbnYiOiJwcm9kIiwib3JnYW5pemF0aW9uSWQiOiJvLTdreXY4dXd0ejc0bmpubDU0NGtieHp0NXhxZXBodyIsImZlYXR1cmVzIjpbIkFjaGlldmVtZW50cyIsIkFudGlDaGVhdCIsIkNvbm5lY3QiLCJFY29tIiwiTG9iYmllcyIsIk1hdGNobWFraW5nIiwiTm90aWZpY2F0aW9ucyIsIlBsYXllckRhdGFTdG9yYWdlIiwiU3RhdHMiLCJUaXRsZVN0b3JhZ2UiXSwiZGVwbG95bWVudElkIjoiMjlkYTIzYjIxZjdmNDEzMTljN2ZhNWU4NmUyMGRjMmIiLCJzYW5kYm94SWQiOiIzYTIxMmMwZGE0ZjE0MzhlODQwYzIxNTY1ZGY0YjZmZSIsInRva2VuVHlwZSI6ImNsaWVudFRva2VuIiwiZXhwIjoxNzQxNjI1MzA3LCJpYXQiOjE3NDE2MjE3MDcsImp0aSI6ImEwNTBhZTg4N2QyZDQ1YTY5ZTQ4MjA2ZDA3Y2ZlNDAwIn0.uRopHMgx0QpwcO7sGUt1v-QmwX7gDSb2WCVyM2yLu6DdpcrORFpEvxytWScZTgvjfrc6G61BAyAs090ZffOmN5CDZCt_Sgcx9AUKnqXQMas73NUq1MJBDcD8jaLKTjEuj1fnttg-1kN1tUSZXSzfK8g6gpbHpm0jqH_J7c0Os2kBVgROQick1lTTzzo3CvA9cHw2xLfpZglpDBerdyzVHw3W5uxIVUeYSdYPaoU0yOk-dQfi4CH-bptODgJpYjci6kKxxscJJ5YAdoS0VrBRlwDXK9T7uswYFtgoGJLvVSozGywPLLMEOIqcQZQhiy13SlTHYYxf_5dba6mfYcGe8A
     *
     * eyJraWQiOiIyMDIyLTA2LTE0VDA2OjE3OjU3LjA0NzkyODcwMFoiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJjbGllbnRJZCI6Inh5emE3ODkxNHVjZzhxR3JFMnRCRXRqRjZpV1djOU9RIiwicHJvZHVjdElkIjoiNWY4YzViOWE5MWNhNGUzM2I0YWZlMzA0MGIyN2U0NWUiLCJpc3MiOiJlb3MiLCJlbnYiOiJwcm9kIiwibm9uY2UiOiJYanJ1MkF5SGhVT2hMUG5XQUxpMGhnIiwib3JnYW5pemF0aW9uSWQiOiJvLTdreXY4dXd0ejc0bmpubDU0NGtieHp0NXhxZXBodyIsImZlYXR1cmVzIjpbIkFjaGlldmVtZW50cyIsIkFudGlDaGVhdCIsIkNvbm5lY3QiLCJFY29tIiwiTG9iYmllcyIsIk1hdGNobWFraW5nIiwiTm90aWZpY2F0aW9ucyIsIlBsYXllckRhdGFTdG9yYWdlIiwiU3RhdHMiLCJUaXRsZVN0b3JhZ2UiXSwicHJvZHVjdFVzZXJJZCI6IjAwMDI1NWY0YzQxYzQ0NzQ5MzY1ZjJkNTVmMWM3OTM5Iiwib3JnYW5pemF0aW9uVXNlcklkIjoiMDAwMTM5OWQyNTNkNDQ2N2JiN2FkMWFmN2M2ZDZhYTAiLCJjbGllbnRJcCI6IjczLjIwOS40NC4xOTkiLCJkZXBsb3ltZW50SWQiOiIyOWRhMjNiMjFmN2Y0MTMxOWM3ZmE1ZTg2ZTIwZGMyYiIsInNhbmRib3hJZCI6IjNhMjEyYzBkYTRmMTQzOGU4NDBjMjE1NjVkZjRiNmZlIiwidG9rZW5UeXBlIjoidXNlclRva2VuIiwiZXhwIjoxNzQxNjI1MzI0LCJpYXQiOjE3NDE2MjE3MjQsImFjY291bnQiOnsiaWRwIjoic3RlYW0iLCJkaXNwbGF5TmFtZSI6Im11bHRpdmVyc3Vza290aCIsImlkIjoiNzY1NjExOTk0NzI5MTgxNjkiLCJwbGYiOiJzdGVhbSJ9LCJqdGkiOiJlODQ2MTdlOTJhZWU0ZWMzYTlmYmMxNGJjYjg0ZTlkMSJ9.wf5oKpAwmnzeOQ0-3Rg6F5KbtOFYVG7VWUXON2cQHB3hnV4nqY142hIlmYcBapRJ14LN8urEcZYlVUpuheVjPgHtN8McRZwR338UkvYYA52l39BQPCLNRUdfFRbWO0rV2bxMLxbeK9ycURfvISXFNaQI10IO-_z-aAgCoFYyof33eWlXS-2-n7WHpDOQdsNzOC3_f8GGAnMt0bZkZSbkByAXWZc3A8i9KmdSxRO9ds94ml_qsAsW6hzIgosUnZx_atg5yuKCi3-GAOWGbig6eGY_jHdE50eEq7ctaimWpVCAsZSbehTeaI0MgPoo7tm9RENgYd2fOuixCR7pD2J6Ag
     *
     */
    access_token: string;
    /**
     *
     * 29da23b21f7f41319c7fa5e86e20dc2b
     *
     * dc943966edb54a6eb9c1334ca8cc1990
     *
     */
    deployment_id: string;
    /**
     *
     * 2025-03-10T16:48:11.189Z
     *
     * 2025-03-10T16:48:27.718Z
     *
     * 2025-03-10T16:48:27.717Z
     *
     * 2025-03-10T16:48:44.501Z
     *
     */
    expires_at: string;
    /**
     *
     * 3599
     *
     */
    expires_in: number;
    features: string[];
    /**
     *
     * o-7kyv8uwtz74njnl544kbxzt5xqephw
     *
     */
    organization_id: string;
    /**
     *
     * 5f8c5b9a91ca4e33b4afe3040b27e45e
     *
     */
    product_id: string;
    /**
     *
     * 3a212c0da4f1438e840c21565df4b6fe
     *
     */
    sandbox_id: string;
    /**
     *
     * bearer
     *
     */
    token_type: string;
    /**
     *
     * Xjru2AyHhUOhLPnWALi0hg
     *
     */
    nonce: string;
    /**
     *
     * 0001399d253d4467bb7ad1af7c6d6aa0
     *
     */
    organization_user_id: string;
    /**
     *
     * 000255f4c41c44749365f2d55f1c7939
     *
     */
    product_user_id: string;
    product_user_id_created: boolean;
    /**
     *
     * eyJraWQiOiIyMDIyLTA2LTE0VDA2OjE3OjU3LjA0NzkyODcwMFoiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ4eXphNzg5MTR1Y2c4cUdyRTJ0QkV0akY2aVdXYzlPUSIsInN1YiI6IjAwMDI1NWY0YzQxYzQ0NzQ5MzY1ZjJkNTVmMWM3OTM5IiwicGZzaWQiOiIzYTIxMmMwZGE0ZjE0MzhlODQwYzIxNTY1ZGY0YjZmZSIsImFjdCI6eyJwbHRmbSI6InN0ZWFtIiwiZWFpZCI6Ijc2NTYxMTk5NDcyOTE4MTY5IiwiZWF0Ijoic3RlYW0ifSwicGZkaWQiOiIyOWRhMjNiMjFmN2Y0MTMxOWM3ZmE1ZTg2ZTIwZGMyYiIsImlzcyI6Imh0dHBzOlwvXC9hcGkuZXBpY2dhbWVzLmRldlwvYXV0aFwvdjFcL29hdXRoIiwiZXhwIjoxNzQxNjI1MzI0LCJ0b2tlblR5cGUiOiJpZFRva2VuIiwiaWF0IjoxNzQxNjIxNzI0LCJwZnBpZCI6IjVmOGM1YjlhOTFjYTRlMzNiNGFmZTMwNDBiMjdlNDVlIn0.NCE-Tytz7zK7uDn5lxFV4TSBCGkpSGwAisbpcaYJzJ-wrla1nr1sCl6dj-v9wFx_puhJl17zA5LIPFnGdFlPNYW1Yk4ihfW-ZR0AIlgAebbVOdLnEtUxnn7cEVjg2HBpKk5pX3Wf3CRYaoi6MNFConvirXxhW7axDTMnEyL1pHhguu15lp4jR8JBehNO4j0Uq7Zl-AQmBekwJvPbfDVHQM_cFk1sXcSBlTRFYF54ahyNFTpPN-QhUevS2dIVIIyLLGq75uTrWRE2pV1zx78IxoJh2E9k7q2sTccOQec4y23TPjujN9xmQ3vXMUxzheqwCNrpmos4cl-6HuHitLfyEw
     *
     */
    id_token: string;
  }

  export interface Batch_RESPONSE {
    responses: {
      body: {
        body: {
          /**
           *
           * 1167552915
           *
           */
          Crc: number;
          /**
           *
           * 1291076274
           *
           */
          MatchmakingCrc: number;
        };
        metadata: {};
        /**
         *
         * 304
         *
         */
        return_code: number;
        /**
         *
         * 1
         *
         */
        current_page: number;
        matches: any[];
        /**
         *
         * 0
         *
         * 191
         *
         */
        total_matches: number;
        /**
         *
         * 0
         *
         * 10
         *
         */
        total_pages: number;
      };
      headers: {
        /**
         *
         * *
         *
         */
        "Access-Control-Allow-Origin": string;
        /**
         *
         * no-cache
         *
         */
        "Cache-Control": string;
        /**
         *
         * 3
         *
         * 191
         *
         * 4
         *
         */
        "Content-Length": string;
        /**
         *
         * application/json
         *
         */
        "Content-Type": string;
        /**
         *
         * 24f7dcfb-fdc7-11ef-9412-57abb86f9187
         *
         * 24ff5588-fdc7-11ef-92c1-29148262d9b8
         *
         * 4b8eec71-fdc7-11ef-aee4-8bc9e3568e4e
         *
         * 24dbbd1d-fdc8-11ef-aff7-a59d0b1ece6e
         *
         */
        "X-Hydra-Event-Id": string;
        /**
         *
         * service-6
         *
         * service-14
         *
         * service-2
         *
         * service-1
         *
         */
        "X-Hydra-Info": string;
        /**
         *
         * 68
         *
         * 48
         *
         * 10
         *
         * 78
         *
         */
        "X-Hydra-Processing-Time": string;
        /**
         *
         * 1741621723.307736
         *
         * 1741621724.954628
         *
         * 1741621788.6029022
         *
         * 1741622152.6319883
         *
         */
        "X-Hydra-Server-Time": string;
      };
      /**
       *
       * 200
       *
       */
      status_code: number;
    }[];
  }

  export interface Commerce_products_RESPONSE {
    allow_free_purchase: boolean;
    available_for_purchase: boolean;
    /**
     *
     * 2022-05-03T05:44:00.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     *
     *
     */
    description: string;
    /**
     *
     * 6270c120fbc68d6f294d93be
     *
     */
    id: string;
    is_store_defined: boolean;
    items: {
      /**
       *
       * paid
       *
       */
      currency_source_slug: string;
      /**
       *
       * character-unlock-ticket-currency
       *
       */
      inventory_item_slug: string;
      proxy_quantity: boolean;
      /**
       *
       * 15
       *
       */
      quantity: number;
    }[];
    /**
     *
     * FoundersPack_1_XBox
     *
     */
    name: string;
    prices: {
      /**
       *
       * xb1-inventory
       *
       */
      backend_name: string;
      is_durable: boolean;
      /**
       *
       * 9PN4FG1C937K
       *
       */
      item_id: string;
      /**
       *
       * FoundersPack_1_XBox_price
       *
       */
      name: string;
      /**
       *
       * 1
       *
       */
      quantity: number;
      /**
       *
       * founderspack-1-xbox-price
       *
       */
      slug: string;
      /**
       *
       * 3999
       *
       */
      usd_price: number;
      /**
       *
       * collections
       *
       */
      xbox_service: string;
    }[];
    purchase_once: boolean;
    reward_actions: {
      /**
       *
       * profile-update
       *
       */
      action: string;
      options: {
        conditions: {};
        operations: {
          /**
           *
           * set
           *
           */
          cmd: string;
          /**
           *
           * server_data.FoundersPack1
           *
           */
          path: string;
          update_value: {
            source_options: {
              constant_value: boolean;
            };
            /**
             *
             * constant
             *
             */
            source_type: string;
          };
        }[];
      };
      target: {};
    }[];
    /**
     *
     * founderspack-1-xbox
     *
     */
    slug: string;
    tags: string[];
    /**
     *
     * 2024-05-01T18:23:30.000Z
     *
     */
    updated_at: string;
    visible: boolean;
  }

  export interface Commerce_purchases_me_RESPONSE {
    /**
     *
     * 1
     *
     */
    current_page: number;
    purchases: any[];
    /**
     *
     * 0
     *
     */
    total_pages: number;
    /**
     *
     * 0
     *
     */
    total_purchases: number;
  }

  export interface Commerce_steam_mtx_user_info_me_RESPONSE {
    /**
     *
     * US
     *
     */
    country: string;
    /**
     *
     * USD
     *
     */
    currency: string;
    /**
     *
     * IL
     *
     */
    state: string;
    /**
     *
     * Trusted
     *
     */
    status: string;
  }

  export interface Datarouter_api_v1_public_data_clients_RESPONSE {}

  export interface Dokken_v1_event_RESPONSE {
    /**
     *
     * 1
     *
     * 10
     *
     * 4
     *
     * 3
     *
     * 7
     *
     * 6
     *
     * 13
     *
     * 15
     *
     * 2
     *
     * 9
     *
     */
    EventsInRequest: number;
    /**
     *
     * 1
     *
     * 10
     *
     * 4
     *
     * 3
     *
     * 7
     *
     * 6
     *
     * 13
     *
     * 15
     *
     * 2
     *
     * 9
     *
     */
    EventsQueued: number;
    /**
     *
     * 0
     *
     */
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
    /**
     *
     * 2024-05-25T01:25:59.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/ee1f6d4-ftue_carousel_keyart.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fe83a96fab7be82aa89e7fe68b637dce2ba9eb367cb1d017a8b25f6c5c723620
     *
     */
    download_url: string;
    /**
     *
     * 1551387
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * ee1f6d4-ftue_carousel_keyart.png
     *
     */
    filename: string;
    /**
     *
     * 66513e27569e3e6210a7a9bf
     *
     */
    id: string;
    /**
     *
     * 43f9c684b81e42008a3b11a76f6e4396
     *
     */
    md5_checksum: string;
    /**
     *
     * ftue_carousel_keyart_compressed
     *
     */
    name: string;
    /**
     *
     * dokken/production/ee1f6d4-ftue_carousel_keyart.png
     *
     */
    s3_object_id: string;
    /**
     *
     * ftue-carousel-keyart-compressed
     *
     */
    slug: string;
    /**
     *
     * 2024-05-25T01:25:59.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_beginnermode_carousel_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2024-10-11T15:37:32.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/70dc43d1-t_begginnermode_carousel_keyart.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d354fcd20b5c22638ef8c4a35ce6a54d8621b7b880eaf00c969b86be0536133a
     *
     */
    download_url: string;
    /**
     *
     * 8134018
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * 70dc43d1-t_begginnermode_carousel_keyart.png
     *
     */
    filename: string;
    /**
     *
     * 6709463c7f18dba761677bc0
     *
     */
    id: string;
    /**
     *
     * f1b764ad9cf9b70dfff0bac8a59b55c2
     *
     */
    md5_checksum: string;
    /**
     *
     * beginnermode_carousel_keyart
     *
     */
    name: string;
    /**
     *
     * dokken/production/70dc43d1-t_begginnermode_carousel_keyart.png
     *
     */
    s3_object_id: string;
    /**
     *
     * beginnermode-carousel-keyart
     *
     */
    slug: string;
    /**
     *
     * 2024-10-11T15:37:32.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_beginnermode_carousel_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2024-10-11T15:38:37.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/2d3f9f10-t_begginnermode_carousel_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f9e9ab806bc19049940f2de39e1fbf3339eb1276ef1bb058105804b0ae853f39
     *
     */
    download_url: string;
    /**
     *
     * 531510
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * 2d3f9f10-t_begginnermode_carousel_thumbnail.png
     *
     */
    filename: string;
    /**
     *
     * 6709467d7f18dba761677c39
     *
     */
    id: string;
    /**
     *
     * 50b2a2478fa37729c5d13a08ff2a8b57
     *
     */
    md5_checksum: string;
    /**
     *
     * beginnermode_carousel_thumbnail
     *
     */
    name: string;
    /**
     *
     * dokken/production/2d3f9f10-t_begginnermode_carousel_thumbnail.png
     *
     */
    s3_object_id: string;
    /**
     *
     * beginnermode-carousel-thumbnail
     *
     */
    slug: string;
    /**
     *
     * 2024-10-11T15:38:37.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_harley_rift_s5_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2025-03-04T00:13:27.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/86e37e3d-harley_Rift_S5_keyart.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=39c26d6407d13de34122724e6640b69f8ed9db696ae541e57d1b1cb0ddf7485a
     *
     */
    download_url: string;
    /**
     *
     * 1670879
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * 86e37e3d-harley_Rift_S5_keyart.png
     *
     */
    filename: string;
    /**
     *
     * 67c645a73451e4f30b3b739b
     *
     */
    id: string;
    /**
     *
     * 81680a025ba09e4c4a28b93d358b20f7
     *
     */
    md5_checksum: string;
    /**
     *
     * harley_rift_s5_keyart
     *
     */
    name: string;
    /**
     *
     * dokken/production/86e37e3d-harley_Rift_S5_keyart.png
     *
     */
    s3_object_id: string;
    /**
     *
     * harley-rift-s5-keyart
     *
     */
    slug: string;
    /**
     *
     * 2025-03-04T00:13:27.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_harley_rift_s5_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2025-03-04T00:14:09.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/8338ebac-harley_rift_s5_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fc40fe97da785c62fde947c8906a70a3239ff027c9166acbb9fb41b4c254a8f4
     *
     */
    download_url: string;
    /**
     *
     * 219351
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * 8338ebac-harley_rift_s5_thumbnail.png
     *
     */
    filename: string;
    /**
     *
     * 67c645d16e3939f376d9a32d
     *
     */
    id: string;
    /**
     *
     * 8c8f19d575d098e979e5ca2567f5865a
     *
     */
    md5_checksum: string;
    /**
     *
     * harley_rift_s5_thumbnail
     *
     */
    name: string;
    /**
     *
     * dokken/production/8338ebac-harley_rift_s5_thumbnail.png
     *
     */
    s3_object_id: string;
    /**
     *
     * harley-rift-s5-thumbnail
     *
     */
    slug: string;
    /**
     *
     * 2025-03-04T00:14:09.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_s5_bp_carousel_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2025-02-04T01:06:02.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/a6db14c3-MVS_SEASON5_bp_carousel_keyart.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5137b2fbe6153fed06254ac706007f103ccb15b0793bd5af13122ab03a8ec6ef
     *
     */
    download_url: string;
    /**
     *
     * 7939670
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * a6db14c3-MVS_SEASON5_bp_carousel_keyart.png
     *
     */
    filename: string;
    /**
     *
     * 67a167fac9f8478011462227
     *
     */
    id: string;
    /**
     *
     * 3053388b6e6bc6d67d558b1f4ea2f85e
     *
     */
    md5_checksum: string;
    /**
     *
     * s5_bp_carousel_keyart
     *
     */
    name: string;
    /**
     *
     * dokken/production/a6db14c3-MVS_SEASON5_bp_carousel_keyart.png
     *
     */
    s3_object_id: string;
    /**
     *
     * s5-bp-carousel-keyart
     *
     */
    slug: string;
    /**
     *
     * 2025-02-04T01:06:02.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_s5_bp_carousel_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2025-02-04T01:06:41.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/6d849a8f-MVS_SEASON5_bp_carousel_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=38d713f42009a18a057e1a098ab657c93596cadddf6a7c7dabf8789117c182d9
     *
     */
    download_url: string;
    /**
     *
     * 568876
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * 6d849a8f-MVS_SEASON5_bp_carousel_thumbnail.png
     *
     */
    filename: string;
    /**
     *
     * 67a168217d5313a213518cdb
     *
     */
    id: string;
    /**
     *
     * a498f47be9a4d273326f3ebfffb02a1b
     *
     */
    md5_checksum: string;
    /**
     *
     * s5_bp_carousel_thumbnail
     *
     */
    name: string;
    /**
     *
     * dokken/production/6d849a8f-MVS_SEASON5_bp_carousel_thumbnail.png
     *
     */
    s3_object_id: string;
    /**
     *
     * s5-bp-carousel-thumbnail
     *
     */
    slug: string;
    /**
     *
     * 2025-02-04T01:06:41.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_t_discord_qa_carousel_keyart_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2024-05-25T01:25:59.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/985a8eab-T_DISCORD_QA_CAROUSEL_KEYART.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=35e0bf2fc7861943f7f7ebb7dbbf83b8f282c3722b2e98666d630f4e437efd3d
     *
     */
    download_url: string;
    /**
     *
     * 2957542
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * 985a8eab-T_DISCORD_QA_CAROUSEL_KEYART.png
     *
     */
    filename: string;
    /**
     *
     * 66513e27569e3e6210a7a9c8
     *
     */
    id: string;
    /**
     *
     * b44f98481fe7da20ffbf619846c865ee
     *
     */
    md5_checksum: string;
    /**
     *
     * T_DISCORD_QA_CAROUSEL_KEYART
     *
     */
    name: string;
    /**
     *
     * dokken/production/985a8eab-T_DISCORD_QA_CAROUSEL_KEYART.png
     *
     */
    s3_object_id: string;
    /**
     *
     * t-discord-qa-carousel-keyart
     *
     */
    slug: string;
    /**
     *
     * 2024-05-25T01:25:59.000Z
     *
     */
    updated_at: string;
  }

  export interface File_storage_t_discord_qa_carousel_thumbnail_RESPONSE {
    auth_exempt: boolean;
    auto_sync: boolean;
    /**
     *
     * 2024-05-25T01:25:59.000Z
     *
     */
    created_at: string;
    data: {};
    /**
     *
     * https://wb-agora-hydra-file-storage-dokken.s3.amazonaws.com/dokken/production/cbeff8f4-T_DISCORD_QA_CAROUSEL_THUMBNAIL.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5J6YDD2RMJ4AQTRN%2F20250310%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250310T154845Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6740b3c308d444e86bb90bc57dfe6969167c2737c51ca698188771d129ec6358
     *
     */
    download_url: string;
    /**
     *
     * 153984
     *
     */
    file_size: number;
    /**
     *
     * image/png
     *
     */
    file_type: string;
    /**
     *
     * cbeff8f4-T_DISCORD_QA_CAROUSEL_THUMBNAIL.png
     *
     */
    filename: string;
    /**
     *
     * 66513e27569e3e6210a7a9c9
     *
     */
    id: string;
    /**
     *
     * 8aa891a30e01905d63217bcc34ea8b8e
     *
     */
    md5_checksum: string;
    /**
     *
     * T_DISCORD_QA_CAROUSEL_THUMBNAIL
     *
     */
    name: string;
    /**
     *
     * dokken/production/cbeff8f4-T_DISCORD_QA_CAROUSEL_THUMBNAIL.png
     *
     */
    s3_object_id: string;
    /**
     *
     * t-discord-qa-carousel-thumbnail
     *
     */
    slug: string;
    /**
     *
     * 2024-05-25T01:25:59.000Z
     *
     */
    updated_at: string;
  }

  export interface Friends_me_RESPONSE {
    /**
     *
     * 1
     *
     */
    page: number;
    /**
     *
     * 1000
     *
     */
    page_size: number;
    results: {
      account: {
        avatar: {
          /**
           *
           * https://prod-network-images.wbagora.com/network/account-wbgames-com/kitana-dod.jpg
           *
           */
          image_url: string;
          /**
           *
           * Kitana Dod
           *
           */
          name: string;
        };
        /**
         *
         * 0
         *
         */
        presence_state: number;
        /**
         *
         * p27f58a6c649741d1bfe8efd3a8d9d47c
         *
         */
        public_id: string;
        /**
         *
         * Imkindas
         *
         */
        username: string;
      };
      /**
       *
       * 2024-08-20T02:11:58+00:00
       *
       */
      created_at: string;
    }[];
    /**
     *
     * 30
     *
     */
    total: number;
  }

  export interface Friends_me_invitations_RESPONSE {
    account: {
      avatar: {
        /**
         *
         * https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-3.jpg
         *
         */
        image_url: string;
        /**
         *
         * Batman 3
         *
         */
        name: string;
      };
      /**
       *
       * 0
       *
       */
      presence_state: number;
      /**
       *
       * p39b6ef94a0ad40e29ed342f99f40e2db
       *
       */
      public_id: string;
      /**
       *
       * F22bomber
       *
       */
      username: string;
    };
    /**
     *
     * 2025-03-10T15:55:59+00:00
     *
     */
    created_at: string;
    /**
     *
     * 67cf0b8f59e56837868f0a0b
     *
     */
    id: string;
    /**
     *
     * 63cef97ccaf1cd11f09a765b
     *
     */
    sent_from: string;
    /**
     *
     * 62ea88998c829ee13fa0f84a
     *
     */
    sent_to: string;
    /**
     *
     * open
     *
     */
    state: string;
    /**
     *
     * 2025-03-10T15:55:59+00:00
     *
     */
    updated_at: string;
  }

  export interface Friends_me_invitations_incoming_RESPONSE {
    /**
     *
     * 1
     *
     */
    page: number;
    /**
     *
     * 1000
     *
     */
    page_size: number;
    results: {
      account: {
        avatar: {
          /**
           *
           * https://prod-network-images.wbagora.com/network/account-wbgames-com/jade.jpg
           *
           */
          image_url: string;
          /**
           *
           * Jade
           *
           */
          name: string;
        };
        /**
         *
         * 0
         *
         */
        presence_state: number;
        /**
         *
         * pe4d6fb4de9304f7892ea3f681ab6528b
         *
         */
        public_id: string;
        /**
         *
         * Whitelightnang
         *
         */
        username: string;
      };
      /**
       *
       * 2024-07-22T15:12:55+00:00
       *
       */
      created_at: string;
      /**
       *
       * 669e76f7e4a0975577796ffd
       *
       */
      id: string;
      /**
       *
       * 62e09b2c7b5dda01506f5785
       *
       */
      sent_from: string;
      /**
       *
       * 63cef97ccaf1cd11f09a765b
       *
       */
      sent_to: string;
      /**
       *
       * open
       *
       */
      state: string;
      /**
       *
       * 2024-07-22T15:12:55+00:00
       *
       */
      updated_at: string;
    }[];
    /**
     *
     * 36
     *
     */
    total: number;
  }

  export interface Friends_me_invitations_outgoing_RESPONSE {
    /**
     *
     * 1
     *
     */
    page: number;
    /**
     *
     * 1000
     *
     */
    page_size: number;
    results: any[];
    /**
     *
     * 0
     *
     */
    total: number;
  }

  export interface Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_RESPONSE {
    "[object Object]": {
      data: {};
      description: {};
      /**
       *
       * store_product
       *
       */
      embedded_object_type: string;
      /**
       *
       * Weight Lifting
       *
       */
      name: string;
      /**
       *
       * weight-lifting-account-cosmetics-store
       *
       */
      slug: string;
      /**
       *
       *
       *
       */
      "store_product-weight-lifting-account-cosmetics-store-description": string;
      /**
       *
       * store
       *
       */
      type: string;
    };
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {
        data: {};
        description: {};
        /**
         *
         * store_product
         *
         */
        embedded_object_type: string;
        /**
         *
         * Announcer Pack Taz
         *
         */
        name: string;
        /**
         *
         * announcer-pack-taz-account-cosmetics-store
         *
         */
        slug: string;
        /**
         *
         *
         *
         */
        "store_product-announcer-pack-taz-account-cosmetics-store-description": string;
        /**
         *
         * store
         *
         */
        type: string;
      }[];
      /**
       *
       * Account Cosmetics Store
       *
       */
      "layout_area-account-cosmetics-store-name": string;
      name: {};
      /**
       *
       * account-cosmetics-store
       *
       */
      slug: string;
      /**
       *
       * account-cosmetics-store
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Account Cosmetics Store
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Account Cosmetics
     *
     */
    name: string;
    /**
     *
     * account-cosmetics-layout
     *
     */
    slug: string;
    /**
     *
     * account-cosmetics-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_battlepass_variant_id_RESPONSE {
    body: {};
    /**
     *
     * 400
     *
     */
    code: number;
    /**
     *
     * 1
     *
     */
    hydra_error: number;
    /**
     *
     * There are no valid Layout models for type slug dokken-layout-type and variant slug battlepass-variant.
     *
     */
    msg: string;
    /**
     *
     * 0
     *
     */
    relying_party_error: number;
  }

  export interface Layout_dokken_layout_type_personalized_currency_variant_id_RESPONSE {
    /**
     *
     * highlight_store_product_quantity
     *
     */
    "[object Object]": string;
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {}[];
      /**
       *
       * Specials
       *
       */
      "layout_area-special-store-name": string;
      name: {};
      /**
       *
       * special-store
       *
       */
      slug: string;
      /**
       *
       * special-store
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Currency Layout
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Currency
     *
     */
    name: string;
    /**
     *
     * currency-layout
     *
     */
    slug: string;
    /**
     *
     * currency-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_road_layout_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {}[];
      /**
       *
       * Fighter Road
       *
       */
      "layout_area-fighter-road-store-name": string;
      name: {};
      /**
       *
       * fighter-road-store
       *
       */
      slug: string;
      /**
       *
       * fighter-road-store
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Fighter Road Layout
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Fighter Road Store
     *
     */
    name: string;
    offset: {
      /**
       *
       * 0
       *
       */
      x: number;
      /**
       *
       * 0
       *
       */
      y: number;
    };
    /**
     *
     * fighter-road-layout
     *
     */
    slug: string;
    /**
     *
     * fighter-road-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
    /**
     *
     * offset
     *
     */
    "Released Season 2!": string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_select_layout_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {
        data: {};
        description: {};
        /**
         *
         * store_product
         *
         */
        embedded_object_type: string;
        /**
         *
         * Marceline
         *
         */
        name: string;
        /**
         *
         * marceline
         *
         */
        slug: string;
        /**
         *
         * Marcy is a fun-loving, 1,000-year-old, Vampire Queen whoâ€™s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While sheâ€™s ultimately a force for good, be very careful to stay on her good sideâ€¦ or youâ€™ll get a taste of her true demon/vampire form!
         *
         */
        "store_product-marceline-description": string;
        /**
         *
         * store
         *
         */
        type: string;
      }[];
      /**
       *
       * Fighter Select Store
       *
       */
      "layout_area-fighter-top-nav-store-name": string;
      name: {};
      /**
       *
       * fighter-top-nav-store
       *
       */
      slug: string;
      /**
       *
       * fighter-top-nav-store
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Fighter Select Layout
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Fighter Select Store
     *
     */
    name: string;
    preferred: boolean;
    /**
     *
     * fighter-select-layout
     *
     */
    slug: string;
    /**
     *
     * fighter-select-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_variant_id_RESPONSE {
    /**
     *
     * preferred
     *
     */
    "": string;
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {
        data: {};
        description: {};
        /**
         *
         * store_product
         *
         */
        embedded_object_type: string;
        /**
         *
         * Marceline
         *
         */
        name: string;
        /**
         *
         * marceline
         *
         */
        slug: string;
        /**
         *
         * Marcy is a fun-loving, 1,000-year-old, Vampire Queen whoâ€™s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While sheâ€™s ultimately a force for good, be very careful to stay on her good sideâ€¦ or youâ€™ll get a taste of her true demon/vampire form!
         *
         */
        "store_product-marceline-description": string;
        /**
         *
         * store
         *
         */
        type: string;
      }[];
      /**
       *
       * Fighter Store
       *
       */
      "layout_area-fighter-store-layout-main-name": string;
      name: {};
      /**
       *
       * fighter-store-layout-main
       *
       */
      slug: string;
      /**
       *
       * fighter-store-layout-main
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Fighter store Main
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Fighter Store
     *
     */
    name: string;
    /**
     *
     * fighter-layout
     *
     */
    slug: string;
    /**
     *
     * fighter-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 3
     *
     */
    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_main_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {
        data: {};
        description: {};
        name: {};
        /**
         *
         * future-queen-nubias-strength-gleamium-featured-backfill
         *
         */
        slug: string;
        /**
         *
         *
         *
         */
        "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description": string;
        /**
         *
         * Future Queen Nubiaâ€™s Strength
         *
         */
        "store_product-future-queen-nubias-strength-gleamium-featured-backfill-name": string;
      }[];
      /**
       *
       * Featured
       *
       */
      "layout_area-features-bundles-variant-1-name": string;
      name: {};
      /**
       *
       * features-bundles-variant-1
       *
       */
      slug: string;
      /**
       *
       * features-bundles-variant-1
       *
       */
      template_slug: string;
      /**
       *
       * dynamic_featured
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Main store if the user is being personalized to
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Variant 1
     *
     */
    name: string;
    skus: {
      /**
       *
       * 0
       *
       */
      current_recurrence_purchase_count: number;
      data: {};
      description: {};
      enabled: boolean;
      is_available_for_purchase: boolean;
      is_price_valid: boolean;
      max_per_recurrence: {};
      /**
       *
       * Nubia gleamium
       *
       */
      name: string;
      /**
       *
       * virtual
       *
       */
      price_type: string;
      price_type_options: {
        currency_inventory_item: {
          data: {
            /**
             *
             * /Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium
             *
             */
            AssetPath: string;
            /**
             *
             * BF1687764A53B3EC34AE22B7065E88A5
             *
             */
            DisplayNameLocalizationKey: string;
            /**
             *
             * /Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium
             *
             */
            RewardThumbnail: string;
          };
          /**
           *
           *
           *
           */
          description: string;
          /**
           *
           * 663288a2358a2a62107ca852
           *
           */
          id: string;
          /**
           *
           * Gleamium
           *
           */
          name: string;
          /**
           *
           * gleamium
           *
           */
          slug: string;
          tags: string[];
          /**
           *
           * currency
           *
           */
          type_class: string;
        };
        /**
         *
         * 1000
         *
         */
        quantity: number;
      };
      recurrence_is_active: boolean;
      /**
       *
       * nubia-fighter-road_gleamium
       *
       */
      sku: string;
      /**
       *
       * Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now sheâ€™s stuck here, but sheâ€™s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once sheâ€™s got you in her sights, watch out!
       *
       */
      "store_product-nubia-fighter-road-description": string;
      /**
       *
       * virtual
       *
       */
      type: string;
      valid_user_segments: boolean;
    }[];
    /**
     *
     * main-variant-1
     *
     */
    slug: string;
    /**
     *
     * main-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_prestige_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {
        data: {};
        description: {};
        /**
         *
         * store_product
         *
         */
        embedded_object_type: string;
        /**
         *
         * Raven New 52
         *
         */
        name: string;
        /**
         *
         * raven-new-52-prestige-store
         *
         */
        slug: string;
        /**
         *
         *
         *
         */
        "store_product-raven-new-52-prestige-store-description": string;
        /**
         *
         * store
         *
         */
        type: string;
      }[];
      /**
       *
       * Prestige Store
       *
       */
      "layout_area-prestige-store-name": string;
      name: {};
      /**
       *
       * prestige-store
       *
       */
      slug: string;
      /**
       *
       * prestige-store
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Prestige Store
     *
     */
    description: string;
    enabled: boolean;
    false: {
      /**
       *
       * 0
       *
       */
      current_recurrence_purchase_count: number;
      data: {};
      description: {};
      enabled: boolean;
      is_available_for_purchase: boolean;
      is_price_valid: boolean;
      max_per_recurrence: {};
      /**
       *
       * Fancy Shaggy prestige
       *
       */
      name: string;
      /**
       *
       * virtual
       *
       */
      price_type: string;
      price_type_options: {
        currency_inventory_item: {
          data: {
            /**
             *
             * /Game/Panda_Main/Currencies/Currency_Prestige.Currency_Prestige
             *
             */
            AssetPath: string;
            /**
             *
             * /Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_prestige.t_ui_icon_prestige
             *
             */
            RewardThumbnail: string;
          };
          /**
           *
           *
           *
           */
          description: string;
          /**
           *
           * 663288a2358a2a62107ca8ed
           *
           */
          id: string;
          /**
           *
           * Prestige
           *
           */
          name: string;
          /**
           *
           * prestige
           *
           */
          slug: string;
          tags: string[];
          /**
           *
           * currency
           *
           */
          type_class: string;
        };
        /**
         *
         * 40000
         *
         */
        quantity: number;
      };
      recurrence_is_active: boolean;
      /**
       *
       * fancy-shaggy-prestige-store_prestige
       *
       */
      sku: string;
      /**
       *
       *
       *
       */
      "store_product-fancy-shaggy-prestige-store-description": string;
      /**
       *
       * virtual
       *
       */
      type: string;
      valid_user_segments: boolean;
    };
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Prestige Store
     *
     */
    name: string;
    /**
     *
     * prestige-layout
     *
     */
    slug: string;
    /**
     *
     * prestige-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_rift_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {
        data: {};
        description: {};
        name: {};
        /**
         *
         * small-power-within-bundle
         *
         */
        slug: string;
        /**
         *
         *
         *
         */
        "store_product-small-power-within-bundle-description": string;
        /**
         *
         * 100 Power Within Gem XP
         *
         */
        "store_product-small-power-within-bundle-name": string;
      }[];
      /**
       *
       * Featured
       *
       */
      "layout_area-rift-store-main-bundles-name": string;
      name: {};
      /**
       *
       * rift-store-main-bundles
       *
       */
      slug: string;
      /**
       *
       * rift-store-main-bundles
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    /**
     *
     * type_options
     *
     */
    bundle: string;
    data: {};
    /**
     *
     * Rift Store
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Rift Store
     *
     */
    name: string;
    /**
     *
     * rift-layout
     *
     */
    slug: string;
    /**
     *
     * rift-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
  }

  export interface Layout_dokken_layout_type_personalized_skin_variant_id_RESPONSE {
    areas: {
      data: {
        FeaturedArea: boolean;
        should_show_background_image: boolean;
      };
      /**
       *
       *
       *
       */
      description: string;
      enabled: boolean;
      items: {
        data: {};
        description: {};
        /**
         *
         * store_product
         *
         */
        embedded_object_type: string;
        /**
         *
         * Distant Lands
         *
         */
        name: string;
        /**
         *
         * distant-lands-skin-store
         *
         */
        slug: string;
        /**
         *
         *
         *
         */
        "store_product-distant-lands-skin-store-description": string;
        /**
         *
         * store
         *
         */
        type: string;
      }[];
      /**
       *
       * Variant Store
       *
       */
      "layout_area-skin-store-name": string;
      name: {};
      /**
       *
       * skin-store
       *
       */
      slug: string;
      /**
       *
       * skin-store
       *
       */
      template_slug: string;
      /**
       *
       * fixed_linear
       *
       */
      template_type: string;
    }[];
    data: {};
    /**
     *
     * Skin Store
     *
     */
    description: string;
    enabled: boolean;
    /**
     *
     * dokken-layout-type
     *
     */
    layout_type_slug: string;
    /**
     *
     * Skin Store
     *
     */
    name: string;
    /**
     *
     * skin-layout
     *
     */
    slug: string;
    /**
     *
     * skin-variant
     *
     */
    variant_slug: string;
    /**
     *
     * 1
     *
     */
    weight: number;
  }

  export interface Leaderboards_bulk_score_and_rank_id_RESPONSE {
    ranked_season5_1v1_all: {
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       */
      member: string;
      profile: {
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        account_id: string;
        aggregates: {
          "fighter-road-xp": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 203423
             *
             */
            value: number;
          };
          "s1-battlepass-score": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 6000
             *
             */
            value: number;
          };
          "s3-battlepass-score": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 133729
             *
             */
            value: number;
          };
          "s4-battlepass-score": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 50430
             *
             */
            value: number;
          };
        };
        calculations: {};
        /**
         *
         * 2023-01-23T21:17:48.000Z
         *
         */
        created_at: string;
        cross_match_results: {};
        files: any[];
        /**
         *
         * 63cef97ced0619f458cfac90
         *
         */
        id: string;
        /**
         *
         * 2025-03-10T15:48:40.000Z
         *
         */
        last_login: string;
        notifications: {};
        points: {};
        /**
         *
         * 0.25115115419482414
         *
         */
        random_distribution: number;
        /**
         *
         * 2025-03-10T15:48:42.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 209
       *
       */
      rank: number;
      /**
       *
       * 2137
       *
       */
      score: number;
    };
    ranked_season5_1v1_character_Jason: {
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       */
      member: string;
      profile: {
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        account_id: string;
        aggregates: {
          "fighter-road-xp": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 203423
             *
             */
            value: number;
          };
          "s1-battlepass-score": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 6000
             *
             */
            value: number;
          };
          "s3-battlepass-score": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 133729
             *
             */
            value: number;
          };
          "s4-battlepass-score": {
            /**
             *
             * current_value
             *
             */
            type_class: string;
            /**
             *
             * 50430
             *
             */
            value: number;
          };
        };
        calculations: {};
        /**
         *
         * 2023-01-23T21:17:48.000Z
         *
         */
        created_at: string;
        cross_match_results: {};
        files: any[];
        /**
         *
         * 63cef97ced0619f458cfac90
         *
         */
        id: string;
        /**
         *
         * 2025-03-10T15:48:40.000Z
         *
         */
        last_login: string;
        notifications: {};
        points: {};
        /**
         *
         * 0.25115115419482414
         *
         */
        random_distribution: number;
        /**
         *
         * 2025-03-10T15:48:42.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 8
       *
       */
      rank: number;
      /**
       *
       * 2137
       *
       */
      score: number;
    };
  }

  export interface Leaderboards_ranked_season5_1v1_all_around_id_RESPONSE {
    /**
     *
     * 53
     *
     */
    current_page: number;
    leaders: {
      account: {
        /**
         *
         * 2022-07-22T19:52:34.000Z
         *
         */
        created_at: string;
        deleted: boolean;
        /**
         *
         * 62db00026ba0a58e5a2c926e
         *
         */
        id: string;
        "identity.alternate.epic": {
          avatar: {};
          /**
           *
           * Kretinnn
           *
           */
          username: string;
        }[];
        "identity.alternate.twitch": {
          avatar: {};
          /**
           *
           * KretinChief
           *
           */
          username: string;
        }[];
        "identity.alternate.wb_network": {
          avatar: {};
          /**
           *
           * pcca8cdeead8642d98b3b1faf557848a1
           *
           */
          id: string;
          /**
           *
           * eimiklo
           *
           */
          username: string;
        }[];
        "identity.alternate.xb1": {
          avatar: {};
          /**
           *
           * eimiklo
           *
           */
          username: string;
        }[];
        /**
         *
         * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.431.png
         *
         */
        "identity.avatar": string;
        "identity.default_username": boolean;
        /**
         *
         * billowing-dry-water-grass-6LO87
         *
         */
        "identity.username": string;
        /**
         *
         * en-US
         *
         */
        locale: string;
        orphaned: boolean;
        orphaned_reason: {};
        /**
         *
         * 0
         *
         */
        points: number;
        /**
         *
         * p040b8ee0a51e45c0bb7af203e37bcc40
         *
         */
        public_id: string;
        /**
         *
         * normal
         *
         */
        state: string;
        /**
         *
         * 2025-02-18T21:35:22.000Z
         *
         */
        updated_at: string;
        "wb_account.completed": boolean;
        "wb_account.email_verified": boolean;
        wbplay_data_synced: boolean;
        wbplay_identity: {};
      };
      /**
       *
       * 62db00026ba0a58e5a2c926e
       *
       */
      member: string;
      profile: {
        /**
         *
         * 62db00026ba0a58e5a2c926e
         *
         */
        account_id: string;
        /**
         *
         * current_value
         *
         */
        "aggregates.fighter-road-xp.type_class": string;
        /**
         *
         * 449000
         *
         */
        "aggregates.fighter-road-xp.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s1-battlepass-score.type_class": string;
        /**
         *
         * 142000
         *
         */
        "aggregates.s1-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s3-battlepass-score.type_class": string;
        /**
         *
         * 193230
         *
         */
        "aggregates.s3-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s4-battlepass-score.type_class": string;
        /**
         *
         * 80639
         *
         */
        "aggregates.s4-battlepass-score.value": number;
        /**
         *
         * 2022-07-22T19:52:34.000Z
         *
         */
        created_at: string;
        /**
         *
         * 62db00026ba0a58e5a2c9271
         *
         */
        id: string;
        /**
         *
         * 2025-02-18T20:52:23.000Z
         *
         */
        last_login: string;
        points: {};
        /**
         *
         * 0.8022163153433566
         *
         */
        random_distribution: number;
        /**
         *
         * character_C017
         *
         */
        "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug": string;
        /**
         *
         * 2025-02-18T21:34:19.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 207
       *
       */
      rank: number;
      /**
       *
       * 2142
       *
       */
      score: number;
    }[];
    /**
     *
     * 55308
     *
     */
    total_leaders: number;
    /**
     *
     * 13827
     *
     */
    total_pages: number;
  }

  export interface Leaderboards_ranked_season5_1v1_all_show_RESPONSE {
    /**
     *
     * 1
     *
     */
    current_page: number;
    leaders: {
      account: {
        /**
         *
         * 2022-07-27T09:57:51.000Z
         *
         */
        created_at: string;
        deleted: boolean;
        /**
         *
         * 62e10c1f5aa13c213eafc03a
         *
         */
        id: string;
        "identity.alternate.steam": {
          /**
           *
           * https://avatars.steamstatic.com/a6cb4f17bc5b031eb2efed3e1dc84a498dd56d87.jpg
           *
           */
          avatar: string;
          /**
           *
           * 76561193971796704
           *
           */
          id: string;
          /**
           *
           * Schalti
           *
           */
          username: string;
        }[];
        "identity.alternate.twitch": {
          avatar: {};
          /**
           *
           * pumbafurry
           *
           */
          username: string;
        }[];
        "identity.alternate.wb_network": {
          avatar: {};
          /**
           *
           * pa1341f67a0d04e24b681f8ea795ac6b3
           *
           */
          id: string;
          /**
           *
           * TickIeToe420
           *
           */
          username: string;
        }[];
        /**
         *
         * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.050.png
         *
         */
        "identity.avatar": string;
        "identity.default_username": boolean;
        /**
         *
         * white-fragrant-tree-butterfly-ecVHu
         *
         */
        "identity.username": string;
        /**
         *
         * en-US
         *
         */
        locale: string;
        orphaned: boolean;
        orphaned_reason: {};
        /**
         *
         * 0
         *
         */
        points: number;
        /**
         *
         * p8aef1f21aa7c4bd3b4ea0b0b5dadb747
         *
         */
        public_id: string;
        /**
         *
         * normal
         *
         */
        state: string;
        /**
         *
         * 2025-03-09T21:09:32.000Z
         *
         */
        updated_at: string;
        "wb_account.completed": boolean;
        "wb_account.email_verified": boolean;
        wbplay_data_synced: boolean;
        wbplay_identity: {};
      };
      /**
       *
       * 62e10c1f5aa13c213eafc03a
       *
       */
      member: string;
      profile: {
        /**
         *
         * 62e10c1f5aa13c213eafc03a
         *
         */
        account_id: string;
        /**
         *
         * current_value
         *
         */
        "aggregates.fighter-road-xp.type_class": string;
        /**
         *
         * 449000
         *
         */
        "aggregates.fighter-road-xp.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s1-battlepass-score.type_class": string;
        /**
         *
         * 142000
         *
         */
        "aggregates.s1-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s3-battlepass-score.type_class": string;
        /**
         *
         * 273858
         *
         */
        "aggregates.s3-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s4-battlepass-score.type_class": string;
        /**
         *
         * 137550
         *
         */
        "aggregates.s4-battlepass-score.value": number;
        /**
         *
         * 2022-07-27T09:57:51.000Z
         *
         */
        created_at: string;
        /**
         *
         * 62e10c1f5aa13c213eafc03b
         *
         */
        id: string;
        /**
         *
         * 2025-03-09T21:08:58.000Z
         *
         */
        last_login: string;
        points: {};
        /**
         *
         * 0.4020679787819811
         *
         */
        random_distribution: number;
        /**
         *
         * character_Jason
         *
         */
        "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug": string;
        /**
         *
         * 2025-03-09T21:09:00.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 1
       *
       */
      rank: number;
      /**
       *
       * 3015
       *
       */
      score: number;
    }[];
    /**
     *
     * 55308
     *
     */
    total_leaders: number;
    /**
     *
     * 554
     *
     */
    total_pages: number;
  }

  export interface Leaderboards_ranked_season5_2v2_all_show_RESPONSE {
    /**
     *
     * 1
     *
     */
    current_page: number;
    leaders: {
      account: {
        /**
         *
         * 2022-08-01T18:34:15.000Z
         *
         */
        created_at: string;
        deleted: boolean;
        /**
         *
         * 62e81ca70cbbc05057a6b2bc
         *
         */
        id: string;
        "identity.alternate.steam": {
          /**
           *
           * https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg
           *
           */
          avatar: string;
          /**
           *
           * 76561194798428319
           *
           */
          id: string;
          /**
           *
           * Detrusive
           *
           */
          username: string;
        }[];
        "identity.alternate.twitch": {
          avatar: {};
          /**
           *
           * redjoey7
           *
           */
          username: string;
        }[];
        "identity.alternate.wb_network": {
          avatar: {};
          /**
           *
           * p1dc63ab8dd394cf3a8e080da79699f39
           *
           */
          id: string;
          /**
           *
           * redjoey7
           *
           */
          username: string;
        }[];
        /**
         *
         * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.350.png
         *
         */
        "identity.avatar": string;
        "identity.default_username": boolean;
        /**
         *
         * nameless-little-silence-frost-WiRCe
         *
         */
        "identity.username": string;
        /**
         *
         * en-US
         *
         */
        locale: string;
        orphaned: boolean;
        orphaned_reason: {};
        /**
         *
         * 0
         *
         */
        points: number;
        /**
         *
         * p714981b049764962a5a819900d4d5b9b
         *
         */
        public_id: string;
        /**
         *
         * normal
         *
         */
        state: string;
        /**
         *
         * 2025-03-10T07:24:57.000Z
         *
         */
        updated_at: string;
        "wb_account.completed": boolean;
        "wb_account.email_verified": boolean;
        wbplay_data_synced: boolean;
        wbplay_identity: {};
      };
      /**
       *
       * 62e81ca70cbbc05057a6b2bc
       *
       */
      member: string;
      profile: {
        /**
         *
         * 62e81ca70cbbc05057a6b2bc
         *
         */
        account_id: string;
        /**
         *
         * current_value
         *
         */
        "aggregates.fighter-road-xp.type_class": string;
        /**
         *
         * 449000
         *
         */
        "aggregates.fighter-road-xp.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s1-battlepass-score.type_class": string;
        /**
         *
         * 142000
         *
         */
        "aggregates.s1-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s3-battlepass-score.type_class": string;
        /**
         *
         * 342527
         *
         */
        "aggregates.s3-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s4-battlepass-score.type_class": string;
        /**
         *
         * 153372
         *
         */
        "aggregates.s4-battlepass-score.value": number;
        /**
         *
         * 2022-08-01T18:34:15.000Z
         *
         */
        created_at: string;
        /**
         *
         * 62e81ca70cbbc05057a6b2bf
         *
         */
        id: string;
        /**
         *
         * 2025-03-10T03:35:04.000Z
         *
         */
        last_login: string;
        points: {};
        /**
         *
         * 0.6177744633579968
         *
         */
        random_distribution: number;
        /**
         *
         * character_tom_and_jerry
         *
         */
        "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.CharacterSlug": string;
        /**
         *
         * 2025-03-10T07:23:39.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 1
       *
       */
      rank: number;
      /**
       *
       * 4476
       *
       */
      score: number;
    }[];
    /**
     *
     * 53826
     *
     */
    total_leaders: number;
    /**
     *
     * 539
     *
     */
    total_pages: number;
  }

  export interface Leaderboards_ranked_season5_2v2_character_c036_show_RESPONSE {
    /**
     *
     * 1
     *
     */
    current_page: number;
    leaders: {
      account: {
        /**
         *
         * 2022-08-19T02:51:17.000Z
         *
         */
        created_at: string;
        deleted: boolean;
        /**
         *
         * 62fefaa583afc38c09fc0509
         *
         */
        id: string;
        "identity.alternate.ps4": {
          avatar: {};
          /**
           *
           * PnWxHiDe
           *
           */
          username: string;
        }[];
        "identity.alternate.wb_network": {
          avatar: {};
          /**
           *
           * pbd7f503e0d04466990f6c56197f08494
           *
           */
          id: string;
          /**
           *
           * HiDePnW
           *
           */
          username: string;
        }[];
        /**
         *
         * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.063.png
         *
         */
        "identity.avatar": string;
        "identity.default_username": boolean;
        /**
         *
         * aged-late-cherry-cloud-sDvCa
         *
         */
        "identity.username": string;
        /**
         *
         * en-US
         *
         */
        locale: string;
        orphaned: boolean;
        orphaned_reason: {};
        /**
         *
         * 0
         *
         */
        points: number;
        /**
         *
         * p7aa796cf17aa4fde8829925eaf06b0b5
         *
         */
        public_id: string;
        /**
         *
         * normal
         *
         */
        state: string;
        /**
         *
         * 2025-03-10T15:52:46.000Z
         *
         */
        updated_at: string;
        "wb_account.completed": boolean;
        "wb_account.email_verified": boolean;
        wbplay_data_synced: boolean;
        wbplay_identity: {};
      };
      /**
       *
       * 62fefaa583afc38c09fc0509
       *
       */
      member: string;
      profile: {
        /**
         *
         * 62fefaa583afc38c09fc0509
         *
         */
        account_id: string;
        /**
         *
         * current_value
         *
         */
        "aggregates.fighter-road-xp.type_class": string;
        /**
         *
         * 449000
         *
         */
        "aggregates.fighter-road-xp.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s1-battlepass-score.type_class": string;
        /**
         *
         * 142000
         *
         */
        "aggregates.s1-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s3-battlepass-score.type_class": string;
        /**
         *
         * 454259
         *
         */
        "aggregates.s3-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s4-battlepass-score.type_class": string;
        /**
         *
         * 205330
         *
         */
        "aggregates.s4-battlepass-score.value": number;
        /**
         *
         * 2022-08-19T02:51:17.000Z
         *
         */
        created_at: string;
        /**
         *
         * 62fefaa583afc38c09fc050c
         *
         */
        id: string;
        /**
         *
         * 2025-03-10T14:36:24.000Z
         *
         */
        last_login: string;
        points: {};
        /**
         *
         * 0.3483922370676602
         *
         */
        random_distribution: number;
        /**
         *
         * 2025-03-10T15:28:00.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 1
       *
       */
      rank: number;
      /**
       *
       * 2787
       *
       */
      score: number;
    }[];
    /**
     *
     * 2113
     *
     */
    total_leaders: number;
    /**
     *
     * 22
     *
     */
    total_pages: number;
  }

  export interface Matches_555_RESPONSE {
    body: {};
    /**
     *
     * 404
     *
     */
    code: number;
    /**
     *
     * 0
     *
     */
    hydra_error: number;
    /**
     *
     * No match was found with shortcode 555.
     *
     */
    msg: string;
    /**
     *
     * 0
     *
     */
    relying_party_error: number;
  }

  export interface Matches_id_RESPONSE {
    /**
     *
     * public
     *
     */
    access: string;
    /**
     *
     * public
     *
     */
    access_level: string;
    account_id: {};
    arbitration: {};
    /**
     *
     * ec2-us-east-1-dokken
     *
     */
    cluster: string;
    completion_time: {};
    /**
     *
     * 2025-03-10T15:48:45.000Z
     *
     * 2025-03-10T16:04:50.000Z
     *
     * 2025-03-10T16:05:55.000Z
     *
     * 2025-03-10T16:06:11.000Z
     *
     * 2025-03-10T16:08:11.000Z
     *
     */
    created_at: string;
    criteria: {
      slug: {};
    };
    data: {};
    draw: {};
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     * 67cf0da2d0f5dd3b4bed6d4b
     *
     * 67cf0de391f4b91c30a4728c
     *
     * 67cf0df3ccb34beaa31998dc
     *
     * 67cf0e6bb8655ea25ca14eb6
     *
     */
    id: string;
    last_warning_time: {};
    loss: any[];
    matchmaking: {};
    /**
     *
     * still-weathered-sky-bird-MbzcG
     *
     * twilight-holy-cherry-fire-LWomp
     *
     * long-winter-dust-dream-AIG4o
     *
     * young-silent-silence-wave-0TuP0
     *
     * small-wandering-violet-surf-NT1NU
     *
     */
    name: string;
    /**
     *
     * client
     *
     */
    origin: string;
    players: {
      all: {
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        account_id: string;
        data: {};
        identity: {
          alternate: {
            steam: {
              /**
               *
               * https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg
               *
               */
              avatar: string;
              email: {};
              /**
               *
               * 76561195177950873
               *
               */
              id: string;
              /**
               *
               * multiversuskoth
               *
               */
              username: string;
            }[];
            wb_network: {
              avatar: {};
              email: {};
              /**
               *
               * pafd8d7950aa1484ea791d06662fa75ce
               *
               */
              id: string;
              /**
               *
               * MultiVersusKOTH
               *
               */
              username: string;
            }[];
          };
          /**
           *
           * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.584.png
           *
           */
          avatar: string;
          /**
           *
           * steam
           *
           */
          current_platform: string;
          default_username: boolean;
          is_cross_platform: boolean;
          personal_data: {};
          platforms: string[];
          /**
           *
           * dark-wild-grass-voice-yRPU2
           *
           */
          username: string;
          usernames: {
            /**
             *
             * hydra
             *
             */
            auth: string;
            /**
             *
             * dark-wild-grass-voice-yrpu2
             *
             */
            username: string;
          }[];
        };
        source: {};
        /**
         *
         * join
         *
         */
        state: string;
        state_data: {};
      }[];
      /**
       *
       * 1
       *
       * 2
       *
       */
      count: number;
      current: string[];
    };
    /**
     *
     * 0.8490722755005347
     *
     * 0.30359722936847855
     *
     * 0.36393994932316553
     *
     * 0.8251724432333264
     *
     * 0.6964229654258618
     *
     */
    rand: number;
    server_data: {
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
      /**
       *
       * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
       *
       */
      GameVersion: string;
      /**
       *
       * 1167552915
       *
       */
      HissCrc: number;
      IsLobbyJoinable: boolean;
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       * 62e95383b488ee2289aef406
       *
       */
      LeaderID: string;
      /**
       *
       * 0
       *
       */
      LobbyType: number;
      LockedLoadouts: {
        ":id": {
          /**
           *
           * character_shaggy
           *
           * character_Jason
           *
           * character_C028
           *
           */
          Character: string;
          /**
           *
           * skin_shaggy_default
           *
           * skin_c035_s25
           *
           * skin_c028_default
           *
           */
          Skin: string;
        };
      };
      /**
       *
       * evtq_ffa
       *
       * ranked-1v1
       *
       * 2v2
       *
       */
      ModeString: string;
      Platforms: {
        /**
         *
         * PC
         *
         */
        ":id": string;
      };
      PlayerAutoPartyPreferences: {
        ":id": boolean;
      };
      PlayerGameplayPreferences: {
        /**
         *
         * 544
         *
         * 964
         *
         */
        ":id": number;
      };
      ReadyPlayers: {
        ":id": boolean;
      };
      Teams: {
        /**
         *
         * 1
         *
         */
        Length: number;
        Players: {
          ":id": {
            Account: {
              /**
               *
               * 63cef97ced0619f458cfac8f
               *
               */
              id: string;
            };
            /**
             *
             *
             *
             */
            BotSettingSlug: string;
            /**
             *
             * 1
             *
             */
            CrossplayPreference: number;
            /**
             *
             * 2025-03-10T15:48:45.000Z
             *
             * 2025-03-10T16:04:50.000Z
             *
             * 2025-03-10T16:05:55.000Z
             *
             * 2025-03-10T16:06:03.000Z
             *
             * 2025-03-10T16:06:10.000Z
             *
             * 2025-03-10T16:06:39.000Z
             *
             * 2025-03-10T16:08:11.000Z
             *
             */
            JoinedAt: string;
            /**
             *
             * 0
             *
             */
            LobbyPlayerIndex: number;
          };
        };
        /**
         *
         * 0
         *
         */
        TeamIndex: number;
      }[];
      Handicaps: {};
      Maps: {
        IsSelected: boolean;
        /**
         *
         * M000_V1_NEW
         *
         * M000_V2_NEW
         *
         */
        Map: string;
      }[];
      match_config: {
        AllowDuplicateCharacters: boolean;
        AllowHazards: boolean;
        AreRewardsSkipped: boolean;
        /**
         *
         * Custom
         *
         */
        Context: string;
        /**
         *
         * 1
         *
         */
        EnableShields: number;
        /**
         *
         * Versus
         *
         */
        GameModeAlias: string;
        /**
         *
         * 420
         *
         * 300
         *
         */
        MatchDuration: number;
        /**
         *
         * Unselected
         *
         */
        ModeDifficulty: string;
        /**
         *
         * 4
         *
         * 2
         *
         * 3
         *
         */
        NumRingoutsForWin: number;
        /**
         *
         * Unselected
         *
         */
        QueueType: string;
        /**
         *
         * Duos
         *
         * Solos
         *
         */
        TeamStyle: string;
        /**
         *
         * 1
         *
         */
        num_set_wins_required: number;
      };
      /**
       *
       * 67cf0da2d0f5dd3b4bed6d4b
       *
       */
      MatchID: string;
      /**
       *
       * gm_classic_1v1
       *
       */
      GameModeSlug: string;
      WorldBuffs: string[];
    };
    shortcode: {};
    /**
     *
     * open
     *
     */
    state: string;
    template: {
      /**
       *
       * 2024-05-01T18:23:26.000Z
       *
       * 2022-02-16T23:31:23.000Z
       *
       */
      created_at: string;
      data: {};
      game_server_config: {};
      game_server_integration_enabled: boolean;
      /**
       *
       * 6632889e358a2a62107ca7fb
       *
       * 620d894be6bbaf409686b720
       *
       */
      id: string;
      /**
       *
       * 2
       *
       * 8
       *
       */
      max_players: number;
      /**
       *
       * 2
       *
       * 1
       *
       */
      min_players: number;
      /**
       *
       * party_lobby
       *
       * custom_game_lobby
       *
       */
      name: string;
      /**
       *
       * party_lobby
       *
       * custom_game_lobby
       *
       */
      slug: string;
      /**
       *
       * async
       *
       */
      type: string;
      /**
       *
       * 2024-10-15T18:00:09.000Z
       *
       */
      updated_at: string;
    };
    /**
     *
     * 2025-03-10T15:48:45.000Z
     *
     * 2025-03-10T16:04:50.000Z
     *
     * 2025-03-10T16:05:06.000Z
     *
     * 2025-03-10T16:05:11.000Z
     *
     * 2025-03-10T16:05:13.000Z
     *
     * 2025-03-10T16:05:55.000Z
     *
     * 2025-03-10T16:06:09.000Z
     *
     * 2025-03-10T16:06:11.000Z
     *
     * 2025-03-10T16:06:44.000Z
     *
     * 2025-03-10T16:08:12.000Z
     *
     */
    updated_at: string;
    win: any[];
    winning_team: any[];
  }

  export interface Matches_all_id_RESPONSE {
    /**
     *
     * 1
     *
     */
    current_page: number;
    matches: {
      /**
       *
       * private
       *
       * public
       *
       */
      access: string;
      /**
       *
       * private
       *
       * public
       *
       */
      access_level: string;
      account_id: {};
      arbitration: {
        conflict_resolved: boolean;
        /**
         *
         * 2025-03-10T15:59:14.000Z
         *
         * 2025-03-10T16:04:10.000Z
         *
         * 2025-03-10T16:08:04.000Z
         *
         */
        end_time: string;
        /**
         *
         * 2025-03-10T15:59:02.000Z
         *
         * 2025-03-10T16:03:58.000Z
         *
         * 2025-03-10T16:07:52.000Z
         *
         */
        start_time: string;
      };
      /**
       *
       * ec2-us-east-1-dokken
       *
       */
      cluster: string;
      /**
       *
       * 2025-03-10T15:59:02.000Z
       *
       * 2025-03-10T16:03:58.000Z
       *
       * 2025-03-10T16:07:52.000Z
       *
       */
      completion_time: string;
      /**
       *
       * 2025-03-10T15:57:17.000Z
       *
       * 2025-03-10T15:59:58.000Z
       *
       * 2025-03-10T16:07:12.000Z
       *
       */
      created_at: string;
      criteria: {
        /**
         *
         * 1v1-retail
         *
         */
        slug: string;
      };
      draw: boolean;
      game_server_instance: {
        allocations_last_updated: {};
        /**
         *
         * 0
         *
         */
        available_allocations: number;
        /**
         *
         * multiplay
         *
         */
        backend: string;
        backend_data: {
          /**
           *
           * 72331434
           *
           * 72690414
           *
           * 72331362
           *
           */
          server_id: number;
          /**
           *
           * dfaee10a-73cd-4c40-b22f-2f26a031a4c3
           *
           * 2cb6c4ab-3dbf-43a3-9a3d-134dbeca65de
           *
           * 193cea9d-8eb2-4ea5-a012-4bace610cc91
           *
           */
          uuid: string;
        };
        /**
         *
         * 2025-03-10T15:57:17.000Z
         *
         * 2025-03-10T15:59:58.000Z
         *
         * 2025-03-10T16:07:12.000Z
         *
         */
        created_at: string;
        error: {};
        /**
         *
         * multiplay
         *
         */
        game_server_type_slug: string;
        /**
         *
         * 67cf0bdd38150fa35c03b5b0
         *
         * 67cf0c7ec51aaceb6778d2ca
         *
         * 67cf0e30410383470e2dd0e2
         *
         */
        id: string;
        launch_config: {
          /**
           *
           * 6edd4138-20ef-11ec-a2b7-4a5119a45304
           *
           */
          fleet_id: string;
          /**
           *
           * 1252922
           *
           */
          profile_id: string;
          /**
           *
           * 19bf18ce-f21f-11ea-b94f-f946c68d5a4f
           *
           * 657d35f8-ca5e-11ec-85a7-b6a275757dc0
           *
           */
          region_id: string;
        };
        optional_launch_config_params: {};
        owner: {};
        /**
         *
         * 67cf0bdd38150fa35c03b5af
         *
         * 67cf0c7ec51aaceb6778d2c9
         *
         * 67cf0e30410383470e2dd0e1
         *
         */
        owner_id: string;
        /**
         *
         * match
         *
         */
        owner_model: string;
        server_query: {};
        server_scaling_enabled: boolean;
        /**
         *
         * STOPPING
         *
         */
        state: string;
        /**
         *
         * 2025-03-10T15:59:02.000Z
         *
         * 2025-03-10T16:03:58.000Z
         *
         * 2025-03-10T16:07:52.000Z
         *
         */
        state_updated_at: string;
        unique_key: {};
        /**
         *
         * 2025-03-10T15:59:02.000Z
         *
         * 2025-03-10T16:03:58.000Z
         *
         * 2025-03-10T16:07:52.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 67cf0bdd38150fa35c03b5af
       *
       * 67cf0c7ec51aaceb6778d2c9
       *
       * 67cf0e30410383470e2dd0e1
       *
       */
      id: string;
      last_warning_time: {};
      loss: string[];
      matchmaking: {};
      /**
       *
       * clever-still-pine-waterfall-OBlKl
       *
       * black-long-firefly-surf-HW7a9
       *
       * dawn-old-sky-frost-H9WiQ
       *
       */
      name: string;
      /**
       *
       * matchmaking_service
       *
       * client
       *
       */
      origin: string;
      players: {
        all: {
          /**
           *
           * 62e08656b9ba90def747be62
           *
           * 63cef97ced0619f458cfac8f
           *
           * 62e95383b488ee2289aef406
           *
           */
          account_id: string;
          data: {
            BuffSnapshot: {};
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
                   * 44.11666488647461
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
                 * 22.01909828186035
                 *
                 * 22.474082946777344
                 *
                 * 21.008447647094727
                 *
                 */
                BytesRecvPerFrame: number;
                /**
                 *
                 * 25.974266052246094
                 *
                 * 26.993146896362305
                 *
                 * 23.987329483032227
                 *
                 */
                BytesSendPerFrame: number;
                /**
                 *
                 * 0.43985140323638916
                 *
                 * 0.4438442587852478
                 *
                 * 0.3559798300266266
                 *
                 */
                CompressionRecvRatio: number;
                /**
                 *
                 * 139477
                 *
                 * 349337
                 *
                 * 35993
                 *
                 */
                CompressionRecvReduction: number;
                /**
                 *
                 * 0.6130005717277527
                 *
                 * 0.6134199500083923
                 *
                 * 0.503792405128479
                 *
                 */
                CompressionSendRatio: number;
                /**
                 *
                 * 81564
                 *
                 * 211024
                 *
                 * 22374
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
                 * 0.07412660121917725
                 *
                 * 0.03517819941043854
                 *
                 * 0.15968729555606842
                 *
                 */
                LargeDeltaTickAverage: number;
                /**
                 *
                 * 12
                 *
                 * 1
                 *
                 * 4
                 *
                 */
                LargeDeltaTickCount: number;
                /**
                 *
                 * 0.4000000059604645
                 *
                 * 0.03517819941043854
                 *
                 */
                LargeDeltaTickMax: number;
                /**
                 *
                 * 0.033448100090026855
                 *
                 * 0.03517819941043854
                 *
                 * 0.037894200533628464
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
                 * 20.91506576538086
                 *
                 * 28.427947998046875
                 *
                 * 39.1526985168457
                 *
                 */
                PingAverage: number;
                /**
                 *
                 * 20
                 *
                 * 28
                 *
                 * 39
                 *
                 */
                PingFinal: number;
                /**
                 *
                 * 29
                 *
                 * 36
                 *
                 * 40
                 *
                 */
                PingMax: number;
                /**
                 *
                 * 20
                 *
                 * 26
                 *
                 * 39
                 *
                 */
                PingMin: number;
                /**
                 *
                 * 0.09723613411188126
                 *
                 * 0.005257213953882456
                 *
                 * 0.5779427289962769
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
                 * 23
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
                 * 1.0838710069656372
                 *
                 * 1.565183401107788
                 *
                 * 1.4736841917037964
                 *
                 */
                RollbackFramesAverage: number;
                /**
                 *
                 * 1
                 *
                 * 2
                 *
                 */
                RollbackFramesFinal: number;
                /**
                 *
                 * 2
                 *
                 * 4
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
                 * 1.0838710069656372
                 *
                 * 1.565183401107788
                 *
                 * 1.4736841917037964
                 *
                 */
                RollbackFreqAverage: number;
                /**
                 *
                 * 1
                 *
                 * 2
                 *
                 */
                RollbackFreqFinal: number;
                /**
                 *
                 * 365
                 *
                 * 401
                 *
                 * 366
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
          };
          identity: {
            alternate: {
              steam: {
                /**
                 *
                 * https://avatars.steamstatic.com/6a2bc613bd15976439dbe8a00b7cb33ea0b8573a.jpg
                 *
                 * https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg
                 *
                 * https://avatars.steamstatic.com/c9180f93ac892fa7d078f5946239d049e987e3b6.jpg
                 *
                 */
                avatar: string;
                email: {};
                /**
                 *
                 * 76561194048197267
                 *
                 * 76561195177950873
                 *
                 * 76561193733398795
                 *
                 */
                id: string;
                /**
                 *
                 * Jrock
                 *
                 * multiversuskoth
                 *
                 * doubleaa93
                 *
                 */
                username: string;
              }[];
              twitch: {
                avatar: {};
                email: {};
                /**
                 *
                 * 149380061
                 *
                 * 516748802
                 *
                 */
                id: string;
                /**
                 *
                 * jrockthingg
                 *
                 * aescudero93
                 *
                 */
                username: string;
              }[];
              wb_network: {
                avatar: {};
                email: {};
                /**
                 *
                 * pd66ee1d7ae41466e85585b3ab99d6246
                 *
                 * pafd8d7950aa1484ea791d06662fa75ce
                 *
                 * p35700613b42848e1ad34cd226e1cab4d
                 *
                 */
                id: string;
                /**
                 *
                 * Jrockthing
                 *
                 * MultiVersusKOTH
                 *
                 * Dre93
                 *
                 */
                username: string;
              }[];
            };
            /**
             *
             * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.229.png
             *
             * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.584.png
             *
             * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.397.png
             *
             */
            avatar: string;
            /**
             *
             * steam
             *
             */
            current_platform: string;
            default_username: boolean;
            is_cross_platform: boolean;
            personal_data: {};
            platforms: string[];
            /**
             *
             * wild-patient-frost-water-VkcLI
             *
             * dark-wild-grass-voice-yRPU2
             *
             * lively-holy-haze-paper-5Jror
             *
             */
            username: string;
            usernames: {
              /**
               *
               * hydra
               *
               */
              auth: string;
              /**
               *
               * wild-patient-frost-water-vkcli
               *
               * dark-wild-grass-voice-yrpu2
               *
               * lively-holy-haze-paper-5jror
               *
               */
              username: string;
            }[];
          };
          reported_results: {
            draw: boolean;
            loss: string[];
            /**
             *
             * 2025-03-10T15:59:02.000Z
             *
             * 2025-03-10T16:03:58.000Z
             *
             * 2025-03-10T16:07:52.000Z
             *
             */
            report_time: string;
            win: string[];
          };
          source: {
            extra: {
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
                allowed_buckets: string[];
                allowed_buckets_relaxed: string[];
                crossplay_buckets: string[];
                /**
                 *
                 * character_bugs_bunny
                 *
                 * character_c16
                 *
                 */
                double_character_key: string;
                /**
                 *
                 * 358.5655703949377
                 *
                 * 313.5974216770194
                 *
                 */
                matchmaking_rating: number;
                /**
                 *
                 * 1
                 *
                 */
                player_count: number;
                /**
                 *
                 * 0
                 *
                 */
                rp: number;
                /**
                 *
                 * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
                 *
                 */
                version: string;
              };
              /**
               *
               * 67cef2d4894a4f7e83aff121
               *
               * 67cf09dd07f3143f5fe732d1
               *
               */
              from_match: string;
            };
            /**
             *
             * 67cf0bdd38150fa35c03b5ae
             *
             * 67cf0c7dc51aaceb6778d2c8
             *
             * 67cf0da2d0f5dd3b4bed6d4b
             *
             */
            id: string;
            /**
             *
             * matchmaking-fixed
             *
             * match
             *
             */
            type: string;
          };
          /**
           *
           * leave
           *
           */
          state: string;
          state_data: {};
        }[];
        completed: string[];
        /**
         *
         * 0
         *
         */
        count: number;
        current: any[];
      };
      /**
       *
       * 0.5501138651610269
       *
       * 0.5938617369147827
       *
       * 0.8180177700132258
       *
       */
      rand: number;
      server_data: {
        ClientSubmittedMatchLength: {
          /**
           *
           * 76
           *
           * 200
           *
           * 9
           *
           */
          ":id": number;
        };
        GameplayConfig: {
          ArenaModeInfo: {};
          /**
           *
           *
           *
           */
          Cluster: string;
          /**
           *
           * CountdownTypes:XvY
           *
           */
          CountdownDisplay: string;
          /**
           *
           * 2025-03-10T15:57:18.000Z
           *
           * 2025-03-10T15:59:59.000Z
           *
           * 2025-03-10T16:07:11.000Z
           *
           */
          Created: string;
          CustomGameSettings: {
            /**
             *
             * 420
             *
             * 300
             *
             */
            MatchTime: number;
            /**
             *
             * 3
             *
             */
            NumRingouts: number;
            bHazardsEnabled: boolean;
            bShieldsEnabled: boolean;
          };
          /**
           *
           *
           *
           */
          EventQueueSlug: string;
          HudSettings: {
            bDisplayPortraits: boolean;
            bDisplayStocks: boolean;
            bDisplayTimer: boolean;
          };
          /**
           *
           * M002_V2
           *
           * M012_V2
           *
           * M001_V2
           *
           */
          Map: string;
          /**
           *
           * 420
           *
           * 300
           *
           */
          MatchDurationSeconds: number;
          /**
           *
           * 67cf0bdd38150fa35c03b5af
           *
           * 67cf0c7ec51aaceb6778d2c9
           *
           *
           *
           */
          MatchId: string;
          /**
           *
           * 1v1
           *
           * gm_classic_1v1
           *
           */
          ModeString: string;
          Players: {
            ":id": {
              /**
               *
               * 63cef97ced0619f458cfac8f
               *
               * 62e30b98ac7c96be475ce760
               *
               * 62e95383b488ee2289aef406
               *
               */
              AccountId: string;
              /**
               *
               * banner_foretold_champion_rare
               *
               * banner_default
               *
               * banner_foretold_champion_legendary
               *
               */
              Banner: string;
              /**
               *
               *
               *
               */
              BotBehaviorOverride: string;
              /**
               *
               * 0
               *
               */
              BotDifficultyMax: number;
              /**
               *
               * 0
               *
               */
              BotDifficultyMin: number;
              Buffs: any[];
              /**
               *
               * character_Jason
               *
               * character_velma
               *
               * character_C028
               *
               */
              Character: string;
              /**
               *
               * 544
               *
               * 964
               *
               */
              GameplayPreferences: number;
              Gems: any[];
              /**
               *
               * 0
               *
               */
              Handicap: number;
              /**
               *
               * 67cf09dd07f3143f5fe732d1
               *
               * 67cf05997ffc4022640488d8
               *
               */
              PartyId: string;
              PartyMember: {};
              Perks: string[];
              /**
               *
               * 1
               *
               */
              PlayerIndex: number;
              /**
               *
               *
               *
               */
              ProfileIcon: string;
              RankedDivision: {};
              RankedTier: {};
              /**
               *
               * ring_out_vfx_default
               *
               * ring_out_vfx_green_lantern_finish
               *
               */
              RingoutVfx: string;
              /**
               *
               * skin_c035_s25
               *
               * skin_velma_default
               *
               * skin_c028_default
               *
               */
              Skin: string;
              /**
               *
               * 0
               *
               */
              StartingDamage: number;
              StatTrackers: string[][];
              Taunts: string[];
              /**
               *
               * 1
               *
               */
              TeamIndex: number;
              Username: {};
              WinStreak: {};
              bAutoPartyPreference: boolean;
              bIsBot: boolean;
              bUseCharacterDisplayName: boolean;
            };
          };
          /**
           *
           * Attunements:None
           *
           */
          RiftNodeAttunement: string;
          /**
           *
           *
           *
           */
          RiftNodeId: string;
          /**
           *
           * AttributeToAttacker
           *
           */
          ScoreAttributionRule: string;
          /**
           *
           * TargetScoreIsWin
           *
           */
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
        /**
         *
         * 1167552915
         *
         */
        HissCrc: number;
        QosData: {
          ClientStats: {
            /**
             *
             * 63cef97ced0619f458cfac8f
             *
             */
            AccountId: string;
            /**
             *
             * 0
             *
             */
            NumPredictedOverrides: number;
            /**
             *
             * 0
             *
             */
            NumZeroedOverrides: number;
            /**
             *
             * 0
             *
             */
            PacketLoss: number;
            /**
             *
             * 17
             *
             * 28
             *
             */
            PingMs: number;
            /**
             *
             * 1
             *
             * 0
             *
             */
            PlayerIndex: number;
          }[];
          GameFinished: boolean;
          /**
           *
           * 4978
           *
           * 12409
           *
           * 951
           *
           */
          LastFrameId: number;
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
        SscMatchDurationSeconds: number;
        SubmittedMatchStats: {
          ":id": boolean;
        };
        /**
         *
         * 2
         *
         * 3
         *
         */
        Version: number;
        bGameplayEnded: boolean;
        bGameplayStarted: boolean;
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
        /**
         *
         * gm_classic_1v1
         *
         */
        GameModeSlug: string;
        /**
         *
         * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
         *
         */
        GameVersion: string;
        Handicaps: {};
        IsLobbyJoinable: boolean;
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        LeaderID: string;
        /**
         *
         * 0
         *
         */
        LobbyType: number;
        LockedLoadouts: {
          ":id": {
            /**
             *
             * character_C028
             *
             */
            Character: string;
            /**
             *
             * skin_c028_default
             *
             */
            Skin: string;
          };
        };
        Maps: {
          IsSelected: boolean;
          /**
           *
           * M000_V2_NEW
           *
           */
          Map: string;
        }[];
        /**
         *
         * 67cf0da2d0f5dd3b4bed6d4b
         *
         */
        MatchID: string;
        Platforms: {
          /**
           *
           * PC
           *
           */
          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {
          /**
           *
           * 964
           *
           */
          ":id": number;
        };
        ReadyPlayers: {
          ":id": boolean;
        };
        Teams: {
          /**
           *
           * 1
           *
           */
          Length: number;
          Players: {
            ":id": {
              Account: {
                /**
                 *
                 * 63cef97ced0619f458cfac8f
                 *
                 */
                id: string;
              };
              /**
               *
               *
               *
               */
              BotSettingSlug: string;
              /**
               *
               * 1
               *
               */
              CrossplayPreference: number;
              /**
               *
               * 2025-03-10T16:06:39.000Z
               *
               */
              JoinedAt: string;
              /**
               *
               * 0
               *
               */
              LobbyPlayerIndex: number;
            };
          };
          /**
           *
           * 0
           *
           */
          TeamIndex: number;
        }[];
        WorldBuffs: string[];
        match_config: {
          AllowDuplicateCharacters: boolean;
          AllowHazards: boolean;
          AreRewardsSkipped: boolean;
          /**
           *
           * Custom
           *
           */
          Context: string;
          /**
           *
           * 1
           *
           */
          EnableShields: number;
          /**
           *
           * Versus
           *
           */
          GameModeAlias: string;
          /**
           *
           * 300
           *
           */
          MatchDuration: number;
          /**
           *
           * Unselected
           *
           */
          ModeDifficulty: string;
          /**
           *
           * 3
           *
           */
          NumRingoutsForWin: number;
          /**
           *
           * Unselected
           *
           */
          QueueType: string;
          /**
           *
           * Solos
           *
           */
          TeamStyle: string;
          /**
           *
           * 1
           *
           */
          num_set_wins_required: number;
        };
      };
      shortcode: {};
      /**
       *
       * complete
       *
       */
      state: string;
      template: {
        /**
         *
         * 2022-02-16T23:31:23.000Z
         *
         * 2024-05-01T18:23:29.000Z
         *
         */
        created_at: string;
        data: {
          /**
           *
           * 1v1
           *
           */
          mode: string;
        };
        game_server_config: {
          /**
           *
           * SMALLEST_MAX_LATENCY
           *
           */
          game_server_region_priority: string;
          /**
           *
           * multiplay
           *
           */
          game_server_type_slug: string;
          require_player_region_data: boolean;
        };
        game_server_integration_enabled: boolean;
        /**
         *
         * 620d894be6bbaf409686b71b
         *
         * 663288a1358a2a62107ca7ff
         *
         */
        id: string;
        /**
         *
         * 2
         *
         * 6
         *
         */
        max_players: number;
        /**
         *
         * 2
         *
         */
        min_players: number;
        /**
         *
         * 1v1_Container
         *
         * Custom Container Two Player
         *
         */
        name: string;
        /**
         *
         * 1v1_container
         *
         * custom_container_two_player
         *
         */
        slug: string;
        /**
         *
         * async
         *
         */
        type: string;
        /**
         *
         * 2024-11-14T05:04:59.000Z
         *
         */
        updated_at: string;
      };
      /**
       *
       * 2025-03-10T15:59:05.000Z
       *
       * 2025-03-10T16:04:00.000Z
       *
       * 2025-03-10T16:07:53.000Z
       *
       */
      updated_at: string;
      win: string[];
      winning_team: any[];
    }[];
    /**
     *
     * 192
     *
     * 193
     *
     * 194
     *
     */
    total_matches: number;
    /**
     *
     * 20
     *
     */
    total_pages: number;
  }

  export interface Matches_matchmaking_1v1_retail_request_RESPONSE {
    /**
     *
     * ec2-us-east-1-dokken
     *
     */
    cluster: string;
    /**
     *
     * 61ff285f-87df-4511-bf59-82d80feb976f
     *
     * f3e2eee6-b2d9-4abd-b496-22531d28ac36
     *
     */
    concurrent_identifier: string;
    /**
     *
     * 2025-03-10T15:57:16.000Z
     *
     * 2025-03-10T15:59:30.000Z
     *
     */
    created_at: string;
    /**
     *
     * 1v1-retail
     *
     */
    criteria_slug: string;
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
      allowed_buckets: string[];
      allowed_buckets_relaxed: string[];
      crossplay_buckets: string[];
      /**
       *
       * character_Jason
       *
       * character_c16
       *
       */
      double_character_key: string;
      /**
       *
       * 230.35689975020347
       *
       * 313.5974216770194
       *
       */
      matchmaking_rating: number;
      /**
       *
       * 1
       *
       */
      player_count: number;
      /**
       *
       * 0
       *
       */
      rp: number;
      /**
       *
       * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
       *
       */
      version: string;
    };
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    from_match: string;
    game_server: {
      /**
       *
       * multiplay
       *
       */
      backend: string;
      launch_configs: {
        /**
         *
         * multiplay
         *
         */
        backend: string;
        /**
         *
         * 6edd4138-20ef-11ec-a2b7-4a5119a45304
         *
         */
        fleet_id: string;
        /**
         *
         * 1252922
         *
         */
        profile_id: string;
        /**
         *
         * 19c714ff-f21f-11ea-b144-4d87911ee195
         *
         */
        region_id: string;
      }[];
      optional_launch_config_params: {};
      unique_key: {};
    };
    groups: number[];
    /**
     *
     * 67cf0bdcc5ca3fc62404cfdb
     *
     * 67cf0c62f5b4c560422b6e3a
     *
     */
    id: string;
    is_concurrent: boolean;
    party_id: {};
    player_connections: {
      ":id": string[];
    };
    players: {
      ":id": {
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        account_id: string;
        aggregates: {};
        calculations: {};
        created_at: {};
        cross_match_results: {};
        data: {};
        files: any[];
        /**
         *
         * 63cef97ced0619f458cfac90
         *
         */
        id: string;
        inventory: {};
        last_inbox_read: {};
        last_login: {};
        matches: {};
        notifications: {};
        points: {};
        private_data: {};
        random_distribution: {};
        server_data: {};
        server_owner_data: {};
        updated_at: {};
        user_segments: any[];
      };
    };
    players_connection_info: {
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
    recently_played: {
      ":id": any[];
    };
    relationships: any[];
    /**
     *
     * 63cef97ced0619f458cfac8f
     *
     */
    requester_account_id: string;
    reuse_match: boolean;
    server_data: {};
    server_submitted: boolean;
    /**
     *
     * 2
     *
     */
    state: number;
    /**
     *
     * 2025-03-10T15:57:16.000Z
     *
     * 2025-03-10T15:59:30.000Z
     *
     */
    updated_at: string;
    user_rule_config: any[];
  }

  export interface Matches_matchmaking_ranked_1v1_retail_request_RESPONSE {
    /**
     *
     * ec2-us-east-1-dokken
     *
     */
    cluster: string;
    /**
     *
     * 8f4a441e-266e-489f-b459-d7316b2c6730
     *
     */
    concurrent_identifier: string;
    /**
     *
     * 2025-03-10T16:04:28.000Z
     *
     */
    created_at: string;
    /**
     *
     * ranked-1v1-retail
     *
     */
    criteria_slug: string;
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
      allowed_buckets: string[];
      allowed_buckets_relaxed: string[];
      crossplay_buckets: string[];
      /**
       *
       * character_Jason
       *
       */
      double_character_key: string;
      /**
       *
       * 958.1709305161428
       *
       */
      matchmaking_rating: number;
      /**
       *
       * 1
       *
       */
      player_count: number;
      /**
       *
       * 2137
       *
       */
      rp: number;
      /**
       *
       * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
       *
       */
      version: string;
    };
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    from_match: string;
    game_server: {
      /**
       *
       * multiplay
       *
       */
      backend: string;
      launch_configs: {
        /**
         *
         * multiplay
         *
         */
        backend: string;
        /**
         *
         * 6edd4138-20ef-11ec-a2b7-4a5119a45304
         *
         */
        fleet_id: string;
        /**
         *
         * 1252922
         *
         */
        profile_id: string;
        /**
         *
         * 19c714ff-f21f-11ea-b144-4d87911ee195
         *
         */
        region_id: string;
      }[];
      optional_launch_config_params: {};
      unique_key: {};
    };
    groups: number[];
    /**
     *
     * 67cf0d8cb3bc7e895e20dd3f
     *
     */
    id: string;
    is_concurrent: boolean;
    party_id: {};
    player_connections: {
      ":id": string[];
    };
    players: {
      ":id": {
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        account_id: string;
        aggregates: {};
        calculations: {};
        created_at: {};
        cross_match_results: {};
        data: {};
        files: any[];
        /**
         *
         * 63cef97ced0619f458cfac90
         *
         */
        id: string;
        inventory: {};
        last_inbox_read: {};
        last_login: {};
        matches: {};
        notifications: {};
        points: {};
        private_data: {};
        random_distribution: {};
        server_data: {};
        server_owner_data: {};
        updated_at: {};
        user_segments: any[];
      };
    };
    players_connection_info: {
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
    recently_played: {
      ":id": {
        /**
         *
         * 62e30b98ac7c96be475ce760
         *
         */
        account_id: string;
      }[];
    };
    relationships: any[];
    /**
     *
     * 63cef97ced0619f458cfac8f
     *
     */
    requester_account_id: string;
    reuse_match: boolean;
    server_data: {};
    server_submitted: boolean;
    /**
     *
     * 2
     *
     */
    state: number;
    /**
     *
     * 2025-03-10T16:04:28.000Z
     *
     */
    updated_at: string;
    user_rule_config: any[];
  }

  export interface Matches_matchmaking_request_id_cancel_RESPONSE {
    /**
     *
     * ec2-us-east-1-dokken
     *
     */
    cluster: string;
    /**
     *
     * 8f4a441e-266e-489f-b459-d7316b2c6730
     *
     */
    concurrent_identifier: string;
    /**
     *
     * 2025-03-10T16:04:28.000Z
     *
     */
    created_at: string;
    /**
     *
     * ranked-1v1-retail
     *
     */
    criteria_slug: string;
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
      allowed_buckets: string[];
      allowed_buckets_relaxed: string[];
      crossplay_buckets: string[];
      /**
       *
       * character_Jason
       *
       */
      double_character_key: string;
      /**
       *
       * 958.1709305161428
       *
       */
      matchmaking_rating: number;
      /**
       *
       * 1
       *
       */
      player_count: number;
      /**
       *
       * 2137
       *
       */
      rp: number;
      /**
       *
       * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
       *
       */
      version: string;
    };
    /**
     *
     * 67cf09dd07f3143f5fe732d1
     *
     */
    from_match: string;
    game_server: {
      /**
       *
       * multiplay
       *
       */
      backend: string;
      launch_configs: {
        /**
         *
         * multiplay
         *
         */
        backend: string;
        /**
         *
         * 6edd4138-20ef-11ec-a2b7-4a5119a45304
         *
         */
        fleet_id: string;
        /**
         *
         * 1252922
         *
         */
        profile_id: string;
        /**
         *
         * 19c714ff-f21f-11ea-b144-4d87911ee195
         *
         */
        region_id: string;
      }[];
      optional_launch_config_params: {};
      unique_key: {};
    };
    groups: number[];
    /**
     *
     * 67cf0d8cb3bc7e895e20dd3f
     *
     */
    id: string;
    is_concurrent: boolean;
    party_id: {};
    player_connections: {
      ":id": string[];
    };
    players: {
      ":id": {
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        account_id: string;
        aggregates: {};
        calculations: {};
        created_at: {};
        cross_match_results: {};
        data: {};
        files: any[];
        /**
         *
         * 63cef97ced0619f458cfac90
         *
         */
        id: string;
        inventory: {};
        last_inbox_read: {};
        last_login: {};
        matches: {};
        notifications: {};
        points: {};
        private_data: {};
        random_distribution: {};
        server_data: {};
        server_owner_data: {};
        updated_at: {};
        user_segments: any[];
      };
    };
    players_connection_info: {
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
    recently_played: {
      ":id": {
        /**
         *
         * 62e30b98ac7c96be475ce760
         *
         */
        account_id: string;
      }[];
    };
    relationships: any[];
    /**
     *
     * 63cef97ced0619f458cfac8f
     *
     */
    requester_account_id: string;
    reuse_match: boolean;
    server_data: {};
    server_submitted: boolean;
    /**
     *
     * 3
     *
     */
    state: number;
    /**
     *
     * 2025-03-10T16:04:48.000Z
     *
     */
    updated_at: string;
    user_rule_config: any[];
  }

  export interface Profiles_id_inventory_RESPONSE {
    /**
     *
     * 63cef97ced0619f458cfac8f
     *
     */
    account_id: string;
    /**
     *
     * 460
     *
     */
    count: number;
    /**
     *
     * 2024-07-26T06:32:05.000Z
     *
     */
    created_at: string;
    currency_sources: {
      expires_at: {};
      purchase_id: {};
      should_expire: boolean;
      /**
       *
       * psn
       *
       */
      source_platform: string;
      /**
       *
       * earned
       *
       */
      source_slug: string;
      /**
       *
       * 200
       *
       */
      total_earned: number;
      /**
       *
       * 0
       *
       */
      total_refunded: number;
      /**
       *
       * 0
       *
       */
      total_spent: number;
    }[];
    data: {};
    /**
     *
     * gleamium
     *
     */
    item_slug: string;
    /**
     *
     * simple
     *
     */
    result_type: string;
    server_data: {};
    /**
     *
     * 2025-03-05T02:51:50.000Z
     *
     */
    updated_at: string;
  }

  export interface Profiles_bulk_RESPONSE {
    account: {
      connections: any[];
      /**
       *
       * 2022-08-03T14:39:21.000Z
       *
       * 2022-07-22T19:52:34.000Z
       *
       * 2022-07-27T09:57:51.000Z
       *
       * 2022-08-01T18:34:15.000Z
       *
       * 2022-07-28T04:18:48.000Z
       *
       * 2022-07-27T00:27:02.000Z
       *
       * 2022-07-28T22:20:08.000Z
       *
       * 2022-08-02T16:40:35.000Z
       *
       */
      created_at: string;
      /**
       *
       * 1659537643
       *
       * 1658519555
       *
       * 1659022336
       *
       * 1659378914
       *
       * 1658982097
       *
       * 1658881661
       *
       * 1659047143
       *
       * 1659458474
       *
       */
      "data.EULAAcceptTimestamp": number;
      /**
       *
       * 5
       *
       * 2
       *
       */
      "data.EULAAcceptVersion": number;
      /**
       *
       * EPlatform::PS4
       *
       * EPlatform::XBoxOneX
       *
       * EPlatform::PC
       *
       * EPlatform::XBoxOne
       *
       */
      "data.LastLoginPlatform": string;
      /**
       *
       * character_batman
       *
       * character_C017
       *
       * character_superman
       *
       * character_tom_and_jerry
       *
       * character_garnet
       *
       * character_jake
       *
       * character_c16
       *
       */
      "data.LastPlayedCharacterSlug": string;
      deleted: boolean;
      /**
       *
       * 62ea8899706c79b6eca58d2f
       *
       * 62db00026ba0a58e5a2c926e
       *
       * 62e10c1f5aa13c213eafc03a
       *
       * 62e81ca70cbbc05057a6b2bc
       *
       * 62e20e28bb9273ffc9734372
       *
       * 62e08656b9ba90def747be62
       *
       * 62e30b98ac7c96be475ce760
       *
       * 62e95383b488ee2289aef406
       *
       */
      id: string;
      "identity.alternate.ps4": {
        avatar: {};
        /**
         *
         * F22bomber
         *
         * GARLIC__WARRIOR
         *
         */
        username: string;
      }[];
      "identity.alternate.wb_network": {
        avatar: {};
        /**
         *
         * p39b6ef94a0ad40e29ed342f99f40e2db
         *
         * pcca8cdeead8642d98b3b1faf557848a1
         *
         * pa1341f67a0d04e24b681f8ea795ac6b3
         *
         * p1dc63ab8dd394cf3a8e080da79699f39
         *
         * pabf32f21f0404fd2b4133f399167db30
         *
         * pd66ee1d7ae41466e85585b3ab99d6246
         *
         * p22271c79c809492ca4e49c642ea97fc6
         *
         * p35700613b42848e1ad34cd226e1cab4d
         *
         */
        id: string;
        /**
         *
         * F22bomber
         *
         * eimiklo
         *
         * TickIeToe420
         *
         * redjoey7
         *
         * Garlicwarrior
         *
         * Jrockthing
         *
         * Powerranger9871
         *
         * Dre93
         *
         */
        username: string;
      }[];
      /**
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.514.png
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.431.png
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.050.png
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.350.png
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.137.png
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.229.png
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.607.png
       *
       * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.397.png
       *
       */
      "identity.avatar": string;
      "identity.default_username": boolean;
      /**
       *
       * holy-damp-bush-morning-jV0yq
       *
       * billowing-dry-water-grass-6LO87
       *
       * white-fragrant-tree-butterfly-ecVHu
       *
       * nameless-little-silence-frost-WiRCe
       *
       * wild-rough-sun-silence-68271
       *
       * wild-patient-frost-water-VkcLI
       *
       * dark-patient-wind-thunder-DiR54
       *
       * lively-holy-haze-paper-5Jror
       *
       */
      "identity.username": string;
      /**
       *
       * en-US
       *
       */
      locale: string;
      orphaned: boolean;
      orphaned_reason: {};
      /**
       *
       * 0
       *
       */
      points: number;
      /**
       *
       * offline
       *
       * online
       *
       */
      presence: string;
      /**
       *
       * 0
       *
       * 1
       *
       */
      presence_state: number;
      /**
       *
       * pd7b1a05092dc4642b9113ffc17aa6f5d
       *
       * p040b8ee0a51e45c0bb7af203e37bcc40
       *
       * p8aef1f21aa7c4bd3b4ea0b0b5dadb747
       *
       * p714981b049764962a5a819900d4d5b9b
       *
       * pf7597dcb46fd4f1e814db04eec7f1f8f
       *
       * pfbfa727c49f342aca1a7b6ca64b8cd5a
       *
       * p03513934f26246c5b7ede4b68dc08622
       *
       * p9830ceb988724a6cbb3f1aaa67e4225f
       *
       */
      public_id: string;
      /**
       *
       * 100
       *
       * 2592
       *
       * 338
       *
       * 0
       *
       * 78
       *
       */
      "server_data.Characters.character_C017.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 23
       *
       * 10
       *
       * 3
       *
       */
      "server_data.Characters.character_C017.Mastery.Level": number;
      /**
       *
       * 2238
       *
       * 652
       *
       * 100
       *
       * 11246
       *
       */
      "server_data.Characters.character_C018.Mastery.CurrentXP": number;
      /**
       *
       * 13
       *
       * 5
       *
       * 2
       *
       * 23
       *
       */
      "server_data.Characters.character_C018.Mastery.Level": number;
      /**
       *
       * 5038
       *
       * 500
       *
       */
      "server_data.Characters.character_C020.Mastery.CurrentXP": number;
      /**
       *
       * 16
       *
       * 9
       *
       */
      "server_data.Characters.character_C020.Mastery.Level": number;
      /**
       *
       * 246
       *
       * 0
       *
       * 300
       *
       * 352
       *
       */
      "server_data.Characters.character_C021.Mastery.CurrentXP": number;
      /**
       *
       * 12
       *
       * 2
       *
       * 5
       *
       */
      "server_data.Characters.character_C021.Mastery.Level": number;
      /**
       *
       * 2
       *
       */
      "server_data.Characters.character_C021.Mastery.Version": number;
      /**
       *
       * 89
       *
       * 0
       *
       */
      "server_data.Characters.character_C023A.Mastery.CurrentXP": number;
      /**
       *
       * 14
       *
       * 2
       *
       */
      "server_data.Characters.character_C023A.Mastery.Level": number;
      /**
       *
       * 828
       *
       * 1452
       *
       * 468
       *
       * 100
       *
       * 2506
       *
       */
      "server_data.Characters.character_C023B.Mastery.CurrentXP": number;
      /**
       *
       * 16
       *
       * 10
       *
       * 6
       *
       * 2
       *
       * 12
       *
       */
      "server_data.Characters.character_C023B.Mastery.Level": number;
      /**
       *
       * 560
       *
       * 100
       *
       * 349
       *
       */
      "server_data.Characters.character_arya.Mastery.CurrentXP": number;
      /**
       *
       * 8
       *
       * 2
       *
       * 14
       *
       */
      "server_data.Characters.character_arya.Mastery.Level": number;
      /**
       *
       * 5875
       *
       * 1284
       *
       * 0
       *
       */
      "server_data.Characters.character_batman.Mastery.CurrentXP": number;
      /**
       *
       * 30
       *
       * 17
       *
       * 2
       *
       */
      "server_data.Characters.character_batman.Mastery.Level": number;
      /**
       *
       * 2429
       *
       * 30
       *
       * 6660
       *
       * 2640
       *
       * 74
       *
       */
      "server_data.Characters.character_bugs_bunny.Mastery.CurrentXP": number;
      /**
       *
       * 15
       *
       * 2
       *
       * 20
       *
       * 7
       *
       */
      "server_data.Characters.character_bugs_bunny.Mastery.Level": number;
      /**
       *
       * 2329
       *
       * 100
       *
       * 2070
       *
       */
      "server_data.Characters.character_c019.Mastery.CurrentXP": number;
      /**
       *
       * 16
       *
       * 2
       *
       * 11
       *
       */
      "server_data.Characters.character_c019.Mastery.Level": number;
      /**
       *
       * 300
       *
       * 226
       *
       * 8928
       *
       * 378
       *
       * 74115
       *
       */
      "server_data.Characters.character_c16.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 10
       *
       * 24
       *
       * 3
       *
       * 36
       *
       */
      "server_data.Characters.character_c16.Mastery.Level": number;
      /**
       *
       * 200
       *
       * 0
       *
       * 89
       *
       */
      "server_data.Characters.character_creature.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 3
       *
       */
      "server_data.Characters.character_creature.Mastery.Level": number;
      /**
       *
       * 0
       *
       * 89
       *
       * 264
       *
       * 34
       *
       * 674
       *
       * 360
       *
       * 100
       *
       * 69
       *
       */
      "server_data.Characters.character_finn.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 3
       *
       * 4
       *
       * 9
       *
       * 8
       *
       * 13
       *
       */
      "server_data.Characters.character_finn.Mastery.Level": number;
      /**
       *
       * 126
       *
       * 100
       *
       * 0
       *
       * 388
       *
       * 4493
       *
       * 193
       *
       */
      "server_data.Characters.character_garnet.Mastery.CurrentXP": number;
      /**
       *
       * 5
       *
       * 2
       *
       * 3
       *
       * 19
       *
       * 11
       *
       */
      "server_data.Characters.character_garnet.Mastery.Level": number;
      /**
       *
       * 324
       *
       * 189
       *
       * 0
       *
       * 26
       *
       */
      "server_data.Characters.character_harleyquinn.Mastery.CurrentXP": number;
      /**
       *
       * 4
       *
       * 3
       *
       * 2
       *
       * 5
       *
       */
      "server_data.Characters.character_harleyquinn.Mastery.Level": number;
      /**
       *
       * 100
       *
       * 0
       *
       * 108
       *
       * 94
       *
       */
      "server_data.Characters.character_jake.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 7
       *
       * 4
       *
       */
      "server_data.Characters.character_jake.Mastery.Level": number;
      /**
       *
       * 0
       *
       * 188
       *
       * 2728
       *
       * 4032
       *
       */
      "server_data.Characters.character_shaggy.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 7
       *
       * 15
       *
       */
      "server_data.Characters.character_shaggy.Mastery.Level": number;
      /**
       *
       * 200
       *
       * 508
       *
       * 160
       *
       * 4909
       *
       * 1178
       *
       */
      "server_data.Characters.character_steven.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 6
       *
       * 14
       *
       * 12
       *
       */
      "server_data.Characters.character_steven.Mastery.Level": number;
      /**
       *
       * 582
       *
       * 983
       *
       * 47282
       *
       * 86
       *
       * 58
       *
       * 382
       *
       * 43
       *
       */
      "server_data.Characters.character_superman.Mastery.CurrentXP": number;
      /**
       *
       * 7
       *
       * 11
       *
       * 31
       *
       * 19
       *
       * 5
       *
       */
      "server_data.Characters.character_superman.Mastery.Level": number;
      /**
       *
       * 400
       *
       * 0
       *
       * 389
       *
       * 30
       *
       */
      "server_data.Characters.character_taz.Mastery.CurrentXP": number;
      /**
       *
       * 2
       *
       * 3
       *
       */
      "server_data.Characters.character_taz.Mastery.Level": number;
      /**
       *
       * 49
       *
       * 4778
       *
       * 514
       *
       * 0
       *
       */
      "server_data.Characters.character_wonder_woman.Mastery.CurrentXP": number;
      /**
       *
       * 3
       *
       * 16
       *
       * 6
       *
       * 2
       *
       */
      "server_data.Characters.character_wonder_woman.Mastery.Level": number;
      /**
       *
       * 40447
       *
       * 5210
       *
       * 24129
       *
       * 233357
       *
       * 14899
       *
       * 4827
       *
       * 516
       *
       * 24298
       *
       */
      "server_data.CurrentXP": number;
      /**
       *
       * 2023-04-06T02:28:09.000Z
       *
       * 2022-08-29T14:19:34.000Z
       *
       * 2023-02-07T18:03:42.000Z
       *
       * 2023-02-19T18:22:29.000Z
       *
       * 2023-06-25T03:23:27.000Z
       *
       * 2023-06-16T02:48:07.000Z
       *
       * 2022-08-24T13:55:10.000Z
       *
       * 2023-06-21T20:01:46.000Z
       *
       */
      "server_data.FirstWinClaimTime": string;
      /**
       *
       * 2025-03-09T12:00:00.000Z
       *
       * 2025-02-18T12:00:00.000Z
       *
       * 2025-03-10T12:00:00.000Z
       *
       */
      "server_data.LastDailyRefresh": string;
      /**
       *
       * 0
       *
       */
      "server_data.LastKnownDebugDelta": number;
      /**
       *
       * PS5
       *
       * XBoxSeriesX
       *
       * PC
       *
       * XBoxOne
       *
       */
      "server_data.LastLoginPlatform": string;
      /**
       *
       * Fri Apr 07 2023 17:09:22 GMT+0000 (Coordinated Universal Time)
       *
       * Sun Sep 11 2022 20:15:57 GMT+0000 (Coordinated Universal Time)
       *
       * Tue Feb 07 2023 12:14:41 GMT+0000 (Coordinated Universal Time)
       *
       * Sun Feb 19 2023 18:11:00 GMT+0000 (Coordinated Universal Time)
       *
       * Sun Jun 25 2023 03:02:51 GMT+0000 (Coordinated Universal Time)
       *
       * Fri Jun 16 2023 02:25:25 GMT+0000 (Coordinated Universal Time)
       *
       * Wed Aug 24 2022 13:43:30 GMT+0000 (Coordinated Universal Time)
       *
       * Wed Jun 21 2023 17:08:47 GMT+0000 (Coordinated Universal Time)
       *
       */
      "server_data.LastLoginTime": string;
      /**
       *
       * 2023-04-01T18:00:40.848Z
       *
       * 2022-09-11T20:24:53.702Z
       *
       * 2023-02-07T18:34:26.856Z
       *
       * 2023-02-19T18:23:06.020Z
       *
       * 2023-06-23T03:34:49.091Z
       *
       * 2023-06-16T02:49:18.402Z
       *
       * 2022-08-24T15:11:53.569Z
       *
       * 2023-06-21T20:02:08.066Z
       *
       */
      "server_data.LastLogoutTime": string;
      /**
       *
       * evt_battlepass_season_five
       *
       */
      "server_data.LastRefreshBattlepassEvent": string;
      /**
       *
       * Season:SeasonFive
       *
       */
      "server_data.LastRefreshSeason": string;
      /**
       *
       * 2025-03-04T12:00:00.000Z
       *
       * 2025-02-18T12:00:00.000Z
       *
       */
      "server_data.LastWeeklyRefresh": string;
      /**
       *
       * 34
       *
       * 25
       *
       * 32
       *
       * 38
       *
       * 27
       *
       * 17
       *
       * 39
       *
       */
      "server_data.Level": number;
      "server_data.OpenBeta": boolean;
      /**
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_DC_BAT_BatLogo_1.ProfileIcon_DC_BAT_BatLogo_1
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_Capstone_IronGiant.ProfileIcon_Capstone_IronGiant
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/20240110_WB_NL_JasonVoorhees_ProfileIcon_JasonLives.20240110_WB_NL_JasonVoorhees_ProfileIcon_JasonLives
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/20240112_CN_TNJ_TomAndJerry_ProfileIcon_SnorklinTnJ.20240112_CN_TNJ_TomAndJerry_ProfileIcon_SnorklinTnJ
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_Capstone_C016.ProfileIcon_Capstone_C016
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_CN_SU_Garnet_1.ProfileIcon_CN_SU_Garnet_1
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_WB_SD_SpaceKook.ProfileIcon_WB_SD_SpaceKook
       *
       * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_CN_SU_GarnetStar.ProfileIcon_CN_SU_GarnetStar
       *
       */
      "server_data.ProfileIcon.AssetPath": string;
      /**
       *
       * profile_icon_dc_bat_batlogo_1
       *
       * profile_icon_capstone_iron_giant
       *
       * profile_icon_c035_jason_lives
       *
       * profile_icon_c010_snorklin_tj
       *
       * profile_icon_capstone_c016
       *
       * profile_icon_cn_su_garnet_1
       *
       * profile_icon_wb_sd_spacekook
       *
       * profile_icon_cn_su_garnet_star
       *
       */
      "server_data.ProfileIcon.Slug": string;
      /**
       *
       * 300
       *
       * 290
       *
       * 184
       *
       * 280
       *
       * 255
       *
       * 260
       *
       * 240
       *
       * 0
       *
       */
      "server_data.RestedXP": number;
      /**
       *
       * 2024-06-18T07:15:13.000Z
       *
       * 2024-06-20T18:30:14.000Z
       *
       * 2024-06-19T07:09:26.000Z
       *
       * 2024-06-18T02:49:04.000Z
       *
       * 2024-06-19T00:49:24.000Z
       *
       * 2024-06-18T05:20:04.000Z
       *
       * 2024-07-03T20:52:02.000Z
       *
       * 2024-06-18T02:42:48.000Z
       *
       */
      "server_data.RetroactiveRiftBattlepassPayoutTime": string;
      "server_data.Transforms.BannerKnightSlugFixed": boolean;
      /**
       *
       * 2024-06-20T08:54:33.000Z
       *
       * 2024-06-20T18:30:14.000Z
       *
       * 2024-06-19T07:09:26.000Z
       *
       * 2024-06-19T02:39:37.000Z
       *
       * 2024-06-19T00:49:24.000Z
       *
       * 2024-06-19T02:29:47.000Z
       *
       * 2024-06-19T01:46:21.000Z
       *
       */
      "server_data.Transforms.BatmanVsJokerMakeGood_6-18-2024": string;
      /**
       *
       * 2024-12-02T23:02:25.000Z
       *
       * 2024-11-12T19:20:55.000Z
       *
       * 2024-11-13T16:27:20.000Z
       *
       * 2024-11-12T19:18:39.000Z
       *
       * 2024-11-12T20:34:55.000Z
       *
       * 2024-11-12T23:37:26.000Z
       *
       * 2024-12-02T18:50:31.000Z
       *
       * 2024-11-19T15:29:23.000Z
       *
       */
      "server_data.Transforms.CharacterCurrencyRoundUp": string;
      "server_data.Transforms.FixRankedCharactersInGold": boolean;
      "server_data.Transforms.GoldStatTracker": boolean;
      "server_data.Transforms.OpenBetaFreebies": boolean;
      "server_data.Transforms.Season2CharactersInMasterCalculated": boolean;
      "server_data.Transforms.Season3PrestigeFix": boolean;
      "server_data.Transforms.Season4RankedRewardCatchup": boolean;
      /**
       *
       * 2024-11-15T22:19:12.000Z
       *
       * 2024-11-15T21:21:53.000Z
       *
       * 2024-11-15T21:35:05.000Z
       *
       * 2024-11-15T22:11:13.000Z
       *
       * 2024-11-15T21:42:45.000Z
       *
       * 2024-11-15T21:31:03.000Z
       *
       * 2024-11-15T21:47:48.000Z
       *
       * 2024-11-15T22:15:22.000Z
       *
       */
      "server_data.Transforms.ShaggySkinMakeGoodS4": string;
      /**
       *
       * 2022-11-17T01:59:01.000Z
       *
       * 2023-01-29T05:46:35.000Z
       *
       * 2023-03-27T03:42:38.000Z
       *
       * 2023-01-07T09:07:30.000Z
       *
       */
      "server_data.active_boosts.bp.expiration_date": string;
      /**
       *
       * 0
       *
       * 37
       *
       * 39
       *
       */
      "server_data.active_boosts.bp.games_remaining": number;
      /**
       *
       * normal
       *
       */
      state: string;
      /**
       *
       * 2025-03-10T04:38:50.000Z
       *
       * 2025-02-18T21:35:22.000Z
       *
       * 2025-03-09T21:09:32.000Z
       *
       * 2025-03-10T07:24:57.000Z
       *
       * 2025-03-10T04:19:30.000Z
       *
       * 2025-03-10T15:55:42.000Z
       *
       * 2025-03-10T15:58:39.000Z
       *
       * 2025-03-10T16:01:39.000Z
       *
       * 2025-03-10T16:03:41.000Z
       *
       * 2025-03-10T16:06:41.000Z
       *
       */
      updated_at: string;
      "wb_account.completed": boolean;
      "wb_account.email_verified": boolean;
      wbplay_data_synced: boolean;
      wbplay_identity: {};
      "identity.alternate.epic": {
        avatar: {};
        /**
         *
         * Kretinnn
         *
         */
        username: string;
      }[];
      "identity.alternate.twitch": {
        avatar: {};
        /**
         *
         * KretinChief
         *
         * pumbafurry
         *
         * redjoey7
         *
         * jrockthingg
         *
         * aescudero93
         *
         */
        username: string;
      }[];
      "identity.alternate.xb1": {
        avatar: {};
        /**
         *
         * eimiklo
         *
         * Gon freecss8931
         *
         */
        username: string;
      }[];
      "server_data.Transforms.MmrSeason4": boolean;
      "server_data.Transforms.Season4FighterRoadPromo": boolean;
      "server_data.Transforms.Season4FixRolloverRp": boolean;
      "server_data.Transforms.Season4Promo": boolean;
      /**
       *
       * 2024-12-15T22:00:37.000Z
       *
       * 2024-12-12T14:17:33.000Z
       *
       * 2024-12-15T01:19:07.000Z
       *
       * 2024-12-12T02:25:48.000Z
       *
       * 2024-12-12T01:53:04.000Z
       *
       */
      "server_data.Transforms.SeasonFourAcademiaMakeGood": string;
      /**
       *
       * 0
       *
       */
      "server_data.Transforms.SeasonFourAcademiaMakeGoodScoreGranted": number;
      /**
       *
       * 2024-08-06T19:02:24.000Z
       *
       * 2024-08-06T10:56:44.000Z
       *
       * 2024-08-06T21:37:53.000Z
       *
       * 2024-08-06T18:08:32.000Z
       *
       * 2024-08-06T23:14:43.000Z
       *
       * 2024-08-11T02:23:37.000Z
       *
       */
      "server_data.Transforms.UpgradeWarMakeGood_8_5_2024": string;
      "identity.alternate.steam": {
        /**
         *
         * https://avatars.steamstatic.com/a6cb4f17bc5b031eb2efed3e1dc84a498dd56d87.jpg
         *
         * https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg
         *
         * https://avatars.steamstatic.com/6a2bc613bd15976439dbe8a00b7cb33ea0b8573a.jpg
         *
         * https://avatars.steamstatic.com/c9180f93ac892fa7d078f5946239d049e987e3b6.jpg
         *
         */
        avatar: string;
        /**
         *
         * 76561193971796704
         *
         * 76561194798428319
         *
         * 76561194048197267
         *
         * 76561193733398795
         *
         */
        id: string;
        /**
         *
         * Schalti
         *
         * Detrusive
         *
         * Jrock
         *
         * doubleaa93
         *
         */
        username: string;
      }[];
      /**
       *
       * 5
       *
       * 1
       *
       * 8
       *
       */
      "server_data.AntiCheatServerKick": number;
      /**
       *
       * 146076
       *
       * 2542
       *
       * 908
       *
       */
      "server_data.Characters.character_tom_and_jerry.Mastery.CurrentXP": number;
      /**
       *
       * 35
       *
       * 22
       *
       * 7
       *
       */
      "server_data.Characters.character_tom_and_jerry.Mastery.Level": number;
      /**
       *
       * 19585
       *
       * 234
       *
       * 183
       *
       */
      "server_data.Characters.character_velma.Mastery.CurrentXP": number;
      /**
       *
       * 29
       *
       * 4
       *
       * 11
       *
       */
      "server_data.Characters.character_velma.Mastery.Level": number;
      /**
       *
       * 2022-11-27T18:33:07.000Z
       *
       * 2023-04-20T01:13:49.000Z
       *
       * 2023-04-17T01:18:11.000Z
       *
       * 2022-12-20T04:33:21.000Z
       *
       */
      "server_data.active_boosts.gold.expiration_date": string;
      /**
       *
       * 0
       *
       * 8
       *
       * 41
       *
       */
      "server_data.active_boosts.gold.games_remaining": number;
      /**
       *
       * 2022-12-09T02:29:02.000Z
       *
       * 2023-04-13T23:35:42.000Z
       *
       * 2022-12-12T22:01:12.000Z
       *
       */
      "server_data.active_boosts.xp.expiration_date": string;
      /**
       *
       * 0
       *
       * 14
       *
       */
      "server_data.active_boosts.xp.games_remaining": number;
    };
    /**
     *
     * 62ea8899706c79b6eca58d2f
     *
     * 6665226141e1c384d52f7c27
     *
     * 62db00026ba0a58e5a2c926e
     *
     * 62e10c1f5aa13c213eafc03a
     *
     * 62e81ca70cbbc05057a6b2bc
     *
     * 62e20e28bb9273ffc9734372
     *
     * 62e08656b9ba90def747be62
     *
     * 62e30b98ac7c96be475ce760
     *
     * 62e95383b488ee2289aef406
     *
     */
    account_id: string;
    /**
     *
     * current_value
     *
     */
    "aggregates.fighter-road-xp.type_class": string;
    /**
     *
     * 350577
     *
     * 449000
     *
     * 3700
     *
     * 3800
     *
     */
    "aggregates.fighter-road-xp.value": number;
    /**
     *
     * current_value
     *
     */
    "aggregates.s1-battlepass-score.type_class": string;
    /**
     *
     * 44000
     *
     * 40750
     *
     * 142000
     *
     * 92000
     *
     * 12000
     *
     */
    "aggregates.s1-battlepass-score.value": number;
    /**
     *
     * 2022-08-03T14:39:22.000Z
     *
     * 2024-06-09T03:32:49.000Z
     *
     * 2022-07-22T19:52:34.000Z
     *
     * 2022-07-27T09:57:51.000Z
     *
     * 2022-08-01T18:34:15.000Z
     *
     * 2022-07-28T04:18:49.000Z
     *
     * 2022-07-27T00:27:02.000Z
     *
     * 2022-07-28T22:20:09.000Z
     *
     * 2022-08-02T16:40:35.000Z
     *
     */
    created_at: string;
    /**
     *
     * 1
     *
     */
    "data.2v2_prompt_shown": number;
    "data.HasCompletedFTUE": boolean;
    "data.HasCompletedFirstMatch": boolean;
    "data.IsChildAccount": boolean;
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_C017.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_C017.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_C018.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_C018.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_C020.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_C020.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_C021.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_C021.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_C023A.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_C023A.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_C023B.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_C023B.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_arya.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_arya.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_batman.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_batman.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_bugs_bunny.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_bugs_bunny.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_c019.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_c019.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_c16.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_c16.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_creature.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_creature.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_finn.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_finn.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_garnet.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_garnet.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_harleyquinn.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_harleyquinn.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_jake.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_jake.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_shaggy.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_shaggy.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_steven.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_steven.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_superman.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_superman.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_taz.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_taz.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_wonder_woman.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_wonder_woman.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 62ea889a706c79b6eca58d32
     *
     * 6665226141e1c384d52f7c28
     *
     * 62db00026ba0a58e5a2c9271
     *
     * 62e10c1f5aa13c213eafc03b
     *
     * 62e81ca70cbbc05057a6b2bf
     *
     * 62e20e29bb9273ffc9734375
     *
     * 62e08656b9ba90def747be64
     *
     * 62e30b99ac7c96be475ce764
     *
     * 62e95383b488ee2289aef409
     *
     */
    id: string;
    /**
     *
     * 1
     *
     */
    "inventory.battlepass-season-1.count": number;
    /**
     *
     * 2024-05-29T03:00:27.000Z
     *
     * 2024-05-28T15:57:06.000Z
     *
     * 2024-05-28T17:53:46.000Z
     *
     * 2024-05-28T17:08:15.000Z
     *
     * 2024-05-28T11:52:02.000Z
     *
     * 2024-05-28T17:21:16.000Z
     *
     * 2024-05-28T17:09:53.000Z
     *
     */
    "inventory.battlepass-season-1.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_BananaGuard.count": number;
    /**
     *
     * 2024-05-29T23:05:46.000Z
     *
     * 2024-06-22T17:48:06.000Z
     *
     * 2024-05-29T15:40:10.000Z
     *
     * 2024-05-29T16:42:25.000Z
     *
     * 2024-05-29T20:36:59.000Z
     *
     * 2024-05-29T15:32:43.000Z
     *
     * 2024-05-29T12:45:25.000Z
     *
     * 2024-07-04T18:56:29.000Z
     *
     * 2024-05-29T13:41:27.000Z
     *
     */
    "inventory.character_BananaGuard.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C017.count": number;
    /**
     *
     * 2025-03-08T04:47:58.000Z
     *
     * 2024-08-27T05:50:00.000Z
     *
     */
    "inventory.character_C017.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C018.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_C020.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_C021.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_C023A.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_C023B.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_C025.count": number;
    /**
     *
     * 2025-02-23T09:40:53.000Z
     *
     * 2024-11-12T23:01:50.000Z
     *
     * 2024-11-16T10:24:56.000Z
     *
     * 2024-11-16T01:18:26.000Z
     *
     * 2024-12-03T05:15:51.000Z
     *
     */
    "inventory.character_C025.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C028.count": number;
    /**
     *
     * 2024-06-07T05:15:09.000Z
     *
     * 2024-06-13T15:26:25.000Z
     *
     * 2024-06-09T11:04:47.000Z
     *
     * 2024-06-03T13:40:58.000Z
     *
     * 2024-09-05T06:24:28.000Z
     *
     * 2024-07-22T14:56:30.000Z
     *
     */
    "inventory.character_C028.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C029.count": number;
    /**
     *
     * 2025-02-23T08:02:12.000Z
     *
     * 2025-02-04T17:53:42.000Z
     *
     * 2025-02-08T13:52:50.000Z
     *
     * 2025-02-05T02:53:39.000Z
     *
     * 2025-02-05T05:11:40.000Z
     *
     * 2025-02-04T17:53:06.000Z
     *
     */
    "inventory.character_C029.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_Jason.count": number;
    /**
     *
     * 2024-05-29T05:16:40.000Z
     *
     * 2024-07-25T08:13:05.000Z
     *
     * 2024-05-28T16:03:05.000Z
     *
     * 2024-05-28T18:04:43.000Z
     *
     * 2024-05-28T17:14:45.000Z
     *
     * 2024-06-04T01:19:58.000Z
     *
     * 2024-05-28T17:32:41.000Z
     *
     * 2024-05-28T17:26:35.000Z
     *
     */
    "inventory.character_Jason.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_arya.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_batman.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_bugs_bunny.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_c019.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_c038.count": number;
    /**
     *
     * 2025-02-23T08:02:38.000Z
     *
     * 2025-02-04T17:53:33.000Z
     *
     * 2025-02-08T18:11:17.000Z
     *
     * 2025-02-05T02:53:44.000Z
     *
     * 2025-03-03T00:16:21.000Z
     *
     * 2025-02-04T17:52:07.000Z
     *
     */
    "inventory.character_c038.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_c16.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_creature.count": number;
    /**
     *
     * 2025-03-01T21:28:26.000Z
     *
     * 2024-11-27T21:06:58.000Z
     *
     * 2024-10-11T04:25:21.000Z
     *
     */
    "inventory.character_creature.created_at": string;
    /**
     *
     * 0
     *
     * 3000
     *
     * 6080
     *
     * 9100
     *
     * 21000
     *
     * 6000
     *
     */
    "inventory.character_currency.count": number;
    "inventory.character_currency.created_at": {};
    /**
     *
     * 1
     *
     */
    "inventory.character_finn.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_garnet.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_harleyquinn.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_jake.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_shaggy.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_steven.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_superman.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_taz.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_tom_and_jerry.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_velma.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.character_wonder_woman.count": number;
    /**
     *
     * 1
     *
     */
    "inventory.skin_c034_s01.count": number;
    /**
     *
     * 2024-06-06T03:20:43.000Z
     *
     * 2024-07-25T14:48:32.000Z
     *
     * 2024-06-04T13:34:59.000Z
     *
     * 2024-06-04T15:40:49.000Z
     *
     * 2024-06-04T11:01:35.000Z
     *
     * 2024-06-11T16:46:07.000Z
     *
     * 2024-06-06T01:26:03.000Z
     *
     * 2024-06-05T02:39:56.000Z
     *
     */
    "inventory.skin_c034_s01.created_at": string;
    /**
     *
     * 2025-03-10T04:29:52.000Z
     *
     * 2024-10-28T02:31:24.000Z
     *
     * 2025-02-18T20:52:23.000Z
     *
     * 2025-03-09T21:08:58.000Z
     *
     * 2025-03-10T03:35:04.000Z
     *
     * 2025-03-10T02:52:58.000Z
     *
     * 2025-03-10T14:10:18.000Z
     *
     * 2025-03-10T15:28:32.000Z
     *
     * 2025-03-10T16:00:02.000Z
     *
     */
    last_login: string;
    /**
     *
     * 0
     *
     */
    "matches.1v1_container.challenge_loss": number;
    /**
     *
     * 0
     *
     */
    "matches.1v1_container.challenge_win": number;
    /**
     *
     * 5
     *
     * 3
     *
     * 12
     *
     * 7
     *
     * 6
     *
     * 0
     *
     * 15
     *
     * 4
     *
     */
    "matches.1v1_container.longest_loss_streak": number;
    /**
     *
     * 9
     *
     * 8
     *
     * 24
     *
     * 73
     *
     * 26
     *
     * 13
     *
     * 2
     *
     * 22
     *
     */
    "matches.1v1_container.longest_win_streak": number;
    /**
     *
     * 101
     *
     * 57
     *
     * 1598
     *
     * 2125
     *
     * 1146
     *
     * 11
     *
     * 1704
     *
     * 15
     *
     * 16
     *
     * 2179
     *
     */
    "matches.1v1_container.loss": number;
    /**
     *
     * 4
     *
     * 2
     *
     * 0
     *
     * 5
     *
     */
    "matches.1v1_container.loss_streak": number;
    /**
     *
     * 100
     *
     * 57
     *
     * 2809
     *
     * 7880
     *
     * 2183
     *
     * 28
     *
     * 1343
     *
     * 5
     *
     * 3065
     *
     */
    "matches.1v1_container.win": number;
    /**
     *
     * 0
     *
     * 12
     *
     * 2
     *
     * 7
     *
     * 1
     *
     */
    "matches.1v1_container.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.1v1_container_bot.challenge_loss": number;
    /**
     *
     * 0
     *
     */
    "matches.1v1_container_bot.challenge_win": number;
    /**
     *
     * 0
     *
     * 1
     *
     */
    "matches.1v1_container_bot.longest_loss_streak": number;
    /**
     *
     * 5
     *
     * 12
     *
     * 169
     *
     * 4
     *
     * 7
     *
     */
    "matches.1v1_container_bot.longest_win_streak": number;
    /**
     *
     * 0
     *
     * 2
     *
     * 1
     *
     */
    "matches.1v1_container_bot.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.1v1_container_bot.loss_streak": number;
    /**
     *
     * 5
     *
     * 12
     *
     * 257
     *
     * 7
     *
     */
    "matches.1v1_container_bot.win": number;
    /**
     *
     * 5
     *
     * 12
     *
     * 18
     *
     * 4
     *
     * 7
     *
     */
    "matches.1v1_container_bot.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.1v3_container_bot.challenge_loss": number;
    /**
     *
     * 0
     *
     */
    "matches.1v3_container_bot.challenge_win": number;
    /**
     *
     * 13
     *
     * 0
     *
     * 1
     *
     */
    "matches.1v3_container_bot.longest_loss_streak": number;
    /**
     *
     * 31
     *
     * 7
     *
     * 4
     *
     * 3
     *
     * 26
     *
     * 5
     *
     */
    "matches.1v3_container_bot.longest_win_streak": number;
    /**
     *
     * 24
     *
     * 1
     *
     * 0
     *
     * 2
     *
     */
    "matches.1v3_container_bot.loss": number;
    /**
     *
     * 9
     *
     * 0
     *
     * 1
     *
     */
    "matches.1v3_container_bot.loss_streak": number;
    /**
     *
     * 38
     *
     * 11
     *
     * 4
     *
     * 7
     *
     * 3
     *
     * 26
     *
     * 5
     *
     */
    "matches.1v3_container_bot.win": number;
    /**
     *
     * 0
     *
     * 7
     *
     * 4
     *
     * 26
     *
     * 5
     *
     */
    "matches.1v3_container_bot.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2_container.challenge_loss": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2_container.challenge_win": number;
    /**
     *
     * 7
     *
     * 8
     *
     * 5
     *
     * 9
     *
     * 13
     *
     * 0
     *
     */
    "matches.2v2_container.longest_loss_streak": number;
    /**
     *
     * 10
     *
     * 13
     *
     * 32
     *
     * 45
     *
     * 99
     *
     * 22
     *
     * 8
     *
     * 16
     *
     */
    "matches.2v2_container.longest_win_streak": number;
    /**
     *
     * 504
     *
     * 1224
     *
     * 329
     *
     * 687
     *
     * 4700
     *
     * 5817
     *
     * 436
     *
     * 35
     *
     */
    "matches.2v2_container.loss": number;
    /**
     *
     * 5
     *
     * 0
     *
     * 2
     *
     * 1
     *
     */
    "matches.2v2_container.loss_streak": number;
    /**
     *
     * 551
     *
     * 1496
     *
     * 689
     *
     * 2011
     *
     * 11774
     *
     * 6752
     *
     * 325
     *
     * 107
     *
     */
    "matches.2v2_container.win": number;
    /**
     *
     * 0
     *
     * 2
     *
     * 13
     *
     * 3
     *
     */
    "matches.2v2_container.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2_container_bot.challenge_loss": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2_container_bot.challenge_win": number;
    /**
     *
     * 0
     *
     * 2
     *
     */
    "matches.2v2_container_bot.longest_loss_streak": number;
    /**
     *
     * 4
     *
     * 3
     *
     * 11
     *
     * 9
     *
     * 7
     *
     * 13
     *
     * 49
     *
     */
    "matches.2v2_container_bot.longest_win_streak": number;
    /**
     *
     * 1
     *
     * 2
     *
     * 0
     *
     * 6
     *
     */
    "matches.2v2_container_bot.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2_container_bot.loss_streak": number;
    /**
     *
     * 6
     *
     * 7
     *
     * 13
     *
     * 15
     *
     * 132
     *
     */
    "matches.2v2_container_bot.win": number;
    /**
     *
     * 2
     *
     * 6
     *
     * 7
     *
     * 13
     *
     * 9
     *
     */
    "matches.2v2_container_bot.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.rift_container_one_player.challenge_loss": number;
    /**
     *
     * 0
     *
     */
    "matches.rift_container_one_player.challenge_win": number;
    /**
     *
     * 0
     *
     * 1
     *
     * 2
     *
     */
    "matches.rift_container_one_player.longest_loss_streak": number;
    /**
     *
     * 36
     *
     * 30
     *
     * 146
     *
     * 156
     *
     * 95
     *
     * 3
     *
     * 103
     *
     * 5
     *
     * 18
     *
     */
    "matches.rift_container_one_player.longest_win_streak": number;
    /**
     *
     * 1
     *
     * 24
     *
     * 5
     *
     * 11
     *
     * 0
     *
     * 38
     *
     */
    "matches.rift_container_one_player.loss": number;
    /**
     *
     * 0
     *
     * 1
     *
     */
    "matches.rift_container_one_player.loss_streak": number;
    /**
     *
     * 42
     *
     * 89
     *
     * 174
     *
     * 305
     *
     * 95
     *
     * 3
     *
     * 616
     *
     * 5
     *
     * 18
     *
     */
    "matches.rift_container_one_player.win": number;
    /**
     *
     * 36
     *
     * 2
     *
     * 21
     *
     * 156
     *
     * 95
     *
     * 3
     *
     * 0
     *
     * 5
     *
     * 18
     *
     */
    "matches.rift_container_one_player.win_streak": number;
    points: {};
    /**
     *
     * 0.15326389180133881
     *
     * 0.7698493076691744
     *
     * 0.8022163153433566
     *
     * 0.4020679787819811
     *
     * 0.6177744633579968
     *
     * 0.6046463035636604
     *
     * 0.9314034260550397
     *
     * 0.4032443300496751
     *
     * 0.9756054304273349
     *
     */
    random_distribution: number;
    /**
     *
     * 162.2353803681483
     *
     * 145.31731640937167
     *
     * 456.26788793431365
     *
     */
    "server_data.1v1_ranked.1.rank.current_points": number;
    /**
     *
     * 20
     *
     * 21
     *
     * 196
     *
     */
    "server_data.1v1_ranked.1.rank.games_played": number;
    /**
     *
     * 162.2353803681483
     *
     * 145.31731640937167
     *
     * 543.9959589012374
     *
     */
    "server_data.1v1_ranked.1.rank.max_points": number;
    /**
     *
     * 0.43214412575150907
     *
     * 0.5594081464515255
     *
     * 0.95
     *
     * 0.802531173301716
     *
     */
    "server_data.1v1shuffle.0.ratings.all.confidence": number;
    /**
     *
     * 457.33323855955405
     *
     * 508.2981236760269
     *
     * 129.62746773108344
     *
     * 1016.6810381518793
     *
     */
    "server_data.1v1shuffle.0.ratings.all.deviance": number;
    /**
     *
     * 1674283878310
     *
     * 1686883686277
     *
     * 1661182763664
     *
     * 1687377705555
     *
     */
    "server_data.1v1shuffle.0.ratings.all.lastUpdateTimestamp": number;
    /**
     *
     * 1215.671067878753
     *
     * 1020.2141484968339
     *
     * 383.64561064508626
     *
     * 11322.466065816092
     *
     */
    "server_data.1v1shuffle.0.ratings.all.mean": number;
    /**
     *
     * -4
     *
     * -1
     *
     * -2
     *
     * 5
     *
     */
    "server_data.1v1shuffle.0.ratings.all.streak": number;
    /**
     *
     * 0.95
     *
     * 0.872124129996142
     *
     * 0.20016604277920286
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C018.confidence": number;
    /**
     *
     * 91.29253572059865
     *
     * 170.72562921243326
     *
     * 1482.9372018567913
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C018.deviance": number;
    /**
     *
     * 1669427984657
     *
     * 1681421451106
     *
     * 1687369229311
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C018.lastUpdateTimestamp": number;
    /**
     *
     * 672.2410468252874
     *
     * 764.6117957410986
     *
     * 3729.0966374648465
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C018.mean": number;
    /**
     *
     * -2
     *
     * 1
     *
     * -3
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C018.streak": number;
    /**
     *
     * 0.95
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C020.confidence": number;
    /**
     *
     * 65.01862884381879
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C020.deviance": number;
    /**
     *
     * 1665280754172
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C020.lastUpdateTimestamp": number;
    /**
     *
     * 888.1750322909501
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C020.mean": number;
    /**
     *
     * -2
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C020.streak": number;
    /**
     *
     * 0.6250170501318274
     *
     * 0.95
     *
     * 0.39316041477409785
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C021.confidence": number;
    /**
     *
     * 105.54604168369066
     *
     * 102.15261773935053
     *
     * 167.219348970448
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C021.deviance": number;
    /**
     *
     * 1667871108085
     *
     * 1669366741476
     *
     * 1667251395255
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C021.lastUpdateTimestamp": number;
    /**
     *
     * 733.5240599829335
     *
     * 629.4121939012308
     *
     * 1506.131385506986
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C021.mean": number;
    /**
     *
     * -5
     *
     * 5
     *
     * -1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C021.streak": number;
    /**
     *
     * 0.95
     *
     * 0.5055198739883326
     *
     * 0.5302653147781853
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C023B.confidence": number;
    /**
     *
     * 106.74788775805699
     *
     * 111.74620381354944
     *
     * 247.23229493299095
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C023B.deviance": number;
    /**
     *
     * 1667111310327
     *
     * 1667939840006
     *
     * 1666131527578
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C023B.lastUpdateTimestamp": number;
    /**
     *
     * 858.9391846023105
     *
     * 574.8558968118758
     *
     * 1348.3542681302263
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C023B.mean": number;
    /**
     *
     * -1
     *
     * 2
     *
     * -2
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C023B.streak": number;
    /**
     *
     * character_batman
     *
     */
    "server_data.1v1shuffle.0.ratings.character_batman.character": string;
    /**
     *
     * 0.34713699146735744
     *
     */
    "server_data.1v1shuffle.0.ratings.character_batman.confidence": number;
    /**
     *
     * 403.1093728711261
     *
     */
    "server_data.1v1shuffle.0.ratings.character_batman.deviance": number;
    /**
     *
     * 1674283878075
     *
     */
    "server_data.1v1shuffle.0.ratings.character_batman.lastUpdateTimestamp": number;
    /**
     *
     * 1269.048371378189
     *
     */
    "server_data.1v1shuffle.0.ratings.character_batman.mean": number;
    /**
     *
     * -4
     *
     */
    "server_data.1v1shuffle.0.ratings.character_batman.streak": number;
    /**
     *
     * character_bugs_bunny
     *
     */
    "server_data.1v1shuffle.0.ratings.character_bugs_bunny.character": string;
    /**
     *
     * 0.2807063986525611
     *
     * 0.7498226844300164
     *
     */
    "server_data.1v1shuffle.0.ratings.character_bugs_bunny.confidence": number;
    /**
     *
     * 227.75858203893029
     *
     * 97.82973554325521
     *
     */
    "server_data.1v1shuffle.0.ratings.character_bugs_bunny.deviance": number;
    /**
     *
     * 1660460048288
     *
     * 1672802560304
     *
     */
    "server_data.1v1shuffle.0.ratings.character_bugs_bunny.lastUpdateTimestamp": number;
    /**
     *
     * 1066.706470497038
     *
     * 425.89068794489464
     *
     */
    "server_data.1v1shuffle.0.ratings.character_bugs_bunny.mean": number;
    /**
     *
     * 1
     *
     * -1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_bugs_bunny.streak": number;
    /**
     *
     * 0.8439408401115938
     *
     * 0.17568687083933343
     *
     * 0.20001968100281212
     *
     */
    "server_data.1v1shuffle.0.ratings.character_c16.confidence": number;
    /**
     *
     * 96.40567898271392
     *
     * 163.6649968201951
     *
     * 1620.750146915498
     *
     */
    "server_data.1v1shuffle.0.ratings.character_c16.deviance": number;
    /**
     *
     * 1667873756265
     *
     * 1686883256040
     *
     * 1687377705034
     *
     */
    "server_data.1v1shuffle.0.ratings.character_c16.lastUpdateTimestamp": number;
    /**
     *
     * 615.312978476204
     *
     * 543.1118559833811
     *
     * 10698.051380609135
     *
     */
    "server_data.1v1shuffle.0.ratings.character_c16.mean": number;
    /**
     *
     * -2
     *
     * -1
     *
     * 5
     *
     */
    "server_data.1v1shuffle.0.ratings.character_c16.streak": number;
    /**
     *
     * 0.8373429001134849
     *
     * 0.30000000000000004
     *
     * 0.583459775377011
     *
     */
    "server_data.1v1shuffle.0.ratings.character_superman.confidence": number;
    /**
     *
     * 241.3041157028733
     *
     * 132.53002285171956
     *
     * 111.24107826666703
     *
     */
    "server_data.1v1shuffle.0.ratings.character_superman.deviance": number;
    /**
     *
     * 1673153866510
     *
     * 1681421943236
     *
     * 1661182763565
     *
     */
    "server_data.1v1shuffle.0.ratings.character_superman.lastUpdateTimestamp": number;
    /**
     *
     * 1180.4906619535225
     *
     * 444.85481274368294
     *
     * 542.8833565844574
     *
     */
    "server_data.1v1shuffle.0.ratings.character_superman.mean": number;
    /**
     *
     * -1
     *
     * 3
     *
     * -2
     *
     */
    "server_data.1v1shuffle.0.ratings.character_superman.streak": number;
    /**
     *
     * character_batman
     *
     * character_garnet
     *
     * character_c16
     *
     */
    "server_data.1v1shuffle.0.topRating.character": string;
    /**
     *
     * 0.34713699146735744
     *
     * 0.8371450099275228
     *
     * 0.6112452580914396
     *
     * 0.20001968100281212
     *
     */
    "server_data.1v1shuffle.0.topRating.confidence": number;
    /**
     *
     * 403.1093728711261
     *
     * 171.1337159169619
     *
     * 200.23977396736893
     *
     * 1620.750146915498
     *
     */
    "server_data.1v1shuffle.0.topRating.deviance": number;
    /**
     *
     * 1674283878075
     *
     * 1686883685897
     *
     * 1659793017140
     *
     * 1687377705034
     *
     */
    "server_data.1v1shuffle.0.topRating.lastUpdateTimestamp": number;
    /**
     *
     * 1269.048371378189
     *
     * 983.8668640157207
     *
     * 711.3553793701781
     *
     * 10698.051380609135
     *
     */
    "server_data.1v1shuffle.0.topRating.mean": number;
    /**
     *
     * -4
     *
     * -1
     *
     * -3
     *
     * 5
     *
     */
    "server_data.1v1shuffle.0.topRating.streak": number;
    /**
     *
     * 364.5213665164598
     *
     * 100
     *
     * 400
     *
     */
    "server_data.2v2_ranked.1.rank.current_points": number;
    /**
     *
     * 110
     *
     * 16
     *
     * 55
     *
     */
    "server_data.2v2_ranked.1.rank.games_played": number;
    /**
     *
     * 364.5213665164598
     *
     * 103.73195492475368
     *
     * 418.8012165614502
     *
     */
    "server_data.2v2_ranked.1.rank.max_points": number;
    /**
     *
     * 0.7823054535332892
     *
     * 0.4392264086142873
     *
     */
    "server_data.2v2casual.0.ratings.all.confidence": number;
    /**
     *
     * 144.40251257073626
     *
     * 170.55171996506783
     *
     */
    "server_data.2v2casual.0.ratings.all.deviance": number;
    /**
     *
     * 1667795484493
     *
     * 1668394982319
     *
     */
    "server_data.2v2casual.0.ratings.all.lastUpdateTimestamp": number;
    /**
     *
     * 861.3140372017018
     *
     * 860.6496756936547
     *
     */
    "server_data.2v2casual.0.ratings.all.mean": number;
    /**
     *
     * -5
     *
     * -2
     *
     */
    "server_data.2v2casual.0.ratings.all.streak": number;
    /**
     *
     * 0.5143526436970698
     *
     */
    "server_data.2v2casual.0.ratings.character_C021.confidence": number;
    /**
     *
     * 160.87871024236514
     *
     */
    "server_data.2v2casual.0.ratings.character_C021.deviance": number;
    /**
     *
     * 1667795483869
     *
     */
    "server_data.2v2casual.0.ratings.character_C021.lastUpdateTimestamp": number;
    /**
     *
     * 841.1169380916193
     *
     */
    "server_data.2v2casual.0.ratings.character_C021.mean": number;
    /**
     *
     * -4
     *
     */
    "server_data.2v2casual.0.ratings.character_C021.streak": number;
    /**
     *
     * character_batman
     *
     */
    "server_data.2v2casual.0.ratings.character_batman.character": string;
    /**
     *
     * 0.6874374687447252
     *
     */
    "server_data.2v2casual.0.ratings.character_batman.confidence": number;
    /**
     *
     * 158.0764542093864
     *
     */
    "server_data.2v2casual.0.ratings.character_batman.deviance": number;
    /**
     *
     * 1667795063995
     *
     */
    "server_data.2v2casual.0.ratings.character_batman.lastUpdateTimestamp": number;
    /**
     *
     * 917.5558032518346
     *
     */
    "server_data.2v2casual.0.ratings.character_batman.mean": number;
    /**
     *
     * -2
     *
     */
    "server_data.2v2casual.0.ratings.character_batman.streak": number;
    /**
     *
     * character_batman
     *
     * character_shaggy
     *
     */
    "server_data.2v2casual.0.topRating.character": string;
    /**
     *
     * 0.6874374687447252
     *
     * 0.34709293509434747
     *
     */
    "server_data.2v2casual.0.topRating.confidence": number;
    /**
     *
     * 158.0764542093864
     *
     * 171.91947065754346
     *
     */
    "server_data.2v2casual.0.topRating.deviance": number;
    /**
     *
     * 1667795063995
     *
     * 1668323397260
     *
     */
    "server_data.2v2casual.0.topRating.lastUpdateTimestamp": number;
    /**
     *
     * 917.5558032518346
     *
     * 983.0966038356964
     *
     */
    "server_data.2v2casual.0.topRating.mean": number;
    /**
     *
     * -2
     *
     * -1
     *
     */
    "server_data.2v2casual.0.topRating.streak": number;
    /**
     *
     * 0.3144105613581518
     *
     * 0.20000015850329547
     *
     * 0.21743992959185457
     *
     */
    "server_data.2v2shuffle.0.ratings.all.confidence": number;
    /**
     *
     * 781.2588396419274
     *
     * 874.4723310124922
     *
     * 657.5176975331162
     *
     */
    "server_data.2v2shuffle.0.ratings.all.deviance": number;
    /**
     *
     * 1680887528341
     *
     * 1685915348119
     *
     * 1676055662099
     *
     */
    "server_data.2v2shuffle.0.ratings.all.lastUpdateTimestamp": number;
    /**
     *
     * 2143.171336119625
     *
     * 503.4010135290828
     *
     * 1785.5231397783255
     *
     */
    "server_data.2v2shuffle.0.ratings.all.mean": number;
    /**
     *
     * -2
     *
     * 1
     *
     */
    "server_data.2v2shuffle.0.ratings.all.streak": number;
    /**
     *
     * 0.7444682357668806
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C017.confidence": number;
    /**
     *
     * 100.78885437930856
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C017.deviance": number;
    /**
     *
     * 1667105866861
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C017.lastUpdateTimestamp": number;
    /**
     *
     * 562.9938825648366
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C017.mean": number;
    /**
     *
     * 3
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C017.streak": number;
    /**
     *
     * 0.31030690851616005
     *
     * 0.95
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C018.confidence": number;
    /**
     *
     * 101.70106911260392
     *
     * 141.61809997517207
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C018.deviance": number;
    /**
     *
     * 1669588074523
     *
     * 1673555911082
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C018.lastUpdateTimestamp": number;
    /**
     *
     * 884.5942222575403
     *
     * 1335.5110755608148
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C018.mean": number;
    /**
     *
     * 1
     *
     * -2
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C018.streak": number;
    /**
     *
     * 0.9261257853631597
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C020.confidence": number;
    /**
     *
     * 82.64993762928843
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C020.deviance": number;
    /**
     *
     * 1665638005066
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C020.lastUpdateTimestamp": number;
    /**
     *
     * 931.8406114171827
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C020.mean": number;
    /**
     *
     * 1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C020.streak": number;
    /**
     *
     * 0.8092736734198887
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C021.confidence": number;
    /**
     *
     * 94.76960109845004
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C021.deviance": number;
    /**
     *
     * 1667679603549
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C021.lastUpdateTimestamp": number;
    /**
     *
     * 595.0814077881174
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C021.mean": number;
    /**
     *
     * 1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C021.streak": number;
    /**
     *
     * 0.95
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023A.confidence": number;
    /**
     *
     * 71.16577788682372
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023A.deviance": number;
    /**
     *
     * 1662926115262
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023A.lastUpdateTimestamp": number;
    /**
     *
     * 681.0937519568377
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023A.mean": number;
    /**
     *
     * -1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023A.streak": number;
    /**
     *
     * 0.5400682937605417
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023B.confidence": number;
    /**
     *
     * 105.69236324623657
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023B.deviance": number;
    /**
     *
     * 1667104693327
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023B.lastUpdateTimestamp": number;
    /**
     *
     * 917.1394511192575
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023B.mean": number;
    /**
     *
     * 4
     *
     */
    "server_data.2v2shuffle.0.ratings.character_C023B.streak": number;
    /**
     *
     * 0.95
     *
     */
    "server_data.2v2shuffle.0.ratings.character_arya.confidence": number;
    /**
     *
     * 95.25039619104248
     *
     */
    "server_data.2v2shuffle.0.ratings.character_arya.deviance": number;
    /**
     *
     * 1660680573861
     *
     */
    "server_data.2v2shuffle.0.ratings.character_arya.lastUpdateTimestamp": number;
    /**
     *
     * 536.5693966033718
     *
     */
    "server_data.2v2shuffle.0.ratings.character_arya.mean": number;
    /**
     *
     * -3
     *
     */
    "server_data.2v2shuffle.0.ratings.character_arya.streak": number;
    /**
     *
     * character_batman
     *
     */
    "server_data.2v2shuffle.0.ratings.character_batman.character": string;
    /**
     *
     * 0.27800190179577094
     *
     */
    "server_data.2v2shuffle.0.ratings.character_batman.confidence": number;
    /**
     *
     * 605.4331075600627
     *
     */
    "server_data.2v2shuffle.0.ratings.character_batman.deviance": number;
    /**
     *
     * 1680887527691
     *
     */
    "server_data.2v2shuffle.0.ratings.character_batman.lastUpdateTimestamp": number;
    /**
     *
     * 1627.0093120872382
     *
     */
    "server_data.2v2shuffle.0.ratings.character_batman.mean": number;
    /**
     *
     * -2
     *
     */
    "server_data.2v2shuffle.0.ratings.character_batman.streak": number;
    /**
     *
     * 0.95
     *
     * 0.7972643401686201
     *
     */
    "server_data.2v2shuffle.0.ratings.character_bugs_bunny.confidence": number;
    /**
     *
     * 108.28965385060107
     *
     * 64.75896767243745
     *
     */
    "server_data.2v2shuffle.0.ratings.character_bugs_bunny.deviance": number;
    /**
     *
     * 1660618701543
     *
     * 1668371182980
     *
     */
    "server_data.2v2shuffle.0.ratings.character_bugs_bunny.lastUpdateTimestamp": number;
    /**
     *
     * 528.8159644865679
     *
     * 452.1121539911808
     *
     */
    "server_data.2v2shuffle.0.ratings.character_bugs_bunny.mean": number;
    /**
     *
     * -1
     *
     * -2
     *
     */
    "server_data.2v2shuffle.0.ratings.character_bugs_bunny.streak": number;
    /**
     *
     * 0.9159542366133
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c019.confidence": number;
    /**
     *
     * 71.42433922207992
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c019.deviance": number;
    /**
     *
     * 1662328023503
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c019.lastUpdateTimestamp": number;
    /**
     *
     * 837.0182323795841
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c019.mean": number;
    /**
     *
     * 1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c019.streak": number;
    /**
     *
     * character_finn
     *
     */
    "server_data.2v2shuffle.0.ratings.character_finn.character": string;
    /**
     *
     * 0.2353187324033701
     *
     * 0.5327697213301104
     *
     */
    "server_data.2v2shuffle.0.ratings.character_finn.confidence": number;
    /**
     *
     * 205.34957560460506
     *
     * 166.4429468763929
     *
     */
    "server_data.2v2shuffle.0.ratings.character_finn.deviance": number;
    /**
     *
     * 1660270546724
     *
     * 1660542175569
     *
     */
    "server_data.2v2shuffle.0.ratings.character_finn.lastUpdateTimestamp": number;
    /**
     *
     * 953.9518994068384
     *
     * 907.3572412289882
     *
     */
    "server_data.2v2shuffle.0.ratings.character_finn.mean": number;
    /**
     *
     * -1
     *
     * -4
     *
     */
    "server_data.2v2shuffle.0.ratings.character_finn.streak": number;
    /**
     *
     * 0.3332978778292181
     *
     * 0.3476101433214537
     *
     * 0.4951679259954848
     *
     */
    "server_data.2v2shuffle.0.ratings.character_garnet.confidence": number;
    /**
     *
     * 179.89005714509338
     *
     * 164.0507311485223
     *
     * 169.3750758272314
     *
     */
    "server_data.2v2shuffle.0.ratings.character_garnet.deviance": number;
    /**
     *
     * 1660272461763
     *
     * 1685915347742
     *
     * 1659263243034
     *
     */
    "server_data.2v2shuffle.0.ratings.character_garnet.lastUpdateTimestamp": number;
    /**
     *
     * 555.4385409862148
     *
     * 952.397126980277
     *
     * 737.2691646507109
     *
     */
    "server_data.2v2shuffle.0.ratings.character_garnet.mean": number;
    /**
     *
     * -2
     *
     * 1
     *
     * -1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_garnet.streak": number;
    /**
     *
     * 0.7970188613248081
     *
     */
    "server_data.2v2shuffle.0.ratings.character_harleyquinn.confidence": number;
    /**
     *
     * 105.75929827513227
     *
     */
    "server_data.2v2shuffle.0.ratings.character_harleyquinn.deviance": number;
    /**
     *
     * 1664497687068
     *
     */
    "server_data.2v2shuffle.0.ratings.character_harleyquinn.lastUpdateTimestamp": number;
    /**
     *
     * 307.67268342220905
     *
     */
    "server_data.2v2shuffle.0.ratings.character_harleyquinn.mean": number;
    /**
     *
     * -5
     *
     */
    "server_data.2v2shuffle.0.ratings.character_harleyquinn.streak": number;
    /**
     *
     * 0.42899037756201946
     *
     */
    "server_data.2v2shuffle.0.ratings.character_jake.confidence": number;
    /**
     *
     * 171.2171358452705
     *
     */
    "server_data.2v2shuffle.0.ratings.character_jake.deviance": number;
    /**
     *
     * 1661307756286
     *
     */
    "server_data.2v2shuffle.0.ratings.character_jake.lastUpdateTimestamp": number;
    /**
     *
     * 367.9557843294817
     *
     */
    "server_data.2v2shuffle.0.ratings.character_jake.mean": number;
    /**
     *
     * -3
     *
     */
    "server_data.2v2shuffle.0.ratings.character_jake.streak": number;
    /**
     *
     * 0.8423113394161522
     *
     * 0.5819414428730767
     *
     */
    "server_data.2v2shuffle.0.ratings.character_shaggy.confidence": number;
    /**
     *
     * 64.9179100347315
     *
     * 119.40036655999046
     *
     */
    "server_data.2v2shuffle.0.ratings.character_shaggy.deviance": number;
    /**
     *
     * 1671422100121
     *
     * 1670121572195
     *
     */
    "server_data.2v2shuffle.0.ratings.character_shaggy.lastUpdateTimestamp": number;
    /**
     *
     * 761.5473666093804
     *
     * 617.4465737531781
     *
     */
    "server_data.2v2shuffle.0.ratings.character_shaggy.mean": number;
    /**
     *
     * -4
     *
     * 3
     *
     */
    "server_data.2v2shuffle.0.ratings.character_shaggy.streak": number;
    /**
     *
     * 0.2953095140652965
     *
     * 0.7065107749300571
     *
     * 0.8634268874075863
     *
     */
    "server_data.2v2shuffle.0.ratings.character_steven.confidence": number;
    /**
     *
     * 176.3816232131016
     *
     * 93.68585324534237
     *
     * 127.02514215045436
     *
     */
    "server_data.2v2shuffle.0.ratings.character_steven.deviance": number;
    /**
     *
     * 1667105454053
     *
     * 1665878595905
     *
     * 1659265152080
     *
     */
    "server_data.2v2shuffle.0.ratings.character_steven.lastUpdateTimestamp": number;
    /**
     *
     * 564.28567779155
     *
     * 484.2757658865075
     *
     * 952.1423119523262
     *
     */
    "server_data.2v2shuffle.0.ratings.character_steven.mean": number;
    /**
     *
     * 1
     *
     * -6
     *
     * -1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_steven.streak": number;
    /**
     *
     * 0.31425310696106123
     *
     * 0.38456958062500524
     *
     * 0.7325938440705004
     *
     */
    "server_data.2v2shuffle.0.ratings.character_superman.confidence": number;
    /**
     *
     * 182.51926690140837
     *
     * 155.91738172783445
     *
     * 151.64569979813433
     *
     */
    "server_data.2v2shuffle.0.ratings.character_superman.deviance": number;
    /**
     *
     * 1673154883300
     *
     * 1664421998307
     *
     * 1659265474880
     *
     */
    "server_data.2v2shuffle.0.ratings.character_superman.lastUpdateTimestamp": number;
    /**
     *
     * 570.0874577681508
     *
     * 625.5690985637319
     *
     * 655.6348928120905
     *
     */
    "server_data.2v2shuffle.0.ratings.character_superman.mean": number;
    /**
     *
     * 1
     *
     * -2
     *
     */
    "server_data.2v2shuffle.0.ratings.character_superman.streak": number;
    /**
     *
     * 0.4845182899793799
     *
     */
    "server_data.2v2shuffle.0.ratings.character_taz.confidence": number;
    /**
     *
     * 117.78281060092267
     *
     */
    "server_data.2v2shuffle.0.ratings.character_taz.deviance": number;
    /**
     *
     * 1665639874123
     *
     */
    "server_data.2v2shuffle.0.ratings.character_taz.lastUpdateTimestamp": number;
    /**
     *
     * 185.57529102807052
     *
     */
    "server_data.2v2shuffle.0.ratings.character_taz.mean": number;
    /**
     *
     * 1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_taz.streak": number;
    /**
     *
     * 0.6261495443659335
     *
     * 0.4841969424884704
     *
     */
    "server_data.2v2shuffle.0.ratings.character_wonder_woman.confidence": number;
    /**
     *
     * 109.83740245440667
     *
     * 154.37852363072378
     *
     */
    "server_data.2v2shuffle.0.ratings.character_wonder_woman.deviance": number;
    /**
     *
     * 1664193798514
     *
     * 1661470843387
     *
     */
    "server_data.2v2shuffle.0.ratings.character_wonder_woman.lastUpdateTimestamp": number;
    /**
     *
     * 826.8175200851674
     *
     * 846.6841670470375
     *
     */
    "server_data.2v2shuffle.0.ratings.character_wonder_woman.mean": number;
    /**
     *
     * -5
     *
     * -3
     *
     */
    "server_data.2v2shuffle.0.ratings.character_wonder_woman.streak": number;
    /**
     *
     * character_batman
     *
     * character_creature
     *
     * character_steven
     *
     * character_c16
     *
     */
    "server_data.2v2shuffle.0.topRating.character": string;
    /**
     *
     * 0.27800190179577094
     *
     * 0.30000000000000004
     *
     * 0.8634268874075863
     *
     * 0.1488525847445358
     *
     */
    "server_data.2v2shuffle.0.topRating.confidence": number;
    /**
     *
     * 605.4331075600627
     *
     * 172.56500043640415
     *
     * 127.02514215045436
     *
     * 763.4929110693415
     *
     */
    "server_data.2v2shuffle.0.topRating.deviance": number;
    /**
     *
     * 1680887527691
     *
     * 1658966215135
     *
     * 1659265152080
     *
     * 1676055661654
     *
     */
    "server_data.2v2shuffle.0.topRating.lastUpdateTimestamp": number;
    /**
     *
     * 1627.0093120872382
     *
     * 966.1932949020674
     *
     * 952.1423119523262
     *
     * 1687.9093514618942
     *
     */
    "server_data.2v2shuffle.0.topRating.mean": number;
    /**
     *
     * -2
     *
     * 1
     *
     * -1
     *
     */
    "server_data.2v2shuffle.0.topRating.streak": number;
    /**
     *
     * 6374291491f624d76458f500
     *
     * 6374054463dc2d9cde116f1f
     *
     * 63039a702e2f81b0d2612e04
     *
     * 6373e5f98ef63e1f3ab738b4
     *
     */
    "server_data.BattlepassID": string;
    /**
     *
     * 2025-03-06T06:59:08.000Z
     *
     * 2025-02-05T03:07:11.000Z
     *
     */
    "server_data.CasualQueue.Modes.2v2-CoOp.LastPickedDate": string;
    /**
     *
     * 1
     *
     * 98
     *
     */
    "server_data.CasualQueue.Modes.2v2-CoOp.LastPickedSeq": number;
    /**
     *
     * 1
     *
     * 98
     *
     */
    "server_data.CasualQueue.Modes.2v2-CoOp.TotalPicked": number;
    /**
     *
     * 1
     *
     * 98
     *
     */
    "server_data.CasualQueue.TotalGames": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_C018.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_C018.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_C020.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_C020.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_C021.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_C021.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_C023A.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_C023A.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_C023B.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_C023B.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_arya.ally_perk_sharing": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_batman.ally_perk_sharing": number;
    /**
     *
     * 2
     *
     */
    "server_data.Characters.character_batman.arcade_completion_1p": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_batman.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_bugs_bunny.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_bugs_bunny.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_c019.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_c019.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_superman.ally_perk_sharing": number;
    /**
     *
     * 0
     *
     */
    "server_data.CurrentXP": number;
    "server_data.HasReceivedBattlepassRewardFromOpenBeta": boolean;
    /**
     *
     * 1
     *
     */
    "server_data.Level": number;
    "server_data.MatchConfig.MultiqueueConfigs": {
      AllowDuplicateCharacters: boolean;
      AllowHazards: boolean;
      /**
       *
       * Matchmade
       *
       */
      Context: string;
      DisabledCharacters: any[];
      /**
       *
       * Versus
       *
       */
      GameModeAlias: string;
      /**
       *
       * 420
       *
       */
      MatchDuration: number;
      /**
       *
       * Unselected
       *
       */
      ModeDifficulty: string;
      MutatorData: any[];
      /**
       *
       * 4
       *
       * 2
       *
       */
      NumRingoutsForWin: number;
      /**
       *
       * Unranked
       *
       */
      QueueType: string;
      /**
       *
       * Duos
       *
       * Solos
       *
       */
      TeamStyle: string;
    }[];
    /**
     *
     * 26
     *
     * 8
     *
     */
    "server_data.NumOwnedBaseRosterFighters": number;
    /**
     *
     * 27
     *
     * 33
     *
     * 8
     *
     * 28
     *
     */
    "server_data.NumOwnedFighters": number;
    "server_data.OpenBeta": boolean;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C017.perk_general_evaderechargetime_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_C018_aim": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_C018_missiles": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_C018_redirect": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_electricprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_jumpspeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_projectiledamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_projectilegrayhealth": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_projectilespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_sniper": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_verticalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_wallbouncereduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_C020_meeseeks": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_C020_portal": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_C020_whip": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_general_abilitycooldownreduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_general_chargearmorbreak": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_general_dodgereflect": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_general_fastfall_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C020.perk_general_paintedtarget": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C021.perk_c021_lightning": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C021.perk_c021_shocked": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C021.perk_general_abilityrefundondebuffhit": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C021.perk_general_chargearmorbreak": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C021.perk_general_evaderechargetime_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C021.perk_general_laststand": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C021.perk_general_projectileblock": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_c023a_backpack": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_c023a_bounce": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_c023a_dance": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_general_aircontrol_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_general_backtoback": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_general_jumpcount": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_general_projectiledamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023A.perk_general_projectilespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_c023B_attach": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_c023B_dynamite": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_c023B_leap": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_general_dodgearmor": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_general_fastfall_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_general_fireprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_general_paintedtarget": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C023B.perk_general_sniper": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_arya.perk_arya_enrageallies": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_arya.perk_general_culltheweak": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_arya.perk_general_evadedistance_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_arya.perk_general_jumpheight_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_batman_bouncerang": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_batman_heavygrapple": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_abilityrefundondebuffhit": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_aircontrol_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_damageboostondebuffhit": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_evadedistanceonhitcancel": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_fastfall_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_fireprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_iceprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_knockoutbounce": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_batman.perk_general_verticalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_bugsbunny_lingeringlove": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_bugsbunny_shockwave": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_general_abilitycooldownreduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_general_aircontrol_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_general_collateraldamage": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_general_dodgearmor": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_general_jumpcount": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_general_movespeed_small": number;
    /**
     *
     * 2
     *
     */
    "server_data.OwnedPerks.character_bugs_bunny.perk_general_refreshingknockout": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_C019_cleaner": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_C019_cook": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_C019_hammer": number;
    /**
     *
     * 2
     *
     */
    "server_data.OwnedPerks.character_c019.perk_general_abilitycooldownreduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_general_abilityrefundondebuffhit": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_general_backtoback": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_general_chargearmorbreak": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_general_evadedistance_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c019.perk_general_projectiledamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_projectilespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_creature.perk_general_projectilespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_groundmeleedamageboost_small": number;
    /**
     *
     * 1
     *
     * 2
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_horizontalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_jumpspeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_harleyquinn.perk_general_jumpcount": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_harleyquinn.perk_general_verticalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_jake.perk_general_airmeleedamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_general_airmeleedamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_jumpcount": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_superman.perk_general_damagereduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_superman.perk_general_groundmeleedamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_superman.perk_general_jumpcount": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_taz.perk_general_horizontalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_wonder_woman.perk_general_damagereduction_small": number;
    /**
     *
     * 2025-03-10T00:00:00.000Z
     *
     * 2025-02-18T00:00:00.000Z
     *
     * 2025-03-09T00:00:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.LastLoginDay": string;
    /**
     *
     * 14
     *
     * 25
     *
     * 32
     *
     * 26
     *
     * 1
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.NumDaysLoggedIn": number;
    /**
     *
     * 34
     *
     * 30
     *
     * 57
     *
     * 71
     *
     * 66
     *
     * 49
     *
     * 1
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.NumLogins": number;
    /**
     *
     * character_batman
     *
     * character_C017
     *
     * character_Jason
     *
     * character_tom_and_jerry
     *
     * character_C026
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug": string;
    /**
     *
     * 0
     *
     * 2142
     *
     * 3015
     *
     * 1946
     *
     * 102
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.CurrentPoints": number;
    /**
     *
     * 4
     *
     * 451
     *
     * 805
     *
     * 73
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.GamesPlayed": number;
    /**
     *
     * 2025-03-05T04:21:02.000Z
     *
     * 2025-02-04T17:51:04.000Z
     *
     * 2025-02-04T19:33:27.000Z
     *
     * 2025-02-21T17:52:10.000Z
     *
     * 2025-03-03T10:09:31.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     * 2185
     *
     * 3017
     *
     * 1946
     *
     * 102
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.MaxPoints": number;
    /**
     *
     * 2
     *
     * 201
     *
     * 367
     *
     * 37
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.SetsPlayed": number;
    /**
     *
     * 0
     *
     * 15
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.CurrentPoints": number;
    /**
     *
     * 1264
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.DamageDealt": number;
    /**
     *
     * 1526
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.DamageTaken": number;
    /**
     *
     * 10
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Deaths": number;
    /**
     *
     * 4
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.LastDecayMs": number;
    /**
     *
     * 2025-03-05T04:27:00.000Z
     *
     * 2025-02-04T17:51:04.000Z
     *
     * 2025-02-04T19:33:27.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.LastUpdateTimestamp": string;
    /**
     *
     * 1
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Losses": number;
    /**
     *
     * 0
     *
     * 15
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.MaxPoints": number;
    /**
     *
     * 8
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Ringouts": number;
    /**
     *
     * 2
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Wins": number;
    /**
     *
     * 4
     *
     * 457
     *
     * 1170
     *
     * 76
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.GamesPlayed": number;
    /**
     *
     * 2025-03-05T04:27:00.000Z
     *
     * 2025-02-18T21:34:12.000Z
     *
     * 2025-03-07T21:24:18.000Z
     *
     * 2025-03-08T23:47:04.000Z
     *
     * 2025-03-03T12:19:41.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.LastUpdateTimestamp": string;
    /**
     *
     * 2
     *
     * 204
     *
     * 547
     *
     * 39
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.SetsPlayed": number;
    /**
     *
     * 130730
     *
     * 405670
     *
     * 3825
     *
     * 148235
     *
     */
    "server_data.TotalPrestige": number;
    "server_data.Transforms.currency_conversion_errored.Version_1": boolean;
    "server_data.Transforms.currency_conversion_errored.Version_2": boolean;
    "server_data.Transforms.currency_conversion_errored.Version_3": boolean;
    "server_data.Transforms.welcome_back": boolean;
    /**
     *
     * 3
     *
     */
    "server_data.arcade.continues": number;
    /**
     *
     * Normal
     *
     */
    "server_data.arcade.difficulty": string;
    /**
     *
     * 7
     *
     * 6
     *
     */
    "server_data.arcade.stage": number;
    /**
     *
     * battlepass_season_one
     *
     */
    "server_data.archived_battlepasses.battlepass_season_one.ConfigSlug": string;
    /**
     *
     * 10
     *
     * 3
     *
     * 12
     *
     */
    "server_data.archived_battlepasses.battlepass_season_one.CurrentTier": number;
    /**
     *
     * 680
     *
     * 73
     *
     * 430
     *
     * 835
     *
     */
    "server_data.archived_battlepasses.battlepass_season_one.CurrentXP": number;
    "server_data.archived_battlepasses.battlepass_season_one.IsPremium": boolean;
    /**
     *
     * battlepass_season_two
     *
     */
    "server_data.archived_battlepasses.battlepass_season_two.ConfigSlug": string;
    /**
     *
     * 51
     *
     * 35
     *
     */
    "server_data.archived_battlepasses.battlepass_season_two.CurrentTier": number;
    /**
     *
     * 13629
     *
     * 460
     *
     * 21090
     *
     */
    "server_data.archived_battlepasses.battlepass_season_two.CurrentXP": number;
    "server_data.archived_battlepasses.battlepass_season_two.IsPremium": boolean;
    "server_data.checked_grants.s2_extension_make_good_boost": boolean;
    "server_data.closed_alpha_battlepass_complete": boolean;
    /**
     *
     * 0
     *
     */
    "server_data.debug_all_unlocked": number;
    /**
     *
     * mvs_store_fighter_affinity_personalization_Exp1-arm_1
     *
     * MVS_Store_Organization_Experiment-control
     *
     */
    "server_data.exm_segment_membership.exm_experiment_arm_map.c1d4f47a7142ca69befe0a61ed2ed0ff": string;
    "server_data.exm_segment_membership.exm_experiment_segments": string[];
    "server_data.exm_segment_membership.exm_global_segments": string[];
    /**
     *
     * 0.4347579209515465
     *
     * 0.19166085367042007
     *
     */
    "server_data.ffashuffle.0.ratings.all.confidence": number;
    /**
     *
     * 159.73255289642077
     *
     * 163.58800918789237
     *
     */
    "server_data.ffashuffle.0.ratings.all.deviance": number;
    /**
     *
     * 1664051533497
     *
     * 1667876655504
     *
     */
    "server_data.ffashuffle.0.ratings.all.lastUpdateTimestamp": number;
    /**
     *
     * 971.0203677935541
     *
     * 484.9511493490682
     *
     */
    "server_data.ffashuffle.0.ratings.all.mean": number;
    "server_data.ffashuffle.0.ratings.all.streak": {};
    /**
     *
     * 0.3999738429646253
     *
     */
    "server_data.ffashuffle.0.ratings.character_batman.confidence": number;
    /**
     *
     * 172.0756213082325
     *
     */
    "server_data.ffashuffle.0.ratings.character_batman.deviance": number;
    /**
     *
     * 1664051533306
     *
     */
    "server_data.ffashuffle.0.ratings.character_batman.lastUpdateTimestamp": number;
    /**
     *
     * 704.9195745175299
     *
     */
    "server_data.ffashuffle.0.ratings.character_batman.mean": number;
    "server_data.ffashuffle.0.ratings.character_batman.streak": {};
    /**
     *
     * character_bugs_bunny
     *
     */
    "server_data.ffashuffle.0.ratings.character_bugs_bunny.character": string;
    /**
     *
     * 0.13333333333333333
     *
     */
    "server_data.ffashuffle.0.ratings.character_bugs_bunny.confidence": number;
    /**
     *
     * 197.01816928829518
     *
     */
    "server_data.ffashuffle.0.ratings.character_bugs_bunny.deviance": number;
    /**
     *
     * 1660448922072
     *
     */
    "server_data.ffashuffle.0.ratings.character_bugs_bunny.lastUpdateTimestamp": number;
    /**
     *
     * 998.0848760060301
     *
     */
    "server_data.ffashuffle.0.ratings.character_bugs_bunny.mean": number;
    "server_data.ffashuffle.0.ratings.character_bugs_bunny.streak": {};
    /**
     *
     * character_bugs_bunny
     *
     * character_finn
     *
     */
    "server_data.ffashuffle.0.topRating.character": string;
    /**
     *
     * 0.13333333333333333
     *
     * 0.1798192433683036
     *
     */
    "server_data.ffashuffle.0.topRating.confidence": number;
    /**
     *
     * 197.01816928829518
     *
     * 192.4114150498572
     *
     */
    "server_data.ffashuffle.0.topRating.deviance": number;
    /**
     *
     * 1660448922072
     *
     * 1658986326103
     *
     */
    "server_data.ffashuffle.0.topRating.lastUpdateTimestamp": number;
    /**
     *
     * 998.0848760060301
     *
     * 998.3721815600662
     *
     */
    "server_data.ffashuffle.0.topRating.mean": number;
    "server_data.ffashuffle.0.topRating.streak": {};
    /**
     *
     * eDONE
     *
     */
    "server_data.ftue.current_ftue_step": string;
    /**
     *
     * 574295
     *
     * 137465
     *
     * 32863
     *
     * 1545799
     *
     */
    "server_data.lifetime_damage": number;
    /**
     *
     * 3462
     *
     * 885
     *
     * 176
     *
     * 11219
     *
     */
    "server_data.lifetime_ringouts": number;
    /**
     *
     * 0
     *
     * 1
     *
     */
    "server_data.loss_streak": number;
    /**
     *
     * 2480
     *
     * 647
     *
     * 152
     *
     * 7277
     *
     */
    "server_data.matches_played": number;
    /**
     *
     * 1
     *
     */
    "server_data.s2_extension_make_good_boost": number;
    /**
     *
     * 1643
     *
     * 388
     *
     * 81
     *
     * 4070
     *
     */
    "server_data.sets_played": number;
    /**
     *
     * 0.1
     *
     */
    "server_data.shuffle.0.ratings.character_batman.confidence": number;
    /**
     *
     * 202.7342028737853
     *
     */
    "server_data.shuffle.0.ratings.character_batman.deviance": number;
    /**
     *
     * 1664745075626
     *
     */
    "server_data.shuffle.0.ratings.character_batman.lastUpdateTimestamp": number;
    /**
     *
     * 964.4420277179332
     *
     */
    "server_data.shuffle.0.ratings.character_batman.mean": number;
    /**
     *
     * -5
     *
     */
    "server_data.shuffle.0.ratings.character_batman.streak": number;
    /**
     *
     * 527
     *
     * 11818
     *
     * 478
     *
     * 557
     *
     */
    "server_data.stat_trackers.HighestDamageDealt": number;
    /**
     *
     * 18520
     *
     * 3030
     *
     * 42315
     *
     */
    "server_data.stat_trackers.Holiday2022": number;
    /**
     *
     * 15763
     *
     * 5673
     *
     * 734
     *
     * 31218
     *
     */
    "server_data.stat_trackers.OpenBetaGold": number;
    /**
     *
     * 1491
     *
     * 1678
     *
     * 18
     *
     * 374
     *
     */
    "server_data.stat_trackers.TotalAssists": number;
    /**
     *
     * 10488
     *
     * 7853
     *
     * 385
     *
     * 64044
     *
     */
    "server_data.stat_trackers.TotalAttacksDodged": number;
    /**
     *
     * 162
     *
     * 201
     *
     * 3
     *
     * 65
     *
     */
    "server_data.stat_trackers.TotalDoubleRingouts": number;
    /**
     *
     * 5
     *
     * 2
     *
     */
    "server_data.stat_trackers.TotalMaxedCharacters": number;
    /**
     *
     * 533
     *
     * 577
     *
     * 48
     *
     * 4240
     *
     */
    "server_data.stat_trackers.TotalRingoutLeader": number;
    /**
     *
     * 4197
     *
     * 11037
     *
     * 237
     *
     * 17634
     *
     */
    "server_data.stat_trackers.TotalRingouts": number;
    /**
     *
     * 286
     *
     * 1141
     *
     * 4
     *
     * 668
     *
     */
    "server_data.stat_trackers.TotalToastsGiven": number;
    /**
     *
     * 162
     *
     * 1171
     *
     * 4
     *
     * 487
     *
     */
    "server_data.stat_trackers.TotalToastsReceived": number;
    /**
     *
     * 1592
     *
     * 3105
     *
     * 79
     *
     * 5929
     *
     */
    "server_data.stat_trackers.TotalWins": number;
    /**
     *
     * 7305
     *
     * 380
     *
     * 24415
     *
     */
    "server_data.stat_trackers.Valentines2023Currency": number;
    /**
     *
     * 221.99293518066406
     *
     * 3911
     *
     * 393.5179138183594
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 488
     *
     * 1896
     *
     * 405
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C018": number;
    /**
     *
     * 425
     *
     * 1500
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C025": number;
    /**
     *
     * 379
     *
     * 11818
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C026": number;
    /**
     *
     * 179.559814453125
     *
     * 2277
     *
     * 131
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C028": number;
    /**
     *
     * 527
     *
     * 1251
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_batman": number;
    /**
     *
     * 102.4437484741211
     *
     * 916
     *
     * 100.41256713867188
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_finn": number;
    /**
     *
     * 125.53961181640625
     *
     * 890.4603881835938
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 102.5999984741211
     *
     * 2485
     *
     * 90.82949829101562
     *
     * 537.9437255859375
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_shaggy": number;
    /**
     *
     * 18
     *
     * 2706
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_superman": number;
    /**
     *
     * 2
     *
     * 158
     *
     * 6
     *
     */
    "server_data.stat_trackers.character_matches.character_BananaGuard": number;
    /**
     *
     * 104
     *
     * 99
     *
     */
    "server_data.stat_trackers.character_matches.character_C025": number;
    /**
     *
     * 1
     *
     * 649
     *
     */
    "server_data.stat_trackers.character_matches.character_C026": number;
    /**
     *
     * 27
     *
     * 71
     *
     * 46
     *
     */
    "server_data.stat_trackers.character_matches.character_C028": number;
    /**
     *
     * 409
     *
     * 179
     *
     */
    "server_data.stat_trackers.character_matches.character_batman": number;
    /**
     *
     * 2
     *
     * 38
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_matches.character_finn": number;
    /**
     *
     * 2
     *
     * 214
     *
     */
    "server_data.stat_trackers.character_matches.character_harleyquinn": number;
    /**
     *
     * 2
     *
     * 188
     *
     * 3
     *
     * 1879
     *
     */
    "server_data.stat_trackers.character_matches.character_shaggy": number;
    /**
     *
     * 4
     *
     * 398
     *
     * 16
     *
     */
    "server_data.stat_trackers.character_ringouts.character_BananaGuard": number;
    /**
     *
     * 17
     *
     * 222
     *
     * 459
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C018": number;
    /**
     *
     * 168
     *
     * 193
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C025": number;
    /**
     *
     * 2
     *
     * 1209
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C026": number;
    /**
     *
     * 40
     *
     * 172
     *
     * 5
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C028": number;
    /**
     *
     * 1415
     *
     * 366
     *
     */
    "server_data.stat_trackers.character_ringouts.character_batman": number;
    /**
     *
     * 3
     *
     * 74
     *
     * 4
     *
     */
    "server_data.stat_trackers.character_ringouts.character_finn": number;
    /**
     *
     * 2
     *
     * 433
     *
     */
    "server_data.stat_trackers.character_ringouts.character_harleyquinn": number;
    /**
     *
     * 1
     *
     * 426
     *
     * 4729
     *
     */
    "server_data.stat_trackers.character_ringouts.character_shaggy": number;
    /**
     *
     * 7
     *
     * 245
     *
     */
    "server_data.stat_trackers.character_ringouts.character_superman": number;
    /**
     *
     * 382.3572235107422
     *
     * 51347.49677276611
     *
     * 1735.5911560058594
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 14908
     *
     * 24001.90181159973
     *
     * 96189
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C018": number;
    /**
     *
     * 21985
     *
     * 25871
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C025": number;
    /**
     *
     * 379
     *
     * 157532.79905176163
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C026": number;
    /**
     *
     * 2858.2413063049316
     *
     * 19679.80599975586
     *
     * 250
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C028": number;
    /**
     *
     * 199455.29941940308
     *
     * 44209
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_batman": number;
    /**
     *
     * 187.02687072753906
     *
     * 9474.679672241211
     *
     * 152.41256713867188
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_finn": number;
    /**
     *
     * 125.53961181640625
     *
     * 46151.45067739487
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 163.37150192260742
     *
     * 56759.60651779175
     *
     * 248.3873291015625
     *
     * 467714.9563202858
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_shaggy": number;
    /**
     *
     * 569
     *
     * 28977.293258666992
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_superman": number;
    /**
     *
     * 2
     *
     * 88
     *
     * 5
     *
     */
    "server_data.stat_trackers.character_wins.character_BananaGuard": number;
    /**
     *
     * 1
     *
     * 28
     *
     */
    "server_data.stat_trackers.character_wins.character_C017": number;
    /**
     *
     * 52
     *
     * 59
     *
     * 344
     *
     */
    "server_data.stat_trackers.character_wins.character_C018": number;
    /**
     *
     * 133
     *
     * 36
     *
     */
    "server_data.stat_trackers.character_wins.character_C020": number;
    /**
     *
     * 42
     *
     * 24
     *
     * 4
     *
     */
    "server_data.stat_trackers.character_wins.character_C021": number;
    /**
     *
     * 32
     *
     * 8
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_wins.character_C023A": number;
    /**
     *
     * 51
     *
     * 5
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_wins.character_C023B": number;
    /**
     *
     * 46
     *
     * 68
     *
     */
    "server_data.stat_trackers.character_wins.character_C025": number;
    /**
     *
     * 1
     *
     * 376
     *
     */
    "server_data.stat_trackers.character_wins.character_C026": number;
    /**
     *
     * 14
     *
     * 44
     *
     * 3
     *
     */
    "server_data.stat_trackers.character_wins.character_C028": number;
    /**
     *
     * 8
     *
     * 4
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_wins.character_arya": number;
    /**
     *
     * 1092
     *
     * 110
     *
     */
    "server_data.stat_trackers.character_wins.character_batman": number;
    /**
     *
     * 39
     *
     * 146
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_wins.character_bugs_bunny": number;
    /**
     *
     * 54
     *
     * 16
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_wins.character_c019": number;
    /**
     *
     * 1
     *
     * 41
     *
     * 4189
     *
     */
    "server_data.stat_trackers.character_wins.character_c16": number;
    /**
     *
     * 1
     *
     * 39
     *
     * 3
     *
     */
    "server_data.stat_trackers.character_wins.character_creature": number;
    /**
     *
     * 2
     *
     * 28
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_wins.character_finn": number;
    /**
     *
     * 4
     *
     * 375
     *
     * 15
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_wins.character_garnet": number;
    /**
     *
     * 3
     *
     * 117
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_wins.character_harleyquinn": number;
    /**
     *
     * 2
     *
     * 192
     *
     * 3
     *
     * 1165
     *
     */
    "server_data.stat_trackers.character_wins.character_shaggy": number;
    /**
     *
     * 1
     *
     * 150
     *
     * 28
     *
     */
    "server_data.stat_trackers.character_wins.character_steven": number;
    /**
     *
     * 11
     *
     * 78
     *
     * 17
     *
     */
    "server_data.stat_trackers.character_wins.character_superman": number;
    /**
     *
     * 1
     *
     * 2
     *
     */
    "server_data.stat_trackers.leaderboard.arena.pvpevent.top10finish": number;
    /**
     *
     * 1
     *
     * 2
     *
     */
    "server_data.stat_trackers.leaderboard.arena.pvpevent.top5finish": number;
    /**
     *
     * 408.41351318359375
     *
     * 414.9226989746094
     *
     * 446.610107421875
     *
     * 537.9437255859375
     *
     */
    "server_data.stat_trackers.season1.HighestDamageDealt": number;
    /**
     *
     * 645
     *
     * 394
     *
     * 31
     *
     * 13027
     *
     */
    "server_data.stat_trackers.season1.TotalAttacksDodged": number;
    /**
     *
     * 574
     *
     * 1382
     *
     * 48
     *
     * 5596
     *
     */
    "server_data.stat_trackers.season1.TotalRingouts": number;
    /**
     *
     * 213
     *
     * 376
     *
     * 15
     *
     * 1350
     *
     */
    "server_data.stat_trackers.season1.TotalWins": number;
    /**
     *
     * 221.99293518066406
     *
     * 344.4125671386719
     *
     * 393.5179138183594
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 179.559814453125
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_C028": number;
    /**
     *
     * 408.41351318359375
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_batman": number;
    /**
     *
     * 102.4437484741211
     *
     * 206.27980041503906
     *
     * 100.41256713867188
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_finn": number;
    /**
     *
     * 125.53961181640625
     *
     * 335.57672119140625
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 102.5999984741211
     *
     * 414.4635009765625
     *
     * 90.82949829101562
     *
     * 537.9437255859375
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_shaggy": number;
    /**
     *
     * 2
     *
     * 37
     *
     * 6
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_BananaGuard": number;
    /**
     *
     * 27
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_C028": number;
    /**
     *
     * 279
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_batman": number;
    /**
     *
     * 2
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_finn": number;
    /**
     *
     * 2
     *
     * 47
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_harleyquinn": number;
    /**
     *
     * 2
     *
     * 91
     *
     * 3
     *
     * 1795
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_shaggy": number;
    /**
     *
     * 4
     *
     * 65
     *
     * 16
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_BananaGuard": number;
    /**
     *
     * 40
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_C028": number;
    /**
     *
     * 524
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_batman": number;
    /**
     *
     * 3
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_finn": number;
    /**
     *
     * 2
     *
     * 92
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_harleyquinn": number;
    /**
     *
     * 1
     *
     * 165
     *
     * 4506
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_shaggy": number;
    /**
     *
     * 382.3572235107422
     *
     * 6648.102584838867
     *
     * 1735.5911560058594
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 2858.2413063049316
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_C028": number;
    /**
     *
     * 50425.299419403076
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_batman": number;
    /**
     *
     * 187.02687072753906
     *
     * 206.27980041503906
     *
     * 100.41256713867188
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_finn": number;
    /**
     *
     * 125.53961181640625
     *
     * 7691.27597284317
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 163.37150192260742
     *
     * 17699.66485977173
     *
     * 248.3873291015625
     *
     * 446384.0819916725
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_shaggy": number;
    /**
     *
     * 2
     *
     * 18
     *
     * 5
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_BananaGuard": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_C028": number;
    /**
     *
     * 191
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_batman": number;
    /**
     *
     * 2
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_finn": number;
    /**
     *
     * 2
     *
     * 27
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_harleyquinn": number;
    /**
     *
     * 2
     *
     * 42
     *
     * 3
     *
     * 1112
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_shaggy": number;
    /**
     *
     * 1
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.leaderboard.arena.pvpevent.top10finish": number;
    /**
     *
     * 1
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.leaderboard.arena.pvpevent.top5finish": number;
    /**
     *
     * 1
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.rifts.BossNodesDefeated": number;
    /**
     *
     * 527
     *
     * 4244
     *
     * 415
     *
     * 185
     *
     */
    "server_data.stat_trackers.season5.HighestDamageDealt": number;
    /**
     *
     * 245
     *
     * 102
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.TotalAssists": number;
    /**
     *
     * 1202
     *
     * 1003
     *
     * 9
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.TotalAttacksDodged": number;
    /**
     *
     * 5
     *
     * 16
     *
     */
    "server_data.stat_trackers.season5.TotalDoubleRingouts": number;
    /**
     *
     * 56
     *
     * 18
     *
     */
    "server_data.stat_trackers.season5.TotalRingoutLeader": number;
    /**
     *
     * 353
     *
     * 654
     *
     * 10
     *
     */
    "server_data.stat_trackers.season5.TotalRingouts": number;
    /**
     *
     * 106
     *
     * 177
     *
     * 2
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.TotalWins": number;
    /**
     *
     * 425
     *
     * 166
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C025": number;
    /**
     *
     * 379
     *
     * 586
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C026": number;
    /**
     *
     * 527
     *
     * 381
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_batman": number;
    /**
     *
     * 104
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C025": number;
    /**
     *
     * 1
     *
     * 67
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C026": number;
    /**
     *
     * 130
     *
     * 4
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_batman": number;
    /**
     *
     * 168
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C025": number;
    /**
     *
     * 2
     *
     * 134
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C026": number;
    /**
     *
     * 183
     *
     * 9
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_batman": number;
    /**
     *
     * 21985
     *
     * 166
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C025": number;
    /**
     *
     * 379
     *
     * 19975
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C026": number;
    /**
     *
     * 30862
     *
     * 1366
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_batman": number;
    /**
     *
     * 46
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C025": number;
    /**
     *
     * 1
     *
     * 43
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C026": number;
    /**
     *
     * 59
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_batman": number;
    /**
     *
     * 2025-03-10T04:38:03.000Z
     *
     * 2025-02-08T11:25:05.000Z
     *
     * 2025-02-18T21:34:19.000Z
     *
     * 2025-03-09T21:09:00.000Z
     *
     * 2025-03-10T07:23:39.000Z
     *
     * 2025-03-10T04:17:36.000Z
     *
     * 2025-03-10T15:56:32.000Z
     *
     * 2025-03-10T15:59:27.000Z
     *
     * 2025-03-10T16:04:00.000Z
     *
     * 2025-03-10T16:00:08.000Z
     *
     */
    updated_at: string;
    user_segments: string[];
    /**
     *
     * 2038
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.BestCharacter.CurrentPoints": number;
    /**
     *
     * 2038
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.BestCharacter.MaxPoints": number;
    /**
     *
     * 935
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.BestCharacter.GamesPlayed": number;
    /**
     *
     * 518
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.BestCharacter.SetsPlayed": number;
    /**
     *
     * character_C020
     *
     * character_C026
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.BestCharacter.CharacterSlug": string;
    /**
     *
     * 2024-09-17T00:18:18.000Z
     *
     * 2024-07-26T04:19:56.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 2038
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.CurrentPoints": number;
    /**
     *
     * 2038
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.MaxPoints": number;
    /**
     *
     * 932
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.GamesPlayed": number;
    /**
     *
     * 517
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.SetsPlayed": number;
    /**
     *
     * 297
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Wins": number;
    /**
     *
     * 297
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Losses": number;
    /**
     *
     * 140141
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.DamageDealt": number;
    /**
     *
     * 196790
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.DamageTaken": number;
    /**
     *
     * 1554
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Ringouts": number;
    /**
     *
     * 1257
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Deaths": number;
    /**
     *
     * 2024-09-15T19:47:18.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C020.LastDecayMs": number;
    /**
     *
     * 1847
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.CurrentPoints": number;
    /**
     *
     * 1865
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.MaxPoints": number;
    /**
     *
     * 387
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.GamesPlayed": number;
    /**
     *
     * 182
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.SetsPlayed": number;
    /**
     *
     * 106
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Wins": number;
    /**
     *
     * 107
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Losses": number;
    /**
     *
     * 70787
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.DamageDealt": number;
    /**
     *
     * 109245
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.DamageTaken": number;
    /**
     *
     * 778
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Ringouts": number;
    /**
     *
     * 686
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Deaths": number;
    /**
     *
     * 2024-09-14T00:02:15.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.LastDecayMs": number;
    /**
     *
     * 1601
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.CurrentPoints": number;
    /**
     *
     * 1633
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.MaxPoints": number;
    /**
     *
     * 305
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.GamesPlayed": number;
    /**
     *
     * 136
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.SetsPlayed": number;
    /**
     *
     * 73
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Wins": number;
    /**
     *
     * 74
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Losses": number;
    /**
     *
     * 47117
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.DamageDealt": number;
    /**
     *
     * 66651
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.DamageTaken": number;
    /**
     *
     * 574
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Ringouts": number;
    /**
     *
     * 441
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Deaths": number;
    /**
     *
     * 2024-09-16T23:35:22.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.LastDecayMs": number;
    /**
     *
     * 495
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.CurrentPoints": number;
    /**
     *
     * 495
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.MaxPoints": number;
    /**
     *
     * 38
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.GamesPlayed": number;
    /**
     *
     * 17
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.SetsPlayed": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Wins": number;
    /**
     *
     * 13
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Losses": number;
    /**
     *
     * 7719
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.DamageDealt": number;
    /**
     *
     * 8210
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.DamageTaken": number;
    /**
     *
     * 80
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Ringouts": number;
    /**
     *
     * 47
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Deaths": number;
    /**
     *
     * 2024-09-16T23:24:37.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.LastDecayMs": number;
    /**
     *
     * 2011
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.CurrentPoints": number;
    /**
     *
     * 2093
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.MaxPoints": number;
    /**
     *
     * 498
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.GamesPlayed": number;
    /**
     *
     * 231
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.SetsPlayed": number;
    /**
     *
     * 127
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Wins": number;
    /**
     *
     * 128
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Losses": number;
    /**
     *
     * 65372
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.DamageDealt": number;
    /**
     *
     * 107792
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.DamageTaken": number;
    /**
     *
     * 717
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Ringouts": number;
    /**
     *
     * 685
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Deaths": number;
    /**
     *
     * 2024-09-17T00:27:03.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_c019.LastDecayMs": number;
    /**
     *
     * 359
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.CurrentPoints": number;
    /**
     *
     * 359
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.MaxPoints": number;
    /**
     *
     * 29
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.GamesPlayed": number;
    /**
     *
     * 18
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.SetsPlayed": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Wins": number;
    /**
     *
     * 10
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Losses": number;
    /**
     *
     * 4732
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.DamageDealt": number;
    /**
     *
     * 6514
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.DamageTaken": number;
    /**
     *
     * 42
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Ringouts": number;
    /**
     *
     * 44
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Deaths": number;
    /**
     *
     * 2024-09-14T02:50:17.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C018.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.MaxPoints": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Losses": number;
    /**
     *
     * 897
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.DamageDealt": number;
    /**
     *
     * 1258
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.DamageTaken": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Ringouts": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Deaths": number;
    /**
     *
     * 2024-09-06T22:35:48.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.LastDecayMs": number;
    /**
     *
     * 120
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 120
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 1643
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 1765
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 17
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2024-09-14T01:10:30.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 2203
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.GamesPlayed": number;
    /**
     *
     * 2024-09-17T00:27:03.000Z
     *
     * 2024-08-09T03:34:39.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.LastUpdateTimestamp": string;
    /**
     *
     * 1107
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.SetsPlayed": number;
    /**
     *
     * 4923
     *
     * 381967
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.FinalLeaderboardRank": number;
    /**
     *
     * 613
     *
     * 42
     *
     * 1512
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.BestCharacter.CurrentPoints": number;
    /**
     *
     * 613
     *
     * 42
     *
     * 1528
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.BestCharacter.MaxPoints": number;
    /**
     *
     * 49
     *
     * 2
     *
     * 156
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.BestCharacter.GamesPlayed": number;
    /**
     *
     * 24
     *
     * 2
     *
     * 80
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.BestCharacter.SetsPlayed": number;
    /**
     *
     * character_bugs_bunny
     *
     * character_garnet
     *
     * character_Jason
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug": string;
    /**
     *
     * 2024-08-11T01:34:49.000Z
     *
     * 2024-09-12T01:28:19.000Z
     *
     * 2024-08-04T02:49:45.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 78
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.CurrentPoints": number;
    /**
     *
     * 78
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.MaxPoints": number;
    /**
     *
     * 10
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.GamesPlayed": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.SetsPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.Wins": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.Losses": number;
    /**
     *
     * 1988
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.DamageDealt": number;
    /**
     *
     * 3680
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.DamageTaken": number;
    /**
     *
     * 22
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.Ringouts": number;
    /**
     *
     * 27
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.Deaths": number;
    /**
     *
     * 2024-09-07T12:32:04.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C020.LastDecayMs": number;
    /**
     *
     * 116
     *
     * 20
     *
     * 1512
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.CurrentPoints": number;
    /**
     *
     * 116
     *
     * 20
     *
     * 1528
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.MaxPoints": number;
    /**
     *
     * 15
     *
     * 2
     *
     * 156
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.GamesPlayed": number;
    /**
     *
     * 11
     *
     * 2
     *
     * 80
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.SetsPlayed": number;
    /**
     *
     * 4
     *
     * 1
     *
     * 45
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Wins": number;
    /**
     *
     * 5
     *
     * 0
     *
     * 46
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Losses": number;
    /**
     *
     * 3371
     *
     * 504
     *
     * 36035
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.DamageDealt": number;
    /**
     *
     * 4908
     *
     * 810
     *
     * 44322
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.DamageTaken": number;
    /**
     *
     * 33
     *
     * 5
     *
     * 397
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Ringouts": number;
    /**
     *
     * 35
     *
     * 5
     *
     * 334
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Deaths": number;
    /**
     *
     * 2024-08-12T23:21:58.000Z
     *
     * 2024-07-28T07:49:37.000Z
     *
     * 2024-08-04T04:08:40.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.LastUpdateTimestamp": string;
    /**
     *
     * 21
     *
     * 40
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.CurrentPoints": number;
    /**
     *
     * 21
     *
     * 40
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.GamesPlayed": number;
    /**
     *
     * 2
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.Losses": number;
    /**
     *
     * 552
     *
     * 595
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.DamageDealt": number;
    /**
     *
     * 706
     *
     * 418
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.DamageTaken": number;
    /**
     *
     * 7
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.Ringouts": number;
    /**
     *
     * 4
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.Deaths": number;
    /**
     *
     * 2024-07-31T19:08:01.000Z
     *
     * 2024-08-27T04:30:33.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.LastUpdateTimestamp": string;
    /**
     *
     * 613
     *
     * 20
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.CurrentPoints": number;
    /**
     *
     * 613
     *
     * 20
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.MaxPoints": number;
    /**
     *
     * 49
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.GamesPlayed": number;
    /**
     *
     * 24
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.SetsPlayed": number;
    /**
     *
     * 15
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Wins": number;
    /**
     *
     * 14
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Losses": number;
    /**
     *
     * 8855
     *
     * 222
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.DamageDealt": number;
    /**
     *
     * 11792
     *
     * 256
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.DamageTaken": number;
    /**
     *
     * 107
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Ringouts": number;
    /**
     *
     * 103
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Deaths": number;
    /**
     *
     * 2024-09-10T18:37:49.000Z
     *
     * 2024-07-28T07:37:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.LastDecayMs": number;
    /**
     *
     * 40
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.CurrentPoints": number;
    /**
     *
     * 40
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.Losses": number;
    /**
     *
     * 308
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.DamageDealt": number;
    /**
     *
     * 246
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.DamageTaken": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.Ringouts": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.Deaths": number;
    /**
     *
     * 2024-09-10T12:27:10.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_c019.LastDecayMs": number;
    /**
     *
     * 78
     *
     * 22
     *
     * 240
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.GamesPlayed": number;
    /**
     *
     * 2024-09-10T18:37:49.000Z
     *
     * 2024-09-12T01:28:19.000Z
     *
     * 2024-08-04T04:08:40.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.LastUpdateTimestamp": string;
    /**
     *
     * 47
     *
     * 18
     *
     * 164
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.SetsPlayed": number;
    /**
     *
     * 61260
     *
     * 198617
     *
     * 18711
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.FinalLeaderboardRank": number;
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.ClaimedRewards": string[];
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.bEndOfSeasonRewardsGranted": boolean;
    /**
     *
     * 1084
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.CurrentPoints": number;
    /**
     *
     * 1090
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.MaxPoints": number;
    /**
     *
     * 10
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.GamesPlayed": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.SetsPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Wins": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Losses": number;
    /**
     *
     * 1508
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.DamageDealt": number;
    /**
     *
     * 2350
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.DamageTaken": number;
    /**
     *
     * 21
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Ringouts": number;
    /**
     *
     * 16
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.Deaths": number;
    /**
     *
     * 2024-09-26T05:52:06.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C020.LastDecayMs": number;
    /**
     *
     * 1021
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.CurrentPoints": number;
    /**
     *
     * 1045
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.MaxPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.GamesPlayed": number;
    /**
     *
     * 13
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.SetsPlayed": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Wins": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Losses": number;
    /**
     *
     * 6419
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.DamageDealt": number;
    /**
     *
     * 7854
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.DamageTaken": number;
    /**
     *
     * 61
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Ringouts": number;
    /**
     *
     * 47
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Deaths": number;
    /**
     *
     * 2024-10-28T03:30:53.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.LastDecayMs": number;
    /**
     *
     * 606
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.CurrentPoints": number;
    /**
     *
     * 626
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.MaxPoints": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Losses": number;
    /**
     *
     * 894
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.DamageDealt": number;
    /**
     *
     * 1346
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.DamageTaken": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Ringouts": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Deaths": number;
    /**
     *
     * 2024-09-29T03:06:57.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.LastDecayMs": number;
    /**
     *
     * 1949
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.CurrentPoints": number;
    /**
     *
     * 2022
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.MaxPoints": number;
    /**
     *
     * 202
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.GamesPlayed": number;
    /**
     *
     * 97
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.SetsPlayed": number;
    /**
     *
     * 62
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Wins": number;
    /**
     *
     * 63
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Losses": number;
    /**
     *
     * 30554
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.DamageDealt": number;
    /**
     *
     * 42669
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.DamageTaken": number;
    /**
     *
     * 295
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Ringouts": number;
    /**
     *
     * 255
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.Deaths": number;
    /**
     *
     * 2024-09-30T02:34:27.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_c019.LastDecayMs": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.MaxPoints": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Losses": number;
    /**
     *
     * 1000
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.DamageDealt": number;
    /**
     *
     * 1459
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.DamageTaken": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Ringouts": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.Deaths": number;
    /**
     *
     * 2024-09-22T02:20:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C018.LastDecayMs": number;
    /**
     *
     * 46
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.CurrentPoints": number;
    /**
     *
     * 46
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.MaxPoints": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Losses": number;
    /**
     *
     * 977
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.DamageDealt": number;
    /**
     *
     * 1791
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.DamageTaken": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Ringouts": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Deaths": number;
    /**
     *
     * 2024-09-26T05:31:57.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_jake.LastDecayMs": number;
    /**
     *
     * 722
     *
     * 77
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 722
     *
     * 77
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 33
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 14
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 10
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 9
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 4858
     *
     * 751
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 6876
     *
     * 1275
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 40
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 44
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2024-10-28T03:47:43.000Z
     *
     * 2024-11-12T07:20:13.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 69
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.CurrentPoints": number;
    /**
     *
     * 69
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.SetsPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Losses": number;
    /**
     *
     * 654
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.DamageDealt": number;
    /**
     *
     * 774
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.DamageTaken": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Ringouts": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Deaths": number;
    /**
     *
     * 2024-09-28T22:16:55.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.LastDecayMs": number;
    /**
     *
     * 763
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.CurrentPoints": number;
    /**
     *
     * 793
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.MaxPoints": number;
    /**
     *
     * 68
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.GamesPlayed": number;
    /**
     *
     * 33
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.SetsPlayed": number;
    /**
     *
     * 14
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.Wins": number;
    /**
     *
     * 15
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.Losses": number;
    /**
     *
     * 11621
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.DamageDealt": number;
    /**
     *
     * 15529
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.DamageTaken": number;
    /**
     *
     * 87
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.Ringouts": number;
    /**
     *
     * 100
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.Deaths": number;
    /**
     *
     * 2024-10-28T02:58:04.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_finn.LastDecayMs": number;
    /**
     *
     * 365
     *
     * 14
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.GamesPlayed": number;
    /**
     *
     * 172
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.SetsPlayed": number;
    /**
     *
     * 1949
     *
     * 90
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.BestCharacter.CurrentPoints": number;
    /**
     *
     * 2022
     *
     * 90
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.BestCharacter.MaxPoints": number;
    /**
     *
     * 204
     *
     * 11
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.BestCharacter.GamesPlayed": number;
    /**
     *
     * 98
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.BestCharacter.SetsPlayed": number;
    /**
     *
     * character_c019
     *
     * character_C026
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.BestCharacter.CharacterSlug": string;
    /**
     *
     * 2024-09-17T19:39:04.000Z
     *
     * 2024-11-12T03:10:15.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 2024-10-28T03:47:43.000Z
     *
     * 2024-11-12T07:20:13.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     * 90
     *
     * 512
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.BestCharacter.CurrentPoints": number;
    /**
     *
     * 0
     *
     * 90
     *
     * 512
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.BestCharacter.MaxPoints": number;
    /**
     *
     * 6
     *
     * 14
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.BestCharacter.GamesPlayed": number;
    /**
     *
     * 3
     *
     * 9
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.BestCharacter.SetsPlayed": number;
    /**
     *
     * character_finn
     *
     * character_tom_and_jerry
     *
     * character_Jason
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug": string;
    /**
     *
     * 2024-09-29T23:49:16.000Z
     *
     * 2024-11-12T02:26:56.000Z
     *
     * 2024-10-24T19:56:29.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.MaxPoints": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.Losses": number;
    /**
     *
     * 1173
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.DamageDealt": number;
    /**
     *
     * 2287
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.DamageTaken": number;
    /**
     *
     * 11
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.Ringouts": number;
    /**
     *
     * 17
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.Deaths": number;
    /**
     *
     * 2024-09-30T01:24:47.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_finn.LastDecayMs": number;
    /**
     *
     * 6
     *
     * 29
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.GamesPlayed": number;
    /**
     *
     * 2024-09-30T01:24:47.000Z
     *
     * 2024-11-12T03:02:49.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.LastUpdateTimestamp": string;
    /**
     *
     * 3
     *
     * 18
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.SetsPlayed": number;
    "server_data.SeasonalData.Season:SeasonThree.Ranked.ClaimedRewards": string[];
    /**
     *
     * 2024-06-22T19:10:38.000Z
     *
     * 2024-07-12T19:35:42.000Z
     *
     * 2024-08-18T05:50:52.000Z
     *
     */
    "inventory.character_C020.created_at": string;
    /**
     *
     * 300
     *
     * 350
     *
     * 1590
     *
     */
    "inventory.gleamium.count": number;
    "inventory.gleamium.created_at": {};
    /**
     *
     * 2024-08-08T23:43:34.000Z
     *
     * 2024-08-22T17:40:49.000Z
     *
     */
    "inventory.character_bugs_bunny.created_at": string;
    /**
     *
     * 2024-08-17T22:57:11.000Z
     *
     * 2024-11-16T18:53:17.000Z
     *
     * 2024-09-29T03:09:58.000Z
     *
     */
    "inventory.character_c019.created_at": string;
    /**
     *
     * 2024-08-18T04:17:50.000Z
     *
     * 2025-01-15T16:58:25.000Z
     *
     * 2024-11-09T23:19:29.000Z
     *
     * 2024-06-17T02:35:19.000Z
     *
     */
    "inventory.character_harleyquinn.created_at": string;
    /**
     *
     * 2024-08-28T05:43:16.000Z
     *
     * 2025-02-04T23:47:56.000Z
     *
     * 2024-10-13T12:31:39.000Z
     *
     */
    "inventory.character_C018.created_at": string;
    /**
     *
     * 2024-08-31T02:54:06.000Z
     *
     * 2024-11-19T22:13:37.000Z
     *
     * 2024-10-13T12:31:34.000Z
     *
     * 2024-08-21T08:19:36.000Z
     *
     */
    "inventory.character_finn.created_at": string;
    /**
     *
     * 2024-09-07T12:34:05.000Z
     *
     * 2024-11-12T19:21:50.000Z
     *
     * 2024-10-22T16:03:27.000Z
     *
     */
    "inventory.character_tom_and_jerry.created_at": string;
    /**
     *
     * 2024-09-26T05:05:45.000Z
     *
     * 2024-10-10T15:05:36.000Z
     *
     * 2025-02-05T05:23:51.000Z
     *
     * 2024-10-21T03:55:00.000Z
     *
     */
    "inventory.character_jake.created_at": string;
    /**
     *
     * 22
     *
     * 115
     *
     * 75
     *
     */
    "matches.rift_container_two_player.win": number;
    /**
     *
     * 1
     *
     * 5
     *
     * 7
     *
     */
    "matches.rift_container_two_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.rift_container_two_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.rift_container_two_player.challenge_loss": number;
    /**
     *
     * 3
     *
     * 47
     *
     * 6
     *
     */
    "matches.rift_container_two_player.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.rift_container_two_player.loss_streak": number;
    /**
     *
     * 19
     *
     * 68
     *
     * 27
     *
     */
    "matches.rift_container_two_player.longest_win_streak": number;
    /**
     *
     * 1
     *
     * 0
     *
     */
    "matches.rift_container_two_player.longest_loss_streak": number;
    /**
     *
     * current_value
     *
     */
    "aggregates.s3-battlepass-score.type_class": string;
    /**
     *
     * 58262
     *
     * 193230
     *
     * 273858
     *
     * 342527
     *
     * 90784
     *
     * 237707
     *
     */
    "aggregates.s3-battlepass-score.value": number;
    /**
     *
     * 2142
     *
     * 1000
     *
     * 1498
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.CurrentPoints": number;
    /**
     *
     * 2185
     *
     * 1000
     *
     * 1500
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.MaxPoints": number;
    /**
     *
     * 451
     *
     * 1
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.GamesPlayed": number;
    /**
     *
     * 201
     *
     * 1
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.SetsPlayed": number;
    /**
     *
     * 108
     *
     * 0
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Wins": number;
    /**
     *
     * 109
     *
     * 1
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Losses": number;
    /**
     *
     * 102175
     *
     * 194
     *
     * 792
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.DamageDealt": number;
    /**
     *
     * 168261
     *
     * 551
     *
     * 1362
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.DamageTaken": number;
    /**
     *
     * 1031
     *
     * 2
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Ringouts": number;
    /**
     *
     * 950
     *
     * 3
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Deaths": number;
    /**
     *
     * 2025-02-18T21:34:12.000Z
     *
     * 2025-02-15T11:54:08.000Z
     *
     * 2025-02-10T04:32:52.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C017.LastDecayMs": number;
    /**
     *
     * 102
     *
     * 3015
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.CurrentPoints": number;
    /**
     *
     * 102
     *
     * 3017
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.MaxPoints": number;
    /**
     *
     * 2
     *
     * 805
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.GamesPlayed": number;
    /**
     *
     * 1
     *
     * 367
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.SetsPlayed": number;
    /**
     *
     * 1
     *
     * 334
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Wins": number;
    /**
     *
     * 0
     *
     * 333
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Losses": number;
    /**
     *
     * 688
     *
     * 248900
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.DamageDealt": number;
    /**
     *
     * 635
     *
     * 211173
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.DamageTaken": number;
    /**
     *
     * 6
     *
     * 2229
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Ringouts": number;
    /**
     *
     * 3
     *
     * 1286
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Deaths": number;
    /**
     *
     * 2025-02-07T21:50:28.000Z
     *
     * 2025-03-07T21:24:18.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.LastDecayMs": number;
    /**
     *
     * 2115
     *
     * 1622
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.CurrentPoints": number;
    /**
     *
     * 2135
     *
     * 1622
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.MaxPoints": number;
    /**
     *
     * 78
     *
     * 16
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.GamesPlayed": number;
    /**
     *
     * 37
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.SetsPlayed": number;
    /**
     *
     * 28
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.Wins": number;
    /**
     *
     * 29
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.Losses": number;
    /**
     *
     * 14152
     *
     * 3141
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.DamageDealt": number;
    /**
     *
     * 21309
     *
     * 4797
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.DamageTaken": number;
    /**
     *
     * 158
     *
     * 27
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.Ringouts": number;
    /**
     *
     * 104
     *
     * 29
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.Deaths": number;
    /**
     *
     * 2025-02-16T14:56:58.000Z
     *
     * 2025-02-22T01:16:38.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C017.LastDecayMs": number;
    /**
     *
     * 78
     *
     * 0
     *
     * 1656
     *
     * 1489
     *
     * 10
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.GamesPlayed": number;
    /**
     *
     * 37
     *
     * 0
     *
     * 825
     *
     * 653
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.SetsPlayed": number;
    /**
     *
     * 2115
     *
     * 1500
     *
     * 4476
     *
     * 2730
     *
     * 45
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.CurrentPoints": number;
    /**
     *
     * 2135
     *
     * 1500
     *
     * 4476
     *
     * 2974
     *
     * 45
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.MaxPoints": number;
    /**
     *
     * 78
     *
     * 0
     *
     * 1621
     *
     * 1484
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.GamesPlayed": number;
    /**
     *
     * 37
     *
     * 1
     *
     * 808
     *
     * 651
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.SetsPlayed": number;
    /**
     *
     * character_C017
     *
     * character_Jason
     *
     * character_tom_and_jerry
     *
     * character_c036
     *
     * character_garnet
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.CharacterSlug": string;
    /**
     *
     * 2025-02-04T17:51:05.000Z
     *
     * 2025-02-04T19:33:29.000Z
     *
     * 2025-02-05T02:52:01.000Z
     *
     * 2025-02-04T18:08:58.000Z
     *
     * 2025-03-03T08:11:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 2025-02-16T14:56:58.000Z
     *
     * 2025-03-10T07:23:38.000Z
     *
     * 2025-03-10T04:17:33.000Z
     *
     * 2025-03-03T10:06:10.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.LastUpdateTimestamp": string;
    "server_data.SeasonalData.Season:SeasonFive.Ranked.ClaimedRewards": string[];
    /**
     *
     * 2024-05-31T16:50:55.000Z
     *
     * 2024-09-03T07:26:18.000Z
     *
     */
    "inventory.character_C021.created_at": string;
    /**
     *
     * 2024-08-22T17:40:49.000Z
     *
     * 2024-08-07T22:13:58.000Z
     *
     */
    "inventory.character_taz.created_at": string;
    /**
     *
     * 2024-08-22T17:42:54.000Z
     *
     * 2024-10-19T17:48:23.000Z
     *
     */
    "inventory.character_C023A.created_at": string;
    /**
     *
     * 2024-08-22T17:42:54.000Z
     *
     * 2024-11-07T01:42:00.000Z
     *
     */
    "inventory.character_C023B.created_at": string;
    /**
     *
     * 2024-11-14T14:06:54.000Z
     *
     * 2024-10-13T12:31:27.000Z
     *
     * 2024-07-10T23:05:00.000Z
     *
     */
    "inventory.character_garnet.created_at": string;
    /**
     *
     * 2024-11-14T19:42:10.000Z
     *
     * 2024-07-29T14:19:47.000Z
     *
     */
    "inventory.character_c16.created_at": string;
    /**
     *
     * 2024-11-23T01:23:00.000Z
     *
     * 2024-08-22T17:13:27.000Z
     *
     */
    "inventory.character_steven.created_at": string;
    /**
     *
     * 2024-12-18T16:39:16.000Z
     *
     * 2024-08-13T15:14:59.000Z
     *
     * 2024-07-31T17:47:25.000Z
     *
     */
    "inventory.character_velma.created_at": string;
    /**
     *
     * 2025-01-01T20:36:15.000Z
     *
     * 2024-07-21T11:44:16.000Z
     *
     * 2024-11-07T01:41:35.000Z
     *
     */
    "inventory.character_arya.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C031.count": number;
    /**
     *
     * 2025-02-06T21:47:36.000Z
     *
     * 2024-12-22T23:14:08.000Z
     *
     * 2024-12-21T04:07:43.000Z
     *
     * 2024-12-23T17:29:23.000Z
     *
     */
    "inventory.character_C031.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C027.count": number;
    /**
     *
     * 2025-02-06T21:47:40.000Z
     *
     * 2024-10-16T09:21:00.000Z
     *
     * 2024-10-19T00:08:53.000Z
     *
     * 2024-10-15T17:35:03.000Z
     *
     */
    "inventory.character_C027.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C030.count": number;
    /**
     *
     * 2025-02-06T21:47:46.000Z
     *
     * 2024-09-17T18:22:27.000Z
     *
     * 2024-09-17T22:41:09.000Z
     *
     * 2024-09-17T23:02:40.000Z
     *
     */
    "inventory.character_C030.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_c024.count": number;
    /**
     *
     * 2025-02-06T21:47:50.000Z
     *
     * 2024-08-24T14:16:07.000Z
     *
     * 2024-08-24T02:00:53.000Z
     *
     * 2024-11-29T03:43:22.000Z
     *
     * 2024-11-07T01:42:13.000Z
     *
     */
    "inventory.character_c024.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_C026.count": number;
    /**
     *
     * 2025-02-06T21:47:57.000Z
     *
     * 2024-07-24T08:22:52.000Z
     *
     * 2024-07-23T20:12:13.000Z
     *
     * 2024-07-25T17:33:58.000Z
     *
     * 2024-07-24T01:04:07.000Z
     *
     */
    "inventory.character_C026.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.character_c036.count": number;
    /**
     *
     * 2025-02-06T21:48:01.000Z
     *
     * 2024-07-25T10:45:14.000Z
     *
     * 2024-07-23T21:07:51.000Z
     *
     * 2024-10-08T18:58:52.000Z
     *
     * 2024-09-19T03:31:00.000Z
     *
     * 2024-07-24T01:04:22.000Z
     *
     */
    "inventory.character_c036.created_at": string;
    /**
     *
     * 17
     *
     * 138
     *
     * 233
     *
     * 145
     *
     * 7
     *
     * 0
     *
     */
    "matches.custom_container_four_player.win": number;
    /**
     *
     * 11
     *
     * 95
     *
     * 195
     *
     * 158
     *
     * 12
     *
     * 2
     *
     */
    "matches.custom_container_four_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_four_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_four_player.challenge_loss": number;
    /**
     *
     * 2
     *
     * 0
     *
     */
    "matches.custom_container_four_player.win_streak": number;
    /**
     *
     * 0
     *
     * 5
     *
     */
    "matches.custom_container_four_player.loss_streak": number;
    /**
     *
     * 8
     *
     * 10
     *
     * 14
     *
     * 2
     *
     * 0
     *
     */
    "matches.custom_container_four_player.longest_win_streak": number;
    /**
     *
     * 0
     *
     * 7
     *
     * 14
     *
     * 6
     *
     */
    "matches.custom_container_four_player.longest_loss_streak": number;
    /**
     *
     * 149
     *
     * 1595
     *
     * 493
     *
     * 236
     *
     * 43
     *
     * 3
     *
     * 129
     *
     * 130
     *
     */
    "matches.custom_container_two_player.win": number;
    /**
     *
     * 28
     *
     * 861
     *
     * 510
     *
     * 227
     *
     * 32
     *
     * 1
     *
     * 229
     *
     */
    "matches.custom_container_two_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_two_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_two_player.challenge_loss": number;
    /**
     *
     * 0
     *
     * 4
     *
     * 2
     *
     * 1
     *
     */
    "matches.custom_container_two_player.win_streak": number;
    /**
     *
     * 3
     *
     * 4
     *
     * 1
     *
     * 2
     *
     * 0
     *
     * 36
     *
     */
    "matches.custom_container_two_player.loss_streak": number;
    /**
     *
     * 51
     *
     * 38
     *
     * 14
     *
     * 10
     *
     * 2
     *
     * 12
     *
     */
    "matches.custom_container_two_player.longest_win_streak": number;
    /**
     *
     * 3
     *
     * 15
     *
     * 16
     *
     * 2
     *
     * 4
     *
     * 0
     *
     * 36
     *
     */
    "matches.custom_container_two_player.longest_loss_streak": number;
    /**
     *
     * 13
     *
     * 61
     *
     * 64
     *
     * 1
     *
     * 43
     *
     */
    "matches.ffa_container.win": number;
    /**
     *
     * 4
     *
     * 19
     *
     * 65
     *
     * 0
     *
     * 159
     *
     */
    "matches.ffa_container.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.ffa_container.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.ffa_container.challenge_loss": number;
    /**
     *
     * 7
     *
     * 0
     *
     * 1
     *
     */
    "matches.ffa_container.win_streak": number;
    /**
     *
     * 0
     *
     * 2
     *
     * 1
     *
     */
    "matches.ffa_container.loss_streak": number;
    /**
     *
     * 7
     *
     * 16
     *
     * 6
     *
     * 1
     *
     * 5
     *
     */
    "matches.ffa_container.longest_win_streak": number;
    /**
     *
     * 3
     *
     * 5
     *
     * 0
     *
     * 13
     *
     */
    "matches.ffa_container.longest_loss_streak": number;
    /**
     *
     * current_value
     *
     */
    "aggregates.s4-battlepass-score.type_class": string;
    /**
     *
     * 80639
     *
     * 137550
     *
     * 153372
     *
     * 73913
     *
     * 123617
     *
     */
    "aggregates.s4-battlepass-score.value": number;
    /**
     *
     * 70
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.CurrentPoints": number;
    /**
     *
     * 70
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Deaths": number;
    /**
     *
     * 2025-02-04T19:33:27.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.LastDecayMs": number;
    /**
     *
     * 504
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.CurrentPoints": number;
    /**
     *
     * 504
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.Deaths": number;
    /**
     *
     * 2025-02-04T19:33:27.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_c024.LastDecayMs": number;
    /**
     *
     * 2635
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.CurrentPoints": number;
    /**
     *
     * 2661
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.MaxPoints": number;
    /**
     *
     * 239
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.GamesPlayed": number;
    /**
     *
     * 115
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.SetsPlayed": number;
    /**
     *
     * 100
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Wins": number;
    /**
     *
     * 99
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Losses": number;
    /**
     *
     * 73978
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.DamageDealt": number;
    /**
     *
     * 61277
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.DamageTaken": number;
    /**
     *
     * 644
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Ringouts": number;
    /**
     *
     * 391
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Deaths": number;
    /**
     *
     * 2025-03-06T16:37:51.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.LastDecayMs": number;
    /**
     *
     * 178
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.CurrentPoints": number;
    /**
     *
     * 178
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Deaths": number;
    /**
     *
     * 2025-02-04T19:33:27.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_taz.LastDecayMs": number;
    /**
     *
     * 2127
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.CurrentPoints": number;
    /**
     *
     * 2127
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.MaxPoints": number;
    /**
     *
     * 89
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.GamesPlayed": number;
    /**
     *
     * 41
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.SetsPlayed": number;
    /**
     *
     * 33
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.Wins": number;
    /**
     *
     * 32
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.Losses": number;
    /**
     *
     * 28379
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.DamageDealt": number;
    /**
     *
     * 22577
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.DamageTaken": number;
    /**
     *
     * 236
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.Ringouts": number;
    /**
     *
     * 150
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.Deaths": number;
    /**
     *
     * 2025-03-06T21:02:22.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C027.LastDecayMs": number;
    /**
     *
     * 1229
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.CurrentPoints": number;
    /**
     *
     * 1229
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.MaxPoints": number;
    /**
     *
     * 27
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.GamesPlayed": number;
    /**
     *
     * 17
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.SetsPlayed": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.Wins": number;
    /**
     *
     * 11
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.Losses": number;
    /**
     *
     * 8490
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.DamageDealt": number;
    /**
     *
     * 6677
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.DamageTaken": number;
    /**
     *
     * 67
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.Ringouts": number;
    /**
     *
     * 47
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.Deaths": number;
    /**
     *
     * 2025-03-01T11:52:05.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_arya.LastDecayMs": number;
    /**
     *
     * 1000
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.CurrentPoints": number;
    /**
     *
     * 1000
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.Losses": number;
    /**
     *
     * 889
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.DamageDealt": number;
    /**
     *
     * 891
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.DamageTaken": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.Ringouts": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.Deaths": number;
    /**
     *
     * 2025-02-27T16:01:07.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_wonder_woman.LastDecayMs": number;
    /**
     *
     * 1016
     *
     * 124
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.CurrentPoints": number;
    /**
     *
     * 1019
     *
     * 124
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.MaxPoints": number;
    /**
     *
     * 4
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.GamesPlayed": number;
    /**
     *
     * 2
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.SetsPlayed": number;
    /**
     *
     * 1
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.Wins": number;
    /**
     *
     * 2
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.Losses": number;
    /**
     *
     * 1331
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.DamageDealt": number;
    /**
     *
     * 1144
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.DamageTaken": number;
    /**
     *
     * 9
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.Ringouts": number;
    /**
     *
     * 9
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.Deaths": number;
    /**
     *
     * 2025-02-16T15:17:31.000Z
     *
     * 2025-02-05T02:52:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_jake.LastDecayMs": number;
    /**
     *
     * 1028
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.CurrentPoints": number;
    /**
     *
     * 1028
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Losses": number;
    /**
     *
     * 738
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.DamageDealt": number;
    /**
     *
     * 633
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.DamageTaken": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Ringouts": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Deaths": number;
    /**
     *
     * 2025-03-04T18:11:26.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_velma.LastDecayMs": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.CharactersInMaster": number;
    /**
     *
     * 1500
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.CurrentPoints": number;
    /**
     *
     * 1500
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.Deaths": number;
    /**
     *
     * 2025-02-04T19:33:29.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_Jason.LastDecayMs": number;
    /**
     *
     * 130
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.CurrentPoints": number;
    /**
     *
     * 130
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.Deaths": number;
    /**
     *
     * 2025-02-04T19:33:29.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C027.LastDecayMs": number;
    /**
     *
     * 2024-10-03T07:26:42.000Z
     *
     * 2024-06-15T21:52:50.000Z
     *
     * 2024-10-12T00:50:07.000Z
     *
     */
    "inventory.character_batman.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.battlepass-season-3.count": number;
    /**
     *
     * 2024-09-17T18:22:27.000Z
     *
     * 2024-09-17T22:41:08.000Z
     *
     * 2024-09-17T23:02:39.000Z
     *
     */
    "inventory.battlepass-season-3.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.battlepass-season-2.count": number;
    /**
     *
     * 2024-07-24T08:22:51.000Z
     *
     * 2024-07-23T20:12:11.000Z
     *
     * 2024-07-25T17:33:56.000Z
     *
     * 2024-07-24T01:04:05.000Z
     *
     */
    "inventory.battlepass-season-2.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.battlepass-season-4.count": number;
    /**
     *
     * 2024-11-13T16:28:34.000Z
     *
     * 2024-11-21T10:44:03.000Z
     *
     * 2024-11-12T23:45:25.000Z
     *
     */
    "inventory.battlepass-season-4.created_at": string;
    /**
     *
     * 2024-11-13T16:47:23.000Z
     *
     * 2024-11-12T20:36:19.000Z
     *
     */
    "inventory.character_wonder_woman.created_at": string;
    /**
     *
     * 1
     *
     */
    "inventory.battlepass-plus-season-4_5.count": number;
    /**
     *
     * 2024-12-17T18:23:17.000Z
     *
     * 2024-12-17T20:48:53.000Z
     *
     * 2024-12-17T16:39:51.000Z
     *
     */
    "inventory.battlepass-plus-season-4_5.created_at": string;
    /**
     *
     * 43
     *
     * 255
     *
     * 32
     *
     */
    "matches.2v2-set.win": number;
    /**
     *
     * 34
     *
     * 159
     *
     * 42
     *
     */
    "matches.2v2-set.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2-set.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2-set.challenge_loss": number;
    /**
     *
     * 0
     *
     * 2
     *
     */
    "matches.2v2-set.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2-set.loss_streak": number;
    /**
     *
     * 9
     *
     * 15
     *
     */
    "matches.2v2-set.longest_win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.2v2-set.longest_loss_streak": number;
    /**
     *
     * 15
     *
     * 5
     *
     * 2
     *
     * 19
     *
     * 0
     *
     */
    "matches.custom_container_three_player.win": number;
    /**
     *
     * 5
     *
     * 7
     *
     * 13
     *
     * 29
     *
     * 1
     *
     */
    "matches.custom_container_three_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_three_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_three_player.challenge_loss": number;
    /**
     *
     * 0
     *
     * 2
     *
     * 3
     *
     */
    "matches.custom_container_three_player.win_streak": number;
    /**
     *
     * 2
     *
     * 0
     *
     */
    "matches.custom_container_three_player.loss_streak": number;
    /**
     *
     * 7
     *
     * 2
     *
     * 1
     *
     * 6
     *
     * 0
     *
     */
    "matches.custom_container_three_player.longest_win_streak": number;
    /**
     *
     * 2
     *
     * 4
     *
     * 0
     *
     */
    "matches.custom_container_three_player.longest_loss_streak": number;
    /**
     *
     * 47
     *
     * 409
     *
     * 0
     *
     * 17
     *
     */
    "matches.arena_container_four_player.win": number;
    /**
     *
     * 11
     *
     * 153
     *
     * 7
     *
     * 10
     *
     */
    "matches.arena_container_four_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_four_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_four_player.challenge_loss": number;
    /**
     *
     * 0
     *
     * 1
     *
     */
    "matches.arena_container_four_player.win_streak": number;
    /**
     *
     * 1
     *
     * 3
     *
     * 7
     *
     * 0
     *
     */
    "matches.arena_container_four_player.loss_streak": number;
    /**
     *
     * 24
     *
     * 37
     *
     * 0
     *
     * 8
     *
     */
    "matches.arena_container_four_player.longest_win_streak": number;
    /**
     *
     * 3
     *
     * 8
     *
     * 7
     *
     */
    "matches.arena_container_four_player.longest_loss_streak": number;
    /**
     *
     * 12
     *
     * 185
     *
     * 1
     *
     * 11
     *
     */
    "matches.arena_container_two_player.win": number;
    /**
     *
     * 0
     *
     * 5
     *
     * 1
     *
     * 2
     *
     */
    "matches.arena_container_two_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_two_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_two_player.challenge_loss": number;
    /**
     *
     * 12
     *
     * 50
     *
     * 0
     *
     */
    "matches.arena_container_two_player.win_streak": number;
    /**
     *
     * 0
     *
     * 1
     *
     */
    "matches.arena_container_two_player.loss_streak": number;
    /**
     *
     * 12
     *
     * 118
     *
     * 1
     *
     * 11
     *
     */
    "matches.arena_container_two_player.longest_win_streak": number;
    /**
     *
     * 0
     *
     * 4
     *
     * 1
     *
     */
    "matches.arena_container_two_player.longest_loss_streak": number;
    /**
     *
     * 4
     *
     * 28
     *
     * 3
     *
     */
    "matches.custom_container_one_player.win": number;
    /**
     *
     * 0
     *
     * 7
     *
     * 41
     *
     */
    "matches.custom_container_one_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player.challenge_loss": number;
    /**
     *
     * 4
     *
     * 3
     *
     * 0
     *
     */
    "matches.custom_container_one_player.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player.loss_streak": number;
    /**
     *
     * 4
     *
     * 13
     *
     * 1
     *
     */
    "matches.custom_container_one_player.longest_win_streak": number;
    /**
     *
     * 0
     *
     * 2
     *
     */
    "matches.custom_container_one_player.longest_loss_streak": number;
    /**
     *
     * 1946
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 1946
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 73
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 37
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 32
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 31
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 23125
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 16702
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 192
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 129
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2025-03-08T23:47:04.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 902
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.CurrentPoints": number;
    /**
     *
     * 902
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C030.LastDecayMs": number;
    /**
     *
     * 266
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.CurrentPoints": number;
    /**
     *
     * 266
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C021.LastDecayMs": number;
    /**
     *
     * 38
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.CurrentPoints": number;
    /**
     *
     * 38
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C023B.LastDecayMs": number;
    /**
     *
     * 4476
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 4476
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 1621
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 808
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 762
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 761
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 367923
     *
     * 953
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 225220
     *
     * 1440
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 2534
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 1287
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2025-03-10T07:23:38.000Z
     *
     * 2025-03-03T10:06:10.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 165
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.CurrentPoints": number;
    /**
     *
     * 165
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_velma.LastDecayMs": number;
    /**
     *
     * 49
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.CurrentPoints": number;
    /**
     *
     * 49
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_BananaGuard.LastDecayMs": number;
    /**
     *
     * 109
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.CurrentPoints": number;
    /**
     *
     * 109
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C028.LastDecayMs": number;
    /**
     *
     * 21
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.CurrentPoints": number;
    /**
     *
     * 21
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_bugs_bunny.LastDecayMs": number;
    /**
     *
     * 1745
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.CurrentPoints": number;
    /**
     *
     * 1745
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.MaxPoints": number;
    /**
     *
     * 19
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.GamesPlayed": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.SetsPlayed": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.Wins": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.Losses": number;
    /**
     *
     * 4937
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.DamageDealt": number;
    /**
     *
     * 2928
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.DamageTaken": number;
    /**
     *
     * 29
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.Ringouts": number;
    /**
     *
     * 17
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.Deaths": number;
    /**
     *
     * 2025-02-18T12:41:21.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C021.LastDecayMs": number;
    /**
     *
     * 31
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.CurrentPoints": number;
    /**
     *
     * 31
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_taz.LastDecayMs": number;
    /**
     *
     * 1500
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.CurrentPoints": number;
    /**
     *
     * 1500
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C030.LastDecayMs": number;
    /**
     *
     * 62
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.CurrentPoints": number;
    /**
     *
     * 62
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_shaggy.LastDecayMs": number;
    /**
     *
     * 37
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.CurrentPoints": number;
    /**
     *
     * 37
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.LastDecayMs": number;
    /**
     *
     * 260
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.CurrentPoints": number;
    /**
     *
     * 260
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_creature.LastDecayMs": number;
    /**
     *
     * 926
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.CurrentPoints": number;
    /**
     *
     * 926
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.Deaths": number;
    /**
     *
     * 2025-02-05T02:52:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_jake.LastDecayMs": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.CharactersInMaster": number;
    /**
     *
     * 20
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Arenas.DataByMode.Normal.A1.CurrentPoints": number;
    /**
     *
     * 82
     *
     * 2
     *
     */
    "matches.arena_container_three_player.win": number;
    /**
     *
     * 20
     *
     * 3
     *
     */
    "matches.arena_container_three_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_three_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_three_player.challenge_loss": number;
    /**
     *
     * 5
     *
     * 0
     *
     */
    "matches.arena_container_three_player.win_streak": number;
    /**
     *
     * 0
     *
     * 3
     *
     */
    "matches.arena_container_three_player.loss_streak": number;
    /**
     *
     * 21
     *
     * 2
     *
     */
    "matches.arena_container_three_player.longest_win_streak": number;
    /**
     *
     * 3
     *
     */
    "matches.arena_container_three_player.longest_loss_streak": number;
    /**
     *
     * 19
     *
     */
    "matches.arena_container_one_player.win": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_one_player.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_one_player.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_one_player.challenge_loss": number;
    /**
     *
     * 19
     *
     */
    "matches.arena_container_one_player.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_one_player.loss_streak": number;
    /**
     *
     * 19
     *
     */
    "matches.arena_container_one_player.longest_win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_one_player.longest_loss_streak": number;
    /**
     *
     * 4
     *
     */
    "matches.arena_container_parent.win": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_parent.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_parent.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_parent.challenge_loss": number;
    /**
     *
     * 4
     *
     */
    "matches.arena_container_parent.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_parent.loss_streak": number;
    /**
     *
     * 4
     *
     */
    "matches.arena_container_parent.longest_win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.arena_container_parent.longest_loss_streak": number;
    /**
     *
     * 1531
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.CurrentPoints": number;
    /**
     *
     * 1531
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.Losses": number;
    /**
     *
     * 609
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.DamageDealt": number;
    /**
     *
     * 734
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.DamageTaken": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.Ringouts": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.Deaths": number;
    /**
     *
     * 2025-02-08T23:30:37.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c16.LastDecayMs": number;
    /**
     *
     * 2730
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.CurrentPoints": number;
    /**
     *
     * 2974
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.MaxPoints": number;
    /**
     *
     * 1484
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.GamesPlayed": number;
    /**
     *
     * 651
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.SetsPlayed": number;
    /**
     *
     * 394
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.Wins": number;
    /**
     *
     * 395
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.Losses": number;
    /**
     *
     * 434527
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.DamageDealt": number;
    /**
     *
     * 374684
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.DamageTaken": number;
    /**
     *
     * 2152
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.Ringouts": number;
    /**
     *
     * 2136
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.Deaths": number;
    /**
     *
     * 2025-03-10T04:17:33.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c036.LastDecayMs": number;
    /**
     *
     * 187
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.CurrentPoints": number;
    /**
     *
     * 187
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Deaths": number;
    /**
     *
     * 2025-02-04T17:53:32.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_c024.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_velma.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_velma.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * 0
     *
     */
    "data.PerkPreferences.Characters.character_tom_and_jerry.LastSelectedPage": number;
    "data.PerkPreferences.Characters.character_tom_and_jerry.PerkPages": {
      /**
       *
       * CUSTOM 1
       *
       */
      PageName: string;
      PerkSlugs: string[];
    }[];
    /**
     *
     * Season:SeasonFive
     *
     */
    "data.MostRecentlyViewedCurrentRiftSeason": string;
    /**
     *
     * 45
     *
     */
    "server_data.stat_trackers.character_wins.character_wonder_woman": number;
    /**
     *
     * 39
     *
     * 9
     *
     * 7
     *
     */
    "server_data.stat_trackers.character_wins.character_velma": number;
    /**
     *
     * 279
     *
     */
    "server_data.stat_trackers.character_wins.character_tom_and_jerry": number;
    /**
     *
     * 138
     *
     * 173
     *
     */
    "server_data.stat_trackers.character_wins.character_Jason": number;
    /**
     *
     * 45
     *
     */
    "server_data.stat_trackers.character_wins.character_taz": number;
    /**
     *
     * 120
     *
     */
    "server_data.stat_trackers.character_wins.character_c036": number;
    /**
     *
     * 53
     *
     */
    "server_data.stat_trackers.character_wins.character_c024": number;
    /**
     *
     * 56
     *
     * 1
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_wins.character_jake": number;
    /**
     *
     * 154
     *
     */
    "server_data.stat_trackers.character_wins.character_C030": number;
    /**
     *
     * 50
     *
     */
    "server_data.stat_trackers.character_wins.character_C027": number;
    /**
     *
     * 53
     *
     */
    "server_data.stat_trackers.character_wins.character_C031": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.character_wins.character_C029": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.character_wins.character_c038": number;
    /**
     *
     * 907
     *
     * 18
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_garnet": number;
    /**
     *
     * 3173
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 2406
     *
     * 446.610107421875
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_steven": number;
    /**
     *
     * 435
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C021": number;
    /**
     *
     * 1027
     *
     * 204.1039276123047
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 517
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 512
     *
     * 463.63653564453125
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_c16": number;
    /**
     *
     * 4244
     *
     * 468.90625
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_Jason": number;
    /**
     *
     * 1006
     *
     * 76.77932739257812
     *
     * 320.9485168457031
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_velma": number;
    /**
     *
     * 3021
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_taz": number;
    /**
     *
     * 1774
     *
     * 89.44085693359375
     *
     * 18
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_c019": number;
    /**
     *
     * 2406
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C020": number;
    /**
     *
     * 1905
     *
     * 61.910457611083984
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C017": number;
    /**
     *
     * 979
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_c036": number;
    /**
     *
     * 1737
     *
     * 274.2230224609375
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C023A": number;
    /**
     *
     * 1715
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_c024": number;
    /**
     *
     * 2155
     *
     * 210.5901336669922
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_jake": number;
    /**
     *
     * 1675
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C030": number;
    /**
     *
     * 472
     *
     * 18
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_arya": number;
    /**
     *
     * 1361
     *
     * 18
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_creature": number;
    /**
     *
     * 1992
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C027": number;
    /**
     *
     * 431
     *
     * 18
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C023B": number;
    /**
     *
     * 747
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C031": number;
    /**
     *
     * 471
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_C029": number;
    /**
     *
     * 473
     *
     */
    "server_data.stat_trackers.character_highest_damage_dealt.character_c038": number;
    /**
     *
     * 849
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_ringouts.character_garnet": number;
    /**
     *
     * 998
     *
     */
    "server_data.stat_trackers.character_ringouts.character_tom_and_jerry": number;
    /**
     *
     * 429
     *
     * 40
     *
     */
    "server_data.stat_trackers.character_ringouts.character_steven": number;
    /**
     *
     * 106
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C021": number;
    /**
     *
     * 558
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_ringouts.character_bugs_bunny": number;
    /**
     *
     * 162
     *
     */
    "server_data.stat_trackers.character_ringouts.character_wonder_woman": number;
    /**
     *
     * 177
     *
     * 4783
     *
     */
    "server_data.stat_trackers.character_ringouts.character_c16": number;
    /**
     *
     * 552
     *
     * 809
     *
     */
    "server_data.stat_trackers.character_ringouts.character_Jason": number;
    /**
     *
     * 133
     *
     * 41
     *
     */
    "server_data.stat_trackers.character_ringouts.character_velma": number;
    /**
     *
     * 175
     *
     */
    "server_data.stat_trackers.character_ringouts.character_taz": number;
    /**
     *
     * 71
     *
     * 1
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_ringouts.character_c019": number;
    /**
     *
     * 145
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C020": number;
    /**
     *
     * 93
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C017": number;
    /**
     *
     * 374
     *
     */
    "server_data.stat_trackers.character_ringouts.character_c036": number;
    /**
     *
     * 49
     *
     * 3
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C023A": number;
    /**
     *
     * 157
     *
     */
    "server_data.stat_trackers.character_ringouts.character_c024": number;
    /**
     *
     * 279
     *
     * 4
     *
     */
    "server_data.stat_trackers.character_ringouts.character_jake": number;
    /**
     *
     * 607
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C030": number;
    /**
     *
     * 17
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_ringouts.character_arya": number;
    /**
     *
     * 174
     *
     * 7
     *
     */
    "server_data.stat_trackers.character_ringouts.character_creature": number;
    /**
     *
     * 216
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C027": number;
    /**
     *
     * 10
     *
     * 3
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C023B": number;
    /**
     *
     * 183
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C031": number;
    /**
     *
     * 62
     *
     */
    "server_data.stat_trackers.character_ringouts.character_C029": number;
    /**
     *
     * 59
     *
     */
    "server_data.stat_trackers.character_ringouts.character_c038": number;
    /**
     *
     * 88237.31986236572
     *
     * 65
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_garnet": number;
    /**
     *
     * 116707.58339571953
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 47401.24382209778
     *
     * 6051.556198120117
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_steven": number;
    /**
     *
     * 11158
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C021": number;
    /**
     *
     * 54926.331501960754
     *
     * 218.95500659942627
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 18627.182456731796
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 19706.69556427002
     *
     * 649012.629606247
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_c16": number;
    /**
     *
     * 67615.94503688812
     *
     * 73664.93674468994
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_Jason": number;
    /**
     *
     * 15956.864883422852
     *
     * 76.77932739257812
     *
     * 3847.78670501709
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_velma": number;
    /**
     *
     * 14574.630776405334
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_taz": number;
    /**
     *
     * 8906.95980834961
     *
     * 89.44085693359375
     *
     * 287
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_c019": number;
    /**
     *
     * 18918.666473388672
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C020": number;
    /**
     *
     * 12274.844207763672
     *
     * 61.910457611083984
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C017": number;
    /**
     *
     * 47950.045764923096
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_c036": number;
    /**
     *
     * 5542.591819763184
     *
     * 274.2230224609375
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C023A": number;
    /**
     *
     * 21607
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_c024": number;
    /**
     *
     * 30956
     *
     * 297.63531494140625
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_jake": number;
    /**
     *
     * 61081
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C030": number;
    /**
     *
     * 2296
     *
     * 9
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_arya": number;
    /**
     *
     * 20611
     *
     * 320
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_creature": number;
    /**
     *
     * 28397
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C027": number;
    /**
     *
     * 1331
     *
     * 64
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C023B": number;
    /**
     *
     * 23518
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C031": number;
    /**
     *
     * 8437
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_C029": number;
    /**
     *
     * 7474
     *
     */
    "server_data.stat_trackers.character_total_damage_dealt.character_c038": number;
    /**
     *
     * 431
     *
     */
    "server_data.stat_trackers.character_matches.character_garnet": number;
    /**
     *
     * 265
     *
     * 343
     *
     */
    "server_data.stat_trackers.character_matches.character_Jason": number;
    /**
     *
     * 534
     *
     */
    "server_data.stat_trackers.character_matches.character_tom_and_jerry": number;
    /**
     *
     * 212
     *
     * 22
     *
     */
    "server_data.stat_trackers.character_matches.character_steven": number;
    /**
     *
     * 265
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_matches.character_bugs_bunny": number;
    /**
     *
     * 93
     *
     * 268
     *
     */
    "server_data.stat_trackers.character_matches.character_c16": number;
    /**
     *
     * 109
     *
     */
    "server_data.stat_trackers.character_matches.character_C018": number;
    /**
     *
     * 115
     *
     */
    "server_data.stat_trackers.character_matches.character_superman": number;
    /**
     *
     * 70
     *
     */
    "server_data.stat_trackers.character_matches.character_wonder_woman": number;
    /**
     *
     * 68
     *
     * 1
     *
     * 17
     *
     */
    "server_data.stat_trackers.character_matches.character_velma": number;
    /**
     *
     * 74
     *
     */
    "server_data.stat_trackers.character_matches.character_taz": number;
    /**
     *
     * 29
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_matches.character_c019": number;
    /**
     *
     * 65
     *
     */
    "server_data.stat_trackers.character_matches.character_C020": number;
    /**
     *
     * 47
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_matches.character_C017": number;
    /**
     *
     * 188
     *
     */
    "server_data.stat_trackers.character_matches.character_c036": number;
    /**
     *
     * 22
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_matches.character_C023A": number;
    /**
     *
     * 49
     *
     */
    "server_data.stat_trackers.character_matches.character_C021": number;
    /**
     *
     * 82
     *
     */
    "server_data.stat_trackers.character_matches.character_c024": number;
    /**
     *
     * 93
     *
     * 2
     *
     */
    "server_data.stat_trackers.character_matches.character_jake": number;
    /**
     *
     * 300
     *
     */
    "server_data.stat_trackers.character_matches.character_C030": number;
    /**
     *
     * 7
     *
     * 1
     *
     */
    "server_data.stat_trackers.character_matches.character_arya": number;
    /**
     *
     * 84
     *
     */
    "server_data.stat_trackers.character_matches.character_creature": number;
    /**
     *
     * 98
     *
     */
    "server_data.stat_trackers.character_matches.character_C027": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.character_matches.character_C023B": number;
    /**
     *
     * 80
     *
     */
    "server_data.stat_trackers.character_matches.character_C031": number;
    /**
     *
     * 29
     *
     */
    "server_data.stat_trackers.character_matches.character_C029": number;
    /**
     *
     * 34
     *
     */
    "server_data.stat_trackers.character_matches.character_c038": number;
    /**
     *
     * 291.6946105957031
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_garnet": number;
    /**
     *
     * 311.3065490722656
     *
     * 468.90625
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_Jason": number;
    /**
     *
     * 386.26226806640625
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 403.6852722167969
     *
     * 446.610107421875
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_steven": number;
    /**
     *
     * 414.9226989746094
     *
     * 204.1039276123047
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 400.4200134277344
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_C018": number;
    /**
     *
     * 367.57000732421875
     *
     * 463.63653564453125
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_c16": number;
    /**
     *
     * 355.6003723144531
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 250.98394775390625
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_superman": number;
    /**
     *
     * 281.711669921875
     *
     * 76.77932739257812
     *
     * 320.9485168457031
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_velma": number;
    /**
     *
     * 127.05000305175781
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_taz": number;
    /**
     *
     * 272.9598083496094
     *
     * 89.44085693359375
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_c019": number;
    /**
     *
     * 411.9901428222656
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_C020": number;
    /**
     *
     * 152
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_garnet": number;
    /**
     *
     * 65
     *
     * 168
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_Jason": number;
    /**
     *
     * 114
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_tom_and_jerry": number;
    /**
     *
     * 78
     *
     * 16
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_steven": number;
    /**
     *
     * 51
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_bugs_bunny": number;
    /**
     *
     * 28
     *
     * 268
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_c16": number;
    /**
     *
     * 57
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_C018": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_superman": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_wonder_woman": number;
    /**
     *
     * 3
     *
     * 1
     *
     * 17
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_velma": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_taz": number;
    /**
     *
     * 2
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_c019": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_C020": number;
    /**
     *
     * 18070.411151885986
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_garnet": number;
    /**
     *
     * 10706.97832107544
     *
     * 35628.377044677734
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_Jason": number;
    /**
     *
     * 21733.886937379837
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 15537.457817077637
     *
     * 4305.556198120117
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_steven": number;
    /**
     *
     * 9052.628178596497
     *
     * 218.95500659942627
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 11501.386367797852
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_C018": number;
    /**
     *
     * 4672.011024475098
     *
     * 54283.62960624695
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_c16": number;
    /**
     *
     * 2320.8118760585785
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 674.2932586669922
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_superman": number;
    /**
     *
     * 281.711669921875
     *
     * 76.77932739257812
     *
     * 3847.78670501709
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_velma": number;
    /**
     *
     * 127.05000305175781
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_taz": number;
    /**
     *
     * 272.9598083496094
     *
     * 89.44085693359375
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_c019": number;
    /**
     *
     * 411.9901428222656
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_C020": number;
    /**
     *
     * 95
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_garnet": number;
    /**
     *
     * 29
     *
     * 79
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_Jason": number;
    /**
     *
     * 55
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_tom_and_jerry": number;
    /**
     *
     * 36
     *
     * 7
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_steven": number;
    /**
     *
     * 8
     *
     * 144
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_c16": number;
    /**
     *
     * 25
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_bugs_bunny": number;
    /**
     *
     * 28
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_C018": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_wonder_woman": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_superman": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_taz": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_c019": number;
    /**
     *
     * 261
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_garnet": number;
    /**
     *
     * 123
     *
     * 388
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_Jason": number;
    /**
     *
     * 224
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_tom_and_jerry": number;
    /**
     *
     * 136
     *
     * 30
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_steven": number;
    /**
     *
     * 107
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_bugs_bunny": number;
    /**
     *
     * 117
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_C018": number;
    /**
     *
     * 46
     *
     * 650
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_c16": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_wonder_woman": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_superman": number;
    /**
     *
     * 4
     *
     * 41
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_velma": number;
    /**
     *
     * 8
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_taz": number;
    /**
     *
     * 3
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_c019": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_C020": number;
    /**
     *
     * 11818
     *
     * 416.5572509765625
     *
     */
    "server_data.stat_trackers.season2.HighestDamageDealt": number;
    /**
     *
     * 723
     *
     * 1686
     *
     */
    "server_data.stat_trackers.season2.TotalAttacksDodged": number;
    /**
     *
     * 2278
     *
     * 639
     *
     */
    "server_data.stat_trackers.season2.TotalRingouts": number;
    /**
     *
     * 818
     *
     * 416.5572509765625
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_Jason": number;
    /**
     *
     * 890.4603881835938
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 737
     *
     * 369.13262939453125
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_shaggy": number;
    /**
     *
     * 379.2598571777344
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 302
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_C017": number;
    /**
     *
     * 328.68218994140625
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_taz": number;
    /**
     *
     * 402
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_steven": number;
    /**
     *
     * 756
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 506.1899108886719
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 333
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_C028": number;
    /**
     *
     * 11818
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_C026": number;
    /**
     *
     * 277
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_C018": number;
    /**
     *
     * 384
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_c16": number;
    /**
     *
     * 241.2244110107422
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_velma": number;
    /**
     *
     * 390
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_garnet": number;
    /**
     *
     * 517
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 399
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_finn": number;
    /**
     *
     * 284
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_C020": number;
    /**
     *
     * 145.42483520507812
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_c036": number;
    /**
     *
     * 203
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_C023A": number;
    /**
     *
     * 374
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_C021": number;
    /**
     *
     * 1715
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_c024": number;
    /**
     *
     * 328
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_superman": number;
    /**
     *
     * 295
     *
     */
    "server_data.stat_trackers.season2.character_highest_damage_dealt.character_jake": number;
    /**
     *
     * 82
     *
     * 163
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_Jason": number;
    /**
     *
     * 55
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_harleyquinn": number;
    /**
     *
     * 54
     *
     * 84
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_shaggy": number;
    /**
     *
     * 134
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_tom_and_jerry": number;
    /**
     *
     * 18
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_C017": number;
    /**
     *
     * 42
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_taz": number;
    /**
     *
     * 57
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_steven": number;
    /**
     *
     * 69
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_BananaGuard": number;
    /**
     *
     * 77
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_bugs_bunny": number;
    /**
     *
     * 23
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_wonder_woman": number;
    /**
     *
     * 33
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_C028": number;
    /**
     *
     * 270
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_C026": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_C018": number;
    /**
     *
     * 26
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_c16": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_velma": number;
    /**
     *
     * 66
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_garnet": number;
    /**
     *
     * 16
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_finn": number;
    /**
     *
     * 45
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_superman": number;
    /**
     *
     * 19
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_C020": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_c036": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_C023A": number;
    /**
     *
     * 22
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_C021": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_c024": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season2.character_matches.character_jake": number;
    /**
     *
     * 159
     *
     * 416
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_Jason": number;
    /**
     *
     * 117
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_harleyquinn": number;
    /**
     *
     * 92
     *
     * 223
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_shaggy": number;
    /**
     *
     * 234
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_tom_and_jerry": number;
    /**
     *
     * 27
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_C017": number;
    /**
     *
     * 110
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_steven": number;
    /**
     *
     * 164
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_BananaGuard": number;
    /**
     *
     * 155
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_bugs_bunny": number;
    /**
     *
     * 74
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_C028": number;
    /**
     *
     * 505
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_C026": number;
    /**
     *
     * 104
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_taz": number;
    /**
     *
     * 38
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_C018": number;
    /**
     *
     * 47
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_c16": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_velma": number;
    /**
     *
     * 140
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_garnet": number;
    /**
     *
     * 53
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_wonder_woman": number;
    /**
     *
     * 28
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_finn": number;
    /**
     *
     * 37
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_C020": number;
    /**
     *
     * 10
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_c036": number;
    /**
     *
     * 13
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_C023A": number;
    /**
     *
     * 42
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_C021": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_c024": number;
    /**
     *
     * 94
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_superman": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season2.character_ringouts.character_jake": number;
    /**
     *
     * 15965.966715812683
     *
     * 37705.55970001221
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_Jason": number;
    /**
     *
     * 11298.174704551697
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 11068.94165802002
     *
     * 21330.87432861328
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_shaggy": number;
    /**
     *
     * 23362.69645833969
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 2498.844207763672
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_C017": number;
    /**
     *
     * 5024.580773353577
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_taz": number;
    /**
     *
     * 11400.786005020142
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_steven": number;
    /**
     *
     * 16884.394187927246
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 12914.703323364258
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 7612.805999755859
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_C028": number;
    /**
     *
     * 55091.79905176163
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_C026": number;
    /**
     *
     * 3104.51544380188
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_C018": number;
    /**
     *
     * 4865.684539794922
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_c16": number;
    /**
     *
     * 1260.1532135009766
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_velma": number;
    /**
     *
     * 12069.908710479736
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_garnet": number;
    /**
     *
     * 6035.370580673218
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 3178.399871826172
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_finn": number;
    /**
     *
     * 2610.6763305664062
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_C020": number;
    /**
     *
     * 546.0457649230957
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_c036": number;
    /**
     *
     * 820.5918197631836
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_C023A": number;
    /**
     *
     * 4740
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_C021": number;
    /**
     *
     * 2397
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_c024": number;
    /**
     *
     * 8576
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_superman": number;
    /**
     *
     * 858
     *
     */
    "server_data.stat_trackers.season2.character_total_damage_dealt.character_jake": number;
    /**
     *
     * 680
     *
     * 145
     *
     */
    "server_data.stat_trackers.season2.TotalWins": number;
    /**
     *
     * 30
     *
     * 53
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_shaggy": number;
    /**
     *
     * 8
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_C017": number;
    /**
     *
     * 25
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_taz": number;
    /**
     *
     * 75
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_tom_and_jerry": number;
    /**
     *
     * 33
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_steven": number;
    /**
     *
     * 47
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_BananaGuard": number;
    /**
     *
     * 46
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_bugs_bunny": number;
    /**
     *
     * 15
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_wonder_woman": number;
    /**
     *
     * 50
     *
     * 92
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_Jason": number;
    /**
     *
     * 172
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_C026": number;
    /**
     *
     * 32
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_harleyquinn": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_C018": number;
    /**
     *
     * 15
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_c16": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_velma": number;
    /**
     *
     * 32
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_garnet": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_finn": number;
    /**
     *
     * 26
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_superman": number;
    /**
     *
     * 10
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_C020": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_c036": number;
    /**
     *
     * 12
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_C021": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_c024": number;
    /**
     *
     * 15
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_C028": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_C023A": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season2.character_wins.character_jake": number;
    /**
     *
     * 6
     *
     * 98
     *
     */
    "server_data.stat_trackers.season2.ranked.1v1.Wins": number;
    /**
     *
     * 13
     *
     */
    "server_data.stat_trackers.season2.rifts.BossNodesDefeated": number;
    /**
     *
     * 277
     *
     */
    "server_data.stat_trackers.season2.rifts.StarsEarned": number;
    /**
     *
     * 160
     *
     */
    "server_data.stat_trackers.season2.TotalAssists": number;
    /**
     *
     * 10
     *
     */
    "server_data.stat_trackers.season2.TotalDoubleRingouts": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.season2.TotalRingoutLeader": number;
    /**
     *
     * 3911
     *
     */
    "server_data.stat_trackers.season3.HighestDamageDealt": number;
    /**
     *
     * 1435
     *
     */
    "server_data.stat_trackers.season3.TotalAttacksDodged": number;
    /**
     *
     * 2771
     *
     */
    "server_data.stat_trackers.season3.TotalRingouts": number;
    /**
     *
     * 1675
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C030": number;
    /**
     *
     * 691
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_c036": number;
    /**
     *
     * 1027
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 1896
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C018": number;
    /**
     *
     * 3911
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 290
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_finn": number;
    /**
     *
     * 1117
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_Jason": number;
    /**
     *
     * 2406
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_steven": number;
    /**
     *
     * 1147
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C020": number;
    /**
     *
     * 834
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_garnet": number;
    /**
     *
     * 555
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C026": number;
    /**
     *
     * 296
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_superman": number;
    /**
     *
     * 2485
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_shaggy": number;
    /**
     *
     * 2277
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C028": number;
    /**
     *
     * 370
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C021": number;
    /**
     *
     * 295
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_c16": number;
    /**
     *
     * 374
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 3173
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 380
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 157
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_taz": number;
    /**
     *
     * 271
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_arya": number;
    /**
     *
     * 1774
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_c019": number;
    /**
     *
     * 1251
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_batman": number;
    /**
     *
     * 1006
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_velma": number;
    /**
     *
     * 463
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_c024": number;
    /**
     *
     * 1905
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C017": number;
    /**
     *
     * 1361
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_creature": number;
    /**
     *
     * 1992
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C027": number;
    /**
     *
     * 2155
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_jake": number;
    /**
     *
     * 1737
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C023A": number;
    /**
     *
     * 250
     *
     */
    "server_data.stat_trackers.season3.character_highest_damage_dealt.character_C023B": number;
    /**
     *
     * 240
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C030": number;
    /**
     *
     * 124
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_c036": number;
    /**
     *
     * 49
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_bugs_bunny": number;
    /**
     *
     * 20
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C018": number;
    /**
     *
     * 40
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_BananaGuard": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_finn": number;
    /**
     *
     * 37
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_Jason": number;
    /**
     *
     * 49
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_steven": number;
    /**
     *
     * 19
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C020": number;
    /**
     *
     * 64
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_garnet": number;
    /**
     *
     * 56
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C026": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_superman": number;
    /**
     *
     * 25
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_shaggy": number;
    /**
     *
     * 25
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C028": number;
    /**
     *
     * 15
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C021": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_c16": number;
    /**
     *
     * 63
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_harleyquinn": number;
    /**
     *
     * 77
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_tom_and_jerry": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_wonder_woman": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_taz": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_arya": number;
    /**
     *
     * 18
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_c019": number;
    /**
     *
     * 83
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_batman": number;
    /**
     *
     * 15
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_velma": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_c024": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C017": number;
    /**
     *
     * 64
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_creature": number;
    /**
     *
     * 45
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C027": number;
    /**
     *
     * 58
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_jake": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C023A": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season3.character_matches.character_C023B": number;
    /**
     *
     * 504
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C030": number;
    /**
     *
     * 235
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_c036": number;
    /**
     *
     * 94
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_bugs_bunny": number;
    /**
     *
     * 33
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C018": number;
    /**
     *
     * 153
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_BananaGuard": number;
    /**
     *
     * 22
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_finn": number;
    /**
     *
     * 75
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_Jason": number;
    /**
     *
     * 107
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_steven": number;
    /**
     *
     * 36
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C020": number;
    /**
     *
     * 99
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_garnet": number;
    /**
     *
     * 22
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_superman": number;
    /**
     *
     * 96
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C026": number;
    /**
     *
     * 97
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_shaggy": number;
    /**
     *
     * 71
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C028": number;
    /**
     *
     * 23
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C021": number;
    /**
     *
     * 28
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_c16": number;
    /**
     *
     * 120
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_harleyquinn": number;
    /**
     *
     * 12
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_wonder_woman": number;
    /**
     *
     * 141
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_tom_and_jerry": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_taz": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_arya": number;
    /**
     *
     * 44
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_c019": number;
    /**
     *
     * 197
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_batman": number;
    /**
     *
     * 38
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_velma": number;
    /**
     *
     * 28
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_c024": number;
    /**
     *
     * 25
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C017": number;
    /**
     *
     * 129
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_creature": number;
    /**
     *
     * 95
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C027": number;
    /**
     *
     * 200
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_jake": number;
    /**
     *
     * 30
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C023A": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season3.character_ringouts.character_C023B": number;
    /**
     *
     * 45378
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C030": number;
    /**
     *
     * 25535
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_c036": number;
    /**
     *
     * 9914
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 4825
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C018": number;
    /**
     *
     * 25396
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 1966
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_finn": number;
    /**
     *
     * 9818
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_Jason": number;
    /**
     *
     * 13107
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_steven": number;
    /**
     *
     * 5624
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C020": number;
    /**
     *
     * 10475
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_garnet": number;
    /**
     *
     * 9574
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C026": number;
    /**
     *
     * 2528
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_superman": number;
    /**
     *
     * 14285
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_shaggy": number;
    /**
     *
     * 8727
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C028": number;
    /**
     *
     * 3009
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C021": number;
    /**
     *
     * 2529
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_c16": number;
    /**
     *
     * 12226
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 17431
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 1626
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 715
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_taz": number;
    /**
     *
     * 415
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_arya": number;
    /**
     *
     * 5593
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_c019": number;
    /**
     *
     * 17130
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_batman": number;
    /**
     *
     * 3492
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_velma": number;
    /**
     *
     * 3393
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_c024": number;
    /**
     *
     * 3545
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C017": number;
    /**
     *
     * 14034
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_creature": number;
    /**
     *
     * 12193
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C027": number;
    /**
     *
     * 20555
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_jake": number;
    /**
     *
     * 3635
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C023A": number;
    /**
     *
     * 250
     *
     */
    "server_data.stat_trackers.season3.character_total_damage_dealt.character_C023B": number;
    /**
     *
     * 623
     *
     */
    "server_data.stat_trackers.season3.TotalWins": number;
    /**
     *
     * 121
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C030": number;
    /**
     *
     * 61
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_c036": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_bugs_bunny": number;
    /**
     *
     * 19
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_BananaGuard": number;
    /**
     *
     * 25
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_steven": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_Jason": number;
    /**
     *
     * 8
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C018": number;
    /**
     *
     * 19
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C028": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C021": number;
    /**
     *
     * 27
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_garnet": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_wonder_woman": number;
    /**
     *
     * 34
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_tom_and_jerry": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_finn": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_c16": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_c019": number;
    /**
     *
     * 49
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_batman": number;
    /**
     *
     * 29
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_harleyquinn": number;
    /**
     *
     * 21
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C026": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_superman": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_taz": number;
    /**
     *
     * 8
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_velma": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C020": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_c024": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C017": number;
    /**
     *
     * 18
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_shaggy": number;
    /**
     *
     * 26
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_creature": number;
    /**
     *
     * 20
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C027": number;
    /**
     *
     * 34
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_jake": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C023A": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season3.character_wins.character_C023B": number;
    /**
     *
     * 516
     *
     */
    "server_data.stat_trackers.season3.TotalAssists": number;
    /**
     *
     * 68
     *
     */
    "server_data.stat_trackers.season3.TotalRingoutLeader": number;
    /**
     *
     * 115
     *
     */
    "server_data.stat_trackers.season3.TotalDoubleRingouts": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season3.rifts.BossNodesDefeated": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season3.ranked.1v1.Wins": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season3.ranked.2v2.Wins": number;
    /**
     *
     * 3076
     *
     */
    "server_data.stat_trackers.season4.HighestDamageDealt": number;
    /**
     *
     * 747
     *
     */
    "server_data.stat_trackers.season4.TotalAssists": number;
    /**
     *
     * 506
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C030": number;
    /**
     *
     * 818
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 612
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_c024": number;
    /**
     *
     * 979
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_c036": number;
    /**
     *
     * 572
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C026": number;
    /**
     *
     * 907
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_garnet": number;
    /**
     *
     * 1500
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C025": number;
    /**
     *
     * 474
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 438
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_shaggy": number;
    /**
     *
     * 597
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_batman": number;
    /**
     *
     * 459
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 437
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C018": number;
    /**
     *
     * 426
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C028": number;
    /**
     *
     * 397
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_superman": number;
    /**
     *
     * 512
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_c16": number;
    /**
     *
     * 348
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 496
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 483
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C027": number;
    /**
     *
     * 420
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_steven": number;
    /**
     *
     * 3076
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_Jason": number;
    /**
     *
     * 670
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_velma": number;
    /**
     *
     * 431
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C023B": number;
    /**
     *
     * 472
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_arya": number;
    /**
     *
     * 3021
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_taz": number;
    /**
     *
     * 916
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_finn": number;
    /**
     *
     * 551
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_jake": number;
    /**
     *
     * 809
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C017": number;
    /**
     *
     * 2406
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C020": number;
    /**
     *
     * 488
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_creature": number;
    /**
     *
     * 608
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_c019": number;
    /**
     *
     * 435
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C021": number;
    /**
     *
     * 747
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C031": number;
    /**
     *
     * 336
     *
     */
    "server_data.stat_trackers.season4.character_highest_damage_dealt.character_C023A": number;
    /**
     *
     * 58
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C030": number;
    /**
     *
     * 170
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_tom_and_jerry": number;
    /**
     *
     * 59
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_c024": number;
    /**
     *
     * 57
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_c036": number;
    /**
     *
     * 256
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C026": number;
    /**
     *
     * 133
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_garnet": number;
    /**
     *
     * 98
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C025": number;
    /**
     *
     * 43
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_harleyquinn": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_shaggy": number;
    /**
     *
     * 92
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_batman": number;
    /**
     *
     * 51
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_bugs_bunny": number;
    /**
     *
     * 12
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C018": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C028": number;
    /**
     *
     * 36
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_superman": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_c16": number;
    /**
     *
     * 10
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_BananaGuard": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_wonder_woman": number;
    /**
     *
     * 44
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C027": number;
    /**
     *
     * 26
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_steven": number;
    /**
     *
     * 23
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_jake": number;
    /**
     *
     * 70
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_Jason": number;
    /**
     *
     * 39
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_velma": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C023B": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_arya": number;
    /**
     *
     * 19
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_taz": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_finn": number;
    /**
     *
     * 18
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C017": number;
    /**
     *
     * 15
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C020": number;
    /**
     *
     * 16
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_creature": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_c019": number;
    /**
     *
     * 12
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C021": number;
    /**
     *
     * 77
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C031": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season4.character_matches.character_C023A": number;
    /**
     *
     * 15259
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C030": number;
    /**
     *
     * 44423
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 15496
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_c024": number;
    /**
     *
     * 21247
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_c036": number;
    /**
     *
     * 72892
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C026": number;
    /**
     *
     * 37444
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_garnet": number;
    /**
     *
     * 25705
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C025": number;
    /**
     *
     * 13098
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 4009
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_shaggy": number;
    /**
     *
     * 25713
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_batman": number;
    /**
     *
     * 13529
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 3566
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C018": number;
    /**
     *
     * 2585
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C028": number;
    /**
     *
     * 8895
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_superman": number;
    /**
     *
     * 7221
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_c16": number;
    /**
     *
     * 2074
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 7389
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 14042
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C027": number;
    /**
     *
     * 6112
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_steven": number;
    /**
     *
     * 24126
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_Jason": number;
    /**
     *
     * 10227
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_velma": number;
    /**
     *
     * 1081
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C023B": number;
    /**
     *
     * 1881
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_arya": number;
    /**
     *
     * 7997
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_taz": number;
    /**
     *
     * 3637
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_finn": number;
    /**
     *
     * 7400
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_jake": number;
    /**
     *
     * 6231
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C017": number;
    /**
     *
     * 7713
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C020": number;
    /**
     *
     * 5282
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_creature": number;
    /**
     *
     * 2288
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_c019": number;
    /**
     *
     * 2875
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C021": number;
    /**
     *
     * 22749
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C031": number;
    /**
     *
     * 1087
     *
     */
    "server_data.stat_trackers.season4.character_total_damage_dealt.character_C023A": number;
    /**
     *
     * 3115
     *
     */
    "server_data.stat_trackers.season4.TotalRingouts": number;
    /**
     *
     * 100
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C030": number;
    /**
     *
     * 317
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_tom_and_jerry": number;
    /**
     *
     * 112
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_c024": number;
    /**
     *
     * 124
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_c036": number;
    /**
     *
     * 474
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C026": number;
    /**
     *
     * 274
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_garnet": number;
    /**
     *
     * 192
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C025": number;
    /**
     *
     * 92
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_harleyquinn": number;
    /**
     *
     * 34
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_shaggy": number;
    /**
     *
     * 160
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_batman": number;
    /**
     *
     * 112
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_bugs_bunny": number;
    /**
     *
     * 27
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C018": number;
    /**
     *
     * 21
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C028": number;
    /**
     *
     * 78
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_superman": number;
    /**
     *
     * 53
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_c16": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_BananaGuard": number;
    /**
     *
     * 52
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_wonder_woman": number;
    /**
     *
     * 50
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_steven": number;
    /**
     *
     * 164
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_Jason": number;
    /**
     *
     * 70
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_velma": number;
    /**
     *
     * 100
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C027": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C023B": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_arya": number;
    /**
     *
     * 47
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_taz": number;
    /**
     *
     * 19
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_finn": number;
    /**
     *
     * 56
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_jake": number;
    /**
     *
     * 41
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C017": number;
    /**
     *
     * 51
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C020": number;
    /**
     *
     * 35
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_creature": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_c019": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C021": number;
    /**
     *
     * 178
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C031": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season4.character_ringouts.character_C023A": number;
    /**
     *
     * 4092
     *
     */
    "server_data.stat_trackers.season4.TotalAttacksDodged": number;
    /**
     *
     * 939
     *
     */
    "server_data.stat_trackers.season4.TotalWins": number;
    /**
     *
     * 93
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_tom_and_jerry": number;
    /**
     *
     * 53
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_c036": number;
    /**
     *
     * 140
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C026": number;
    /**
     *
     * 82
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_garnet": number;
    /**
     *
     * 68
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C025": number;
    /**
     *
     * 23
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_harleyquinn": number;
    /**
     *
     * 12
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_shaggy": number;
    /**
     *
     * 59
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_batman": number;
    /**
     *
     * 38
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_c024": number;
    /**
     *
     * 27
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_bugs_bunny": number;
    /**
     *
     * 10
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C018": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C028": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_BananaGuard": number;
    /**
     *
     * 12
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_wonder_woman": number;
    /**
     *
     * 23
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_superman": number;
    /**
     *
     * 32
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C030": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_steven": number;
    /**
     *
     * 16
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_jake": number;
    /**
     *
     * 22
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_velma": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C027": number;
    /**
     *
     * 40
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_Jason": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C023B": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_arya": number;
    /**
     *
     * 14
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_taz": number;
    /**
     *
     * 8
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_finn": number;
    /**
     *
     * 13
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C017": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C020": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_creature": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_c019": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C021": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_c16": number;
    /**
     *
     * 52
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C031": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season4.character_wins.character_C023A": number;
    /**
     *
     * 441
     *
     */
    "server_data.stat_trackers.season4.rifts.StarsEarned": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season4.rifts.BossNodesDefeated": number;
    /**
     *
     * 225
     *
     */
    "server_data.stat_trackers.season4.TotalRingoutLeader": number;
    /**
     *
     * 43
     *
     */
    "server_data.stat_trackers.season4.TotalDoubleRingouts": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season4.arenas.character_matches.character_C026": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season4.arenas.character_matches.character_batman": number;
    /**
     *
     * 19
     *
     */
    "server_data.stat_trackers.season4.ranked.1v1.Wins": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.season4.ranked.2v2.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.arenas.character_matches.character_C026": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.arenas.character_matches.character_batman": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.arenas.played": number;
    /**
     *
     * 47
     *
     */
    "server_data.stat_trackers.arenas.ringouts": number;
    /**
     *
     * 36
     *
     */
    "server_data.stat_trackers.arenas.rounds_played": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.arenas.season4.played": number;
    /**
     *
     * 36
     *
     */
    "server_data.stat_trackers.arenas.season4.rounds_played": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.arenas.top1.all": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.arenas.top1.character_C026": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.arenas.top2.all": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.arenas.top2.character_C026": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.arenas.top4.all": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.arenas.top4.character_C026": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.arenas.top4.character_batman": number;
    /**
     *
     * 471
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C029": number;
    /**
     *
     * 473
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_c038": number;
    /**
     *
     * 363
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 346
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_garnet": number;
    /**
     *
     * 507
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 379
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_jake": number;
    /**
     *
     * 2706
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_superman": number;
    /**
     *
     * 334
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C018": number;
    /**
     *
     * 165
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_c16": number;
    /**
     *
     * 418
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C020": number;
    /**
     *
     * 450
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C027": number;
    /**
     *
     * 376
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_shaggy": number;
    /**
     *
     * 428
     *
     * 131
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C028": number;
    /**
     *
     * 453
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_c019": number;
    /**
     *
     * 4244
     *
     * 185
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_Jason": number;
    /**
     *
     * 426
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_taz": number;
    /**
     *
     * 415
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 350
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_velma": number;
    /**
     *
     * 394
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C031": number;
    /**
     *
     * 395
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 364
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_C030": number;
    /**
     *
     * 325
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_finn": number;
    /**
     *
     * 182
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 328
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_c036": number;
    /**
     *
     * 401
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_creature": number;
    /**
     *
     * 384
     *
     * 415
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_steven": number;
    /**
     *
     * 321
     *
     */
    "server_data.stat_trackers.season5.character_highest_damage_dealt.character_c024": number;
    /**
     *
     * 29
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C029": number;
    /**
     *
     * 34
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_c038": number;
    /**
     *
     * 39
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_tom_and_jerry": number;
    /**
     *
     * 16
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_garnet": number;
    /**
     *
     * 37
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_bugs_bunny": number;
    /**
     *
     * 8
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_jake": number;
    /**
     *
     * 16
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_superman": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C018": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_c16": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C020": number;
    /**
     *
     * 9
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C027": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_shaggy": number;
    /**
     *
     * 2
     *
     * 46
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C028": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_c019": number;
    /**
     *
     * 11
     *
     * 12
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_Jason": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_taz": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_harleyquinn": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_velma": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C031": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_wonder_woman": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_C030": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_finn": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_BananaGuard": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_c036": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_creature": number;
    /**
     *
     * 2
     *
     * 6
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_steven": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_matches.character_c024": number;
    /**
     *
     * 62
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C029": number;
    /**
     *
     * 59
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_c038": number;
    /**
     *
     * 65
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_tom_and_jerry": number;
    /**
     *
     * 31
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_garnet": number;
    /**
     *
     * 71
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_bugs_bunny": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C018": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_c16": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C020": number;
    /**
     *
     * 21
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C027": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_shaggy": number;
    /**
     *
     * 40
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_superman": number;
    /**
     *
     * 6
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C028": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_c019": number;
    /**
     *
     * 31
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_Jason": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_taz": number;
    /**
     *
     * 12
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_harleyquinn": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_velma": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C031": number;
    /**
     *
     * 11
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_wonder_woman": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_C030": number;
    /**
     *
     * 16
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_jake": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_finn": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_BananaGuard": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_c036": number;
    /**
     *
     * 10
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_creature": number;
    /**
     *
     * 6
     *
     * 10
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_steven": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.character_ringouts.character_c024": number;
    /**
     *
     * 8437
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C029": number;
    /**
     *
     * 7474
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_c038": number;
    /**
     *
     * 8890
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_tom_and_jerry": number;
    /**
     *
     * 3711
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_garnet": number;
    /**
     *
     * 8984
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_bugs_bunny": number;
    /**
     *
     * 2143
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_jake": number;
    /**
     *
     * 8099
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_superman": number;
    /**
     *
     * 674
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C018": number;
    /**
     *
     * 165
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_c16": number;
    /**
     *
     * 2559
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C020": number;
    /**
     *
     * 2162
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C027": number;
    /**
     *
     * 895
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_shaggy": number;
    /**
     *
     * 755
     *
     * 250
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C028": number;
    /**
     *
     * 753
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_c019": number;
    /**
     *
     * 6999
     *
     * 331
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_Jason": number;
    /**
     *
     * 711
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_taz": number;
    /**
     *
     * 1838
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_harleyquinn": number;
    /**
     *
     * 696
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_velma": number;
    /**
     *
     * 769
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C031": number;
    /**
     *
     * 958
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_wonder_woman": number;
    /**
     *
     * 444
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_C030": number;
    /**
     *
     * 325
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_finn": number;
    /**
     *
     * 345
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_BananaGuard": number;
    /**
     *
     * 622
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_c036": number;
    /**
     *
     * 1295
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_creature": number;
    /**
     *
     * 717
     *
     * 1746
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_steven": number;
    /**
     *
     * 321
     *
     */
    "server_data.stat_trackers.season5.character_total_damage_dealt.character_c024": number;
    /**
     *
     * 17
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C029": number;
    /**
     *
     * 24
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_c038": number;
    /**
     *
     * 8
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_garnet": number;
    /**
     *
     * 13
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_tom_and_jerry": number;
    /**
     *
     * 16
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_bugs_bunny": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C020": number;
    /**
     *
     * 10
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_superman": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_c019": number;
    /**
     *
     * 1
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C028": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_velma": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C031": number;
    /**
     *
     * 6
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C027": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_wonder_woman": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_shaggy": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_harleyquinn": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C030": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_taz": number;
    /**
     *
     * 5
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_jake": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_c036": number;
    /**
     *
     * 5
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_Jason": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_creature": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_steven": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_c024": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season5.character_wins.character_C018": number;
    /**
     *
     * 63
     *
     */
    "server_data.stat_trackers.season5.rifts.StarsEarned": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.ranked.2v2.Wins": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season5.ranked.1v1.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_inmemoriam": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_garnet_electricgroove": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_garnet_marker": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_dodgearmor": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_movespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_electricprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_projectilespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_movespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_jumpspeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_finn_goingoutofbusiness": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_wonder_woman.perk_general_abilitycooldownreduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_collateraldamage": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_evadebaseinvulnerability_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_steven_shieldbounce": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_steven_greenthumb": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_iceprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_horizontalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_movespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_abilityrefundontakeprojectilekb": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_steven.perk_general_verticalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_general_damagereduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_general_laststand": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_shaggy_dyingrage": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_shaggy_extrahungry": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_general_culltheweak": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_general_projectilegrayhealth": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_shaggy.perk_general_movespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_velma.perk_general_projectiledamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_velma.perk_general_paintedtarget": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_tom_and_jerry.perk_general_projectilespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_tom_and_jerry.perk_general_fireprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_tom_and_jerry.perk_general_sniper": number;
    /**
     *
     * 966.1932949020674
     *
     */
    "server_data.2v2shuffle.0.ratings.character_creature.mean": number;
    /**
     *
     * 172.56500043640415
     *
     */
    "server_data.2v2shuffle.0.ratings.character_creature.deviance": number;
    /**
     *
     * 0.30000000000000004
     *
     */
    "server_data.2v2shuffle.0.ratings.character_creature.confidence": number;
    /**
     *
     * 1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_creature.streak": number;
    /**
     *
     * 1658966215135
     *
     */
    "server_data.2v2shuffle.0.ratings.character_creature.lastUpdateTimestamp": number;
    /**
     *
     * 802.5069406294533
     *
     * 1687.9093514618942
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c16.mean": number;
    /**
     *
     * 167.42534740741874
     *
     * 763.4929110693415
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c16.deviance": number;
    /**
     *
     * 0.17203481470885357
     *
     * 0.1488525847445358
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c16.confidence": number;
    /**
     *
     * 0
     *
     * -2
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c16.streak": number;
    /**
     *
     * 1660587514123
     *
     * 1676055661654
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c16.lastUpdateTimestamp": number;
    /**
     *
     * 483.4882813538511
     *
     */
    "server_data.2v2shuffle.0.ratings.character_tom_and_jerry.mean": number;
    /**
     *
     * 49.80533881433362
     *
     */
    "server_data.2v2shuffle.0.ratings.character_tom_and_jerry.deviance": number;
    /**
     *
     * 0.6860696181612953
     *
     */
    "server_data.2v2shuffle.0.ratings.character_tom_and_jerry.confidence": number;
    /**
     *
     * -6
     *
     */
    "server_data.2v2shuffle.0.ratings.character_tom_and_jerry.streak": number;
    /**
     *
     * 1665695840633
     *
     */
    "server_data.2v2shuffle.0.ratings.character_tom_and_jerry.lastUpdateTimestamp": number;
    /**
     *
     * 998.3721815600662
     *
     */
    "server_data.ffashuffle.0.ratings.character_finn.mean": number;
    /**
     *
     * 192.4114150498572
     *
     */
    "server_data.ffashuffle.0.ratings.character_finn.deviance": number;
    /**
     *
     * 0.1798192433683036
     *
     */
    "server_data.ffashuffle.0.ratings.character_finn.confidence": number;
    "server_data.ffashuffle.0.ratings.character_finn.streak": {};
    /**
     *
     * 1658986326103
     *
     */
    "server_data.ffashuffle.0.ratings.character_finn.lastUpdateTimestamp": number;
    /**
     *
     * character_finn
     *
     */
    "server_data.ffashuffle.0.ratings.character_finn.character": string;
    /**
     *
     * 706.6143079686501
     *
     */
    "server_data.ffashuffle.0.ratings.character_garnet.mean": number;
    /**
     *
     * 149.8550954214642
     *
     */
    "server_data.ffashuffle.0.ratings.character_garnet.deviance": number;
    /**
     *
     * 0.35019165367133676
     *
     */
    "server_data.ffashuffle.0.ratings.character_garnet.confidence": number;
    /**
     *
     * -1
     *
     */
    "server_data.ffashuffle.0.ratings.character_garnet.streak": number;
    /**
     *
     * 1667876402916
     *
     */
    "server_data.ffashuffle.0.ratings.character_garnet.lastUpdateTimestamp": number;
    /**
     *
     * 602.87535847635
     *
     */
    "server_data.ffashuffle.0.ratings.character_wonder_woman.mean": number;
    /**
     *
     * 192.88817257152948
     *
     */
    "server_data.ffashuffle.0.ratings.character_wonder_woman.deviance": number;
    /**
     *
     * 0.11054449173976233
     *
     */
    "server_data.ffashuffle.0.ratings.character_wonder_woman.confidence": number;
    "server_data.ffashuffle.0.ratings.character_wonder_woman.streak": {};
    /**
     *
     * 1658975788366
     *
     */
    "server_data.ffashuffle.0.ratings.character_wonder_woman.lastUpdateTimestamp": number;
    /**
     *
     * 771.960138790155
     *
     */
    "server_data.ffashuffle.0.ratings.character_steven.mean": number;
    /**
     *
     * 186.25006068974466
     *
     */
    "server_data.ffashuffle.0.ratings.character_steven.deviance": number;
    /**
     *
     * 0.17266996051965475
     *
     */
    "server_data.ffashuffle.0.ratings.character_steven.confidence": number;
    "server_data.ffashuffle.0.ratings.character_steven.streak": {};
    /**
     *
     * 1661373106503
     *
     */
    "server_data.ffashuffle.0.ratings.character_steven.lastUpdateTimestamp": number;
    /**
     *
     * 533.6885038191002
     *
     */
    "server_data.ffashuffle.0.ratings.character_C017.mean": number;
    /**
     *
     * 165.10045653552788
     *
     */
    "server_data.ffashuffle.0.ratings.character_C017.deviance": number;
    /**
     *
     * 0.3712740176796176
     *
     */
    "server_data.ffashuffle.0.ratings.character_C017.confidence": number;
    "server_data.ffashuffle.0.ratings.character_C017.streak": {};
    /**
     *
     * 1666130891064
     *
     */
    "server_data.ffashuffle.0.ratings.character_C017.lastUpdateTimestamp": number;
    /**
     *
     * 484.9320761498699
     *
     */
    "server_data.ffashuffle.0.ratings.character_shaggy.mean": number;
    /**
     *
     * 159.6982581189744
     *
     */
    "server_data.ffashuffle.0.ratings.character_shaggy.deviance": number;
    /**
     *
     * 0.24314644249776568
     *
     */
    "server_data.ffashuffle.0.ratings.character_shaggy.confidence": number;
    /**
     *
     * -2
     *
     */
    "server_data.ffashuffle.0.ratings.character_shaggy.streak": number;
    /**
     *
     * 1667876655265
     *
     */
    "server_data.ffashuffle.0.ratings.character_shaggy.lastUpdateTimestamp": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_garnet.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_garnet.perk_training_enabled": number;
    /**
     *
     * 2
     *
     */
    "server_data.Characters.character_garnet.arcade_completion_1p": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_finn.ally_perk_sharing": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_steven.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_steven.perk_training_enabled": number;
    /**
     *
     * 2
     *
     */
    "server_data.Characters.character_steven.arcade_completion_1p": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_wonder_woman.ally_perk_sharing": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_shaggy.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_shaggy.perk_training_enabled": number;
    /**
     *
     * 1
     *
     */
    "server_data.Characters.character_shaggy.arcade_completion_1p": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_tom_and_jerry.ally_perk_sharing": number;
    /**
     *
     * 983.8668640157207
     *
     * 711.3553793701781
     *
     */
    "server_data.1v1shuffle.0.ratings.character_garnet.mean": number;
    /**
     *
     * 171.1337159169619
     *
     * 200.23977396736893
     *
     */
    "server_data.1v1shuffle.0.ratings.character_garnet.deviance": number;
    /**
     *
     * 0.8371450099275228
     *
     * 0.6112452580914396
     *
     */
    "server_data.1v1shuffle.0.ratings.character_garnet.confidence": number;
    /**
     *
     * -1
     *
     * -3
     *
     */
    "server_data.1v1shuffle.0.ratings.character_garnet.streak": number;
    /**
     *
     * 1686883685897
     *
     * 1659793017140
     *
     */
    "server_data.1v1shuffle.0.ratings.character_garnet.lastUpdateTimestamp": number;
    /**
     *
     * character_garnet
     *
     */
    "server_data.1v1shuffle.0.ratings.character_garnet.character": string;
    /**
     *
     * 521.5941486691956
     *
     * 1141.5816193860637
     *
     */
    "server_data.1v1shuffle.0.ratings.character_finn.mean": number;
    /**
     *
     * 187.24050057197258
     *
     * 142.30548168886352
     *
     */
    "server_data.1v1shuffle.0.ratings.character_finn.deviance": number;
    /**
     *
     * 0.4443137542547123
     *
     * 0.95
     *
     */
    "server_data.1v1shuffle.0.ratings.character_finn.confidence": number;
    /**
     *
     * -1
     *
     * 2
     *
     */
    "server_data.1v1shuffle.0.ratings.character_finn.streak": number;
    /**
     *
     * 1680403820553
     *
     * 1659501268002
     *
     */
    "server_data.1v1shuffle.0.ratings.character_finn.lastUpdateTimestamp": number;
    /**
     *
     * 529.8578138780177
     *
     * 652.5710183009919
     *
     */
    "server_data.1v1shuffle.0.ratings.character_wonder_woman.mean": number;
    /**
     *
     * 186.64553275558788
     *
     * 169.3378088215987
     *
     */
    "server_data.1v1shuffle.0.ratings.character_wonder_woman.deviance": number;
    /**
     *
     * 0.48017581312199675
     *
     * 0.2748839794485497
     *
     */
    "server_data.1v1shuffle.0.ratings.character_wonder_woman.confidence": number;
    /**
     *
     * -1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_wonder_woman.streak": number;
    /**
     *
     * 1664831531488
     *
     * 1659131331844
     *
     */
    "server_data.1v1shuffle.0.ratings.character_wonder_woman.lastUpdateTimestamp": number;
    /**
     *
     * 526.8565618953
     *
     * 271.9260150801258
     *
     */
    "server_data.1v1shuffle.0.ratings.character_steven.mean": number;
    /**
     *
     * 129.4786372059584
     *
     * 201.46501511534512
     *
     */
    "server_data.1v1shuffle.0.ratings.character_steven.deviance": number;
    /**
     *
     * 0.37048695375734797
     *
     * 0.95
     *
     */
    "server_data.1v1shuffle.0.ratings.character_steven.confidence": number;
    /**
     *
     * 2
     *
     * 1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_steven.streak": number;
    /**
     *
     * 1681522073233
     *
     * 1661181497058
     *
     */
    "server_data.1v1shuffle.0.ratings.character_steven.lastUpdateTimestamp": number;
    /**
     *
     * 401.588463195379
     *
     */
    "server_data.1v1shuffle.0.ratings.character_creature.mean": number;
    /**
     *
     * 228.3464253033825
     *
     */
    "server_data.1v1shuffle.0.ratings.character_creature.deviance": number;
    /**
     *
     * 0.2822911598602156
     *
     */
    "server_data.1v1shuffle.0.ratings.character_creature.confidence": number;
    /**
     *
     * 1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_creature.streak": number;
    /**
     *
     * 1660525145697
     *
     */
    "server_data.1v1shuffle.0.ratings.character_creature.lastUpdateTimestamp": number;
    /**
     *
     * 815.682046853417
     *
     */
    "server_data.1v1shuffle.0.ratings.character_shaggy.mean": number;
    /**
     *
     * 133.16076488820573
     *
     */
    "server_data.1v1shuffle.0.ratings.character_shaggy.deviance": number;
    /**
     *
     * 0.3305720835202456
     *
     */
    "server_data.1v1shuffle.0.ratings.character_shaggy.confidence": number;
    /**
     *
     * -1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_shaggy.streak": number;
    /**
     *
     * 1686883086988
     *
     */
    "server_data.1v1shuffle.0.ratings.character_shaggy.lastUpdateTimestamp": number;
    /**
     *
     * 551.0234038353452
     *
     * 291.03213465705977
     *
     */
    "server_data.1v1shuffle.0.ratings.character_velma.mean": number;
    /**
     *
     * 121.00245940995707
     *
     * 167.09961010696625
     *
     */
    "server_data.1v1shuffle.0.ratings.character_velma.deviance": number;
    /**
     *
     * 0.6054172342246783
     *
     * 0.7152926263846122
     *
     */
    "server_data.1v1shuffle.0.ratings.character_velma.confidence": number;
    /**
     *
     * -2
     *
     * -1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_velma.streak": number;
    /**
     *
     * 1662569938700
     *
     * 1661182130019
     *
     */
    "server_data.1v1shuffle.0.ratings.character_velma.lastUpdateTimestamp": number;
    /**
     *
     * 670.3352775913767
     *
     */
    "server_data.1v1shuffle.0.ratings.character_harleyquinn.mean": number;
    /**
     *
     * 123.108308260467
     *
     */
    "server_data.1v1shuffle.0.ratings.character_harleyquinn.deviance": number;
    /**
     *
     * 0.6521034391262517
     *
     */
    "server_data.1v1shuffle.0.ratings.character_harleyquinn.confidence": number;
    /**
     *
     * 1
     *
     */
    "server_data.1v1shuffle.0.ratings.character_harleyquinn.streak": number;
    /**
     *
     * 1662938461385
     *
     */
    "server_data.1v1shuffle.0.ratings.character_harleyquinn.lastUpdateTimestamp": number;
    /**
     *
     * 466.1651685237352
     *
     * 261.9896338554688
     *
     */
    "server_data.1v1shuffle.0.ratings.character_jake.mean": number;
    /**
     *
     * 114.08343854789753
     *
     * 176.27464352997393
     *
     */
    "server_data.1v1shuffle.0.ratings.character_jake.deviance": number;
    /**
     *
     * 0.9476816531971014
     *
     * 0.775484125127486
     *
     */
    "server_data.1v1shuffle.0.ratings.character_jake.confidence": number;
    /**
     *
     * -2
     *
     * -4
     *
     */
    "server_data.1v1shuffle.0.ratings.character_jake.streak": number;
    /**
     *
     * 1664423095965
     *
     * 1661180809476
     *
     */
    "server_data.1v1shuffle.0.ratings.character_jake.lastUpdateTimestamp": number;
    /**
     *
     * 281.12722423784317
     *
     */
    "server_data.1v1shuffle.0.ratings.character_tom_and_jerry.mean": number;
    /**
     *
     * 128.37954229267416
     *
     */
    "server_data.1v1shuffle.0.ratings.character_tom_and_jerry.deviance": number;
    /**
     *
     * 0.44757944480665196
     *
     */
    "server_data.1v1shuffle.0.ratings.character_tom_and_jerry.confidence": number;
    /**
     *
     * -4
     *
     */
    "server_data.1v1shuffle.0.ratings.character_tom_and_jerry.streak": number;
    /**
     *
     * 1681522244432
     *
     */
    "server_data.1v1shuffle.0.ratings.character_tom_and_jerry.lastUpdateTimestamp": number;
    /**
     *
     * 274.7646051253028
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C017.mean": number;
    /**
     *
     * 113.03250797634259
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C017.deviance": number;
    /**
     *
     * 0.95
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C017.confidence": number;
    /**
     *
     * -2
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C017.streak": number;
    /**
     *
     * 1666215350157
     *
     */
    "server_data.1v1shuffle.0.ratings.character_C017.lastUpdateTimestamp": number;
    /**
     *
     * 668.1919163520225
     *
     */
    "server_data.shuffle.0.ratings.character_harleyquinn.mean": number;
    /**
     *
     * 193.77558094950902
     *
     */
    "server_data.shuffle.0.ratings.character_harleyquinn.deviance": number;
    /**
     *
     * 0.28181818181818186
     *
     */
    "server_data.shuffle.0.ratings.character_harleyquinn.confidence": number;
    /**
     *
     * -1
     *
     */
    "server_data.shuffle.0.ratings.character_harleyquinn.streak": number;
    /**
     *
     * 1662938484054
     *
     */
    "server_data.shuffle.0.ratings.character_harleyquinn.lastUpdateTimestamp": number;
    /**
     *
     * 983.0966038356964
     *
     */
    "server_data.2v2casual.0.ratings.character_shaggy.mean": number;
    /**
     *
     * 171.91947065754346
     *
     */
    "server_data.2v2casual.0.ratings.character_shaggy.deviance": number;
    /**
     *
     * 0.34709293509434747
     *
     */
    "server_data.2v2casual.0.ratings.character_shaggy.confidence": number;
    /**
     *
     * -1
     *
     */
    "server_data.2v2casual.0.ratings.character_shaggy.streak": number;
    /**
     *
     * 1668323397260
     *
     */
    "server_data.2v2casual.0.ratings.character_shaggy.lastUpdateTimestamp": number;
    /**
     *
     * character_shaggy
     *
     */
    "server_data.2v2casual.0.ratings.character_shaggy.character": string;
    /**
     *
     * 905.7866096552783
     *
     */
    "server_data.2v2casual.0.ratings.character_garnet.mean": number;
    /**
     *
     * 159.45198127150869
     *
     */
    "server_data.2v2casual.0.ratings.character_garnet.deviance": number;
    /**
     *
     * 0.4644248065008612
     *
     */
    "server_data.2v2casual.0.ratings.character_garnet.confidence": number;
    /**
     *
     * -2
     *
     */
    "server_data.2v2casual.0.ratings.character_garnet.streak": number;
    /**
     *
     * 1668323530093
     *
     */
    "server_data.2v2casual.0.ratings.character_garnet.lastUpdateTimestamp": number;
    /**
     *
     * 797.5318709086824
     *
     */
    "server_data.2v2casual.0.ratings.character_steven.mean": number;
    /**
     *
     * 164.32106372515162
     *
     */
    "server_data.2v2casual.0.ratings.character_steven.deviance": number;
    /**
     *
     * 0.23892074310982314
     *
     */
    "server_data.2v2casual.0.ratings.character_steven.confidence": number;
    /**
     *
     * -1
     *
     */
    "server_data.2v2casual.0.ratings.character_steven.streak": number;
    /**
     *
     * 1667770204331
     *
     */
    "server_data.2v2casual.0.ratings.character_steven.lastUpdateTimestamp": number;
    /**
     *
     * 681.6052367822049
     *
     */
    "server_data.2v2casual.0.ratings.character_c16.mean": number;
    /**
     *
     * 177.81384507006172
     *
     */
    "server_data.2v2casual.0.ratings.character_c16.deviance": number;
    /**
     *
     * 0.25475649366447267
     *
     */
    "server_data.2v2casual.0.ratings.character_c16.confidence": number;
    /**
     *
     * -3
     *
     */
    "server_data.2v2casual.0.ratings.character_c16.streak": number;
    /**
     *
     * 1667857820678
     *
     */
    "server_data.2v2casual.0.ratings.character_c16.lastUpdateTimestamp": number;
    /**
     *
     * 712.1278763527174
     *
     */
    "server_data.2v2casual.0.ratings.character_tom_and_jerry.mean": number;
    /**
     *
     * 152.85203425984363
     *
     */
    "server_data.2v2casual.0.ratings.character_tom_and_jerry.deviance": number;
    /**
     *
     * 0.5953323508955628
     *
     */
    "server_data.2v2casual.0.ratings.character_tom_and_jerry.confidence": number;
    /**
     *
     * -1
     *
     */
    "server_data.2v2casual.0.ratings.character_tom_and_jerry.streak": number;
    /**
     *
     * 1668321601754
     *
     */
    "server_data.2v2casual.0.ratings.character_tom_and_jerry.lastUpdateTimestamp": number;
    /**
     *
     * 856.1824419485556
     *
     */
    "server_data.2v2casual.0.ratings.character_bugs_bunny.mean": number;
    /**
     *
     * 178.20690113501686
     *
     */
    "server_data.2v2casual.0.ratings.character_bugs_bunny.deviance": number;
    /**
     *
     * 0.403820957549391
     *
     */
    "server_data.2v2casual.0.ratings.character_bugs_bunny.confidence": number;
    /**
     *
     * -2
     *
     */
    "server_data.2v2casual.0.ratings.character_bugs_bunny.streak": number;
    /**
     *
     * 1668394981802
     *
     */
    "server_data.2v2casual.0.ratings.character_bugs_bunny.lastUpdateTimestamp": number;
    "server_data.RecentlyToasted": string[];
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.Losses": number;
    /**
     *
     * 283
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.DamageDealt": number;
    /**
     *
     * 599
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.DamageTaken": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.Ringouts": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.Deaths": number;
    /**
     *
     * 2024-07-28T07:44:30.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_harleyquinn.LastUpdateTimestamp": string;
    /**
     *
     * 20
     *
     * 1321
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.CurrentPoints": number;
    /**
     *
     * 20
     *
     * 1321
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.MaxPoints": number;
    /**
     *
     * 3
     *
     * 84
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.GamesPlayed": number;
    /**
     *
     * 3
     *
     * 84
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.SetsPlayed": number;
    /**
     *
     * 1
     *
     * 53
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Wins": number;
    /**
     *
     * 2
     *
     * 52
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Losses": number;
    /**
     *
     * 400
     *
     * 21330
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.DamageDealt": number;
    /**
     *
     * 487
     *
     * 25209
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.DamageTaken": number;
    /**
     *
     * 4
     *
     * 223
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Ringouts": number;
    /**
     *
     * 8
     *
     * 165
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Deaths": number;
    /**
     *
     * 2024-07-24T07:08:16.000Z
     *
     * 2024-07-25T01:16:23.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 614
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 1178
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2024-08-27T04:22:38.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 15
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.CurrentPoints": number;
    /**
     *
     * 15
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Losses": number;
    /**
     *
     * 638
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.DamageDealt": number;
    /**
     *
     * 878
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.DamageTaken": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Ringouts": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Deaths": number;
    /**
     *
     * 2024-08-15T07:46:48.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C026.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.MaxPoints": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.Losses": number;
    /**
     *
     * 118
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.DamageDealt": number;
    /**
     *
     * 395
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.DamageTaken": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.Ringouts": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.Deaths": number;
    /**
     *
     * 2024-07-28T07:41:31.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_C018.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_BananaGuard.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Losses": number;
    /**
     *
     * 148
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.DamageDealt": number;
    /**
     *
     * 530
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.DamageTaken": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Ringouts": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.Deaths": number;
    /**
     *
     * 2024-08-27T04:58:35.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_taz.LastDecayMs": number;
    /**
     *
     * 42
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.CurrentPoints": number;
    /**
     *
     * 42
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Losses": number;
    /**
     *
     * 487
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.DamageDealt": number;
    /**
     *
     * 728
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.DamageTaken": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Ringouts": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Deaths": number;
    /**
     *
     * 2024-09-12T01:28:19.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Losses": number;
    /**
     *
     * 300
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageDealt": number;
    /**
     *
     * 729
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageTaken": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Ringouts": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Deaths": number;
    /**
     *
     * 2024-08-09T03:34:39.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_C026.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.Losses": number;
    /**
     *
     * 198
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.DamageDealt": number;
    /**
     *
     * 497
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.DamageTaken": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.Ringouts": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.Deaths": number;
    /**
     *
     * 2024-07-26T04:33:07.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonTwo.Ranked.DataByMode.2v2.DataByCharacter.character_steven.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.MaxPoints": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Losses": number;
    /**
     *
     * 489
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.DamageDealt": number;
    /**
     *
     * 1186
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.DamageTaken": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Ringouts": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.Deaths": number;
    /**
     *
     * 2024-10-30T04:32:33.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_C030.LastDecayMs": number;
    /**
     *
     * 35
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.CurrentPoints": number;
    /**
     *
     * 40
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.MaxPoints": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Losses": number;
    /**
     *
     * 352
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.DamageDealt": number;
    /**
     *
     * 1255
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.DamageTaken": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Ringouts": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Deaths": number;
    /**
     *
     * 2024-10-22T12:32:11.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.LastDecayMs": number;
    /**
     *
     * 90
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 90
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 14
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 2672
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 3939
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 27
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 32
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2024-11-12T03:02:49.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_jake.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.Losses": number;
    /**
     *
     * 871
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.DamageDealt": number;
    /**
     *
     * 785
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.DamageTaken": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.Ringouts": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.Deaths": number;
    /**
     *
     * 2024-11-10T06:10:05.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_c036.LastDecayMs": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.MaxPoints": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Losses": number;
    /**
     *
     * 756
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.DamageDealt": number;
    /**
     *
     * 1145
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.DamageTaken": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Ringouts": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.Deaths": number;
    /**
     *
     * 2024-11-12T02:24:19.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_velma.LastDecayMs": number;
    /**
     *
     * 84614
     *
     * 39172
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.FinalLeaderboardRank": number;
    /**
     *
     * 90
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.CurrentPoints": number;
    /**
     *
     * 90
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.MaxPoints": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.GamesPlayed": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.SetsPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Wins": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Losses": number;
    /**
     *
     * 1606
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageDealt": number;
    /**
     *
     * 2465
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageTaken": number;
    /**
     *
     * 15
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Ringouts": number;
    /**
     *
     * 15
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Deaths": number;
    /**
     *
     * 2024-11-12T07:09:07.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.DataByCharacter.character_C026.LastDecayMs": number;
    /**
     *
     * 93914
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.2v2.FinalLeaderboardRank": number;
    "server_data.SeasonalData.Season:SeasonThree.Ranked.bEndOfSeasonRewardsGranted": boolean;
    /**
     *
     * 2025-02-04T00:00:00.000Z
     *
     * 2025-01-03T00:00:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.LastLoginDay": string;
    /**
     *
     * 59
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.NumDaysLoggedIn": number;
    /**
     *
     * 201
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.NumLogins": number;
    /**
     *
     * 40
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Arenas.DataByMode.Normal.A1.CurrentPoints": number;
    /**
     *
     * 20
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Arenas.DataByMode.Normal.A2.CurrentPoints": number;
    /**
     *
     * 379
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.BestCharacter.CurrentPoints": number;
    /**
     *
     * 379
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.BestCharacter.MaxPoints": number;
    /**
     *
     * 54
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.BestCharacter.GamesPlayed": number;
    /**
     *
     * 27
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.BestCharacter.SetsPlayed": number;
    /**
     *
     * character_C026
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug": string;
    /**
     *
     * 2024-12-08T05:35:23.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 379
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.CurrentPoints": number;
    /**
     *
     * 379
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.MaxPoints": number;
    /**
     *
     * 54
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.GamesPlayed": number;
    /**
     *
     * 27
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.SetsPlayed": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Wins": number;
    /**
     *
     * 13
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Losses": number;
    /**
     *
     * 16491
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.DamageDealt": number;
    /**
     *
     * 17881
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.DamageTaken": number;
    /**
     *
     * 116
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Ringouts": number;
    /**
     *
     * 121
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Deaths": number;
    /**
     *
     * 2025-02-01T08:15:48.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C026.LastDecayMs": number;
    /**
     *
     * 120
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.CurrentPoints": number;
    /**
     *
     * 120
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.MaxPoints": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.GamesPlayed": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.SetsPlayed": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Wins": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Losses": number;
    /**
     *
     * 3606
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.DamageDealt": number;
    /**
     *
     * 3882
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.DamageTaken": number;
    /**
     *
     * 26
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Ringouts": number;
    /**
     *
     * 21
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.Deaths": number;
    /**
     *
     * 2024-12-23T16:06:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_garnet.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.Losses": number;
    /**
     *
     * 442
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.DamageDealt": number;
    /**
     *
     * 763
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.DamageTaken": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.Ringouts": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.Deaths": number;
    /**
     *
     * 2024-12-14T01:05:53.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C025.LastDecayMs": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.Losses": number;
    /**
     *
     * 1011
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.DamageDealt": number;
    /**
     *
     * 794
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.DamageTaken": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.Ringouts": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.Deaths": number;
    /**
     *
     * 2024-12-23T17:45:33.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C031.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.MaxPoints": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.Losses": number;
    /**
     *
     * 109
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.DamageDealt": number;
    /**
     *
     * 456
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.Ringouts": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.Deaths": number;
    /**
     *
     * 2024-12-28T03:56:01.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_c16.LastDecayMs": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Losses": number;
    /**
     *
     * 738
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.DamageDealt": number;
    /**
     *
     * 1043
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.DamageTaken": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Ringouts": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.Deaths": number;
    /**
     *
     * 2025-01-12T19:14:00.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_C017.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 552
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 862
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2025-01-26T23:28:10.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Losses": number;
    /**
     *
     * 1276
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.DamageDealt": number;
    /**
     *
     * 1346
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.DamageTaken": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Ringouts": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.Deaths": number;
    /**
     *
     * 2025-01-27T04:55:11.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_batman.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Losses": number;
    /**
     *
     * 1077
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.DamageDealt": number;
    /**
     *
     * 1174
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.DamageTaken": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Ringouts": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.Deaths": number;
    /**
     *
     * 2025-01-27T17:32:46.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.DataByCharacter.character_bugs_bunny.LastDecayMs": number;
    /**
     *
     * 82
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.GamesPlayed": number;
    /**
     *
     * 2025-02-01T08:15:48.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.LastUpdateTimestamp": string;
    /**
     *
     * 41
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.SetsPlayed": number;
    /**
     *
     * 25359
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.1v1.FinalLeaderboardRank": number;
    /**
     *
     * 348
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.BestCharacter.CurrentPoints": number;
    /**
     *
     * 348
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.BestCharacter.MaxPoints": number;
    /**
     *
     * 37
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.BestCharacter.GamesPlayed": number;
    /**
     *
     * 18
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.BestCharacter.SetsPlayed": number;
    /**
     *
     * character_C026
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.BestCharacter.CharacterSlug": string;
    /**
     *
     * 2024-12-22T19:46:11.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.BestCharacter.LastUpdateTimestamp": string;
    /**
     *
     * 348
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.CurrentPoints": number;
    /**
     *
     * 348
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.MaxPoints": number;
    /**
     *
     * 37
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.GamesPlayed": number;
    /**
     *
     * 18
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.SetsPlayed": number;
    /**
     *
     * 11
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Wins": number;
    /**
     *
     * 10
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Losses": number;
    /**
     *
     * 9542
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageDealt": number;
    /**
     *
     * 9827
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageTaken": number;
    /**
     *
     * 52
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Ringouts": number;
    /**
     *
     * 61
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Deaths": number;
    /**
     *
     * 2025-01-18T07:07:59.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_C026.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.MaxPoints": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.GamesPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Losses": number;
    /**
     *
     * 1620
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.DamageDealt": number;
    /**
     *
     * 2625
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.DamageTaken": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Ringouts": number;
    /**
     *
     * 16
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Deaths": number;
    /**
     *
     * 2025-01-18T05:33:56.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.LastDecayMs": number;
    /**
     *
     * 164
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.CurrentPoints": number;
    /**
     *
     * 164
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.MaxPoints": number;
    /**
     *
     * 13
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.GamesPlayed": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.SetsPlayed": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Wins": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Losses": number;
    /**
     *
     * 2193
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageDealt": number;
    /**
     *
     * 3525
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.DamageTaken": number;
    /**
     *
     * 9
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Ringouts": number;
    /**
     *
     * 21
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.Deaths": number;
    /**
     *
     * 2025-01-18T05:47:12.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_tom_and_jerry.LastDecayMs": number;
    /**
     *
     * 186
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.CurrentPoints": number;
    /**
     *
     * 186
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.MaxPoints": number;
    /**
     *
     * 11
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.GamesPlayed": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.SetsPlayed": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.Wins": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.Losses": number;
    /**
     *
     * 3116
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.DamageDealt": number;
    /**
     *
     * 3387
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.DamageTaken": number;
    /**
     *
     * 18
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.Ringouts": number;
    /**
     *
     * 20
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.Deaths": number;
    /**
     *
     * 2025-01-18T05:16:40.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_batman.LastDecayMs": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.MaxPoints": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.Losses": number;
    /**
     *
     * 1139
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.DamageDealt": number;
    /**
     *
     * 2113
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.DamageTaken": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.Ringouts": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.Deaths": number;
    /**
     *
     * 2025-01-18T06:05:12.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_superman.LastDecayMs": number;
    /**
     *
     * 71
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.CurrentPoints": number;
    /**
     *
     * 71
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.MaxPoints": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.SetsPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Losses": number;
    /**
     *
     * 1361
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.DamageDealt": number;
    /**
     *
     * 2156
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.DamageTaken": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Ringouts": number;
    /**
     *
     * 12
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.Deaths": number;
    /**
     *
     * 2025-01-18T06:55:44.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_c024.LastDecayMs": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.CurrentPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Wins": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Losses": number;
    /**
     *
     * 630
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.DamageDealt": number;
    /**
     *
     * 877
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.DamageTaken": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Ringouts": number;
    /**
     *
     * 7
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.Deaths": number;
    /**
     *
     * 2025-01-18T07:04:09.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.DataByCharacter.character_harleyquinn.LastDecayMs": number;
    /**
     *
     * 84
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.GamesPlayed": number;
    /**
     *
     * 2025-01-18T07:07:59.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.LastUpdateTimestamp": string;
    /**
     *
     * 37
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.SetsPlayed": number;
    /**
     *
     * 35672
     *
     */
    "server_data.SeasonalData.Season:SeasonFour.Ranked.DataByMode.2v2.FinalLeaderboardRank": number;
    "server_data.SeasonalData.Season:SeasonFour.Ranked.bEndOfSeasonRewardsGranted": boolean;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.CurrentPoints": number;
    /**
     *
     * 30
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.MaxPoints": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.GamesPlayed": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Wins": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Losses": number;
    /**
     *
     * 778
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageDealt": number;
    /**
     *
     * 812
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.DamageTaken": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Ringouts": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.Deaths": number;
    /**
     *
     * 2025-03-03T07:26:39.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_C026.LastDecayMs": number;
    /**
     *
     * 45
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.CurrentPoints": number;
    /**
     *
     * 45
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.MaxPoints": number;
    /**
     *
     * 2
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.GamesPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.SetsPlayed": number;
    /**
     *
     * 1
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Losses": number;
    /**
     *
     * 553
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.DamageDealt": number;
    /**
     *
     * 572
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.DamageTaken": number;
    /**
     *
     * 5
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Ringouts": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.Deaths": number;
    /**
     *
     * 2025-03-03T07:33:05.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.DataByCharacter.character_garnet.LastDecayMs": number;
    /**
     *
     * 102
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.CurrentPoints": number;
    /**
     *
     * 102
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.MaxPoints": number;
    /**
     *
     * 8
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.GamesPlayed": number;
    /**
     *
     * 6
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.SetsPlayed": number;
    /**
     *
     * 3
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Wins": number;
    /**
     *
     * 4
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Losses": number;
    /**
     *
     * 2369
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.DamageDealt": number;
    /**
     *
     * 2969
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.DamageTaken": number;
    /**
     *
     * 17
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Ringouts": number;
    /**
     *
     * 18
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.Deaths": number;
    /**
     *
     * 2025-03-03T12:19:41.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.DataByCharacter.character_C026.LastDecayMs": number;
    /**
     *
     * 2024-08-27T05:21:59.000Z
     *
     */
    "inventory.character_superman.created_at": string;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_garnet.perk_general_evadedistance_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_superman.perk_superman_fireslam": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_superman.perk_superman_sniperpunch": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_superman.perk_general_laststand": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_superman.perk_general_backtoback": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_velma.perk_general_evadebaseinvulnerability_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_velma.perk_velma_studied": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_velma.perk_velma_knowledgeispower": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_velma.perk_general_sniper": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_jake.perk_general_wallbouncereduction_small": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_superman.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_velma.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_velma.perk_training_enabled": number;
    /**
     *
     * character_steven
     *
     */
    "server_data.2v2shuffle.0.ratings.character_steven.character": string;
    /**
     *
     * 624.0838419670508
     *
     */
    "server_data.2v2shuffle.0.ratings.character_velma.mean": number;
    /**
     *
     * 159.08900879768765
     *
     */
    "server_data.2v2shuffle.0.ratings.character_velma.deviance": number;
    /**
     *
     * 0.5909743144469064
     *
     */
    "server_data.2v2shuffle.0.ratings.character_velma.confidence": number;
    /**
     *
     * 1
     *
     */
    "server_data.2v2shuffle.0.ratings.character_velma.streak": number;
    /**
     *
     * 1659263559168
     *
     */
    "server_data.2v2shuffle.0.ratings.character_velma.lastUpdateTimestamp": number;
    /**
     *
     * 7
     *
     */
    "matches.custom_container_one_player_online.win": number;
    /**
     *
     * 3
     *
     */
    "matches.custom_container_one_player_online.loss": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player_online.challenge_win": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player_online.challenge_loss": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player_online.win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player_online.loss_streak": number;
    /**
     *
     * 5
     *
     */
    "matches.custom_container_one_player_online.longest_win_streak": number;
    /**
     *
     * 0
     *
     */
    "matches.custom_container_one_player_online.longest_loss_streak": number;
    /**
     *
     * 2278
     *
     */
    "server_data.stat_trackers.ranked.1v1-ranked-season.ranked-launch-preseason": number;
    /**
     *
     * 210.5901336669922
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_jake": number;
    /**
     *
     * 274.2230224609375
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_C023A": number;
    /**
     *
     * 61.910457611083984
     *
     */
    "server_data.stat_trackers.season1.character_highest_damage_dealt.character_C017": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_jake": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_C023A": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_arya": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_matches.character_C017": number;
    /**
     *
     * 297.63531494140625
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_jake": number;
    /**
     *
     * 274.2230224609375
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_C023A": number;
    /**
     *
     * 61.910457611083984
     *
     */
    "server_data.stat_trackers.season1.character_total_damage_dealt.character_C017": number;
    /**
     *
     * 7
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_velma": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_jake": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_C023A": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_arya": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_wins.character_C017": number;
    /**
     *
     * 4
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_jake": number;
    /**
     *
     * 3
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_C023A": number;
    /**
     *
     * 1
     *
     */
    "server_data.stat_trackers.season1.character_ringouts.character_C017": number;
    /**
     *
     * 2
     *
     */
    "server_data.stat_trackers.season2.ranked.1v1.CharactersInGold": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_horizontalknockbackboost": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_finn_gemoncharge": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_evadespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_armorondeath": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_paintedtarget": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_evadebaseinvulnerability_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_finn.perk_general_damagereduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_fastfall_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_abilityrefundondodge": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_c016_hothands": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_c016_distanceshot": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_jumpheight_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_airmeleedamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_c016_keeppossession": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_groundmeleedamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_backtoback": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_armorondeath": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_wallbouncereduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_aircontrol_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_directionalinfluence_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_projectileblock": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_dodgereflect": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_dodgearmor": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_abilityrefundontakeprojectilekb": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_damagereduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_evadebaseinvulnerability_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_evaderechargetime_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_abilitycooldownreduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_jumpcount": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_laststand": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_projectilegrayhealth": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_evadedistance_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_evadespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_inmemoriam": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_jumpspeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_movespeed_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_chargearmorbreak": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_culltheweak": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_projectiledamageboost_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_sniper": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_c16.perk_general_fireprojectile": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_abilitycooldownreduction_small": number;
    /**
     *
     * 1
     *
     */
    "server_data.OwnedPerks.character_C018.perk_general_jumpcount": number;
    /**
     *
     * character_finn
     *
     */
    "server_data.1v1shuffle.0.ratings.character_finn.character": string;
    /**
     *
     * character_c16
     *
     */
    "server_data.1v1shuffle.0.ratings.character_c16.character": string;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_finn.perk_training_enabled": number;
    /**
     *
     * 6
     *
     */
    "server_data.Characters.character_c16.ally_perk_sharing": number;
    /**
     *
     * 9
     *
     */
    "server_data.Characters.character_c16.perk_training_enabled": number;
    /**
     *
     * 891.8181598882858
     *
     */
    "server_data.shuffle.0.ratings.character_c16.mean": number;
    /**
     *
     * 233.17855957969797
     *
     */
    "server_data.shuffle.0.ratings.character_c16.deviance": number;
    /**
     *
     * 0.23917223008874097
     *
     */
    "server_data.shuffle.0.ratings.character_c16.confidence": number;
    /**
     *
     * -2
     *
     */
    "server_data.shuffle.0.ratings.character_c16.streak": number;
    /**
     *
     * 1664213485693
     *
     */
    "server_data.shuffle.0.ratings.character_c16.lastUpdateTimestamp": number;
    /**
     *
     * character_c16
     *
     */
    "server_data.2v2shuffle.0.ratings.character_c16.character": string;
    "server_data.ranked_participation_reward_granted": boolean;
    "server_data.ranked_leaver_punishment": {};
    /**
     *
     * 321
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.CurrentPoints": number;
    /**
     *
     * 321
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.Deaths": number;
    /**
     *
     * 2024-10-24T19:56:29.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_shaggy.LastDecayMs": number;
    /**
     *
     * 512
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.CurrentPoints": number;
    /**
     *
     * 512
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.MaxPoints": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.GamesPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.SetsPlayed": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Wins": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Losses": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.DamageDealt": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.DamageTaken": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Ringouts": number;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.Deaths": number;
    /**
     *
     * 2024-10-24T19:56:29.000Z
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.LastUpdateTimestamp": string;
    /**
     *
     * 0
     *
     */
    "server_data.SeasonalData.Season:SeasonThree.Ranked.DataByMode.1v1.DataByCharacter.character_Jason.LastDecayMs": number;
    /**
     *
     * MVS_Store_Organization_Experiment-control
     *
     */
    "server_data.exm_segment_membership.exm_experiment_arm_map.51a7a475890e22b47030b8d98e597071": string;
    /**
     *
     * MVS_Store_Organization_Experiment-control
     *
     */
    "server_data.exm_segment_membership.exm_experiment_arm_map.a207d9d38b1fcc9eb765febba4657207": string;
    /**
     *
     * MVS_Store_Organization_Experiment-control
     *
     */
    "server_data.exm_segment_membership.exm_experiment_arm_map.f62874d13265b0e650b33d809560f329": string;
  }

  export interface Profiles_search_queries_get_by_username_run_RESPONSE {
    /**
     *
     * 1
     *
     */
    count: number;
    cursor: {};
    results: {
      result: {
        account: {
          "auth.wb_network": {
            /**
             *
             * 2023-01-23T21:17:48.000Z
             *
             */
            created_at: string;
            /**
             *
             * pafd8d7950aa1484ea791d06662fa75ce
             *
             */
            id: string;
          }[];
          /**
           *
           * 2023-01-23T21:17:48.000Z
           *
           */
          created_at: string;
          /**
           *
           * 1674508690
           *
           */
          "data.EULAAcceptTimestamp": number;
          /**
           *
           * 5
           *
           */
          "data.EULAAcceptVersion": number;
          /**
           *
           * EPlatform::PC
           *
           */
          "data.LastLoginPlatform": string;
          /**
           *
           * character_C018
           *
           */
          "data.LastPlayedCharacterSlug": string;
          deleted: boolean;
          /**
           *
           * unverified
           *
           */
          "email_verification.state": string;
          /**
           *
           * 63cef97ced0619f458cfac8f
           *
           */
          id: string;
          "identity.alternate.steam": {
            /**
             *
             * https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg
             *
             */
            avatar: string;
            email: {};
            /**
             *
             * 76561195177950873
             *
             */
            id: string;
            /**
             *
             * multiversuskoth
             *
             */
            username: string;
          }[];
          "identity.alternate.wb_network": {
            avatar: {};
            email: {};
            /**
             *
             * pafd8d7950aa1484ea791d06662fa75ce
             *
             */
            id: string;
            /**
             *
             * MultiVersusKOTH
             *
             */
            username: string;
          }[];
          /**
           *
           * https://s3.amazonaws.com/wb-agora-hydra-ugc-dokken/identicons/identicon.584.png
           *
           */
          "identity.avatar": string;
          /**
           *
           * steam
           *
           */
          "identity.current_platform": string;
          "identity.default_username": boolean;
          "identity.is_cross_platform": boolean;
          "identity.platforms": string[];
          /**
           *
           * dark-wild-grass-voice-yRPU2
           *
           */
          "identity.username": string;
          "identity.usernames": {
            /**
             *
             * hydra
             *
             */
            auth: string;
            /**
             *
             * dark-wild-grass-voice-yrpu2
             *
             */
            username: string;
          }[];
          /**
           *
           * en-US
           *
           */
          locale: string;
          "opt_ins.wbplay_optin": boolean;
          orphaned: boolean;
          orphaned_reason: {};
          /**
           *
           * 0
           *
           */
          points: number;
          /**
           *
           * online
           *
           */
          presence: string;
          /**
           *
           * 1
           *
           */
          presence_state: number;
          /**
           *
           * default
           *
           */
          "privacy_levels.clan.invitation": string;
          /**
           *
           * default
           *
           */
          "privacy_levels.match.invitation": string;
          /**
           *
           * default
           *
           */
          "privacy_levels.presence.state": string;
          /**
           *
           * default
           *
           */
          "privacy_levels.relationship.follow": string;
          /**
           *
           * paee40f62bd814a53bf9f4d21e43ea2c1
           *
           */
          public_id: string;
          /**
           *
           * 2
           *
           */
          "server_data.AntiCheatServerKick": number;
          /**
           *
           * 2025-03-10T12:00:00.000Z
           *
           */
          "server_data.LastDailyRefresh": string;
          /**
           *
           * 0
           *
           */
          "server_data.LastKnownDebugDelta": number;
          /**
           *
           * PC
           *
           */
          "server_data.LastLoginPlatform": string;
          /**
           *
           * Tue Mar 14 2023 00:14:29 GMT+0000 (Coordinated Universal Time)
           *
           */
          "server_data.LastLoginTime": string;
          /**
           *
           * 2023-03-14T17:44:29.198Z
           *
           */
          "server_data.LastLogoutTime": string;
          /**
           *
           * evt_battlepass_season_five
           *
           */
          "server_data.LastRefreshBattlepassEvent": string;
          /**
           *
           * Season:SeasonFive
           *
           */
          "server_data.LastRefreshSeason": string;
          /**
           *
           * 2025-03-04T12:00:00.000Z
           *
           */
          "server_data.LastWeeklyRefresh": string;
          "server_data.OpenBeta": boolean;
          /**
           *
           * /Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_Default.ProfileIcon_Default
           *
           */
          "server_data.ProfileIcon.AssetPath": string;
          /**
           *
           * profile_icon_default
           *
           */
          "server_data.ProfileIcon.Slug": string;
          /**
           *
           * 300
           *
           */
          "server_data.RestedXP": number;
          /**
           *
           * 2024-06-24T16:24:37.000Z
           *
           */
          "server_data.RetroactiveRiftBattlepassPayoutTime": string;
          "server_data.Transforms.BannerKnightSlugFixed": boolean;
          /**
           *
           * 2024-11-12T19:37:33.000Z
           *
           */
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
          /**
           *
           * 2024-12-13T15:39:16.000Z
           *
           */
          "server_data.Transforms.SeasonFourAcademiaMakeGood": string;
          /**
           *
           * 0
           *
           */
          "server_data.Transforms.SeasonFourAcademiaMakeGoodScoreGranted": number;
          /**
           *
           * 2024-11-15T23:28:01.000Z
           *
           */
          "server_data.Transforms.ShaggySkinMakeGoodS4": string;
          /**
           *
           * 2024-08-07T01:07:34.000Z
           *
           */
          "server_data.Transforms.UpgradeWarMakeGood_8_5_2024": string;
          /**
           *
           * normal
           *
           */
          state: string;
          /**
           *
           * 2025-03-10T15:48:42.000Z
           *
           */
          updated_at: string;
          /**
           *
           * adult
           *
           */
          "wb_account.age_category": string;
          "wb_account.completed": boolean;
          "wb_account.email_verified": boolean;
          wbplay_data_synced: boolean;
          wbplay_identity: {};
        };
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        account_id: string;
        /**
         *
         * current_value
         *
         */
        "aggregates.fighter-road-xp.type_class": string;
        /**
         *
         * 203423
         *
         */
        "aggregates.fighter-road-xp.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s1-battlepass-score.type_class": string;
        /**
         *
         * 6000
         *
         */
        "aggregates.s1-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s3-battlepass-score.type_class": string;
        /**
         *
         * 133729
         *
         */
        "aggregates.s3-battlepass-score.value": number;
        /**
         *
         * current_value
         *
         */
        "aggregates.s4-battlepass-score.type_class": string;
        /**
         *
         * 50430
         *
         */
        "aggregates.s4-battlepass-score.value": number;
        /**
         *
         * 2023-01-23T21:17:48.000Z
         *
         */
        created_at: string;
        files: any[];
        /**
         *
         * 63cef97ced0619f458cfac90
         *
         */
        id: string;
        /**
         *
         * 2025-03-10T15:48:40.000Z
         *
         */
        last_login: string;
        points: {};
        /**
         *
         * 0.25115115419482414
         *
         */
        random_distribution: number;
        /**
         *
         * 2025-03-10T15:48:42.000Z
         *
         */
        updated_at: string;
      };
      score: {};
    }[];
    /**
     *
     * 0
     *
     */
    start: number;
    /**
     *
     * 1
     *
     */
    total: number;
  }

  export interface Sdk_v1_default_RESPONSE {
    client: {
      "/Script/Engine.NetworkSettings": {
        "n.VerifyPeer": boolean;
      };
      "AntiCheat.GameplayData": {
        /**
         *
         * wss://api.epicgames.dev/cerberus-edge/v1/
         *
         */
        Url: string;
      };
      AuthClient: {
        /**
         *
         * eos.`client_id://epic/auth
         *
         */
        AccountPortalScheme: string;
        /**
         *
         * lang=`code
         *
         */
        AccountPortalURLLocaleSuffix: string;
        /**
         *
         * https://epicgames.com/id/authorize?client_id=`client_id&response_type=code&scope=`scope&redirect_uri=`redirect_uri&display=popup&prompt=login
         *
         */
        AuthorizeCodeEndpoint: string;
        /**
         *
         * https://epicgames.com/id/embedded/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade
         *
         */
        AuthorizeContinuationEmbeddedEndpoint: string;
        /**
         *
         * https://epicgames.com/id/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade
         *
         */
        AuthorizeContinuationEndpoint: string;
        /**
         *
         * https://epicgames.com/id/authorize?exchange_code=`exchange_code&scope=`scope&prompt=skip_merge%20skip_upgrade
         *
         */
        AuthorizeEndpoint: string;
        /**
         *
         * 300
         *
         */
        IdTokenCacheMinExpirySeconds: number;
        /**
         *
         * 300
         *
         */
        PollExpiresIn: number;
        /**
         *
         * 5
         *
         */
        PollInterval: number;
        /**
         *
         * 100
         *
         */
        RefreshTokenThreshold: number;
        /**
         *
         * https://epicgames.com/id/register/quick/minor/await?code=`challenge_id&display=embedded
         *
         */
        VPCRegisterURL: string;
        /**
         *
         * 60
         *
         */
        VerifyTokenInterval: number;
        bFailLoginIfExternalAccountIdDoesNotMatchAuthToken: boolean;
        bOfflineAccountToken: boolean;
      };
      BaseService: {
        /**
         *
         * 4
         *
         */
        HttpRetryLimit: number;
        HttpRetryResponseCodes: number[];
      };
      ConnectClient: {
        /**
         *
         * 128
         *
         */
        MaxProductUserIdMappingsQueryUserIds: number;
        /**
         *
         * 900
         *
         */
        MinProductUserIdMappingsUpdateTimeInSeconds: number;
      };
      "Core.Log": {
        /**
         *
         * verbose
         *
         */
        LogCore: string;
        /**
         *
         * verbose
         *
         */
        LogEOS: string;
        /**
         *
         * verbose
         *
         */
        LogEOSAuth: string;
        /**
         *
         * verbose
         *
         */
        LogEOSConnect: string;
        /**
         *
         * verbose
         *
         */
        LogEOSMessaging: string;
        /**
         *
         * verbose
         *
         */
        LogEOSSessions: string;
        /**
         *
         * warning
         *
         */
        LogHttp: string;
        /**
         *
         * verbose
         *
         */
        LogHttpSerialization: string;
        /**
         *
         * verbose
         *
         */
        LogStomp: string;
        /**
         *
         * verbose
         *
         */
        LogXmpp: string;
      };
      DataStorageClient: {
        /**
         *
         * 300
         *
         */
        AccessLinkDurationSeconds: number;
        /**
         *
         * 10
         *
         */
        MaxSimultaneousReads: number;
        /**
         *
         * 10
         *
         */
        MaxSimultaneousWrites: number;
      };
      EcomClient: {
        /**
         *
         * EPIC_BEARER_TOKEN
         *
         */
        PurchaseCookieName: string;
        /**
         *
         * https://www.epicgames.com/ecom/payment/v2/purchase
         *
         */
        PurchaseEpicIdMobileLandscapeUrl: string;
        /**
         *
         * https://www.epicgames.com/ecom/payment/v2/purchase
         *
         */
        PurchaseEpicIdMobilePortraitUrl: string;
        /**
         *
         * https://www.epicgames.com/ecom/payment/v1/purchase
         *
         */
        PurchaseEpicIdUrl: string;
        /**
         *
         * https://launcher-website-prod07.ol.epicgames.com/purchase
         *
         */
        PurchaseUrl: string;
      };
      HTTP: {
        /**
         *
         * 60
         *
         */
        HttpConnectionTimeout: number;
        /**
         *
         * 30
         *
         */
        HttpReceiveTimeout: number;
        /**
         *
         * 30
         *
         */
        HttpSendTimeout: number;
        /**
         *
         * 30
         *
         */
        HttpTimeout: number;
        /**
         *
         * 2
         *
         */
        MaxFlushTimeSeconds: number;
        bEnableHttp: boolean;
      };
      InventoryClient: {
        /**
         *
         * https://api.epicgames.dev/inventory
         *
         */
        BaseUrl: string;
        HttpRetryResponseCodes: number[];
        HttpRetryVerbs: string[];
        /**
         *
         * Session
         *
         */
        LockType: string;
        /**
         *
         * 10
         *
         */
        MaxNumberOfLockEntriesPerRequest: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelLockRequestsInFlight: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelUpdateRequestsInFlight: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelLockTask: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelUpdateTask: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfWriteEntriesPerRequest: number;
        /**
         *
         * 0
         *
         */
        QueryInventoryPageLimit: number;
        /**
         *
         * 60
         *
         */
        SessionLockTTLSeconds: number;
        /**
         *
         * 20
         *
         */
        SessionLockUpdateIntervalRandomAddSeconds: number;
        /**
         *
         * 30
         *
         */
        SessionLockUpdateIntervalSeconds: number;
      };
      "InventoryClient.WorldInventory": {
        /**
         *
         * Session
         *
         */
        LockType: string;
        /**
         *
         * 10485760
         *
         */
        MaxBinaryDataSizeBytes: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfLockEntriesPerRequest: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelLockRequestsInFlight: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfParallelQueryRequestsInFlight: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelUpdateRequestsInFlight: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelLockTask: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelUpdateTask: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfWriteEntriesPerRequest: number;
        /**
         *
         * 0
         *
         */
        QueryInventoryPageLimit: number;
        /**
         *
         * 60
         *
         */
        SessionLockTTLSeconds: number;
        /**
         *
         * 20
         *
         */
        SessionLockUpdateIntervalRandomAddSeconds: number;
        /**
         *
         * 30
         *
         */
        SessionLockUpdateIntervalSeconds: number;
      };
      LeaderboardsClient: {
        /**
         *
         * 25
         *
         */
        MaxUserScoresQueryStats: number;
        /**
         *
         * 100
         *
         */
        MaxUserScoresQueryUserIds: number;
      };
      LobbyClient: {
        /**
         *
         * 30
         *
         */
        HeartbeatIntervalSecs: number;
        /**
         *
         * 100
         *
         */
        InitialResendDelayMs: number;
        /**
         *
         * 5
         *
         */
        InitialRetryDelaySeconds: number;
        /**
         *
         * wss://api.epicgames.dev/lobby/v1/`deploymentId/lobbies/connect
         *
         */
        LobbySocketURL: string;
        /**
         *
         * 3
         *
         */
        MaxConnectionRetries: number;
        /**
         *
         * 2000
         *
         */
        MaxResendDelayMs: number;
        /**
         *
         * 15
         *
         */
        MaxRetryIntervalSeconds: number;
        /**
         *
         * 3
         *
         */
        MaxSendRetries: number;
        /**
         *
         * 5
         *
         */
        NumConsecutiveFailuresAllowed: number;
        /**
         *
         * 2
         *
         */
        RecoveryWaitTimeSecs: number;
        /**
         *
         * 5
         *
         */
        SentMessageTimeout: number;
        /**
         *
         * 15
         *
         */
        WebSocketConnectTaskMaxNetworkWaitSeconds: number;
        bDisableRTCVoice: boolean;
      };
      LogFiles: {
        /**
         *
         * SinceStart
         *
         */
        LogTimes: string;
        /**
         *
         * 5
         *
         */
        MaxLogFilesOnDisk: number;
        /**
         *
         * 5
         *
         */
        PurgeLogsDays: number;
      };
      "Messaging.EpicConnect": {
        /**
         *
         * 30000
         *
         */
        ClientHeartbeatIntervalMilliseconds: number;
        /**
         *
         * 5
         *
         */
        FailedConnectionDelayIntervalSeconds: number;
        /**
         *
         * 180
         *
         */
        FailedConnectionDelayMaxSeconds: number;
        /**
         *
         * 2.5
         *
         */
        FailedConnectionDelayMultiplier: number;
        /**
         *
         * 2
         *
         */
        RetryBackoffExponentialBase: number;
        /**
         *
         * 0
         *
         */
        RetryBackoffExponentialExponentBias: number;
        /**
         *
         * 1
         *
         */
        RetryBackoffJitterCoefficientMax: number;
        /**
         *
         * 0.5
         *
         */
        RetryBackoffJitterCoefficientMin: number;
        /**
         *
         * 180
         *
         */
        RetryBackoffMaxSeconds: number;
        /**
         *
         * 0
         *
         */
        ServerHeartbeatIntervalMilliseconds: number;
        /**
         *
         * wss://connect.epicgames.dev
         *
         */
        Url: string;
        /**
         *
         * wss://connect.epicgames.dev/v2
         *
         */
        Urlv2: string;
        UseV2Connection: boolean;
      };
      "Messaging.Stomp": {
        BlocklistMessageTypeFilters: string[];
        /**
         *
         * 30000
         *
         */
        ClientHeartbeatIntervalMs: number;
        /**
         *
         * 0
         *
         */
        RequestedServerHeartbeatIntervalMs: number;
        /**
         *
         * wss://api.epicgames.dev/notifications/v1/`deploymentid`/connect
         *
         */
        Url: string;
      };
      "Messaging.XMPP": {
        /**
         *
         * prod.ol.epicgames.com
         *
         */
        Domain: string;
        /**
         *
         * 60
         *
         */
        PingInterval: number;
        /**
         *
         * 30
         *
         */
        PingTimeout: number;
        /**
         *
         * 2
         *
         */
        ReconnectionDelayBackoffExponent: number;
        /**
         *
         * 4
         *
         */
        ReconnectionDelayBase: number;
        /**
         *
         * 1.5
         *
         */
        ReconnectionDelayJitter: number;
        /**
         *
         * 300
         *
         */
        ReconnectionDelayMax: number;
        /**
         *
         * wss://xmpp-service-prod.ol.epicgames.com
         *
         */
        ServerAddr: string;
        /**
         *
         * 443
         *
         */
        ServerPort: number;
        bPrivateChatFriendsOnly: boolean;
      };
      MetricsClient: {
        /**
         *
         * 2
         *
         */
        HttpRetryLimit: number;
      };
      P2PClient: {
        IceServers: string[];
        /**
         *
         * 7876
         *
         */
        P2PMaxPort: number;
        /**
         *
         * 7777
         *
         */
        P2PMinPort: number;
      };
      PresenceClient: {
        /**
         *
         * 5
         *
         */
        EpicConnectNotificationWaitTime: number;
        /**
         *
         * 600
         *
         */
        PresenceAutoUpdateInSeconds: number;
        /**
         *
         * 60
         *
         */
        PresenceQueryTimeoutSeconds: number;
        bSetOfflineOnLogoutEnabled: boolean;
        bSetOfflineOnShutdownEnabled: boolean;
      };
      RateLimiter: {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AchievementsClient": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AchievementsClient.Operations": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatClient": {
        /**
         *
         * 120
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatClient.Operations": {
        /**
         *
         * 120
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatServer": {
        /**
         *
         * 100000
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatServer.Operations": {
        /**
         *
         * 100000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AuthClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AuthClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AuthClient.SensitiveOperations": {
        /**
         *
         * 12
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ConnectClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ConnectClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.CustomInvitesClient": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.CustomInvitesClient.Operations": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.DataStorageClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.DataStorageClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.EcomClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.EcomClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.FriendClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.FriendClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.InventoryClient": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.InventoryClient.Operations": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.InventoryClient.WorldInventory.Operations": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.KWSClient": {
        /**
         *
         * 20
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.KWSClient.Operations": {
        /**
         *
         * 20
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LeaderboardsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LeaderboardsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LobbyClient": {
        /**
         *
         * 30
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LobbyClient.Operations": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LobbyClient.ThrottledOperations": {
        /**
         *
         * 30
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MatchmakingClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MatchmakingClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MetricsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MetricsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ModsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ModsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.PresenceClient": {
        /**
         *
         * 60
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.PresenceClient.Operations": {
        /**
         *
         * 3
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 20
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ProgressionSnapshot": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ProgressionSnapshot.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.RTCAdminClient": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.RTCAdminClient.Operations": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReceiptValidatorClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReceiptValidatorClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReportsClient": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReportsClient.Operations": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SDKConfigClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SDKConfigClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SanctionsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SanctionsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SessionsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SessionsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.StatsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.StatsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.TitleStorageClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.TitleStorageClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.UserInfoClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.UserInfoClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.WorldInventoryClient": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.WorldInventoryClient.Operations": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      SDKAnalytics: {
        /**
         *
         * Production
         *
         */
        AppEnvironment: string;
        /**
         *
         * https://api.epicgames.dev/telemetry/data/
         *
         */
        BaseUrl: string;
        /**
         *
         * 2
         *
         */
        DevPhase: number;
        /**
         *
         * sdkevents
         *
         */
        UploadType: string;
      };
      SanitizerClient: {
        /**
         *
         * *
         *
         */
        ReplaceChar: string;
        /**
         *
         * 10
         *
         */
        RequestLimit: number;
      };
      SessionsClient: {
        /**
         *
         * 30
         *
         */
        HeartbeatIntervalSecs: number;
      };
      StatsClient: {
        /**
         *
         * 1900
         *
         */
        MaxQueryStatsStatNamesStrLength: number;
      };
      TitleStorageClient: {
        /**
         *
         * 300
         *
         */
        AccessLinkDurationSeconds: number;
        /**
         *
         * 2
         *
         */
        ClearInvalidFileCacheFrequencyDays: number;
        /**
         *
         * 10
         *
         */
        MaxSimultaneousReads: number;
        /**
         *
         * 7
         *
         */
        UnusedCachedFileDaysToLive: number;
      };
      UIClient: {
        /**
         *
         * https://overlay-override-service.cbce.live.on.epicgames.com/
         *
         */
        FriendsURL: string;
        /**
         *
         * ?exchange_code=`exchange_code
         *
         */
        FriendsURLExchangeCodeSuffix: string;
        /**
         *
         * cf27c69fe66441e8a8a4e8faf396ee4c
         *
         */
        SocialSPAClientId: string;
        /**
         *
         * https://epicgames.com/id/overlay/quick/minor/verify?code=`challenge_id
         *
         */
        VPCURL: string;
        /**
         *
         * &lang=`code
         *
         */
        VPCURLLocaleSuffix: string;
      };
      "UIClient.SocialURLQueryParamNames": {
        /**
         *
         * deployment_id
         *
         */
        DeploymentId: string;
        /**
         *
         * exchange_code
         *
         */
        ExchangeCode: string;
        /**
         *
         * integrated_platform_name
         *
         */
        IntegratedPlatformName: string;
        /**
         *
         * os_name
         *
         */
        OSName: string;
        /**
         *
         * os_version
         *
         */
        OSVersion: string;
        /**
         *
         * product_id
         *
         */
        ProductId: string;
        /**
         *
         * sdk_cl_number
         *
         */
        SDKCLNumber: string;
        /**
         *
         * sdk_version
         *
         */
        SDKVersion: string;
        /**
         *
         * user_id
         *
         */
        UserId: string;
      };
      "WebSockets.LibWebSockets": {
        /**
         *
         * 0
         *
         */
        ThreadMinimumSleepTimeInSeconds: number;
        /**
         *
         * 131072
         *
         */
        ThreadStackSize: number;
        /**
         *
         * 0.0333
         *
         */
        ThreadTargetFrameTimeInSeconds: number;
      };
      WorldInventoryClient: {
        HttpRetryResponseCodes: number[];
        /**
         *
         * Session
         *
         */
        LockType: string;
        /**
         *
         * 10485760
         *
         */
        MaxBinaryDataSizeBytes: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfLockEntriesPerRequest: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelLockRequestsInFlight: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfParallelQueryRequestsInFlight: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelUpdateRequestsInFlight: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelLockTask: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelUpdateTask: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfWriteEntriesPerRequest: number;
        /**
         *
         * 0
         *
         */
        QueryInventoryPageLimit: number;
        /**
         *
         * 60
         *
         */
        SessionLockTTLSeconds: number;
        /**
         *
         * 20
         *
         */
        SessionLockUpdateIntervalRandomAddSeconds: number;
        /**
         *
         * 30
         *
         */
        SessionLockUpdateIntervalSeconds: number;
      };
      XMPP: {
        /**
         *
         * 131072
         *
         */
        ThreadStackSize: number;
        bEnableWebsockets: boolean;
        bEnabled: boolean;
      };
    };
    services: {
      AccountsEpicIdService: {
        /**
         *
         * https://api.epicgames.dev
         *
         */
        BaseUrl: string;
      };
      AccountsService: {
        /**
         *
         * https://egp-idsoc-proxy-prod.ol.epicgames.com/account
         *
         */
        BaseUrl: string;
        /**
         *
         * accounts.epicgames.com
         *
         */
        RedirectUrl: string;
      };
      AntiCheatService: {
        /**
         *
         * https://api.epicgames.dev/anticheat
         *
         */
        BaseUrl: string;
      };
      CatalogService: {
        /**
         *
         * https://catalog-public-service-prod06.ol.epicgames.com/catalog
         *
         */
        BaseUrl: string;
      };
      CustomInvitesService: {
        /**
         *
         * https://api.epicgames.dev/notifications
         *
         */
        BaseUrl: string;
      };
      DataStorageService: {
        /**
         *
         * https://api.epicgames.dev/datastorage
         *
         */
        BaseUrl: string;
      };
      EOSAuthService: {
        /**
         *
         * https://api.epicgames.dev
         *
         */
        BaseUrl: string;
      };
      EULATrackingService: {
        /**
         *
         * https://eulatracking-public-service-prod06.ol.epicgames.com/eulatracking
         *
         */
        BaseUrl: string;
      };
      EcommerceEpicIdService: {
        /**
         *
         * https://api.epicgames.dev/epic/ecom
         *
         */
        BaseUrl: string;
      };
      EcommerceService: {
        /**
         *
         * https://ecommerceintegration-public-service-ecomprod02.ol.epicgames.com/ecommerceintegration
         *
         */
        BaseUrl: string;
      };
      FriendEpicIdService: {
        /**
         *
         * https://api.epicgames.dev/epic/friends
         *
         */
        BaseUrl: string;
      };
      FriendService: {
        /**
         *
         * https://egp-idsoc-proxy-prod.ol.epicgames.com/friends
         *
         */
        BaseUrl: string;
      };
      InventoryService: {
        /**
         *
         * https://api.epicgames.dev/inventory
         *
         */
        BaseUrl: string;
      };
      KWSService: {
        /**
         *
         * https://api.epicgames.dev/kws
         *
         */
        BaseUrl: string;
      };
      LeaderboardsService: {
        /**
         *
         * https://api.epicgames.dev/leaderboards
         *
         */
        BaseUrl: string;
      };
      LobbyService: {
        /**
         *
         * https://api.epicgames.dev/lobby
         *
         */
        BaseUrl: string;
      };
      MatchmakingService: {
        /**
         *
         * https://api.epicgames.dev/epic/matchmaking
         *
         */
        BaseUrl: string;
      };
      MetricsService: {
        /**
         *
         * https://api.epicgames.dev/datarouter
         *
         */
        BaseUrl: string;
      };
      ModsService: {
        /**
         *
         * https://api.epicgames.dev/mods
         *
         */
        BaseUrl: string;
      };
      PaymentEpicIdService: {
        /**
         *
         * https://api.epicgames.dev/epic/payment
         *
         */
        BaseUrl: string;
      };
      PresenceService: {
        /**
         *
         * https://api.epicgames.dev/epic/presence
         *
         */
        BaseUrl: string;
      };
      PriceEngineService: {
        /**
         *
         * https://priceengine-public-service-ecomprod01.ol.epicgames.com/priceengine
         *
         */
        BaseUrl: string;
      };
      ProgressionSnapshotService: {
        /**
         *
         * https://api.epicgames.dev/snapshots
         *
         */
        BaseUrl: string;
      };
      RTCService: {
        /**
         *
         * https://api.epicgames.dev/rtc
         *
         */
        BaseUrl: string;
      };
      ReceiptValidatorService: {
        /**
         *
         * https://api.epicgames.dev/receipt-validator
         *
         */
        BaseUrl: string;
      };
      ReportsService: {
        /**
         *
         * https://api.epicgames.dev/player-reports
         *
         */
        BaseUrl: string;
      };
      SanctionsService: {
        /**
         *
         * https://api.epicgames.dev/sanctions
         *
         */
        BaseUrl: string;
      };
      SessionsService: {
        /**
         *
         * https://api.epicgames.dev/matchmaking
         *
         */
        BaseUrl: string;
      };
      StatsAchievementsService: {
        /**
         *
         * https://api.epicgames.dev/stats
         *
         */
        BaseUrl: string;
      };
      StatsIngestService: {
        /**
         *
         * https://api.epicgames.dev/ingestion/stats
         *
         */
        BaseUrl: string;
      };
      TextChatFNService: {
        /**
         *
         * https://api.epicgames.dev/epic/chat
         *
         */
        BaseUrl: string;
      };
      TextChatGatewayServerFNService: {
        /**
         *
         * https://fngw-svc-ds-livefn.ol.epicgames.com/chat
         *
         */
        BaseUrl: string;
      };
      TextChatTrustedServerFNService: {
        /**
         *
         * https://api.epicgames.dev/epic/chat
         *
         */
        BaseUrl: string;
      };
      TitleStorageService: {
        /**
         *
         * https://api.epicgames.dev/titlestorage
         *
         */
        BaseUrl: string;
      };
    };
    /**
     *
     * -36188152
     *
     */
    watermark: number;
  }

  export interface Sdk_v1_product_5f8c5b9a91ca4e33b4afe3040b27e45e_RESPONSE {
    client: {
      "/Script/Engine.NetworkSettings": {
        "n.VerifyPeer": boolean;
      };
      "AntiCheat.GameplayData": {
        /**
         *
         * wss://api.epicgames.dev/cerberus-edge/v1/
         *
         */
        Url: string;
      };
      AuthClient: {
        /**
         *
         * eos.`client_id://epic/auth
         *
         */
        AccountPortalScheme: string;
        /**
         *
         * lang=`code
         *
         */
        AccountPortalURLLocaleSuffix: string;
        /**
         *
         * https://epicgames.com/id/authorize?client_id=`client_id&response_type=code&scope=`scope&redirect_uri=`redirect_uri&display=popup&prompt=login
         *
         */
        AuthorizeCodeEndpoint: string;
        /**
         *
         * https://epicgames.com/id/embedded/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade
         *
         */
        AuthorizeContinuationEmbeddedEndpoint: string;
        /**
         *
         * https://epicgames.com/id/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade
         *
         */
        AuthorizeContinuationEndpoint: string;
        /**
         *
         * https://epicgames.com/id/authorize?exchange_code=`exchange_code&scope=`scope&prompt=skip_merge%20skip_upgrade
         *
         */
        AuthorizeEndpoint: string;
        /**
         *
         * 300
         *
         */
        IdTokenCacheMinExpirySeconds: number;
        /**
         *
         * 300
         *
         */
        PollExpiresIn: number;
        /**
         *
         * 5
         *
         */
        PollInterval: number;
        /**
         *
         * 100
         *
         */
        RefreshTokenThreshold: number;
        /**
         *
         * https://epicgames.com/id/register/quick/minor/await?code=`challenge_id&display=embedded
         *
         */
        VPCRegisterURL: string;
        /**
         *
         * 60
         *
         */
        VerifyTokenInterval: number;
        bFailLoginIfExternalAccountIdDoesNotMatchAuthToken: boolean;
        bOfflineAccountToken: boolean;
      };
      BaseService: {
        /**
         *
         * 4
         *
         */
        HttpRetryLimit: number;
        HttpRetryResponseCodes: number[];
      };
      ConnectClient: {
        /**
         *
         * 128
         *
         */
        MaxProductUserIdMappingsQueryUserIds: number;
        /**
         *
         * 900
         *
         */
        MinProductUserIdMappingsUpdateTimeInSeconds: number;
      };
      "Core.Log": {
        /**
         *
         * verbose
         *
         */
        LogCore: string;
        /**
         *
         * verbose
         *
         */
        LogEOS: string;
        /**
         *
         * verbose
         *
         */
        LogEOSAuth: string;
        /**
         *
         * verbose
         *
         */
        LogEOSConnect: string;
        /**
         *
         * verbose
         *
         */
        LogEOSMessaging: string;
        /**
         *
         * verbose
         *
         */
        LogEOSSessions: string;
        /**
         *
         * warning
         *
         */
        LogHttp: string;
        /**
         *
         * verbose
         *
         */
        LogHttpSerialization: string;
        /**
         *
         * verbose
         *
         */
        LogStomp: string;
        /**
         *
         * verbose
         *
         */
        LogXmpp: string;
      };
      DataStorageClient: {
        /**
         *
         * 300
         *
         */
        AccessLinkDurationSeconds: number;
        /**
         *
         * 10
         *
         */
        MaxSimultaneousReads: number;
        /**
         *
         * 10
         *
         */
        MaxSimultaneousWrites: number;
      };
      EcomClient: {
        /**
         *
         * EPIC_BEARER_TOKEN
         *
         */
        PurchaseCookieName: string;
        /**
         *
         * https://www.epicgames.com/ecom/payment/v2/purchase
         *
         */
        PurchaseEpicIdMobileLandscapeUrl: string;
        /**
         *
         * https://www.epicgames.com/ecom/payment/v2/purchase
         *
         */
        PurchaseEpicIdMobilePortraitUrl: string;
        /**
         *
         * https://www.epicgames.com/ecom/payment/v1/purchase
         *
         */
        PurchaseEpicIdUrl: string;
        /**
         *
         * https://launcher-website-prod07.ol.epicgames.com/purchase
         *
         */
        PurchaseUrl: string;
      };
      HTTP: {
        /**
         *
         * 60
         *
         */
        HttpConnectionTimeout: number;
        /**
         *
         * 30
         *
         */
        HttpReceiveTimeout: number;
        /**
         *
         * 30
         *
         */
        HttpSendTimeout: number;
        /**
         *
         * 30
         *
         */
        HttpTimeout: number;
        /**
         *
         * 2
         *
         */
        MaxFlushTimeSeconds: number;
        bEnableHttp: boolean;
      };
      InventoryClient: {
        /**
         *
         * https://api.epicgames.dev/inventory
         *
         */
        BaseUrl: string;
        HttpRetryResponseCodes: number[];
        HttpRetryVerbs: string[];
        /**
         *
         * Session
         *
         */
        LockType: string;
        /**
         *
         * 10
         *
         */
        MaxNumberOfLockEntriesPerRequest: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelLockRequestsInFlight: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelUpdateRequestsInFlight: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelLockTask: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelUpdateTask: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfWriteEntriesPerRequest: number;
        /**
         *
         * 0
         *
         */
        QueryInventoryPageLimit: number;
        /**
         *
         * 60
         *
         */
        SessionLockTTLSeconds: number;
        /**
         *
         * 20
         *
         */
        SessionLockUpdateIntervalRandomAddSeconds: number;
        /**
         *
         * 30
         *
         */
        SessionLockUpdateIntervalSeconds: number;
      };
      "InventoryClient.WorldInventory": {
        /**
         *
         * Session
         *
         */
        LockType: string;
        /**
         *
         * 10485760
         *
         */
        MaxBinaryDataSizeBytes: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfLockEntriesPerRequest: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelLockRequestsInFlight: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfParallelQueryRequestsInFlight: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelUpdateRequestsInFlight: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelLockTask: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelUpdateTask: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfWriteEntriesPerRequest: number;
        /**
         *
         * 0
         *
         */
        QueryInventoryPageLimit: number;
        /**
         *
         * 60
         *
         */
        SessionLockTTLSeconds: number;
        /**
         *
         * 20
         *
         */
        SessionLockUpdateIntervalRandomAddSeconds: number;
        /**
         *
         * 30
         *
         */
        SessionLockUpdateIntervalSeconds: number;
      };
      LeaderboardsClient: {
        /**
         *
         * 25
         *
         */
        MaxUserScoresQueryStats: number;
        /**
         *
         * 100
         *
         */
        MaxUserScoresQueryUserIds: number;
      };
      LobbyClient: {
        /**
         *
         * 30
         *
         */
        HeartbeatIntervalSecs: number;
        /**
         *
         * 100
         *
         */
        InitialResendDelayMs: number;
        /**
         *
         * 5
         *
         */
        InitialRetryDelaySeconds: number;
        /**
         *
         * wss://api.epicgames.dev/lobby/v1/`deploymentId/lobbies/connect
         *
         */
        LobbySocketURL: string;
        /**
         *
         * 3
         *
         */
        MaxConnectionRetries: number;
        /**
         *
         * 2000
         *
         */
        MaxResendDelayMs: number;
        /**
         *
         * 15
         *
         */
        MaxRetryIntervalSeconds: number;
        /**
         *
         * 3
         *
         */
        MaxSendRetries: number;
        /**
         *
         * 5
         *
         */
        NumConsecutiveFailuresAllowed: number;
        /**
         *
         * 2
         *
         */
        RecoveryWaitTimeSecs: number;
        /**
         *
         * 5
         *
         */
        SentMessageTimeout: number;
        /**
         *
         * 15
         *
         */
        WebSocketConnectTaskMaxNetworkWaitSeconds: number;
        bDisableRTCVoice: boolean;
      };
      LogFiles: {
        /**
         *
         * SinceStart
         *
         */
        LogTimes: string;
        /**
         *
         * 5
         *
         */
        MaxLogFilesOnDisk: number;
        /**
         *
         * 5
         *
         */
        PurgeLogsDays: number;
      };
      "Messaging.EpicConnect": {
        /**
         *
         * 30000
         *
         */
        ClientHeartbeatIntervalMilliseconds: number;
        /**
         *
         * 5
         *
         */
        FailedConnectionDelayIntervalSeconds: number;
        /**
         *
         * 180
         *
         */
        FailedConnectionDelayMaxSeconds: number;
        /**
         *
         * 2.5
         *
         */
        FailedConnectionDelayMultiplier: number;
        /**
         *
         * 2
         *
         */
        RetryBackoffExponentialBase: number;
        /**
         *
         * 0
         *
         */
        RetryBackoffExponentialExponentBias: number;
        /**
         *
         * 1
         *
         */
        RetryBackoffJitterCoefficientMax: number;
        /**
         *
         * 0.5
         *
         */
        RetryBackoffJitterCoefficientMin: number;
        /**
         *
         * 180
         *
         */
        RetryBackoffMaxSeconds: number;
        /**
         *
         * 0
         *
         */
        ServerHeartbeatIntervalMilliseconds: number;
        /**
         *
         * wss://connect.epicgames.dev
         *
         */
        Url: string;
        /**
         *
         * wss://connect.epicgames.dev/v2
         *
         */
        Urlv2: string;
        UseV2Connection: boolean;
      };
      "Messaging.Stomp": {
        BlocklistMessageTypeFilters: string[];
        /**
         *
         * 30000
         *
         */
        ClientHeartbeatIntervalMs: number;
        /**
         *
         * 0
         *
         */
        RequestedServerHeartbeatIntervalMs: number;
        /**
         *
         * wss://api.epicgames.dev/notifications/v1/`deploymentid`/connect
         *
         */
        Url: string;
      };
      "Messaging.XMPP": {
        /**
         *
         * prod.ol.epicgames.com
         *
         */
        Domain: string;
        /**
         *
         * 60
         *
         */
        PingInterval: number;
        /**
         *
         * 30
         *
         */
        PingTimeout: number;
        /**
         *
         * 2
         *
         */
        ReconnectionDelayBackoffExponent: number;
        /**
         *
         * 4
         *
         */
        ReconnectionDelayBase: number;
        /**
         *
         * 1.5
         *
         */
        ReconnectionDelayJitter: number;
        /**
         *
         * 300
         *
         */
        ReconnectionDelayMax: number;
        /**
         *
         * wss://xmpp-service-prod.ol.epicgames.com
         *
         */
        ServerAddr: string;
        /**
         *
         * 443
         *
         */
        ServerPort: number;
        bPrivateChatFriendsOnly: boolean;
      };
      MetricsClient: {
        /**
         *
         * 2
         *
         */
        HttpRetryLimit: number;
      };
      P2PClient: {
        IceServers: string[];
        /**
         *
         * 7876
         *
         */
        P2PMaxPort: number;
        /**
         *
         * 7777
         *
         */
        P2PMinPort: number;
      };
      PresenceClient: {
        /**
         *
         * 5
         *
         */
        EpicConnectNotificationWaitTime: number;
        /**
         *
         * 600
         *
         */
        PresenceAutoUpdateInSeconds: number;
        /**
         *
         * 60
         *
         */
        PresenceQueryTimeoutSeconds: number;
        bSetOfflineOnLogoutEnabled: boolean;
        bSetOfflineOnShutdownEnabled: boolean;
      };
      RateLimiter: {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AchievementsClient": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AchievementsClient.Operations": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatClient": {
        /**
         *
         * 120
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatClient.Operations": {
        /**
         *
         * 120
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatServer": {
        /**
         *
         * 100000
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AntiCheatServer.Operations": {
        /**
         *
         * 100000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AuthClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AuthClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.AuthClient.SensitiveOperations": {
        /**
         *
         * 12
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ConnectClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ConnectClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.CustomInvitesClient": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.CustomInvitesClient.Operations": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.DataStorageClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.DataStorageClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.EcomClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.EcomClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.FriendClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.FriendClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.InventoryClient": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.InventoryClient.Operations": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.InventoryClient.WorldInventory.Operations": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.KWSClient": {
        /**
         *
         * 20
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.KWSClient.Operations": {
        /**
         *
         * 20
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LeaderboardsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LeaderboardsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LobbyClient": {
        /**
         *
         * 30
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LobbyClient.Operations": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.LobbyClient.ThrottledOperations": {
        /**
         *
         * 30
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MatchmakingClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MatchmakingClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MetricsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.MetricsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ModsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ModsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.PresenceClient": {
        /**
         *
         * 60
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.PresenceClient.Operations": {
        /**
         *
         * 3
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 20
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ProgressionSnapshot": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ProgressionSnapshot.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.RTCAdminClient": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.RTCAdminClient.Operations": {
        /**
         *
         * 50
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReceiptValidatorClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReceiptValidatorClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReportsClient": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.ReportsClient.Operations": {
        /**
         *
         * 100
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SDKConfigClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SDKConfigClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SanctionsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SanctionsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SessionsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.SessionsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.StatsClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.StatsClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.TitleStorageClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.TitleStorageClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.UserInfoClient": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.UserInfoClient.Operations": {
        /**
         *
         * 300
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.WorldInventoryClient": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      "RateLimiter.WorldInventoryClient.Operations": {
        /**
         *
         * 1000
         *
         */
        MessageCount: number;
        Operation: string[];
        /**
         *
         * 60
         *
         */
        TimeIntervalInSeconds: number;
      };
      SDKAnalytics: {
        /**
         *
         * Production
         *
         */
        AppEnvironment: string;
        /**
         *
         * https://api.epicgames.dev/telemetry/data/
         *
         */
        BaseUrl: string;
        /**
         *
         * 2
         *
         */
        DevPhase: number;
        /**
         *
         * sdkevents
         *
         */
        UploadType: string;
      };
      SanitizerClient: {
        /**
         *
         * *
         *
         */
        ReplaceChar: string;
        /**
         *
         * 10
         *
         */
        RequestLimit: number;
      };
      SessionsClient: {
        /**
         *
         * 30
         *
         */
        HeartbeatIntervalSecs: number;
      };
      StatsClient: {
        /**
         *
         * 1900
         *
         */
        MaxQueryStatsStatNamesStrLength: number;
      };
      TitleStorageClient: {
        /**
         *
         * 300
         *
         */
        AccessLinkDurationSeconds: number;
        /**
         *
         * 2
         *
         */
        ClearInvalidFileCacheFrequencyDays: number;
        /**
         *
         * 10
         *
         */
        MaxSimultaneousReads: number;
        /**
         *
         * 7
         *
         */
        UnusedCachedFileDaysToLive: number;
      };
      UIClient: {
        /**
         *
         * https://overlay-override-service.cbce.live.on.epicgames.com/
         *
         */
        FriendsURL: string;
        /**
         *
         * ?exchange_code=`exchange_code
         *
         */
        FriendsURLExchangeCodeSuffix: string;
        /**
         *
         * cf27c69fe66441e8a8a4e8faf396ee4c
         *
         */
        SocialSPAClientId: string;
        /**
         *
         * https://epicgames.com/id/overlay/quick/minor/verify?code=`challenge_id
         *
         */
        VPCURL: string;
        /**
         *
         * &lang=`code
         *
         */
        VPCURLLocaleSuffix: string;
      };
      "UIClient.SocialURLQueryParamNames": {
        /**
         *
         * deployment_id
         *
         */
        DeploymentId: string;
        /**
         *
         * exchange_code
         *
         */
        ExchangeCode: string;
        /**
         *
         * integrated_platform_name
         *
         */
        IntegratedPlatformName: string;
        /**
         *
         * os_name
         *
         */
        OSName: string;
        /**
         *
         * os_version
         *
         */
        OSVersion: string;
        /**
         *
         * product_id
         *
         */
        ProductId: string;
        /**
         *
         * sdk_cl_number
         *
         */
        SDKCLNumber: string;
        /**
         *
         * sdk_version
         *
         */
        SDKVersion: string;
        /**
         *
         * user_id
         *
         */
        UserId: string;
      };
      "WebSockets.LibWebSockets": {
        /**
         *
         * 0
         *
         */
        ThreadMinimumSleepTimeInSeconds: number;
        /**
         *
         * 131072
         *
         */
        ThreadStackSize: number;
        /**
         *
         * 0.0333
         *
         */
        ThreadTargetFrameTimeInSeconds: number;
      };
      WorldInventoryClient: {
        HttpRetryResponseCodes: number[];
        /**
         *
         * Session
         *
         */
        LockType: string;
        /**
         *
         * 10485760
         *
         */
        MaxBinaryDataSizeBytes: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfLockEntriesPerRequest: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelLockRequestsInFlight: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfParallelQueryRequestsInFlight: number;
        /**
         *
         * 3
         *
         */
        MaxNumberOfParallelUpdateRequestsInFlight: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelLockTask: number;
        /**
         *
         * 20
         *
         */
        MaxNumberOfSubTasksPerParallelUpdateTask: number;
        /**
         *
         * 10
         *
         */
        MaxNumberOfWriteEntriesPerRequest: number;
        /**
         *
         * 0
         *
         */
        QueryInventoryPageLimit: number;
        /**
         *
         * 60
         *
         */
        SessionLockTTLSeconds: number;
        /**
         *
         * 20
         *
         */
        SessionLockUpdateIntervalRandomAddSeconds: number;
        /**
         *
         * 30
         *
         */
        SessionLockUpdateIntervalSeconds: number;
      };
      XMPP: {
        /**
         *
         * 131072
         *
         */
        ThreadStackSize: number;
        bEnableWebsockets: boolean;
        bEnabled: boolean;
      };
    };
    services: {
      AccountsEpicIdService: {
        /**
         *
         * https://api.epicgames.dev
         *
         */
        BaseUrl: string;
      };
      AccountsService: {
        /**
         *
         * https://egp-idsoc-proxy-prod.ol.epicgames.com/account
         *
         */
        BaseUrl: string;
        /**
         *
         * accounts.epicgames.com
         *
         */
        RedirectUrl: string;
      };
      AntiCheatService: {
        /**
         *
         * https://api.epicgames.dev/anticheat
         *
         */
        BaseUrl: string;
      };
      CatalogService: {
        /**
         *
         * https://catalog-public-service-prod06.ol.epicgames.com/catalog
         *
         */
        BaseUrl: string;
      };
      CustomInvitesService: {
        /**
         *
         * https://api.epicgames.dev/notifications
         *
         */
        BaseUrl: string;
      };
      DataStorageService: {
        /**
         *
         * https://api.epicgames.dev/datastorage
         *
         */
        BaseUrl: string;
      };
      EOSAuthService: {
        /**
         *
         * https://api.epicgames.dev
         *
         */
        BaseUrl: string;
      };
      EULATrackingService: {
        /**
         *
         * https://eulatracking-public-service-prod06.ol.epicgames.com/eulatracking
         *
         */
        BaseUrl: string;
      };
      EcommerceEpicIdService: {
        /**
         *
         * https://api.epicgames.dev/epic/ecom
         *
         */
        BaseUrl: string;
      };
      EcommerceService: {
        /**
         *
         * https://ecommerceintegration-public-service-ecomprod02.ol.epicgames.com/ecommerceintegration
         *
         */
        BaseUrl: string;
      };
      FriendEpicIdService: {
        /**
         *
         * https://api.epicgames.dev/epic/friends
         *
         */
        BaseUrl: string;
      };
      FriendService: {
        /**
         *
         * https://egp-idsoc-proxy-prod.ol.epicgames.com/friends
         *
         */
        BaseUrl: string;
      };
      InventoryService: {
        /**
         *
         * https://api.epicgames.dev/inventory
         *
         */
        BaseUrl: string;
      };
      KWSService: {
        /**
         *
         * https://api.epicgames.dev/kws
         *
         */
        BaseUrl: string;
      };
      LeaderboardsService: {
        /**
         *
         * https://api.epicgames.dev/leaderboards
         *
         */
        BaseUrl: string;
      };
      LobbyService: {
        /**
         *
         * https://api.epicgames.dev/lobby
         *
         */
        BaseUrl: string;
      };
      MatchmakingService: {
        /**
         *
         * https://api.epicgames.dev/epic/matchmaking
         *
         */
        BaseUrl: string;
      };
      MetricsService: {
        /**
         *
         * https://api.epicgames.dev/datarouter
         *
         */
        BaseUrl: string;
      };
      ModsService: {
        /**
         *
         * https://api.epicgames.dev/mods
         *
         */
        BaseUrl: string;
      };
      PaymentEpicIdService: {
        /**
         *
         * https://api.epicgames.dev/epic/payment
         *
         */
        BaseUrl: string;
      };
      PresenceService: {
        /**
         *
         * https://api.epicgames.dev/epic/presence
         *
         */
        BaseUrl: string;
      };
      PriceEngineService: {
        /**
         *
         * https://priceengine-public-service-ecomprod01.ol.epicgames.com/priceengine
         *
         */
        BaseUrl: string;
      };
      ProgressionSnapshotService: {
        /**
         *
         * https://api.epicgames.dev/snapshots
         *
         */
        BaseUrl: string;
      };
      RTCService: {
        /**
         *
         * https://api.epicgames.dev/rtc
         *
         */
        BaseUrl: string;
      };
      ReceiptValidatorService: {
        /**
         *
         * https://api.epicgames.dev/receipt-validator
         *
         */
        BaseUrl: string;
      };
      ReportsService: {
        /**
         *
         * https://api.epicgames.dev/player-reports
         *
         */
        BaseUrl: string;
      };
      SanctionsService: {
        /**
         *
         * https://api.epicgames.dev/sanctions
         *
         */
        BaseUrl: string;
      };
      SessionsService: {
        /**
         *
         * https://api.epicgames.dev/matchmaking
         *
         */
        BaseUrl: string;
      };
      StatsAchievementsService: {
        /**
         *
         * https://api.epicgames.dev/stats
         *
         */
        BaseUrl: string;
      };
      StatsIngestService: {
        /**
         *
         * https://api.epicgames.dev/ingestion/stats
         *
         */
        BaseUrl: string;
      };
      TextChatFNService: {
        /**
         *
         * https://api.epicgames.dev/epic/chat
         *
         */
        BaseUrl: string;
      };
      TextChatGatewayServerFNService: {
        /**
         *
         * https://fngw-svc-ds-livefn.ol.epicgames.com/chat
         *
         */
        BaseUrl: string;
      };
      TextChatTrustedServerFNService: {
        /**
         *
         * https://api.epicgames.dev/epic/chat
         *
         */
        BaseUrl: string;
      };
      TitleStorageService: {
        /**
         *
         * https://api.epicgames.dev/titlestorage
         *
         */
        BaseUrl: string;
      };
    };
    /**
     *
     * -36188152
     *
     */
    watermark: number;
  }

  export interface Sessions_auth_token_RESPONSE {
    /**
     *
     * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjoxLCJpc3MiOiJwcm9kLW5ldHdvcmsiLCJlbnYiOiI2MWJhN2YzMDFjNzE5ZTJhNGZlZjRjMzciLCJwaWQiOiJwYWZkOGQ3OTUwYWExNDg0ZWE3OTFkMDY2NjJmYTc1Y2UiLCJleHAiOjE3NDE3MDgxMjIsInNpZCI6IjI2MGNlZTQyLTM0OTYtNDUyYy1hNmQyLTk3Mjc0OGEzY2ExNyJ9.wR0NLtExwY6SBQZMgGbaA-GEsbzFixqidAEh1tK7L7w
     *
     */
    access_token: string;
    account: {
      adult_age_gate: {};
      /**
       *
       * adult
       *
       */
      age_category: string;
      age_gate_date: {};
      avatar: {
        /**
         *
         * https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg
         *
         */
        image_url: string;
        /**
         *
         * MultiVersus Arya
         *
         */
        name: string;
        /**
         *
         * multiversus-arya
         *
         */
        slug: string;
      };
      can_change_username: boolean;
      child_age_gate: {};
      completed: boolean;
      /**
       *
       * 2023-01-23T21:17:48+00:00
       *
       */
      created_at: string;
      email_verified: boolean;
      /**
       *
       * adult
       *
       */
      game_age_category: string;
      game_age_information: {};
      game_links: {
        adult_age_gate: {};
        /**
         *
         * adult
         *
         */
        age_category: string;
        age_gate_date: {};
        age_information: {};
        all_platforms: {
          steam: {
            /**
             *
             * 2025-03-10T15:48:40+00:00
             *
             */
            access_time: string;
          };
        };
        child_age_gate: {};
        /**
         *
         * 2023-01-23T21:17:48+00:00
         *
         */
        created_at: string;
        /**
         *
         * multiversus
         *
         */
        game: string;
        is_requesting_game: boolean;
        /**
         *
         * 2025-03-10T15:48:40+00:00
         *
         */
        last_accessed: string;
        /**
         *
         * 2025-03-10T15:48:42+00:00
         *
         */
        last_game_login: string;
        /**
         *
         * steam
         *
         */
        last_seen_platform: string;
        /**
         *
         * paee40f62bd814a53bf9f4d21e43ea2c1
         *
         */
        public_id: string;
      }[];
      /**
       *
       * 63cef97ccaf1cd11f09a765b
       *
       */
      id: string;
      is_soft_locked: boolean;
      /**
       *
       * 2025-03-10T15:48:42+00:00
       *
       */
      last_login: string;
      /**
       *
       * en-US
       *
       */
      locale: string;
      mfa_active: boolean;
      password_set: boolean;
      /**
       *
       * 0
       *
       */
      presence_state: number;
      /**
       *
       * pafd8d7950aa1484ea791d06662fa75ce
       *
       */
      public_id: string;
      /**
       *
       * 2025-03-10T15:48:42+00:00
       *
       */
      updated_at: string;
      /**
       *
       * MultiVersusKOTH
       *
       */
      username: string;
    };
    /**
     *
     * 86400
     *
     */
    expires_in: number;
    mfa_required: boolean;
    sdk: {
      realtime: {
        /**
         *
         * ec2-us-east-1-prod-network
         *
         */
        "default-cluster": string;
        enabled: boolean;
        servers: {
          "ec2-us-east-1-prod-network": {
            "prod-network-realtime-1/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://3.82.168.122:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-1.wbagora.com:9102
               *
               */
              wss: string;
            };
            "prod-network-realtime-3/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://54.175.211.158:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-3.wbagora.com:9101
               *
               */
              wss: string;
            };
            "prod-network-realtime-3/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://54.175.211.158:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-3.wbagora.com:9102
               *
               */
              wss: string;
            };
            "prod-network-realtime-4/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://44.204.13.72:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-4.wbagora.com:9102
               *
               */
              wss: string;
            };
            "prod-network-realtime-5/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://107.22.28.83:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-5.wbagora.com:9101
               *
               */
              wss: string;
            };
            "prod-network-realtime-5/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://107.22.28.83:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-5.wbagora.com:9102
               *
               */
              wss: string;
            };
            "prod-network-realtime-6/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://3.86.158.46:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-6.wbagora.com:9101
               *
               */
              wss: string;
            };
            "prod-network-realtime-6/2": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://3.86.158.46:8102
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-6.wbagora.com:9102
               *
               */
              wss: string;
            };
            "prod-network-realtime-8/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://18.212.34.2:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-8.wbagora.com:9101
               *
               */
              wss: string;
            };
            "prod-network-realtime-9/1": {
              /**
               *
               * 0.0.0.0:0
               *
               */
              udp: string;
              /**
               *
               * ws://3.93.237.241:8101
               *
               */
              ws: string;
              /**
               *
               * wss://us-east-1-prod-network-realtime-9.wbagora.com:9101
               *
               */
              wss: string;
            };
          };
        };
      };
    };
  }

  export interface Social_me_block_p2a3c488f51fb4bb19c8689be86997b8a_RESPONSE {
    account: {
      avatar: {
        /**
         *
         * https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg
         *
         */
        image_url: string;
        /**
         *
         * MultiVersus Arya
         *
         */
        name: string;
      };
      /**
       *
       * 0
       *
       */
      presence_state: number;
      /**
       *
       * p2a3c488f51fb4bb19c8689be86997b8a
       *
       */
      public_id: string;
      /**
       *
       * ParrotReindeer368
       *
       */
      username: string;
    };
    blocked: boolean;
    /**
     *
     * 62ec52546d641bf1f7bf7b31
     *
     */
    contact_id: string;
    /**
     *
     * 2025-03-10T15:56:20+00:00
     *
     */
    created_at: string;
    /**
     *
     * 63cef97ccaf1cd11f09a765b
     *
     */
    owner_id: string;
    /**
     *
     * 2025-03-10T15:56:20+00:00
     *
     */
    updated_at: string;
  }

  export interface Social_me_blocked_RESPONSE {
    /**
     *
     * 1
     *
     */
    page: number;
    /**
     *
     * 20
     *
     */
    page_size: number;
    results: any[];
    /**
     *
     * 0
     *
     */
    total: number;
  }

  export interface Social_me_unblock_p2a3c488f51fb4bb19c8689be86997b8a_RESPONSE {
    account: {
      avatar: {
        /**
         *
         * https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg
         *
         */
        image_url: string;
        /**
         *
         * MultiVersus Arya
         *
         */
        name: string;
      };
      /**
       *
       * 0
       *
       */
      presence_state: number;
      /**
       *
       * p2a3c488f51fb4bb19c8689be86997b8a
       *
       */
      public_id: string;
      /**
       *
       * ParrotReindeer368
       *
       */
      username: string;
    };
    blocked: boolean;
    /**
     *
     * 62ec52546d641bf1f7bf7b31
     *
     */
    contact_id: string;
    /**
     *
     * 2025-03-10T15:56:20+00:00
     *
     */
    created_at: string;
    /**
     *
     * 63cef97ccaf1cd11f09a765b
     *
     */
    owner_id: string;
    /**
     *
     * 2025-03-10T15:56:23+00:00
     *
     */
    updated_at: string;
  }

  export interface Ssc_invoke_attempt_daily_refresh_RESPONSE {
    body: {
      /**
       *
       * Season:SeasonFive
       *
       */
      CurrentSeason: string;
      FreeCharacterRotation: string[];
      /**
       *
       * 2025-03-11T12:00:00.000Z
       *
       */
      NextDailyRefreshTime: string;
      /**
       *
       * 2025-03-11T12:00:00.000Z
       *
       */
      NextWeeklyRefreshTime: string;
      PlayerMissionObject: {
        ClaimLocks: {};
        MissionControllerContainers: {
          miscon_battlepassdaily_s5: {
            MissionControllers: {
              misctl_battlepass_daily_base_ffa_new: {
                Missions: {
                  mis_stats_dealalldamage_ffa: {
                    /**
                     *
                     * f1f8ff3e-bef9-4d05-bda9-747b1ebca1f8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                }[];
                UsedMissions: string[];
              };
              misctl_battlepass_daily_base_new: {
                Missions: {
                  mis_stats_dealalldamage_pvp: {
                    /**
                     *
                     * b32be6de-3ad3-43da-9964-c6cf408d1cd8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 400
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
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
                    /**
                     *
                     * c6695f64-479d-4b9d-a561-d44c99a226d2
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                }[];
                UsedMissions: string[];
              };
              misctl_battlepass_daily_hard_new: {
                Missions: {
                  mis_stats_total_neutral_normals_hitH: {
                    /**
                     *
                     * 3ec7add5-9fd1-427c-9fd9-972915b7ab30
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 20
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_hit_neutral_attack
                       *
                       */
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
                    /**
                     *
                     * 453a1e1a-6fc1-4939-ad7d-eb42039d8906
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_up_ringout
                       *
                       */
                      Slug: string;
                    }[];
                  };
                }[];
                UsedMissions: string[];
              };
              misctl_battlepass_daily_new_2: {
                Missions: {
                  mis_ringout_2v2: {
                    /**
                     *
                     * 52002470-04c0-4f60-94c6-839353b3316c
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 4
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
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
                    /**
                     *
                     * b9d292ac-b7cc-4cd3-bff1-93f4ad61e852
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
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
                    /**
                     *
                     * df977cf0-853d-4fc1-805d-0bfac4dbcca4
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 2
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_playmatch
                       *
                       */
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
                    /**
                     *
                     * 773049df-3c1c-43db-8219-537651344b2e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_PartnerIsFriend
                       *
                       */
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
                    /**
                     *
                     * 6d527a15-341c-4de9-bc02-fba569b8933b
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_hitupspecialair
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c003: {
                    /**
                     *
                     * 4990eb42-bfc1-4631-a87f-05e6fc4c9f7e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c003: {
                    /**
                     *
                     * 923b90ee-4cfe-4ff6-aebd-1077ca858cec
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_sniper_c003: {
                    /**
                     *
                     * 8149f2b7-64a3-4412-b603-749b3f10b0c8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_totalsidegroundspecialhit
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c003: {
                    /**
                     *
                     * a6b33734-8268-43bb-af36-88c6c2d097a2
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
                    /**
                     *
                     * ea29c501-5218-4b74-ae3e-f39a617d08dc
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_bubble_c011
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_bubbleboy_c011: {
                    /**
                     *
                     * 653cdebf-31d4-4f59-adbe-3df186e6ca64
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_bubblestack_c011
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c011: {
                    /**
                     *
                     * 9f78c3f2-7c40-4de1-86ce-c43938e8159e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c011: {
                    /**
                     *
                     * 74d670d7-a312-4b20-96b9-ece371b77dc8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c011: {
                    /**
                     *
                     * e58aef94-b816-4966-827a-a468d3e7e24a
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
                    /**
                     *
                     * 2898398b-7b4a-439c-b9bf-8e4e3712578b
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_lebron_pass
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c016: {
                    /**
                     *
                     * a4dcf510-b3fe-449b-9317-6a2f8d9ecc95
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_defense_c016: {
                    /**
                     *
                     * c49043db-9025-456b-90d4-b8c4f65a618a
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_lebron_defense
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c016: {
                    /**
                     *
                     * b5c59038-ecff-4b33-a25f-a5e57d3c637f
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c016: {
                    /**
                     *
                     * d49ea2f1-3dcb-4446-8aa7-77c51a5da75e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
                    /**
                     *
                     * 4f34842e-693f-423f-b852-d7a43da90609
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c019: {
                    /**
                     *
                     * 088d79d1-69c0-44ee-bb7c-443040330595
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_saveally_c019: {
                    /**
                     *
                     * 0d5519b2-21c2-4b9a-900d-a6198f340576
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_saveally_c019
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_splitnade_c019: {
                    /**
                     *
                     * e2e3e651-9b03-444d-815e-4722dcfeda77
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_splitnade_c019
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c019: {
                    /**
                     *
                     * a72bd4eb-5c5f-472d-ad51-ba0ca2a641ff
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
      /**
       *
       * 2025-03-10T15:48:44.000Z
       *
       */
      ServerTimeUtc: string;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_claim_all_milestone_reward_track_tiers_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_claim_milestone_reward_track_tiers_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_claim_mission_rewards_RESPONSE {
    body: {
      ClaimLocks: {
        misctl_battlepass_weekly_new: {
          mis_hit_up_attack_air_tank_weekly: {
            /**
             *
             * 0
             *
             */
            "107f0018-8d09-4859-b308-07de2f4d0694": number;
          };
          mis_ringout_pvp_weekly: {
            /**
             *
             * 0
             *
             */
            "a30ca0e3-7eb0-4b49-9f6d-cdcca1c2f77d": number;
          };
        };
        misctl_battlepass_daily_base_new: {
          mis_stats_dealalldamage_pvp: {
            /**
             *
             * 0
             *
             */
            "b32be6de-3ad3-43da-9964-c6cf408d1cd8": number;
          };
        };
      };
      MissionControllerContainers: {
        miscon_battlepassdaily_s5: {
          MissionControllers: {
            misctl_battlepass_daily_base_ffa_new: {
              Missions: {
                mis_stats_dealalldamage_ffa: {
                  /**
                   *
                   * f1f8ff3e-bef9-4d05-bda9-747b1ebca1f8
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
                    Slug: string;
                  }[];
                };
              }[];
              UsedMissions: string[];
            };
            misctl_battlepass_daily_base_new: {
              Missions: {
                mis_stats_dealalldamage_pvp: {
                  /**
                   *
                   * b32be6de-3ad3-43da-9964-c6cf408d1cd8
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 400
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
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
                  /**
                   *
                   * c6695f64-479d-4b9d-a561-d44c99a226d2
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
                    Slug: string;
                  }[];
                };
              }[];
              UsedMissions: string[];
            };
            misctl_battlepass_daily_hard_new: {
              Missions: {
                mis_stats_total_neutral_normals_hitH: {
                  /**
                   *
                   * 3ec7add5-9fd1-427c-9fd9-972915b7ab30
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 20
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_hit_neutral_attack
                     *
                     */
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
                  /**
                   *
                   * 453a1e1a-6fc1-4939-ad7d-eb42039d8906
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_up_ringout
                     *
                     */
                    Slug: string;
                  }[];
                };
              }[];
              UsedMissions: string[];
            };
            misctl_battlepass_daily_new_2: {
              Missions: {
                mis_ringout_2v2: {
                  /**
                   *
                   * 52002470-04c0-4f60-94c6-839353b3316c
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 4
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_ringout_any
                     *
                     */
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
                  /**
                   *
                   * b9d292ac-b7cc-4cd3-bff1-93f4ad61e852
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_ringout_any
                     *
                     */
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
                  /**
                   *
                   * df977cf0-853d-4fc1-805d-0bfac4dbcca4
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 2
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_playmatch
                     *
                     */
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
                  /**
                   *
                   * 773049df-3c1c-43db-8219-537651344b2e
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_PartnerIsFriend
                     *
                     */
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
                  /**
                   *
                   * 6d527a15-341c-4de9-bc02-fba569b8933b
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_hitupspecialair
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_dealalldamage_c003: {
                  /**
                   *
                   * 4990eb42-bfc1-4631-a87f-05e6fc4c9f7e
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_ringout_c003: {
                  /**
                   *
                   * 923b90ee-4cfe-4ff6-aebd-1077ca858cec
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_ringout_any
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_sniper_c003: {
                  /**
                   *
                   * 8149f2b7-64a3-4412-b603-749b3f10b0c8
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_totalsidegroundspecialhit
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_usetaunts_c003: {
                  /**
                   *
                   * a6b33734-8268-43bb-af36-88c6c2d097a2
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_taunt
                     *
                     */
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
                  /**
                   *
                   * ea29c501-5218-4b74-ae3e-f39a617d08dc
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_bubble_c011
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_bubbleboy_c011: {
                  /**
                   *
                   * 653cdebf-31d4-4f59-adbe-3df186e6ca64
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_bubblestack_c011
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_dealalldamage_c011: {
                  /**
                   *
                   * 9f78c3f2-7c40-4de1-86ce-c43938e8159e
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_ringout_c011: {
                  /**
                   *
                   * 74d670d7-a312-4b20-96b9-ece371b77dc8
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_ringout_any
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_usetaunts_c011: {
                  /**
                   *
                   * e58aef94-b816-4966-827a-a468d3e7e24a
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_taunt
                     *
                     */
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
                  /**
                   *
                   * 2898398b-7b4a-439c-b9bf-8e4e3712578b
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_lebron_pass
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_dealalldamage_c016: {
                  /**
                   *
                   * a4dcf510-b3fe-449b-9317-6a2f8d9ecc95
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_defense_c016: {
                  /**
                   *
                   * c49043db-9025-456b-90d4-b8c4f65a618a
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_lebron_defense
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_ringout_c016: {
                  /**
                   *
                   * b5c59038-ecff-4b33-a25f-a5e57d3c637f
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_ringout_any
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_usetaunts_c016: {
                  /**
                   *
                   * d49ea2f1-3dcb-4446-8aa7-77c51a5da75e
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_taunt
                     *
                     */
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
                  /**
                   *
                   * 4f34842e-693f-423f-b852-d7a43da90609
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_ringout_c019: {
                  /**
                   *
                   * 088d79d1-69c0-44ee-bb7c-443040330595
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_ringout_any
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_saveally_c019: {
                  /**
                   *
                   * 0d5519b2-21c2-4b9a-900d-a6198f340576
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_saveally_c019
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_splitnade_c019: {
                  /**
                   *
                   * e2e3e651-9b03-444d-815e-4722dcfeda77
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_splitnade_c019
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_usetaunts_c019: {
                  /**
                   *
                   * a72bd4eb-5c5f-472d-ad51-ba0ca2a641ff
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_taunt
                     *
                     */
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
                  /**
                   *
                   * e30f999c-f5a6-4cb9-b775-780b6c9df11c
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_allyseed_c020
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_dealalldamage_c020: {
                  /**
                   *
                   * ccfe54f2-f89f-4ea7-a82b-28bda35da1b2
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_deal_damage
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_portalkb_c020: {
                  /**
                   *
                   * bec2e091-4a90-4f4d-9490-97091a3693c2
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_portalkb_c020
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_ringout_c020: {
                  /**
                   *
                   * eb3a7a0c-39ce-4543-8c90-87fa58e2b967
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_ringout_any
                     *
                     */
                    Slug: string;
                  }[];
                };
                mis_usetaunts_c020: {
                  /**
                   *
                   * 2fc008dd-d76a-4ea2-8a85-da5eee14e1c1
                   *
                   */
                  MissionGuid: string;
                  MissionObjectives: {
                    /**
                     *
                     * 0
                     *
                     */
                    Progress: number;
                    /**
                     *
                     * misobj_taunt
                     *
                     */
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
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_create_custom_game_lobby_RESPONSE {
    body: {
      /**
       *
       * ec2-us-east-1-dokken
       *
       */
      Cluster: string;
      lobby: {
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
        /**
         *
         * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
         *
         */
        GameVersion: string;
        Handicaps: {};
        /**
         *
         * 1167552915
         *
         */
        HissCrc: number;
        IsLobbyJoinable: boolean;
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        LeaderID: string;
        /**
         *
         * 0
         *
         */
        LobbyType: number;
        LockedLoadouts: {
          ":id": {
            /**
             *
             * character_Jason
             *
             */
            Character: string;
            /**
             *
             * skin_c035_s25
             *
             */
            Skin: string;
          };
        };
        Maps: {
          IsSelected: boolean;
          /**
           *
           * M000_V1_NEW
           *
           */
          Map: string;
        }[];
        /**
         *
         * 67cf0da2d0f5dd3b4bed6d4b
         *
         */
        MatchID: string;
        Platforms: {
          /**
           *
           * PC
           *
           */
          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {
          /**
           *
           * 544
           *
           */
          ":id": number;
        };
        ReadyPlayers: {
          ":id": boolean;
        };
        Teams: {
          /**
           *
           * 1
           *
           */
          Length: number;
          Players: {
            ":id": {
              Account: {
                /**
                 *
                 * 63cef97ced0619f458cfac8f
                 *
                 */
                id: string;
              };
              /**
               *
               *
               *
               */
              BotSettingSlug: string;
              /**
               *
               * 1
               *
               */
              CrossplayPreference: number;
              /**
               *
               * 2025-03-10T16:04:50.000Z
               *
               */
              JoinedAt: string;
              /**
               *
               * 0
               *
               */
              LobbyPlayerIndex: number;
            };
          };
          /**
           *
           * 0
           *
           */
          TeamIndex: number;
        }[];
        match_config: {
          AllowDuplicateCharacters: boolean;
          AllowHazards: boolean;
          AreRewardsSkipped: boolean;
          /**
           *
           * Custom
           *
           */
          Context: string;
          /**
           *
           * 1
           *
           */
          EnableShields: number;
          /**
           *
           * Versus
           *
           */
          GameModeAlias: string;
          /**
           *
           * 420
           *
           */
          MatchDuration: number;
          /**
           *
           * Unselected
           *
           */
          ModeDifficulty: string;
          /**
           *
           * 4
           *
           */
          NumRingoutsForWin: number;
          /**
           *
           * Unselected
           *
           */
          QueueType: string;
          /**
           *
           * Duos
           *
           */
          TeamStyle: string;
          /**
           *
           * 1
           *
           */
          num_set_wins_required: number;
        };
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_create_party_lobby_RESPONSE {
    body: {
      /**
       *
       * ec2-us-east-1-dokken
       *
       */
      Cluster: string;
      lobby: {
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
        /**
         *
         * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
         *
         */
        GameVersion: string;
        /**
         *
         * 1167552915
         *
         */
        HissCrc: number;
        IsLobbyJoinable: boolean;
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        LeaderID: string;
        /**
         *
         * 0
         *
         */
        LobbyType: number;
        LockedLoadouts: {
          ":id": {
            /**
             *
             * character_shaggy
             *
             * character_Jason
             *
             */
            Character: string;
            /**
             *
             * skin_shaggy_default
             *
             * skin_c035_s25
             *
             */
            Skin: string;
          };
        };
        /**
         *
         * 67cf09dd07f3143f5fe732d1
         *
         * 67cf0df3ccb34beaa31998dc
         *
         */
        MatchID: string;
        /**
         *
         * evtq_ffa
         *
         * ranked-1v1
         *
         */
        ModeString: string;
        Platforms: {
          /**
           *
           * PC
           *
           */
          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {
          /**
           *
           * 544
           *
           */
          ":id": number;
        };
        ReadyPlayers: {};
        Teams: {
          /**
           *
           * 1
           *
           */
          Length: number;
          Players: {
            ":id": {
              Account: {
                /**
                 *
                 * 63cef97ced0619f458cfac8f
                 *
                 */
                id: string;
              };
              /**
               *
               *
               *
               */
              BotSettingSlug: string;
              /**
               *
               * 1
               *
               */
              CrossplayPreference: number;
              /**
               *
               * 2025-03-10T15:48:45.000Z
               *
               * 2025-03-10T16:06:10.000Z
               *
               */
              JoinedAt: string;
              /**
               *
               * 0
               *
               */
              LobbyPlayerIndex: number;
            };
          };
          /**
           *
           * 0
           *
           */
          TeamIndex: number;
        }[];
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_equip_banner_RESPONSE {
    body: {
      /**
       *
       * banner_s1_golden_goliath
       *
       * banner_s1_master_master
       *
       * banner_foretold_champion_rare
       *
       */
      EquippedBanner: string;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_equip_stat_tracker_RESPONSE {
    body: {
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
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_equip_taunt_RESPONSE {
    body: {
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
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_game_launch_event_RESPONSE {}

  export interface Ssc_invoke_get_or_create_mission_object_RESPONSE {
    body: {
      aggregates: {};
      calculations: {};
      /**
       *
       * 2024-05-30T15:49:58.000Z
       *
       */
      created_at: string;
      expire_time: {};
      /**
       *
       * 6658a026eaec8bdf5a91f886
       *
       */
      id: string;
      /**
       *
       * player-missions
       *
       */
      object_type_slug: string;
      owner: {};
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       */
      owner_id: string;
      /**
       *
       * account
       *
       */
      owner_model: string;
      server_data: {
        ClaimLocks: {};
        MissionControllerContainers: {
          miscon_battlepassdaily_s5: {
            MissionControllers: {
              misctl_battlepass_daily_base_ffa_new: {
                Missions: {
                  mis_stats_dealalldamage_ffa: {
                    /**
                     *
                     * f1f8ff3e-bef9-4d05-bda9-747b1ebca1f8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                }[];
                UsedMissions: string[];
              };
              misctl_battlepass_daily_base_new: {
                Missions: {
                  mis_stats_dealalldamage_pvp: {
                    /**
                     *
                     * b32be6de-3ad3-43da-9964-c6cf408d1cd8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 400
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
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
                    /**
                     *
                     * c6695f64-479d-4b9d-a561-d44c99a226d2
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                }[];
                UsedMissions: string[];
              };
              misctl_battlepass_daily_hard_new: {
                Missions: {
                  mis_stats_total_neutral_normals_hitH: {
                    /**
                     *
                     * 3ec7add5-9fd1-427c-9fd9-972915b7ab30
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 20
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_hit_neutral_attack
                       *
                       */
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
                    /**
                     *
                     * 453a1e1a-6fc1-4939-ad7d-eb42039d8906
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_up_ringout
                       *
                       */
                      Slug: string;
                    }[];
                  };
                }[];
                UsedMissions: string[];
              };
              misctl_battlepass_daily_new_2: {
                Missions: {
                  mis_ringout_2v2: {
                    /**
                     *
                     * 52002470-04c0-4f60-94c6-839353b3316c
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 4
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
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
                    /**
                     *
                     * b9d292ac-b7cc-4cd3-bff1-93f4ad61e852
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
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
                    /**
                     *
                     * df977cf0-853d-4fc1-805d-0bfac4dbcca4
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 2
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_playmatch
                       *
                       */
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
                    /**
                     *
                     * 773049df-3c1c-43db-8219-537651344b2e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_PartnerIsFriend
                       *
                       */
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
                    /**
                     *
                     * 6d527a15-341c-4de9-bc02-fba569b8933b
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_hitupspecialair
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c003: {
                    /**
                     *
                     * 4990eb42-bfc1-4631-a87f-05e6fc4c9f7e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c003: {
                    /**
                     *
                     * 923b90ee-4cfe-4ff6-aebd-1077ca858cec
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_sniper_c003: {
                    /**
                     *
                     * 8149f2b7-64a3-4412-b603-749b3f10b0c8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_totalsidegroundspecialhit
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c003: {
                    /**
                     *
                     * a6b33734-8268-43bb-af36-88c6c2d097a2
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
                    /**
                     *
                     * ea29c501-5218-4b74-ae3e-f39a617d08dc
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_bubble_c011
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_bubbleboy_c011: {
                    /**
                     *
                     * 653cdebf-31d4-4f59-adbe-3df186e6ca64
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_bubblestack_c011
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c011: {
                    /**
                     *
                     * 9f78c3f2-7c40-4de1-86ce-c43938e8159e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c011: {
                    /**
                     *
                     * 74d670d7-a312-4b20-96b9-ece371b77dc8
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c011: {
                    /**
                     *
                     * e58aef94-b816-4966-827a-a468d3e7e24a
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
                    /**
                     *
                     * 2898398b-7b4a-439c-b9bf-8e4e3712578b
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_lebron_pass
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_dealalldamage_c016: {
                    /**
                     *
                     * a4dcf510-b3fe-449b-9317-6a2f8d9ecc95
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_defense_c016: {
                    /**
                     *
                     * c49043db-9025-456b-90d4-b8c4f65a618a
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_lebron_defense
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c016: {
                    /**
                     *
                     * b5c59038-ecff-4b33-a25f-a5e57d3c637f
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c016: {
                    /**
                     *
                     * d49ea2f1-3dcb-4446-8aa7-77c51a5da75e
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
                    /**
                     *
                     * 4f34842e-693f-423f-b852-d7a43da90609
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_deal_damage
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_ringout_c019: {
                    /**
                     *
                     * 088d79d1-69c0-44ee-bb7c-443040330595
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_ringout_any
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_saveally_c019: {
                    /**
                     *
                     * 0d5519b2-21c2-4b9a-900d-a6198f340576
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_saveally_c019
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_splitnade_c019: {
                    /**
                     *
                     * e2e3e651-9b03-444d-815e-4722dcfeda77
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_splitnade_c019
                       *
                       */
                      Slug: string;
                    }[];
                  };
                  mis_usetaunts_c019: {
                    /**
                     *
                     * a72bd4eb-5c5f-472d-ad51-ba0ca2a641ff
                     *
                     */
                    MissionGuid: string;
                    MissionObjectives: {
                      /**
                       *
                       * 0
                       *
                       */
                      Progress: number;
                      /**
                       *
                       * misobj_taunt
                       *
                       */
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
      /**
       *
       * missions
       *
       */
      unique_key: string;
      /**
       *
       * 2025-03-10T14:43:18.000Z
       *
       */
      updated_at: string;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_invite_to_player_lobby_RESPONSE {
    body: {
      IsSpectator: boolean;
      /**
       *
       * 67cf0da2d0f5dd3b4bed6d4b
       *
       */
      MatchID: string;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_join_custom_game_lobby_RESPONSE {
    body: {
      /**
       *
       * ec2-us-east-1-dokken
       *
       */
      Cluster: string;
      /**
       *
       * 0
       *
       */
      ConnectionQuality: number;
      bIsJoiningCrossPlatform: boolean;
      lobby: {
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
        /**
         *
         * gm_classic_1v1
         *
         */
        GameModeSlug: string;
        /**
         *
         * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
         *
         */
        GameVersion: string;
        Handicaps: {};
        /**
         *
         * 1167552915
         *
         */
        HissCrc: number;
        IsLobbyJoinable: boolean;
        /**
         *
         * 62e95383b488ee2289aef406
         *
         */
        LeaderID: string;
        /**
         *
         * 0
         *
         */
        LobbyType: number;
        LockedLoadouts: {
          ":id": {
            /**
             *
             * character_C028
             *
             */
            Character: string;
            /**
             *
             * skin_c028_default
             *
             */
            Skin: string;
          };
        };
        Maps: {
          IsSelected: boolean;
          /**
           *
           * M000_V2_NEW
           *
           */
          Map: string;
        }[];
        /**
         *
         * 67cf0da2d0f5dd3b4bed6d4b
         *
         */
        MatchID: string;
        Platforms: {
          /**
           *
           * PC
           *
           */
          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {
          /**
           *
           * 964
           *
           */
          ":id": number;
        };
        ReadyPlayers: {
          ":id": boolean;
        };
        Teams: {
          /**
           *
           * 1
           *
           */
          Length: number;
          Players: {
            ":id": {
              Account: {
                /**
                 *
                 * 63cef97ced0619f458cfac8f
                 *
                 */
                id: string;
              };
              /**
               *
               *
               *
               */
              BotSettingSlug: string;
              /**
               *
               * 1
               *
               */
              CrossplayPreference: number;
              /**
               *
               * 2025-03-10T16:06:03.000Z
               *
               * 2025-03-10T16:06:39.000Z
               *
               */
              JoinedAt: string;
              /**
               *
               * 0
               *
               */
              LobbyPlayerIndex: number;
            };
          };
          /**
           *
           * 0
           *
           */
          TeamIndex: number;
        }[];
        WorldBuffs: string[];
        match_config: {
          AllowDuplicateCharacters: boolean;
          AllowHazards: boolean;
          AreRewardsSkipped: boolean;
          /**
           *
           * Custom
           *
           */
          Context: string;
          /**
           *
           * 1
           *
           */
          EnableShields: number;
          /**
           *
           * Versus
           *
           */
          GameModeAlias: string;
          /**
           *
           * 300
           *
           */
          MatchDuration: number;
          /**
           *
           * Unselected
           *
           */
          ModeDifficulty: string;
          /**
           *
           * 3
           *
           */
          NumRingoutsForWin: number;
          /**
           *
           * Unselected
           *
           */
          QueueType: string;
          /**
           *
           * Solos
           *
           */
          TeamStyle: string;
          /**
           *
           * 1
           *
           */
          num_set_wins_required: number;
        };
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_kick_from_lobby_RESPONSE {
    body: {
      /**
       *
       * 67cf0da2d0f5dd3b4bed6d4b
       *
       */
      MatchID: string;
      Player: {
        Account: {
          /**
           *
           * 62e95383b488ee2289aef406
           *
           */
          id: string;
        };
        /**
         *
         *
         *
         */
        BotSettingSlug: string;
        /**
         *
         * 1
         *
         */
        CrossplayPreference: number;
        /**
         *
         * 2025-03-10T16:04:57.000Z
         *
         */
        JoinedAt: string;
        /**
         *
         * 1
         *
         */
        LobbyPlayerIndex: number;
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_leave_player_lobby_RESPONSE {
    body: {
      lobby: {
        AllMultiplayParams: {};
        /**
         *
         * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
         *
         */
        GameVersion: string;
        /**
         *
         * 1167552915
         *
         */
        HissCrc: number;
        IsLobbyJoinable: boolean;
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        LeaderID: string;
        /**
         *
         * 0
         *
         */
        LobbyType: number;
        LockedLoadouts: {
          ":id": {
            /**
             *
             * character_Jason
             *
             */
            Character: string;
            /**
             *
             * skin_c035_s25
             *
             */
            Skin: string;
          };
        };
        /**
         *
         * 67cf0de391f4b91c30a4728c
         *
         * 67cf0e6bb8655ea25ca14eb6
         *
         */
        MatchID: string;
        /**
         *
         * ranked-1v1
         *
         * 2v2
         *
         */
        ModeString: string;
        Platforms: {
          /**
           *
           * PC
           *
           */
          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {
          /**
           *
           * 544
           *
           */
          ":id": number;
        };
        ReadyPlayers: {};
        Teams: {
          /**
           *
           * 1
           *
           */
          Length: number;
          Players: {
            ":id": {
              Account: {
                /**
                 *
                 * 63cef97ced0619f458cfac8f
                 *
                 */
                id: string;
              };
              /**
               *
               *
               *
               */
              BotSettingSlug: string;
              /**
               *
               * 1
               *
               */
              CrossplayPreference: number;
              /**
               *
               * 2025-03-10T16:05:55.000Z
               *
               * 2025-03-10T16:08:11.000Z
               *
               */
              JoinedAt: string;
              /**
               *
               * 0
               *
               */
              LobbyPlayerIndex: number;
            };
          };
          /**
           *
           * 0
           *
           */
          TeamIndex: number;
        }[];
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_lobby_code_RESPONSE {
    body: {
      /**
       *
       * RHNSF
       *
       */
      LobbyCode: string;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_lock_lobby_loadout_RESPONSE {
    body: {
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       */
      AccountId: string;
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
      bAreAllLoadoutsLocked: boolean;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_perks_lock_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_perks_purchase_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_perks_set_character_page_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_promote_to_lobby_leader_RESPONSE {
    body: {
      /**
       *
       * 62e95383b488ee2289aef406
       *
       */
      LeaderID: string;
      /**
       *
       * 67cf0da2d0f5dd3b4bed6d4b
       *
       */
      MatchID: string;
      ReadyPlayers: {
        ":id": boolean;
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_rematch_accept_RESPONSE {
    body: any[];
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_send_profile_notification_RESPONSE {}

  export interface Ssc_invoke_set_enabled_maps_for_custom_game_RESPONSE {
    body: {
      Maps: {
        IsSelected: boolean;
        /**
         *
         * M000_V2_NEW
         *
         */
        Map: string;
      }[];
      /**
       *
       * 67cf0da2d0f5dd3b4bed6d4b
       *
       */
      MatchID: string;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_set_game_mode_for_custom_game_RESPONSE {
    body: {
      lobby: {
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
         * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
         *
         */
        GameVersion: string;
        Handicaps: {};
        /**
         *
         * 1167552915
         *
         */
        HissCrc: number;
        IsLobbyJoinable: boolean;
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        LeaderID: string;
        /**
         *
         * 0
         *
         */
        LobbyType: number;
        LockedLoadouts: {
          ":id": {
            /**
             *
             * character_C028
             *
             */
            Character: string;
            /**
             *
             * skin_c028_default
             *
             */
            Skin: string;
          };
        };
        Maps: {
          IsSelected: boolean;
          /**
           *
           * M001_V2
           *
           * M000_V2_NEW
           *
           */
          Map: string;
        }[];
        /**
         *
         * 67cf0da2d0f5dd3b4bed6d4b
         *
         */
        MatchID: string;
        Platforms: {
          /**
           *
           * PC
           *
           */
          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {
          /**
           *
           * 964
           *
           */
          ":id": number;
        };
        ReadyPlayers: {
          ":id": boolean;
        };
        Teams: {
          /**
           *
           * 1
           *
           */
          Length: number;
          Players: {
            ":id": {
              Account: {
                /**
                 *
                 * 63cef97ced0619f458cfac8f
                 *
                 */
                id: string;
              };
              /**
               *
               *
               *
               */
              BotSettingSlug: string;
              /**
               *
               * 1
               *
               */
              CrossplayPreference: number;
              /**
               *
               * 2025-03-10T16:04:50.000Z
               *
               */
              JoinedAt: string;
              /**
               *
               * 0
               *
               */
              LobbyPlayerIndex: number;
            };
          };
          /**
           *
           * 0
           *
           */
          TeamIndex: number;
        }[];
        match_config: {
          AllowDuplicateCharacters: boolean;
          AllowHazards: boolean;
          AreRewardsSkipped: boolean;
          /**
           *
           * Custom
           *
           */
          Context: string;
          /**
           *
           * 1
           *
           */
          EnableShields: number;
          /**
           *
           * Versus
           *
           */
          GameModeAlias: string;
          /**
           *
           * 300
           *
           */
          MatchDuration: number;
          /**
           *
           * Unselected
           *
           */
          ModeDifficulty: string;
          /**
           *
           * 3
           *
           */
          NumRingoutsForWin: number;
          /**
           *
           * Unselected
           *
           */
          QueueType: string;
          /**
           *
           * Solos
           *
           */
          TeamStyle: string;
          /**
           *
           * 1
           *
           */
          num_set_wins_required: number;
        };
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_set_lobby_joinable_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_set_mode_for_lobby_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_set_ready_for_lobby_RESPONSE {
    body: {
      /**
       *
       * 67cf09dd07f3143f5fe732d1
       *
       */
      MatchID: string;
      /**
       *
       * 63cef97ced0619f458cfac8f
       *
       */
      PlayerID: string;
      Ready: boolean;
      bAllPlayersReady: boolean;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_set_world_buffs_for_custom_game_RESPONSE {
    body: {
      /**
       *
       * 67cf0da2d0f5dd3b4bed6d4b
       *
       */
      MatchID: string;
      WorldBuffs: string[];
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_start_custom_match_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_submit_end_of_match_stats_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_switch_custom_game_lobby_team_RESPONSE {
    body: {
      /**
       *
       * 67cf0da2d0f5dd3b4bed6d4b
       *
       */
      MatchID: string;
      Player: {
        Account: {
          /**
           *
           * 63cef97ced0619f458cfac8f
           *
           */
          id: string;
        };
        /**
         *
         *
         *
         */
        BotSettingSlug: string;
        /**
         *
         * 1
         *
         */
        CrossplayPreference: number;
        /**
         *
         * 2025-03-10T16:04:50.000Z
         *
         */
        JoinedAt: string;
        /**
         *
         * 0
         *
         */
        LobbyPlayerIndex: number;
      };
      /**
       *
       * 4
       *
       */
      TeamIndex: number;
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_toast_player_RESPONSE {
    body: {};
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_update_int_setting_for_custom_game_RESPONSE {
    body: {
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
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Ssc_invoke_update_team_style_for_custom_game_RESPONSE {
    body: {
      lobby: {
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
        /**
         *
         * CLIENT:2F322-Retail DATA:4CF442B2 PERKS:1
         *
         */
        GameVersion: string;
        Handicaps: {};
        /**
         *
         * 1167552915
         *
         */
        HissCrc: number;
        IsLobbyJoinable: boolean;
        /**
         *
         * 63cef97ced0619f458cfac8f
         *
         */
        LeaderID: string;
        /**
         *
         * 0
         *
         */
        LobbyType: number;
        LockedLoadouts: {
          ":id": {
            /**
             *
             * character_C028
             *
             */
            Character: string;
            /**
             *
             * skin_c028_default
             *
             */
            Skin: string;
          };
        };
        Maps: {
          IsSelected: boolean;
          /**
           *
           * M000_V2_NEW
           *
           */
          Map: string;
        }[];
        /**
         *
         * 67cf0da2d0f5dd3b4bed6d4b
         *
         */
        MatchID: string;
        Platforms: {
          /**
           *
           * PC
           *
           */
          ":id": string;
        };
        PlayerAutoPartyPreferences: {
          ":id": boolean;
        };
        PlayerGameplayPreferences: {
          /**
           *
           * 964
           *
           */
          ":id": number;
        };
        ReadyPlayers: {
          ":id": boolean;
        };
        Teams: {
          /**
           *
           * 1
           *
           */
          Length: number;
          Players: {
            ":id": {
              Account: {
                /**
                 *
                 * 63cef97ced0619f458cfac8f
                 *
                 */
                id: string;
              };
              /**
               *
               *
               *
               */
              BotSettingSlug: string;
              /**
               *
               * 1
               *
               */
              CrossplayPreference: number;
              /**
               *
               * 2025-03-10T16:04:50.000Z
               *
               */
              JoinedAt: string;
              /**
               *
               * 0
               *
               */
              LobbyPlayerIndex: number;
            };
          };
          /**
           *
           * 0
           *
           */
          TeamIndex: number;
        }[];
        match_config: {
          AllowDuplicateCharacters: boolean;
          AllowHazards: boolean;
          AreRewardsSkipped: boolean;
          /**
           *
           * Custom
           *
           */
          Context: string;
          /**
           *
           * 1
           *
           */
          EnableShields: number;
          /**
           *
           * Versus
           *
           */
          GameModeAlias: string;
          /**
           *
           * 420
           *
           */
          MatchDuration: number;
          /**
           *
           * Unselected
           *
           */
          ModeDifficulty: string;
          /**
           *
           * 3
           *
           */
          NumRingoutsForWin: number;
          /**
           *
           * Unselected
           *
           */
          QueueType: string;
          /**
           *
           * Solos
           *
           */
          TeamStyle: string;
          /**
           *
           * 1
           *
           */
          num_set_wins_required: number;
        };
      };
    };
    metadata: {};
    /**
     *
     * 0
     *
     */
    return_code: number;
  }

  export interface Telemetry_data_datarouter_api_v1_public_data_RESPONSE {
    /**
     *
     * errors.com.epicgames.eos.auth.token_expired
     *
     */
    errorCode: string;
    /**
     *
     * Jwt is expired
     *
     */
    errorMessage: string;
    messageVars: any[];
    /**
     *
     * 110005
     *
     */
    numericErrorCode: number;
    /**
     *
     * eos-gateway
     *
     */
    originatingService: string;
    /**
     *
     * prod
     *
     */
    intent: string;
  }

  export interface Virtual_commerce_purchases_id_toasts_gleamium_RESPONSE {
    /**
     *
     * 63cef97ced0619f458cfac8f
     *
     */
    account_id: string;
    action_results: any[];
    /**
     *
     * 2025-03-10T15:56:48.000Z
     *
     */
    created_at: string;
    /**
     *
     * 50
     *
     */
    final_price_quantity: number;
    /**
     *
     * 67cf0bc08a7ef8fb7f6b73fa
     *
     */
    id: string;
    /**
     *
     * 67cf0bc08a7ef8fb7f6b73f9
     *
     */
    inventory_log_id: string;
    inventory_modifications: {
      /**
       *
       * inc_currency
       *
       */
      command: string;
      /**
       *
       * -50
       *
       */
      count: number;
      /**
       *
       * earned
       *
       */
      currency_source_slug: string;
      /**
       *
       * gleamium
       *
       */
      slug: string;
      /**
       *
       * steam
       *
       */
      source_platform: string;
    }[];
    /**
     *
     * 50
     *
     */
    original_price_quantity: number;
    /**
     *
     * gleamium
     *
     */
    price_inventory_item_slug: string;
    reward_actions: any[];
    server_data: {};
    /**
     *
     * toasts_gleamium
     *
     */
    store_product_sku: string;
    store_product_sku_instance_id: {};
    store_product_sku_participant_id: {};
    /**
     *
     * toasts
     *
     */
    store_product_slug: string;
    /**
     *
     * 2025-03-10T15:56:48.000Z
     *
     */
    updated_at: string;
    user_segments: string[];
  }
}
