export const MISSION_CONTAINER = {
  miscon_battlepass_weekly: {
    slug: "miscon_battlepass_weekly",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_two",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Weekly",
        Description: {
          localizations: {
            loc_New_Missions_Every_Week: "New Missions Every Week",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_battlepass_weekly",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_two",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 50,
        Texture: "/Game/Character/Captures/C026/t_fighterthumbnail_samjack.t_fighterthumbnail_samjack",
        Title: {
          localizations: {
            loc_Weekly_Missions: "Weekly Missions",
          },
        },
        UiLayout: "Missions:UILayouts:Weekly",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        Type: "BattlePassWeekly",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_battlepass_weekly",
      bIsEnabled: true,
    },
    private_data: {},
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1742919755,
    },
    id: "663c0f944b55072b1d7eca58",
  },
  miscon_event_welcome_back: {
    slug: "miscon_event_welcome_back",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      MvsMissionControllerContainerData: {
        AssociatedEvent: "WelcomeBackEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Welcomeback",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_welcomeback",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "WelcomeBackMainEventTrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "texture2d_t_mission_category_event_jokersruse",
        Title: {
          localizations: {
            loc_The_Joker_s_Ruse: "The Joker's Ruse",
          },
        },
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_welcome_back",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca59",
  },
  miscon_event_summer_2024: {
    slug: "miscon_event_summer_2024",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "summer_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_summer_2024",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_summer_204_main_event_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/summerevent/T_SummerEvent_eventhub.T_SummerEvent_eventhub",
        Title: {
          localizations: {
            loc_Summer_Bash: "Summer Bash",
          },
        },
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Summer2024",
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_summer_2024",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca5b",
  },
  miscon_event_shark_week: {
    slug: "miscon_event_shark_week",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "shark_week",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_shark_week",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "shark_week_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/sharkweek/sharkweek/sharkweek_final/t_sharkweek_missioncategory.t_sharkweek_missioncategory",
        Title: {
          localizations: {
            loc_Attack_of_the_giant_Megalodog_: "Attack of the giant Megalodog!",
          },
        },
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:SharkWeek",
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_shark_week",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca5c",
  },
  miscon_event_matrix: {
    slug: "miscon_event_matrix",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "agent_smith_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_matrix",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "agent_smith_event_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/agentsmithevent/t_Agent_Smith_Event_eventhub.t_Agent_Smith_Event_eventhub",
        Title: {
          localizations: {
            loc_The_Age_of_Smith: "The Age of Smith",
          },
        },
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Matrix",
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_matrix",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca5d",
  },
  miscon_event_graphic_t: {
    slug: "miscon_event_graphic_t",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "batman_vs_joker_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_graphic_t",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "batman_vs_joker_event_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/batmanvsjoker/t_batmanvsjoker_eventhub.t_batmanvsjoker_eventhub",
        Title: {
          localizations: {
            loc_Convention_Rumble: "Team  Batman V. Team The Joker",
          },
        },
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Graphic",
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_graphic_t",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca5e",
  },
  miscon_event_friday_13th: {
    slug: "miscon_event_friday_13th",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "jason_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_friday_13th",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "jason_event_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/jasonevent/t_jason_eventhub.t_jason_eventhub",
        Title: {
          localizations: {
            loc_The_Rise_of_Jason: "The Rise of Jason",
          },
        },
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Friday13th",
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_friday_13th",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca5f",
  },
  miscon_qa_eventtest_a: {
    slug: "miscon_qa_eventtest_a",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_qa_test_a",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_welcomeback",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "event_qa_test_a_progress_component_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "texture2d_t_mission_category_event_jokersruse",
        Title: {
          localizations: {
            loc_QA_Test_A: "QA Test A",
          },
        },
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:QAEventTestA",
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_qa_eventtest_a",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca60",
  },
  miscon_ftue: {
    slug: "miscon_ftue",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_It_s_time_to_earn_a_banana: "It's time to earn a banana",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_ftue",
          "misctl_ftue_daily_logins",
          "misctl_ftue_timed",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [],
        SortOrder: 10000000,
        Texture:
          "/Game/Panda_Main/UI/Assets/Icons/Profile_Icons/20240110_CN_AT_BananaGuard_ProfileIcon_BuffNanner.20240110_CN_AT_BananaGuard_ProfileIcon_BuffNanner",
        Title: {
          localizations: {
            loc_Training: "Training",
          },
        },
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:FTUE",
        Type: "Ftue",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_ftue",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "663c0f944b55072b1d7eca61",
  },
  miscon_event_wrapups1: {
    slug: "miscon_event_wrapups1",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "wrap_up_season_1_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_wrapups1",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "wrap_up_s1_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/seasonend/t_seasonend_carousel_eventhub.t_seasonend_carousel_eventhub",
        Title: {
          localizations: {
            loc_Season_1_Finale_Blowout: "Season 1 Finale Blowout!",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:WrapUpS1",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_wrapups1",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1719936429,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "668425ada81dece5374b85d9",
  },
  miscon_event_circuit: {
    slug: "miscon_event_circuit",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "circuit_crew_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Circuit",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_circuit",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "circuit_crew_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/circuitcrew/T_EVENTS_CircuitMural_eventhub.T_EVENTS_CircuitMural_eventhub",
        Title: {
          localizations: {
            loc_circuit_drone: "Circuit Drone",
          },
        },
        Type: "DailyEvent",
        bForceShowEventEndTime: true,
      },
      Slug: "miscon_event_circuit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "669fd3e07d13e0649bcb9378",
  },
  miscon_event_warmup: {
    slug: "miscon_event_warmup",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "sports_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Warmup",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_warmup",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "sports_event_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/sportsevent/T_EVENTS_SportsMural_eventhub.T_EVENTS_SportsMural_eventhub",
        Title: {
          localizations: {
            loc_warmup: "Warmup",
          },
        },
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_warmup",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1734456694,
    },
    id: "669fd3e07d13e0649bcb9379",
  },
  miscon_event_cyberskins: {
    slug: "miscon_event_cyberskins",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "cyber_skins_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Cyber",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_cyberskins",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "cyber_skins_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
          {
            ContainerOverrideValue: 1,
            RewardTrack: "cyber_skins_daily_login_track",
            ScoreGrantBehavior: "Incremental",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/cyberskins/T_CYBER-EVENTHUB.T_CYBER-EVENTHUB",
        Title: {
          localizations: {
            loc_cyber: "Cyber",
          },
        },
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_cyberskins",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "669fd3e07d13e0649bcb937a",
  },
  miscon_event_ranked: {
    slug: "miscon_event_ranked",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_rankedseason2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Ranked",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_ranked",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/ranked/t_rankedevent_eventhub.t_rankedevent_eventhub",
        Title: {
          localizations: {
            loc_ranked: "Ranked Missions",
          },
        },
        Type: "DailyEvent",
        bForceShowEventEndTime: false,
      },
      Slug: "miscon_event_ranked",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "669fd3e07d13e0649bcb937b",
  },
  miscon_event_samjack: {
    slug: "miscon_event_samjack",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "path_of_the_samurai_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Samjack",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_samjack",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/samjack_battlepass/T_SAMJACKBATTLEPASS_EVENT_eventhub.T_SAMJACKBATTLEPASS_EVENT_eventhub",
        Title: {
          localizations: {
            loc_Samurai_Trials: "Samurai Trials",
          },
        },
        Type: "None",
      },
      Slug: "miscon_event_samjack",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169755,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "66c4be1b45eaf195cd9953a5",
  },
  miscon_event_afterlife: {
    slug: "miscon_event_afterlife",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "afterlife_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Afterlife",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_afterlife",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "afterlife_event_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Events/afterlifeevent/T_EVENTS_afterlifeMural_eventhub.T_EVENTS_afterlifeMural_eventhub",
        Title: {
          localizations: {
            loc_Welcome_to_the_Afterlife_: "Welcome to the Afterlife!",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_afterlife",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169755,
    },
    updated_at: {
      _hydra_unix_date: 1734456694,
    },
    id: "66c4be1b45eaf195cd9953a6",
  },
  miscon_event_prestige: {
    slug: "miscon_event_prestige",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season3_charactermastery1",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:prestige",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_prestige",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [],
        SortOrder: 20,
        Texture: "texture2d_t_ui_icon_prestige",
        Title: {
          localizations: {
            loc_Prestige_: "Prestige!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_prestige",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "66e9a9297af4cd81ec26869a",
  },
  miscon_event_ppg: {
    slug: "miscon_event_ppg",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season3_rift1",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:PPG",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_ppg",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [],
        SortOrder: 20,
        Texture: "/MvsSeason03/panda_main/ui/events/ppg_rift_event/t_ppg_rift_eventhub.t_ppg_rift_eventhub",
        Title: {
          localizations: {
            loc_Naptime_is_Over_: "Naptime is Over!",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_ppg",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "66e9a9297af4cd81ec26869b",
  },
  miscon_event_galaxy: {
    slug: "miscon_event_galaxy",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season3_missions1",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Galaxy",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_galaxy",
          "misctl_event_galaxyeventpremium",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "event_season3_missions1_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason03/panda_main/ui/events/galaxy/t_event_galaxyskins_eventhub.t_event_galaxyskins_eventhub",
        Title: {
          localizations: {
            loc_Rise_of_the_Galaxy_Brains: "Rise of the Galaxy Brains",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_galaxy",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "66e9a9297af4cd81ec26869c",
  },
  miscon_event_dotd: {
    slug: "miscon_event_dotd",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season3_missions2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:DOTD",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_dotd",
          "misctl_event_dotdeventpremium",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "event_season3_missions2_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason03/panda_main/ui/events/diosdelmuerto/T_Event_DiaDeLosMuertos_Eventhub.T_Event_DiaDeLosMuertos_Eventhub",
        Title: {
          localizations: {
            loc_D_a_de_Muertos_Verse: "Día de Muertos-Verse",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_dotd",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "66e9a9297af4cd81ec26869d",
  },
  miscon_event_batman85th: {
    slug: "miscon_event_batman85th",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "batman_85th_anniversary_event",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Batman85th",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_batman85th",
          "misctl_event_batman85thpremium",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "batman_85th_anniversary_milestone_reward_track",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture:
          "/Game/Panda_Main/UI/Events/batman_birthday/t_event_batmansbirthday_carousel_eventhub.t_event_batmansbirthday_carousel_eventhub",
        Title: {
          localizations: {
            loc_Happy_85th_Anniversary_Batman_: "Happy 85th Anniversary Batman!",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_batman85th",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "66e9a9297af4cd81ec26869e",
  },
  miscon_battlepassweekly_new: {
    slug: "miscon_battlepassweekly_new",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_three",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Weekly",
        Description: {
          localizations: {
            loc_New_Missions_Every_Week: "New Missions Every Week",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_battlepass_weekly_new",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_three",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 50,
        Texture: "/MvsSeason03/Character/C030/UI/t_fighterthumbnail_powerpuffgirls.t_fighterthumbnail_powerpuffgirls",
        Title: {
          localizations: {
            loc_Weekly_Missions: "Weekly Missions",
          },
        },
        Type: "BattlePassWeekly",
        UiLayout: "Missions:UILayouts:Weekly",
      },
      Slug: "miscon_battlepassweekly_new",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "66e9a9297af4cd81ec2686a0",
  },
  miscon_event_crossover: {
    slug: "miscon_event_crossover",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season3_missions3",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Crossover",
        Description: {
          localizations: {
            loc_Missions_will_refresh_weekly: "Missions will refresh weekly",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_crossover",
          "misctl_event_crossover_premium",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "event_season3_missions3_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason03/panda_main/ui/events/crossover/t_event_crossover_eventhub.t_event_crossover_eventhub",
        Title: {
          localizations: {
            loc_Halloween_Crossover_Costume_Bash: "Halloween Crossover Costume Bash",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_crossover",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1729008147,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "670e92130e3027823c1d356c",
  },
  miscon_event_nubia: {
    slug: "miscon_event_nubia",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "/MvsSeason03/Missions/MissionControllers/MISCTL_Nubia.MISCTL_Nubia",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_nubia.t_fightermission_categoryicon_nubia",
        Title: {
          localizations: {
            loc_Nubia_Missions: "Nubia Missions",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_nubia",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "67338bba180fa11bf187c655",
  },
  miscon_unlockable_c027: {
    slug: "miscon_unlockable_c027",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c027",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 20,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_nubia.t_fightermission_categoryicon_nubia",
        Title: {
          localizations: {
            loc_Nubia_Missions: "Nubia Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C027",
      },
      Slug: "miscon_unlockable_c027",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "67338bba180fa11bf187c656",
  },
  miscon_event_arena: {
    slug: "miscon_event_arena",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season4_arena1",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arena",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season4_arena1_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arena",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "67338bba180fa11bf187c657",
  },
  miscon_event_winter: {
    slug: "miscon_event_winter",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season4_iceshader",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Winter",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_winter",
          "misctl_event_winterp",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season4_iceshader_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/winter/t_event_winterevent_eventhub.t_event_winterevent_eventhub",
        Title: {
          localizations: {
            loc_The_Frosty_Fray: "The Frosty Fray",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_winter",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "67338bba180fa11bf187c658",
  },
  miscon_event_trigon: {
    slug: "miscon_event_trigon",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season4_trigon",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Trigon",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_trigon",
          "misctl_event_trigonp",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season4_trigon_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/trigon/t_event_trigonmrt_eventhub.t_event_trigonmrt_eventhub",
        Title: {
          localizations: {
            loc_Azarath_Metrion_Zinthos_: "Azarath Metrion Zinthos!",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_trigon",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "67338bba180fa11bf187c659",
  },
  miscon_event_academia: {
    slug: "miscon_event_academia",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season4_academia",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Academia",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_academia",
          "misctl_event_academiap",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season4_academia_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/academia/t_event_academia_eventhub.t_event_academia_eventhub",
        Title: {
          localizations: {
            loc_Trouble_at_the_Academy: "Trouble at the Academy",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_academia",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "67338bba180fa11bf187c65a",
  },
  miscon_event_cozy: {
    slug: "miscon_event_cozy",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "event_season4_uglysweater",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Cozy",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_cozy",
          "misctl_event_cozyp",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season4_uglysweater_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture:
          "/MvsSeason04/panda_main/ui/events/season4/holidaygathering/t_event_holidaygathering_eventhub.t_event_holidaygathering_eventhub",
        Title: {
          localizations: {
            loc_A_Merry_MultiVerse: "A Merry MultiVerse",
          },
        },
        Type: "WeeklyEvent",
      },
      Slug: "miscon_event_cozy",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "67338bba180fa11bf187c65b",
  },
  miscon_battlepassweekly_s4: {
    slug: "miscon_battlepassweekly_s4",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_four",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Weekly",
        Description: {
          localizations: {
            loc_New_Missions_Every_Week: "New Missions Every Week",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_battlepass_weekly_new",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_four",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 50,
        Texture: "/Character_C025/Character/C025/Skins/S24/T_C025_S24_Portrait.T_C025_S24_Portrait",
        Title: {
          localizations: {
            loc_Weekly_Missions: "Weekly Missions",
          },
        },
        Type: "BattlePassWeekly",
        UiLayout: "Missions:UILayouts:Weekly",
      },
      Slug: "miscon_battlepassweekly_s4",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67338bba180fa11bf187c65c",
  },
  miscon_battlepassdailys4: {
    slug: "miscon_battlepassdailys4",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_four",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Daily",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "RandomByWeight",
        MissionControllers: [
          "misctl_battlepass_daily_premium_new",
          "misctl_battlepass_daily_base_new",
          "misctl_battlepass_daily_base_pve_new",
          "misctl_battlepass_daily_base_ffa_new",
          "misctl_battlepass_daily_new_1",
          "misctl_battlepass_daily_new_2",
          "misctl_battlepass_daily_hard_new",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_four",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 100,
        Texture: "/Game/Panda_Main/UI/Assets/UI_Textures/missiontextures/categoryicons/Daily_Planet.Daily_Planet",
        Title: {
          localizations: {
            loc_Daily_Missions: "Daily Missions",
          },
        },
        Type: "BattlePassDaily",
        UiLayout: "Missions:UILayouts:BonusMissions",
      },
      Slug: "miscon_battlepassdailys4",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67338bba180fa11bf187c65d",
  },
  miscon_unlockable_c025: {
    slug: "miscon_unlockable_c025",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c025",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/MvsSeason04/panda_main/ui/assets/missioncategories_fighters/t_fightermission_categoryicon_c028.t_fightermission_categoryicon_c028",
        Title: {
          localizations: {
            loc_Raven_Missions: "Raven Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C025",
      },
      Slug: "miscon_unlockable_c025",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "67338bba180fa11bf187c65e",
  },
  miscon_unlockable_c036: {
    slug: "miscon_unlockable_c036",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c036",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_agentsmith.t_fightermission_categoryicon_agentsmith",
        Title: {
          localizations: {
            loc_Agent_Smith_Missions: "Agent Smith Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C036",
      },
      Slug: "miscon_unlockable_c036",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950e1",
  },
  miscon_unlockable_c035: {
    slug: "miscon_unlockable_c035",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c035",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_jasonvoorhees.t_fightermission_categoryicon_jasonvoorhees",
        Title: {
          localizations: {
            loc_Jason_Voorhees_Missions: "Jason Voorhees Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C035",
      },
      Slug: "miscon_unlockable_c035",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950e2",
  },
  miscon_unlockable_c034: {
    slug: "miscon_unlockable_c034",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c034",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_bananaguard.t_fightermission_categoryicon_bananaguard",
        Title: {
          localizations: {
            loc_Banana_Guard_Missions: "Banana Guard Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C034",
      },
      Slug: "miscon_unlockable_c034",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950e3",
  },
  miscon_unlockable_c031: {
    slug: "miscon_unlockable_c031",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c031",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/MvsSeason04/panda_main/ui/assets/missioncategories_fighters/t_fightermission_categoryicon_marceline.t_fightermission_categoryicon_marceline",
        Title: {
          localizations: {
            loc_Marceline_the_Vampire_Queen_Missions: "Marceline the Vampire Queen Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C031",
      },
      Slug: "miscon_unlockable_c031",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950e4",
  },
  miscon_unlockable_c030: {
    slug: "miscon_unlockable_c030",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c030",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_powerpuffgirls.t_fightermission_categoryicon_powerpuffgirls",
        Title: {
          localizations: {
            loc_The_Powerpuff_Girls_Missions: "The Powerpuff Girls Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C030",
      },
      Slug: "miscon_unlockable_c030",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950e5",
  },
  miscon_unlockable_c028: {
    slug: "miscon_unlockable_c028",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c028",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_joker.t_fightermission_categoryicon_joker",
        Title: {
          localizations: {
            loc_The_Joker_Missions: "The Joker Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C028",
      },
      Slug: "miscon_unlockable_c028",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950e6",
  },
  miscon_unlockable_c026: {
    slug: "miscon_unlockable_c026",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c026",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_samjack.t_fightermission_categoryicon_samjack",
        Title: {
          localizations: {
            loc_Samurai_Jack_Missions: "Samurai Jack Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C026",
      },
      Slug: "miscon_unlockable_c026",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950e7",
  },
  miscon_unlockable_c024: {
    slug: "miscon_unlockable_c024",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c024",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_beetlejuice.t_fightermission_categoryicon_beetlejuice",
        Title: {
          localizations: {
            loc_Betelgeuse_Missions: "Betelgeuse Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C024",
      },
      Slug: "miscon_unlockable_c024",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950e8",
  },
  miscon_unlockable_c021: {
    slug: "miscon_unlockable_c021",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c021",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_blackadam.t_fightermission_categoryicon_blackadam",
        Title: {
          localizations: {
            loc_Black_Adam_Missions: "Black Adam Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C021",
      },
      Slug: "miscon_unlockable_c021",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "675874d55ca68abece2950e9",
  },
  miscon_unlockable_c020: {
    slug: "miscon_unlockable_c020",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c020",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_rick.t_fightermission_categoryicon_rick",
        Title: {
          localizations: {
            loc_Rick_Missions: "Rick Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C020",
      },
      Slug: "miscon_unlockable_c020",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950ea",
  },
  miscon_unlockable_c019: {
    slug: "miscon_unlockable_c019",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c019",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_morty.t_fightermission_categoryicon_morty",
        Title: {
          localizations: {
            loc_Morty_Missions: "Morty Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C019",
      },
      Slug: "miscon_unlockable_c019",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950eb",
  },
  miscon_unlockable_c018: {
    slug: "miscon_unlockable_c018",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c018",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_marvinthemartian.t_fightermission_categoryicon_marvinthemartian",
        Title: {
          localizations: {
            loc_Marvin_The_Martian_Missions: "Marvin The Martian Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C018",
      },
      Slug: "miscon_unlockable_c018",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950ec",
  },
  miscon_unlockable_c017: {
    slug: "miscon_unlockable_c017",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c017",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_irongiant.t_fightermission_categoryicon_irongiant",
        Title: {
          localizations: {
            loc_Iron_Giant_Missions: "Iron Giant Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C017",
      },
      Slug: "miscon_unlockable_c017",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950ed",
  },
  miscon_unlockable_c016: {
    slug: "miscon_unlockable_c016",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c016",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_lebron.t_fightermission_categoryicon_lebron",
        Title: {
          localizations: {
            loc_LeBron_James_Missions: "LeBron James Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C016",
      },
      Slug: "miscon_unlockable_c016",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950ee",
  },
  miscon_unlockable_c015: {
    slug: "miscon_unlockable_c015",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c015",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_taz.t_fightermission_categoryicon_taz",
        Title: {
          localizations: {
            loc_Taz_Missions: "Taz Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C015",
      },
      Slug: "miscon_unlockable_c015",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950ef",
  },
  miscon_unlockable_c014: {
    slug: "miscon_unlockable_c014",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c014",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_velma.t_fightermission_categoryicon_velma",
        Title: {
          localizations: {
            loc_Velma_Missions: "Velma Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C014",
      },
      Slug: "miscon_unlockable_c014",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456694,
    },
    id: "675874d55ca68abece2950f0",
  },
  miscon_unlockable_c013: {
    slug: "miscon_unlockable_c013",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c013",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_finnthehuman.t_fightermission_categoryicon_finnthehuman",
        Title: {
          localizations: {
            loc_Finn_Missions: "Finn Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C013",
      },
      Slug: "miscon_unlockable_c013",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950f1",
  },
  miscon_unlockable_c012: {
    slug: "miscon_unlockable_c012",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c012",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_garnet.t_fightermission_categoryicon_garnet",
        Title: {
          localizations: {
            loc_Garnet_Missions: "Garnet Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C012",
      },
      Slug: "miscon_unlockable_c012",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950f2",
  },
  miscon_unlockable_c011: {
    slug: "miscon_unlockable_c011",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c011",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_stevenuniverse.t_fightermission_categoryicon_stevenuniverse",
        Title: {
          localizations: {
            loc_Steven_Universe_Missions: "Steven Universe Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C011",
      },
      Slug: "miscon_unlockable_c011",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950f3",
  },
  miscon_unlockable_c010: {
    slug: "miscon_unlockable_c010",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c010",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_tomandjerry.t_fightermission_categoryicon_tomandjerry",
        Title: {
          localizations: {
            loc_Tom___Jerry_Missions: "Tom & Jerry Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C010",
      },
      Slug: "miscon_unlockable_c010",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950f4",
  },
  miscon_unlockable_c009: {
    slug: "miscon_unlockable_c009",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c009",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_reindog.t_fightermission_categoryicon_reindog",
        Title: {
          localizations: {
            loc_Reindog_Missions: "Reindog Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C009",
      },
      Slug: "miscon_unlockable_c009",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950f5",
  },
  miscon_unlockable_c008: {
    slug: "miscon_unlockable_c008",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c008",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_harleyquinn.t_fightermission_categoryicon_harleyquinn",
        Title: {
          localizations: {
            loc_Harley_Missions: "Harley Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C008",
      },
      Slug: "miscon_unlockable_c008",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950f6",
  },
  miscon_unlockable_c007: {
    slug: "miscon_unlockable_c007",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c007",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_bugsbunny.t_fightermission_categoryicon_bugsbunny",
        Title: {
          localizations: {
            loc_Bugs_Bunny_Missions: "Bugs Bunny Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C007",
      },
      Slug: "miscon_unlockable_c007",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950f7",
  },
  miscon_unlockable_c006: {
    slug: "miscon_unlockable_c006",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c006",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_arya.t_fightermission_categoryicon_arya",
        Title: {
          localizations: {
            loc_Arya_Missions: "Arya Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C006",
      },
      Slug: "miscon_unlockable_c006",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950f8",
  },
  miscon_unlockable_c005: {
    slug: "miscon_unlockable_c005",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c005",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_jakethedog.t_fightermission_categoryicon_jakethedog",
        Title: {
          localizations: {
            loc_Jake_Missions: "Jake Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C005",
      },
      Slug: "miscon_unlockable_c005",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950f9",
  },
  miscon_unlockable_c004: {
    slug: "miscon_unlockable_c004",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c004",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_batman.t_fightermission_categoryicon_batman",
        Title: {
          localizations: {
            loc_Batman_Missions: "Batman Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C004",
      },
      Slug: "miscon_unlockable_c004",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece2950fa",
  },
  miscon_unlockable_c003: {
    slug: "miscon_unlockable_c003",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c003",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_superman.t_fightermission_categoryicon_superman",
        Title: {
          localizations: {
            loc_Superman_Missions: "Superman Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C003",
      },
      Slug: "miscon_unlockable_c003",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950fb",
  },
  miscon_unlockable_c002: {
    slug: "miscon_unlockable_c002",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c002",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_shaggy.t_fightermission_categoryicon_shaggy",
        Title: {
          localizations: {
            loc_Shaggy_Missions: "Shaggy Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C002",
      },
      Slug: "miscon_unlockable_c002",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece2950fc",
  },
  miscon_unlockable_c001: {
    slug: "miscon_unlockable_c001",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c001",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_wonderwoman.t_fightermission_categoryicon_wonderwoman",
        Title: {
          localizations: {
            loc_Wonder_Woman_Missions: "Wonder Woman Missions",
          },
        },
        Type: "DailyEvent",
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C001",
      },
      Slug: "miscon_unlockable_c001",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456694,
    },
    id: "675874d55ca68abece2950fd",
  },
  miscon_battlepassweekly_s4_5: {
    slug: "miscon_battlepassweekly_s4_5",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_four_5",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Weekly",
        Description: {
          localizations: {
            loc_New_Missions_Every_Week: "New Missions Every Week",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_battlepass_weekly_new",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_four_5",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 50,
        Texture: "/Character_C031/C031/Skins/S01/T_C031_S01_Portrait.T_C031_S01_Portrait",
        Title: {
          localizations: {
            loc_Weekly_Missions: "Weekly Missions",
          },
        },
        Type: "BattlePassWeekly",
        UiLayout: "Missions:UILayouts:Weekly",
      },
      Slug: "miscon_battlepassweekly_s4_5",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "675874d55ca68abece2950fe",
  },
  miscon_battlepassdailys4_5: {
    slug: "miscon_battlepassdailys4_5",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_four_5",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Daily",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "RandomByWeight",
        MissionControllers: [
          "misctl_battlepass_daily_premium_new",
          "misctl_battlepass_daily_base_new",
          "misctl_battlepass_daily_base_pve_new",
          "misctl_battlepass_daily_base_ffa_new",
          "misctl_battlepass_daily_new_1",
          "misctl_battlepass_daily_new_2",
          "misctl_battlepass_daily_hard_new",
          "misctl_daily_3",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_four_5",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 100,
        Texture: "/Game/Panda_Main/UI/Assets/UI_Textures/missiontextures/categoryicons/Daily_Planet.Daily_Planet",
        Title: {
          localizations: {
            loc_Daily_Missions: "Daily Missions",
          },
        },
        Type: "BattlePassDaily",
        UiLayout: "Missions:UILayouts:BonusMissions",
      },
      Slug: "miscon_battlepassdailys4_5",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "675874d55ca68abece2950ff",
  },
  miscon_unlockable_c023b: {
    slug: "miscon_unlockable_c023b",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C023B",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c023b",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture:
          "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_stripe.t_fightermission_categoryicon_stripe",
        Title: {
          localizations: {
            loc_Stripe_Missions: "Stripe Missions",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_unlockable_c023b",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456693,
    },
    id: "675874d55ca68abece295100",
  },
  miscon_unlockable_c023A: {
    slug: "miscon_unlockable_c023A",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Unlockable:C023A",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "Unlockable",
        MissionControllers: [
          "misctl_unlockable_c023a",
        ],
        RefreshRate: "None",
        RewardTracksToAdvance: [],
        SortOrder: 19,
        Texture: "/Game/Panda_Main/UI/Assets/missioncategories_fighters/t_fightermission_categoryicon_gizmo.t_fightermission_categoryicon_gizmo",
        Title: {
          localizations: {
            loc_Gizmo_Missions: "Gizmo Missions",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_unlockable_c023A",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1734456692,
    },
    id: "675874d55ca68abece295101",
  },
  miscon_event_arena2: {
    slug: "miscon_event_arena2",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season4_arenaevent2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arena2",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season4_arena2_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arena2",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850325,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "675874d55ca68abece295102",
  },
  miscon_event_arena3: {
    slug: "miscon_event_arena3",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season4_arenaevent3",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arena3",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season4_arena3_milestonerewardtrack",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arena3",
    },
    private_data: {},
    created_at: {
      _hydra_unix_date: 1737500477,
    },
    updated_at: {
      _hydra_unix_date: 1742919755,
    },
    id: "6790273d7d9ed4c012b6b078",
  },
  miscon_battlepassweekly_s5: {
    slug: "miscon_battlepassweekly_s5",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_five",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Weekly",
        Description: {
          localizations: {
            loc_New_Missions_Every_Week: "New Missions Every Week",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_battlepass_weekly_new",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_five",
            ScoreGrantBehavior: "MissionScore",
          },
          {
            ContainerOverrideValue: 1,
            RewardTrack: "MRT_Bonus_Weekly_Mission",
            ScoreGrantBehavior: "Incremental",
          },
        ],
        SortOrder: 50,
        Texture: "/CharacterC029/C029/Skin/s03/T_C029_S03.T_C029_S03",
        Title: {
          localizations: {
            loc_Weekly_Missions: "Weekly Missions",
          },
        },
        Type: "BattlePassWeekly",
        UiLayout: "Missions:UILayouts:Weekly",
      },
      Slug: "miscon_battlepassweekly_s5",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f18d",
  },
  miscon_battlepassdaily_s5: {
    slug: "miscon_battlepassdaily_s5",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_battlepass_season_five",
        bCleanRefresh: false,
        bEventRefreshCatchup: false,
        bForceShowEventEndTime: false,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Battlepass:Daily",
        Description: {
          localizations: {
            loc_Missions_will_refresh_daily: "Missions will refresh daily",
          },
        },
        GrantBehavior: "RandomByWeight",
        MissionControllers: [
          "misctl_battlepass_daily_base_new",
          "misctl_battlepass_daily_base_pve_new",
          "misctl_battlepass_daily_base_ffa_new",
          "misctl_battlepass_daily_new_1",
          "misctl_battlepass_daily_new_2",
          "misctl_battlepass_daily_hard_new",
        ],
        RefreshRate: "Daily",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_battlepass_season_five",
            ScoreGrantBehavior: "MissionScore",
          },
          {
            ContainerOverrideValue: 1,
            RewardTrack: "mrt_bonus_mission_new",
            ScoreGrantBehavior: "Incremental",
          },
        ],
        SortOrder: 100,
        Texture: "/Game/Panda_Main/UI/Assets/UI_Textures/missiontextures/categoryicons/Daily_Planet.Daily_Planet",
        Title: {
          localizations: {
            loc_Daily_Missions: "Daily Missions",
          },
        },
        Type: "BattlePassDaily",
        UiLayout: "Missions:UILayouts:BonusMissions",
      },
      Slug: "miscon_battlepassdaily_s5",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f18e",
  },
  miscon_event_arenas5: {
    slug: "miscon_event_arenas5",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent1",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arena",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack_1",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f18f",
  },
  "miscon_event_arenas5-9": {
    slug: "miscon_event_arenas5-9",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent3_2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-9",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack3_2",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-9",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f190",
  },
  "miscon_event_arenas5-8": {
    slug: "miscon_event_arenas5-8",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent2_3",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-8",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack2_3",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-8",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f191",
  },
  "miscon_event_arenas5-7": {
    slug: "miscon_event_arenas5-7",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent2_2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-7",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack2_2",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-7",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f192",
  },
  "miscon_event_arenas5-6": {
    slug: "miscon_event_arenas5-6",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent1_3",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-6",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack1_3",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-6",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f193",
  },
  "miscon_event_arenas5-5": {
    slug: "miscon_event_arenas5-5",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent1_2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-5",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack1_2",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-5",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f194",
  },
  "miscon_event_arenas5-4": {
    slug: "miscon_event_arenas5-4",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent4",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-4",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack4",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-4",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f195",
  },
  "miscon_event_arenas5-3": {
    slug: "miscon_event_arenas5-3",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent3",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-3",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack3",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-3",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f196",
  },
  "miscon_event_arenas5-2": {
    slug: "miscon_event_arenas5-2",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-2",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack2",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-2",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f197",
  },
  "miscon_event_arenas5-12": {
    slug: "miscon_event_arenas5-12",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent4_3",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-12",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack4_3",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-12",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f198",
  },
  "miscon_event_arenas5-11": {
    slug: "miscon_event_arenas5-11",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent4_2",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-11",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack4_2",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-11",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f199",
  },
  "miscon_event_arenas5-10": {
    slug: "miscon_event_arenas5-10",
    global_configuration_type_slug: "mission-controller-containers",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      MvsMissionControllerContainerData: {
        AssociatedEvent: "evt_season5_arenaevent3_3",
        bCleanRefresh: false,
        bEventRefreshCatchup: true,
        bForceShowEventEndTime: true,
        ClaimableRewardBadgeGroup: "BadgeNotifications:Missions:ClaimableRewards:Events:Arena",
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        GrantBehavior: "DescendingOrderByWeight",
        MissionControllers: [
          "misctl_event_arenas5-10",
        ],
        RefreshRate: "Weekly",
        RewardTracksToAdvance: [
          {
            ContainerOverrideValue: 1,
            RewardTrack: "bp_season5_arena1_milestonerewardtrack3_3",
            ScoreGrantBehavior: "MissionScore",
          },
        ],
        SortOrder: 20,
        Texture: "/MvsSeason04/panda_main/ui/events/season4/arena/t_arenamode_eventhub.t_arenamode_eventhub",
        Title: {
          localizations: {
            loc_Enter_the_Arena_: "Enter the Arena!",
          },
        },
        Type: "DailyEvent",
      },
      Slug: "miscon_event_arenas5-10",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688925,
    },
    updated_at: {
      _hydra_unix_date: 1738688925,
    },
    id: "67a2499d0eb24e880662f19a",
  },
};
