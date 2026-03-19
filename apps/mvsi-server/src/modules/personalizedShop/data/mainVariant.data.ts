export const personalizedShop_static_main_variants_data = {
  slug: "main-variant-1",
  layout_type_slug: "dokken-layout-type",
  name: "Variant 1",
  description: "Main store if the user is being personalized to",
  data: null,
  variant_slug: "main-variant",
  weight: 1,
  enabled: true,
  areas: [
    {
      slug: "features-bundles-variant-1",
      template_slug: "features-bundles-variant-1",
      name: { localizations: { "layout_area-features-bundles-variant-1-name": "Featured" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: true },
      template_type: "dynamic_featured",
      enabled: true,
      items: [
        {
          slug: "future-queen-nubias-strength-gleamium-featured-backfill",
          name: {
            localizations: {
              "store_product-future-queen-nubias-strength-gleamium-featured-backfill-name":
                "Future Queen Nubia’s Strength",
            },
          },
          description: {
            localizations: {
              "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description":
                "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "future-queen-nubias-strength-gleamium-featured-backfill",
            name: {
              localizations: {
                "store_product-future-queen-nubias-strength-gleamium-featured-backfill-name":
                  "Future Queen Nubia’s Strength",
              },
            },
            description: {
              localizations: {
                "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description":
                  "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "future-state-nubia-skin-store",
                  name: "Future State Nubia",
                  description: {
                    localizations: {
                      "store_product-future-state-nubia-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_C027_s01",
                      slug: "skin_C027_s01",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath: "/MvsSeason03/Character/C027/Skins/S01/C027_S01.C027_S01",
                        AssociatedCharacter: "C027",
                        DisplayName: "Future State Nubia",
                        DisplayNameLocalizationKey: "88811D824C349868DF317D875FAEAD8E",
                        DisplayNameLocalizationNamespace: "[0859EB4C4D48E88731A714AA6CE3A060]",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:ComicInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:YellowClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:RedWhiteandBlueClothing",
                            "TS:Dynamic:CombatWear",
                            "TS:Fixed:Class:Assassin",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Fixed:Class",
                          ],
                        },
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Character/C027/Skins/S01/T_C027_S01.T_C027_S01",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/C027/Skins/S01/MI_C027_S01_RewardThumbnail.MI_C027_S01_RewardThumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c027",
                        "unlock_location_tutorial",
                        "universe_dc",
                        "skin",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca972",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "future-state-nubia-skin-store_gleamium",
                      name: "Future State Nubia gleamium",
                      description: {
                        localizations: {
                          "store_product-future-state-nubia-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-future-state-nubia-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-fighter-road",
                  name: "Nubia",
                  description: {
                    localizations: {
                      "store_product-nubia-fighter-road-description":
                        "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_C027",
                      slug: "character_C027",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: false,
                        AssetPath: "/MvsSeason03/Character/C027/character_C027.character_C027",
                        IsUnlockedByDefault: false,
                        ContentLevel: 1,
                        AssociatedCharacter: "C027",
                        DisplayName: "Nubia",
                        DisplayNameLocalizationKey: "9A6EBE4445C31F85CEC17FA1465360F6",
                        DisplayNameLocalizationNamespace: "[9F4CEC7346FD4CB3615BF68DC904CF32]",
                        FighterClass: "Assassin",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:ComicInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:YellowClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:RedWhiteandBlueClothing",
                            "TS:Dynamic:CombatWear",
                            "TS:Fixed:Class:Assassin",
                            "TS:Fixed:Nubia",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Fixed:Class",
                          ],
                        },
                        MasteryRewardTrack: "mrt_mastery_c027",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Character/Captures/C027/C027_C027_S00.C027_C027_S00",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C027/Skins/S00/MI_C027_S00_RewardThumbnailMaterial.MI_C027_S00_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "character_c027",
                        "unlock_location_shop",
                        "universe_dc",
                        "character",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca84d",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-fighter-road_gleamium",
                      name: "Nubia gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-fighter-road-description":
                            "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-fighter-road-description":
                                  "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "ProductCTA",
                          type: "text",
                          type_options: {
                            text: { localizations: { "released-season-3-": "Released Season 3!" } },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-fighter-road-tagline":
                                  "Explorer. Guardian of Doom’s Doorway.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-announcer-pack-account-cosmetics-store",
                  name: "Nubia Announcer Pack",
                  description: {
                    localizations: {
                      "store_product-nubia-announcer-pack-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "announcer_pack_c027",
                      slug: "announcer_pack_c027",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/AnnouncerPacks/AnnouncerPack_C027.AnnouncerPack_C027",
                        AssociatedCharacter: "C027",
                        DisplayName: "Announcer Pack Nubia",
                        DisplayNameLocalizationKey: "AF4FB59C40741D49A3A266826539B9AB",
                        DisplayNameLocalizationNamespace: "[8A543FA64877F162E803058FBC40C6B8]",
                        EnabledForShipping: true,
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/C027/UI/thumb_announcer_c027.thumb_announcer_c027",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c027",
                        "unlock_location_shop",
                        "universe_dc",
                        "announcer_pack",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec268430",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-announcer-pack-account-cosmetics-store_gleamium",
                      name: "Nubia Announcer Pack gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-announcer-pack-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 300,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-announcer-pack-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "an-apple-a-day-account-cosmetics-store",
                  name: "An Apple A Day",
                  description: {
                    localizations: {
                      "store_product-an-apple-a-day-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c027_taunt1",
                      slug: "taunt_c027_taunt1",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/Taunts/Taunt_C027_AppleADay.Taunt_C027_AppleADay",
                        AssociatedCharacter: "C027",
                        DisplayName: "An Apple A Day",
                        DisplayNameLocalizationKey: "030992D943D79994C8124DBF98061176",
                        DisplayNameLocalizationNamespace: "[1C36331D49609965CA2CEE9B0F00893F]",
                        EnabledForShipping: false,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Rewards/Taunts/Emote_C027_AnAppleADay.Emote_C027_AnAppleADay",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Rewards/Taunts/MI_C027_Emote_AnAppleADay_Thumbnail.MI_C027_Emote_AnAppleADay_Thumbnail",
                      },
                      description: "",
                      tags: ["rarity_epic", "character_c027", "universe_dc", "taunt", "unlockable"],
                      id: "66e9a9297af4cd81ec26846b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "an-apple-a-day-account-cosmetics-store_gleamium",
                      name: "An Apple A Day gleamium",
                      description: {
                        localizations: {
                          "store_product-an-apple-a-day-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-an-apple-a-day-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-ringouts-account-cosmetics-store",
                  name: "Nubia Ringouts",
                  description: {
                    localizations: {
                      "store_product-nubia-ringouts-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_c027_ringouts",
                      slug: "stat_tracking_bundle_c027_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/StatTrackingBundle/StatTracking_C027Ringouts.StatTracking_C027Ringouts",
                        AssociatedCharacter: "C027",
                        DisplayName: "Nubia Ringouts",
                        DisplayNameLocalizationKey: "1911EA2E418E9037574933A9D6B89755",
                        DisplayNameLocalizationNamespace: "[B6BDBAAB41ECEAE57A3147ABBA4555AE]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/MvsSeason03/Character/C027/UI/UI_Stat_C027_Ringouts_Badge.UI_Stat_C027_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c027",
                        "unlock_location_character_mastery",
                        "universe_dc",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "66e9a9297af4cd81ec268468",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-ringouts-account-cosmetics-store_gleamium",
                      name: "Nubia Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-ringouts-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-ringouts-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-total-damage-dealt-account-cosmetics-store",
                  name: "Nubia Total Damage Dealt",
                  description: {
                    localizations: {
                      "store_product-nubia-total-damage-dealt-account-cosmetics-store-description":
                        "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_c027_total_damage_dealt",
                      slug: "stat_tracking_bundle_c027_total_damage_dealt",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/StatTrackingBundle/StatTracking_C027TotalDamageDealt.StatTracking_C027TotalDamageDealt",
                        AssociatedCharacter: "C027",
                        DisplayName: "Nubia Total Damage Dealt",
                        DisplayNameLocalizationKey: "6043E62E4D69422165285E942390FB96",
                        DisplayNameLocalizationNamespace: "[145BA3A04082286D81C835A7BEDEF0AE]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/MvsSeason03/Character/C027/UI/UI_Stat_C027_TotalDamageDealt_Badge.UI_Stat_C027_TotalDamageDealt_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c027",
                        "unlock_location_character_mastery",
                        "universe_dc",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "66e9a9297af4cd81ec268467",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-total-damage-dealt-account-cosmetics-store_gleamium",
                      name: "Nubia Total Damage Dealt gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-total-damage-dealt-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-total-damage-dealt-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "future-queen-nubias-strength-gleamium-featured-backfill_gleamium_sale",
                name: "Future Queen Nubia’s Strength gleamium sale",
                description: {
                  localizations: {
                    "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description":
                      "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1570,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3500,
                    already_owned_adjusted_cost: 3500,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "future-queen-nubias-strength-gleamium-featured-backfill_gleamium",
                name: "Future Queen Nubia’s Strength gleamium",
                description: {
                  localizations: {
                    "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description":
                      "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3500,
                  already_owned_adjusted_cost: 3500,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-future-queen-nubias-strength-gleamium-featured-backfill-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Nubia_FutureQueenNubia_Bundle.png",
                          md5: "1091fc99dd68c1071cd9c004c7bebe60",
                          file_size: 707243,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Nubia_FutureQueenNubia_Bundle-3130393166633939646436386331303731636439633030346337626562653630.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Nubia_FutureQueenNubia_Bundle-3130393166633939646436386331303731636439633030346337626562653630.png",
                          id: "6709b856c0cc4f4fead84ec9",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "epic-skin": "Epic Skin" } },
                        { localizations: { "dc-": "DC™" } },
                        { localizations: { "rare-announcer-pack": "Rare Announcer Pack" } },
                        { localizations: { "epic-taunt-emote": "Epic Taunt Emote" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Nubia_FutureQueenNubia_Banner.png",
                        md5: "9ff34e065172909399ec42aa4087dabc",
                        file_size: 5505142,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Nubia_FutureQueenNubia_Banner-3966663334653036353137323930393339396563343261613430383764616263.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Nubia_FutureQueenNubia_Banner-3966663334653036353137323930393339396563343261613430383764616263.png",
                        id: "6709b84af12500be4874dcf9",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "biker-gizmos-wild-ride-featured-backfill",
          name: {
            localizations: {
              "store_product-biker-gizmos-wild-ride-featured-backfill-name":
                "Biker Gizmo's Wild Ride2",
            },
          },
          description: {
            localizations: {
              "store_product-biker-gizmos-wild-ride-featured-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "biker-gizmos-wild-ride-featured-backfill",
            name: {
              localizations: {
                "store_product-biker-gizmos-wild-ride-featured-backfill-name":
                  "Biker Gizmo's Wild Ride2",
              },
            },
            description: {
              localizations: {
                "store_product-biker-gizmos-wild-ride-featured-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "biker-gizmo-skin-store",
                  name: "Biker Gizmo",
                  description: {
                    localizations: { "store_product-biker-gizmo-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c023A_s03",
                      slug: "skin_c023A_s03",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/C023A/Skins/Skin03/C023A_S03.C023A_S03",
                        AssociatedCharacter: "C023A",
                        DisplayName: "Biker Gizmo",
                        DisplayNameLocalizationKey: "C22DDAEE406F1741D215578D305704D6",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Character/Captures/C023A/C023A_C023A_S03.C023A_C023A_S03",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C023A/Skins/Skin03/MI_C023A_S03_RewardThumbnailMaterial.MI_C023A_S03_RewardThumbnailMaterial",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Mage",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:Gremlins",
                            "TS:Dynamic:PremieredinThe80s",
                            "TS:Dynamic:MovieInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:Fuzzy",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:YellowClothing",
                            "TS:Dynamic:OrangeClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:BlackClothing",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c023a",
                        "unlock_location_shop",
                        "universe_gremlins",
                        "skin",
                        "unlockable",
                      ],
                      id: "663c0f944b55072b1d7ec71c",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "biker-gizmo-skin-store_gleamium",
                      name: "Biker Gizmo gleamium",
                      description: {
                        localizations: { "store_product-biker-gizmo-skin-store-description": "" },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-biker-gizmo-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "mog-y-1000-account-cosmetic-store",
                  name: "MOG-Y 1000",
                  description: {
                    localizations: {
                      "store_product-mog-y-1000-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c023A_piano",
                      slug: "taunt_c023A_piano",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/C023A/DataAssets/Taunts/Taunt_C023A_Piano.Taunt_C023A_Piano",
                        AssociatedCharacter: "C023A",
                        DisplayName: "MOG-Y 1000",
                        DisplayNameLocalizationKey: "B5CBB6A74B73D0F53F2DFE8A29E9E9EB",
                        DisplayNameLocalizationNamespace: "[AFD310C946CCC02BD319D69CA7D7EF97]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/C023A/UI/Emote_C023A_Piano.Emote_C023A_Piano",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C023A/UI/MI_C023A_Emote_Piano_Thumbnail.MI_C023A_Emote_Piano_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c023a",
                        "universe_gremlins",
                        "taunt",
                        "unlockable",
                      ],
                      id: "66c4be1645eaf195cd99530f",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "mog-y-1000-account-cosmetic-store_gleamium",
                      name: "MOG-Y 1000 gleamium",
                      description: {
                        localizations: {
                          "store_product-mog-y-1000-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-mog-y-1000-account-cosmetic-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "umbrella-account-cosmetics-store",
                  name: "Umbrella",
                  description: {
                    localizations: {
                      "store_product-umbrella-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c023A_umbrella",
                      slug: "taunt_c023A_umbrella",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/C023A/DataAssets/Taunts/Taunt_C023A_Umbrella.Taunt_C023A_Umbrella",
                        EnabledForShipping: true,
                        AssociatedCharacter: "C023A",
                        DisplayName: "Umbrella",
                        DisplayNameLocalizationKey: "62F0A2C04AE5F9335FB978AA88ED40E1",
                        DisplayNameLocalizationNamespace: "[29266A604365C8453E7B5990D0D70475]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/C023A/UI/Emote_C023A_Umbrella.Emote_C023A_Umbrella",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C023A/UI/MI_C023A_Emote_Umbrella_Thumbnail.MI_C023A_Emote_Umbrella_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c023a",
                        "unlock_location_shop",
                        "universe_gremlins",
                        "taunt",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be84d",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "umbrella-account-cosmetics-store_gleamium",
                      name: "Umbrella gleamium",
                      description: {
                        localizations: {
                          "store_product-umbrella-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 350,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-umbrella-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                              { localizations: { "gremlins-": "Gremlins™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "gizmo-profile-icon-account-cosmetics-store",
                  name: "Gizmo Profile Icon",
                  description: {
                    localizations: {
                      "store_product-gizmo-profile-icon-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profile_icon_amb_gre_gizmo_1",
                      slug: "profile_icon_amb_gre_gizmo_1",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_AMB_GRE_Gizmo_1.ProfileIcon_AMB_GRE_Gizmo_1",
                        AssociatedCharacter: "C023A",
                        DisplayName: "Gizmo",
                        DisplayNameLocalizationKey: "B6494BB94D8840299C99BCAAE575E02B",
                        DisplayNameLocalizationNamespace: "[40CD157749CF2127FD7C95A27638C71E]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/Profile_Icons/20210225_AMB_GRE_Icon_Profile_Gizmo.20210225_AMB_GRE_Icon_Profile_Gizmo",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c023a",
                        "unlock_location_shop",
                        "universe_gremlins",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca8c0",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "gizmo-profile-icon-account-cosmetics-store_gleamium",
                      name: "Gizmo Profile Icon gleamium",
                      description: {
                        localizations: {
                          "store_product-gizmo-profile-icon-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 50,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-gizmo-profile-icon-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-profile-icon": "Rare Profile Icon" } },
                              { localizations: { "gremlins-": "Gremlins™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "gizmo-ringouts-account-cosmetic-store",
                  name: "Gizmo Ringouts",
                  description: {
                    localizations: {
                      "store_product-gizmo-ringouts-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_c023A_ringouts",
                      slug: "stat_tracking_bundle_c023A_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/CharacterRingouts/StatTracking_C023ARingouts.StatTracking_C023ARingouts",
                        EnabledForShipping: true,
                        AssociatedCharacter: "C023A",
                        DisplayName: "Gizmo Ringouts",
                        DisplayNameLocalizationKey: "03ECE9484AE44652A07BD48F5C45361A",
                        DisplayNameLocalizationNamespace: "[70D2C8E84A227B5C4F9C7899F2D4F360]",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Badges/UI_Stat_C023A_Ringouts_Badge.UI_Stat_C023A_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c023a",
                        "unlock_location_character_mastery",
                        "universe_gremlins",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be7fa",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "gizmo-ringouts-account-cosmetic-store_gleamium",
                      name: "Gizmo Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-gizmo-ringouts-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-gizmo-ringouts-account-cosmetic-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { badge: "Badge" } },
                              { localizations: { "gremlins-": "Gremlins™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "biker-gizmos-wild-ride-featured-backfill_gleamium_sale",
                name: "Biker Gizmo's Wild Ride gleamium sale",
                description: {
                  localizations: {
                    "store_product-biker-gizmos-wild-ride-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 2,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2300,
                    already_owned_adjusted_cost: 2300,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "biker-gizmos-wild-ride-featured-backfill_gleamium",
                name: "Biker Gizmo's Wild Ride gleamium",
                description: {
                  localizations: {
                    "store_product-biker-gizmos-wild-ride-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2300,
                  already_owned_adjusted_cost: 2300,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-biker-gizmos-wild-ride-featured-backfill-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Gizmo_BikerGizmo_Bundle.png",
                          md5: "db545b14554804209c18768e76adeaff",
                          file_size: 480652,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Gizmo_BikerGizmo_Bundle-6462353435623134353534383034323039633138373638653736616465616666.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Gizmo_BikerGizmo_Bundle-6462353435623134353534383034323039633138373638653736616465616666.png",
                          id: "67083db810efb46694ac6039",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "rare-skin": "Rare Skin" } },
                        { localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" } },
                        { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                        { localizations: { "rare-profile-icon": "Rare Profile Icon" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "gremlins-": "Gremlins™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Gizmo_BikerGizmo_Banner.png",
                        md5: "f2d673297a8f141e3f12c6c7dfd69ac6",
                        file_size: 4122937,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Gizmo_BikerGizmo_Banner-6632643637333239376138663134316533663132633663376466643639616336.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Gizmo_BikerGizmo_Banner-6632643637333239376138663134316533663132633663376466643639616336.png",
                        id: "67083dd39ec9ad3c77882edb",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "vampire-vibes-marcelines-sun-hat-backfill",
          name: {
            localizations: {
              "store_product-vampire-vibes-marcelines-sun-hat-backfill-name":
                "Vampire Vibes: Marceline’s Sun Hat",
            },
          },
          description: {
            localizations: {
              "store_product-vampire-vibes-marcelines-sun-hat-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "vampire-vibes-marcelines-sun-hat-backfill",
            name: {
              localizations: {
                "store_product-vampire-vibes-marcelines-sun-hat-backfill-name":
                  "Vampire Vibes: Marceline’s Sun Hat",
              },
            },
            description: {
              localizations: {
                "store_product-vampire-vibes-marcelines-sun-hat-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "sun-hat-marceline-skin-store",
                  name: "Sun Hat Marceline",
                  description: {
                    localizations: { "store_product-sun-hat-marceline-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "c031_s02",
                      slug: "c031_s02",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Character_C031/C031/Skins/S02/C031_S02.C031_S02",
                        AssociatedCharacter: "C031",
                        DisplayName: "Sun Hat Marceline",
                        DisplayNameLocalizationKey: "52CF534B4CB920349D18B5A0E97BA056",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Animated",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredInThe10s",
                            "TS:Dynamic:TvInspired",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:Undead",
                            "TS:Fixed:Class:Bruiser",
                          ],
                          ParentTags: [
                            "TS:Fixed:Universe",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Dynamic",
                            "TS:Fixed:Class",
                          ],
                        },
                        Rarity: "Epic",
                        RewardThumbnail: "/Character_C031/C031/Skins/S02/T_C031_S02.T_C031_S02",
                        RewardThumbnailMaterial:
                          "/Character_C031/C031/Skins/S02/MI_C031_S02_RewardThumbnailMaterial.MI_C031_S02_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c031",
                        "universe_adventure_time",
                        "skin",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4bd",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "sun-hat-marceline-skin-store_gleamium",
                      name: "Sun Hat Marceline gleamium",
                      description: {
                        localizations: {
                          "store_product-sun-hat-marceline-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-sun-hat-marceline-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "fangtastic-account-cosmetics-store",
                  name: "Fangtastic",
                  description: {
                    localizations: {
                      "store_product-fangtastic-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "CN_AT_Marceline_ProfileIcon_Fangtastic",
                      slug: "CN_AT_Marceline_ProfileIcon_Fangtastic",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: false,
                        AssetPath:
                          "/MvsSeason04/Cosmetics/ProfileIcons/DataAsset/CN_AT_Marceline_ProfileIcon_Fangtastic.CN_AT_Marceline_ProfileIcon_Fangtastic",
                        AssociatedCharacter: "C033",
                        DisplayName: "Fangtastic",
                        DisplayNameLocalizationKey: "CBCFF7B0442A33630F1FF4BA75A72201",
                        DisplayNameLocalizationNamespace: "[D7DCA58D4C3B4C17E961B7990396E6CD]",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/ProfileIcons/Texture/20230915_CN_AT_Marceline_ProfileIcon_Fangtastic.20230915_CN_AT_Marceline_ProfileIcon_Fangtastic",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c033",
                        "universe_adventure_time",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca8cb",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "fangtastic-account-cosmetics-store_gleamium",
                      name: "Fangtastic gleamium",
                      description: {
                        localizations: {
                          "store_product-fangtastic-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-fangtastic-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "marceline-total-damage-dealt-account-cosmetics-store",
                  name: "Marceline Total Damage Dealt",
                  description: {
                    localizations: {
                      "store_product-marceline-total-damage-dealt-account-cosmetics-store-description":
                        "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stattracking_c031totaldamagedealt",
                      slug: "stattracking_c031totaldamagedealt",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/StatTrackingBundle/StatTracking_C031TotalDamageDealt.StatTracking_C031TotalDamageDealt",
                        AssociatedCharacter: "C025",
                        DisplayName: "Marceline Total Damage Dealt",
                        DisplayNameLocalizationKey: "5A6F7A004ABE5A8C0055558B6726E040",
                        DisplayNameLocalizationNamespace: "[EB722EC240980E08C744EFBA70353759]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/MvsSeason04/Character/C031/UI/UI_Stat_C031_TotalDamageDealt_Badge.UI_Stat_C031_TotalDamageDealt_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c025",
                        "unlock_location_character_mastery",
                        "universe_adventure_time",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4e2",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "marceline-total-damage-dealt-account-cosmetics-store_gleamium",
                      name: "Marceline Total Damage Dealt gleamium",
                      description: {
                        localizations: {
                          "store_product-marceline-total-damage-dealt-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-marceline-total-damage-dealt-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "idk-vampire-stuff-account-cosmetics-store",
                  name: "IDK, Vampire Stuff",
                  description: {
                    localizations: {
                      "store_product-idk-vampire-stuff-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_cavebat_legendary",
                      slug: "banner_cavebat_legendary",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/MvsSeason04/Cosmetics/Banners/Cave/Banner_CaveBat_Legendary.Banner_CaveBat_Legendary",
                        AssociatedCharacter: "C026",
                        DisplayName: "IDK, Vampire Stuff",
                        DisplayNameLocalizationKey: "D96CF20E441F3A63C24FFD8CF2958BE0",
                        DisplayNameLocalizationNamespace: "",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/Banners/Cave/UI_Banner_CaveLegendary_Thumbnail.UI_Banner_CaveLegendary_Thumbnail",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Cosmetics/Banners/Cave/MI_Banner_CaveBat_Legendary_Preview.MI_Banner_CaveBat_Legendary_Preview",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c026",
                        "universe_adventure_time",
                        "banner",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca891",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "idk-vampire-stuff-account-cosmetics-store_gleamium",
                      name: "IDK, Vampire Stuff gleamium",
                      description: {
                        localizations: {
                          "store_product-idk-vampire-stuff-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 600,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-idk-vampire-stuff-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "drop-the-bass-account-cosmetics-store",
                  name: "Drop the Bass",
                  description: {
                    localizations: {
                      "store_product-drop-the-bass-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c031_taunt1",
                      slug: "taunt_c031_taunt1",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Character_C031/C031/DataAssets/Taunts/Taunt_C031_Taunt1.Taunt_C031_Taunt1",
                        AssociatedCharacter: "C031",
                        DisplayName: "Drop the Bass",
                        DisplayNameLocalizationKey: "424D1F8B4FCFA1BEFAB896B9EDE08E02",
                        DisplayNameLocalizationNamespace: "[C296927445D48F246A1018B56C767B0F]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Character_C031/C031/UI/Emote_C031_Taunt1.Emote_C031_Taunt1",
                        RewardThumbnailMaterial:
                          "/Character_C031/C031/UI/MI_c031_Taunt1_Thumbnail.MI_c031_Taunt1_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c031",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "taunt",
                        "unlockable",
                      ],
                      id: "675874d45ca68abece294f5b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "drop-the-bass-account-cosmetics-store_gleamium",
                      name: "Drop the Bass gleamium",
                      description: {
                        localizations: {
                          "store_product-drop-the-bass-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-drop-the-bass-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "marceline-early-access",
                  name: "Marceline",
                  description: {
                    localizations: {
                      "store_product-marceline-early-access-description":
                        "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: false,
                  enabled: {
                    _hydra_StoreEnabed: [
                      {
                        start: { _hydra_unix_date: 1742265244 },
                        end: { _hydra_unix_date: 1742351644 },
                        rendered: false,
                      },
                    ],
                  },
                  has_active_sku: false,
                  valid_user_segments: true,
                  is_purchasable: false,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_C031",
                      slug: "character_C031",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Character_C031/C031/Char_C031.Char_C031",
                        AssociatedCharacter: "C031",
                        ContentLevel: 5,
                        DisplayName: "Marceline the Vampire Queen",
                        DisplayNameLocalizationKey: "0CB87D764B8838C1161DB881A84D8910",
                        DisplayNameLocalizationNamespace: "[A2FB2AE6404C2A99164754AB65CE8A7C]",
                        EnabledForShipping: true,
                        FighterClass: "Bruiser",
                        IsUnlockedByDefault: false,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Fixed:Marceline",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Bruiser",
                          ],
                          ParentTags: [
                            "TS:Fixed:Universe",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Class",
                          ],
                        },
                        MasteryRewardTrack: "mrt_mastery_c031",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Character_C031/C031/Skins/C031_placeholder_capture.C031_placeholder_capture",
                        RewardThumbnailMaterial:
                          "/Character_C031/C031/Skins/MI_C031_Skin_000_RewardThumbnailMaterial.MI_C031_Skin_000_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "character_c031",
                        "universe_adventure_time",
                        "character",
                        "unlockable",
                      ],
                      id: "669fd3df7d13e0649bcb92e3",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "marceline-early-access_character-unlock-ticket-currency",
                      name: "Marceline character-unlock-ticket-currency",
                      description: {
                        localizations: {
                          "store_product-marceline-early-access-description":
                            "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Character Unlock Ticket Currency",
                          slug: "character-unlock-ticket-currency",
                          type_class: "currency",
                          data: {},
                          description: "",
                          tags: ["currency", "character_ticket"],
                          id: "663288a2358a2a62107ca9c0",
                        },
                        quantity: 1,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: {
                        _hydra_StoreEnabed: [
                          {
                            start: { _hydra_unix_date: 1742265244 },
                            end: { _hydra_unix_date: 1742351644 },
                            rendered: false,
                          },
                        ],
                      },
                      is_available_for_purchase: false,
                      visual_data: [],
                      preferred: true,
                    },
                    {
                      sku: "marceline-early-access_gleamium",
                      name: "Marceline gleamium",
                      description: {
                        localizations: {
                          "store_product-marceline-early-access-description":
                            "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: {
                        _hydra_StoreEnabed: [
                          {
                            start: { _hydra_unix_date: 1742265244 },
                            end: { _hydra_unix_date: 1742351644 },
                            rendered: false,
                          },
                        ],
                      },
                      is_available_for_purchase: false,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-marceline-early-access-description":
                                  "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "ProductCTA",
                          type: "text",
                          type_options: {
                            text: { localizations: { "new-fighter-": "New Fighter!" } },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-marceline-early-access-tagline":
                                  "All hail the Vampire Queen!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "vampire-vibes-marcelines-sun-hat-backfill_gleamium_sale",
                name: "Vampire Vibes: Marceline’s Sun Hat gleamium sale",
                description: {
                  localizations: {
                    "store_product-vampire-vibes-marcelines-sun-hat-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 2640,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 4400,
                    already_owned_adjusted_cost: 4400,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "vampire-vibes-marcelines-sun-hat-backfill_gleamium",
                name: "Vampire Vibes: Marceline’s Sun Hat gleamium",
                description: {
                  localizations: {
                    "store_product-vampire-vibes-marcelines-sun-hat-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 4400,
                  already_owned_adjusted_cost: 4400,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-vampire-vibes-marcelines-sun-hat-backfill-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Marceline_MarcelinesSunHat_Bundle.png",
                          md5: "05d21c4709c95f6420895708869900a4",
                          file_size: 606955,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Marceline_MarcelinesSunHat_Bundle-3035643231633437303963393566363432303839353730383836393930306134.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Marceline_MarcelinesSunHat_Bundle-3035643231633437303963393566363432303839353730383836393930306134.png",
                          id: "67585fb6ea0618063cf45616",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "legendary-banner": "Legendary Banner" } },
                        { localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" } },
                        { localizations: { "epic-skin": "Epic Skin" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "adventure-time-": "Adventure Time™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Marceline_MarcelinesSunHat_Banner.png",
                        md5: "6f9c6778d0b8e11dc2500a30afcc0ca8",
                        file_size: 2273614,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Marceline_MarcelinesSunHat_Banner-3666396336373738643062386531316463323530306133306166636330636138.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Marceline_MarcelinesSunHat_Banner-3666396336373738643062386531316463323530306133306166636330636138.png",
                        id: "67585facabb833a82895a3a2",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "agent-smiths-source-code-gleamium-featured-backfill",
          name: {
            localizations: {
              "store_product-agent-smiths-source-code-gleamium-featured-backfill-name":
                "Agent Smith's Source Code",
            },
          },
          description: {
            localizations: {
              "store_product-agent-smiths-source-code-gleamium-featured-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "agent-smiths-source-code-gleamium-featured-backfill",
            name: {
              localizations: {
                "store_product-agent-smiths-source-code-gleamium-featured-backfill-name":
                  "Agent Smith's Source Code",
              },
            },
            description: {
              localizations: {
                "store_product-agent-smiths-source-code-gleamium-featured-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "agent-smith-fighter-road",
                  name: "Agent Smith",
                  description: {
                    localizations: {
                      "store_product-agent-smith-fighter-road-description":
                        "Smith is one of the deadliest Agents ever tasked with defending the Matrix. With his staggering speed, uncanny aim, and insatiable hunger for control he’s ready to make the Multiverse his playground.",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_c036",
                      slug: "character_c036",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: false,
                        AssetPath: "/Game/Character/C036/CharacterData_C036.CharacterData_C036",
                        ContentLevel: 5,
                        MasteryRewardTrack: "mrt_mastery_c036",
                        IsUnlockedByDefault: false,
                        AssociatedCharacter: "C036",
                        DisplayName: "Agent Smith",
                        DisplayNameLocalizationKey: "51FC69B14E8C4FD24376A1BB734B1F37",
                        DisplayNameLocalizationNamespace: "[60B6D7F5494510305204958C3908EC78]",
                        FighterClass: "Bruiser",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Character/C036/UI/FullPortrait_C036_S00.FullPortrait_C036_S00",
                        RewardThumbnailMaterial:
                          "/Game/Character/C036/UI/MI_C036_S00_RewardThumbnail.MI_C036_S00_RewardThumbnail",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Bruiser",
                            "TS:Fixed:Universe:Matrix",
                            "TS:Fixed:AgentSmith",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "character_c036",
                        "unlock_location_shop",
                        "universe_the_matrix",
                        "character",
                        "unlockable",
                      ],
                      id: "663c0f944b55072b1d7ec6e7",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "agent-smith-fighter-road_gleamium",
                      name: "Agent Smith gleamium",
                      description: {
                        localizations: {
                          "store_product-agent-smith-fighter-road-description":
                            "Smith is one of the deadliest Agents ever tasked with defending the Matrix. With his staggering speed, uncanny aim, and insatiable hunger for control he’s ready to make the Multiverse his playground.",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-agent-smith-fighter-road-description":
                                  "Smith is one of the deadliest Agents ever tasked with defending the Matrix. With his staggering speed, uncanny aim, and insatiable hunger for control he’s ready to make the Multiverse his playground.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "ProductCTA",
                          type: "text",
                          type_options: {
                            text: { localizations: { "released-season-1-": "Released Season 1!" } },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-agent-smith-fighter-road-tagline":
                                  "Programmed to defend the Matrix, what he became was something far more",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "cyber-smith-skin-store",
                  name: "Cyber-Smith",
                  description: {
                    localizations: { "store_product-cyber-smith-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c036_s01",
                      slug: "skin_c036_s01",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath: "/Game/Character/C036/Skins/S01/C036_Skin_01.C036_Skin_01",
                        AssociatedCharacter: "C036",
                        DisplayName: "Cyber-Smith Agent Smith",
                        DisplayNameLocalizationKey: "1E7192194A1EB82FCDC83CAC1CB5917E",
                        DisplayNameLocalizationNamespace: "",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Bruiser",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:Matrix",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:Metallic",
                            "TS:Dynamic:Tech",
                            "TS:Dynamic:SemiFormal",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic:Season",
                            "TS:Dynamic",
                          ],
                        },
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Character/Captures/C036/C036_C036_Skin_01.C036_C036_Skin_01",
                        RewardThumbnailMaterial:
                          "/Game/Character/C036/Skins/S01/MI_C036_Skin_01_RewardThumbnailMaterial.MI_C036_Skin_01_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c036",
                        "universe_the_matrix",
                        "skin",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107caa3a",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "cyber-smith-skin-store_gleamium",
                      name: "Cyber-Smith gleamium",
                      description: {
                        localizations: { "store_product-cyber-smith-skin-store-description": "" },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-cyber-smith-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { skin: "Skin" } },
                              { localizations: { "the-matrix-": "The Matrix™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "decompiled-account-cosmetic-store",
                  name: "Decompiled",
                  description: {
                    localizations: {
                      "store_product-decompiled-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "ring_out_vfx_decompiled",
                      slug: "ring_out_vfx_decompiled",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/RingOutVfx/ROV_Matrix_Decompiled.ROV_Matrix_Decompiled",
                        AssociatedCharacter: "C036",
                        DisplayName: "Decompiled",
                        DisplayNameLocalizationKey: "304E0E4246E7AFACC81BB1B172141494",
                        DisplayNameLocalizationNamespace: "[0FE2882B4F617C98F2D6C6888497A560]",
                        EnabledForShipping: true,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Ringouts/TheMatrix_Decompiled/RO_Matrix_Decompiled_Thumbnail.RO_Matrix_Decompiled_Thumbnail",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c036",
                        "unlock_location_shop",
                        "universe_the_matrix",
                        "ring_out_vfx",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107cabf0",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "decompiled-account-cosmetic-store_gleamium",
                      name: "Decompiled gleamium",
                      description: {
                        localizations: {
                          "store_product-decompiled-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-decompiled-account-cosmetic-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "epic-ringout": "Epic Ringout" } },
                              { localizations: { "matrix-": "Matrix™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "dance-of-the-spoons-account-cosmetic-store",
                  name: "Dance of the Spoons",
                  description: {
                    localizations: {
                      "store_product-dance-of-the-spoons-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c036_spoon",
                      slug: "taunt_c036_spoon",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/Game/Character/C036/DataAssets/Taunt/Taunt_C036_Spoons.Taunt_C036_Spoons",
                        AssociatedCharacter: "C036",
                        DisplayName: "Dance of the Spoons",
                        DisplayNameLocalizationKey: "DBCB9D85487948B458347F9CC6BFA700",
                        DisplayNameLocalizationNamespace: "[19A08AF345F7B1C3D47364A9386F209B]",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Character/C036/UI/Taunt_C036_Spoons.Taunt_C036_Spoons",
                        RewardThumbnailMaterial:
                          "/Game/Character/C036/UI/MI_C036_Emote_Spoons_Thumbnail.MI_C036_Emote_Spoons_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c036",
                        "unlock_location_shop",
                        "universe_the_matrix",
                        "taunt",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107caa40",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "dance-of-the-spoons-account-cosmetic-store_gleamium",
                      name: "Dance of the Spoons gleamium",
                      description: {
                        localizations: {
                          "store_product-dance-of-the-spoons-account-cosmetic-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-dance-of-the-spoons-account-cosmetic-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              {
                                localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" },
                              },
                              { localizations: { "matrix-": "Matrix™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "agent-smiths-source-code-gleamium-featured-backfill_gleamium_sale",
                name: "Agent Smith's Source Code gleamium sale",
                description: {
                  localizations: {
                    "store_product-agent-smiths-source-code-gleamium-featured-backfill-description":
                      "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 2000,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 4000,
                    already_owned_adjusted_cost: 4000,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "agent-smiths-source-code-gleamium-featured-backfill_gleamium",
                name: "Agent Smith's Source Code gleamium",
                description: {
                  localizations: {
                    "store_product-agent-smiths-source-code-gleamium-featured-backfill-description":
                      "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 4000,
                  already_owned_adjusted_cost: 4000,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-agent-smiths-source-code-gleamium-featured-backfill-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "agent_smiths_source_code_no_gleamium_bundle.png",
                          md5: "OVO5BGUssFmmDIftaFl03g==",
                          file_size: 435902,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/agent_smiths_source_code_no_gleamium_bundle-3339353362393034363532636230353961363063383765643638353937346465.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/agent_smiths_source_code_no_gleamium_bundle-3339353362393034363532636230353961363063383765643638353937346465.png",
                          id: "66c4b6c1b262b0b5a60e12f6",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" } },
                        { localizations: { "epic-ringout": "Epic Ringout" } },
                        { localizations: { "rare-skin": "Rare Skin" } },
                        { localizations: { "the-matrix-": "The Matrix™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "agent_smiths_source_code_no_gleamium_banner.png",
                        md5: "JTMUtf5VOcDqs6RcRP8WWg==",
                        file_size: 3812132,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/agent_smiths_source_code_no_gleamium_banner-3235333331346235666535353339633065616233613435633434666631363561.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/agent_smiths_source_code_no_gleamium_banner-3235333331346235666535353339633065616233613435633434666631363561.png",
                        id: "66c4b6c94ae4ca35a321d128",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "arya-stark-time-slicing-featured-backfill",
          name: {
            localizations: {
              "store_product-arya-stark-time-slicing-featured-backfill-name":
                "Arya Stark: Time-Slicing",
            },
          },
          description: {
            localizations: {
              "store_product-arya-stark-time-slicing-featured-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "arya-stark-time-slicing-featured-backfill",
            name: {
              localizations: {
                "store_product-arya-stark-time-slicing-featured-backfill-name":
                  "Arya Stark: Time-Slicing",
              },
            },
            description: {
              localizations: {
                "store_product-arya-stark-time-slicing-featured-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "slicer-arya-skin-store",
                  name: "Slicer Arya",
                  description: {
                    localizations: { "store_product-slicer-arya-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c006_s03",
                      slug: "skin_c006_s03",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: false,
                        AssetPath: "/Game/Panda_Main/Characters/Arya/Skins/S03/C006_S03.C006_S03",
                        AssociatedCharacter: "Arya",
                        DisplayName: "Slicer Arya",
                        DisplayNameLocalizationKey: "8F905E0B4AFE089158C1CCAB818FA2B2",
                        DisplayNameLocalizationNamespace: "[2B95187D4FCBC0EA881E7F95443D8985]",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:high",
                            "TS:Fixed:Class:Assassin",
                            "TS:Fixed:Universe:GameOfThrones",
                            "TS:Dynamic:20XXL",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Caped",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Fuzzy",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:PurpleClothing",
                            "TS:Dynamic:BlackClothing",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                          ],
                        },
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Character/Captures/Arya/Arya_C006_S03.Arya_C006_S03",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Arya/Skins/S03/MI_C006_S03_RewardThumbnail.MI_C006_S03_RewardThumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_arya",
                        "unlock_location_shop",
                        "universe_game_of_thrones",
                        "skin",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca934",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "slicer-arya-skin-store_gleamium",
                      name: "Slicer Arya gleamium",
                      description: {
                        localizations: { "store_product-slicer-arya-skin-store-description": "" },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 2000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-slicer-arya-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "legendary-skin": "Legendary Skin" } },
                              { localizations: { "game-of-thrones-": "Game of Thrones™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "arya-stark-fighter-road",
                  name: "Arya Stark",
                  description: {
                    localizations: {
                      "store_product-arya-stark-fighter-road-description":
                        "A highly mobile master of Water Dancing-based combos and deadly assassin of the highest order. Steal your enemy’s face to keep the rest of the battlefield on their toes.",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_arya",
                      slug: "character_arya",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Game/Panda_Main/Characters/Arya/character_C006.character_C006",
                        IsUnlockedByDefault: false,
                        ContentLevel: 1,
                        EnabledForShipping: true,
                        MasteryRewardTrack: "mrt_mastery_arya",
                        AssociatedCharacter: "Arya",
                        DisplayName: "Arya Stark",
                        DisplayNameLocalizationKey: "5586967B45993769CB31EEB75180A3ED",
                        DisplayNameLocalizationNamespace: "[9230ECAF48487D9497DFE298AC3C93EF]",
                        FighterClass: "Assassin",
                        Rarity: "None",
                        RewardThumbnail: "/Game/Character/Captures/Arya/Arya_C006.Arya_C006",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Arya/Skins/MI_C006_RewardThumbnail.MI_C006_RewardThumbnail",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Assassin",
                            "TS:Fixed:Universe:GameOfThrones",
                            "TS:Dynamic:Caped",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:PremieredInThe10s",
                            "TS:Dynamic:TvInspired",
                            "TS:Dynamic:Fuzzy",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:Human",
                            "TS:Fixed:FighterDifficulty:high",
                            "TS:Dynamic:Heroic",
                            "TS:Fixed:Arya",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Fixed:FighterDifficulty",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "character_arya",
                        "unlock_location_shop",
                        "universe_game_of_thrones",
                        "character",
                        "unlockable",
                      ],
                      id: "62cf30d0154cdf898c663291",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "arya-stark-fighter-road_gleamium",
                      name: "Arya Stark gleamium",
                      description: {
                        localizations: {
                          "store_product-arya-stark-fighter-road-description":
                            "A highly mobile master of Water Dancing-based combos and deadly assassin of the highest order. Steal your enemy’s face to keep the rest of the battlefield on their toes.",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-arya-stark-fighter-road-description":
                                  "A highly mobile master of Water Dancing-based combos and deadly assassin of the highest order. Steal your enemy’s face to keep the rest of the battlefield on their toes.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-arya-stark-fighter-road-tagline":
                                  "She rejected being a lady. What she became was something far deadlier.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "stark-slicing-in-account-cosmetic-store",
                  name: "Stark, Slicing In",
                  description: {
                    localizations: {
                      "store_product-stark-slicing-in-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profile_icon_c006_stark_slicing_in",
                      slug: "profile_icon_c006_stark_slicing_in",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/ProfileIcons/20240506_HBO_GOT_AryaStark_ProfileIcon_StarkSlicingIn.20240506_HBO_GOT_AryaStark_ProfileIcon_StarkSlicingIn",
                        AssociatedCharacter: "Arya",
                        DisplayName: "Stark, Slicing In",
                        DisplayNameLocalizationKey: "3CED5EF34D335EF5E1A9258DF67E1B5B",
                        DisplayNameLocalizationNamespace: "[104A85884C63BA04382C2D94D4ABD0B1]",
                        EnabledForShipping: false,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/Profile_Icons/20240506_HBO_GOT_AryaStark_ProfileIcon_StarkSlicingIn.20240506_HBO_GOT_AryaStark_ProfileIcon_StarkSlicingIn",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_arya",
                        "universe_game_of_thrones",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "669fd3df7d13e0649bcb9299",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "stark-slicing-in-account-cosmetic-store_gleamium",
                      name: "Stark, Slicing In gleamium",
                      description: {
                        localizations: {
                          "store_product-stark-slicing-in-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-stark-slicing-in-account-cosmetic-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              {
                                localizations: {
                                  "legendary-profile-icon": "Legendary Profile Icon",
                                },
                              },
                              { localizations: { "game-of-thrones-": "Game of Thrones™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "arya-ringouts-account-cosmetic-store",
                  name: "Arya Ringouts",
                  description: {
                    localizations: {
                      "store_product-arya-ringouts-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_arya_ringouts",
                      slug: "stat_tracking_bundle_arya_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/CharacterRingouts/StatTracking_AryaRingouts.StatTracking_AryaRingouts",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Arya",
                        DisplayName: "Arya Ringouts",
                        DisplayNameLocalizationKey: "DB863ADE412799E855DCC0B1737061B6",
                        DisplayNameLocalizationNamespace: "[5DD52FC24E251E54DDCE9991A9DDF147]",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/Arya/UI/UI_Stat_Arya_Ringouts_Badge.UI_Stat_Arya_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_arya",
                        "unlock_location_battlepass",
                        "universe_game_of_thrones",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be804",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "arya-ringouts-account-cosmetic-store_gleamium",
                      name: "Arya Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-arya-ringouts-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-arya-ringouts-account-cosmetic-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { badge: "Badge" } },
                              { localizations: { "game-of-thrones-": "Game of Thrones™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "system-crash-account-cosmetic-store",
                  name: "System Crash",
                  description: {
                    localizations: {
                      "store_product-system-crash-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "ring_out_vfx_cybercard",
                      slug: "ring_out_vfx_cybercard",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/RingOutVfx/ROV_CyberCard.ROV_CyberCard",
                        AssociatedCharacter: "Base",
                        DisplayName: "System Crash",
                        DisplayNameLocalizationKey: "B932E4AD41CE3FBAFB9E4F80BF2A402D",
                        DisplayNameLocalizationNamespace: "[B6CB1BEF4C44864B7E23C68281418774]",
                        EnabledForShipping: true,
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Ringouts/CyberCard/T_Cybercard_Thumbnail.T_Cybercard_Thumbnail",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: ["rarity_rare", "ring_out_vfx", "unlockable"],
                      id: "669fd3df7d13e0649bcb929c",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "system-crash-account-cosmetic-store_gleamium",
                      name: "System Crash gleamium",
                      description: {
                        localizations: {
                          "store_product-system-crash-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-system-crash-account-cosmetic-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { Value: [{ localizations: { "rare-ringout": "Rare Ringout" } }] },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "arya-stark-time-slicing-featured-backfill_gleamium_sale",
                name: "Arya Stark: Time-Slicing gleamium sale",
                description: {
                  localizations: {
                    "store_product-arya-stark-time-slicing-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1640,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 4100,
                    already_owned_adjusted_cost: 4100,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "arya-stark-time-slicing-featured-backfill_gleamium",
                name: "Arya Stark: Time-Slicing gleamium",
                description: {
                  localizations: {
                    "store_product-arya-stark-time-slicing-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 4100,
                  already_owned_adjusted_cost: 4100,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-arya-stark-time-slicing-featured-backfill-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "aryaStark_timeSlicing_bundle.png",
                          md5: "2ec4480b0ef4eea3b839d402d29185b8",
                          file_size: 653012,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/aryaStark_timeSlicing_bundle-3265633434383062306566346565613362383339643430326432393138356238.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/aryaStark_timeSlicing_bundle-3265633434383062306566346565613362383339643430326432393138356238.png",
                          id: "66956ff53309c5e713d46c9b",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-skin": "Legendary Skin" } },
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "rare-ringout": "Rare Ringout" } },
                        { localizations: { "game-of-thrones-": "Game of Thrones™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "aryaStark_timeSlicing_banner.png",
                        md5: "57586cd5bf63ba69797cdb5cff3ee9fa",
                        file_size: 4529343,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/aryaStark_timeSlicing_banner-3537353836636435626636336261363937393763646235636666336565396661.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/aryaStark_timeSlicing_banner-3537353836636435626636336261363937393763646235636666336565396661.png",
                        id: "66956fb5d3181762eaeda0b8",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "dr-finns-sugar-treatment-featured-backfill",
          name: {
            localizations: {
              "store_product-dr-finns-sugar-treatment-featured-backfill-name":
                "Dr. Finn's Sugar Treatment",
            },
          },
          description: {
            localizations: {
              "store_product-dr-finns-sugar-treatment-featured-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "dr-finns-sugar-treatment-featured-backfill",
            name: {
              localizations: {
                "store_product-dr-finns-sugar-treatment-featured-backfill-name":
                  "Dr. Finn's Sugar Treatment",
              },
            },
            description: {
              localizations: {
                "store_product-dr-finns-sugar-treatment-featured-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "dr-finn-skin-store",
                  name: "Dr-Finn",
                  description: {
                    localizations: { "store_product-dr-finn-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c013_s09",
                      slug: "skin_c013_s09",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Game/Panda_Main/Characters/Finn/Skins/S09/C013_S09.C013_S09",
                        AssociatedCharacter: "Finn",
                        DisplayName: "Dr. Finn",
                        DisplayNameLocalizationKey: "CEB7F5494923C5F7A2A26499752425F1",
                        DisplayNameLocalizationNamespace: "[6E290D344CC7F5FAD017D69D14B47EDF]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Low",
                            "TS:Fixed:Class:Assassin",
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Dynamic:Animated",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:PremieredInThe10s",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                          ],
                        },
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Character/Captures/Finn/Finn_C013_S09.Finn_C013_S09",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Finn/Skins/S09/MI_C013_S09_RewardThumbnailMaterial.MI_C013_S09_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_finn",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "skin",
                        "unlockable",
                      ],
                      id: "669fd3df7d13e0649bcb92a4",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "dr-finn-skin-store_gleamium",
                      name: "Dr-Finn gleamium",
                      description: {
                        localizations: { "store_product-dr-finn-skin-store-description": "" },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: { "store_product-dr-finn-skin-store-description": "" },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-skin": "Rare Skin" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "finn-the-human-fighter-road",
                  name: "Finn the Human",
                  description: {
                    localizations: {
                      "store_product-finn-the-human-fighter-road-description":
                        "Finn's bombastic sword skills will make short work of his opponents. The more hits he lands, the more coins he earns… and those coins can buy some pretty sweet power-ups.",
                    },
                  },
                  data: null,
                  already_owned: true,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_finn",
                      slug: "character_finn",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Game/Panda_Main/Characters/Finn/character_Finn.character_Finn",
                        IsUnlockedByDefault: false,
                        ContentLevel: 1,
                        EnabledForShipping: true,
                        MasteryRewardTrack: "mrt_mastery_finn",
                        AssociatedCharacter: "Finn",
                        DisplayName: "Finn",
                        DisplayNameLocalizationKey: "F065862640F8EEE2D08E1291D0728B72",
                        DisplayNameLocalizationNamespace: "[5BF2619F4AC0ACAD64D681A6F75FE253]",
                        FighterClass: "Assassin",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Character/Captures/Finn/Finn_Finn_S00.Finn_Finn_S00",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Finn/Skins/MI_Finn_S00_RewardThumbnailMaterial.MI_Finn_S00_RewardThumbnailMaterial",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Assassin",
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Dynamic:Animated",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredInThe10s",
                            "TS:Dynamic:TvInspired",
                            "TS:Dynamic:Human",
                            "TS:Fixed:FighterDifficulty:Low",
                            "TS:Dynamic:Heroic",
                            "TS:Fixed:Finn",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Fixed:FighterDifficulty",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "character_finn",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "character",
                        "unlockable",
                      ],
                      id: "62cf30d0154cdf898c6632c7",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-the-human-fighter-road_gleamium",
                      name: "Finn the Human gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-the-human-fighter-road-description":
                            "Finn's bombastic sword skills will make short work of his opponents. The more hits he lands, the more coins he earns… and those coins can buy some pretty sweet power-ups.",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-the-human-fighter-road-description":
                                  "Finn's bombastic sword skills will make short work of his opponents. The more hits he lands, the more coins he earns… and those coins can buy some pretty sweet power-ups.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-the-human-fighter-road-tagline":
                                  "He’ll slay anything that’s evil, that’s his deal!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "jelly-bean-account-cosmetics-store",
                  name: "Jelly Bean",
                  description: {
                    localizations: {
                      "store_product-jelly-bean-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "ring_out_vfx_jellybean",
                      slug: "ring_out_vfx_jellybean",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/RingOutVfx/ROV_JellyBean.ROV_JellyBean",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Jelly Bean",
                        DisplayNameLocalizationKey: "27F84BDB4662B6D1331DEAAE35631B97",
                        DisplayNameLocalizationNamespace: "[6AE14D59483B2A34B8A72A93A67C3236]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Ringouts/JellyBeans/RO_Jellybean_Thumbnail.RO_Jellybean_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/VFX_Ringouts/JellyBeans/MI_Flipbook_RO_Jellybean.MI_Flipbook_RO_Jellybean",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "ring_out_vfx",
                        "unlockable",
                      ],
                      id: "62cf30d0154cdf898c6632aa",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "jelly-bean-account-cosmetics-store_gleamium",
                      name: "Jelly Bean gleamium",
                      description: {
                        localizations: {
                          "store_product-jelly-bean-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-jelly-bean-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-ringout": "Rare Ringout" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "finn-happy-account-cosmetics-store",
                  name: "Finn - Happy",
                  description: {
                    localizations: {
                      "store_product-finn-happy-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_finn_happy",
                      slug: "emote_finn_happy",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/Finn/DataAssets/Emote_Finn_Happy.Emote_Finn_Happy",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Finn - Happy",
                        DisplayNameLocalizationKey: "B1D62E4F41C56A3FD5F4AE83562366F0",
                        DisplayNameLocalizationNamespace: "[35A6E07440179FCAD0D00DB594DA30C8]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/Finn/UI/2DEmote_Finn_Happy_Thumbnail.2DEmote_Finn_Happy_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Finn/UI/MI_Finn_Happy_Thumbnail.MI_Finn_Happy_Thumbnail",
                      },
                      description: "",
                      tags: ["rarity_rare", "universe_adventure_time", "emote", "unlockable"],
                      id: "62fa7c0804da60ea6d57cfcf",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-happy-account-cosmetics-store_gleamium",
                      name: "Finn - Happy gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-happy-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-happy-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "finn-ringouts-account-cosmetics-store",
                  name: "Finn Ringouts",
                  description: {
                    localizations: {
                      "store_product-finn-ringouts-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_finn_ringouts",
                      slug: "stat_tracking_bundle_finn_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/CharacterRingouts/StatTracking_FinnRingouts.StatTracking_FinnRingouts",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Finn",
                        DisplayName: "Finn Ringouts",
                        DisplayNameLocalizationKey: "15371469425381DDC0176DA8AEE18154",
                        DisplayNameLocalizationNamespace: "[70D9C7714FD5BCF6B8628190777AF7EF]",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Badges/UI_Stat_Finn_Ringouts_Badge.UI_Stat_Finn_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_finn",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be7f9",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-ringouts-account-cosmetics-store_gleamium",
                      name: "Finn Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-ringouts-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-ringouts-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { badge: "Badge" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "dr-finns-sugar-treatment-featured-backfill_gleamium_sale",
                name: "Dr. Finn's Sugar Treatment gleamium sale",
                description: {
                  localizations: {
                    "store_product-dr-finns-sugar-treatment-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 800,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2800,
                    already_owned_adjusted_cost: 1800,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "dr-finns-sugar-treatment-featured-backfill_gleamium",
                name: "Dr. Finn's Sugar Treatment gleamium",
                description: {
                  localizations: {
                    "store_product-dr-finns-sugar-treatment-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2800,
                  already_owned_adjusted_cost: 1800,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-dr-finns-sugar-treatment-featured-backfill-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Finn_DrFinnsSugarTreatment_Bundle.png",
                          md5: "h362oG2SXtnnWUHifZT43Q==",
                          file_size: 553846,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Finn_DrFinnsSugarTreatment_Bundle-3837376562366130366439323565643965373539343165323764393466386464.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Finn_DrFinnsSugarTreatment_Bundle-3837376562366130366439323565643965373539343165323764393466386464.png",
                          id: "66bb9f8aee54c97ac2b7145d",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "rare-skin": "Rare Skin" } },
                        { localizations: { "rare-ringout": "Rare Ringout" } },
                        { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "adventure-time-": "Adventure Time™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Finn_DrFinnsSugarTreatment_Banner.png",
                        md5: "rO8f6phLaInUt/PK+Fi6QA==",
                        file_size: 4783227,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Finn_DrFinnsSugarTreatment_Banner-6163656631666561393834623638383964346237663363616638353862613430.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Finn_DrFinnsSugarTreatment_Banner-6163656631666561393834623638383964346237663363616638353862613430.png",
                        id: "66bb9f946cb7decc61cd13f5",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "finns-nightmare-featured-backfill",
          name: {
            localizations: {
              "store_product-finns-nightmare-featured-backfill-name": "Finn's Nightmare",
            },
          },
          description: {
            localizations: { "store_product-finns-nightmare-featured-backfill-description": "" },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "finns-nightmare-featured-backfill",
            name: {
              localizations: {
                "store_product-finns-nightmare-featured-backfill-name": "Finn's Nightmare",
              },
            },
            description: {
              localizations: { "store_product-finns-nightmare-featured-backfill-description": "" },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "finn-jason-voorhees-skin-store",
                  name: "Finn Jason Voorhees",
                  description: {
                    localizations: {
                      "store_product-finn-jason-voorhees-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c035_s02",
                      slug: "skin_c035_s02",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Jason/Skins/S02/C035_S02.C035_S02",
                        AssociatedCharacter: "C035",
                        DisplayName: "Finn Jason Voorhees",
                        DisplayNameLocalizationKey: "1062DEC54A15C7552E02DD9901CAC5ED",
                        DisplayNameLocalizationNamespace: "[F466D7D34847573CEC1BC3A724F9D2BB]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Fixed:Universe:Fridaythe13th",
                            "TS:Dynamic:Crossover",
                            "TS:Dynamic:Halloween",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:RedWhiteandBlueClothing",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:SportsAttire",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Jason/Skins/S02/T_C035_S02.T_C035_S02",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Jason/Skins/S02/MI_C035_S02_RewardThumbnailMaterial.MI_C035_S02_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c035",
                        "unlock_location_shop",
                        "universe_friday_the13th",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec268400",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-jason-voorhees-skin-store_gleamium",
                      name: "Finn Jason Voorhees gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-jason-voorhees-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-jason-voorhees-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "lady-rainicorns-trail-account-cosmetics-store",
                  name: "Lady Rainicorn's Trail",
                  description: {
                    localizations: {
                      "store_product-lady-rainicorns-trail-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_lady_rainicorns_trail",
                      slug: "banner_lady_rainicorns_trail",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/LadyRainicornsTrail_Banner.LadyRainicornsTrail_Banner",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Lady Rainicorn's Trail",
                        DisplayNameLocalizationKey: "053BC1CE4DBFC402FAC794B47E5BE117",
                        DisplayNameLocalizationNamespace: "[5092002D4051FA90F678B7961F6C60A4]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/UI_Banner_LadyRainicorn_Thumbnail.UI_Banner_LadyRainicorn_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/UI_Banner_LadyRainicorn_Preview.UI_Banner_LadyRainicorn_Preview",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "banner",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be83b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "lady-rainicorns-trail-account-cosmetics-store_gleamium",
                      name: "Lady Rainicorn's Trail gleamium",
                      description: {
                        localizations: {
                          "store_product-lady-rainicorns-trail-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-lady-rainicorns-trail-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-banner": "Rare Banner" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "blade-of-grass-account-cosmetics-store",
                  name: "Blade of Grass",
                  description: {
                    localizations: {
                      "store_product-blade-of-grass-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "ring_out_vfx_blade_of_grass",
                      slug: "ring_out_vfx_blade_of_grass",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/RingOutVfx/ROV_BladeofGrass.ROV_BladeofGrass",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Finn",
                        DisplayName: "Blade of Grass",
                        DisplayNameLocalizationKey: "65B612744F6734ACED755F88C780D05C",
                        DisplayNameLocalizationNamespace: "[5FCA05D947B95DE78DD43794DC166F9D]",
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Ringouts/AdventureTime_BladeofGrass/RO_BladeGrass_Thumbnail.RO_BladeGrass_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/VFX_Ringouts/AdventureTime_BladeofGrass/MI_Flipbook_RO_BladeGrass.MI_Flipbook_RO_BladeGrass",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_finn",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "ring_out_vfx",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be835",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "blade-of-grass-account-cosmetics-store_gleamium",
                      name: "Blade of Grass gleamium",
                      description: {
                        localizations: {
                          "store_product-blade-of-grass-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-blade-of-grass-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "epic-ringout": "Epic Ringout" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "finn-happy-account-cosmetics-store",
                  name: "Finn - Happy",
                  description: {
                    localizations: {
                      "store_product-finn-happy-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_finn_happy",
                      slug: "emote_finn_happy",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/Finn/DataAssets/Emote_Finn_Happy.Emote_Finn_Happy",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Finn - Happy",
                        DisplayNameLocalizationKey: "B1D62E4F41C56A3FD5F4AE83562366F0",
                        DisplayNameLocalizationNamespace: "[35A6E07440179FCAD0D00DB594DA30C8]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/Finn/UI/2DEmote_Finn_Happy_Thumbnail.2DEmote_Finn_Happy_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Finn/UI/MI_Finn_Happy_Thumbnail.MI_Finn_Happy_Thumbnail",
                      },
                      description: "",
                      tags: ["rarity_rare", "universe_adventure_time", "emote", "unlockable"],
                      id: "62fa7c0804da60ea6d57cfcf",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-happy-account-cosmetics-store_gleamium",
                      name: "Finn - Happy gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-happy-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-happy-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "finns-nightmare-featured-backfill_gleamium_sale",
                name: "Finn's Nightmare gleamium sale",
                description: {
                  localizations: {
                    "store_product-finns-nightmare-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1340,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3000,
                    already_owned_adjusted_cost: 3000,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "finns-nightmare-featured-backfill_gleamium",
                name: "Finn's Nightmare gleamium",
                description: {
                  localizations: {
                    "store_product-finns-nightmare-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3000,
                  already_owned_adjusted_cost: 3000,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-finns-nightmare-featured-backfill-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "FinnsNightmare_Bundle.png",
                          md5: "0d70808557a769b8e38e583678043317",
                          file_size: 408295,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/FinnsNightmare_Bundle-3064373038303835353761373639623865333865353833363738303433333137.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FinnsNightmare_Bundle-3064373038303835353761373639623865333865353833363738303433333137.png",
                          id: "671fea943483146569e71d7b",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "epic-skin": "Epic Skin" } },
                        { localizations: { "rare-banner": "Rare Banner" } },
                        { localizations: { "epic-ringout": "Epic Ringout" } },
                        { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                        { localizations: { "adventure-time-": "Adventure Time™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "FinnsNightmare_Banner.png",
                        md5: "6e02e9ead421d9bb2109978d8b28538e",
                        file_size: 2071114,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/FinnsNightmare_Banner-3665303265396561643432316439626232313039393738643862323835333865.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FinnsNightmare_Banner-3665303265396561643432316439626232313039393738643862323835333865.png",
                        id: "671fea88568660549a8cfe65",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "fallen-superman-trigons-pawn-featured-backfill",
          name: {
            localizations: {
              "store_product-fallen-superman-trigons-pawn-featured-backfill-name":
                "Trigon’s Pawn, Superman",
            },
          },
          description: {
            localizations: {
              "store_product-fallen-superman-trigons-pawn-featured-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "fallen-superman-trigons-pawn-featured-backfill",
            name: {
              localizations: {
                "store_product-fallen-superman-trigons-pawn-featured-backfill-name":
                  "Trigon’s Pawn, Superman",
              },
            },
            description: {
              localizations: {
                "store_product-fallen-superman-trigons-pawn-featured-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "trigon-possessed-superman-skin-store",
                  name: "Trigon Possessed Superman",
                  description: {
                    localizations: {
                      "store_product-trigon-possessed-superman-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c003_s23",
                      slug: "skin_c003_s23",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason04/Character/C003/Skins/C003_S23.C003_S23",
                        AssociatedCharacter: "Superman",
                        DisplayName: "Trigon Possessed Superman",
                        DisplayNameLocalizationKey: "4ED7E7964AF264A1C78FE494EDE220F6",
                        DisplayNameLocalizationNamespace: "[7B1AEAED4BB3F8F07AEEB49B26257547]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:Universe:DC",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Dynamic:Azarath",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Caped",
                            "TS:Dynamic:FourEyes",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:MovieInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:ExtraTerrestrial",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:YellowClothing",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Character/C003/Skins/S23/T_C003_S23.T_C003_S23",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Character/C003/Skins/MI_C003_S23_RewardThumbnailMaterial.MI_C003_S23_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_superman",
                        "unlock_location_shop",
                        "universe_dc",
                        "skin",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4df",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "trigon-possessed-superman-skin-store_gleamium",
                      name: "Trigon Possessed Superman gleamium",
                      description: {
                        localizations: {
                          "store_product-trigon-possessed-superman-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 2000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-trigon-possessed-superman-skin-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "dad-throwin-horns-account-cosmetics-store",
                  name: "Dad Throwin’ Horns",
                  description: {
                    localizations: {
                      "store_product-dad-throwin-horns-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_rock_on",
                      slug: "emote_rock_on",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/Stickers/Rock_On/Emote_Rock_On.Emote_Rock_On",
                        AssociatedCharacter: "C025",
                        DisplayName: "Dad Throwin’ Horns",
                        DisplayNameLocalizationKey: "B9D4181B4875DC4B6A07B6A7087189AC",
                        DisplayNameLocalizationNamespace: "[EF22301D457B3988B02824B13DC7242E]",
                        EnabledForShipping: true,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/Stickers/Rock_On/T_Rock_On_Thumbnail.T_Rock_On_Thumbnail",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Cosmetics/Stickers/Rock_On/MI_Rock_On_Thumbnail.MI_Rock_On_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c025",
                        "unlock_location_battlepass",
                        "universe_dc",
                        "emote",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c50f",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "dad-throwin-horns-account-cosmetics-store_gleamium",
                      name: "Dad Throwin’ Horns gleamium",
                      description: {
                        localizations: {
                          "store_product-dad-throwin-horns-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 250,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-dad-throwin-horns-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "bad-dad-account-cosmetics-store",
                  name: "Bad Dad",
                  description: {
                    localizations: {
                      "store_product-bad-dad-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profileicon_baddad",
                      slug: "profileicon_baddad",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/ProfileIcons/DataAsset/20241023_DC_SM_Superman_ProfileIcon_BadDad.20241023_DC_SM_Superman_ProfileIcon_BadDad",
                        AssociatedCharacter: "Superman",
                        DisplayName: "Bad Dad",
                        DisplayNameLocalizationKey: "1F5FFABF41F7CAC648CE48BAEFDB7E08",
                        DisplayNameLocalizationNamespace: "[7EA7882246A67763C9F3F2B268EE9380]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/ProfileIcons/Texture/20241023_DC_SM_Superman_ProfileIcon_BadDad.20241023_DC_SM_Superman_ProfileIcon_BadDad",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_superman",
                        "unlock_location_shop",
                        "universe_dc",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c505",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "bad-dad-account-cosmetics-store_gleamium",
                      name: "Bad Dad gleamium",
                      description: {
                        localizations: {
                          "store_product-bad-dad-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-bad-dad-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "family-reunion-account-cosmetics-store",
                  name: "Family Reunion",
                  description: {
                    localizations: {
                      "store_product-family-reunion-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_trigon_1",
                      slug: "banner_trigon_1",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/Banners/FamilyReunion/Banner_FamilyReunion.Banner_FamilyReunion",
                        AssociatedCharacter: "C025",
                        DisplayName: "Family Reunion",
                        DisplayNameLocalizationKey: "48C2C25F48E3D18F82874D9D7C3BB370",
                        DisplayNameLocalizationNamespace: "[458BCA8E4C4AAA363A1D598A94DA3C95]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/Banners/FamilyReunion/UI_Banner_FamilyReunion_Thumbnail.UI_Banner_FamilyReunion_Thumbnail",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Cosmetics/Banners/FamilyReunion/MI_Banner_FamilyReunion_Preview.MI_Banner_FamilyReunion_Preview",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c025",
                        "universe_dc",
                        "banner",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c520",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "family-reunion-account-cosmetics-store_gleamium",
                      name: "Family Reunion gleamium",
                      description: {
                        localizations: {
                          "store_product-family-reunion-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 600,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-family-reunion-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "fallen-superman-trigons-pawn-featured-backfill_gleamium_sale",
                name: "Trigon’s Pawn, Superman gleamium sale",
                description: {
                  localizations: {
                    "store_product-fallen-superman-trigons-pawn-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1370,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3050,
                    already_owned_adjusted_cost: 3050,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "fallen-superman-trigons-pawn-featured-backfill_gleamium",
                name: "Trigon’s Pawn, Superman gleamium",
                description: {
                  localizations: {
                    "store_product-fallen-superman-trigons-pawn-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3050,
                  already_owned_adjusted_cost: 3050,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-fallen-superman-trigons-pawn-featured-backfill-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Superman_FallenSupermanTrigonsPawn_Bundle.png",
                          md5: "a3cf90ec0701d5065748d4fbfbb97adc",
                          file_size: 449231,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Superman_FallenSupermanTrigonsPawn_Bundle-6133636639306563303730316435303635373438643466626662623937616463.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Superman_FallenSupermanTrigonsPawn_Bundle-6133636639306563303730316435303635373438643466626662623937616463.png",
                          id: "675862ce92a38b7e9f809f5b",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-skin": "Legendary Skin" } },
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "epic-sticker-emote": "Epic Sticker Emote" } },
                        { localizations: { "legendary-banner": "Legendary Banner" } },
                        { localizations: { "dc-": "DC™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Superman_FallenSupermanTrigonsPawn_Banner.png",
                        md5: "21d9910996d7a2cc7f834140a40414b7",
                        file_size: 1968632,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Superman_FallenSupermanTrigonsPawn_Banner-3231643939313039393664376132636337663833343134306134303431346237.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Superman_FallenSupermanTrigonsPawn_Banner-3231643939313039393664376132636337663833343134306134303431346237.png",
                        id: "675862d7a5490ca79c1cb43c",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "waynes-school-of-justice-featured-backfill",
          name: {
            localizations: {
              "store_product-waynes-school-of-justice-featured-backfill-name":
                "Wayne's School of Justice",
            },
          },
          description: {
            localizations: {
              "store_product-waynes-school-of-justice-featured-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "waynes-school-of-justice-featured-backfill",
            name: {
              localizations: {
                "store_product-waynes-school-of-justice-featured-backfill-name":
                  "Wayne's School of Justice",
              },
            },
            description: {
              localizations: {
                "store_product-waynes-school-of-justice-featured-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "headmaster-wayne-skin-store",
                  name: "Headmaster Wayne",
                  description: {
                    localizations: { "store_product-headmaster-wayne-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c004_s23",
                      slug: "skin_c004_s23",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason04/Character/C004/Skins/S23/C004_S23.C004_S23",
                        AssociatedCharacter: "Batman",
                        DisplayName: "Headmaster Wayne",
                        DisplayNameLocalizationKey: "DAA2916E48C94AC6A5B6739D04861ABF",
                        DisplayNameLocalizationNamespace: "[90B37F854AC340D30895F297475C9070]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Bruiser",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:MythicVista",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Caped",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Rich",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:SemiFormal",
                            "TS:Dynamic:Detective",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                          ],
                        },
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Character/C004/Skins/S23/T_C004_S23.T_C004_S23",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Character/C004/Skins/S23/MI_C004_S23_RewardThumbnailMaterial.MI_C004_S23_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_batman",
                        "universe_dc",
                        "skin",
                        "unlockable",
                      ],
                      id: "670e92120e3027823c1d34bb",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "headmaster-wayne-skin-store_gleamium",
                      name: "Headmaster Wayne gleamium",
                      description: {
                        localizations: {
                          "store_product-headmaster-wayne-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 2000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-headmaster-wayne-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "headmasters-might-account-cosmetics-store",
                  name: "Headmaster's Might",
                  description: {
                    localizations: {
                      "store_product-headmasters-might-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profile_icon_headmastersmight",
                      slug: "profile_icon_headmastersmight",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/ProfileIcons/DataAsset/20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight.20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight",
                        AssociatedCharacter: "Base",
                        DisplayName: "Headmaster's Might",
                        DisplayNameLocalizationKey: "5B0FAEB943A663E8657FAF986BEDD083",
                        DisplayNameLocalizationNamespace: "[254853654B885D984915DE994A1F92A7]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/ProfileIcons/Texture/20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight.20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "unlock_location_shop",
                        "universe_dc",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4aa",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "headmasters-might-account-cosmetics-store_gleamium",
                      name: "Headmaster's Might gleamium",
                      description: {
                        localizations: {
                          "store_product-headmasters-might-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-headmasters-might-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "batman-ringouts-account-cosmetics-store",
                  name: "Batman Ringouts",
                  description: {
                    localizations: {
                      "store_product-batman-ringouts-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_batman_ringouts",
                      slug: "stat_tracking_bundle_batman_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/CharacterRingouts/StatTracking_BatmanRingouts.StatTracking_BatmanRingouts",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Batman",
                        DisplayName: "Batman Ringouts",
                        DisplayNameLocalizationKey: "C17B9CD14371E142F7C2D0A0C88169A4",
                        DisplayNameLocalizationNamespace: "[F2180BE9405986F5AC645FB311FB6F96]",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/BatmanV2/UI/UI_Stat_Batman_Ringouts_Badge.UI_Stat_Batman_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_batman",
                        "unlock_location_shop",
                        "universe_dc",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be803",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "batman-ringouts-account-cosmetics-store_gleamium",
                      name: "Batman Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-batman-ringouts-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-batman-ringouts-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { badge: "Badge" } },
                              { localizations: { "dc-": "DC™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "first-try-account-cosmetic-store",
                  name: "First Try",
                  description: {
                    localizations: {
                      "store_product-first-try-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: true,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_batman_firsttry",
                      slug: "emote_batman_firsttry",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/BatmanV2/DataAssets/Emote_Batman_FirstTry.Emote_Batman_FirstTry",
                        AssociatedCharacter: "Batman",
                        DisplayName: "First Try",
                        DisplayNameLocalizationKey: "52ABF32D4CB89B70DD3F7088C3A06133",
                        DisplayNameLocalizationNamespace: "[096828D34B99D6A7004840AD7614FC51]",
                        EnabledForShipping: true,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Emotes/Batman_FirstTry/T_Batman_FirstTry_Thumbnail.T_Batman_FirstTry_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/VFX_Emotes/Batman_FirstTry/MI_Batman_FirstTry_Thumbnail.MI_Batman_FirstTry_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_batman",
                        "unlock_location_shop",
                        "universe_dc",
                        "emote",
                        "unlockable",
                      ],
                      id: "668425a9a81dece5374b854b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "first-try-account-cosmetic-store_gleamium",
                      name: "First Try gleamium",
                      description: {
                        localizations: {
                          "store_product-first-try-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 250,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-first-try-account-cosmetic-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "utility-belt-account-cosmetics-store",
                  name: "Utility Belt",
                  description: {
                    localizations: {
                      "store_product-utility-belt-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_batman_utility_belt",
                      slug: "taunt_batman_utility_belt",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/BatmanV2/DataAssets/Taunts/Taunt_Batman_UtilityBelt.Taunt_Batman_UtilityBelt",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Batman",
                        DisplayName: "Utility Belt",
                        DisplayNameLocalizationKey: "FF75854D45455321DEB9518A589F0956",
                        DisplayNameLocalizationNamespace: "[992AE3B34721907847E397A9A306D27A]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/BatmanV2/UI/Emote_Batman_UtilityBelt.Emote_Batman_UtilityBelt",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/BatmanV2/UI/M_Batman_Emote_UtilityBelt_Thumbnail.M_Batman_Emote_UtilityBelt_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_batman",
                        "unlock_location_shop",
                        "universe_dc",
                        "taunt",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be851",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "utility-belt-account-cosmetics-store_gleamium",
                      name: "Utility Belt gleamium",
                      description: {
                        localizations: {
                          "store_product-utility-belt-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 350,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-utility-belt-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                              { localizations: { "dc-": "DC™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "waynes-school-of-justice-featured-backfill_gleamium_sale",
                name: "Wayne's School of Justice gleamium sale",
                description: {
                  localizations: {
                    "store_product-waynes-school-of-justice-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1190,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2900,
                    already_owned_adjusted_cost: 2650,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "waynes-school-of-justice-featured-backfill_gleamium",
                name: "Wayne's School of Justice gleamium",
                description: {
                  localizations: {
                    "store_product-waynes-school-of-justice-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2900,
                  already_owned_adjusted_cost: 2650,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-waynes-school-of-justice-featured-backfill-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Batman_WaynesSchoolofJustice_Bundle.png",
                          md5: "c158680f3f363f65cae6125644b4b6e7",
                          file_size: 524646,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Batman_WaynesSchoolofJustice_Bundle-6331353836383066336633363366363563616536313235363434623462366537.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Batman_WaynesSchoolofJustice_Bundle-6331353836383066336633363366363563616536313235363434623462366537.png",
                          id: "6732b97eae0074a3a50c8e56",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-skin": "Legendary Skin" } },
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "epic-sticker-emote": "Epic Sticker Emote" } },
                        { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "dc-": "DC™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Batman_WaynesSchoolofJustice_Banner.png",
                        md5: "e531381688899592e489936f2841f8ed",
                        file_size: 2020705,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Batman_WaynesSchoolofJustice_Banner-6535333133383136383838393935393265343839393336663238343166386564.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Batman_WaynesSchoolofJustice_Banner-6535333133383136383838393935393265343839393336663238343166386564.png",
                        id: "6732b96b1c270b273b2b21a3",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "is-she-a-real-vampire-featured-backfill",
          name: {
            localizations: {
              "store_product-is-she-a-real-vampire-featured-backfill-name":
                "Is she a real Vampire?",
            },
          },
          description: {
            localizations: {
              "store_product-is-she-a-real-vampire-featured-backfill-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "is-she-a-real-vampire-featured-backfill",
            name: {
              localizations: {
                "store_product-is-she-a-real-vampire-featured-backfill-name":
                  "Is she a real Vampire?",
              },
            },
            description: {
              localizations: {
                "store_product-is-she-a-real-vampire-featured-backfill-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "ugly-sweater-velma-skin-store",
                  name: "Ugly Sweater Velma",
                  description: {
                    localizations: {
                      "store_product-ugly-sweater-velma-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c014_s04",
                      slug: "skin_c014_s04",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Game/Panda_Main/Characters/Velma/Skins/S04/C014_S04.C014_S04",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Velma",
                        DisplayName: "Ugly Sweater Velma",
                        DisplayNameLocalizationKey: "C757B0994C9879A947C120BC79E26CBB",
                        DisplayNameLocalizationNamespace: "[A3CFA5ED4420D4F89D516EA7616F177B]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Character/Captures/Velma/Velma_C014_S04.Velma_C014_S04",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Velma/Skins/S04/MI_C014_S04_RewardThumbnail.MI_C014_S04_RewardThumbnail",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Mage",
                            "TS:Fixed:Universe:ScoobyDoo",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Dynamic:Festiversus",
                            "TS:Dynamic:Animated",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:ComfyCozy",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:YellowClothing",
                            "TS:Dynamic:GreenClothing",
                            "TS:Dynamic:Detective",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Dynamic",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_velma",
                        "unlock_location_shop",
                        "universe_scooby_doo",
                        "skin",
                        "unlockable",
                      ],
                      id: "639a01cabc82c1262af550a1",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "ugly-sweater-velma-skin-store_gleamium",
                      name: "Ugly Sweater Velma gleamium",
                      description: {
                        localizations: {
                          "store_product-ugly-sweater-velma-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-ugly-sweater-velma-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-skin": "Rare Skin" } },
                              { localizations: { "scooby-doo-": "Scooby-Doo™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "cat-sweater-ugly-sweater-skin-store",
                  name: "Cat Sweater - Ugly Sweater",
                  description: {
                    localizations: {
                      "store_product-cat-sweater-ugly-sweater-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "c031_s03",
                      slug: "c031_s03",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Character_C031/C031/Skins/S03/C031_S03.C031_S03",
                        AssociatedCharacter: "C031",
                        DisplayName: "Cat Sweater Marceline",
                        DisplayNameLocalizationKey: "DBABF83B4E1E9D2DCF7D2EB8DE4891AF",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Dynamic:Festiversus",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Animated",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:PremieredInThe10s",
                            "TS:Dynamic:TvInspired",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:ComfyCozy",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:PurpleClothing",
                            "TS:Dynamic:Undead",
                            "TS:Fixed:Class:Bruiser",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Fixed:Class",
                          ],
                        },
                        Rarity: "Rare",
                        RewardThumbnail: "/Character_C031/C031/Skins/S03/T_C031_S03.T_C031_S03",
                        RewardThumbnailMaterial:
                          "/Character_C031/C031/Skins/S03/MI_C031_S03_RewardThumbnailMaterial.MI_C031_S03_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c031",
                        "universe_adventure_time",
                        "skin",
                        "unlockable",
                      ],
                      id: "675874d45ca68abece294f47",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "cat-sweater-ugly-sweater-skin-store_gleamium",
                      name: "Cat Sweater - Ugly Sweater gleamium",
                      description: {
                        localizations: {
                          "store_product-cat-sweater-ugly-sweater-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-cat-sweater-ugly-sweater-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "meow-ple-tree-account-cosmetics-store",
                  name: "Meow-ple Tree",
                  description: {
                    localizations: {
                      "store_product-meow-ple-tree-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_hide_and_seek_kitty",
                      slug: "banner_hide_and_seek_kitty",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/MvsSeason04/Cosmetics/Banners/HideAndSeekKitty/Banner_HideandSeekKitty.Banner_HideandSeekKitty",
                        AssociatedCharacter: "Base",
                        DisplayName: "Meow-ple Tree",
                        DisplayNameLocalizationKey: "5BDAB8A74282DC42E9764086E2A4E6D7",
                        DisplayNameLocalizationNamespace: "",
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/Banners/HideAndSeekKitty/UI_Banner_HideAndSeekKitty_Thumbnail.UI_Banner_HideAndSeekKitty_Thumbnail",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Cosmetics/Banners/HideAndSeekKitty/MI_Banner_HideAndSeekKitty_Preview.MI_Banner_HideAndSeekKitty_Preview",
                      },
                      description: "",
                      tags: ["rarity_epic", "banner", "unlockable"],
                      id: "663288a2358a2a62107ca887",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "meow-ple-tree-account-cosmetics-store_gleamium",
                      name: "Meow-ple Tree gleamium",
                      description: {
                        localizations: {
                          "store_product-meow-ple-tree-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 350,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-meow-ple-tree-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "festiversus-snooze-account-cosmetics-store",
                  name: "FestiVersus Snooze",
                  description: {
                    localizations: {
                      "store_product-festiversus-snooze-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profile_icon_ugly1",
                      slug: "profile_icon_ugly1",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/ProfileIcons/DataAsset/20241111_PFG_MVS_ProfileIcon_FestiversusSnooze.20241111_PFG_MVS_ProfileIcon_FestiversusSnooze",
                        AssociatedCharacter: "ReinDog",
                        DisplayName: "FestiVersus Snooze",
                        DisplayNameLocalizationKey: "DC19FE644E568BACE6F2F890CF8557A4",
                        DisplayNameLocalizationNamespace: "[E27B7C944F30F6560C6CEB94D26C2723]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/ProfileIcons/Texture/20241111_PFG_MVS_ProfileIcon_FestiversusSnooze.20241111_PFG_MVS_ProfileIcon_FestiversusSnooze",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_rein_dog",
                        "unlock_location_shop",
                        "universe_pfg",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "675874d45ca68abece294f57",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "festiversus-snooze-account-cosmetics-store_gleamium",
                      name: "FestiVersus Snooze gleamium",
                      description: {
                        localizations: {
                          "store_product-festiversus-snooze-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-festiversus-snooze-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "whatcha-get-account-cosmetics-store",
                  name: "Whatcha Get??",
                  description: {
                    localizations: {
                      "store_product-whatcha-get-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_gift",
                      slug: "emote_gift",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason04/Cosmetics/Stickers/Gift/Emote_Gift.Emote_Gift",
                        AssociatedCharacter: "Base",
                        DisplayName: "Whatcha Get??",
                        DisplayNameLocalizationKey: "30E771774F9348764940EFA48B71E59E",
                        DisplayNameLocalizationNamespace: "[F3C530A1440E75873347DEAC4309E2A9]",
                        EnabledForShipping: true,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/Stickers/Gift/T_Gift_Thumbnail.T_Gift_Thumbnail",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Cosmetics/Stickers/Gift/MI_Gift_Thumbnail.MI_Gift_Thumbnail",
                      },
                      description: "",
                      tags: ["rarity_epic", "unlock_location_battlepass", "emote", "unlockable"],
                      id: "675874d45ca68abece294f48",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "whatcha-get-account-cosmetics-store_gleamium",
                      name: "Whatcha Get?? gleamium",
                      description: {
                        localizations: {
                          "store_product-whatcha-get-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 250,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-whatcha-get-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "is-she-a-real-vampire-featured-backfill_gleamium_sale",
                name: "Is she a real Vampire? gleamium sale",
                description: {
                  localizations: {
                    "store_product-is-she-a-real-vampire-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1200,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2400,
                    already_owned_adjusted_cost: 2400,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "is-she-a-real-vampire-featured-backfill_gleamium",
                name: "Is she a real Vampire? gleamium",
                description: {
                  localizations: {
                    "store_product-is-she-a-real-vampire-featured-backfill-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2400,
                  already_owned_adjusted_cost: 2400,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-is-she-a-real-vampire-featured-backfill-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "IsSheaRealVampire_Bundle.png",
                          md5: "b18295611e27f29f523516c6cd561e50",
                          file_size: 424656,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/IsSheaRealVampire_Bundle-6231383239353631316532376632396635323335313663366364353631653530.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/IsSheaRealVampire_Bundle-6231383239353631316532376632396635323335313663366364353631653530.png",
                          id: "67585eef11fc78945109a8b4",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "rare-skin": "Rare Skin" } },
                        { localizations: { "epic-banner": "Epic Banner" } },
                        { localizations: { "epic-sticker-emote": "Epic Sticker Emote" } },
                        { localizations: { "scooby-doo-": "Scooby-Doo™" } },
                        { localizations: { "adventure-time-": "Adventure Time™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "IsSheaRealVampire_Banner.png",
                        md5: "309a4121e546cb6d75cccb5b04d1dc1e",
                        file_size: 1784315,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/IsSheaRealVampire_Banner-3330396134313231653534366362366437356363636235623034643164633165.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/IsSheaRealVampire_Banner-3330396134313231653534366362366437356363636235623034643164633165.png",
                        id: "67585ee52b3fc2aa987f31cd",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
      ],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "IconTexturePath",
              type: "ingame_asset",
              type_options: {
                area_of_focus: {
                  center_point_x: 0.5,
                  center_point_y: 0.5,
                  width: { _hydra_double: 1 },
                  height: { _hydra_double: 1 },
                  scale: { _hydra_double: 1 },
                },
                ingame_path:
                  "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/ui_icons_featured.ui_icons_featured'",
              },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "FeaturedArea",
              type: "data_only",
              type_options: {},
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
              data: { FeaturedArea: true },
            },
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "554" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "260" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "MaxNumColumns",
              type: "text",
              type_options: { text: "8" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: 4,
    },
    {
      slug: "popular-variant-1",
      template_slug: "popular-variant-1",
      name: { localizations: { "layout_area-popular-variant-1-name": "For You" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "dynamic_linear",
      enabled: true,
      items: [
        {
          slug: "finns-nightmare-personalized-fighter-affinity",
          name: {
            localizations: {
              "store_product-finns-nightmare-personalized-fighter-affinity-name":
                "Finn's Nightmare",
            },
          },
          description: {
            localizations: {
              "store_product-finns-nightmare-personalized-fighter-affinity-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "finns-nightmare-personalized-fighter-affinity",
            name: {
              localizations: {
                "store_product-finns-nightmare-personalized-fighter-affinity-name":
                  "Finn's Nightmare",
              },
            },
            description: {
              localizations: {
                "store_product-finns-nightmare-personalized-fighter-affinity-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "finn-jason-voorhees-skin-store",
                  name: "Finn Jason Voorhees",
                  description: {
                    localizations: {
                      "store_product-finn-jason-voorhees-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c035_s02",
                      slug: "skin_c035_s02",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Jason/Skins/S02/C035_S02.C035_S02",
                        AssociatedCharacter: "C035",
                        DisplayName: "Finn Jason Voorhees",
                        DisplayNameLocalizationKey: "1062DEC54A15C7552E02DD9901CAC5ED",
                        DisplayNameLocalizationNamespace: "[F466D7D34847573CEC1BC3A724F9D2BB]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Fixed:Universe:Fridaythe13th",
                            "TS:Dynamic:Crossover",
                            "TS:Dynamic:Halloween",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:RedWhiteandBlueClothing",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:SportsAttire",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Jason/Skins/S02/T_C035_S02.T_C035_S02",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Jason/Skins/S02/MI_C035_S02_RewardThumbnailMaterial.MI_C035_S02_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c035",
                        "unlock_location_shop",
                        "universe_friday_the13th",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec268400",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-jason-voorhees-skin-store_gleamium",
                      name: "Finn Jason Voorhees gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-jason-voorhees-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-jason-voorhees-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "lady-rainicorns-trail-account-cosmetics-store",
                  name: "Lady Rainicorn's Trail",
                  description: {
                    localizations: {
                      "store_product-lady-rainicorns-trail-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_lady_rainicorns_trail",
                      slug: "banner_lady_rainicorns_trail",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/LadyRainicornsTrail_Banner.LadyRainicornsTrail_Banner",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Lady Rainicorn's Trail",
                        DisplayNameLocalizationKey: "053BC1CE4DBFC402FAC794B47E5BE117",
                        DisplayNameLocalizationNamespace: "[5092002D4051FA90F678B7961F6C60A4]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/UI_Banner_LadyRainicorn_Thumbnail.UI_Banner_LadyRainicorn_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/UI_Banner_LadyRainicorn_Preview.UI_Banner_LadyRainicorn_Preview",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "banner",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be83b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "lady-rainicorns-trail-account-cosmetics-store_gleamium",
                      name: "Lady Rainicorn's Trail gleamium",
                      description: {
                        localizations: {
                          "store_product-lady-rainicorns-trail-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-lady-rainicorns-trail-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-banner": "Rare Banner" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "blade-of-grass-account-cosmetics-store",
                  name: "Blade of Grass",
                  description: {
                    localizations: {
                      "store_product-blade-of-grass-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "ring_out_vfx_blade_of_grass",
                      slug: "ring_out_vfx_blade_of_grass",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/RingOutVfx/ROV_BladeofGrass.ROV_BladeofGrass",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Finn",
                        DisplayName: "Blade of Grass",
                        DisplayNameLocalizationKey: "65B612744F6734ACED755F88C780D05C",
                        DisplayNameLocalizationNamespace: "[5FCA05D947B95DE78DD43794DC166F9D]",
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Ringouts/AdventureTime_BladeofGrass/RO_BladeGrass_Thumbnail.RO_BladeGrass_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/VFX_Ringouts/AdventureTime_BladeofGrass/MI_Flipbook_RO_BladeGrass.MI_Flipbook_RO_BladeGrass",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_finn",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "ring_out_vfx",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be835",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "blade-of-grass-account-cosmetics-store_gleamium",
                      name: "Blade of Grass gleamium",
                      description: {
                        localizations: {
                          "store_product-blade-of-grass-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-blade-of-grass-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "epic-ringout": "Epic Ringout" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "finn-happy-account-cosmetics-store",
                  name: "Finn - Happy",
                  description: {
                    localizations: {
                      "store_product-finn-happy-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_finn_happy",
                      slug: "emote_finn_happy",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/Finn/DataAssets/Emote_Finn_Happy.Emote_Finn_Happy",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Finn - Happy",
                        DisplayNameLocalizationKey: "B1D62E4F41C56A3FD5F4AE83562366F0",
                        DisplayNameLocalizationNamespace: "[35A6E07440179FCAD0D00DB594DA30C8]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/Finn/UI/2DEmote_Finn_Happy_Thumbnail.2DEmote_Finn_Happy_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Finn/UI/MI_Finn_Happy_Thumbnail.MI_Finn_Happy_Thumbnail",
                      },
                      description: "",
                      tags: ["rarity_rare", "universe_adventure_time", "emote", "unlockable"],
                      id: "62fa7c0804da60ea6d57cfcf",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-happy-account-cosmetics-store_gleamium",
                      name: "Finn - Happy gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-happy-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-happy-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "finns-nightmare-personalized-fighter-affinity_gleamium_sale",
                name: "Finn's Nightmare gleamium sale",
                description: {
                  localizations: {
                    "store_product-finns-nightmare-personalized-fighter-affinity-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1340,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3000,
                    already_owned_adjusted_cost: 3000,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "finns-nightmare-personalized-fighter-affinity_gleamium",
                name: "Finn's Nightmare gleamium",
                description: {
                  localizations: {
                    "store_product-finns-nightmare-personalized-fighter-affinity-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3000,
                  already_owned_adjusted_cost: 3000,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-finns-nightmare-personalized-fighter-affinity-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "FinnsNightmare_Bundle.png",
                          md5: "0d70808557a769b8e38e583678043317",
                          file_size: 408295,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/FinnsNightmare_Bundle-3064373038303835353761373639623865333865353833363738303433333137.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FinnsNightmare_Bundle-3064373038303835353761373639623865333865353833363738303433333137.png",
                          id: "671fea943483146569e71d7b",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "epic-skin": "Epic Skin" } },
                        { localizations: { "rare-banner": "Rare Banner" } },
                        { localizations: { "epic-ringout": "Epic Ringout" } },
                        { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                        { localizations: { "adventure-time-": "Adventure Time™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "FinnsNightmare_Banner.png",
                        md5: "6e02e9ead421d9bb2109978d8b28538e",
                        file_size: 2071114,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/FinnsNightmare_Banner-3665303265396561643432316439626232313039393738643862323835333865.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FinnsNightmare_Banner-3665303265396561643432316439626232313039393738643862323835333865.png",
                        id: "671fea88568660549a8cfe65",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "fools-and-phantoms-personalized-fighter-affinity",
          name: {
            localizations: {
              "store_product-fools-and-phantoms-personalized-fighter-affinity-name":
                "Fools and Phantoms",
            },
          },
          description: {
            localizations: {
              "store_product-fools-and-phantoms-personalized-fighter-affinity-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "fools-and-phantoms-personalized-fighter-affinity",
            name: {
              localizations: {
                "store_product-fools-and-phantoms-personalized-fighter-affinity-name":
                  "Fools and Phantoms",
              },
            },
            description: {
              localizations: {
                "store_product-fools-and-phantoms-personalized-fighter-affinity-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "dia-de-muertos-the-joker-skin-store",
                  name: "Día de Muertos The Joker",
                  description: {
                    localizations: {
                      "store_product-dia-de-muertos-the-joker-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c028_s27",
                      slug: "skin_c028_s27",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Joker/Skins/S27/C028_S27.C028_S27",
                        AssociatedCharacter: "C028",
                        DisplayName: "Día de Muertos The Joker",
                        DisplayNameLocalizationKey: "B554E95748CC261C0E1397B247F640D3",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Mage",
                            "TS:Fixed:FighterDifficulty:Low",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:DiaDeMuertos",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:SemiFormal",
                            "TS:Dynamic:PurpleClothing",
                            "TS:Dynamic:OrangeClothing",
                            "TS:Dynamic:GreenClothing",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:PremieredinThe2020s",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                        Rarity: "Uncommon",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Joker/Skins/S27/T_C028_S27.T_C028_S27",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Joker/Skins/S27/MI_C028_S27_RewardThumbnailMaterial.MI_C028_S27_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_uncommon",
                        "character_c028",
                        "unlock_location_shop",
                        "universe_dc",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec2683fd",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "dia-de-muertos-the-joker-skin-store_gleamium",
                      name: "Día de Muertos The Joker gleamium",
                      description: {
                        localizations: {
                          "store_product-dia-de-muertos-the-joker-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-dia-de-muertos-the-joker-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "dia-de-muertos-jason-voorhees-skin-store",
                  name: "Día de Muertos Jason Voorhees",
                  description: {
                    localizations: {
                      "store_product-dia-de-muertos-jason-voorhees-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: true,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c035_s27",
                      slug: "skin_c035_s27",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Jason/Skins/S27/C035_S27.C035_S27",
                        AssociatedCharacter: "C035",
                        DisplayName: "Día de Muertos Jason Voorhees",
                        DisplayNameLocalizationKey: "E76028E34E5E4C7BF34ECD993068A3F8",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:Fridaythe13th",
                            "TS:Dynamic:DiaDeMuertos",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:SportsAttire",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:WhiteClothing",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                        Rarity: "Uncommon",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Jason/Skins/S27/T_C035_S27.T_C035_S27",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Jason/Skins/S27/MI_C035_S27_RewardThumbnailMaterial.MI_C035_S27_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_uncommon",
                        "character_c035",
                        "unlock_location_shop",
                        "universe_friday_the13th",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec2683fe",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "dia-de-muertos-jason-voorhees-skin-store_gleamium",
                      name: "Día de Muertos Jason Voorhees gleamium",
                      description: {
                        localizations: {
                          "store_product-dia-de-muertos-jason-voorhees-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-dia-de-muertos-jason-voorhees-skin-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "el-guason-account-cosmetics-store",
                  name: "El Guasón",
                  description: {
                    localizations: {
                      "store_product-el-guason-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profile_icon_ElGuason",
                      slug: "profile_icon_ElGuason",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/ProfileIcons/DataAsset/20240809_DC_BAT_TheJoker_ProfileIcon_ElGuason.20240809_DC_BAT_TheJoker_ProfileIcon_ElGuason",
                        AssociatedCharacter: "C028",
                        DisplayName: "El Guasón",
                        DisplayNameLocalizationKey: "C0F4CB2644FD5F1E892827BC6DDC6811",
                        DisplayNameLocalizationNamespace: "[3FB2E2F34DFB7A2D3E9BF09377DBCEBB]",
                        EnabledForShipping: false,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason03/Rewards/ProfileIcons/Texture/20240809_DC_BAT_TheJoker_ProfileIcon_ElGuason.20240809_DC_BAT_TheJoker_ProfileIcon_ElGuason",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c028",
                        "universe_dc",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "66e9a9297af4cd81ec26845d",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "el-guason-account-cosmetics-store_gleamium",
                      name: "El Guasón gleamium",
                      description: {
                        localizations: {
                          "store_product-el-guason-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-el-guason-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "playing-the-fool-account-cosmetics-store",
                  name: "Playing the Fool",
                  description: {
                    localizations: {
                      "store_product-playing-the-fool-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c028_mock",
                      slug: "taunt_c028_mock",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Rewards/Taunts/Taunt_C028_Mock.Taunt_C028_Mock",
                        AssociatedCharacter: "C028",
                        DisplayName: "Playing the Fool",
                        DisplayNameLocalizationKey: "1EEEEA854A0AE6D47B2B12BAC434047B",
                        DisplayNameLocalizationNamespace: "[3EC2B63D458F9A13204397AD2F9832CF]",
                        EnabledForShipping: false,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Rewards/Taunts/Emote_C028_Mocking.Emote_C028_Mocking",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Rewards/Taunts/M_C028_Emote_Mocking_Thumbnail1.M_C028_Emote_Mocking_Thumbnail1",
                      },
                      description: "",
                      tags: ["rarity_epic", "character_c028", "universe_dc", "taunt", "unlockable"],
                      id: "66e9a9297af4cd81ec26846a",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "playing-the-fool-account-cosmetics-store_gleamium",
                      name: "Playing the Fool gleamium",
                      description: {
                        localizations: {
                          "store_product-playing-the-fool-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-playing-the-fool-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "moonwalk-account-cosmetic-store",
                  name: "Moonwalk",
                  description: {
                    localizations: {
                      "store_product-moonwalk-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_jason_moonwalk",
                      slug: "taunt_jason_moonwalk",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/Game/Character/Jason/DataAssets/Taunts/Taunt_Jason_Moonwalk.Taunt_Jason_Moonwalk",
                        AssociatedCharacter: "C035",
                        DisplayName: "Moonwalk",
                        DisplayNameLocalizationKey: "B2CAE9E8492A9DBCC48452AFA107FED7",
                        DisplayNameLocalizationNamespace: "[D1F041D346CA3F1094D4E1BC2401C08D]",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Character/Jason/UI/Emote_C035_Moonwalk.Emote_C035_Moonwalk",
                        RewardThumbnailMaterial:
                          "/Game/Character/Jason/UI/MI_c035_Emote_Moonwalk_Thumbnail.MI_c035_Emote_Moonwalk_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c035",
                        "unlock_location_battlepass",
                        "universe_friday_the13th",
                        "taunt",
                        "unlockable",
                      ],
                      id: "663c0f944b55072b1d7ec6e9",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "moonwalk-account-cosmetic-store_gleamium",
                      name: "Moonwalk gleamium",
                      description: {
                        localizations: {
                          "store_product-moonwalk-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-moonwalk-account-cosmetic-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              {
                                localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" },
                              },
                              { localizations: { "friday-the-13th-": "Friday the 13th™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "fools-and-phantoms-personalized-fighter-affinity_gleamium_sale",
                name: "Fools and Phantoms gleamium sale",
                description: {
                  localizations: {
                    "store_product-fools-and-phantoms-personalized-fighter-affinity-description":
                      "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 980,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2700,
                    already_owned_adjusted_cost: 2200,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "fools-and-phantoms-personalized-fighter-affinity_gleamium",
                name: "Fools and Phantoms gleamium",
                description: {
                  localizations: {
                    "store_product-fools-and-phantoms-personalized-fighter-affinity-description":
                      "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2700,
                  already_owned_adjusted_cost: 2200,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-fools-and-phantoms-personalized-fighter-affinity-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "FoolsAndPhantoms_Bundle.png",
                          md5: "170c4dcb8365575b4ecca13712d05632",
                          file_size: 124116,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/FoolsAndPhantoms_Bundle-3137306334646362383336353537356234656363613133373132643035363332.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FoolsAndPhantoms_Bundle-3137306334646362383336353537356234656363613133373132643035363332.png",
                          id: "670996a6f12500be4874b5a1",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { skins: "Skins" } },
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "epic-taunt-emote": "Epic Taunt Emote" } },
                        { localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" } },
                        { localizations: { "dc-": "DC™" } },
                        { localizations: { "friday-the-13th-": "Friday the 13th™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "FoolsAndPhantoms_Banner.png",
                        md5: "0ef7725f7ee801132a5936d30374137d",
                        file_size: 1012102,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/FoolsAndPhantoms_Banner-3065663737323566376565383031313332613539333664333033373431333764.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FoolsAndPhantoms_Banner-3065663737323566376565383031313332613539333664333033373431333764.png",
                        id: "670996975eccc908768ca30b",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "they-came-from-space-personalized-fighter-affinity",
          name: {
            localizations: {
              "store_product-they-came-from-space-personalized-fighter-affinity-name":
                "They Came From Space",
            },
          },
          description: {
            localizations: {
              "store_product-they-came-from-space-personalized-fighter-affinity-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "they-came-from-space-personalized-fighter-affinity",
            name: {
              localizations: {
                "store_product-they-came-from-space-personalized-fighter-affinity-name":
                  "They Came From Space",
              },
            },
            description: {
              localizations: {
                "store_product-they-came-from-space-personalized-fighter-affinity-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "hypergalactic-puppet-marvin-skin-store",
                  name: "Hypergalactic Puppet Marvin",
                  description: {
                    localizations: {
                      "store_product-hypergalactic-puppet-marvin-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c018_s25",
                      slug: "skin_c018_s25",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Marvin/Skins/S25/C018_S25.C018_S25",
                        AssociatedCharacter: "C018",
                        DisplayName: "Hypergalactic Puppet Marvin",
                        DisplayNameLocalizationKey: "4509B2D743E7F4A37F0C92A91489FADF",
                        DisplayNameLocalizationNamespace: "[EEF407894E505608952A3291DE7D2F97]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Universe:LooneyTunes",
                            "TS:Fixed:Universe:Matrix",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:GreenClothing",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:MovieInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Fixed:Class:Mage",
                            "TS:Dynamic:Hypergalactic",
                          ],
                          ParentTags: [
                            "TS:Fixed:Universe",
                            "TS:Fixed",
                            "TS",
                            "TS:Dynamic",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Dynamic:Season",
                            "TS:Fixed:Class",
                          ],
                        },
                        Rarity: "Uncommon",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Marvin/Skins/S25/T_C018_S25.T_C018_S25",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Marvin/Skins/S25/MI_C018_S25_RewardThumbnailMaterial.MI_C018_S25_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_uncommon",
                        "character_c018",
                        "universe_looney_tunes",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec2683fb",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "hypergalactic-puppet-marvin-skin-store_gleamium",
                      name: "Hypergalactic Puppet Marvin gleamium",
                      description: {
                        localizations: {
                          "store_product-hypergalactic-puppet-marvin-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-hypergalactic-puppet-marvin-skin-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "hypergalactic-puppet-reindog-skin-store",
                  name: "Hypergalactic Puppet Reindog",
                  description: {
                    localizations: {
                      "store_product-hypergalactic-puppet-reindog-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c009_s25",
                      slug: "skin_c009_s25",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Reindog/Skins/S25/C009_S25.C009_S25",
                        AssociatedCharacter: "ReinDog",
                        DisplayName: "Hypergalactic Puppet Reindog",
                        DisplayNameLocalizationKey: "",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Mage",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:PlayerFirstGames",
                            "TS:Dynamic:ExtraTerrestrial",
                            "TS:Dynamic:Fuzzy",
                            "TS:Dynamic:Hypergalactic",
                            "TS:Dynamic:TShirt",
                            "TS:Dynamic:Heroic",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Dynamic",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                          ],
                        },
                        Rarity: "Uncommon",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Reindog/Skins/S25/T_C009_S25.T_C009_S25",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Reindog/Skins/S25/MI_C009_S25_RewardThumbnailMaterial.MI_C009_S25_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_uncommon",
                        "character_rein_dog",
                        "unlock_location_shop",
                        "universe_pfg",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec2683fa",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "hypergalactic-puppet-reindog-skin-store_gleamium",
                      name: "Hypergalactic Puppet Reindog gleamium",
                      description: {
                        localizations: {
                          "store_product-hypergalactic-puppet-reindog-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-hypergalactic-puppet-reindog-skin-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "hypergalactic-puppet-jason-voorhees-skin-store",
                  name: "Hypergalactic Puppet Jason Voorhees",
                  description: {
                    localizations: {
                      "store_product-hypergalactic-puppet-jason-voorhees-skin-store-description":
                        "",
                    },
                  },
                  data: null,
                  already_owned: true,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c035_s25",
                      slug: "skin_c035_s25",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Jason/Skins/S25/C035_S25.C035_S25",
                        AssociatedCharacter: "C035",
                        DisplayName: "Hypergalactic Puppet Jason Voorhees",
                        DisplayNameLocalizationKey: "92762DAB47CE88843D853C94201E24C8",
                        DisplayNameLocalizationNamespace: "[F172424E4C6E7336597F59AB9C658D91]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:Fridaythe13th",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:GreenClothing",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:SportsAttire",
                            "TS:Dynamic:ExtraTerrestrial",
                            "TS:Dynamic:PurpleClothing",
                            "TS:Dynamic:CombatWear",
                            "TS:Dynamic:Hypergalactic",
                            "TS:Dynamic:Season:Villainous",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                        Rarity: "Uncommon",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Jason/Skins/S25/T_C035__S25.T_C035__S25",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Jason/Skins/S25/MI_C035_S25_RewardThumbnailMaterial.MI_C035_S25_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_uncommon",
                        "character_c035",
                        "unlock_location_battlepass",
                        "universe_friday_the13th",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec2683ff",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "hypergalactic-puppet-jason-voorhees-skin-store_gleamium",
                      name: "Hypergalactic Puppet Jason Voorhees gleamium",
                      description: {
                        localizations: {
                          "store_product-hypergalactic-puppet-jason-voorhees-skin-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-hypergalactic-puppet-jason-voorhees-skin-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "star-explosion-account-cosmetics-store",
                  name: "Star Explosion",
                  description: {
                    localizations: {
                      "store_product-star-explosion-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "ring_out_vfx_star_explosion",
                      slug: "ring_out_vfx_star_explosion",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/MvsSeason03/Rewards/RingOutVfx/StarExplosion/ROV_StarExplosion.ROV_StarExplosion",
                        AssociatedCharacter: "Base",
                        DisplayName: "Star Explosion",
                        DisplayNameLocalizationKey: "37D7C9DE4D7DA3992258D1BEDDB5AD9F",
                        DisplayNameLocalizationNamespace: "[A3BC932F45C3B311B7D01BAD4C71622D]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/MvsSeason03/Rewards/RingOutVfx/StarExplosion/T_StarExplosion_Thumbnail.T_StarExplosion_Thumbnail",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: ["rarity_rare", "ring_out_vfx", "unlockable"],
                      id: "663288a2358a2a62107ca8f1",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "star-explosion-account-cosmetics-store_gleamium",
                      name: "Star Explosion gleamium",
                      description: {
                        localizations: {
                          "store_product-star-explosion-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-star-explosion-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "the-hypergalactic-universe-account-cosmetics-store",
                  name: "The Hypergalactic Universe",
                  description: {
                    localizations: {
                      "store_product-the-hypergalactic-universe-account-cosmetics-store-description":
                        "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "galaxy2_banner",
                      slug: "galaxy2_banner",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/Banners/Galaxy_02/Galaxy02_Banner.Galaxy02_Banner",
                        AssociatedCharacter: "Base",
                        DisplayName: "The Hypergalactic Universe",
                        DisplayNameLocalizationKey: "AAFE5D57439D792175209BB845B0616A",
                        DisplayNameLocalizationNamespace: "[59881244452C6D17CE95D68CEBF9D97A]",
                        EnabledForShipping: true,
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/MvsSeason03/Rewards/Banners/Galaxy_02/UI_Banner_Galaxy02_Banner_Thumbnail.UI_Banner_Galaxy02_Banner_Thumbnail",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Rewards/Banners/Galaxy_02/MI_Banner_Galaxy02_Preview.MI_Banner_Galaxy02_Preview",
                      },
                      description: "",
                      tags: ["rarity_rare", "universe_pfg", "banner", "unlockable"],
                      id: "66e9a9297af4cd81ec268445",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "the-hypergalactic-universe-account-cosmetics-store_gleamium",
                      name: "The Hypergalactic Universe gleamium",
                      description: {
                        localizations: {
                          "store_product-the-hypergalactic-universe-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-the-hypergalactic-universe-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "they-came-from-space-personalized-fighter-affinity_gleamium_sale",
                name: "They Came From Space gleamium sale",
                description: {
                  localizations: {
                    "store_product-they-came-from-space-personalized-fighter-affinity-description":
                      "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 890,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2500,
                    already_owned_adjusted_cost: 2000,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "they-came-from-space-personalized-fighter-affinity_gleamium",
                name: "They Came From Space gleamium",
                description: {
                  localizations: {
                    "store_product-they-came-from-space-personalized-fighter-affinity-description":
                      "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2500,
                  already_owned_adjusted_cost: 2000,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-they-came-from-space-personalized-fighter-affinity-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "TheyCameFromSpace_Bundle.png",
                          md5: "ade8ffc428dec35998f98c1a594659b8",
                          file_size: 444280,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/TheyCameFromSpace_Bundle-6164653866666334323864656333353939386639386331613539343635396238.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/TheyCameFromSpace_Bundle-6164653866666334323864656333353939386639386331613539343635396238.png",
                          id: "66f351783204753387b788ef",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { skins: "Skins" } },
                        { localizations: { "rare-ringout": "Rare Ringout" } },
                        { localizations: { "rare-banner": "Rare Banner" } },
                        { localizations: { "looney-tunes-": "Looney Tunes™" } },
                        { localizations: { "friday-the-13th-": "Friday the 13th™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "TheyCameFromSpace_Banner.png",
                        md5: "ba17d4ec596525ec834304f1a34c0ee7",
                        file_size: 2158817,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/TheyCameFromSpace_Banner-6261313764346563353936353235656338333433303466316133346330656537.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/TheyCameFromSpace_Banner-6261313764346563353936353235656338333433303466316133346330656537.png",
                        id: "66f3516443663d974ad99a0d",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "jason-total-mayhem-personalized-fighter-affinity",
          name: {
            localizations: {
              "store_product-jason-total-mayhem-personalized-fighter-affinity-name": "Total Mayhem",
            },
          },
          description: {
            localizations: {
              "store_product-jason-total-mayhem-personalized-fighter-affinity-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "jason-total-mayhem-personalized-fighter-affinity",
            name: {
              localizations: {
                "store_product-jason-total-mayhem-personalized-fighter-affinity-name":
                  "Total Mayhem",
              },
            },
            description: {
              localizations: {
                "store_product-jason-total-mayhem-personalized-fighter-affinity-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "uber-jason-skin-store",
                  name: "Uber Jason",
                  description: {
                    localizations: { "store_product-uber-jason-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c035_s01",
                      slug: "skin_c035_s01",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath: "/Game/Character/Jason/Skins/S01/C035_S01.C035_S01",
                        AssociatedCharacter: "C035",
                        DisplayName: "Uber Jason",
                        DisplayNameLocalizationKey: "77EEEA47429323BE14D7968E17B25F70",
                        DisplayNameLocalizationNamespace: "",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Character/Captures/Jason/Jason_C035_S01.Jason_C035_S01",
                        RewardThumbnailMaterial:
                          "/Game/Character/Jason/Skins/S01/MI_C035_S01_RewardThumbnailMaterial.MI_C035_S01_RewardThumbnailMaterial",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:Fridaythe13th",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe00s",
                            "TS:Dynamic:MovieInspired",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:ExtraTerrestrial",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:Metallic",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Tech",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c035",
                        "unlock_location_battlepass",
                        "universe_friday_the13th",
                        "skin",
                        "unlockable",
                      ],
                      id: "663c0f944b55072b1d7ec702",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "uber-jason-skin-store_gleamium",
                      name: "Uber Jason gleamium",
                      description: {
                        localizations: { "store_product-uber-jason-skin-store-description": "" },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 2000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-uber-jason-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { skin: "Skin" } },
                              { localizations: { "friday-the-13th-": "Friday the 13th™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "jason-fighter-road",
                  name: "Jason Vorhees",
                  description: {
                    localizations: {
                      "store_product-jason-fighter-road-description":
                        "A hulking tank with some shocking abilities to move around the battlefield, Jason is here to make every day Friday the 13th. Whether terrifying his opponents with his empty stare or his deadly machete, he’s in the running to be the Multiverse’s worst nightmare.",
                    },
                  },
                  data: null,
                  already_owned: true,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_Jason",
                      slug: "character_Jason",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: false,
                        AssetPath: "/Game/Character/Jason/character_Jason.character_Jason",
                        ContentLevel: 1,
                        MasteryRewardTrack: "mrt_mastery_jason",
                        IsUnlockedByDefault: false,
                        AssociatedCharacter: "C035",
                        DisplayName: "Jason Voorhees",
                        DisplayNameLocalizationKey: "51AE5748418968ECA81E9D9F55F8261E",
                        DisplayNameLocalizationNamespace: "[D256784643578E032C7371A4863654FD]",
                        FighterClass: "Tank",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Character/Captures/Jason/Jason_Jason_Skin_000.Jason_Jason_Skin_000",
                        RewardThumbnailMaterial:
                          "/Game/Character/Jason/Skins/MI_Jason_Skin_000_RewardThumbnailMaterial.MI_Jason_Skin_000_RewardThumbnailMaterial",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:Fridaythe13th",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe80s",
                            "TS:Dynamic:MovieInspired",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:SportsAttire",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Fixed:Jason",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "character_c035",
                        "unlock_location_shop",
                        "universe_friday_the13th",
                        "character",
                        "unlockable",
                      ],
                      id: "663c0f944b55072b1d7ec6e6",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "jason-fighter-road_gleamium",
                      name: "Jason Vorhees gleamium",
                      description: {
                        localizations: {
                          "store_product-jason-fighter-road-description":
                            "A hulking tank with some shocking abilities to move around the battlefield, Jason is here to make every day Friday the 13th. Whether terrifying his opponents with his empty stare or his deadly machete, he’s in the running to be the Multiverse’s worst nightmare.",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-jason-fighter-road-description":
                                  "A hulking tank with some shocking abilities to move around the battlefield, Jason is here to make every day Friday the 13th. Whether terrifying his opponents with his empty stare or his deadly machete, he’s in the running to be the Multiverse’s worst nightmare.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "ProductCTA",
                          type: "text",
                          type_options: {
                            text: { localizations: { "released-season-1-": "Released Season 1!" } },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-jason-fighter-road-tagline":
                                  "Unstoppable monster from beyond the grave.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "jason-voorhees-total-damage-dealt-account-cosmetic-store",
                  name: "Jason Voorhees Total Damage Dealt",
                  description: {
                    localizations: {
                      "store_product-jason-voorhees-total-damage-dealt-account-cosmetic-store-description":
                        "",
                    },
                  },
                  data: null,
                  already_owned: true,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_c035_total_damage_dealt",
                      slug: "stat_tracking_bundle_c035_total_damage_dealt",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/CharacterTotalDamageDealt/StatTracking_C035TotalDamageDealt.StatTracking_C035TotalDamageDealt",
                        AssociatedCharacter: "C035",
                        DisplayName: "Jason Voorhees Total Damage Dealt",
                        DisplayNameLocalizationKey: "ED08FA3F4D648D2054DF7EA887B499D6",
                        DisplayNameLocalizationNamespace: "[4D5317BB42F192269BDABA8E86333AFE]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Character/Jason/UI/UI_Stat_C035_TotalDamageDealt_Badge.UI_Stat_C035_TotalDamageDealt_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c035",
                        "unlock_location_character_mastery",
                        "universe_friday_the13th",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "669fd3df7d13e0649bcb9251",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "jason-voorhees-total-damage-dealt-account-cosmetic-store_gleamium",
                      name: "Jason Voorhees Total Damage Dealt gleamium",
                      description: {
                        localizations: {
                          "store_product-jason-voorhees-total-damage-dealt-account-cosmetic-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-jason-voorhees-total-damage-dealt-account-cosmetic-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { badge: "Badge" } },
                              { localizations: { "friday-the-13th-": "Friday the 13th™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "lurking-jason-account-cosmetic-store",
                  name: "Lurking Jason",
                  description: {
                    localizations: {
                      "store_product-lurking-jason-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_lurking_jason",
                      slug: "banner_lurking_jason",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/PreMatch/Banners/LurkingJason/LurkingJason_Banner.LurkingJason_Banner",
                        EnabledForShipping: true,
                        AssociatedCharacter: "C035",
                        DisplayName: "Lurking Jason",
                        DisplayNameLocalizationKey: "345A58FA426A4EADAE720CBE43585376",
                        DisplayNameLocalizationNamespace: "[4B64989F411C62379AA7C0929BBAC6DB]",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Panda_Main/PreMatch/Banners/LurkingJason/UI_Banner_LurkingJason_Thumbnail.UI_Banner_LurkingJason_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/PreMatch/Banners/LurkingJason/MI_Banner_LurkingJason_Preview.MI_Banner_LurkingJason_Preview",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c035",
                        "unlock_location_battlepass",
                        "universe_friday_the13th",
                        "banner",
                        "unlockable",
                      ],
                      id: "663c0f944b55072b1d7ec70d",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "lurking-jason-account-cosmetic-store_gleamium",
                      name: "Lurking Jason gleamium",
                      description: {
                        localizations: {
                          "store_product-lurking-jason-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 600,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-lurking-jason-account-cosmetic-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "legendary-banner": "Legendary Banner" } },
                              { localizations: { "jason-voorhees-": "Jason Voorhees™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "jason-total-mayhem-personalized-fighter-affinity_gleamium_sale",
                name: "Total Mayhem gleamium sale",
                description: {
                  localizations: {
                    "store_product-jason-total-mayhem-personalized-fighter-affinity-description":
                      "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1040,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3700,
                    already_owned_adjusted_cost: 2600,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "jason-total-mayhem-personalized-fighter-affinity_gleamium",
                name: "Total Mayhem gleamium",
                description: {
                  localizations: {
                    "store_product-jason-total-mayhem-personalized-fighter-affinity-description":
                      "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3700,
                  already_owned_adjusted_cost: 2600,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-jason-total-mayhem-personalized-fighter-affinity-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "total_mayhem_bundle.png",
                          md5: "92CA/s0FX7IzyKCS8p/E7Q==",
                          file_size: 596744,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/total_mayhem_bundle-6637363038306665636430353566623233336338613039326632396663346564.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/total_mayhem_bundle-6637363038306665636430353566623233336338613039326632396663346564.png",
                          id: "669ab537c51224cf002b723e",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-skin": "Legendary Skin" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "legendary-banner": "Legendary Banner" } },
                        { localizations: { "friday-the-13th-": "Friday the 13th™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "total_mayhem_banner.png",
                        md5: "EA4YN6z45huAkKmBENxFiA==",
                        file_size: 4310856,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/total_mayhem_banner-3130306531383337616366386536316238303930613938313130646334353838.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/total_mayhem_banner-3130306531383337616366386536316238303930613938313130646334353838.png",
                        id: "669ab52e311aea2a77710c4c",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "white-raven-trigons-heir-popular",
          name: {
            localizations: {
              "store_product-white-raven-trigons-heir-popular-name": "White Raven: Trigon’s Heir",
            },
          },
          description: {
            localizations: { "store_product-white-raven-trigons-heir-popular-description": "" },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "white-raven-trigons-heir-popular",
            name: {
              localizations: {
                "store_product-white-raven-trigons-heir-popular-name": "White Raven: Trigon’s Heir",
              },
            },
            description: {
              localizations: { "store_product-white-raven-trigons-heir-popular-description": "" },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "raven-early-access",
                  name: "Raven",
                  description: {
                    localizations: {
                      "store_product-raven-early-access-description":
                        "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: false,
                  enabled: {
                    _hydra_StoreEnabed: [
                      {
                        start: { _hydra_unix_date: 1742265244 },
                        end: { _hydra_unix_date: 1742351644 },
                        rendered: false,
                      },
                    ],
                  },
                  has_active_sku: false,
                  valid_user_segments: true,
                  is_purchasable: false,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_C025",
                      slug: "character_C025",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath: "/Character_C025/Character/C025/character_C025.character_C025",
                        ContentLevel: 1,
                        IsUnlockedByDefault: false,
                        AssociatedCharacter: "C025",
                        DisplayName: "Raven",
                        DisplayNameLocalizationKey: "606257554A7832184F55C3B2CAFB4757",
                        DisplayNameLocalizationNamespace: "[2ABEF774427AE27FEA040CB7D673CE46]",
                        FighterClass: "Mage",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Mage",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:DC",
                            "TS:Fixed:Raven",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                          ],
                        },
                        Rarity: "None",
                        RewardThumbnail:
                          "/Character_C025/Character/C025/Skins/T_C025_S00.T_C025_S00",
                        RewardThumbnailMaterial:
                          "/Character_C025/Character/C025/Skins/MI_C025_Skin_000_RewardThumbnailMaterial.MI_C025_Skin_000_RewardThumbnailMaterial",
                        MasteryRewardTrack: "mrt_mastery_c025",
                      },
                      description: "",
                      tags: [
                        "character_c025",
                        "unlock_location_shop",
                        "universe_dc",
                        "character",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca84e",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "raven-early-access_character-unlock-ticket-currency",
                      name: "Raven character-unlock-ticket-currency",
                      description: {
                        localizations: {
                          "store_product-raven-early-access-description":
                            "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Character Unlock Ticket Currency",
                          slug: "character-unlock-ticket-currency",
                          type_class: "currency",
                          data: {},
                          description: "",
                          tags: ["currency", "character_ticket"],
                          id: "663288a2358a2a62107ca9c0",
                        },
                        quantity: 1,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: {
                        _hydra_StoreEnabed: [
                          {
                            start: { _hydra_unix_date: 1742265244 },
                            end: { _hydra_unix_date: 1742351644 },
                            rendered: false,
                          },
                        ],
                      },
                      is_available_for_purchase: false,
                      visual_data: [],
                      preferred: true,
                    },
                    {
                      sku: "raven-early-access_gleamium",
                      name: "Raven gleamium",
                      description: {
                        localizations: {
                          "store_product-raven-early-access-description":
                            "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: {
                        _hydra_StoreEnabed: [
                          {
                            start: { _hydra_unix_date: 1742265244 },
                            end: { _hydra_unix_date: 1742351644 },
                            rendered: false,
                          },
                        ],
                      },
                      is_available_for_purchase: false,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-raven-early-access-description":
                                  "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "ProductCTA",
                          type: "text",
                          type_options: {
                            text: { localizations: { "new-fighter-": "New Fighter!" } },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-raven-early-access-tagline":
                                  "Azarath Metrion Zinthos!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "white-raven-skin-store",
                  name: "White Raven",
                  description: {
                    localizations: { "store_product-white-raven-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c025_s01",
                      slug: "skin_c025_s01",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Character_C025/Character/C025/Skins/S01/C025_S01.C025_S01",
                        AssociatedCharacter: "C025",
                        DisplayName: "White Raven",
                        DisplayNameLocalizationKey: "D31EDFA241DF9FBE9C7395B086CA5312",
                        DisplayNameLocalizationNamespace: "[095979DB42870EE3C2A891BBC90C108B]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Mage",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:Azarath",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Caped",
                            "TS:Dynamic:FourEyes",
                            "TS:Dynamic:PremieredinThe90s",
                            "TS:Dynamic:ComicInspired",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:PurpleClothing",
                            "TS:Dynamic:WhiteClothing",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                          ],
                        },
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Character_C025/Character/C025/Skins/S01/T_C025_S01.T_C025_S01",
                        RewardThumbnailMaterial:
                          "/Character_C025/Character/C025/Skins/S01/MI_C025_S01_RewardThumbnailMaterial.MI_C025_S01_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c025",
                        "unlock_location_shop",
                        "universe_dc",
                        "skin",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4d2",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "white-raven-skin-store_gleamium",
                      name: "White Raven gleamium",
                      description: {
                        localizations: { "store_product-white-raven-skin-store-description": "" },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-white-raven-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "raven-announcer-pack-account-cosmetics-store",
                  name: "Raven Announcer Pack",
                  description: {
                    localizations: {
                      "store_product-raven-announcer-pack-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "announcerpack_c025",
                      slug: "announcerpack_c025",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Character_C025/Character/C025/AnnouncerPack_c025.AnnouncerPack_c025",
                        AssociatedCharacter: "C025",
                        DisplayName: "Announcer Pack Raven",
                        DisplayNameLocalizationKey: "1C79E2D845B1A1665FE2068E31D02F74",
                        DisplayNameLocalizationNamespace: "[B839584F4C5E315673524CA75C61A689]",
                        EnabledForShipping: true,
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Character_C025/Character/C025/thumb_announcer_c025.thumb_announcer_c025",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c025",
                        "unlock_location_shop",
                        "universe_dc",
                        "announcer_pack",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4b2",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "raven-announcer-pack-account-cosmetics-store_gleamium",
                      name: "Raven Announcer Pack gleamium",
                      description: {
                        localizations: {
                          "store_product-raven-announcer-pack-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 300,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-raven-announcer-pack-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "raven-ringouts-account-cosmetics-store",
                  name: "Raven Ringouts",
                  description: {
                    localizations: {
                      "store_product-raven-ringouts-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stattracking_c025ringouts",
                      slug: "stattracking_c025ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/StatTrackingBundle/StatTracking_C025Ringouts.StatTracking_C025Ringouts",
                        AssociatedCharacter: "C025",
                        DisplayName: "Raven Ringouts",
                        DisplayNameLocalizationKey: "201A8B7241FAAAE9B3B10BA5F81C8AAB",
                        DisplayNameLocalizationNamespace: "[7CC63D43465A2F49A2BC5684214536E8]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/Character_C025/Character/C025/UI/UI_Stat_C025_Ringouts_Badge.UI_Stat_C025_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c025",
                        "unlock_location_character_mastery",
                        "universe_dc",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4b7",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "raven-ringouts-account-cosmetics-store_gleamium",
                      name: "Raven Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-raven-ringouts-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-raven-ringouts-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "birds-of-a-feather-account-cosmetics-store",
                  name: "Birds of a Feather",
                  description: {
                    localizations: {
                      "store_product-birds-of-a-feather-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c025_taunt1",
                      slug: "taunt_c025_taunt1",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Character_C025/Character/C025/Taunts/Taunt_C025_Taunt1.Taunt_C025_Taunt1",
                        AssociatedCharacter: "C025",
                        DisplayName: "Birds of a Feather",
                        DisplayNameLocalizationKey: "1C4385D543FA2EAEE8CA6FACA6C90C5A",
                        DisplayNameLocalizationNamespace: "[310B340048D2BD402A6542BE730DAF3E]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Character_C025/Character/C025/UI/Emote_C025_Taunt1.Emote_C025_Taunt1",
                        RewardThumbnailMaterial:
                          "/Character_C025/Character/C025/UI/M_C025_Emote_Taunt1_Thumbnail.M_C025_Emote_Taunt1_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c025",
                        "unlock_location_shop",
                        "universe_dc",
                        "taunt",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4ce",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "birds-of-a-feather-account-cosmetics-store_gleamium",
                      name: "Birds of a Feather gleamium",
                      description: {
                        localizations: {
                          "store_product-birds-of-a-feather-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-birds-of-a-feather-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "white-raven-trigons-heir-popular_gleamium_sale",
                name: "White Raven: Trigon’s Heir gleamium sale",
                description: {
                  localizations: {
                    "store_product-white-raven-trigons-heir-popular-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1600,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3200,
                    already_owned_adjusted_cost: 3200,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: {
                  _hydra_StoreEnabed: [
                    {
                      start: { _hydra_unix_date: 1742265244 },
                      end: { _hydra_unix_date: 1742351644 },
                      rendered: false,
                    },
                  ],
                },
                is_available_for_purchase: false,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "white-raven-trigons-heir-popular_gleamium",
                name: "White Raven: Trigon’s Heir gleamium",
                description: {
                  localizations: {
                    "store_product-white-raven-trigons-heir-popular-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3200,
                  already_owned_adjusted_cost: 3200,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-white-raven-trigons-heir-popular-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Raven_WhiteRavenTrigonsHeir_Bundle2.png",
                          md5: "62e06d1ad04efec5f6c4e0b347899f0f",
                          file_size: 589056,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Raven_WhiteRavenTrigonsHeir_Bundle2-3632653036643161643034656665633566366334653062333437383939663066.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Raven_WhiteRavenTrigonsHeir_Bundle2-3632653036643161643034656665633566366334653062333437383939663066.png",
                          id: "6732b9ae088a87ebcdcd68e2",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" } },
                        { localizations: { "rare-skin": "Rare Skin" } },
                        { localizations: { "rare-announcer-pack": "Rare Announcer Pack" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "dc-": "DC™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Raven_WhiteRavenTrigonsHeir_Banner2.png",
                        md5: "d6902379b530ce75261e1afa1b9bb82d",
                        file_size: 2322499,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Raven_WhiteRavenTrigonsHeir_Banner2-6436393032333739623533306365373532363165316166613162396262383264.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Raven_WhiteRavenTrigonsHeir_Banner2-6436393032333739623533306365373532363165316166613162396262383264.png",
                        id: "6732b9a0cc37dd9337ea322f",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "future-queen-nubias-strength-gleamium-popular",
          name: {
            localizations: {
              "store_product-future-queen-nubias-strength-gleamium-popular-name":
                "Future Queen Nubia’s Strength",
            },
          },
          description: {
            localizations: {
              "store_product-future-queen-nubias-strength-gleamium-popular-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "future-queen-nubias-strength-gleamium-popular",
            name: {
              localizations: {
                "store_product-future-queen-nubias-strength-gleamium-popular-name":
                  "Future Queen Nubia’s Strength",
              },
            },
            description: {
              localizations: {
                "store_product-future-queen-nubias-strength-gleamium-popular-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "future-state-nubia-skin-store",
                  name: "Future State Nubia",
                  description: {
                    localizations: {
                      "store_product-future-state-nubia-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_C027_s01",
                      slug: "skin_C027_s01",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath: "/MvsSeason03/Character/C027/Skins/S01/C027_S01.C027_S01",
                        AssociatedCharacter: "C027",
                        DisplayName: "Future State Nubia",
                        DisplayNameLocalizationKey: "88811D824C349868DF317D875FAEAD8E",
                        DisplayNameLocalizationNamespace: "[0859EB4C4D48E88731A714AA6CE3A060]",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:ComicInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:YellowClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:RedWhiteandBlueClothing",
                            "TS:Dynamic:CombatWear",
                            "TS:Fixed:Class:Assassin",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Fixed:Class",
                          ],
                        },
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Character/C027/Skins/S01/T_C027_S01.T_C027_S01",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/C027/Skins/S01/MI_C027_S01_RewardThumbnail.MI_C027_S01_RewardThumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c027",
                        "unlock_location_tutorial",
                        "universe_dc",
                        "skin",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca972",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "future-state-nubia-skin-store_gleamium",
                      name: "Future State Nubia gleamium",
                      description: {
                        localizations: {
                          "store_product-future-state-nubia-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-future-state-nubia-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-fighter-road",
                  name: "Nubia",
                  description: {
                    localizations: {
                      "store_product-nubia-fighter-road-description":
                        "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_C027",
                      slug: "character_C027",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: false,
                        AssetPath: "/MvsSeason03/Character/C027/character_C027.character_C027",
                        IsUnlockedByDefault: false,
                        ContentLevel: 1,
                        AssociatedCharacter: "C027",
                        DisplayName: "Nubia",
                        DisplayNameLocalizationKey: "9A6EBE4445C31F85CEC17FA1465360F6",
                        DisplayNameLocalizationNamespace: "[9F4CEC7346FD4CB3615BF68DC904CF32]",
                        FighterClass: "Assassin",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:ComicInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:YellowClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:RedWhiteandBlueClothing",
                            "TS:Dynamic:CombatWear",
                            "TS:Fixed:Class:Assassin",
                            "TS:Fixed:Nubia",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Fixed:Class",
                          ],
                        },
                        MasteryRewardTrack: "mrt_mastery_c027",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Character/Captures/C027/C027_C027_S00.C027_C027_S00",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C027/Skins/S00/MI_C027_S00_RewardThumbnailMaterial.MI_C027_S00_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "character_c027",
                        "unlock_location_shop",
                        "universe_dc",
                        "character",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca84d",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-fighter-road_gleamium",
                      name: "Nubia gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-fighter-road-description":
                            "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-fighter-road-description":
                                  "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "ProductCTA",
                          type: "text",
                          type_options: {
                            text: { localizations: { "released-season-3-": "Released Season 3!" } },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-fighter-road-tagline":
                                  "Explorer. Guardian of Doom’s Doorway.",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-announcer-pack-account-cosmetics-store",
                  name: "Nubia Announcer Pack",
                  description: {
                    localizations: {
                      "store_product-nubia-announcer-pack-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "announcer_pack_c027",
                      slug: "announcer_pack_c027",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/AnnouncerPacks/AnnouncerPack_C027.AnnouncerPack_C027",
                        AssociatedCharacter: "C027",
                        DisplayName: "Announcer Pack Nubia",
                        DisplayNameLocalizationKey: "AF4FB59C40741D49A3A266826539B9AB",
                        DisplayNameLocalizationNamespace: "[8A543FA64877F162E803058FBC40C6B8]",
                        EnabledForShipping: true,
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/C027/UI/thumb_announcer_c027.thumb_announcer_c027",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c027",
                        "unlock_location_shop",
                        "universe_dc",
                        "announcer_pack",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec268430",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-announcer-pack-account-cosmetics-store_gleamium",
                      name: "Nubia Announcer Pack gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-announcer-pack-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 300,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-announcer-pack-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "an-apple-a-day-account-cosmetics-store",
                  name: "An Apple A Day",
                  description: {
                    localizations: {
                      "store_product-an-apple-a-day-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c027_taunt1",
                      slug: "taunt_c027_taunt1",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/Taunts/Taunt_C027_AppleADay.Taunt_C027_AppleADay",
                        AssociatedCharacter: "C027",
                        DisplayName: "An Apple A Day",
                        DisplayNameLocalizationKey: "030992D943D79994C8124DBF98061176",
                        DisplayNameLocalizationNamespace: "[1C36331D49609965CA2CEE9B0F00893F]",
                        EnabledForShipping: false,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Rewards/Taunts/Emote_C027_AnAppleADay.Emote_C027_AnAppleADay",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Rewards/Taunts/MI_C027_Emote_AnAppleADay_Thumbnail.MI_C027_Emote_AnAppleADay_Thumbnail",
                      },
                      description: "",
                      tags: ["rarity_epic", "character_c027", "universe_dc", "taunt", "unlockable"],
                      id: "66e9a9297af4cd81ec26846b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "an-apple-a-day-account-cosmetics-store_gleamium",
                      name: "An Apple A Day gleamium",
                      description: {
                        localizations: {
                          "store_product-an-apple-a-day-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-an-apple-a-day-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-ringouts-account-cosmetics-store",
                  name: "Nubia Ringouts",
                  description: {
                    localizations: {
                      "store_product-nubia-ringouts-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_c027_ringouts",
                      slug: "stat_tracking_bundle_c027_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/StatTrackingBundle/StatTracking_C027Ringouts.StatTracking_C027Ringouts",
                        AssociatedCharacter: "C027",
                        DisplayName: "Nubia Ringouts",
                        DisplayNameLocalizationKey: "1911EA2E418E9037574933A9D6B89755",
                        DisplayNameLocalizationNamespace: "[B6BDBAAB41ECEAE57A3147ABBA4555AE]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/MvsSeason03/Character/C027/UI/UI_Stat_C027_Ringouts_Badge.UI_Stat_C027_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c027",
                        "unlock_location_character_mastery",
                        "universe_dc",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "66e9a9297af4cd81ec268468",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-ringouts-account-cosmetics-store_gleamium",
                      name: "Nubia Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-ringouts-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-ringouts-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "nubia-total-damage-dealt-account-cosmetics-store",
                  name: "Nubia Total Damage Dealt",
                  description: {
                    localizations: {
                      "store_product-nubia-total-damage-dealt-account-cosmetics-store-description":
                        "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_c027_total_damage_dealt",
                      slug: "stat_tracking_bundle_c027_total_damage_dealt",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason03/Rewards/StatTrackingBundle/StatTracking_C027TotalDamageDealt.StatTracking_C027TotalDamageDealt",
                        AssociatedCharacter: "C027",
                        DisplayName: "Nubia Total Damage Dealt",
                        DisplayNameLocalizationKey: "6043E62E4D69422165285E942390FB96",
                        DisplayNameLocalizationNamespace: "[145BA3A04082286D81C835A7BEDEF0AE]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/MvsSeason03/Character/C027/UI/UI_Stat_C027_TotalDamageDealt_Badge.UI_Stat_C027_TotalDamageDealt_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c027",
                        "unlock_location_character_mastery",
                        "universe_dc",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "66e9a9297af4cd81ec268467",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "nubia-total-damage-dealt-account-cosmetics-store_gleamium",
                      name: "Nubia Total Damage Dealt gleamium",
                      description: {
                        localizations: {
                          "store_product-nubia-total-damage-dealt-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-nubia-total-damage-dealt-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "future-queen-nubias-strength-gleamium-popular_gleamium_sale",
                name: "Future Queen Nubia’s Strength gleamium sale",
                description: {
                  localizations: {
                    "store_product-future-queen-nubias-strength-gleamium-popular-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1570,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3500,
                    already_owned_adjusted_cost: 3500,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "future-queen-nubias-strength-gleamium-popular_gleamium",
                name: "Future Queen Nubia’s Strength gleamium",
                description: {
                  localizations: {
                    "store_product-future-queen-nubias-strength-gleamium-popular-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3500,
                  already_owned_adjusted_cost: 3500,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-future-queen-nubias-strength-gleamium-popular-description":
                            "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Nubia_FutureQueenNubia_Bundle.png",
                          md5: "1091fc99dd68c1071cd9c004c7bebe60",
                          file_size: 707243,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Nubia_FutureQueenNubia_Bundle-3130393166633939646436386331303731636439633030346337626562653630.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Nubia_FutureQueenNubia_Bundle-3130393166633939646436386331303731636439633030346337626562653630.png",
                          id: "6709b856c0cc4f4fead84ec9",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "epic-skin": "Epic Skin" } },
                        { localizations: { "dc-": "DC™" } },
                        { localizations: { "rare-announcer-pack": "Rare Announcer Pack" } },
                        { localizations: { "epic-taunt-emote": "Epic Taunt Emote" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Nubia_FutureQueenNubia_Banner.png",
                        md5: "9ff34e065172909399ec42aa4087dabc",
                        file_size: 5505142,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Nubia_FutureQueenNubia_Banner-3966663334653036353137323930393339396563343261613430383764616263.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Nubia_FutureQueenNubia_Banner-3966663334653036353137323930393339396563343261613430383764616263.png",
                        id: "6709b84af12500be4874dcf9",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "biker-gizmos-wild-ride-popular",
          name: {
            localizations: {
              "store_product-biker-gizmos-wild-ride-popular-name": "Biker Gizmo's Wild Ride3",
            },
          },
          description: {
            localizations: { "store_product-biker-gizmos-wild-ride-popular-description": "" },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "biker-gizmos-wild-ride-popular",
            name: {
              localizations: {
                "store_product-biker-gizmos-wild-ride-popular-name": "Biker Gizmo's Wild Ride3",
              },
            },
            description: {
              localizations: { "store_product-biker-gizmos-wild-ride-popular-description": "" },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "biker-gizmo-skin-store",
                  name: "Biker Gizmo",
                  description: {
                    localizations: { "store_product-biker-gizmo-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c023A_s03",
                      slug: "skin_c023A_s03",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/C023A/Skins/Skin03/C023A_S03.C023A_S03",
                        AssociatedCharacter: "C023A",
                        DisplayName: "Biker Gizmo",
                        DisplayNameLocalizationKey: "C22DDAEE406F1741D215578D305704D6",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Character/Captures/C023A/C023A_C023A_S03.C023A_C023A_S03",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C023A/Skins/Skin03/MI_C023A_S03_RewardThumbnailMaterial.MI_C023A_S03_RewardThumbnailMaterial",
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Class:Mage",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Universe:Gremlins",
                            "TS:Dynamic:PremieredinThe80s",
                            "TS:Dynamic:MovieInspired",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:Fuzzy",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:YellowClothing",
                            "TS:Dynamic:OrangeClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:BlackClothing",
                          ],
                          ParentTags: [
                            "TS:Fixed:Class",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                          ],
                        },
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c023a",
                        "unlock_location_shop",
                        "universe_gremlins",
                        "skin",
                        "unlockable",
                      ],
                      id: "663c0f944b55072b1d7ec71c",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "biker-gizmo-skin-store_gleamium",
                      name: "Biker Gizmo gleamium",
                      description: {
                        localizations: { "store_product-biker-gizmo-skin-store-description": "" },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 800,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-biker-gizmo-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "mog-y-1000-account-cosmetic-store",
                  name: "MOG-Y 1000",
                  description: {
                    localizations: {
                      "store_product-mog-y-1000-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c023A_piano",
                      slug: "taunt_c023A_piano",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/C023A/DataAssets/Taunts/Taunt_C023A_Piano.Taunt_C023A_Piano",
                        AssociatedCharacter: "C023A",
                        DisplayName: "MOG-Y 1000",
                        DisplayNameLocalizationKey: "B5CBB6A74B73D0F53F2DFE8A29E9E9EB",
                        DisplayNameLocalizationNamespace: "[AFD310C946CCC02BD319D69CA7D7EF97]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/C023A/UI/Emote_C023A_Piano.Emote_C023A_Piano",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C023A/UI/MI_C023A_Emote_Piano_Thumbnail.MI_C023A_Emote_Piano_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c023a",
                        "universe_gremlins",
                        "taunt",
                        "unlockable",
                      ],
                      id: "66c4be1645eaf195cd99530f",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "mog-y-1000-account-cosmetic-store_gleamium",
                      name: "MOG-Y 1000 gleamium",
                      description: {
                        localizations: {
                          "store_product-mog-y-1000-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-mog-y-1000-account-cosmetic-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "umbrella-account-cosmetics-store",
                  name: "Umbrella",
                  description: {
                    localizations: {
                      "store_product-umbrella-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c023A_umbrella",
                      slug: "taunt_c023A_umbrella",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/C023A/DataAssets/Taunts/Taunt_C023A_Umbrella.Taunt_C023A_Umbrella",
                        EnabledForShipping: true,
                        AssociatedCharacter: "C023A",
                        DisplayName: "Umbrella",
                        DisplayNameLocalizationKey: "62F0A2C04AE5F9335FB978AA88ED40E1",
                        DisplayNameLocalizationNamespace: "[29266A604365C8453E7B5990D0D70475]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/C023A/UI/Emote_C023A_Umbrella.Emote_C023A_Umbrella",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/C023A/UI/MI_C023A_Emote_Umbrella_Thumbnail.MI_C023A_Emote_Umbrella_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c023a",
                        "unlock_location_shop",
                        "universe_gremlins",
                        "taunt",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be84d",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "umbrella-account-cosmetics-store_gleamium",
                      name: "Umbrella gleamium",
                      description: {
                        localizations: {
                          "store_product-umbrella-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 350,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-umbrella-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                              { localizations: { "gremlins-": "Gremlins™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "gizmo-profile-icon-account-cosmetics-store",
                  name: "Gizmo Profile Icon",
                  description: {
                    localizations: {
                      "store_product-gizmo-profile-icon-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profile_icon_amb_gre_gizmo_1",
                      slug: "profile_icon_amb_gre_gizmo_1",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/ProfileIcons/ProfileIcon_AMB_GRE_Gizmo_1.ProfileIcon_AMB_GRE_Gizmo_1",
                        AssociatedCharacter: "C023A",
                        DisplayName: "Gizmo",
                        DisplayNameLocalizationKey: "B6494BB94D8840299C99BCAAE575E02B",
                        DisplayNameLocalizationNamespace: "[40CD157749CF2127FD7C95A27638C71E]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/Profile_Icons/20210225_AMB_GRE_Icon_Profile_Gizmo.20210225_AMB_GRE_Icon_Profile_Gizmo",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_c023a",
                        "unlock_location_shop",
                        "universe_gremlins",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca8c0",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "gizmo-profile-icon-account-cosmetics-store_gleamium",
                      name: "Gizmo Profile Icon gleamium",
                      description: {
                        localizations: {
                          "store_product-gizmo-profile-icon-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 50,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-gizmo-profile-icon-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-profile-icon": "Rare Profile Icon" } },
                              { localizations: { "gremlins-": "Gremlins™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "gizmo-ringouts-account-cosmetic-store",
                  name: "Gizmo Ringouts",
                  description: {
                    localizations: {
                      "store_product-gizmo-ringouts-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_c023A_ringouts",
                      slug: "stat_tracking_bundle_c023A_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/CharacterRingouts/StatTracking_C023ARingouts.StatTracking_C023ARingouts",
                        EnabledForShipping: true,
                        AssociatedCharacter: "C023A",
                        DisplayName: "Gizmo Ringouts",
                        DisplayNameLocalizationKey: "03ECE9484AE44652A07BD48F5C45361A",
                        DisplayNameLocalizationNamespace: "[70D2C8E84A227B5C4F9C7899F2D4F360]",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Badges/UI_Stat_C023A_Ringouts_Badge.UI_Stat_C023A_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c023a",
                        "unlock_location_character_mastery",
                        "universe_gremlins",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be7fa",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "gizmo-ringouts-account-cosmetic-store_gleamium",
                      name: "Gizmo Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-gizmo-ringouts-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-gizmo-ringouts-account-cosmetic-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { badge: "Badge" } },
                              { localizations: { "gremlins-": "Gremlins™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "biker-gizmos-wild-ride-popular_gleamium_sale",
                name: "Biker Gizmo's Wild Ride gleamium sale",
                description: {
                  localizations: { "store_product-biker-gizmos-wild-ride-popular-description": "" },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1380,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2300,
                    already_owned_adjusted_cost: 2300,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "biker-gizmos-wild-ride-popular_gleamium",
                name: "Biker Gizmo's Wild Ride gleamium",
                description: {
                  localizations: { "store_product-biker-gizmos-wild-ride-popular-description": "" },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2300,
                  already_owned_adjusted_cost: 2300,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-biker-gizmos-wild-ride-popular-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Gizmo_BikerGizmo_Bundle.png",
                          md5: "db545b14554804209c18768e76adeaff",
                          file_size: 480652,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Gizmo_BikerGizmo_Bundle-6462353435623134353534383034323039633138373638653736616465616666.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Gizmo_BikerGizmo_Bundle-6462353435623134353534383034323039633138373638653736616465616666.png",
                          id: "67083db810efb46694ac6039",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "rare-skin": "Rare Skin" } },
                        { localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" } },
                        { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                        { localizations: { "rare-profile-icon": "Rare Profile Icon" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "gremlins-": "Gremlins™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Gizmo_BikerGizmo_Banner.png",
                        md5: "f2d673297a8f141e3f12c6c7dfd69ac6",
                        file_size: 4122937,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Gizmo_BikerGizmo_Banner-6632643637333239376138663134316533663132633663376466643639616336.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Gizmo_BikerGizmo_Banner-6632643637333239376138663134316533663132633663376466643639616336.png",
                        id: "67083dd39ec9ad3c77882edb",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "vampire-vibes-marcelines-sun-hat-popular",
          name: {
            localizations: {
              "store_product-vampire-vibes-marcelines-sun-hat-popular-name":
                "Vampire Vibes: Marceline’s Sun Hat",
            },
          },
          description: {
            localizations: {
              "store_product-vampire-vibes-marcelines-sun-hat-popular-description": "",
            },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "vampire-vibes-marcelines-sun-hat-popular",
            name: {
              localizations: {
                "store_product-vampire-vibes-marcelines-sun-hat-popular-name":
                  "Vampire Vibes: Marceline’s Sun Hat",
              },
            },
            description: {
              localizations: {
                "store_product-vampire-vibes-marcelines-sun-hat-popular-description": "",
              },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "sun-hat-marceline-skin-store",
                  name: "Sun Hat Marceline",
                  description: {
                    localizations: { "store_product-sun-hat-marceline-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "c031_s02",
                      slug: "c031_s02",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Character_C031/C031/Skins/S02/C031_S02.C031_S02",
                        AssociatedCharacter: "C031",
                        DisplayName: "Sun Hat Marceline",
                        DisplayNameLocalizationKey: "52CF534B4CB920349D18B5A0E97BA056",
                        DisplayNameLocalizationNamespace: "",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Animated",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredInThe10s",
                            "TS:Dynamic:TvInspired",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Non-Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:Undead",
                            "TS:Fixed:Class:Bruiser",
                          ],
                          ParentTags: [
                            "TS:Fixed:Universe",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Dynamic",
                            "TS:Fixed:Class",
                          ],
                        },
                        Rarity: "Epic",
                        RewardThumbnail: "/Character_C031/C031/Skins/S02/T_C031_S02.T_C031_S02",
                        RewardThumbnailMaterial:
                          "/Character_C031/C031/Skins/S02/MI_C031_S02_RewardThumbnailMaterial.MI_C031_S02_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c031",
                        "universe_adventure_time",
                        "skin",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4bd",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "sun-hat-marceline-skin-store_gleamium",
                      name: "Sun Hat Marceline gleamium",
                      description: {
                        localizations: {
                          "store_product-sun-hat-marceline-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-sun-hat-marceline-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "fangtastic-account-cosmetics-store",
                  name: "Fangtastic",
                  description: {
                    localizations: {
                      "store_product-fangtastic-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "CN_AT_Marceline_ProfileIcon_Fangtastic",
                      slug: "CN_AT_Marceline_ProfileIcon_Fangtastic",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: false,
                        AssetPath:
                          "/MvsSeason04/Cosmetics/ProfileIcons/DataAsset/CN_AT_Marceline_ProfileIcon_Fangtastic.CN_AT_Marceline_ProfileIcon_Fangtastic",
                        AssociatedCharacter: "C033",
                        DisplayName: "Fangtastic",
                        DisplayNameLocalizationKey: "CBCFF7B0442A33630F1FF4BA75A72201",
                        DisplayNameLocalizationNamespace: "[D7DCA58D4C3B4C17E961B7990396E6CD]",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/ProfileIcons/Texture/20230915_CN_AT_Marceline_ProfileIcon_Fangtastic.20230915_CN_AT_Marceline_ProfileIcon_Fangtastic",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c033",
                        "universe_adventure_time",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca8cb",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "fangtastic-account-cosmetics-store_gleamium",
                      name: "Fangtastic gleamium",
                      description: {
                        localizations: {
                          "store_product-fangtastic-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-fangtastic-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "marceline-total-damage-dealt-account-cosmetics-store",
                  name: "Marceline Total Damage Dealt",
                  description: {
                    localizations: {
                      "store_product-marceline-total-damage-dealt-account-cosmetics-store-description":
                        "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stattracking_c031totaldamagedealt",
                      slug: "stattracking_c031totaldamagedealt",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/StatTrackingBundle/StatTracking_C031TotalDamageDealt.StatTracking_C031TotalDamageDealt",
                        AssociatedCharacter: "C025",
                        DisplayName: "Marceline Total Damage Dealt",
                        DisplayNameLocalizationKey: "5A6F7A004ABE5A8C0055558B6726E040",
                        DisplayNameLocalizationNamespace: "[EB722EC240980E08C744EFBA70353759]",
                        EnabledForShipping: true,
                        Rarity: "None",
                        RewardThumbnail:
                          "/MvsSeason04/Character/C031/UI/UI_Stat_C031_TotalDamageDealt_Badge.UI_Stat_C031_TotalDamageDealt_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_c025",
                        "unlock_location_character_mastery",
                        "universe_adventure_time",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4e2",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "marceline-total-damage-dealt-account-cosmetics-store_gleamium",
                      name: "Marceline Total Damage Dealt gleamium",
                      description: {
                        localizations: {
                          "store_product-marceline-total-damage-dealt-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-marceline-total-damage-dealt-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "idk-vampire-stuff-account-cosmetics-store",
                  name: "IDK, Vampire Stuff",
                  description: {
                    localizations: {
                      "store_product-idk-vampire-stuff-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_cavebat_legendary",
                      slug: "banner_cavebat_legendary",
                      type_class: "unlockable",
                      data: {
                        EnabledForShipping: true,
                        AssetPath:
                          "/MvsSeason04/Cosmetics/Banners/Cave/Banner_CaveBat_Legendary.Banner_CaveBat_Legendary",
                        AssociatedCharacter: "C026",
                        DisplayName: "IDK, Vampire Stuff",
                        DisplayNameLocalizationKey: "D96CF20E441F3A63C24FFD8CF2958BE0",
                        DisplayNameLocalizationNamespace: "",
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/Banners/Cave/UI_Banner_CaveLegendary_Thumbnail.UI_Banner_CaveLegendary_Thumbnail",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Cosmetics/Banners/Cave/MI_Banner_CaveBat_Legendary_Preview.MI_Banner_CaveBat_Legendary_Preview",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c026",
                        "universe_adventure_time",
                        "banner",
                        "unlockable",
                      ],
                      id: "663288a2358a2a62107ca891",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "idk-vampire-stuff-account-cosmetics-store_gleamium",
                      name: "IDK, Vampire Stuff gleamium",
                      description: {
                        localizations: {
                          "store_product-idk-vampire-stuff-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 600,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-idk-vampire-stuff-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "drop-the-bass-account-cosmetics-store",
                  name: "Drop the Bass",
                  description: {
                    localizations: {
                      "store_product-drop-the-bass-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_c031_taunt1",
                      slug: "taunt_c031_taunt1",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Character_C031/C031/DataAssets/Taunts/Taunt_C031_Taunt1.Taunt_C031_Taunt1",
                        AssociatedCharacter: "C031",
                        DisplayName: "Drop the Bass",
                        DisplayNameLocalizationKey: "424D1F8B4FCFA1BEFAB896B9EDE08E02",
                        DisplayNameLocalizationNamespace: "[C296927445D48F246A1018B56C767B0F]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/Character_C031/C031/UI/Emote_C031_Taunt1.Emote_C031_Taunt1",
                        RewardThumbnailMaterial:
                          "/Character_C031/C031/UI/MI_c031_Taunt1_Thumbnail.MI_c031_Taunt1_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_c031",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "taunt",
                        "unlockable",
                      ],
                      id: "675874d45ca68abece294f5b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "drop-the-bass-account-cosmetics-store_gleamium",
                      name: "Drop the Bass gleamium",
                      description: {
                        localizations: {
                          "store_product-drop-the-bass-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-drop-the-bass-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "marceline-early-access",
                  name: "Marceline",
                  description: {
                    localizations: {
                      "store_product-marceline-early-access-description":
                        "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: false,
                  enabled: {
                    _hydra_StoreEnabed: [
                      {
                        start: { _hydra_unix_date: 1742265244 },
                        end: { _hydra_unix_date: 1742351644 },
                        rendered: false,
                      },
                    ],
                  },
                  has_active_sku: false,
                  valid_user_segments: true,
                  is_purchasable: false,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "character_C031",
                      slug: "character_C031",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/Character_C031/C031/Char_C031.Char_C031",
                        AssociatedCharacter: "C031",
                        ContentLevel: 5,
                        DisplayName: "Marceline the Vampire Queen",
                        DisplayNameLocalizationKey: "0CB87D764B8838C1161DB881A84D8910",
                        DisplayNameLocalizationNamespace: "[A2FB2AE6404C2A99164754AB65CE8A7C]",
                        EnabledForShipping: true,
                        FighterClass: "Bruiser",
                        IsUnlockedByDefault: false,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Fixed:Marceline",
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Bruiser",
                          ],
                          ParentTags: [
                            "TS:Fixed:Universe",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed:Class",
                          ],
                        },
                        MasteryRewardTrack: "mrt_mastery_c031",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Character_C031/C031/Skins/C031_placeholder_capture.C031_placeholder_capture",
                        RewardThumbnailMaterial:
                          "/Character_C031/C031/Skins/MI_C031_Skin_000_RewardThumbnailMaterial.MI_C031_Skin_000_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "character_c031",
                        "universe_adventure_time",
                        "character",
                        "unlockable",
                      ],
                      id: "669fd3df7d13e0649bcb92e3",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "marceline-early-access_character-unlock-ticket-currency",
                      name: "Marceline character-unlock-ticket-currency",
                      description: {
                        localizations: {
                          "store_product-marceline-early-access-description":
                            "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Character Unlock Ticket Currency",
                          slug: "character-unlock-ticket-currency",
                          type_class: "currency",
                          data: {},
                          description: "",
                          tags: ["currency", "character_ticket"],
                          id: "663288a2358a2a62107ca9c0",
                        },
                        quantity: 1,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: {
                        _hydra_StoreEnabed: [
                          {
                            start: { _hydra_unix_date: 1742265244 },
                            end: { _hydra_unix_date: 1742351644 },
                            rendered: false,
                          },
                        ],
                      },
                      is_available_for_purchase: false,
                      visual_data: [],
                      preferred: true,
                    },
                    {
                      sku: "marceline-early-access_gleamium",
                      name: "Marceline gleamium",
                      description: {
                        localizations: {
                          "store_product-marceline-early-access-description":
                            "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: {
                        _hydra_StoreEnabed: [
                          {
                            start: { _hydra_unix_date: 1742265244 },
                            end: { _hydra_unix_date: 1742351644 },
                            rendered: false,
                          },
                        ],
                      },
                      is_available_for_purchase: false,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-marceline-early-access-description":
                                  "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "ProductCTA",
                          type: "text",
                          type_options: {
                            text: { localizations: { "new-fighter-": "New Fighter!" } },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "Tagline",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-marceline-early-access-tagline":
                                  "All hail the Vampire Queen!",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "vampire-vibes-marcelines-sun-hat-popular_gleamium_sale",
                name: "Vampire Vibes: Marceline’s Sun Hat gleamium sale",
                description: {
                  localizations: {
                    "store_product-vampire-vibes-marcelines-sun-hat-popular-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 2640,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 4400,
                    already_owned_adjusted_cost: 4400,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "vampire-vibes-marcelines-sun-hat-popular_gleamium",
                name: "Vampire Vibes: Marceline’s Sun Hat gleamium",
                description: {
                  localizations: {
                    "store_product-vampire-vibes-marcelines-sun-hat-popular-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 4400,
                  already_owned_adjusted_cost: 4400,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-vampire-vibes-marcelines-sun-hat-popular-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Marceline_MarcelinesSunHat_Bundle.png",
                          md5: "05d21c4709c95f6420895708869900a4",
                          file_size: 606955,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Marceline_MarcelinesSunHat_Bundle-3035643231633437303963393566363432303839353730383836393930306134.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Marceline_MarcelinesSunHat_Bundle-3035643231633437303963393566363432303839353730383836393930306134.png",
                          id: "67585fb6ea0618063cf45616",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "legendary-banner": "Legendary Banner" } },
                        { localizations: { "legendary-taunt-emote": "Legendary Taunt Emote" } },
                        { localizations: { "epic-skin": "Epic Skin" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "adventure-time-": "Adventure Time™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Marceline_MarcelinesSunHat_Banner.png",
                        md5: "6f9c6778d0b8e11dc2500a30afcc0ca8",
                        file_size: 2273614,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Marceline_MarcelinesSunHat_Banner-3666396336373738643062386531316463323530306133306166636330636138.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Marceline_MarcelinesSunHat_Banner-3666396336373738643062386531316463323530306133306166636330636138.png",
                        id: "67585facabb833a82895a3a2",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "finns-nightmare-popular",
          name: {
            localizations: { "store_product-finns-nightmare-popular-name": "Finn's Nightmare" },
          },
          description: {
            localizations: { "store_product-finns-nightmare-popular-description": "" },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "finns-nightmare-popular",
            name: {
              localizations: { "store_product-finns-nightmare-popular-name": "Finn's Nightmare" },
            },
            description: {
              localizations: { "store_product-finns-nightmare-popular-description": "" },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "finn-jason-voorhees-skin-store",
                  name: "Finn Jason Voorhees",
                  description: {
                    localizations: {
                      "store_product-finn-jason-voorhees-skin-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c035_s02",
                      slug: "skin_c035_s02",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason03/Character/Jason/Skins/S02/C035_S02.C035_S02",
                        AssociatedCharacter: "C035",
                        DisplayName: "Finn Jason Voorhees",
                        DisplayNameLocalizationKey: "1062DEC54A15C7552E02DD9901CAC5ED",
                        DisplayNameLocalizationNamespace: "[F466D7D34847573CEC1BC3A724F9D2BB]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Tank",
                            "TS:Fixed:Universe:AdventureTime",
                            "TS:Fixed:Universe:Fridaythe13th",
                            "TS:Dynamic:Crossover",
                            "TS:Dynamic:Halloween",
                            "TS:Dynamic:Season:Villainous",
                            "TS:Dynamic:Spooky",
                            "TS:Dynamic:SwordWielder",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:Headwear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:BlueClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:RedClothing",
                            "TS:Dynamic:RedWhiteandBlueClothing",
                            "TS:Dynamic:Undead",
                            "TS:Dynamic:SportsAttire",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                            "TS:Dynamic:Season",
                          ],
                        },
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/MvsSeason03/Character/Jason/Skins/S02/T_C035_S02.T_C035_S02",
                        RewardThumbnailMaterial:
                          "/MvsSeason03/Character/Jason/Skins/S02/MI_C035_S02_RewardThumbnailMaterial.MI_C035_S02_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_c035",
                        "unlock_location_shop",
                        "universe_friday_the13th",
                        "skin",
                        "unlockable",
                      ],
                      id: "66e9a9287af4cd81ec268400",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-jason-voorhees-skin-store_gleamium",
                      name: "Finn Jason Voorhees gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-jason-voorhees-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1500,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-jason-voorhees-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "lady-rainicorns-trail-account-cosmetics-store",
                  name: "Lady Rainicorn's Trail",
                  description: {
                    localizations: {
                      "store_product-lady-rainicorns-trail-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "banner_lady_rainicorns_trail",
                      slug: "banner_lady_rainicorns_trail",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/LadyRainicornsTrail_Banner.LadyRainicornsTrail_Banner",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Lady Rainicorn's Trail",
                        DisplayNameLocalizationKey: "053BC1CE4DBFC402FAC794B47E5BE117",
                        DisplayNameLocalizationNamespace: "[5092002D4051FA90F678B7961F6C60A4]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/UI_Banner_LadyRainicorn_Thumbnail.UI_Banner_LadyRainicorn_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/PreMatch/Banners/LadyRainicornsTrail/UI_Banner_LadyRainicorn_Preview.UI_Banner_LadyRainicorn_Preview",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "banner",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be83b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "lady-rainicorns-trail-account-cosmetics-store_gleamium",
                      name: "Lady Rainicorn's Trail gleamium",
                      description: {
                        localizations: {
                          "store_product-lady-rainicorns-trail-account-cosmetics-store-description":
                            "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-lady-rainicorns-trail-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-banner": "Rare Banner" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "blade-of-grass-account-cosmetics-store",
                  name: "Blade of Grass",
                  description: {
                    localizations: {
                      "store_product-blade-of-grass-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "ring_out_vfx_blade_of_grass",
                      slug: "ring_out_vfx_blade_of_grass",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/RingOutVfx/ROV_BladeofGrass.ROV_BladeofGrass",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Finn",
                        DisplayName: "Blade of Grass",
                        DisplayNameLocalizationKey: "65B612744F6734ACED755F88C780D05C",
                        DisplayNameLocalizationNamespace: "[5FCA05D947B95DE78DD43794DC166F9D]",
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Ringouts/AdventureTime_BladeofGrass/RO_BladeGrass_Thumbnail.RO_BladeGrass_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/VFX_Ringouts/AdventureTime_BladeofGrass/MI_Flipbook_RO_BladeGrass.MI_Flipbook_RO_BladeGrass",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_finn",
                        "unlock_location_shop",
                        "universe_adventure_time",
                        "ring_out_vfx",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be835",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "blade-of-grass-account-cosmetics-store_gleamium",
                      name: "Blade of Grass gleamium",
                      description: {
                        localizations: {
                          "store_product-blade-of-grass-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 1200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-blade-of-grass-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "epic-ringout": "Epic Ringout" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "finn-happy-account-cosmetics-store",
                  name: "Finn - Happy",
                  description: {
                    localizations: {
                      "store_product-finn-happy-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_finn_happy",
                      slug: "emote_finn_happy",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/Finn/DataAssets/Emote_Finn_Happy.Emote_Finn_Happy",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Base",
                        DisplayName: "Finn - Happy",
                        DisplayNameLocalizationKey: "B1D62E4F41C56A3FD5F4AE83562366F0",
                        DisplayNameLocalizationNamespace: "[35A6E07440179FCAD0D00DB594DA30C8]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/Finn/UI/2DEmote_Finn_Happy_Thumbnail.2DEmote_Finn_Happy_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/Finn/UI/MI_Finn_Happy_Thumbnail.MI_Finn_Happy_Thumbnail",
                      },
                      description: "",
                      tags: ["rarity_rare", "universe_adventure_time", "emote", "unlockable"],
                      id: "62fa7c0804da60ea6d57cfcf",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "finn-happy-account-cosmetics-store_gleamium",
                      name: "Finn - Happy gleamium",
                      description: {
                        localizations: {
                          "store_product-finn-happy-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-finn-happy-account-cosmetics-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                              { localizations: { "adventure-time-": "Adventure Time™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "finns-nightmare-popular_gleamium_sale",
                name: "Finn's Nightmare gleamium sale",
                description: {
                  localizations: { "store_product-finns-nightmare-popular-description": "" },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1340,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 3000,
                    already_owned_adjusted_cost: 3000,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "finns-nightmare-popular_gleamium",
                name: "Finn's Nightmare gleamium",
                description: {
                  localizations: { "store_product-finns-nightmare-popular-description": "" },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 3000,
                  already_owned_adjusted_cost: 3000,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: { "store_product-finns-nightmare-popular-description": "" },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "FinnsNightmare_Bundle.png",
                          md5: "0d70808557a769b8e38e583678043317",
                          file_size: 408295,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/FinnsNightmare_Bundle-3064373038303835353761373639623865333865353833363738303433333137.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FinnsNightmare_Bundle-3064373038303835353761373639623865333865353833363738303433333137.png",
                          id: "671fea943483146569e71d7b",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "epic-skin": "Epic Skin" } },
                        { localizations: { "rare-banner": "Rare Banner" } },
                        { localizations: { "epic-ringout": "Epic Ringout" } },
                        { localizations: { "rare-sticker-emote": "Rare Sticker Emote" } },
                        { localizations: { "adventure-time-": "Adventure Time™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "FinnsNightmare_Banner.png",
                        md5: "6e02e9ead421d9bb2109978d8b28538e",
                        file_size: 2071114,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/FinnsNightmare_Banner-3665303265396561643432316439626232313039393738643862323835333865.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/FinnsNightmare_Banner-3665303265396561643432316439626232313039393738643862323835333865.png",
                        id: "671fea88568660549a8cfe65",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
        {
          slug: "waynes-school-of-justice-popular",
          name: {
            localizations: {
              "store_product-waynes-school-of-justice-popular-name": "Wayne's School of Justice",
            },
          },
          description: {
            localizations: { "store_product-waynes-school-of-justice-popular-description": "" },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "waynes-school-of-justice-popular",
            name: {
              localizations: {
                "store_product-waynes-school-of-justice-popular-name": "Wayne's School of Justice",
              },
            },
            description: {
              localizations: { "store_product-waynes-school-of-justice-popular-description": "" },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: 1,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "bundle",
            type_options: {
              store_products: [
                {
                  bundle_ref_type: "simple",
                  slug: "headmaster-wayne-skin-store",
                  name: "Headmaster Wayne",
                  description: {
                    localizations: { "store_product-headmaster-wayne-skin-store-description": "" },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "skin_c004_s23",
                      slug: "skin_c004_s23",
                      type_class: "unlockable",
                      data: {
                        AssetPath: "/MvsSeason04/Character/C004/Skins/S23/C004_S23.C004_S23",
                        AssociatedCharacter: "Batman",
                        DisplayName: "Headmaster Wayne",
                        DisplayNameLocalizationKey: "DAA2916E48C94AC6A5B6739D04861ABF",
                        DisplayNameLocalizationNamespace: "[90B37F854AC340D30895F297475C9070]",
                        EnabledForShipping: true,
                        ItemRewardTags: {
                          GameplayTags: [
                            "TS:Fixed:FighterDifficulty:Medium",
                            "TS:Fixed:Class:Bruiser",
                            "TS:Fixed:Universe:DC",
                            "TS:Dynamic:MythicVista",
                            "TS:Dynamic:Heroic",
                            "TS:Dynamic:Caped",
                            "TS:Dynamic:Eyewear",
                            "TS:Dynamic:PremieredinThe2020s",
                            "TS:Dynamic:PFGOriginal",
                            "TS:Dynamic:Human",
                            "TS:Dynamic:Rich",
                            "TS:Dynamic:Adult",
                            "TS:Dynamic:BlackClothing",
                            "TS:Dynamic:WhiteClothing",
                            "TS:Dynamic:SemiFormal",
                            "TS:Dynamic:Detective",
                          ],
                          ParentTags: [
                            "TS:Fixed:FighterDifficulty",
                            "TS:Fixed",
                            "TS",
                            "TS:Fixed:Class",
                            "TS:Fixed:Universe",
                            "TS:Dynamic",
                          ],
                        },
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Character/C004/Skins/S23/T_C004_S23.T_C004_S23",
                        RewardThumbnailMaterial:
                          "/MvsSeason04/Character/C004/Skins/S23/MI_C004_S23_RewardThumbnailMaterial.MI_C004_S23_RewardThumbnailMaterial",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "character_batman",
                        "universe_dc",
                        "skin",
                        "unlockable",
                      ],
                      id: "670e92120e3027823c1d34bb",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "headmaster-wayne-skin-store_gleamium",
                      name: "Headmaster Wayne gleamium",
                      description: {
                        localizations: {
                          "store_product-headmaster-wayne-skin-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 2000,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-headmaster-wayne-skin-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "headmasters-might-account-cosmetics-store",
                  name: "Headmaster's Might",
                  description: {
                    localizations: {
                      "store_product-headmasters-might-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "profile_icon_headmastersmight",
                      slug: "profile_icon_headmastersmight",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/MvsSeason04/Cosmetics/ProfileIcons/DataAsset/20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight.20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight",
                        AssociatedCharacter: "Base",
                        DisplayName: "Headmaster's Might",
                        DisplayNameLocalizationKey: "5B0FAEB943A663E8657FAF986BEDD083",
                        DisplayNameLocalizationNamespace: "[254853654B885D984915DE994A1F92A7]",
                        EnabledForShipping: true,
                        Rarity: "Legendary",
                        RewardThumbnail:
                          "/MvsSeason04/Cosmetics/ProfileIcons/Texture/20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight.20241004_DC_BAT_Batman_ProfileIcon_HeadmastersMight",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "rarity_legendary",
                        "unlock_location_shop",
                        "universe_dc",
                        "profile_icon",
                        "unlockable",
                      ],
                      id: "67338bb9180fa11bf187c4aa",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "headmasters-might-account-cosmetics-store_gleamium",
                      name: "Headmaster's Might gleamium",
                      description: {
                        localizations: {
                          "store_product-headmasters-might-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 200,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-headmasters-might-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "batman-ringouts-account-cosmetics-store",
                  name: "Batman Ringouts",
                  description: {
                    localizations: {
                      "store_product-batman-ringouts-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "stat_tracking_bundle_batman_ringouts",
                      slug: "stat_tracking_bundle_batman_ringouts",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/CharacterRingouts/StatTracking_BatmanRingouts.StatTracking_BatmanRingouts",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Batman",
                        DisplayName: "Batman Ringouts",
                        DisplayNameLocalizationKey: "C17B9CD14371E142F7C2D0A0C88169A4",
                        DisplayNameLocalizationNamespace: "[F2180BE9405986F5AC645FB311FB6F96]",
                        Rarity: "None",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/BatmanV2/UI/UI_Stat_Batman_Ringouts_Badge.UI_Stat_Batman_Ringouts_Badge",
                        RewardThumbnailMaterial: "",
                      },
                      description: "",
                      tags: [
                        "character_batman",
                        "unlock_location_shop",
                        "universe_dc",
                        "stat_tracking_bundle",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be803",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "batman-ringouts-account-cosmetics-store_gleamium",
                      name: "Batman Ringouts gleamium",
                      description: {
                        localizations: {
                          "store_product-batman-ringouts-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 100,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-batman-ringouts-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { badge: "Badge" } },
                              { localizations: { "dc-": "DC™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "first-try-account-cosmetic-store",
                  name: "First Try",
                  description: {
                    localizations: {
                      "store_product-first-try-account-cosmetic-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: true,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "emote_batman_firsttry",
                      slug: "emote_batman_firsttry",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/BatmanV2/DataAssets/Emote_Batman_FirstTry.Emote_Batman_FirstTry",
                        AssociatedCharacter: "Batman",
                        DisplayName: "First Try",
                        DisplayNameLocalizationKey: "52ABF32D4CB89B70DD3F7088C3A06133",
                        DisplayNameLocalizationNamespace: "[096828D34B99D6A7004840AD7614FC51]",
                        EnabledForShipping: true,
                        Rarity: "Epic",
                        RewardThumbnail:
                          "/Game/Panda_Main/VFX_Emotes/Batman_FirstTry/T_Batman_FirstTry_Thumbnail.T_Batman_FirstTry_Thumbnail",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/VFX_Emotes/Batman_FirstTry/MI_Batman_FirstTry_Thumbnail.MI_Batman_FirstTry_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_epic",
                        "character_batman",
                        "unlock_location_shop",
                        "universe_dc",
                        "emote",
                        "unlockable",
                      ],
                      id: "668425a9a81dece5374b854b",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "first-try-account-cosmetic-store_gleamium",
                      name: "First Try gleamium",
                      description: {
                        localizations: {
                          "store_product-first-try-account-cosmetic-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 250,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-first-try-account-cosmetic-store-description": "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
                {
                  bundle_ref_type: "simple",
                  slug: "utility-belt-account-cosmetics-store",
                  name: "Utility Belt",
                  description: {
                    localizations: {
                      "store_product-utility-belt-account-cosmetics-store-description": "",
                    },
                  },
                  data: null,
                  already_owned: false,
                  number_times_purchased: 0,
                  times_can_purchase: 1,
                  is_player_purchasable: true,
                  is_store_purchasable: true,
                  enabled: true,
                  has_active_sku: true,
                  valid_user_segments: true,
                  is_purchasable: true,
                  type: "item",
                  type_options: {
                    reward_item: {
                      name: "taunt_batman_utility_belt",
                      slug: "taunt_batman_utility_belt",
                      type_class: "unlockable",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Characters/BatmanV2/DataAssets/Taunts/Taunt_Batman_UtilityBelt.Taunt_Batman_UtilityBelt",
                        EnabledForShipping: true,
                        AssociatedCharacter: "Batman",
                        DisplayName: "Utility Belt",
                        DisplayNameLocalizationKey: "FF75854D45455321DEB9518A589F0956",
                        DisplayNameLocalizationNamespace: "[992AE3B34721907847E397A9A306D27A]",
                        Rarity: "Rare",
                        RewardThumbnail:
                          "/Game/Panda_Main/Characters/BatmanV2/UI/Emote_Batman_UtilityBelt.Emote_Batman_UtilityBelt",
                        RewardThumbnailMaterial:
                          "/Game/Panda_Main/Characters/BatmanV2/UI/M_Batman_Emote_UtilityBelt_Thumbnail.M_Batman_Emote_UtilityBelt_Thumbnail",
                      },
                      description: "",
                      tags: [
                        "rarity_rare",
                        "character_batman",
                        "unlock_location_shop",
                        "universe_dc",
                        "taunt",
                        "unlockable",
                      ],
                      id: "6373c63b099b728f023be851",
                    },
                    quantity: 1,
                  },
                  skus: [
                    {
                      sku: "utility-belt-account-cosmetics-store_gleamium",
                      name: "Utility Belt gleamium",
                      description: {
                        localizations: {
                          "store_product-utility-belt-account-cosmetics-store-description": "",
                        },
                      },
                      data: null,
                      type: "virtual",
                      price_type: "virtual",
                      price_type_options: {
                        currency_inventory_item: {
                          name: "Gleamium",
                          slug: "gleamium",
                          type_class: "currency",
                          data: {
                            AssetPath:
                              "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                            RewardThumbnail:
                              "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                            DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                          },
                          description: "",
                          tags: ["currency", "consumable"],
                          id: "663288a2358a2a62107ca852",
                        },
                        quantity: 350,
                      },
                      recurrence_is_active: false,
                      max_per_recurrence: null,
                      current_recurrence_purchase_count: 0,
                      valid_user_segments: true,
                      is_price_valid: true,
                      enabled: true,
                      is_available_for_purchase: true,
                      visual_data: [],
                      preferred: false,
                    },
                  ],
                  visual_data: [
                    {
                      name: "Default",
                      layers: [
                        {
                          name: "Description",
                          type: "text",
                          type_options: {
                            text: {
                              localizations: {
                                "store_product-utility-belt-account-cosmetics-store-description":
                                  "",
                              },
                            },
                          },
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: {
                            Value: [
                              { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                              { localizations: { "dc-": "DC™" } },
                            ],
                          },
                        },
                        {
                          name: "AdditionalVisualData",
                          type: "data_only",
                          type_options: {},
                          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            skus: [
              {
                sku: "waynes-school-of-justice-popular_gleamium_sale",
                name: "Wayne's School of Justice gleamium sale",
                description: {
                  localizations: {
                    "store_product-waynes-school-of-justice-popular-description": "",
                  },
                },
                data: null,
                type: "sale",
                price_type: "virtual_sale",
                price_type_options: {
                  quantity: 1190,
                  original: {
                    currency_inventory_item: {
                      name: "Gleamium",
                      slug: "gleamium",
                      type_class: "currency",
                      data: {
                        AssetPath:
                          "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail:
                          "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 2900,
                    already_owned_adjusted_cost: 2650,
                    value: null,
                  },
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
              {
                sku: "waynes-school-of-justice-popular_gleamium",
                name: "Wayne's School of Justice gleamium",
                description: {
                  localizations: {
                    "store_product-waynes-school-of-justice-popular-description": "",
                  },
                },
                data: null,
                type: "proxy",
                price_type: "virtual_bundle",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  original_cost: 2900,
                  already_owned_adjusted_cost: 2650,
                  value: null,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: {
                          "store_product-waynes-school-of-justice-popular-description": "",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Thumbnail",
                    type: "image",
                    type_options: {
                      area_of_focus: {
                        center_point_x: 0.5,
                        center_point_y: 0.5,
                        width: { _hydra_double: 1 },
                        height: { _hydra_double: 1 },
                        scale: { _hydra_double: 1 },
                      },
                      file_reference: {
                        _customType: "hydra_reference",
                        value: {
                          tags: [],
                          drive_slug: "multiversus",
                          path: "",
                          filename: "Batman_WaynesSchoolofJustice_Bundle.png",
                          md5: "c158680f3f363f65cae6125644b4b6e7",
                          file_size: 524646,
                          mime_type: "image/png",
                          content_key:
                            "multiversus/Batman_WaynesSchoolofJustice_Bundle-6331353836383066336633363366363563616536313235363434623462366537.png",
                          url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Batman_WaynesSchoolofJustice_Bundle-6331353836383066336633363366363563616536313235363434623462366537.png",
                          id: "6732b97eae0074a3a50c8e56",
                        },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "Tags",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: {
                      Value: [
                        { localizations: { "legendary-skin": "Legendary Skin" } },
                        { localizations: { "legendary-profile-icon": "Legendary Profile Icon" } },
                        { localizations: { "epic-sticker-emote": "Epic Sticker Emote" } },
                        { localizations: { "rare-taunt-emote": "Rare Taunt Emote" } },
                        { localizations: { badge: "Badge" } },
                        { localizations: { "dc-": "DC™" } },
                      ],
                    },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: true, ShowSaleLabel: true },
                  },
                ],
              },
            ],
          },
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "FeaturedAreaBackground",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Batman_WaynesSchoolofJustice_Banner.png",
                        md5: "e531381688899592e489936f2841f8ed",
                        file_size: 2020705,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Batman_WaynesSchoolofJustice_Banner-6535333133383136383838393935393265343839393336663238343166386564.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Batman_WaynesSchoolofJustice_Banner-6535333133383136383838393935393265343839393336663238343166386564.png",
                        id: "6732b96b1c270b273b2b21a3",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
              ],
            },
          ],
        },
      ],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "IconTexturePath",
              type: "ingame_asset",
              type_options: {
                area_of_focus: {
                  center_point_x: 0.5,
                  center_point_y: 0.5,
                  width: { _hydra_double: 1 },
                  height: { _hydra_double: 1 },
                  scale: { _hydra_double: 1 },
                },
                ingame_path:
                  "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/ui_icons_star.ui_icons_star'",
              },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "554" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "900" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "daily-deals-variant-1",
      template_slug: "daily-deals-variant-1",
      name: { localizations: { "layout_area-daily-deals-variant-1-name": "Daily Deals" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "dynamic_linear",
      enabled: true,
      items: [],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "360" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "560" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "MaxNumColumns",
              type: "text",
              type_options: { text: "11" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "MaxNumRows",
              type: "text",
              type_options: { text: "1" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "bundle-breakout-variant-1",
      template_slug: "bundle-breakout-variant-1",
      name: { localizations: { "layout_area-bundle-breakout-variant-1-name": "Custom Cart" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "bundle",
      enabled: true,
      items: [null],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "IconTexturePath",
              type: "ingame_asset",
              type_options: {
                area_of_focus: {
                  center_point_x: 0.5,
                  center_point_y: 0.5,
                  width: { _hydra_double: 1 },
                  height: { _hydra_double: 1 },
                  scale: { _hydra_double: 1 },
                },
                ingame_path:
                  "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/ui_icons_box.ui_icons_box'",
              },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "CellSpans",
              type: "data_only",
              type_options: {},
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
              data: {
                CellSpansData: [
                  [2, 6],
                  [2, 2],
                  [1, 3],
                  [1, 3],
                  [1, 3],
                  [1, 3],
                  [1, 3],
                  [1, 3],
                  [1, 3],
                  [1, 3],
                ],
              },
            },
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "184" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "265" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "FillPriority",
              type: "text",
              type_options: { text: "ROW" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "MaxNumColumns",
              type: "text",
              type_options: { text: "999" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "MaxNumRows",
              type: "text",
              type_options: { text: "2" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "gleamium-variant-1",
      template_slug: "gleamium-variant-1",
      name: { localizations: { "layout_area-gleamium-variant-1-name": "Currency" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "fixed_linear",
      enabled: true,
      items: [
        {
          slug: "gleamium-ticket-exchange",
          name: "Gleamium Ticket Exchange",
          description: {
            localizations: { "store_product-gleamium-ticket-exchange-description": "" },
          },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "gleamium-ticket-exchange",
            name: "Gleamium Ticket Exchange",
            description: {
              localizations: { "store_product-gleamium-ticket-exchange-description": "" },
            },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: null,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "item",
            type_options: {
              reward_item: {
                name: "Gleamium",
                slug: "gleamium",
                type_class: "currency",
                data: {
                  AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                  RewardThumbnail:
                    "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                  DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                },
                description: "",
                tags: ["currency", "consumable"],
                id: "663288a2358a2a62107ca852",
              },
              quantity: 1000,
            },
            skus: [
              {
                sku: "gleamium-ticket-exchange_character-unlock-ticket-currency",
                name: "Gleamium Ticket Exchange character-unlock-ticket-currency",
                description: {
                  localizations: { "store_product-gleamium-ticket-exchange-description": "" },
                },
                data: null,
                type: "virtual",
                price_type: "virtual",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Character Unlock Ticket Currency",
                    slug: "character-unlock-ticket-currency",
                    type_class: "currency",
                    data: {},
                    description: "",
                    tags: ["currency", "character_ticket"],
                    id: "663288a2358a2a62107ca9c0",
                  },
                  quantity: 1,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: true,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: { "store_product-gleamium-ticket-exchange-description": "" },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                  },
                ],
              },
            ],
          },
          visual_data: [{ name: "Default", layers: [] }],
        },
        {
          slug: "toasts",
          name: "Toasts",
          description: { localizations: { "store_product-toasts-description": "" } },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "toasts",
            name: "Toasts",
            description: { localizations: { "store_product-toasts-description": "" } },
            data: null,
            already_owned: false,
            number_times_purchased: 2,
            times_can_purchase: null,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "item",
            type_options: {
              reward_item: {
                name: "Match Toasts",
                slug: "match_toasts",
                type_class: "consumable",
                data: {
                  AssetPath: "/Game/Panda_Main/Currencies/Reward_Toasts.Reward_Toasts",
                  RewardThumbnail:
                    "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_toasts.t_ui_icon_toasts",
                },
                description: "",
                tags: ["consumable", "match_toasts", "currency"],
                id: "62cf30d0154cdf898c663298",
              },
              quantity: 30,
            },
            skus: [
              {
                sku: "toasts_gleamium",
                name: "Toasts gleamium",
                description: { localizations: { "store_product-toasts-description": "" } },
                data: null,
                type: "virtual",
                price_type: "virtual",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  quantity: 50,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: { localizations: { "store_product-toasts-description": "" } },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                  },
                ],
              },
            ],
          },
          visual_data: [{ name: "Default", layers: [] }],
        },
        {
          slug: "perk-currency-1000",
          name: "Perk Currency",
          description: { localizations: { "store_product-perk-currency-1000-description": "" } },
          data: null,
          type: "store",
          embedded_object_type: "store_product",
          embedded_object: {
            slug: "perk-currency-1000",
            name: "Perk Currency",
            description: { localizations: { "store_product-perk-currency-1000-description": "" } },
            data: null,
            already_owned: false,
            number_times_purchased: 0,
            times_can_purchase: null,
            is_player_purchasable: true,
            is_store_purchasable: true,
            enabled: true,
            has_active_sku: true,
            valid_user_segments: true,
            is_purchasable: true,
            type: "item",
            type_options: {
              reward_item: {
                name: "Perk Currency",
                slug: "perk_currency",
                type_class: "currency",
                data: {
                  AssetPath:
                    "/Game/Panda_Main/Currencies/Currency_PerkCurrency.Currency_PerkCurrency",
                  RewardThumbnail:
                    "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_perkcurrency.t_ui_icon_perkcurrency",
                },
                description: "",
                tags: ["currency"],
                id: "663288a2358a2a62107ca8ef",
              },
              quantity: 1000,
            },
            skus: [
              {
                sku: "perk-currency-1000_gleamium",
                name: "Perk Currency gleamium",
                description: {
                  localizations: { "store_product-perk-currency-1000-description": "" },
                },
                data: null,
                type: "virtual",
                price_type: "virtual",
                price_type_options: {
                  currency_inventory_item: {
                    name: "Gleamium",
                    slug: "gleamium",
                    type_class: "currency",
                    data: {
                      AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                      RewardThumbnail:
                        "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                      DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                    },
                    description: "",
                    tags: ["currency", "consumable"],
                    id: "663288a2358a2a62107ca852",
                  },
                  quantity: 125,
                },
                recurrence_is_active: false,
                max_per_recurrence: null,
                current_recurrence_purchase_count: 0,
                valid_user_segments: true,
                is_price_valid: true,
                enabled: true,
                is_available_for_purchase: true,
                visual_data: [],
                preferred: false,
              },
            ],
            visual_data: [
              {
                name: "Default",
                layers: [
                  {
                    name: "Description",
                    type: "text",
                    type_options: {
                      text: {
                        localizations: { "store_product-perk-currency-1000-description": "" },
                      },
                    },
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  },
                  {
                    name: "AdditionalVisualData",
                    type: "data_only",
                    type_options: {},
                    offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    data: { UseHydraDisplayName: false, ShowSaleLabel: false },
                  },
                ],
              },
            ],
          },
          visual_data: [{ name: "Default", layers: [] }],
        },
      ],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "IconTexturePath",
              type: "ingame_asset",
              type_options: {
                area_of_focus: {
                  center_point_x: 0.5,
                  center_point_y: 0.5,
                  width: { _hydra_double: 1 },
                  height: { _hydra_double: 1 },
                  scale: { _hydra_double: 1 },
                },
                ingame_path:
                  "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium'",
              },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "360" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "560" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "FillPriority",
              type: "text",
              type_options: { text: "ROW" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "specials-usd-bundles-variant-1-demoted",
      template_slug: "specials-usd-bundles-variant-1-demoted",
      name: {
        localizations: { "layout_area-specials-usd-bundles-variant-1-demoted-name": "Specials" },
      },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "fixed_linear",
      enabled: true,
      items: [null, null],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "IconTexturePath",
              type: "ingame_asset",
              type_options: {
                area_of_focus: {
                  center_point_x: 0.5,
                  center_point_y: 0.5,
                  width: { _hydra_double: 1 },
                  height: { _hydra_double: 1 },
                  scale: { _hydra_double: 1 },
                },
                ingame_path:
                  "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/ui_icons_featured.ui_icons_featured'",
              },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "554" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "260" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "fighter-store-variant-1",
      template_slug: "fighter-store-variant-1",
      name: { localizations: { "layout_area-fighter-store-variant-1-name": "Fighter Store" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "fixed_linear",
      enabled: true,
      items: [
        {
          slug: "fighter-store-variant-1",
          name: "Fighter Store",
          description: "",
          data: null,
          type: "uri",
          embedded_object_type: "uri",
          embedded_object:
            "multiversus://store?LayoutTypeSlug=dokken-layout-type&LayoutSlug=fighter-variant",
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "Thumbnail",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "fighter_store_banner.png",
                        md5: "pNMspCjuzdsnMVUSccJ32g==",
                        file_size: 3145588,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/fighter_store_banner-a4d32ca428eecddb2731551271c277da.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/fighter_store_banner-a4d32ca428eecddb2731551271c277da.png",
                        id: "65a75c18a74b66a20442c4c7",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
                {
                  name: "HideName",
                  type: "data_only",
                  type_options: {},
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  data: { HideName: true },
                },
              ],
            },
          ],
        },
      ],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "IconTexturePath",
              type: "ingame_asset",
              type_options: {
                area_of_focus: {
                  center_point_x: 0.5,
                  center_point_y: 0.5,
                  width: { _hydra_double: 1 },
                  height: { _hydra_double: 1 },
                  scale: { _hydra_double: 1 },
                },
                ingame_path:
                  "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/ui_icons_fighters.ui_icons_fighters'",
              },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "2394" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "560" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "prestige-store-variant-1",
      template_slug: "prestige-store-variant-1",
      name: { localizations: { "layout_area-prestige-store-variant-1-name": "Prestige Store" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "fixed_linear",
      enabled: true,
      items: [
        {
          slug: "prestige-store-variant-1",
          name: "Prestige Store",
          description: "",
          data: null,
          type: "uri",
          embedded_object_type: "uri",
          embedded_object:
            "multiversus://store?LayoutTypeSlug=dokken-layout-type&LayoutSlug=prestige-variant",
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "Thumbnail",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "Prestige_Banner_s5_v2.png",
                        md5: "6968e0dce2097af16b93f487cf63ea5d",
                        file_size: 10648606,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/Prestige_Banner_s5_v2-3639363865306463653230393761663136623933663438376366363365613564.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/Prestige_Banner_s5_v2-3639363865306463653230393761663136623933663438376366363365613564.png",
                        id: "67a24bfb29f06348db3675b1",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
                {
                  name: "HideName",
                  type: "data_only",
                  type_options: {},
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  data: { HideName: true },
                },
              ],
            },
          ],
        },
      ],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "IconTexturePath",
              type: "ingame_asset",
              type_options: {
                area_of_focus: {
                  center_point_x: 0.5,
                  center_point_y: 0.5,
                  width: { _hydra_double: 1 },
                  height: { _hydra_double: 1 },
                  scale: { _hydra_double: 1 },
                },
                ingame_path:
                  "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_prestige.t_ui_icon_prestige'",
              },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "2394" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "560" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "rift-store-variant-1",
      template_slug: "rift-store-variant-1",
      name: { localizations: { "layout_area-rift-store-variant-1-name": "Rift Store" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "fixed_linear",
      enabled: true,
      items: [
        {
          slug: "rift-store-variant-1",
          name: "Rift Store",
          description: "",
          data: null,
          type: "uri",
          embedded_object_type: "uri",
          embedded_object:
            "multiversus://store?LayoutTypeSlug=dokken-layout-type&LayoutSlug=rift-variant",
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "Thumbnail",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "rift_gems_store_s4_v8.png",
                        md5: "f460a4a9dffea0ac48bb9f2e3fcdf83f",
                        file_size: 4952981,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/rift_gems_store_s4_v8-6634363061346139646666656130616334386262396632653366636466383366.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/rift_gems_store_s4_v8-6634363061346139646666656130616334386262396632653366636466383366.png",
                        id: "67589256efd3f6d6d89bccb5",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                },
                {
                  name: "HideName",
                  type: "data_only",
                  type_options: {},
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  data: { HideName: true },
                },
              ],
            },
          ],
        },
      ],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "2394" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "560" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
    {
      slug: "skin-store-variant-1",
      template_slug: "skin-store-variant-1",
      name: { localizations: { "layout_area-skin-store-variant-1-name": "Variant Store" } },
      description: "",
      data: { should_show_background_image: false, FeaturedArea: false },
      template_type: "fixed_linear",
      enabled: true,
      items: [
        {
          slug: "skin-store-variant-1",
          name: "Variant Store",
          description: "",
          data: null,
          type: "uri",
          embedded_object_type: "uri",
          embedded_object:
            "multiversus://store?LayoutTypeSlug=dokken-layout-type&LayoutSlug=skin-variant",
          visual_data: [
            {
              name: "Default",
              layers: [
                {
                  name: "Thumbnail",
                  type: "image",
                  type_options: {
                    area_of_focus: {
                      center_point_x: 0.5,
                      center_point_y: 0.5,
                      width: { _hydra_double: 1 },
                      height: { _hydra_double: 1 },
                      scale: { _hydra_double: 1 },
                    },
                    file_reference: {
                      _customType: "hydra_reference",
                      value: {
                        tags: [],
                        drive_slug: "multiversus",
                        path: "",
                        filename: "t_store_skinstore_banner_v8.png",
                        md5: "f28531cc2ce64b2aca697bc6ce9919f1",
                        file_size: 9351125,
                        mime_type: "image/png",
                        content_key:
                          "multiversus/t_store_skinstore_banner_v8-6632383533316363326365363462326163613639376263366365393931396631.png",
                        url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/t_store_skinstore_banner_v8-6632383533316363326365363462326163613639376263366365393931396631.png",
                        id: "67588f9ecfb8f41fe12b55c3",
                      },
                    },
                  },
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  data: {},
                },
                {
                  name: "HideName",
                  type: "data_only",
                  type_options: {},
                  offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                  data: { HideName: true },
                },
              ],
            },
          ],
        },
      ],
      visual_data: [
        {
          name: "Default",
          layers: [
            {
              name: "ColumnWidth",
              type: "text",
              type_options: { text: "2394" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
            {
              name: "RowHeight",
              type: "text",
              type_options: { text: "560" },
              offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
            },
          ],
        },
      ],
      highlight_store_product_quantity: null,
    },
  ],
  visual_data: [
    {
      name: "Default",
      layers: [
        {
          name: "ShopBackground",
          type: "image",
          type_options: {
            area_of_focus: {
              center_point_x: 0.5,
              center_point_y: 0.5,
              width: { _hydra_double: 1 },
              height: { _hydra_double: 1 },
              scale: { _hydra_double: 1 },
            },
            file_reference: {
              _customType: "hydra_reference",
              value: {
                tags: [],
                drive_slug: "multiversus",
                path: "",
                filename: "main_store_background.png",
                md5: "aHta2ZfGw61llH7156K5Cw==",
                file_size: 1696753,
                mime_type: "image/png",
                content_key:
                  "multiversus/main_store_background-687b5ad997c6c3ad65947ef5e7a2b90b.png",
                url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/main_store_background-687b5ad997c6c3ad65947ef5e7a2b90b.png",
                id: "66436796f0d393c7f709b7b7",
              },
            },
          },
          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
        },
      ],
    },
  ],
};
