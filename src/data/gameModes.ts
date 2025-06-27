export const GAME_MODES_CONFIG = {
  gm_infinitejumps: {
    slug: "gm_infinitejumps",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_infinite_jumps",
              "buff_low_gravity",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_infinite_jumps",
              "buff_low_gravity",
            ],
          },
        ],
        MapRotation: "maprotation_infinitejumps",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_infinitejumps",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Infinite_Jumps: "Infinite Jumps",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_frostgauntlets: {
    slug: "gm_frostgauntlets",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_perma_ice_gauntlets",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_perma_ice_gauntlets",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_frostgauntlets",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Frost_Gauntlets: "Frost Gauntlets",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_tiny: {
    slug: "gm_tiny",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_tiny",
              "buff_attack_power_up",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_tiny",
              "buff_attack_power_up",
            ],
          },
        ],
        MapRotation: "maprotation_tiny",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_tiny",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Tiny: "Tiny",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_spotlight: {
    slug: "gm_spotlight",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_rocketfistrain",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "world_buff_spotlight",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_spotlight",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Spotlight: "Spotlight",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_lazaruspit: {
    slug: "gm_lazaruspit",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_lazaruspit",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "world_buff_lazarus_pit",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_lazaruspit",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Lazarus_Pit: "Lazarus Pit",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_volleyball: {
    slug: "gm_volleyball",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 5,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 5,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_volleyball",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_volleyballpvp",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_volleyball",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Volleyball: "Volleyball",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_turbo: {
    slug: "gm_turbo",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_turbo",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_turbo",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_turbo",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Turbo: "Turbo",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_armature: {
    slug: "gm_armature",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_armature",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_armature",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_armature",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Armature: "Armature",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_kartrace: {
    slug: "gm_kartrace",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: -1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: -1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: -1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: -1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_racecar",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_racecarpvp",
        ],
        TeamStyle: "FFA",
      },
      Slug: "gm_kartrace",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Race_: "Race!",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_chickensvsicecubes: {
    slug: "gm_chickensvsicecubes",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_perma_chicken_gauntlets",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_perma_ice_gauntlets",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_chickensvsicecubes",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Chickens_vs_Ice_Cubes: "Chickens vs Ice Cubes",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_cancelsystem: {
    slug: "gm_cancelsystem",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_cancelsystem",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_cancelsystem",
            ],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_cancelsystem",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Cancel_System: "Cancel System",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_selectpowerup: {
    slug: "gm_selectpowerup",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_powerselect_pvp",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_selectpowerup",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Select_a_Powerup: "Select a Powerup",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_rocketfistrain: {
    slug: "gm_rocketfistrain",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_rocketfistrain",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "rocket_rain",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_rocketfistrain",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Rocket_Fist_Rain: "Rocket Fist Rain",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_retrohorror: {
    slug: "gm_retrohorror",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_retrohorror",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvbuff_vhshorror",
          "world_buff_ghosts",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_retrohorror",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Retro_Horror: "Retro Horror",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_hotpotato: {
    slug: "gm_hotpotato",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_hotpotato",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_hotpotato",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_hotpotato",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Hot_Potato: "Hot Potato",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  boss_fight_game_mode_1: {
    slug: "boss_fight_game_mode_1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [],
        MapRotation: "",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "boss_fight_game_mode_1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_a_boss_fight_1_game_mode: "This is a boss fight 1 game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Boss_Fight_1: "Boss Fight 1",
          },
        },
        PreviewTexture: "/Game/Panda_Main/UI/Events/summerevent/T_SummerEvent_Background.T_SummerEvent_Background",
      },
    },
  },
  mini_game_mode_2: {
    slug: "mini_game_mode_2",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [],
        MapRotation: "",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "mini_game_mode_2",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_the_second_mini_game_game_mode: "This is the second mini game game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Mini_Game_2: "Mini Game 2",
          },
        },
        PreviewTexture: "/Game/Panda_Main/UI/Events/welcomeback/t_welcomeback_eventhub.t_welcomeback_eventhub",
      },
    },
  },
  mini_game_mode_1: {
    slug: "mini_game_mode_1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [],
        MapRotation: "",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "mini_game_mode_1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_the_first_mini_game_game_mode: "This is the first mini game game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Mini_Game_1_name: "Mini Game 1",
          },
        },
        PreviewTexture: "/Game/Panda_Main/UI/Events/circuitcrew/T_EVENTS_CircuitMural_eventhub.T_EVENTS_CircuitMural_eventhub",
      },
    },
  },
  classic_game_mode: {
    slug: "classic_game_mode",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [],
        MapRotation: "",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "classic_game_mode",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_classic_game_mode: "This is classic game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Classic: "Classic",
          },
        },
        PreviewTexture:
          "/Game/Panda_Main/UI/Events/sharkweek/sharkweek/sharkweek_final/007_-_Event_Art_-_Shark_Week_Final_v2__1_.007_-_Event_Art_-_Shark_Week_Final_v2__1_",
      },
    },
  },
  boss_fight_game_mode_2: {
    slug: "boss_fight_game_mode_2",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [],
        MapRotation: "",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "boss_fight_game_mode_2",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_the_second_boss_fight_game_mode: "This is the second boss fight game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Boss_Fight_2: "Boss Fight 2",
          },
        },
        PreviewTexture: "texture2d_t_events_samjackevent_keyart",
      },
    },
  },
  ffa: {
    slug: "ffa",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedFFA",
        MatchDuration: 420,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "FFA",
      },
      Slug: "ffa",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_toasty: {
    slug: "gm_toasty",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "companion_buff",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "companion_buff",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_toasty",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Toasty: "Toasty",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_tinyvsgiant: {
    slug: "gm_tinyvsgiant",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "buff_tiny",
                ],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [
                  "buff_giant",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "buff_tiny",
                ],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [
                  "buff_giant",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_tinyvsgiant",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Tiny_vs_Giant: "Tiny vs Giant",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_splat: {
    slug: "gm_splat",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_splat",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_splat",
            ],
          },
        ],
        MapRotation: "maprotation_splat",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_splat",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Splat: "Splat",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_slaythegiant: {
    slug: "gm_slaythegiant",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 3,
            MinPlayerPerTeam: 3,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_tiny",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_giant",
              "mvsbuff_recievereducedhitstun",
              "buff_defence_power_up",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "FFA",
      },
      Slug: "gm_slaythegiant",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Slay_the_Giant: "Slay the Giant",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_shockfloor: {
    slug: "gm_shockfloor",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_shockfloor",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "world_buff_electric_floor",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_shockfloor",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Shock_Floor: "Shock Floor",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_itemparty: {
    slug: "gm_itemparty",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_itemparty_dice",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_itemparty",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Item_Party: "Item Party",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_icepit: {
    slug: "gm_icepit",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_icepit",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_MJDD",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_icepit",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Ice_Pit: "Ice Pit",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_hammertime: {
    slug: "gm_hammertime",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 6,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 6,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_hammertime",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_hammertime",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_hammertime",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Hammer_Time: "Hammer Time",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_counter: {
    slug: "gm_counter",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 6,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_counterhit",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 6,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_counterhit",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_counter",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_COUNTER: "COUNTER",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_cunning: {
    slug: "gm_cunning",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_instant_cooldowns",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_instant_cooldowns",
            ],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_cunning",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Big_Brain: "Big Brain",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_bambooboogie: {
    slug: "gm_bambooboogie",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_bambooboogie",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_bambooboogie",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_bambooboogie",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Bamboo_Boogie: "Bamboo Boogie",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_1v1shields: {
    slug: "gm_1v1shields",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: false,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "RankedSolos",
        MatchDuration: 420,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_shields",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_1v1shields",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Shields: "Shields",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_2v2shields: {
    slug: "gm_2v2shields",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: false,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "RankedDuos",
        MatchDuration: 420,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_shields",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_2v2shields",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Shields: "Shields",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_targetrush: {
    slug: "gm_targetrush",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_targetrush",
        MatchDuration: 120,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_targetrush",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_targetrush",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Target_Rush: "Target Rush",
          },
        },
        PreviewTexture: "texture2d_buff_targetbreak",
      },
    },
  },
  gm_conteder: {
    slug: "gm_conteder",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_contender",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_contender",
            ],
          },
        ],
        MapRotation: "maprotation_contender",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_conteder",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Star_Contenders: "Star Contenders",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_volleyball_1v1: {
    slug: "gm_volleyball_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 5,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 5,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_volleyball",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_volleyballpvp",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_volleyball_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Volleyball: "Volleyball",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_turbo_1v1: {
    slug: "gm_turbo_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_turbo",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_turbo",
            ],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_turbo_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Turbo: "Turbo",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_toasty_1v1: {
    slug: "gm_toasty_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "companion_buff",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "companion_buff",
            ],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_toasty_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Toasty: "Toasty",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_tiny_1v1: {
    slug: "gm_tiny_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_tiny",
              "buff_attack_power_up",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_tiny",
              "buff_attack_power_up",
            ],
          },
        ],
        MapRotation: "maprotation_tiny",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_tiny_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Tiny: "Tiny",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_tinyvsgiant_1v1: {
    slug: "gm_tinyvsgiant_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "buff_tiny",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "buff_giant",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_tinyvsgiant_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Tiny_vs_Giant: "Tiny vs Giant",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_targetrush_1v1: {
    slug: "gm_targetrush_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_targetrush",
        MatchDuration: 120,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_targetrush",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_targetrush_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Target_Rush: "Target Rush",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_spotlight_1v1: {
    slug: "gm_spotlight_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_rocketfistrain_1v1",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "world_buff_spotlight",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_spotlight_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Spotlight: "Spotlight",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_spotlightpilot_1v1: {
    slug: "gm_spotlightpilot_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "mvsbuff_pilot",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "mvsbuff_pilot",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_spotlightpilot",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_spotlightpilot",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_spotlightpilot_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Space_Sumo: "Space Sumo",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_splat_1v1: {
    slug: "gm_splat_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_splat",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_splat",
            ],
          },
        ],
        MapRotation: "maprotation_splat",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_splat_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Splat: "Splat",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_selectpowerup_1v1: {
    slug: "gm_selectpowerup_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_powerselect_pvp",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_selectpowerup_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Select_a_Powerup: "Select a Powerup",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_rocketfistrain_1v1: {
    slug: "gm_rocketfistrain_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_rocketfistrain_1v1",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "rocket_rain",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_rocketfistrain_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Rocket_Fist_Rain: "Rocket Fist Rain",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_retrohorror_1v1: {
    slug: "gm_retrohorror_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_retrohorror",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvbuff_vhshorror",
          "world_buff_ghosts",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_retrohorror_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Retro_Horror: "Retro Horror",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_onehitwonder_1v1: {
    slug: "gm_onehitwonder_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_onehitwonder",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_onehitwonder_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_One_Hit_Wonder: "One Hit Wonder",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_lazaruspit1_1v1: {
    slug: "gm_lazaruspit1_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 2,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_lazaruspit",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "world_buff_lazarus_pit",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_lazaruspit1_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Lazarus_Pit: "Lazarus Pit",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_kartrace_1v1: {
    slug: "gm_kartrace_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_racecar",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_racecarpvp",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_kartrace_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Race_: "Race!",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_icepit_1v1: {
    slug: "gm_icepit_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_icepit",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_MJDD",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_icepit_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Ice_Pit: "Ice Pit",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_hammertime_1v1: {
    slug: "gm_hammertime_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_hammertime",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_hammertime",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_hammertime_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Hammer_Time: "Hammer Time",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_gumballshower_1v1: {
    slug: "gm_gumballshower_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_gumballshower",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_gumballshowerpvp",
        ],
        TeamStyle: "Solos",
      },
      Slug: "gm_gumballshower_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Gumball_Shower: "Gumball Shower",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_divekick_1v1: {
    slug: "gm_divekick_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_divekick",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_divekick",
            ],
          },
        ],
        MapRotation: "maprotation_divekick",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_divekick_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Stomp: "Stomp",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_counter_1v1: {
    slug: "gm_counter_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_counterhit",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_counterhit",
            ],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_counter_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_COUNTER: "COUNTER",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_conteder_1v1: {
    slug: "gm_conteder_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_contender",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_contender",
            ],
          },
        ],
        MapRotation: "maprotation_contender",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_conteder_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Star_Contenders: "Star Contenders",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_chickensvsicecubes_1v1: {
    slug: "gm_chickensvsicecubes_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_perma_chicken_gauntlets",
            ],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "buff_perma_ice_gauntlets",
            ],
          },
        ],
        MapRotation: "UnrankedSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_chickensvsicecubes_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Chickens_vs_Ice_Cubes: "Chickens vs Ice Cubes",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_spotlightpilot: {
    slug: "gm_spotlightpilot",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "mvsbuff_pilot",
                ],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [
                  "mvsbuff_pilot",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [
                  "mvsbuff_pilot",
                ],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [
                  "mvsbuff_pilot",
                ],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_spotlightpilot",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_spotlightpilot",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_spotlightpilot",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Space_Sumo: "Space Sumo",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_onehitwonder: {
    slug: "gm_onehitwonder",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "UnrankedDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_onehitwonder",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_onehitwonder",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_One_Hit_Wonder: "One Hit Wonder",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_gumballshower: {
    slug: "gm_gumballshower",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 4,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_gumballshower",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_gumballshowerpvp",
        ],
        TeamStyle: "Duos",
      },
      Slug: "gm_gumballshower",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Gumball_Shower: "Gumball Shower",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_divekick: {
    slug: "gm_divekick",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_divekick",
            ],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 2,
            NumRingouts: 7,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [
              "mvsbuff_divekick",
            ],
          },
        ],
        MapRotation: "maprotation_divekick",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_divekick",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Stomp: "Stomp",
          },
        },
        PreviewTexture: "",
      },
    },
  },
  gm_classic_ffa: {
    slug: "gm_classic_ffa",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: false,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: false,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "PlaytestCustomFFA",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "FFA",
      },
      Slug: "gm_classic_ffa",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_classic_game_mode: "This is classic game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Classic: "Classic",
          },
        },
        PreviewTexture:
          "/Game/Panda_Main/UI/Events/sharkweek/sharkweek/sharkweek_final/007_-_Event_Art_-_Shark_Week_Final_v2__1_.007_-_Event_Art_-_Shark_Week_Final_v2__1_",
      },
    },
  },
  gm_classic_2v2: {
    slug: "gm_classic_2v2",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 2,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "CustomDuos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Duos",
      },
      Slug: "gm_classic_2v2",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_classic_game_mode: "This is classic game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Classic: "Classic",
          },
        },
        PreviewTexture:
          "/Game/Panda_Main/UI/Events/sharkweek/sharkweek/sharkweek_final/007_-_Event_Art_-_Shark_Week_Final_v2__1_.007_-_Event_Art_-_Shark_Week_Final_v2__1_",
      },
    },
  },
  gm_classic_1v1: {
    slug: "gm_classic_1v1",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: 3,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "CustomSolos",
        MatchDuration: 240,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "Solos",
      },
      Slug: "gm_classic_1v1",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: true,
        bAllowLocalPlay: false,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_classic_game_mode: "This is classic game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Classic: "Classic",
          },
        },
        PreviewTexture:
          "/Game/Panda_Main/UI/Events/sharkweek/sharkweek/sharkweek_final/007_-_Event_Art_-_Shark_Week_Final_v2__1_.007_-_Event_Art_-_Shark_Week_Final_v2__1_",
      },
    },
  },
  gm_targetrun_local: {
    slug: "gm_targetrun_local",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: true,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 4,
            MinPlayerPerTeam: 1,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_targetrun",
        MatchDuration: 70,
        MaximumLocalPlayPlayers: 2,
        RequiredWorldBuffs: [
          "mvsworldbuff_targetrun_local",
        ],
        TeamStyle: "Other",
      },
      Slug: "gm_targetrun_local",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Target_Run: "Target Run",
          },
        },
        PreviewTexture: "texture2d_buff_targetbreak",
      },
    },
  },
  gm_targetclimb_local: {
    slug: "gm_targetclimb_local",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: true,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 4,
            MinPlayerPerTeam: 1,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_targetclimb",
        MatchDuration: 70,
        MaximumLocalPlayPlayers: 2,
        RequiredWorldBuffs: [
          "mvsworldbuff_targetclimb_local",
        ],
        TeamStyle: "Other",
      },
      Slug: "gm_targetclimb_local",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Target_Climb: "Target Climb",
          },
        },
        PreviewTexture: "texture2d_buff_targetbreak",
      },
    },
  },
  gm_targetbreak: {
    slug: "gm_targetbreak",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: true,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 4,
            MinPlayerPerTeam: 1,
            NumRingouts: 1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_targetbreak",
        MatchDuration: 70,
        MaximumLocalPlayPlayers: 2,
        RequiredWorldBuffs: [
          "mvsworldbuff_targetbreak_local",
        ],
        TeamStyle: "Other",
      },
      Slug: "gm_targetbreak",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Target_Break: "Target Break",
          },
        },
        PreviewTexture: "texture2d_buff_targetbreak",
      },
    },
  },
  gm_targetrun_local_2: {
    slug: "gm_targetrun_local_2",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: true,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 1,
            MinPlayerPerTeam: 1,
            NumRingouts: -1,
            Players: [
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
              {
                RequiredPlayerBuffs: [],
                Type: "Human",
              },
            ],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "maprotation_golf",
        MatchDuration: 420,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [
          "mvsworldbuff_golf_10balls",
        ],
        TeamStyle: "Other",
      },
      Slug: "gm_targetrun_local_2",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: false,
        Description: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        DisplayName: {
          localizations: {
            loc_Golf: "Golf",
          },
        },
        PreviewTexture: "texture2d_buff_targetbreak",
      },
    },
  },
  gm_classic_localplay: {
    slug: "gm_classic_localplay",
    data: {
      AnalyticsSlug: "",
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      GameModeData: {
        bHasMaximumLocalPlayPlayers: false,
        bMapHazards: true,
        GameModeTeams: [
          {
            MaxPlayerPerTeam: 3,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 3,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: true,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 3,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: false,
            RequiredTeamPlayerBuffs: [],
          },
          {
            MaxPlayerPerTeam: 3,
            MinPlayerPerTeam: 1,
            NumRingouts: 4,
            Players: [],
            Required: false,
            RequiredTeamPlayerBuffs: [],
          },
        ],
        MapRotation: "LocalPlay",
        MatchDuration: 420,
        MaximumLocalPlayPlayers: 1,
        RequiredWorldBuffs: [],
        TeamStyle: "FFA",
      },
      Slug: "gm_classic_localplay",
      UIData: {
        AbbreviatedName: {
          localizations: {
            loc_Default_Text: "Default Text",
          },
        },
        bAllowCustomLobby: false,
        bAllowLocalPlay: true,
        bShowRingoutsInCustomLobby: true,
        Description: {
          localizations: {
            loc_This_is_classic_game_mode: "This is classic game mode",
          },
        },
        DisplayName: {
          localizations: {
            loc_Classic: "Classic",
          },
        },
        PreviewTexture:
          "/Game/Panda_Main/UI/Events/sharkweek/sharkweek/sharkweek_final/007_-_Event_Art_-_Shark_Week_Final_v2__1_.007_-_Event_Art_-_Shark_Week_Final_v2__1_",
      },
    },
  },
};
