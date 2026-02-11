export const RANK_SETTINGS = {
  rankedsettings_default: {
    slug: "rankedsettings_default",
    data: {
      AccountLevelRequiredForRanked: 5,
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      PerTierSettings: {
        Bronze: {
          NumDivisions: 5,
          Type: "RP",
          TotalStarThresholdByDivision: [
            9,
            19,
            29,
          ],
          MaximumNumberOfPlayersInTier: -1,
          DivisionSettings: [
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 99,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 199,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 299,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 399,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 499,
            },
          ],
        },
        Diamond: {
          NumDivisions: 5,
          Type: "RP",
          TotalStarThresholdByDivision: [
            0,
            0,
            0,
            0,
            0,
          ],
          MaximumNumberOfPlayersInTier: -1,
          DivisionSettings: [
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2099,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2199,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2299,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2399,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2499,
            },
          ],
        },
        Gold: {
          NumDivisions: 5,
          Type: "RP",
          TotalStarThresholdByDivision: [
            0,
            0,
            0,
            0,
            0,
          ],
          MaximumNumberOfPlayersInTier: -1,
          DivisionSettings: [
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 1099,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1199,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1299,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1399,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1499,
            },
          ],
        },
        Master: {
          NumDivisions: 5,
          Type: "RP",
          TotalStarThresholdByDivision: [
            0,
            0,
            0,
            0,
            0,
          ],
          MaximumNumberOfPlayersInTier: -1,
          DivisionSettings: [
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2599,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2699,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2799,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2899,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 2999,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
          ],
        },
        Platinum: {
          NumDivisions: 5,
          Type: "RP",
          TotalStarThresholdByDivision: [
            0,
            0,
            0,
            0,
            0,
          ],
          MaximumNumberOfPlayersInTier: -1,
          DivisionSettings: [
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1599,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1699,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1799,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1899,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: 1999,
            },
          ],
        },
        Silver: {
          NumDivisions: 5,
          Type: "RP",
          TotalStarThresholdByDivision: [
            39,
            49,
            59,
            69,
            79,
          ],
          MaximumNumberOfPlayersInTier: -1,
          DivisionSettings: [
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 599,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 699,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 799,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 899,
            },
            {
              DemotionSetting: "CannotDemote",
              RpThreshold: 999,
            },
          ],
        },
        Unranked: {
          DivisionSettings: [
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
          ],
          MaximumNumberOfPlayersInTier: -1,
          NumDivisions: 5,
          TotalStarThresholdByDivision: [
            0,
            0,
            0,
            0,
            0,
          ],
          Type: "Star",
        },
        Grandmaster: {
          DivisionSettings: [
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
            {
              DemotionSetting: "OneGameDemotionCushion",
              RpThreshold: -1,
            },
          ],
          MaximumNumberOfPlayersInTier: 100,
          NumDivisions: 0,
          TotalStarThresholdByDivision: [],
          Type: "Leaderboard",
        },
      },
      Slug: "rankedsettings_default",
      MaximumNumberOfMatchesInASet: 3,
      RematchTimeoutSeconds: 25,
      NewGoldenStarMatchCadence: 5,
      RematchAcceptedGracePeriodSeconds: 45,
      SeasonToRankedRewards: {
        "Season:SeasonTwo": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_diamond_destroyer",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "0D5B77894611BDDA93E815BCFEE03AE8",
                    RewardHsda: "",
                  },
                  GrantTiming: "AtEndOfSeason",
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s31",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "B67EDC654607F8583E06978841798205",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_golden_goliath",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "8519085948FD7C75D380A9B4646A2306",
                    RewardHsda: "",
                  },
                  GrantTiming: "AtEndOfSeason",
                },
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_characters_in_gold_1v1",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "BB3E4B7048C823BE345B8F86CCBCCA84",
                    RewardHsda: "",
                  },
                  GrantTiming: "OnRankUp",
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_characters_in_gold_2v2",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "40B4F0174999C47FEAD0CE91419BBC7B",
                    RewardHsda: "",
                  },
                  GrantTiming: "OnRankUp",
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s29",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "F2A63E5C406E3D13D9C5BCB0CCBDE371",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_master_master",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "AD47AB5D491ACF00EF52289735A8B493",
                    RewardHsda: "",
                  },
                  GrantTiming: "AtEndOfSeason",
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s32",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "684E91904181C8F3636BE38CF4B0E3C6",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_platinum_pinnacle",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "D17B128B40B9A1A73A8602A9D25A1A3A",
                    RewardHsda: "",
                  },
                  GrantTiming: "AtEndOfSeason",
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s30",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "C8C6CD8140A6E7A30F589CB10E677113",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_wins_1v1",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "EC1B6F59453B11272D24DD94189FC209",
                    RewardHsda: "",
                  },
                  GrantTiming: "OnRankUp",
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_wins_2v2",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "89709B1442BF36DD11BD98BCFB0D4AF1",
                    RewardHsda: "",
                  },
                  GrantTiming: "OnRankUp",
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s2_grandmaster",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "784E19C640163981D2E44292ACB234F1",
                    RewardHsda: "",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonOne": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_diamond_destroyer",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "134F945B423BC772176230BE702B7E23",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s31",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "15FFBCB0475D8C155D5F68B3083C11F0",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_golden_goliath",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "769CE9F0432F560AC47C848CDC225539",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_characters_in_gold_1v1",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "3B95B3BB40F3FC64B31FBA915F6D8047",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_characters_in_gold_2v2",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "35C746A44428903D97470B941239D689",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s29",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "C7FBA3E3446CB9D3C877C6A7DB492F07",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s2_grandmaster",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "32FF91734E26F1FF998127932FC16215",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_master_master",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "2AE5A7C34148CE84BA9ADEB9D135F102",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s32",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "4E5F3AA64FE2AE673FD5BCBE8F1BF622",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s1_platinum_pinnacle",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "53A31F2147C21507B8C6DD824F2257D7",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c026_s30",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "1FAA70824953ACA65BED4991A725FEA4",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_wins_1v1",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "58151D9E4D2106E5EB1150990E0FF1D9",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stat_tracking_bundle_ranked_season_two_wins_2v2",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "5445D66C4CACAA5CD33A85A84FEFEA38",
                    RewardHsda: "",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonThree": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "S3DiamondDestroyer_Banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "0D5B77894611BDDA93E815BCFEE03AE8",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "c030_s31",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "B67EDC654607F8583E06978841798205",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "S3GoldenGoliath_Banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "8519085948FD7C75D380A9B4646A2306",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonthree_charactersingold_1v1",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "BB3E4B7048C823BE345B8F86CCBCCA84",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonthree_charactersingold_2v2",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "40B4F0174999C47FEAD0CE91419BBC7B",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "c030_s29",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "F2A63E5C406E3D13D9C5BCB0CCBDE371",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "S3Grandmaster_Banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "784E19C640163981D2E44292ACB234F1",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "S3MasterMaster_Banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "AD47AB5D491ACF00EF52289735A8B493",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "c030_s32",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "684E91904181C8F3636BE38CF4B0E3C6",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "S3PlatinumPinnacle_Banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "D17B128B40B9A1A73A8602A9D25A1A3A",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "c030_s30",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "C8C6CD8140A6E7A30F589CB10E677113",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonthree_rankedwins_1v1",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "EC1B6F59453B11272D24DD94189FC209",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonthree_rankedwins_2v2",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "89709B1442BF36DD11BD98BCFB0D4AF1",
                    RewardHsda: "",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonFour": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s4diamonddestroyer_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "0D5B77894611BDDA93E815BCFEE03AE8",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c025_s31",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "B67EDC654607F8583E06978841798205",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s4goldengoliath_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "8519085948FD7C75D380A9B4646A2306",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfour_charactersingold_1v1",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "BB3E4B7048C823BE345B8F86CCBCCA84",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfour_charactersingold_2v2",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "40B4F0174999C47FEAD0CE91419BBC7B",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c025_s29",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "F2A63E5C406E3D13D9C5BCB0CCBDE371",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s4grandmaster_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "784E19C640163981D2E44292ACB234F1",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s4mastermaster_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "AD47AB5D491ACF00EF52289735A8B493",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c025_s32",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "684E91904181C8F3636BE38CF4B0E3C6",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s4platinumpinnacle_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "D17B128B40B9A1A73A8602A9D25A1A3A",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c025_s30",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "C8C6CD8140A6E7A30F589CB10E677113",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfour_rankedwins_1v1",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "EC1B6F59453B11272D24DD94189FC209",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfour_rankedwins_2v2",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "89709B1442BF36DD11BD98BCFB0D4AF1",
                    RewardHsda: "",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonEight": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "AFA250074AC7654D66300D96FA939DEF",
                    RewardHsda: "reward_gleamium_25",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "045B796646D76EC1279BC6BFBFA54B4C",
                    RewardHsda: "reward_gleamium_15",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "636EB908412D441E652BF5875D35526A",
                    RewardHsda: "reward_gleamium_60",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "AC1D3E524ABF0253BF96D491D5C3BBF2",
                    RewardHsda: "reward_Gleamium_30",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "7C110C6B4C188E8776FF9289E466EEE3",
                    RewardHsda: "reward_gleamium_20",
                  },
                },
              ],
            },
            Bronze: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "B4E1651C4CB629325CBB6CB53D8A54E5",
                    RewardHsda: "reward_gleamium_5",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "C61759DA4DC5C031AACA1D8DD6722C58",
                    RewardHsda: "reward_gleamium_10",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonFive": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s5diamonddestroyer_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "0D5B77894611BDDA93E815BCFEE03AE8",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c029_s31",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "B67EDC654607F8583E06978841798205",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s5goldengoliath_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "8519085948FD7C75D380A9B4646A2306",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfive_charactersingold_1v1",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "BB3E4B7048C823BE345B8F86CCBCCA84",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfive_charactersingold_2v2",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "40B4F0174999C47FEAD0CE91419BBC7B",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c029_s29",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "F2A63E5C406E3D13D9C5BCB0CCBDE371",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s5grandmaster_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "784E19C640163981D2E44292ACB234F1",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s5mastermaster_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "AD47AB5D491ACF00EF52289735A8B493",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c029_s32",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "684E91904181C8F3636BE38CF4B0E3C6",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s5platinumpinnacle_banner",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "D17B128B40B9A1A73A8602A9D25A1A3A",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "skin_c029_s30",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "C8C6CD8140A6E7A30F589CB10E677113",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfive_rankedwins_1v1",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "EC1B6F59453B11272D24DD94189FC209",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonfive_rankedwins_2v2",
                    LevelPercentage: 0,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "89709B1442BF36DD11BD98BCFB0D4AF1",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s5silverstalwart_banner",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "6D3CE8CA41BD390CE6F3278C85BEEC36",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Bronze: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "s5bronzebrawler_banner",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "048FC25A4D2ADF51176EC99FF8CCA594",
                    RewardHsda: "",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonNine": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "D54E2381404FD4B68B40FEACF90F4CCE",
                    RewardHsda: "reward_gleamium_25",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "57D76301464C3F727AC8969C1BFD7026",
                    RewardHsda: "reward_gleamium_15",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "4F5335DA4E04D10A996DB5946954C08A",
                    RewardHsda: "reward_gleamium_60",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "3129FB674BC7967D755383AA839F8731",
                    RewardHsda: "reward_Gleamium_30",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "FC8BCFDC44CEA5F236F78E99B1A85A15",
                    RewardHsda: "reward_gleamium_20",
                  },
                },
              ],
            },
            Bronze: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "B266AFE542A625A478A4A69DC01B6D1B",
                    RewardHsda: "reward_gleamium_5",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "0C62DB844C6A396FCB267FAC9A766970",
                    RewardHsda: "reward_gleamium_10",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonSeven": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "4C57E9E24A2488DC98E4ED8809CC5473",
                    RewardHsda: "reward_gleamium_25",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "FCF28FAC4B5DB90C4ACCAA9B1D6B21CA",
                    RewardHsda: "reward_gleamium_15",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "AFC565174A51E12E7F597D8EFC371F08",
                    RewardHsda: "reward_gleamium_60",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "77DF5FAA4765589E13B738899F48453E",
                    RewardHsda: "reward_Gleamium_30",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "348ACD444F92B69CF0FF8581C3D02087",
                    RewardHsda: "reward_gleamium_20",
                  },
                },
              ],
            },
            Bronze: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "EEB4245146119B9F96C4E1AC7D723EA1",
                    RewardHsda: "reward_gleamium_5",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "B84E3B984EBF745FD8D394B2036AB100",
                    RewardHsda: "reward_gleamium_10",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonSix": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s6diamonddestroyer",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "6AECED2143F9F7DB671ED7A8A95E9195",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s6goldengoliath",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "EB00261E461785AF19880D86786BB08C",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonsix_charactersingold_1v1",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "C5BCF77046B0D7D9EBA23189DDA94985",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonsix_charactersingold_2v2",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "EDF9B9D74C50BD549181CB8C0D2C9FA7",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s6grandmaster",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "8245836E4D62F6E4FB95ED8127915906",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s6mastermaster",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "1362F016487051D823820694F8FDFB9E",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s6platinumpinnacle",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "3EF2C81B417F7ABBB8D82FBEFFC54813",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Bronze: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s6bronzebrawler",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "81B3648F45EEFAD2DEE408AD5620E398",
                    RewardHsda: "",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonsix_rankedwins_1v1",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "D37D985046E6ED86975E95A6B191C22F",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Cumulative",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "stattracking_ranked_seasonsix_rankedwins_2v2",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "EEEDD5AC43A6277104D583A7B121B2BE",
                    RewardHsda: "",
                  },
                },
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "OnRankUp",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "banner_s6silverstalwart",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "DirectInventoryItem",
                    RewardGuid: "7A42646F4DD4C04256359AAF3145839B",
                    RewardHsda: "",
                  },
                },
              ],
            },
          },
        },
        "Season:SeasonTen": {
          RankedTierToRewards: {
            Diamond: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "3A4B33114E0ED7659F4B4795A581C1BB",
                    RewardHsda: "reward_gleamium_25",
                  },
                },
              ],
            },
            Gold: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "15C9652D476F7181E8E4AC9ED85EDEDC",
                    RewardHsda: "reward_gleamium_15",
                  },
                },
              ],
            },
            Grandmaster: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "62C74306495704B50A90EC94F85AEB26",
                    RewardHsda: "reward_gleamium_60",
                  },
                },
              ],
            },
            Master: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "A2FD549F4C9A8ED5EE6596ACA1978B2F",
                    RewardHsda: "reward_Gleamium_30",
                  },
                },
              ],
            },
            Platinum: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "C92201B1468F14972647898AB7539900",
                    RewardHsda: "reward_gleamium_20",
                  },
                },
              ],
            },
            Bronze: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "26937BDC4E95EB5FE3CA8A8D1F712B29",
                    RewardHsda: "reward_gleamium_5",
                  },
                },
              ],
            },
            Silver: {
              Rewards: [
                {
                  GrantedInModes: [
                    "1v1",
                    "2v2",
                  ],
                  GrantTiming: "AtEndOfSeason",
                  GrantType: "Isolated",
                  Reward: {
                    Constraints: [],
                    DirectInventoryItemCount: 1,
                    GemHsda: "",
                    InventoryHsda: "",
                    LevelPercentage: 1,
                    PerkCharacterSlug: "",
                    PerkHsda: "",
                    RewardGrantMethod: "RewardTableLookup",
                    RewardGuid: "3E2BA95C4CA9F82467E7EAAA1B16A664",
                    RewardHsda: "reward_gleamium_10",
                  },
                },
              ],
            },
          },
        },
      },
      TierThresholdForShowingBadgesPostMatch: "Unranked",
      TimeBetweenRankedMatchesSeconds: 15,
      bEnableTimedLeaderboardRefresh: true,
      TimeBetweenLeaderboardRefreshSeconds: 3600,
      EnabledModesForConcede: [
        "ranked-1v1",
        "ranked-2v2",
      ],
      SeasonToRewardsUISettings: {
        "Season:SeasonThree": "/MvsSeason03/panda_main/ui/ranked/data/seasondata/RankedRewardsSeason3.RankedRewardsSeason3",
        "Season:SeasonTwo": "/Game/Panda_Main/UI/Ranked/Data/SeasonData/RankedRewardsSeason2.RankedRewardsSeason2",
        "Season:SeasonFour": "/MvsSeason04/panda_main/ui/ranked/data/seasondata/RankedRewardsSeason4.RankedRewardsSeason4",
        "Season:SeasonEight": "/Game/Panda_Main/EventData/Ranked/Season8/RankedRewardsSeason8.RankedRewardsSeason8",
        "Season:SeasonFive": "/MvsSeason05/EventData/Ranked/RankedRewardsSeason5.RankedRewardsSeason5",
        "Season:SeasonNine": "/Game/Panda_Main/EventData/Ranked/Season9/RankedRewardsSeason9.RankedRewardsSeason9",
        "Season:SeasonSeven": "/Game/Panda_Main/EventData/Ranked/Season7/RankedRewardsSeason7.RankedRewardsSeason7",
        "Season:SeasonSix": "/Game/Panda_Main/EventData/Ranked/Season6/RankedRewardsSeason6.RankedRewardsSeason6",
        "Season:SeasonTen": "/Game/Panda_Main/EventData/Ranked/Season10/RankedRewardsSeason10.RankedRewardsSeason10",
      },
      SeasonIdToCurrentRankedEvent: {
        "Season:SeasonThree": "event_rankedseason3",
        "Season:SeasonFour": "event_rankedseason4",
        "Season:SeasonEight": "event_rankedseason8",
        "Season:SeasonFive": "event_rankedseason5",
        "Season:SeasonNine": "event_rankedseason9",
        "Season:SeasonSeven": "event_rankedseason7",
        "Season:SeasonSix": "event_rankedseason6",
      },
    },
  },
};
