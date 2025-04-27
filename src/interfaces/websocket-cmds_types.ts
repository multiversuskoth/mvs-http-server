export namespace MVSWebsocketCMDS {
  export interface Game_server_instance_ready_sent_WS {
    /**
     *
     * game-server-instance-ready
     *
     */
    cmd: string
    data: {}
    /**
     *
     * Your game server is ready to join.
     *
     */
    header: string
    payload: {
      game_server_instance: {
        /**
         *
         * multiplay
         *
         */
        game_server_type_slug: string
        /**
         *
         * 98.96.201.138
         *
         */
        host: string
        /**
         *
         * 67d1e6f9443aaa9e09cc4121
         *
         */
        id: string
        /**
         *
         * 67d1e6f9443aaa9e09cc4120
         *
         */
        owner_id: string
        /**
         *
         * 8877
         *
         */
        port: number
      }
      proxied_data: {}
    }
  }

  export interface Matchmaking_complete_sent_WS {
    /**
     *
     * matchmaking-complete
     *
     */
    cmd: string
    data: {}
    /**
     *
     * Matchmaking request completed!
     *
     */
    header: string
    payload: {
      /**
       *
       * 67d1e6f30d91c781e4bb0053
       *
       */
      id: string
      match: {
        /**
         *
         * 67d1e6f9443aaa9e09cc4120
         *
         */
        id: string
      }
      result: {
        /**
         *
         * 67d1e6f9443aaa9e09cc411f
         *
         */
        id: string
      }
      /**
       *
       * 2
       *
       */
      state: number
    }
  }

  export interface Matchmaking_tick_sent_WS {
    /**
     *
     * matchmaking-tick
     *
     */
    cmd: string
    data: {}
    /**
     *
     * matchmaking-tick
     *
     */
    header: string
    payload: {
      /**
       *
       * 67d1e6f30d91c781e4bb0053
       *
       */
      id: string
      /**
       *
       * 2
       *
       */
      state: number
    }
  }

  export interface Profile_notification_sent_WS {
    /**
     *
     * profile-notification
     *
     */
    cmd: string
    data: {
      Context: {}
      RewardsGranted: {
        Constraints: any[]
        /**
         *
         * 5
         *
         */
        DirectInventoryItemCount: number
        /**
         *
         * match_toasts
         *
         */
        InventoryHsda: string
        /**
         *
         * DirectInventoryItem
         *
         */
        RewardGrantMethod: string
        /**
         *
         * fc145ad1-110b-44d4-83b4-a4c378eff88e
         *
         */
        RewardGuid: string
      }[]
      /**
       *
       * OnRewardsGranted
       *
       * MissionUpdatesComplete
       *
       * RewardTrackStatesUpdated
       *
       * EndOfMatchPayload
       *
       * RematchDeclinedNotification
       *
       */
      template_id: string
      data: {
        aggregates: {}
        calculations: {}
        /**
         *
         * 2024-05-30T15:49:58.000Z
         *
         */
        created_at: string
        expire_time: {}
        /**
         *
         * 6658a026eaec8bdf5a91f886
         *
         */
        id: string
        /**
         *
         * player-missions
         *
         */
        object_type_slug: string
        owner: {}
        /**
         *
         * 680c459a69f798cb6846c35a
         *
         */
        owner_id: string
        /**
         *
         * account
         *
         */
        owner_model: string
        server_data: {
          ClaimLocks: {}
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_deal_damage
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
                misctl_battlepass_daily_base_new: {
                  Missions: {
                    mis_stats_dealalldamage_pvp: {
                      /**
                       *
                       * bf37b997-9744-48b9-a4cb-9063958028be
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_deal_damage
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
                misctl_battlepass_daily_base_pve_new: {
                  Missions: {
                    mis_stats_dealalldamage_pve: {
                      /**
                       *
                       * c6695f64-479d-4b9d-a561-d44c99a226d2
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_deal_damage
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
                misctl_battlepass_daily_hard_new: {
                  Missions: {
                    mis_stats_total_down_normals_hith: {
                      /**
                       *
                       * f367cc26-94aa-472e-afb7-f5beca415eeb
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_hit_down_attack
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
                misctl_battlepass_daily_new_1: {
                  Missions: {
                    mis_totalupringouts_assassin: {
                      /**
                       *
                       * 453a1e1a-6fc1-4939-ad7d-eb42039d8906
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_up_ringout
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
                misctl_battlepass_daily_new_2: {
                  Missions: {
                    mis_ringout_2v2: {
                      /**
                       *
                       * 52002470-04c0-4f60-94c6-839353b3316c
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 4
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_ringout_any
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_ringout_any
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
            "miscon_event_arenas5-3": {
              MissionControllers: {
                "misctl_event_arenas5-3": {
                  Missions: {
                    mis_winarena: {
                      /**
                       *
                       * 6121618f-714f-4723-862f-a2866ce29b7e
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_winarena
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 2
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_playmatch
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
                misctl_ftue_daily_logins: {
                  Missions: any[]
                  UsedMissions: string[]
                }
                misctl_ftue_timed: {
                  Missions: {
                    mis_ftue_play_team_friend_pvp: {
                      /**
                       *
                       * 773049df-3c1c-43db-8219-537651344b2e
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_PartnerIsFriend
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_hitupspecialair
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_dealalldamage_c003: {
                      /**
                       *
                       * 4990eb42-bfc1-4631-a87f-05e6fc4c9f7e
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_deal_damage
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_ringout_c003: {
                      /**
                       *
                       * 923b90ee-4cfe-4ff6-aebd-1077ca858cec
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_ringout_any
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_sniper_c003: {
                      /**
                       *
                       * 8149f2b7-64a3-4412-b603-749b3f10b0c8
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_totalsidegroundspecialhit
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_usetaunts_c003: {
                      /**
                       *
                       * a6b33734-8268-43bb-af36-88c6c2d097a2
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_taunt
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_bubble_c011
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_bubbleboy_c011: {
                      /**
                       *
                       * 653cdebf-31d4-4f59-adbe-3df186e6ca64
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_bubblestack_c011
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_dealalldamage_c011: {
                      /**
                       *
                       * 9f78c3f2-7c40-4de1-86ce-c43938e8159e
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_deal_damage
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_ringout_c011: {
                      /**
                       *
                       * 74d670d7-a312-4b20-96b9-ece371b77dc8
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_ringout_any
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_usetaunts_c011: {
                      /**
                       *
                       * e58aef94-b816-4966-827a-a468d3e7e24a
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_taunt
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_lebron_pass
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_defense_c016: {
                      /**
                       *
                       * c49043db-9025-456b-90d4-b8c4f65a618a
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_lebron_defense
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_ringout_c016: {
                      /**
                       *
                       * b5c59038-ecff-4b33-a25f-a5e57d3c637f
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 3
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_ringout_any
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_usetaunts_c016: {
                      /**
                       *
                       * d49ea2f1-3dcb-4446-8aa7-77c51a5da75e
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_taunt
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_deal_damage
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_ringout_c019: {
                      /**
                       *
                       * 088d79d1-69c0-44ee-bb7c-443040330595
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_ringout_any
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_saveally_c019: {
                      /**
                       *
                       * 0d5519b2-21c2-4b9a-900d-a6198f340576
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_saveally_c019
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_splitnade_c019: {
                      /**
                       *
                       * e2e3e651-9b03-444d-815e-4722dcfeda77
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_splitnade_c019
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_usetaunts_c019: {
                      /**
                       *
                       * a72bd4eb-5c5f-472d-ad51-ba0ca2a641ff
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_taunt
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
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
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_allyseed_c020
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_dealalldamage_c020: {
                      /**
                       *
                       * ccfe54f2-f89f-4ea7-a82b-28bda35da1b2
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_deal_damage
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_portalkb_c020: {
                      /**
                       *
                       * bec2e091-4a90-4f4d-9490-97091a3693c2
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_portalkb_c020
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_ringout_c020: {
                      /**
                       *
                       * eb3a7a0c-39ce-4543-8c90-87fa58e2b967
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_ringout_any
                         *
                         */
                        Slug: string
                      }[]
                    }
                    mis_usetaunts_c020: {
                      /**
                       *
                       * 2fc008dd-d76a-4ea2-8a85-da5eee14e1c1
                       *
                       */
                      MissionGuid: string
                      MissionObjectives: {
                        /**
                         *
                         * 0
                         *
                         */
                        Progress: number
                        /**
                         *
                         * misobj_taunt
                         *
                         */
                        Slug: string
                      }[]
                    }
                  }[]
                  UsedMissions: string[]
                }
              }
            }
          }
        }
        /**
         *
         * missions
         *
         */
        unique_key: string
        /**
         *
         * 2025-03-12T19:56:30.000Z
         *
         */
        updated_at: string
      }
      RewardTrackStates: {
        ClaimedRewards: string[]
        CompletedTiers: string[]
        /**
         *
         * 500
         *
         */
        CurrentScore: number
        /**
         *
         * 10
         *
         */
        CurrentTier: number
        /**
         *
         * 177722c5-97cd-4ff1-ad21-11d581c888cc
         *
         */
        Guid: string
        /**
         *
         * -1
         *
         */
        HighestClaimedInifiniteTier: number
        /**
         *
         * -1
         *
         */
        InfiniteTierThreshold: number
        /**
         *
         * MvsThemedEventRewardTrackHsda
         *
         */
        RewardTrackClass: string
        /**
         *
         * bp_valentines_dailylogin_milestonerewardtrack1
         *
         */
        TrackSlug: string
        bHasPremium: boolean
      }[]
      /**
       *
       * 4
       *
       */
      UpdateContext: number
      ClientReturnData: {
        MilestoneRewardTracks: {
          MrtDeltas: {
            MRT_FighterRoadV2: {
              /**
               *
               * 212474
               *
               */
              NewScore: number
              /**
               *
               * 17
               *
               */
              NewTier: number
            }
            bp_season5_arena1_milestonerewardtrack3: {
              NewCompletedTiers: string[]
              /**
               *
               * 150
               *
               */
              NewScore: number
              /**
               *
               * 1
               *
               */
              NewTier: number
            }
            mrt_battlepass_season_five: {
              /**
               *
               * 42607
               *
               */
              NewScore: number
              /**
               *
               * 22
               *
               */
              NewTier: number
            }
            mrt_mastery_account: {
              /**
               *
               * 563216
               *
               */
              NewScore: number
              /**
               *
               * 36
               *
               */
              NewTier: number
            }
            mrt_mastery_wonder_woman: {
              /**
               *
               * 800
               *
               */
              NewScore: number
              /**
               *
               * 2
               *
               */
              NewTier: number
            }
          }
          ScoreSources: {
            MRT_FighterRoadV2: {
              Arr: {
                Params: any[]
                /**
                 *
                 * 100
                 *
                 */
                Score: number
                /**
                 *
                 * Eog:Source:PlayMatch
                 *
                 */
                Tag: string
                bIsActive: boolean
              }[]
            }
            bp_season5_arena1_milestonerewardtrack3: {
              Arr: {
                Params: any[]
                /**
                 *
                 * 50
                 *
                 */
                Score: number
                /**
                 *
                 * Eog:Source:PlayMatch
                 *
                 */
                Tag: string
                bIsActive: boolean
              }[]
            }
            mrt_battlepass_season_five: {
              Arr: {
                Params: any[]
                /**
                 *
                 * 25
                 *
                 */
                Score: number
                /**
                 *
                 * Eog:Source:PlayMatch
                 *
                 */
                Tag: string
                bIsActive: boolean
              }[]
            }
            mrt_mastery_account: {
              Arr: {
                Params: any[]
                /**
                 *
                 * 50
                 *
                 */
                Score: number
                /**
                 *
                 * Eog:Source:PlayMatch
                 *
                 */
                Tag: string
                bIsActive: boolean
              }[]
            }
            mrt_mastery_wonder_woman: {
              Arr: {
                Params: any[]
                /**
                 *
                 * 50
                 *
                 */
                Score: number
                /**
                 *
                 * Eog:Source:PlayMatch
                 *
                 */
                Tag: string
                bIsActive: boolean
              }[]
            }
          }
        }
        Missions: {
          PlayerMissionObject: {
            MissionControllerContainers: {
              miscon_battlepassdaily_s5: {
                MissionControllers: {
                  misctl_battlepass_daily_base_new: {
                    Missions: {
                      mis_stats_dealalldamage_pvp: {
                        /**
                         *
                         * bf37b997-9744-48b9-a4cb-9063958028be
                         *
                         */
                        MissionGuid: string
                        MissionObjectives: {
                          /**
                           *
                           * 275.0874938964844
                           *
                           */
                          Progress: number
                          /**
                           *
                           * misobj_deal_damage
                           *
                           */
                          Slug: string
                        }[]
                      }
                    }[]
                  }
                  misctl_battlepass_daily_hard_new: {
                    Missions: {
                      mis_stats_total_down_normals_hith: {
                        /**
                         *
                         * f367cc26-94aa-472e-afb7-f5beca415eeb
                         *
                         */
                        MissionGuid: string
                        MissionObjectives: {
                          /**
                           *
                           * 6
                           *
                           */
                          Progress: number
                          /**
                           *
                           * misobj_hit_down_attack
                           *
                           */
                          Slug: string
                        }[]
                      }
                    }[]
                  }
                  misctl_battlepass_daily_new_1: {
                    Missions: {}[]
                  }
                }
              }
              miscon_battlepassweekly_s5: {
                MissionControllers: {
                  misctl_battlepass_weekly_new: {
                    Missions: {}[]
                  }
                }
              }
            }
          }
        }
      }
      GameplayConfig: {
        ArenaModeInfo: {}
        /**
         *
         *
         *
         */
        Cluster: string
        /**
         *
         * CountdownTypes:XvY
         *
         */
        CountdownDisplay: string
        /**
         *
         * 2025-03-12T19:56:43.000Z
         *
         */
        Created: string
        CustomGameSettings: {
          /**
           *
           * 420
           *
           */
          MatchTime: number
          /**
           *
           * 3
           *
           */
          NumRingouts: number
          bHazardsEnabled: boolean
          bShieldsEnabled: boolean
        }
        /**
         *
         *
         *
         */
        EventQueueSlug: string
        HudSettings: {
          bDisplayPortraits: boolean
          bDisplayStocks: boolean
          bDisplayTimer: boolean
        }
        /**
         *
         * M014_V2
         *
         */
        Map: string
        /**
         *
         * 420
         *
         */
        MatchDurationSeconds: number
        /**
         *
         * 67d1e6f9443aaa9e09cc4120
         *
         */
        MatchId: string
        /**
         *
         * 1v1
         *
         */
        ModeString: string
        Players: {
          ":id": {
            /**
             *
             * 6658bf8e9718c7fdcbd06a3d
             *
             */
            AccountId: string
            /**
             *
             * banner_jokerhaha
             *
             */
            Banner: string
            /**
             *
             *
             *
             */
            BotBehaviorOverride: string
            /**
             *
             * 0
             *
             */
            BotDifficultyMax: number
            /**
             *
             * 0
             *
             */
            BotDifficultyMin: number
            Buffs: any[]
            /**
             *
             * character_Jason
             *
             */
            Character: string
            /**
             *
             * 964
             *
             */
            GameplayPreferences: number
            Gems: any[]
            /**
             *
             * 0
             *
             */
            Handicap: number
            /**
             *
             * 67d1e550ebf53199dc7692cb
             *
             */
            PartyId: string
            PartyMember: {}
            Perks: string[]
            /**
             *
             * 1
             *
             */
            PlayerIndex: number
            /**
             *
             *
             *
             */
            ProfileIcon: string
            RankedDivision: {}
            RankedTier: {}
            /**
             *
             * ring_out_vfx_sugar_spice_everything_nice
             *
             */
            RingoutVfx: string
            /**
             *
             * skin_jason_000
             *
             */
            Skin: string
            /**
             *
             * 0
             *
             */
            StartingDamage: number
            StatTrackers: string[][]
            Taunts: string[]
            /**
             *
             * 1
             *
             */
            TeamIndex: number
            Username: {}
            WinStreak: {}
            bAutoPartyPreference: boolean
            bIsBot: boolean
            bUseCharacterDisplayName: boolean
          }
        }
        /**
         *
         * Attunements:None
         *
         */
        RiftNodeAttunement: string
        /**
         *
         *
         *
         */
        RiftNodeId: string
        /**
         *
         * AttributeToAttacker
         *
         */
        ScoreAttributionRule: string
        /**
         *
         * TargetScoreIsWin
         *
         */
        ScoreEvaluationRule: string
        Spectators: {}
        TeamData: any[]
        WorldBuffs: any[]
        bAllowMapHazards: boolean
        bIsCasualSpecial: boolean
        bIsCustomGame: boolean
        bIsOnlineMatch: boolean
        bIsPvP: boolean
        bIsRanked: boolean
        bIsRift: boolean
        bIsTutorial: boolean
        bModeGrantsProgress: boolean
      }
      /**
       *
       * 680c459a69f798cb6846c35a
       *
       */
      AccountId: string
      /**
       *
       * 67d1e6f9443aaa9e09cc4120
       *
       */
      MatchId: string
    }
    /**
     *
     *
     *
     */
    header: string
    payload: {
      /**
       *
       * 680c459a69f798cb6846c35a
       *
       */
      account_id: string
      frm: {
        /**
         *
         * internal-server
         *
         */
        id: string
        /**
         *
         * server-api-key
         *
         */
        type: string
      }
      /**
       *
       * 680c45b006f088ca1187113f
       *
       */
      profile_id: string
      /**
       *
       * realtime
       *
       */
      template: string
    }
  }

  export interface Update_sent_WS {
    /**
     *
     * update
     *
     */
    cmd: string
    data: {
      /**
       *
       * 67d1e6f30d91c781e4bb0053
       *
       */
      MatchmakingRequestId: string
      /**
       *
       * OnMatchmakerStarted
       *
       * OnGameplayConfigNotified
       *
       * GameServerReadyNotification
       *
       * PerksLockedNotification
       *
       */
      template_id: string
      GameplayConfig: {
        ArenaModeInfo: {}
        /**
         *
         * ec2-us-east-1-dokken
         *
         *
         *
         */
        Cluster: string
        /**
         *
         * CountdownTypes:XvY
         *
         */
        CountdownDisplay: string
        /**
         *
         * 2025-03-12T19:56:43.000Z
         *
         */
        Created: string
        CustomGameSettings: {
          /**
           *
           * 420
           *
           */
          MatchTime: number
          /**
           *
           * 3
           *
           */
          NumRingouts: number
          bHazardsEnabled: boolean
          bShieldsEnabled: boolean
        }
        /**
         *
         *
         *
         */
        EventQueueSlug: string
        HudSettings: {
          bDisplayPortraits: boolean
          bDisplayStocks: boolean
          bDisplayTimer: boolean
        }
        /**
         *
         * M014_V2
         *
         */
        Map: string
        /**
         *
         * 420
         *
         */
        MatchDurationSeconds: number
        /**
         *
         * 67d1e6f9443aaa9e09cc4120
         *
         */
        MatchId: string
        /**
         *
         * 1v1
         *
         */
        ModeString: string
        Players: {
          ":id": {
            /**
             *
             * 6658bf8e9718c7fdcbd06a3d
             *
             */
            AccountId: string
            /**
             *
             * banner_jokerhaha
             *
             */
            Banner: string
            /**
             *
             *
             *
             */
            BotBehaviorOverride: string
            /**
             *
             * 0
             *
             */
            BotDifficultyMax: number
            /**
             *
             * 0
             *
             */
            BotDifficultyMin: number
            Buffs: any[]
            /**
             *
             * character_Jason
             *
             */
            Character: string
            /**
             *
             * 964
             *
             */
            GameplayPreferences: number
            Gems: any[]
            /**
             *
             * 0
             *
             */
            Handicap: number
            /**
             *
             * 67d1e550ebf53199dc7692cb
             *
             */
            PartyId: string
            PartyMember: {}
            Perks: any[]
            /**
             *
             * 1
             *
             */
            PlayerIndex: number
            /**
             *
             *
             *
             */
            ProfileIcon: string
            RankedDivision: {}
            RankedTier: {}
            /**
             *
             * ring_out_vfx_sugar_spice_everything_nice
             *
             */
            RingoutVfx: string
            /**
             *
             * skin_jason_000
             *
             */
            Skin: string
            /**
             *
             * 0
             *
             */
            StartingDamage: number
            StatTrackers: string[][]
            Taunts: string[]
            /**
             *
             * 1
             *
             */
            TeamIndex: number
            Username: {}
            WinStreak: {}
            bAutoPartyPreference: boolean
            bIsBot: boolean
            bUseCharacterDisplayName: boolean
          }
        }
        /**
         *
         * Attunements:None
         *
         */
        RiftNodeAttunement: string
        /**
         *
         *
         *
         */
        RiftNodeId: string
        /**
         *
         * AttributeToAttacker
         *
         */
        ScoreAttributionRule: string
        /**
         *
         * TargetScoreIsWin
         *
         */
        ScoreEvaluationRule: string
        Spectators: {}
        TeamData: any[]
        WorldBuffs: any[]
        bAllowMapHazards: boolean
        bIsCasualSpecial: boolean
        bIsCustomGame: boolean
        bIsOnlineMatch: boolean
        bIsPvP: boolean
        bIsRanked: boolean
        bIsRift: boolean
        bIsTutorial: boolean
        bModeGrantsProgress: boolean
      }
      /**
       *
       * 67d1e6f9443aaa9e09cc4120
       *
       */
      MatchId: string
      /**
       *
       * 98.96.201.138
       *
       */
      IPAddress: string
      /**
       *
       * 67d1e6f9443aaa9e09cc4120
       *
       */
      MatchID: string
      /**
       *
       * sBgpaxe8TEW7eRCKdcUs59O1KRUoN07aqTFYtLICjXs=
       *
       */
      MatchKey: string
      /**
       *
       * 8877
       *
       */
      Port: number
    }
    /**
     *
     *
     *
     */
    header: string
    payload: {
      /**
       *
       * realtime
       *
       */
      custom_notification: string
      match: {
        /**
         *
         * 67d1e6ee8d32621295fffaad
         *
         * 67d1e6f9443aaa9e09cc4120
         *
         */
        id: string
      }
    }
  }
}
