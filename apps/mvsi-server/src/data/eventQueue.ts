export const EVENT_QUEUE_CONFIG = {
  evtq_infinitejumps: {
    slug: "evtq_infinitejumps",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_Infinite_Jumps: "Infinite Jumps",
        },
      },
      GameModes: [
        {
          GameMode: "gm_infinitejumps",
          SelectionWeight: 1,
          PercentChance: 0,
          SelectionType: "Default",
        },
      ],
      MatchmakingCriteriaSlug: "EVT_4_Player_1",
      NumPlayers: 4,
      Slug: "evtq_infinitejumps",
      bAlwaysAvailable: false,
      DisplayPriority: 0,
      bPartyEligible: true,
    },
  },
  evtq_arena: {
    slug: "evtq_arena",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_Arena: "Arena",
        },
      },
      GameModes: [],
      MatchmakingCriteriaSlug: "arena",
      NumPlayers: 4,
      Slug: "evtq_arena",
      bAlwaysAvailable: false,
      DisplayPriority: 0,
      bPartyEligible: true,
    },
  },
  evtq_actionsack: {
    slug: "evtq_actionsack",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_Wacky_Weekend: "Wacky Weekend",
        },
      },
      GameModes: [
        {
          GameMode: "gm_volleyball",
          SelectionWeight: 5,
          PercentChance: 5.952381134033203,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_infinitejumps",
          SelectionWeight: 5,
          PercentChance: 5.952381134033203,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_spotlight",
          SelectionWeight: 6,
          PercentChance: 7.142857551574707,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_kartrace",
          SelectionWeight: 2,
          PercentChance: 2.3809523582458496,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_chickensvsicecubes",
          SelectionWeight: 7,
          PercentChance: 8.333333969116211,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_slaythegiant",
          SelectionWeight: 6,
          PercentChance: 7.142857551574707,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_rocketfistrain",
          SelectionWeight: 6,
          PercentChance: 7.142857551574707,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_tinyvsgiant",
          SelectionWeight: 7,
          PercentChance: 8.333333969116211,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_splat",
          SelectionWeight: 7,
          PercentChance: 8.333333969116211,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_counter",
          SelectionWeight: 7,
          PercentChance: 8.333333969116211,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_conteder",
          SelectionWeight: 6,
          PercentChance: 7.142857551574707,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_divekick",
          SelectionWeight: 7,
          PercentChance: 8.333333969116211,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_targetrush",
          SelectionWeight: 7,
          PercentChance: 8.333333969116211,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_gumballshower",
          SelectionWeight: 6,
          PercentChance: 7.142857551574707,
          SelectionType: "Default",
        },
      ],
      MatchmakingCriteriaSlug: "EVT_4_Player_1",
      NumPlayers: 4,
      Slug: "evtq_actionsack",
      bAlwaysAvailable: false,
      DisplayPriority: 3,
      bPartyEligible: true,
    },
  },
  evtq_ffa: {
    slug: "evtq_ffa",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bAlwaysAvailable: false,
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_Free_For_All: "Free For All",
        },
      },
      DisplayPriority: 4,
      GameModes: [
        {
          GameMode: "ffa",
          SelectionWeight: 1,
          PercentChance: 100,
          SelectionType: "Default",
        },
      ],
      MatchmakingCriteriaSlug: "ffa",
      NumPlayers: 4,
      Slug: "evtq_ffa",
      bPartyEligible: false,
    },
  },
  casual: {
    slug: "casual",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bAlwaysAvailable: true,
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_Casual_Queue: "Casual Queue",
        },
      },
      DisplayPriority: 5,
      GameModes: [],
      MatchmakingCriteriaSlug: "casual",
      NumPlayers: 2,
      Slug: "casual",
      bPartyEligible: true,
    },
  },
  evtq_colbyqueue: {
    slug: "evtq_colbyqueue",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bAlwaysAvailable: true,
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_Colby_Queue: "Colby Queue",
        },
      },
      DisplayPriority: 2,
      GameModes: [
        {
          GameMode: "gm_cancelsystem",
          SelectionWeight: 1,
          PercentChance: 0,
          SelectionType: "Default",
        },
        {
          GameMode: "gm_turbo",
          SelectionWeight: 1,
          PercentChance: 0,
          SelectionType: "Default",
        },
      ],
      MatchmakingCriteriaSlug: "EVT_2_Player_1",
      NumPlayers: 2,
      Slug: "evtq_colbyqueue",
      bPartyEligible: true,
    },
  },
  evtq_1v1testinggrounds: {
    slug: "evtq_1v1testinggrounds",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bAlwaysAvailable: false,
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_1v1_Testing_Grounds: "1v1 Testing Grounds",
        },
      },
      DisplayPriority: 1,
      GameModes: [
        {
          GameMode: "gm_1v1shields",
          PercentChance: 100,
          SelectionWeight: 1,
          SelectionType: "Default",
        },
      ],
      MatchmakingCriteriaSlug: "EVT_2_Player_1",
      NumPlayers: 2,
      Slug: "evtq_1v1testinggrounds",
      bPartyEligible: false,
    },
  },
  evtq_2v2testinggrounds: {
    slug: "evtq_2v2testinggrounds",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bAlwaysAvailable: false,
      bIsEnabled: true,
      DisplayName: {
        localizations: {
          loc_2v2_Testing_Grounds: "2v2 Testing Grounds",
        },
      },
      DisplayPriority: 1,
      GameModes: [
        {
          GameMode: "gm_2v2shields",
          PercentChance: 100,
          SelectionWeight: 1,
          SelectionType: "Default",
        },
      ],
      MatchmakingCriteriaSlug: "EVT_4_Player_2",
      NumPlayers: 4,
      Slug: "evtq_2v2testinggrounds",
      bPartyEligible: true,
    },
  },
  evtq_actionsack_temp45: {
    slug: "evtq_actionsack_temp45",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bAlwaysAvailable: false,
      bIsEnabled: true,
      bPartyEligible: true,
      DisplayName: {
        localizations: {
          loc_Wacky_Weekend: "Wacky Weekend",
        },
      },
      DisplayPriority: 3,
      GameModes: [
        {
          GameMode: "gm_volleyball",
          PercentChance: 7.368420600891113,
          SelectionType: "Default",
          SelectionWeight: 7,
        },
        {
          GameMode: "gm_infinitejumps",
          PercentChance: 5.263157844543457,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_spotlight",
          PercentChance: 6.315789222717285,
          SelectionType: "Default",
          SelectionWeight: 6,
        },
        {
          GameMode: "gm_kartrace",
          PercentChance: 2.1052632331848145,
          SelectionType: "Default",
          SelectionWeight: 2,
        },
        {
          GameMode: "gm_chickensvsicecubes",
          PercentChance: 5.263157844543457,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_slaythegiant",
          PercentChance: 6.315789222717285,
          SelectionType: "Default",
          SelectionWeight: 6,
        },
        {
          GameMode: "gm_rocketfistrain",
          PercentChance: 5.263157844543457,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_tinyvsgiant",
          PercentChance: 6.315789222717285,
          SelectionType: "Default",
          SelectionWeight: 6,
        },
        {
          GameMode: "gm_splat",
          PercentChance: 8.421052932739258,
          SelectionType: "Default",
          SelectionWeight: 8,
        },
        {
          GameMode: "gm_counter",
          PercentChance: 8.421052932739258,
          SelectionType: "Default",
          SelectionWeight: 8,
        },
        {
          GameMode: "gm_conteder",
          PercentChance: 8.421052932739258,
          SelectionType: "Default",
          SelectionWeight: 8,
        },
        {
          GameMode: "gm_spotlightpilot",
          PercentChance: 7.368420600891113,
          SelectionType: "Default",
          SelectionWeight: 7,
        },
        {
          GameMode: "gm_divekick",
          PercentChance: 8.421052932739258,
          SelectionType: "Default",
          SelectionWeight: 8,
        },
        {
          GameMode: "gm_targetrush",
          PercentChance: 7.368420600891113,
          SelectionType: "Default",
          SelectionWeight: 7,
        },
        {
          GameMode: "gm_gumballshower",
          PercentChance: 7.368420600891113,
          SelectionType: "Default",
          SelectionWeight: 7,
        },
      ],
      MatchmakingCriteriaSlug: "EVT_4_Player_1",
      NumPlayers: 4,
      Slug: "evtq_actionsack_temp45",
    },
  },
  evtq_actionsackoldtemp: {
    slug: "evtq_actionsackoldtemp",
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bAlwaysAvailable: false,
      bIsEnabled: true,
      bPartyEligible: true,
      DisplayName: {
        localizations: {
          loc_Wacky_Weekend: "Wacky Weekend",
        },
      },
      DisplayPriority: 3,
      GameModes: [
        {
          GameMode: "gm_volleyball",
          PercentChance: 9.67741870880127,
          SelectionType: "Default",
          SelectionWeight: 9,
        },
        {
          GameMode: "gm_infinitejumps",
          PercentChance: 5.376344203948975,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_spotlight",
          PercentChance: 9.67741870880127,
          SelectionType: "Default",
          SelectionWeight: 9,
        },
        {
          GameMode: "gm_lazaruspit",
          PercentChance: 0,
          SelectionType: "Default",
          SelectionWeight: 0,
        },
        {
          GameMode: "gm_kartrace",
          PercentChance: 2.1505377292633057,
          SelectionType: "Default",
          SelectionWeight: 2,
        },
        {
          GameMode: "gm_chickensvsicecubes",
          PercentChance: 5.376344203948975,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_slaythegiant",
          PercentChance: 6.45161247253418,
          SelectionType: "Default",
          SelectionWeight: 6,
        },
        {
          GameMode: "gm_rocketfistrain",
          PercentChance: 5.376344203948975,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_retrohorror",
          PercentChance: 5.376344203948975,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_hammertime",
          PercentChance: 9.67741870880127,
          SelectionType: "Default",
          SelectionWeight: 9,
        },
        {
          GameMode: "gm_tinyvsgiant",
          PercentChance: 6.45161247253418,
          SelectionType: "Default",
          SelectionWeight: 6,
        },
        {
          GameMode: "gm_splat",
          PercentChance: 9.67741870880127,
          SelectionType: "Default",
          SelectionWeight: 9,
        },
        {
          GameMode: "gm_counter",
          PercentChance: 9.67741870880127,
          SelectionType: "Default",
          SelectionWeight: 9,
        },
        {
          GameMode: "gm_icepit",
          PercentChance: 5.376344203948975,
          SelectionType: "Default",
          SelectionWeight: 5,
        },
        {
          GameMode: "gm_conteder",
          PercentChance: 9.67741870880127,
          SelectionType: "Default",
          SelectionWeight: 9,
        },
      ],
      MatchmakingCriteriaSlug: "EVT_4_Player_1",
      NumPlayers: 4,
      Slug: "evtq_actionsackoldtemp",
    },
  },
};
