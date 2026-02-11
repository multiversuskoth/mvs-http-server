export const fighter_road_static_data = {
    slug: "fighter-road-layout",
    layout_type_slug: "dokken-layout-type",
    name: "Fighter Road Store",
    description: "Fighter Road Layout",
    data: null,
    variant_slug: "fighter-road-variant",
    weight: 1,
    enabled: true,
    areas: [
      {
        slug: "fighter-road-store",
        template_slug: "fighter-road-store",
        name: { localizations: { "layout_area-fighter-road-store-name": "Fighter Road" } },
        description: "",
        data: { should_show_background_image: false, FeaturedArea: false },
        template_type: "fixed_linear",
        enabled: true,
        items: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          {
            slug: "fighter-road-gleamium-17-fighters-marceline",
            name: { localizations: { "store_product-fighter-road-gleamium-17-fighters-marceline-name": "Unlock the Road" } },
            description: { localizations: { "store_product-fighter-road-gleamium-17-fighters-marceline-description": "Unlock the Road!" } },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "fighter-road-gleamium-17-fighters-marceline",
              name: { localizations: { "store_product-fighter-road-gleamium-17-fighters-marceline-name": "Unlock the Road" } },
              description: { localizations: { "store_product-fighter-road-gleamium-17-fighters-marceline-description": "Unlock the Road!" } },
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
                            ParentTags: ["TS:Fixed:FighterDifficulty", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:Class"],
                          },
                          MasteryRewardTrack: "mrt_mastery_c027",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C027/C027_C027_S00.C027_C027_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C027/Skins/S00/MI_C027_S00_RewardThumbnailMaterial.MI_C027_S00_RewardThumbnailMaterial",
                        },
                        description: "",
                        tags: ["character_c027", "unlock_location_shop", "universe_dc", "character", "unlockable"],
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            type_options: { text: { localizations: { "released-season-3-": "Released Season 3!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-nubia-fighter-road-tagline": "Explorer. Guardian of Doom’s Doorway." } },
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
                    slug: "power-puff-girls-fighter-road",
                    name: "Powerpuff Girls",
                    description: {
                      localizations: {
                        "store_product-power-puff-girls-fighter-road-description":
                          "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
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
                        name: "character_C030",
                        slug: "character_C030",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/MvsSeason03/Character/C030/character_C030.character_C030",
                          IsUnlockedByDefault: false,
                          ContentLevel: 5,
                          EnabledForShipping: true,
                          AssociatedCharacter: "C030",
                          DisplayName: "The Powerpuff Girls",
                          DisplayNameLocalizationKey: "B5FC31E94CB5CDB0E95AB78C84049CEC",
                          DisplayNameLocalizationNamespace: "[0005B2A4429256ACD220BDB66C51C171]",
                          FighterClass: "Assassin",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Assassin",
                              "TS:Dynamic:PowerpuffGirls",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:PowerpuffGirls",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                          },
                          MasteryRewardTrack: "mrt_mastery_c030",
                          Rarity: "None",
                          RewardThumbnail: "/MvsSeason03/Character/C030/UI/t_fighterthumbnail_powerpuffgirls.t_fighterthumbnail_powerpuffgirls",
                          RewardThumbnailMaterial: "/MvsSeason03/Character/C030/Skins/MI_C030_S00_ROSTERART.MI_C030_S00_ROSTERART",
                        },
                        description: "",
                        tags: ["character_c030", "universe_powerpuff_girls", "character", "unlockable"],
                        id: "663288a2358a2a62107ca843",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "power-puff-girls-fighter-road_gleamium",
                        name: "Powerpuff Girls gleamium",
                        description: {
                          localizations: {
                            "store_product-power-puff-girls-fighter-road-description":
                              "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-power-puff-girls-fighter-road-description":
                                    "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "ProductCTA",
                            type: "text",
                            type_options: { text: { localizations: { "released-season-3-": "Released Season 3!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: {
                                localizations: { "store_product-power-puff-girls-fighter-road-tagline": "Sugar, Spice, and Everything Nice!" },
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
                    slug: "beetlejuice-fighter-road",
                    name: "Beetlejuice",
                    description: {
                      localizations: {
                        "store_product-beetlejuice-fighter-road-description":
                          "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
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
                        name: "character_c024",
                        slug: "character_c024",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Character/C024/character_C024.character_C024",
                          AssociatedCharacter: "C024",
                          ContentLevel: 1,
                          DisplayName: "Betelgeuse",
                          DisplayNameLocalizationKey: "93E2226D41AC1CFB9351EDA3E14D8BE0",
                          DisplayNameLocalizationNamespace: "[70FA2890492F723AA97643AE98D19521]",
                          EnabledForShipping: false,
                          FighterClass: "Assassin",
                          IsUnlockedByDefault: false,
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Assassin",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:Universe:Beetlejuice",
                              "TS:Fixed:Betelgeuse",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                          },
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C024/C024_C024_S00.C024_C024_S00",
                          RewardThumbnailMaterial:
                            "/Game/Character/C024/Skins/S00/MI_C024_Skin_000_RewardThumbnailMaterial.MI_C024_Skin_000_RewardThumbnailMaterial",
                          MasteryRewardTrack: "mrt_mastery_c024",
                        },
                        description: "",
                        tags: ["character_c024", "unlock_location_shop", "universe_beetlejuice", "character", "unlockable"],
                        id: "669fd3df7d13e0649bcb9240",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "beetlejuice-fighter-road_gleamium",
                        name: "Beetlejuice gleamium",
                        description: {
                          localizations: {
                            "store_product-beetlejuice-fighter-road-description":
                              "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-beetlejuice-fighter-road-description":
                                    "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "ProductCTA",
                            type: "text",
                            type_options: { text: { localizations: { "released-season-2-": "Released Season 2!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-beetlejuice-fighter-road-tagline": "The Juice is Loose, Baby!" } },
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
                    slug: "samurai-jack-fighter-road",
                    name: "Samurai Jack",
                    description: {
                      localizations: {
                        "store_product-samurai-jack-fighter-road-description":
                          "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
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
                        name: "character_C026",
                        slug: "character_C026",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C026/character_C026.character_C026",
                          IsUnlockedByDefault: false,
                          ContentLevel: 5,
                          EnabledForShipping: true,
                          AssociatedCharacter: "C026",
                          DisplayName: "Samurai Jack",
                          DisplayNameLocalizationKey: "0B8E0DAB4B8D2D4477E939983A9EF9DF",
                          DisplayNameLocalizationNamespace: "[E7C75EF54EBA82CF72AA318017607F93]",
                          FighterClass: "Bruiser",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Bruiser",
                              "TS:Fixed:Universe:SamuraiJack",
                              "TS:Fixed:FighterDifficulty:Low",
                              "TS:Dynamic:SamuraiJack",
                              "TS:Fixed:SamuraiJack",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                          },
                          MasteryRewardTrack: "mrt_mastery_c026",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C026/C026_C026_S00.C026_C026_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C026/MI_C026_S00_RewardThumbnailMaterial.MI_C026_S00_RewardThumbnailMaterial",
                        },
                        description: "",
                        tags: ["character_c026", "universe_pfg", "character", "unlockable"],
                        id: "63d7f829b059bec8be09b966",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "samurai-jack-fighter-road_gleamium",
                        name: "Samurai Jack gleamium",
                        description: {
                          localizations: {
                            "store_product-samurai-jack-fighter-road-description":
                              "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-samurai-jack-fighter-road-description":
                                    "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "ProductCTA",
                            type: "text",
                            type_options: { text: { localizations: { "released-season-2-": "Released Season 2!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-samurai-jack-fighter-road-tagline": "Gotta get back… back to the past." } },
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
                          RewardThumbnail: "/Game/Character/Captures/Jason/Jason_Jason_Skin_000.Jason_Jason_Skin_000",
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
                        tags: ["character_c035", "unlock_location_shop", "universe_friday_the13th", "character", "unlockable"],
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            type_options: { text: { localizations: { "released-season-1-": "Released Season 1!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-jason-fighter-road-tagline": "Unstoppable monster from beyond the grave." } },
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
                          RewardThumbnail: "/Game/Character/C036/UI/FullPortrait_C036_S00.FullPortrait_C036_S00",
                          RewardThumbnailMaterial: "/Game/Character/C036/UI/MI_C036_S00_RewardThumbnail.MI_C036_S00_RewardThumbnail",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:Class:Bruiser",
                              "TS:Fixed:Universe:Matrix",
                              "TS:Fixed:AgentSmith",
                            ],
                            ParentTags: ["TS:Fixed:FighterDifficulty", "TS:Fixed", "TS", "TS:Fixed:Class", "TS:Fixed:Universe"],
                          },
                        },
                        description: "",
                        tags: ["character_c036", "unlock_location_shop", "universe_the_matrix", "character", "unlockable"],
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            type_options: { text: { localizations: { "released-season-1-": "Released Season 1!" } } },
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
                    slug: "the-joker-fighter-road",
                    name: "The Joker",
                    description: {
                      localizations: {
                        "store_product-the-joker-fighter-road-description":
                          "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
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
                        name: "character_C028",
                        slug: "character_C028",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C028/character_C028.character_C028",
                          IsUnlockedByDefault: false,
                          ContentLevel: 5,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c028",
                          AssociatedCharacter: "C028",
                          DisplayName: "The Joker",
                          DisplayNameLocalizationKey: "8B00F96F41E30B69F4380D89D6F63B84",
                          DisplayNameLocalizationNamespace: "[32A7514C4FAD5BCD3C4E568E990F5073]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C028/C028_C028_S00.C028_C028_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C028/Skins/MI_C028_S00_RewardThumbnailMaterial.MI_C028_S00_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Mage",
                              "TS:Fixed:FighterDifficulty:Low",
                              "TS:Fixed:Universe:DC",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:ComicInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:BlueClothing",
                              "TS:Dynamic:GreenClothing",
                              "TS:Dynamic:PurpleClothing",
                              "TS:Dynamic:WhiteClothing",
                              "TS:Dynamic:BlackClothing",
                              "TS:Dynamic:Season:Villainous",
                              "TS:Fixed:Joker",
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
                        tags: ["character_c028", "universe_dc", "character", "unlockable"],
                        id: "63d7f829b059bec8be09b97c",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "the-joker-fighter-road_gleamium",
                        name: "The Joker gleamium",
                        description: {
                          localizations: {
                            "store_product-the-joker-fighter-road-description":
                              "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-the-joker-fighter-road-description":
                                    "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "ProductCTA",
                            type: "text",
                            type_options: { text: { localizations: { "released-season-1-": "Released Season 1!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-the-joker-fighter-road-tagline": "The Clown Prince of Crime is here!" } },
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
                    slug: "morty-fighter-road",
                    name: "Morty",
                    description: {
                      localizations: { "store_product-morty-fighter-road-description": "He's a Morty. All bark, no bite. What more could you want?" },
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
                        name: "character_c019",
                        slug: "character_c019",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C019/character_C019.character_C019",
                          IsUnlockedByDefault: false,
                          ContentLevel: 3,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c019",
                          AssociatedCharacter: "C019",
                          DisplayName: "Morty",
                          DisplayNameLocalizationKey: "AF4F02164361CF360F8603815EA2EFA7",
                          DisplayNameLocalizationNamespace: "[615F65904A71E606D82FE0BACAEE9C26]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C019/C019_C019_S00.C019_C019_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C019/Skins/MI_C019_S00_RewardThumbnailMaterial.MI_C019_S00_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Universe:RickandMorty",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredInThe10s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:BlueClothing",
                              "TS:Dynamic:TShirt",
                              "TS:Fixed:FighterDifficulty:high",
                              "TS:Fixed:Class:Mage",
                              "TS:Fixed:Morty",
                            ],
                            ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty", "TS:Fixed:Class"],
                          },
                        },
                        description: "",
                        tags: ["character_c019", "unlock_location_shop", "universe_rick_and_morty", "character", "unlockable"],
                        id: "62fa7c0804da60ea6d57d001",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "morty-fighter-road_gleamium",
                        name: "Morty gleamium",
                        description: {
                          localizations: {
                            "store_product-morty-fighter-road-description": "He's a Morty. All bark, no bite. What more could you want?",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-morty-fighter-road-description": "He's a Morty. All bark, no bite. What more could you want?",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-morty-fighter-road-tagline": "Aw geez, it’s a fighting game." } },
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
                    slug: "rick-fighter-road",
                    name: "Rick",
                    description: {
                      localizations: { "store_product-rick-fighter-road-description": "Let me deus ex machina this sh*t and go home!" },
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
                        name: "character_C020",
                        slug: "character_C020",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C020/character_C020.character_C020",
                          IsUnlockedByDefault: false,
                          ContentLevel: 3,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c020",
                          AssociatedCharacter: "C020",
                          DisplayName: "Rick",
                          DisplayNameLocalizationKey: "29A097C040D67AC3454E0FB790B1D734",
                          DisplayNameLocalizationNamespace: "[3B4A9DDB421E5C418B0FF8B67DA04B3D]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C020/C020_C020_S00.C020_C020_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C020/Skins/MI_C020_S00_RewardThumbnailMaterial.MI_C020_S00_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Mage",
                              "TS:Fixed:Universe:RickandMorty",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredInThe10s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:BlueClothing",
                              "TS:Dynamic:WhiteClothing",
                              "TS:Fixed:FighterDifficulty:high",
                              "TS:Fixed:Rick",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                          },
                        },
                        description: "",
                        tags: ["character_c020", "unlock_location_shop", "universe_rick_and_morty", "character", "unlockable"],
                        id: "63331ebbacc29c767277af5a",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "rick-fighter-road_gleamium",
                        name: "Rick gleamium",
                        description: {
                          localizations: { "store_product-rick-fighter-road-description": "Let me deus ex machina this sh*t and go home!" },
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
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                localizations: { "store_product-rick-fighter-road-description": "Let me deus ex machina this sh*t and go home!" },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-rick-fighter-road-tagline": "Come on guys. It's Rick. He’s a genius." } },
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
                    slug: "jake-the-dog-fighter-road",
                    name: "Jake the Dog",
                    description: {
                      localizations: {
                        "store_product-jake-the-dog-fighter-road-description":
                          "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
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
                        name: "character_jake",
                        slug: "character_jake",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/Jake/character_jake.character_jake",
                          IsUnlockedByDefault: false,
                          ContentLevel: 5,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_jake",
                          AssociatedCharacter: "Jake",
                          DisplayName: "Jake",
                          DisplayNameLocalizationKey: "53B81F2040DF14FDFD6E3385397AA9CB",
                          DisplayNameLocalizationNamespace: "[14C7F1E2448AE0144341E5A0C1B0817C]",
                          FighterClass: "Bruiser",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Jake/Jake_Jake.Jake_Jake",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/Jake/Skins/MI_Jake_RewardThumbnailMaterial.MI_Jake_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Bruiser",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:Universe:AdventureTime",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredInThe10s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:Fuzzy",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:Jake",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_jake", "unlock_location_shop", "universe_adventure_time", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632ca",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "jake-the-dog-fighter-road_gleamium",
                        name: "Jake the Dog gleamium",
                        description: {
                          localizations: {
                            "store_product-jake-the-dog-fighter-road-description":
                              "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-jake-the-dog-fighter-road-description":
                                    "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
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
                                localizations: { "store_product-jake-the-dog-fighter-road-tagline": "Those Stretchy Powers are a trip, dude." },
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
                          RewardThumbnail: "/Game/Character/Captures/Finn/Finn_Finn_S00.Finn_Finn_S00",
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
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                          },
                        },
                        description: "",
                        tags: ["character_finn", "unlock_location_shop", "universe_adventure_time", "character", "unlockable"],
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-finn-the-human-fighter-road-tagline": "He’ll slay anything that’s evil, that’s his deal!",
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
                    slug: "garnet-fighter-road",
                    name: "Garnet",
                    description: {
                      localizations: {
                        "store_product-garnet-fighter-road-description":
                          "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
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
                        name: "character_garnet",
                        slug: "character_garnet",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/Garnet/CharData/character_garnet.character_garnet",
                          IsUnlockedByDefault: false,
                          ContentLevel: 4,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_garnet",
                          AssociatedCharacter: "Garnet",
                          DisplayName: "Garnet",
                          DisplayNameLocalizationKey: "C99178D345F384477004839BE6BECDFE",
                          DisplayNameLocalizationNamespace: "[66245BA74751C55C36E175BBD7BB67DC]",
                          FighterClass: "Bruiser",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Garnet/Garnet_Garnet.Garnet_Garnet",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/Garnet/Skins/MI_Garnet_RewardThumbnailMaterial.MI_Garnet_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:Eyewear",
                              "TS:Dynamic:ExtraTerrestrial",
                              "TS:Dynamic:PremieredInThe10s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:PurpleClothing",
                              "TS:Dynamic:PinkClothing",
                              "TS:Fixed:Class:Bruiser",
                              "TS:Fixed:FighterDifficulty:Low",
                              "TS:Fixed:Universe:StevenUniverse",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:Garnet",
                            ],
                            ParentTags: ["TS:Dynamic", "TS", "TS:Fixed:Class", "TS:Fixed", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                          },
                        },
                        description: "",
                        tags: ["character_garnet", "unlock_location_shop", "universe_steven_universe", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632b5",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "garnet-fighter-road_gleamium",
                        name: "Garnet gleamium",
                        description: {
                          localizations: {
                            "store_product-garnet-fighter-road-description":
                              "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-garnet-fighter-road-description":
                                    "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
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
                                  "store_product-garnet-fighter-road-tagline": "Protector of Earth and possessor of unshakeable rhythm.",
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
                    slug: "bugs-bunny-fighter-road",
                    name: "Bugs Bunny",
                    description: {
                      localizations: {
                        "store_product-bugs-bunny-fighter-road-description":
                          "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
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
                        name: "character_bugs_bunny",
                        slug: "character_bugs_bunny",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/BugsBunnyV2/Character_BugsBunny.Character_BugsBunny",
                          IsUnlockedByDefault: false,
                          ContentLevel: 2,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_bugs_bunny",
                          AssociatedCharacter: "BugsBunny",
                          DisplayName: "Bugs Bunny",
                          DisplayNameLocalizationKey: "D8B82A5248EE8300452841BFA911943A",
                          DisplayNameLocalizationNamespace: "[24AF51FF46F9FFBC87882CB73CFCBD7E]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Bugs_Bunny/Bugs_Bunny_BugsBunny.Bugs_Bunny_BugsBunny",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/BugsBunnyV2/Skins/MI_BugsBunny_RewardThumbnailMaterial.MI_BugsBunny_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Mage",
                              "TS:Fixed:Universe:LooneyTunes",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:Fuzzy",
                              "TS:Fixed:BugsBunny",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_bugs_bunny", "unlock_location_shop", "universe_looney_tunes", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632cc",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "bugs-bunny-fighter-road_gleamium",
                        name: "Bugs Bunny gleamium",
                        description: {
                          localizations: {
                            "store_product-bugs-bunny-fighter-road-description":
                              "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-bugs-bunny-fighter-road-description":
                                    "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
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
                                localizations: { "store_product-bugs-bunny-fighter-road-tagline": "The rascaliest rabbit this side of Kalamazoo." },
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
                    slug: "black-adam-fighter-road",
                    name: "Black Adam",
                    description: {
                      localizations: {
                        "store_product-black-adam-fighter-road-description":
                          "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
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
                        name: "character_C021",
                        slug: "character_C021",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C021/character_C021.character_C021",
                          IsUnlockedByDefault: false,
                          ContentLevel: 3,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c021",
                          AssociatedCharacter: "C021",
                          DisplayName: "Black Adam",
                          DisplayNameLocalizationKey: "99E3ECF9414F069669CF15B2E6F30856",
                          DisplayNameLocalizationNamespace: "[5FE8EFE4448387D0D38C77A346A4011E]",
                          FighterClass: "Bruiser",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C021/C021_C021_S00.C021_C021_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C021/Skins/MI_C021_S00_RewardThumbnailMaterial.MI_C021_S00_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:FighterDifficulty:high",
                              "TS:Fixed:Universe:DC",
                              "TS:Fixed:Class:Bruiser",
                              "TS:Dynamic:Caped",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:ComicInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:Rich",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:BlackClothing",
                              "TS:Dynamic:Season:Villainous",
                              "TS:Fixed:BlackAdam",
                            ],
                            ParentTags: [
                              "TS:Fixed:FighterDifficulty",
                              "TS:Fixed",
                              "TS",
                              "TS:Fixed:Universe",
                              "TS:Fixed:Class",
                              "TS:Dynamic",
                              "TS:Dynamic:Season",
                            ],
                          },
                        },
                        description: "",
                        tags: ["character_c021", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                        id: "62cf30d0154cdf898c663331",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "black-adam-fighter-road_gleamium",
                        name: "Black Adam gleamium",
                        description: {
                          localizations: {
                            "store_product-black-adam-fighter-road-description":
                              "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-black-adam-fighter-road-description":
                                    "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
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
                                localizations: { "store_product-black-adam-fighter-road-tagline": "The ruler of Kahndaq bows to no mortal man." },
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
                    slug: "stripe-fighter-road",
                    name: "Stripe",
                    description: {
                      localizations: {
                        "store_product-stripe-fighter-road-description":
                          "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
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
                        name: "character_C023B",
                        slug: "character_C023B",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C023B/character_C023B.character_C023B",
                          IsUnlockedByDefault: false,
                          ContentLevel: 2,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c023b",
                          AssociatedCharacter: "C023B",
                          DisplayName: "Stripe",
                          DisplayNameLocalizationKey: "6E7C47694D2DE9BFF514C3955106F88D",
                          DisplayNameLocalizationNamespace: "[1DD7EEA7423CDE25D4C06C88D3892693]",
                          FighterClass: "Assassin",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C023B/C023B_C023B_S00.C023B_C023B_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C023B/Skins/S00/MI_C023B_S00_RewardThumbnailMaterial.MI_C023B_S00_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Assassin",
                              "TS:Fixed:Universe:Gremlins",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Dynamic:PremieredinThe80s",
                              "TS:Dynamic:MovieInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:Season:Villainous",
                              "TS:Fixed:Stripe",
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
                        },
                        description: "",
                        tags: ["character_c023b", "unlock_location_shop", "universe_gremlins", "character", "unlockable"],
                        id: "6346e56243c9dc67697487f4",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "stripe-fighter-road_gleamium",
                        name: "Stripe gleamium",
                        description: {
                          localizations: {
                            "store_product-stripe-fighter-road-description":
                              "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-stripe-fighter-road-description":
                                    "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: { text: { localizations: { "store_product-stripe-fighter-road-tagline": "Mean. Green. Obscene." } } },
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
                    slug: "steven-universe-fighter-road",
                    name: "Steven Universe",
                    description: {
                      localizations: {
                        "store_product-steven-universe-fighter-road-description":
                          "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
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
                        name: "character_steven",
                        slug: "character_steven",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/Steven/Character_Steven.Character_Steven",
                          IsUnlockedByDefault: false,
                          ContentLevel: 3,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_steven",
                          AssociatedCharacter: "StevenUniverse",
                          DisplayName: "Steven Universe",
                          DisplayNameLocalizationKey: "A321D78349E4D64A11A31E92D99520F3",
                          DisplayNameLocalizationNamespace: "[C75844CB4FBD57B6F97083A4FA17B60F]",
                          FighterClass: "Tank",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Steven/Steven_Steven.Steven_Steven",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/Steven/MI_Steven_RewardThumbnailMaterial.MI_Steven_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Universe:StevenUniverse",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:Sandals",
                              "TS:Dynamic:PremieredInThe10s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:PinkClothing",
                              "TS:Dynamic:BlueClothing",
                              "TS:Dynamic:TShirt",
                              "TS:Fixed:FighterDifficulty:high",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:Class:Tank",
                              "TS:Fixed:Steven",
                            ],
                            ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty", "TS:Fixed:Class"],
                          },
                        },
                        description: "",
                        tags: ["character_steven_universe", "unlock_location_shop", "universe_steven_universe", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632ab",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "steven-universe-fighter-road_gleamium",
                        name: "Steven Universe gleamium",
                        description: {
                          localizations: {
                            "store_product-steven-universe-fighter-road-description":
                              "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-steven-universe-fighter-road-description":
                                    "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-steven-universe-fighter-road-tagline": "Half-human, half-Gem, all hero." } },
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
                    slug: "tom-and-jerry-fighter-road",
                    name: "Tom and Jerry",
                    description: {
                      localizations: {
                        "store_product-tom-and-jerry-fighter-road-description":
                          "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
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
                        name: "character_tom_and_jerry",
                        slug: "character_tom_and_jerry",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/TomAndJerry/character_TomAndJerry.character_TomAndJerry",
                          IsUnlockedByDefault: false,
                          ContentLevel: 2,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_tom_and_jerry",
                          AssociatedCharacter: "TomAndJerry",
                          DisplayName: "Tom & Jerry",
                          DisplayNameLocalizationKey: "8088A1224ED9239329945084B3E88BED",
                          DisplayNameLocalizationNamespace: "[1DA5A56D41606B8628A636AF03670BD6]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Tom_and_Jerry/Tom_and_Jerry_TomAndJerry_S00.Tom_and_Jerry_TomAndJerry_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/TomAndJerry/Skins/MI_TomAndJerry_S00_RewardThumbnailMaterial.MI_TomAndJerry_S00_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Mage",
                              "TS:Fixed:FighterDifficulty:high",
                              "TS:Fixed:Universe:TomandJerry",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:Fuzzy",
                              "TS:Fixed:TomAndJerry",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_tom_and_jerry", "unlock_location_shop", "universe_tom_and_jerry", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632c8",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "tom-and-jerry-fighter-road_gleamium",
                        name: "Tom and Jerry gleamium",
                        description: {
                          localizations: {
                            "store_product-tom-and-jerry-fighter-road-description":
                              "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-tom-and-jerry-fighter-road-description":
                                    "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
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
                                  "store_product-tom-and-jerry-fighter-road-tagline":
                                    "When these frenemies put aside their differences, their zany mayhem can be unstoppable.",
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
                    slug: "lebron-james-fighter-road",
                    name: "LeBron James",
                    description: {
                      localizations: {
                        "store_product-lebron-james-fighter-road-description":
                          "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
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
                        name: "character_c16",
                        slug: "character_c16",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/c016/character_c016.character_C016",
                          IsUnlockedByDefault: false,
                          ContentLevel: 3,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_lebron",
                          AssociatedCharacter: "C016",
                          DisplayName: "LeBron James",
                          DisplayNameLocalizationKey: "7FD99CE64BFDDA0D3794F8B3B3A66163",
                          DisplayNameLocalizationNamespace: "[5ED80A544338CF438D4DA189FB12EFAD]",
                          FighterClass: "Bruiser",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C016/C016_C016.C016_C016",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/c016/Skins/MI_C016_RewardThumbnailMaterial.MI_C016_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredinThe80s",
                              "TS:Dynamic:PremieredinThe2020s",
                              "TS:Dynamic:MovieInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:Rich",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:SportsAttire",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:Universe:SpaceJam",
                              "TS:Fixed:Class:Bruiser",
                              "TS:Fixed:LeBron",
                            ],
                            ParentTags: ["TS:Dynamic", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed", "TS:Fixed:Universe", "TS:Fixed:Class"],
                          },
                        },
                        description: "",
                        tags: ["character_c016", "unlock_location_shop", "universe_space_jam", "character", "unlockable"],
                        id: "62e00feac9e30dfd32a5a366",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "lebron-james-fighter-road_gleamium",
                        name: "LeBron James gleamium",
                        description: {
                          localizations: {
                            "store_product-lebron-james-fighter-road-description":
                              "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-lebron-james-fighter-road-description":
                                    "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
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
                                  "store_product-lebron-james-fighter-road-tagline": "Champion. Icon. Teammate. Father. Philanthropist.",
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
                    slug: "the-iron-giant-fighter-road",
                    name: "The Iron Giant",
                    description: {
                      localizations: {
                        "store_product-the-iron-giant-fighter-road-description":
                          "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
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
                        name: "character_C017",
                        slug: "character_C017",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C017/character_C017.character_C017",
                          IsUnlockedByDefault: false,
                          ContentLevel: 4,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c017",
                          AssociatedCharacter: "C017",
                          DisplayName: "Iron Giant",
                          DisplayNameLocalizationKey: "8A87049E48E8994B52D55FA68BD02C64",
                          DisplayNameLocalizationNamespace: "[82F9E0F94EEB65A2FB94AB8ABE9E68DF]",
                          FighterClass: "Tank",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C017/C017_C017_S01.C017_C017_S01",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C017/Skins/S01/MI_C017_S01_RewardThumbnailMaterial.MI_C017_S01_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Tank",
                              "TS:Fixed:FighterDifficulty:high",
                              "TS:Fixed:Universe:IronGiant",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredinThe90s",
                              "TS:Dynamic:MovieInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:ExtraTerrestrial",
                              "TS:Dynamic:RedClothing",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:Metallic",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:IronGiant",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_c017", "unlock_location_shop", "universe_the_iron_giant", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632fd",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "the-iron-giant-fighter-road_gleamium",
                        name: "The Iron Giant gleamium",
                        description: {
                          localizations: {
                            "store_product-the-iron-giant-fighter-road-description":
                              "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-the-iron-giant-fighter-road-description":
                                    "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-the-iron-giant-fighter-road-tagline": "Robotic hero from beyond the stars." } },
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
                    slug: "superman-fighter-road",
                    name: "Superman",
                    description: {
                      localizations: {
                        "store_product-superman-fighter-road-description":
                          "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
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
                        name: "character_superman",
                        slug: "character_superman",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/Superman/character_C003_.character_C003_",
                          IsUnlockedByDefault: false,
                          ContentLevel: 4,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c003",
                          AssociatedCharacter: "Superman",
                          DisplayName: "Superman",
                          DisplayNameLocalizationKey: "6079FFBA406F64CB082817A166CE85B1",
                          DisplayNameLocalizationNamespace: "[3C0725174BAB99C140AFE488D14CAE7D]",
                          FighterClass: "Tank",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Superman/Superman_Superman.Superman_Superman",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/Superman/Skin/MI_Superman_RewardThumbnailMaterial.MI_Superman_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Tank",
                              "TS:Fixed:Universe:DC",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Dynamic:Caped",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:ComicInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:ExtraTerrestrial",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:RedClothing",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:BlueClothing",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:Superman",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_superman", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                        id: "62cf30d0154cdf898c663292",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "superman-fighter-road_gleamium",
                        name: "Superman gleamium",
                        description: {
                          localizations: {
                            "store_product-superman-fighter-road-description":
                              "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-superman-fighter-road-description":
                                    "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
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
                                  "store_product-superman-fighter-road-tagline":
                                    "Founding member of the Justice League, and one of Earth’s mightiest heroes.",
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
                    slug: "reindog-fighter-road",
                    name: "Reindog",
                    description: {
                      localizations: {
                        "store_product-reindog-fighter-road-description":
                          "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
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
                        name: "character_creature",
                        slug: "character_creature",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/Creature/character_creature.character_creature",
                          IsUnlockedByDefault: false,
                          ContentLevel: 1,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_creature",
                          AssociatedCharacter: "ReinDog",
                          DisplayName: "Reindog",
                          DisplayNameLocalizationKey: "1B13A826453E7DF115FEE1AAA120A626",
                          DisplayNameLocalizationNamespace: "[F005C5AE48446471A33A24B95E8BC5BE]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Rein_Dog/Rein_Dog_Creature.Rein_Dog_Creature",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/Creature/Skins/MI_Creature_RewardThumbnailMaterial.MI_Creature_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Mage",
                              "TS:Dynamic:PremieredinThe2020s",
                              "TS:Dynamic:PFGOriginal",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:ExtraTerrestrial",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:Fuzzy",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:Universe:PlayerFirstGames",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:Reindog",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                          },
                        },
                        description: "",
                        tags: ["character_rein_dog", "unlock_location_shop", "universe_pfg", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632cb",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "reindog-fighter-road_gleamium",
                        name: "Reindog gleamium",
                        description: {
                          localizations: {
                            "store_product-reindog-fighter-road-description":
                              "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-reindog-fighter-road-description":
                                    "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
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
                                  "store_product-reindog-fighter-road-tagline":
                                    "Fluffy Guardian of Zanifeer’s royal family and 6th wearer of the gem of power!",
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
                    slug: "harley-quinn-fighter-road",
                    name: "Harley Quinn",
                    description: {
                      localizations: {
                        "store_product-harley-quinn-fighter-road-description":
                          "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
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
                        name: "character_harleyquinn",
                        slug: "character_harleyquinn",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/HarleyQuinn/character_harley.character_harley",
                          IsUnlockedByDefault: false,
                          ContentLevel: 1,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_harleyquinn",
                          AssociatedCharacter: "HarleyQuinn",
                          DisplayName: "Harley Quinn",
                          DisplayNameLocalizationKey: "4F0A7FB9494041CC66CA91894E51B41F",
                          DisplayNameLocalizationNamespace: "[11771B594454CF7D64AFD39BEEBEB256]",
                          FighterClass: "Assassin",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Harley/Harley_HarleyWithJacket.Harley_HarleyWithJacket",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/HarleyQuinn/skins/MI_HarleyWithJacket_RewardThumbnailMaterial.MI_HarleyWithJacket_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Assassin",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:Universe:DC",
                              "TS:Dynamic:PremieredInThe10s",
                              "TS:Dynamic:ComicInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:RedClothing",
                              "TS:Dynamic:WhiteClothing",
                              "TS:Dynamic:BlackClothing",
                              "TS:Dynamic:Season:Villainous",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:HarleyQuinn",
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
                        tags: ["character_harley_quinn", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632cd",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "harley-quinn-fighter-road_gleamium",
                        name: "Harley Quinn gleamium",
                        description: {
                          localizations: {
                            "store_product-harley-quinn-fighter-road-description":
                              "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-harley-quinn-fighter-road-description":
                                    "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
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
                                  "store_product-harley-quinn-fighter-road-tagline": "She’s tried being a good guy, but being bad is too much fun.",
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
                    slug: "wonder-woman-fighter-road",
                    name: "Wonder Woman",
                    description: {
                      localizations: {
                        "store_product-wonder-woman-fighter-road-description":
                          "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
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
                        name: "character_wonder_woman",
                        slug: "character_wonder_woman",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/WonderWomanV2/character_wonder_woman.character_wonder_woman",
                          IsUnlockedByDefault: false,
                          ContentLevel: 4,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_wonder_woman",
                          AssociatedCharacter: "WonderWoman",
                          DisplayName: "Wonder Woman",
                          DisplayNameLocalizationKey: "3ABA35AA480251E5F68931846FC3BCD5",
                          DisplayNameLocalizationNamespace: "[AEF1FAE541B7E876BE6ECBA9D2E2A7D2]",
                          FighterClass: "Tank",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Wonder_Woman/Wonder_Woman_Skin_WonderWoman_.Wonder_Woman_Skin_WonderWoman_",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/WonderWomanV2/Skins/MI_Skin_WonderWoman__RewardThumbnailMaterial.MI_Skin_WonderWoman__RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Tank",
                              "TS:Fixed:Universe:DC",
                              "TS:Fixed:FighterDifficulty:Low",
                              "TS:Dynamic:SwordWielder",
                              "TS:Dynamic:Headwear",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:ComicInspired",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:RedClothing",
                              "TS:Dynamic:YellowClothing",
                              "TS:Dynamic:BlueClothing",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:WonderWoman",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_wonder_woman", "unlock_location_tutorial", "universe_dc", "character", "unlockable"],
                        id: "62cf30d0154cdf898c66328f",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "wonder-woman-fighter-road_gleamium",
                        name: "Wonder Woman gleamium",
                        description: {
                          localizations: {
                            "store_product-wonder-woman-fighter-road-description":
                              "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-wonder-woman-fighter-road-description":
                                    "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
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
                                  "store_product-wonder-woman-fighter-road-tagline":
                                    "Amazon Princess. Daughter of Zeus. Founding member of the Justice League.",
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
                    slug: "taz-fighter-road",
                    name: "Taz",
                    description: {
                      localizations: {
                        "store_product-taz-fighter-road-description":
                          "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
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
                        name: "character_taz",
                        slug: "character_taz",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C015/character_C015.character_C015",
                          IsUnlockedByDefault: false,
                          ContentLevel: 3,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_taz",
                          AssociatedCharacter: "C015",
                          DisplayName: "Taz",
                          DisplayNameLocalizationKey: "CC3DED2547C9E9C4BEDACAB250F4C75A",
                          DisplayNameLocalizationNamespace: "[125F669341B48230D893D3A22D9F4988]",
                          FighterClass: "Assassin",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C015/C015_C015_Default.C015_C015_Default",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C015/Skins/MI_C015_Default_RewardThumbnailMaterial.MI_C015_Default_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Universe:LooneyTunes",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:Fuzzy",
                              "TS:Dynamic:Adult",
                              "TS:Fixed:Class:Assassin",
                              "TS:Fixed:Taz",
                            ],
                            ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Dynamic", "TS:Fixed:Class"],
                          },
                        },
                        description: "",
                        tags: ["character_c015", "unlock_location_shop", "universe_looney_tunes", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632e7",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "taz-fighter-road_gleamium",
                        name: "Taz gleamium",
                        description: {
                          localizations: {
                            "store_product-taz-fighter-road-description":
                              "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-taz-fighter-road-description":
                                    "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
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
                                localizations: { "store_product-taz-fighter-road-tagline": "(Don’t worry. We don’t know what he’s saying either.)" },
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
                    slug: "batman-fighter-road",
                    name: "Batman",
                    description: {
                      localizations: {
                        "store_product-batman-fighter-road-description":
                          "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
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
                        name: "character_batman",
                        slug: "character_batman",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/Batman/Character_Batman.Character_Batman",
                          IsUnlockedByDefault: false,
                          ContentLevel: 2,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_batman",
                          AssociatedCharacter: "Batman",
                          DisplayName: "Batman",
                          DisplayNameLocalizationKey: "011AED8A4E960D0F4A471787475A5909",
                          DisplayNameLocalizationNamespace: "[F4D73DCE4F555D2C619676AB3654486B]",
                          FighterClass: "Bruiser",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Batman/Batman_Batman.Batman_Batman",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/BatmanV2/Skins/MI_Batman_RewardThumbnailMaterial.MI_Batman_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Bruiser",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Fixed:Universe:DC",
                              "TS:Dynamic:Caped",
                              "TS:Dynamic:Eyewear",
                              "TS:Dynamic:Headwear",
                              "TS:Dynamic:PremieredinThe80s",
                              "TS:Dynamic:ComicInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:Rich",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:BlackClothing",
                              "TS:Dynamic:Detective",
                              "TS:Dynamic:Heroic",
                              "TS:Fixed:Batman",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_batman", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                        id: "62cf30d0154cdf898c663290",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "batman-fighter-road_gleamium",
                        name: "Batman gleamium",
                        description: {
                          localizations: {
                            "store_product-batman-fighter-road-description":
                              "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-batman-fighter-road-description":
                                    "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
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
                                  "store_product-batman-fighter-road-tagline": "The World’s Greatest Detective. He is the night. He is Batman.",
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
                          RewardThumbnailMaterial: "/Game/Panda_Main/Characters/Arya/Skins/MI_C006_RewardThumbnail.MI_C006_RewardThumbnail",
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
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                          },
                        },
                        description: "",
                        tags: ["character_arya", "unlock_location_shop", "universe_game_of_thrones", "character", "unlockable"],
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                    slug: "marvin-the-martian-fighter-road",
                    name: "Marvin the Martian",
                    description: {
                      localizations: {
                        "store_product-marvin-the-martian-fighter-road-description":
                          "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
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
                        name: "character_C018",
                        slug: "character_C018",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C018/Character_C018.Character_C018",
                          IsUnlockedByDefault: false,
                          ContentLevel: 3,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c018",
                          AssociatedCharacter: "C018",
                          DisplayName: "Marvin The Martian",
                          DisplayNameLocalizationKey: "53112D164A643142BBA1C9A932CC6C7D",
                          DisplayNameLocalizationNamespace: "[14471A7A4F4EB9F1B569C6A97E37DA15]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C018/C018_C018_S00.C018_C018_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C018/Skins/MI_C018_S00_RewardThumbnailMaterial.MI_C018_S00_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Universe:LooneyTunes",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:Headwear",
                              "TS:Dynamic:PremieredinThe80s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Non-Human",
                              "TS:Dynamic:ExtraTerrestrial",
                              "TS:Dynamic:Adult",
                              "TS:Dynamic:RedClothing",
                              "TS:Dynamic:GreenClothing",
                              "TS:Dynamic:WhiteClothing",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Dynamic:Season:Villainous",
                              "TS:Fixed:Class:Mage",
                              "TS:Fixed:Marvin",
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
                        },
                        description: "",
                        tags: ["character_c018", "unlock_location_shop", "universe_looney_tunes", "character", "unlockable"],
                        id: "6373c63b099b728f023be7cc",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "marvin-the-martian-fighter-road_gleamium",
                        name: "Marvin the Martian gleamium",
                        description: {
                          localizations: {
                            "store_product-marvin-the-martian-fighter-road-description":
                              "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-marvin-the-martian-fighter-road-description":
                                    "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
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
                                  "store_product-marvin-the-martian-fighter-road-tagline": "Make way for an earth-shattering kaboom!",
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
                    slug: "gizmo-fighter-road",
                    name: "Gizmo",
                    description: {
                      localizations: {
                        "store_product-gizmo-fighter-road-description":
                          "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
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
                        name: "character_C023A",
                        slug: "character_C023A",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/C023A/character_C023A.character_C023A",
                          IsUnlockedByDefault: false,
                          ContentLevel: 1,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_c023a",
                          AssociatedCharacter: "C023A",
                          DisplayName: "Gizmo",
                          DisplayNameLocalizationKey: "3871D39B4783950EDCE67F95FF3A614B",
                          DisplayNameLocalizationNamespace: "[D65B70984948FF3DAB706EA9BF8A0D4B]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/C023A/C023A_C023A_S00.C023A_C023A_S00",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/C023A/Skins/Skin00/MI_C023A_S00_RewardThumbnailMaterial.MI_C023A_S00_RewardThumbnailMaterial",
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
                              "TS:Fixed:Gizmo",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_c023a", "unlock_location_shop", "universe_gremlins", "character", "unlockable"],
                        id: "631a1206a0f904a256a534f6",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "gizmo-fighter-road_gleamium",
                        name: "Gizmo gleamium",
                        description: {
                          localizations: {
                            "store_product-gizmo-fighter-road-description":
                              "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-gizmo-fighter-road-description":
                                    "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
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
                                localizations: { "store_product-gizmo-fighter-road-tagline": "Heroic Mogwai Warrior. Adorableness incarnate." },
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
                    slug: "velma-fighter-road",
                    name: "Velma",
                    description: {
                      localizations: {
                        "store_product-velma-fighter-road-description":
                          "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
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
                        name: "character_velma",
                        slug: "character_velma",
                        type_class: "unlockable",
                        data: {
                          AssetPath: "/Game/Panda_Main/Characters/Velma/Character_Velma.character_Velma",
                          IsUnlockedByDefault: false,
                          ContentLevel: 2,
                          EnabledForShipping: true,
                          MasteryRewardTrack: "mrt_mastery_velma",
                          AssociatedCharacter: "Velma",
                          DisplayName: "Velma",
                          DisplayNameLocalizationKey: "CE51809D4097E60FAA4FDDBC56B4B5E8",
                          DisplayNameLocalizationNamespace: "[3CF961BA49F5BB83D24A6CAC1B1B5D8E]",
                          FighterClass: "Mage",
                          Rarity: "None",
                          RewardThumbnail: "/Game/Character/Captures/Velma/Velma_Velma.Velma_Velma",
                          RewardThumbnailMaterial:
                            "/Game/Panda_Main/Characters/Velma/Skins/MI_Velma_RewardThumbnailMaterial.MI_Velma_RewardThumbnailMaterial",
                          ItemRewardTags: {
                            GameplayTags: [
                              "TS:Fixed:Class:Mage",
                              "TS:Fixed:Universe:ScoobyDoo",
                              "TS:Fixed:FighterDifficulty:Medium",
                              "TS:Dynamic:Animated",
                              "TS:Dynamic:Eyewear",
                              "TS:Dynamic:PremieredBeforeThe80s",
                              "TS:Dynamic:TvInspired",
                              "TS:Dynamic:Human",
                              "TS:Dynamic:RedClothing",
                              "TS:Dynamic:OrangeClothing",
                              "TS:Fixed:Velma",
                            ],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                          },
                        },
                        description: "",
                        tags: ["character_velma", "unlock_location_shop", "universe_scooby_doo", "character", "unlockable"],
                        id: "62cf30d0154cdf898c6632c6",
                      },
                      quantity: 1,
                    },
                    skus: [
                      {
                        sku: "velma-fighter-road_gleamium",
                        name: "Velma gleamium",
                        description: {
                          localizations: {
                            "store_product-velma-fighter-road-description":
                              "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                                  "store_product-velma-fighter-road-description":
                                    "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
                                },
                              },
                            },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-velma-fighter-road-tagline": "Jinkies! We’ve got a mystery to solve!" } },
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
                      _hydra_StoreEnabed: [{ start: { _hydra_unix_date: 1742265244 }, end: { _hydra_unix_date: 1742351644 }, rendered: false }],
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
                            GameplayTags: ["TS:Fixed:Class:Mage", "TS:Fixed:FighterDifficulty:Medium", "TS:Fixed:Universe:DC", "TS:Fixed:Raven"],
                            ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                          },
                          Rarity: "None",
                          RewardThumbnail: "/Character_C025/Character/C025/Skins/T_C025_S00.T_C025_S00",
                          RewardThumbnailMaterial:
                            "/Character_C025/Character/C025/Skins/MI_C025_Skin_000_RewardThumbnailMaterial.MI_C025_Skin_000_RewardThumbnailMaterial",
                          MasteryRewardTrack: "mrt_mastery_c025",
                        },
                        description: "",
                        tags: ["character_c025", "unlock_location_shop", "universe_dc", "character", "unlockable"],
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
                          _hydra_StoreEnabed: [{ start: { _hydra_unix_date: 1742265244 }, end: { _hydra_unix_date: 1742351644 }, rendered: false }],
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                          _hydra_StoreEnabed: [{ start: { _hydra_unix_date: 1742265244 }, end: { _hydra_unix_date: 1742351644 }, rendered: false }],
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
                            type_options: { text: { localizations: { "new-fighter-": "New Fighter!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: { text: { localizations: { "store_product-raven-early-access-tagline": "Azarath Metrion Zinthos!" } } },
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
                      _hydra_StoreEnabed: [{ start: { _hydra_unix_date: 1742265244 }, end: { _hydra_unix_date: 1742351644 }, rendered: false }],
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
                            ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Class"],
                          },
                          MasteryRewardTrack: "mrt_mastery_c031",
                          Rarity: "None",
                          RewardThumbnail: "/Character_C031/C031/Skins/C031_placeholder_capture.C031_placeholder_capture",
                          RewardThumbnailMaterial:
                            "/Character_C031/C031/Skins/MI_C031_Skin_000_RewardThumbnailMaterial.MI_C031_Skin_000_RewardThumbnailMaterial",
                        },
                        description: "",
                        tags: ["character_c031", "universe_adventure_time", "character", "unlockable"],
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
                          _hydra_StoreEnabed: [{ start: { _hydra_unix_date: 1742265244 }, end: { _hydra_unix_date: 1742351644 }, rendered: false }],
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
                              AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                              RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                          _hydra_StoreEnabed: [{ start: { _hydra_unix_date: 1742265244 }, end: { _hydra_unix_date: 1742351644 }, rendered: false }],
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
                            type_options: { text: { localizations: { "new-fighter-": "New Fighter!" } } },
                            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                          },
                          {
                            name: "Tagline",
                            type: "text",
                            type_options: {
                              text: { localizations: { "store_product-marceline-early-access-tagline": "All hail the Vampire Queen!" } },
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
                  sku: "fighter-road-gleamium-17-fighters-marceline_gleamium_sale",
                  name: "Unlock the Road gleamium sale",
                  description: { localizations: { "store_product-fighter-road-gleamium-17-fighters-marceline-description": "Unlock the Road!" } },
                  data: null,
                  type: "sale",
                  price_type: "virtual_sale",
                  price_type_options: {
                    quantity: 3900,
                    original: {
                      currency_inventory_item: {
                        name: "Gleamium",
                        slug: "gleamium",
                        type_class: "currency",
                        data: {
                          AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                          RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                          DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                        },
                        description: "",
                        tags: ["currency", "consumable"],
                        id: "663288a2358a2a62107ca852",
                      },
                      original_cost: 31000,
                      already_owned_adjusted_cost: 17000,
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
                  sku: "fighter-road-gleamium-17-fighters-marceline_gleamium",
                  name: "Unlock the Road gleamium",
                  description: { localizations: { "store_product-fighter-road-gleamium-17-fighters-marceline-description": "Unlock the Road!" } },
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
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                        DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                      },
                      description: "",
                      tags: ["currency", "consumable"],
                      id: "663288a2358a2a62107ca852",
                    },
                    original_cost: 31000,
                    already_owned_adjusted_cost: 17000,
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
                        text: { localizations: { "store_product-fighter-road-gleamium-17-fighters-marceline-description": "Unlock the Road!" } },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "ProductCTA",
                      type: "text",
                      type_options: { text: { localizations: { "best-value-": "Best Value!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "AdditionalVisualData",
                      type: "data_only",
                      type_options: {},
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                      data: { UseHydraDisplayName: true, ShowSaleLabel: false },
                    },
                  ],
                },
              ],
            },
            visual_data: [{ name: "Default", layers: [] }],
          },
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        visual_data: [
          {
            name: "Default",
            layers: [
              { name: "ColumnWidth", type: "text", type_options: { text: "360" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "RowHeight", type: "text", type_options: { text: "560" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumColumns", type: "text", type_options: { text: "11" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumRows", type: "text", type_options: { text: "1" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
            ],
          },
        ],
        highlight_store_product_quantity: null,
      },
      {
        slug: "fighter-road-store-roster",
        template_slug: "fighter-road-store-roster",
        name: { localizations: { "layout_area-fighter-road-store-roster-name": "Fighter Road Roster" } },
        description: "",
        data: { should_show_background_image: false, FeaturedArea: false },
        template_type: "fixed_linear",
        enabled: true,
        items: [
          {
            slug: "marceline-fighter-road",
            name: "Marceline",
            description: {
              localizations: {
                "store_product-marceline-fighter-road-description":
                  "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "marceline-fighter-road",
              name: "Marceline",
              description: {
                localizations: {
                  "store_product-marceline-fighter-road-description":
                    "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
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
                      ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Class"],
                    },
                    MasteryRewardTrack: "mrt_mastery_c031",
                    Rarity: "None",
                    RewardThumbnail: "/Character_C031/C031/Skins/C031_placeholder_capture.C031_placeholder_capture",
                    RewardThumbnailMaterial:
                      "/Character_C031/C031/Skins/MI_C031_Skin_000_RewardThumbnailMaterial.MI_C031_Skin_000_RewardThumbnailMaterial",
                  },
                  description: "",
                  tags: ["character_c031", "universe_adventure_time", "character", "unlockable"],
                  id: "669fd3df7d13e0649bcb92e3",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "marceline-fighter-road_gleamium",
                  name: "Marceline gleamium",
                  description: {
                    localizations: {
                      "store_product-marceline-fighter-road-description":
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-marceline-fighter-road-description":
                              "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "ProductCTA",
                      type: "text",
                      type_options: { text: { localizations: { "new-fighter-": "New Fighter!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-marceline-fighter-road-tagline": "All hail the Vampire Queen!" } } },
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
            slug: "raven-fighter-road",
            name: "Raven",
            description: {
              localizations: {
                "store_product-raven-fighter-road-description":
                  "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "raven-fighter-road",
              name: "Raven",
              description: {
                localizations: {
                  "store_product-raven-fighter-road-description":
                    "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
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
                      GameplayTags: ["TS:Fixed:Class:Mage", "TS:Fixed:FighterDifficulty:Medium", "TS:Fixed:Universe:DC", "TS:Fixed:Raven"],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                    },
                    Rarity: "None",
                    RewardThumbnail: "/Character_C025/Character/C025/Skins/T_C025_S00.T_C025_S00",
                    RewardThumbnailMaterial:
                      "/Character_C025/Character/C025/Skins/MI_C025_Skin_000_RewardThumbnailMaterial.MI_C025_Skin_000_RewardThumbnailMaterial",
                    MasteryRewardTrack: "mrt_mastery_c025",
                  },
                  description: "",
                  tags: ["character_c025", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                  id: "663288a2358a2a62107ca84e",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "raven-fighter-road_gleamium",
                  name: "Raven gleamium",
                  description: {
                    localizations: {
                      "store_product-raven-fighter-road-description":
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-raven-fighter-road-description":
                              "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "ProductCTA",
                      type: "text",
                      type_options: { text: { localizations: { "new-fighter-": "New Fighter!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-raven-fighter-road-tagline": "Azarath Metrion Zinthos!" } } },
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
            slug: "nubia-fighter-road",
            name: "Nubia",
            description: {
              localizations: {
                "store_product-nubia-fighter-road-description":
                  "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
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
                      ParentTags: ["TS:Fixed:FighterDifficulty", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:Class"],
                    },
                    MasteryRewardTrack: "mrt_mastery_c027",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C027/C027_C027_S00.C027_C027_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C027/Skins/S00/MI_C027_S00_RewardThumbnailMaterial.MI_C027_S00_RewardThumbnailMaterial",
                  },
                  description: "",
                  tags: ["character_c027", "unlock_location_shop", "universe_dc", "character", "unlockable"],
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                      type_options: { text: { localizations: { "released-season-3-": "Released Season 3!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-nubia-fighter-road-tagline": "Explorer. Guardian of Doom’s Doorway." } },
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
            slug: "power-puff-girls-fighter-road",
            name: "Powerpuff Girls",
            description: {
              localizations: {
                "store_product-power-puff-girls-fighter-road-description":
                  "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "power-puff-girls-fighter-road",
              name: "Powerpuff Girls",
              description: {
                localizations: {
                  "store_product-power-puff-girls-fighter-road-description":
                    "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
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
                  name: "character_C030",
                  slug: "character_C030",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/MvsSeason03/Character/C030/character_C030.character_C030",
                    IsUnlockedByDefault: false,
                    ContentLevel: 5,
                    EnabledForShipping: true,
                    AssociatedCharacter: "C030",
                    DisplayName: "The Powerpuff Girls",
                    DisplayNameLocalizationKey: "B5FC31E94CB5CDB0E95AB78C84049CEC",
                    DisplayNameLocalizationNamespace: "[0005B2A4429256ACD220BDB66C51C171]",
                    FighterClass: "Assassin",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Assassin",
                        "TS:Dynamic:PowerpuffGirls",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:PowerpuffGirls",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                    },
                    MasteryRewardTrack: "mrt_mastery_c030",
                    Rarity: "None",
                    RewardThumbnail: "/MvsSeason03/Character/C030/UI/t_fighterthumbnail_powerpuffgirls.t_fighterthumbnail_powerpuffgirls",
                    RewardThumbnailMaterial: "/MvsSeason03/Character/C030/Skins/MI_C030_S00_ROSTERART.MI_C030_S00_ROSTERART",
                  },
                  description: "",
                  tags: ["character_c030", "universe_powerpuff_girls", "character", "unlockable"],
                  id: "663288a2358a2a62107ca843",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "power-puff-girls-fighter-road_gleamium",
                  name: "Powerpuff Girls gleamium",
                  description: {
                    localizations: {
                      "store_product-power-puff-girls-fighter-road-description":
                        "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-power-puff-girls-fighter-road-description":
                              "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "ProductCTA",
                      type: "text",
                      type_options: { text: { localizations: { "released-season-3-": "Released Season 3!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-power-puff-girls-fighter-road-tagline": "Sugar, Spice, and Everything Nice!" } },
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
            slug: "beetlejuice-fighter-road",
            name: "Beetlejuice",
            description: {
              localizations: {
                "store_product-beetlejuice-fighter-road-description":
                  "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "beetlejuice-fighter-road",
              name: "Beetlejuice",
              description: {
                localizations: {
                  "store_product-beetlejuice-fighter-road-description":
                    "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
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
                  name: "character_c024",
                  slug: "character_c024",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Character/C024/character_C024.character_C024",
                    AssociatedCharacter: "C024",
                    ContentLevel: 1,
                    DisplayName: "Betelgeuse",
                    DisplayNameLocalizationKey: "93E2226D41AC1CFB9351EDA3E14D8BE0",
                    DisplayNameLocalizationNamespace: "[70FA2890492F723AA97643AE98D19521]",
                    EnabledForShipping: false,
                    FighterClass: "Assassin",
                    IsUnlockedByDefault: false,
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Assassin",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:Universe:Beetlejuice",
                        "TS:Fixed:Betelgeuse",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                    },
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C024/C024_C024_S00.C024_C024_S00",
                    RewardThumbnailMaterial:
                      "/Game/Character/C024/Skins/S00/MI_C024_Skin_000_RewardThumbnailMaterial.MI_C024_Skin_000_RewardThumbnailMaterial",
                    MasteryRewardTrack: "mrt_mastery_c024",
                  },
                  description: "",
                  tags: ["character_c024", "unlock_location_shop", "universe_beetlejuice", "character", "unlockable"],
                  id: "669fd3df7d13e0649bcb9240",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "beetlejuice-fighter-road_gleamium",
                  name: "Beetlejuice gleamium",
                  description: {
                    localizations: {
                      "store_product-beetlejuice-fighter-road-description":
                        "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-beetlejuice-fighter-road-description":
                              "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "ProductCTA",
                      type: "text",
                      type_options: { text: { localizations: { "released-season-2-": "Released Season 2!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-beetlejuice-fighter-road-tagline": "The Juice is Loose, Baby!" } } },
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
            slug: "samurai-jack-fighter-road",
            name: "Samurai Jack",
            description: {
              localizations: {
                "store_product-samurai-jack-fighter-road-description":
                  "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "samurai-jack-fighter-road",
              name: "Samurai Jack",
              description: {
                localizations: {
                  "store_product-samurai-jack-fighter-road-description":
                    "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
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
                  name: "character_C026",
                  slug: "character_C026",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C026/character_C026.character_C026",
                    IsUnlockedByDefault: false,
                    ContentLevel: 5,
                    EnabledForShipping: true,
                    AssociatedCharacter: "C026",
                    DisplayName: "Samurai Jack",
                    DisplayNameLocalizationKey: "0B8E0DAB4B8D2D4477E939983A9EF9DF",
                    DisplayNameLocalizationNamespace: "[E7C75EF54EBA82CF72AA318017607F93]",
                    FighterClass: "Bruiser",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Bruiser",
                        "TS:Fixed:Universe:SamuraiJack",
                        "TS:Fixed:FighterDifficulty:Low",
                        "TS:Dynamic:SamuraiJack",
                        "TS:Fixed:SamuraiJack",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                    },
                    MasteryRewardTrack: "mrt_mastery_c026",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C026/C026_C026_S00.C026_C026_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C026/MI_C026_S00_RewardThumbnailMaterial.MI_C026_S00_RewardThumbnailMaterial",
                  },
                  description: "",
                  tags: ["character_c026", "universe_pfg", "character", "unlockable"],
                  id: "63d7f829b059bec8be09b966",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "samurai-jack-fighter-road_gleamium",
                  name: "Samurai Jack gleamium",
                  description: {
                    localizations: {
                      "store_product-samurai-jack-fighter-road-description":
                        "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-samurai-jack-fighter-road-description":
                              "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "ProductCTA",
                      type: "text",
                      type_options: { text: { localizations: { "released-season-2-": "Released Season 2!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-samurai-jack-fighter-road-tagline": "Gotta get back… back to the past." } },
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
            slug: "jason-fighter-road",
            name: "Jason Vorhees",
            description: {
              localizations: {
                "store_product-jason-fighter-road-description":
                  "A hulking tank with some shocking abilities to move around the battlefield, Jason is here to make every day Friday the 13th. Whether terrifying his opponents with his empty stare or his deadly machete, he’s in the running to be the Multiverse’s worst nightmare.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
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
                    RewardThumbnail: "/Game/Character/Captures/Jason/Jason_Jason_Skin_000.Jason_Jason_Skin_000",
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
                  tags: ["character_c035", "unlock_location_shop", "universe_friday_the13th", "character", "unlockable"],
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                      type_options: { text: { localizations: { "released-season-1-": "Released Season 1!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-jason-fighter-road-tagline": "Unstoppable monster from beyond the grave." } },
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
            slug: "agent-smith-fighter-road",
            name: "Agent Smith",
            description: {
              localizations: {
                "store_product-agent-smith-fighter-road-description":
                  "Smith is one of the deadliest Agents ever tasked with defending the Matrix. With his staggering speed, uncanny aim, and insatiable hunger for control he’s ready to make the Multiverse his playground.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
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
                    RewardThumbnail: "/Game/Character/C036/UI/FullPortrait_C036_S00.FullPortrait_C036_S00",
                    RewardThumbnailMaterial: "/Game/Character/C036/UI/MI_C036_S00_RewardThumbnail.MI_C036_S00_RewardThumbnail",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:Class:Bruiser",
                        "TS:Fixed:Universe:Matrix",
                        "TS:Fixed:AgentSmith",
                      ],
                      ParentTags: ["TS:Fixed:FighterDifficulty", "TS:Fixed", "TS", "TS:Fixed:Class", "TS:Fixed:Universe"],
                    },
                  },
                  description: "",
                  tags: ["character_c036", "unlock_location_shop", "universe_the_matrix", "character", "unlockable"],
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                      type_options: { text: { localizations: { "released-season-1-": "Released Season 1!" } } },
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "the-joker-fighter-road",
            name: "The Joker",
            description: {
              localizations: {
                "store_product-the-joker-fighter-road-description":
                  "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "the-joker-fighter-road",
              name: "The Joker",
              description: {
                localizations: {
                  "store_product-the-joker-fighter-road-description":
                    "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
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
                  name: "character_C028",
                  slug: "character_C028",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C028/character_C028.character_C028",
                    IsUnlockedByDefault: false,
                    ContentLevel: 5,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c028",
                    AssociatedCharacter: "C028",
                    DisplayName: "The Joker",
                    DisplayNameLocalizationKey: "8B00F96F41E30B69F4380D89D6F63B84",
                    DisplayNameLocalizationNamespace: "[32A7514C4FAD5BCD3C4E568E990F5073]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C028/C028_C028_S00.C028_C028_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C028/Skins/MI_C028_S00_RewardThumbnailMaterial.MI_C028_S00_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Mage",
                        "TS:Fixed:FighterDifficulty:Low",
                        "TS:Fixed:Universe:DC",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:ComicInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:BlueClothing",
                        "TS:Dynamic:GreenClothing",
                        "TS:Dynamic:PurpleClothing",
                        "TS:Dynamic:WhiteClothing",
                        "TS:Dynamic:BlackClothing",
                        "TS:Dynamic:Season:Villainous",
                        "TS:Fixed:Joker",
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
                  tags: ["character_c028", "universe_dc", "character", "unlockable"],
                  id: "63d7f829b059bec8be09b97c",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "the-joker-fighter-road_gleamium",
                  name: "The Joker gleamium",
                  description: {
                    localizations: {
                      "store_product-the-joker-fighter-road-description":
                        "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-the-joker-fighter-road-description":
                              "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "ProductCTA",
                      type: "text",
                      type_options: { text: { localizations: { "released-season-1-": "Released Season 1!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-the-joker-fighter-road-tagline": "The Clown Prince of Crime is here!" } },
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
            slug: "morty-fighter-road",
            name: "Morty",
            description: {
              localizations: { "store_product-morty-fighter-road-description": "He's a Morty. All bark, no bite. What more could you want?" },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "morty-fighter-road",
              name: "Morty",
              description: {
                localizations: { "store_product-morty-fighter-road-description": "He's a Morty. All bark, no bite. What more could you want?" },
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
                  name: "character_c019",
                  slug: "character_c019",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C019/character_C019.character_C019",
                    IsUnlockedByDefault: false,
                    ContentLevel: 3,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c019",
                    AssociatedCharacter: "C019",
                    DisplayName: "Morty",
                    DisplayNameLocalizationKey: "AF4F02164361CF360F8603815EA2EFA7",
                    DisplayNameLocalizationNamespace: "[615F65904A71E606D82FE0BACAEE9C26]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C019/C019_C019_S00.C019_C019_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C019/Skins/MI_C019_S00_RewardThumbnailMaterial.MI_C019_S00_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Universe:RickandMorty",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredInThe10s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:BlueClothing",
                        "TS:Dynamic:TShirt",
                        "TS:Fixed:FighterDifficulty:high",
                        "TS:Fixed:Class:Mage",
                        "TS:Fixed:Morty",
                      ],
                      ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty", "TS:Fixed:Class"],
                    },
                  },
                  description: "",
                  tags: ["character_c019", "unlock_location_shop", "universe_rick_and_morty", "character", "unlockable"],
                  id: "62fa7c0804da60ea6d57d001",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "morty-fighter-road_gleamium",
                  name: "Morty gleamium",
                  description: {
                    localizations: { "store_product-morty-fighter-road-description": "He's a Morty. All bark, no bite. What more could you want?" },
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
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-morty-fighter-road-description": "He's a Morty. All bark, no bite. What more could you want?",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-morty-fighter-road-tagline": "Aw geez, it’s a fighting game." } } },
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
            slug: "rick-fighter-road",
            name: "Rick",
            description: { localizations: { "store_product-rick-fighter-road-description": "Let me deus ex machina this sh*t and go home!" } },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "rick-fighter-road",
              name: "Rick",
              description: { localizations: { "store_product-rick-fighter-road-description": "Let me deus ex machina this sh*t and go home!" } },
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
                  name: "character_C020",
                  slug: "character_C020",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C020/character_C020.character_C020",
                    IsUnlockedByDefault: false,
                    ContentLevel: 3,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c020",
                    AssociatedCharacter: "C020",
                    DisplayName: "Rick",
                    DisplayNameLocalizationKey: "29A097C040D67AC3454E0FB790B1D734",
                    DisplayNameLocalizationNamespace: "[3B4A9DDB421E5C418B0FF8B67DA04B3D]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C020/C020_C020_S00.C020_C020_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C020/Skins/MI_C020_S00_RewardThumbnailMaterial.MI_C020_S00_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Mage",
                        "TS:Fixed:Universe:RickandMorty",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredInThe10s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:BlueClothing",
                        "TS:Dynamic:WhiteClothing",
                        "TS:Fixed:FighterDifficulty:high",
                        "TS:Fixed:Rick",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                    },
                  },
                  description: "",
                  tags: ["character_c020", "unlock_location_shop", "universe_rick_and_morty", "character", "unlockable"],
                  id: "63331ebbacc29c767277af5a",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "rick-fighter-road_gleamium",
                  name: "Rick gleamium",
                  description: { localizations: { "store_product-rick-fighter-road-description": "Let me deus ex machina this sh*t and go home!" } },
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
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                        text: { localizations: { "store_product-rick-fighter-road-description": "Let me deus ex machina this sh*t and go home!" } },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-rick-fighter-road-tagline": "Come on guys. It's Rick. He’s a genius." } },
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
            slug: "jake-the-dog-fighter-road",
            name: "Jake the Dog",
            description: {
              localizations: {
                "store_product-jake-the-dog-fighter-road-description":
                  "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "jake-the-dog-fighter-road",
              name: "Jake the Dog",
              description: {
                localizations: {
                  "store_product-jake-the-dog-fighter-road-description":
                    "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
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
                  name: "character_jake",
                  slug: "character_jake",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/Jake/character_jake.character_jake",
                    IsUnlockedByDefault: false,
                    ContentLevel: 5,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_jake",
                    AssociatedCharacter: "Jake",
                    DisplayName: "Jake",
                    DisplayNameLocalizationKey: "53B81F2040DF14FDFD6E3385397AA9CB",
                    DisplayNameLocalizationNamespace: "[14C7F1E2448AE0144341E5A0C1B0817C]",
                    FighterClass: "Bruiser",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Jake/Jake_Jake.Jake_Jake",
                    RewardThumbnailMaterial: "/Game/Panda_Main/Characters/Jake/Skins/MI_Jake_RewardThumbnailMaterial.MI_Jake_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Bruiser",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:Universe:AdventureTime",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredInThe10s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:Fuzzy",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:Jake",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_jake", "unlock_location_shop", "universe_adventure_time", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632ca",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "jake-the-dog-fighter-road_gleamium",
                  name: "Jake the Dog gleamium",
                  description: {
                    localizations: {
                      "store_product-jake-the-dog-fighter-road-description":
                        "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-jake-the-dog-fighter-road-description":
                              "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-jake-the-dog-fighter-road-tagline": "Those Stretchy Powers are a trip, dude." } },
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
            slug: "finn-the-human-fighter-road",
            name: "Finn the Human",
            description: {
              localizations: {
                "store_product-finn-the-human-fighter-road-description":
                  "Finn's bombastic sword skills will make short work of his opponents. The more hits he lands, the more coins he earns… and those coins can buy some pretty sweet power-ups.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
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
                    RewardThumbnail: "/Game/Character/Captures/Finn/Finn_Finn_S00.Finn_Finn_S00",
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
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                    },
                  },
                  description: "",
                  tags: ["character_finn", "unlock_location_shop", "universe_adventure_time", "character", "unlockable"],
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                          localizations: { "store_product-finn-the-human-fighter-road-tagline": "He’ll slay anything that’s evil, that’s his deal!" },
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
            slug: "garnet-fighter-road",
            name: "Garnet",
            description: {
              localizations: {
                "store_product-garnet-fighter-road-description":
                  "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "garnet-fighter-road",
              name: "Garnet",
              description: {
                localizations: {
                  "store_product-garnet-fighter-road-description":
                    "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
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
                  name: "character_garnet",
                  slug: "character_garnet",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/Garnet/CharData/character_garnet.character_garnet",
                    IsUnlockedByDefault: false,
                    ContentLevel: 4,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_garnet",
                    AssociatedCharacter: "Garnet",
                    DisplayName: "Garnet",
                    DisplayNameLocalizationKey: "C99178D345F384477004839BE6BECDFE",
                    DisplayNameLocalizationNamespace: "[66245BA74751C55C36E175BBD7BB67DC]",
                    FighterClass: "Bruiser",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Garnet/Garnet_Garnet.Garnet_Garnet",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/Garnet/Skins/MI_Garnet_RewardThumbnailMaterial.MI_Garnet_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:Eyewear",
                        "TS:Dynamic:ExtraTerrestrial",
                        "TS:Dynamic:PremieredInThe10s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:PurpleClothing",
                        "TS:Dynamic:PinkClothing",
                        "TS:Fixed:Class:Bruiser",
                        "TS:Fixed:FighterDifficulty:Low",
                        "TS:Fixed:Universe:StevenUniverse",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:Garnet",
                      ],
                      ParentTags: ["TS:Dynamic", "TS", "TS:Fixed:Class", "TS:Fixed", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                    },
                  },
                  description: "",
                  tags: ["character_garnet", "unlock_location_shop", "universe_steven_universe", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632b5",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "garnet-fighter-road_gleamium",
                  name: "Garnet gleamium",
                  description: {
                    localizations: {
                      "store_product-garnet-fighter-road-description":
                        "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-garnet-fighter-road-description":
                              "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
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
                          localizations: { "store_product-garnet-fighter-road-tagline": "Protector of Earth and possessor of unshakeable rhythm." },
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
            slug: "bugs-bunny-fighter-road",
            name: "Bugs Bunny",
            description: {
              localizations: {
                "store_product-bugs-bunny-fighter-road-description":
                  "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "bugs-bunny-fighter-road",
              name: "Bugs Bunny",
              description: {
                localizations: {
                  "store_product-bugs-bunny-fighter-road-description":
                    "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
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
                  name: "character_bugs_bunny",
                  slug: "character_bugs_bunny",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/BugsBunnyV2/Character_BugsBunny.Character_BugsBunny",
                    IsUnlockedByDefault: false,
                    ContentLevel: 2,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_bugs_bunny",
                    AssociatedCharacter: "BugsBunny",
                    DisplayName: "Bugs Bunny",
                    DisplayNameLocalizationKey: "D8B82A5248EE8300452841BFA911943A",
                    DisplayNameLocalizationNamespace: "[24AF51FF46F9FFBC87882CB73CFCBD7E]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Bugs_Bunny/Bugs_Bunny_BugsBunny.Bugs_Bunny_BugsBunny",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/BugsBunnyV2/Skins/MI_BugsBunny_RewardThumbnailMaterial.MI_BugsBunny_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Mage",
                        "TS:Fixed:Universe:LooneyTunes",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:Fuzzy",
                        "TS:Fixed:BugsBunny",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_bugs_bunny", "unlock_location_shop", "universe_looney_tunes", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632cc",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "bugs-bunny-fighter-road_gleamium",
                  name: "Bugs Bunny gleamium",
                  description: {
                    localizations: {
                      "store_product-bugs-bunny-fighter-road-description":
                        "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-bugs-bunny-fighter-road-description":
                              "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-bugs-bunny-fighter-road-tagline": "The rascaliest rabbit this side of Kalamazoo." } },
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
            slug: "black-adam-fighter-road",
            name: "Black Adam",
            description: {
              localizations: {
                "store_product-black-adam-fighter-road-description":
                  "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "black-adam-fighter-road",
              name: "Black Adam",
              description: {
                localizations: {
                  "store_product-black-adam-fighter-road-description":
                    "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
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
                  name: "character_C021",
                  slug: "character_C021",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C021/character_C021.character_C021",
                    IsUnlockedByDefault: false,
                    ContentLevel: 3,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c021",
                    AssociatedCharacter: "C021",
                    DisplayName: "Black Adam",
                    DisplayNameLocalizationKey: "99E3ECF9414F069669CF15B2E6F30856",
                    DisplayNameLocalizationNamespace: "[5FE8EFE4448387D0D38C77A346A4011E]",
                    FighterClass: "Bruiser",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C021/C021_C021_S00.C021_C021_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C021/Skins/MI_C021_S00_RewardThumbnailMaterial.MI_C021_S00_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:FighterDifficulty:high",
                        "TS:Fixed:Universe:DC",
                        "TS:Fixed:Class:Bruiser",
                        "TS:Dynamic:Caped",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:ComicInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:Rich",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:BlackClothing",
                        "TS:Dynamic:Season:Villainous",
                        "TS:Fixed:BlackAdam",
                      ],
                      ParentTags: [
                        "TS:Fixed:FighterDifficulty",
                        "TS:Fixed",
                        "TS",
                        "TS:Fixed:Universe",
                        "TS:Fixed:Class",
                        "TS:Dynamic",
                        "TS:Dynamic:Season",
                      ],
                    },
                  },
                  description: "",
                  tags: ["character_c021", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                  id: "62cf30d0154cdf898c663331",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "black-adam-fighter-road_gleamium",
                  name: "Black Adam gleamium",
                  description: {
                    localizations: {
                      "store_product-black-adam-fighter-road-description":
                        "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-black-adam-fighter-road-description":
                              "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-black-adam-fighter-road-tagline": "The ruler of Kahndaq bows to no mortal man." } },
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
            slug: "stripe-fighter-road",
            name: "Stripe",
            description: {
              localizations: {
                "store_product-stripe-fighter-road-description":
                  "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "stripe-fighter-road",
              name: "Stripe",
              description: {
                localizations: {
                  "store_product-stripe-fighter-road-description":
                    "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
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
                  name: "character_C023B",
                  slug: "character_C023B",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C023B/character_C023B.character_C023B",
                    IsUnlockedByDefault: false,
                    ContentLevel: 2,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c023b",
                    AssociatedCharacter: "C023B",
                    DisplayName: "Stripe",
                    DisplayNameLocalizationKey: "6E7C47694D2DE9BFF514C3955106F88D",
                    DisplayNameLocalizationNamespace: "[1DD7EEA7423CDE25D4C06C88D3892693]",
                    FighterClass: "Assassin",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C023B/C023B_C023B_S00.C023B_C023B_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C023B/Skins/S00/MI_C023B_S00_RewardThumbnailMaterial.MI_C023B_S00_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Assassin",
                        "TS:Fixed:Universe:Gremlins",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Dynamic:PremieredinThe80s",
                        "TS:Dynamic:MovieInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:Season:Villainous",
                        "TS:Fixed:Stripe",
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
                  },
                  description: "",
                  tags: ["character_c023b", "unlock_location_shop", "universe_gremlins", "character", "unlockable"],
                  id: "6346e56243c9dc67697487f4",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "stripe-fighter-road_gleamium",
                  name: "Stripe gleamium",
                  description: {
                    localizations: {
                      "store_product-stripe-fighter-road-description":
                        "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-stripe-fighter-road-description":
                              "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-stripe-fighter-road-tagline": "Mean. Green. Obscene." } } },
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
            slug: "steven-universe-fighter-road",
            name: "Steven Universe",
            description: {
              localizations: {
                "store_product-steven-universe-fighter-road-description":
                  "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "steven-universe-fighter-road",
              name: "Steven Universe",
              description: {
                localizations: {
                  "store_product-steven-universe-fighter-road-description":
                    "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
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
                  name: "character_steven",
                  slug: "character_steven",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/Steven/Character_Steven.Character_Steven",
                    IsUnlockedByDefault: false,
                    ContentLevel: 3,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_steven",
                    AssociatedCharacter: "StevenUniverse",
                    DisplayName: "Steven Universe",
                    DisplayNameLocalizationKey: "A321D78349E4D64A11A31E92D99520F3",
                    DisplayNameLocalizationNamespace: "[C75844CB4FBD57B6F97083A4FA17B60F]",
                    FighterClass: "Tank",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Steven/Steven_Steven.Steven_Steven",
                    RewardThumbnailMaterial: "/Game/Panda_Main/Characters/Steven/MI_Steven_RewardThumbnailMaterial.MI_Steven_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Universe:StevenUniverse",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:Sandals",
                        "TS:Dynamic:PremieredInThe10s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:PinkClothing",
                        "TS:Dynamic:BlueClothing",
                        "TS:Dynamic:TShirt",
                        "TS:Fixed:FighterDifficulty:high",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:Class:Tank",
                        "TS:Fixed:Steven",
                      ],
                      ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty", "TS:Fixed:Class"],
                    },
                  },
                  description: "",
                  tags: ["character_steven_universe", "unlock_location_shop", "universe_steven_universe", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632ab",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "steven-universe-fighter-road_gleamium",
                  name: "Steven Universe gleamium",
                  description: {
                    localizations: {
                      "store_product-steven-universe-fighter-road-description":
                        "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-steven-universe-fighter-road-description":
                              "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-steven-universe-fighter-road-tagline": "Half-human, half-Gem, all hero." } },
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
            slug: "tom-and-jerry-fighter-road",
            name: "Tom and Jerry",
            description: {
              localizations: {
                "store_product-tom-and-jerry-fighter-road-description":
                  "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "tom-and-jerry-fighter-road",
              name: "Tom and Jerry",
              description: {
                localizations: {
                  "store_product-tom-and-jerry-fighter-road-description":
                    "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
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
                  name: "character_tom_and_jerry",
                  slug: "character_tom_and_jerry",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/TomAndJerry/character_TomAndJerry.character_TomAndJerry",
                    IsUnlockedByDefault: false,
                    ContentLevel: 2,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_tom_and_jerry",
                    AssociatedCharacter: "TomAndJerry",
                    DisplayName: "Tom & Jerry",
                    DisplayNameLocalizationKey: "8088A1224ED9239329945084B3E88BED",
                    DisplayNameLocalizationNamespace: "[1DA5A56D41606B8628A636AF03670BD6]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Tom_and_Jerry/Tom_and_Jerry_TomAndJerry_S00.Tom_and_Jerry_TomAndJerry_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/TomAndJerry/Skins/MI_TomAndJerry_S00_RewardThumbnailMaterial.MI_TomAndJerry_S00_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Mage",
                        "TS:Fixed:FighterDifficulty:high",
                        "TS:Fixed:Universe:TomandJerry",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:Fuzzy",
                        "TS:Fixed:TomAndJerry",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_tom_and_jerry", "unlock_location_shop", "universe_tom_and_jerry", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632c8",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "tom-and-jerry-fighter-road_gleamium",
                  name: "Tom and Jerry gleamium",
                  description: {
                    localizations: {
                      "store_product-tom-and-jerry-fighter-road-description":
                        "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-tom-and-jerry-fighter-road-description":
                              "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
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
                            "store_product-tom-and-jerry-fighter-road-tagline":
                              "When these frenemies put aside their differences, their zany mayhem can be unstoppable.",
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "lebron-james-fighter-road",
            name: "LeBron James",
            description: {
              localizations: {
                "store_product-lebron-james-fighter-road-description":
                  "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "lebron-james-fighter-road",
              name: "LeBron James",
              description: {
                localizations: {
                  "store_product-lebron-james-fighter-road-description":
                    "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
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
                  name: "character_c16",
                  slug: "character_c16",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/c016/character_c016.character_C016",
                    IsUnlockedByDefault: false,
                    ContentLevel: 3,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_lebron",
                    AssociatedCharacter: "C016",
                    DisplayName: "LeBron James",
                    DisplayNameLocalizationKey: "7FD99CE64BFDDA0D3794F8B3B3A66163",
                    DisplayNameLocalizationNamespace: "[5ED80A544338CF438D4DA189FB12EFAD]",
                    FighterClass: "Bruiser",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C016/C016_C016.C016_C016",
                    RewardThumbnailMaterial: "/Game/Panda_Main/Characters/c016/Skins/MI_C016_RewardThumbnailMaterial.MI_C016_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredinThe80s",
                        "TS:Dynamic:PremieredinThe2020s",
                        "TS:Dynamic:MovieInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:Rich",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:SportsAttire",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:Universe:SpaceJam",
                        "TS:Fixed:Class:Bruiser",
                        "TS:Fixed:LeBron",
                      ],
                      ParentTags: ["TS:Dynamic", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed", "TS:Fixed:Universe", "TS:Fixed:Class"],
                    },
                  },
                  description: "",
                  tags: ["character_c016", "unlock_location_shop", "universe_space_jam", "character", "unlockable"],
                  id: "62e00feac9e30dfd32a5a366",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "lebron-james-fighter-road_gleamium",
                  name: "LeBron James gleamium",
                  description: {
                    localizations: {
                      "store_product-lebron-james-fighter-road-description":
                        "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-lebron-james-fighter-road-description":
                              "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
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
                          localizations: { "store_product-lebron-james-fighter-road-tagline": "Champion. Icon. Teammate. Father. Philanthropist." },
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
            slug: "the-iron-giant-fighter-road",
            name: "The Iron Giant",
            description: {
              localizations: {
                "store_product-the-iron-giant-fighter-road-description":
                  "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "the-iron-giant-fighter-road",
              name: "The Iron Giant",
              description: {
                localizations: {
                  "store_product-the-iron-giant-fighter-road-description":
                    "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
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
                  name: "character_C017",
                  slug: "character_C017",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C017/character_C017.character_C017",
                    IsUnlockedByDefault: false,
                    ContentLevel: 4,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c017",
                    AssociatedCharacter: "C017",
                    DisplayName: "Iron Giant",
                    DisplayNameLocalizationKey: "8A87049E48E8994B52D55FA68BD02C64",
                    DisplayNameLocalizationNamespace: "[82F9E0F94EEB65A2FB94AB8ABE9E68DF]",
                    FighterClass: "Tank",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C017/C017_C017_S01.C017_C017_S01",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C017/Skins/S01/MI_C017_S01_RewardThumbnailMaterial.MI_C017_S01_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Tank",
                        "TS:Fixed:FighterDifficulty:high",
                        "TS:Fixed:Universe:IronGiant",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredinThe90s",
                        "TS:Dynamic:MovieInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:ExtraTerrestrial",
                        "TS:Dynamic:RedClothing",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:Metallic",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:IronGiant",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_c017", "unlock_location_shop", "universe_the_iron_giant", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632fd",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "the-iron-giant-fighter-road_gleamium",
                  name: "The Iron Giant gleamium",
                  description: {
                    localizations: {
                      "store_product-the-iron-giant-fighter-road-description":
                        "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-the-iron-giant-fighter-road-description":
                              "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-the-iron-giant-fighter-road-tagline": "Robotic hero from beyond the stars." } },
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
            slug: "superman-fighter-road",
            name: "Superman",
            description: {
              localizations: {
                "store_product-superman-fighter-road-description":
                  "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "superman-fighter-road",
              name: "Superman",
              description: {
                localizations: {
                  "store_product-superman-fighter-road-description":
                    "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
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
                  name: "character_superman",
                  slug: "character_superman",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/Superman/character_C003_.character_C003_",
                    IsUnlockedByDefault: false,
                    ContentLevel: 4,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c003",
                    AssociatedCharacter: "Superman",
                    DisplayName: "Superman",
                    DisplayNameLocalizationKey: "6079FFBA406F64CB082817A166CE85B1",
                    DisplayNameLocalizationNamespace: "[3C0725174BAB99C140AFE488D14CAE7D]",
                    FighterClass: "Tank",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Superman/Superman_Superman.Superman_Superman",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/Superman/Skin/MI_Superman_RewardThumbnailMaterial.MI_Superman_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Tank",
                        "TS:Fixed:Universe:DC",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Dynamic:Caped",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:ComicInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:ExtraTerrestrial",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:RedClothing",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:BlueClothing",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:Superman",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_superman", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                  id: "62cf30d0154cdf898c663292",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "superman-fighter-road_gleamium",
                  name: "Superman gleamium",
                  description: {
                    localizations: {
                      "store_product-superman-fighter-road-description":
                        "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-superman-fighter-road-description":
                              "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
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
                            "store_product-superman-fighter-road-tagline":
                              "Founding member of the Justice League, and one of Earth’s mightiest heroes.",
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "reindog-fighter-road",
            name: "Reindog",
            description: {
              localizations: {
                "store_product-reindog-fighter-road-description":
                  "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "reindog-fighter-road",
              name: "Reindog",
              description: {
                localizations: {
                  "store_product-reindog-fighter-road-description":
                    "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
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
                  name: "character_creature",
                  slug: "character_creature",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/Creature/character_creature.character_creature",
                    IsUnlockedByDefault: false,
                    ContentLevel: 1,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_creature",
                    AssociatedCharacter: "ReinDog",
                    DisplayName: "Reindog",
                    DisplayNameLocalizationKey: "1B13A826453E7DF115FEE1AAA120A626",
                    DisplayNameLocalizationNamespace: "[F005C5AE48446471A33A24B95E8BC5BE]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Rein_Dog/Rein_Dog_Creature.Rein_Dog_Creature",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/Creature/Skins/MI_Creature_RewardThumbnailMaterial.MI_Creature_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Mage",
                        "TS:Dynamic:PremieredinThe2020s",
                        "TS:Dynamic:PFGOriginal",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:ExtraTerrestrial",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:Fuzzy",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:Universe:PlayerFirstGames",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:Reindog",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Dynamic", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe"],
                    },
                  },
                  description: "",
                  tags: ["character_rein_dog", "unlock_location_shop", "universe_pfg", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632cb",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "reindog-fighter-road_gleamium",
                  name: "Reindog gleamium",
                  description: {
                    localizations: {
                      "store_product-reindog-fighter-road-description":
                        "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-reindog-fighter-road-description":
                              "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
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
                            "store_product-reindog-fighter-road-tagline":
                              "Fluffy Guardian of Zanifeer’s royal family and 6th wearer of the gem of power!",
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "harley-quinn-fighter-road",
            name: "Harley Quinn",
            description: {
              localizations: {
                "store_product-harley-quinn-fighter-road-description":
                  "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "harley-quinn-fighter-road",
              name: "Harley Quinn",
              description: {
                localizations: {
                  "store_product-harley-quinn-fighter-road-description":
                    "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
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
                  name: "character_harleyquinn",
                  slug: "character_harleyquinn",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/HarleyQuinn/character_harley.character_harley",
                    IsUnlockedByDefault: false,
                    ContentLevel: 1,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_harleyquinn",
                    AssociatedCharacter: "HarleyQuinn",
                    DisplayName: "Harley Quinn",
                    DisplayNameLocalizationKey: "4F0A7FB9494041CC66CA91894E51B41F",
                    DisplayNameLocalizationNamespace: "[11771B594454CF7D64AFD39BEEBEB256]",
                    FighterClass: "Assassin",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Harley/Harley_HarleyWithJacket.Harley_HarleyWithJacket",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/HarleyQuinn/skins/MI_HarleyWithJacket_RewardThumbnailMaterial.MI_HarleyWithJacket_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Assassin",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:Universe:DC",
                        "TS:Dynamic:PremieredInThe10s",
                        "TS:Dynamic:ComicInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:RedClothing",
                        "TS:Dynamic:WhiteClothing",
                        "TS:Dynamic:BlackClothing",
                        "TS:Dynamic:Season:Villainous",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:HarleyQuinn",
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
                  tags: ["character_harley_quinn", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632cd",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "harley-quinn-fighter-road_gleamium",
                  name: "Harley Quinn gleamium",
                  description: {
                    localizations: {
                      "store_product-harley-quinn-fighter-road-description":
                        "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-harley-quinn-fighter-road-description":
                              "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
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
                            "store_product-harley-quinn-fighter-road-tagline": "She’s tried being a good guy, but being bad is too much fun.",
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "wonder-woman-fighter-road",
            name: "Wonder Woman",
            description: {
              localizations: {
                "store_product-wonder-woman-fighter-road-description":
                  "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "wonder-woman-fighter-road",
              name: "Wonder Woman",
              description: {
                localizations: {
                  "store_product-wonder-woman-fighter-road-description":
                    "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
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
                  name: "character_wonder_woman",
                  slug: "character_wonder_woman",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/WonderWomanV2/character_wonder_woman.character_wonder_woman",
                    IsUnlockedByDefault: false,
                    ContentLevel: 4,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_wonder_woman",
                    AssociatedCharacter: "WonderWoman",
                    DisplayName: "Wonder Woman",
                    DisplayNameLocalizationKey: "3ABA35AA480251E5F68931846FC3BCD5",
                    DisplayNameLocalizationNamespace: "[AEF1FAE541B7E876BE6ECBA9D2E2A7D2]",
                    FighterClass: "Tank",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Wonder_Woman/Wonder_Woman_Skin_WonderWoman_.Wonder_Woman_Skin_WonderWoman_",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/WonderWomanV2/Skins/MI_Skin_WonderWoman__RewardThumbnailMaterial.MI_Skin_WonderWoman__RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Tank",
                        "TS:Fixed:Universe:DC",
                        "TS:Fixed:FighterDifficulty:Low",
                        "TS:Dynamic:SwordWielder",
                        "TS:Dynamic:Headwear",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:ComicInspired",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:RedClothing",
                        "TS:Dynamic:YellowClothing",
                        "TS:Dynamic:BlueClothing",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:WonderWoman",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_wonder_woman", "unlock_location_tutorial", "universe_dc", "character", "unlockable"],
                  id: "62cf30d0154cdf898c66328f",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "wonder-woman-fighter-road_gleamium",
                  name: "Wonder Woman gleamium",
                  description: {
                    localizations: {
                      "store_product-wonder-woman-fighter-road-description":
                        "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-wonder-woman-fighter-road-description":
                              "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
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
                            "store_product-wonder-woman-fighter-road-tagline":
                              "Amazon Princess. Daughter of Zeus. Founding member of the Justice League.",
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "taz-fighter-road",
            name: "Taz",
            description: {
              localizations: {
                "store_product-taz-fighter-road-description":
                  "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "taz-fighter-road",
              name: "Taz",
              description: {
                localizations: {
                  "store_product-taz-fighter-road-description":
                    "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
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
                  name: "character_taz",
                  slug: "character_taz",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C015/character_C015.character_C015",
                    IsUnlockedByDefault: false,
                    ContentLevel: 3,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_taz",
                    AssociatedCharacter: "C015",
                    DisplayName: "Taz",
                    DisplayNameLocalizationKey: "CC3DED2547C9E9C4BEDACAB250F4C75A",
                    DisplayNameLocalizationNamespace: "[125F669341B48230D893D3A22D9F4988]",
                    FighterClass: "Assassin",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C015/C015_C015_Default.C015_C015_Default",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C015/Skins/MI_C015_Default_RewardThumbnailMaterial.MI_C015_Default_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Universe:LooneyTunes",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:Fuzzy",
                        "TS:Dynamic:Adult",
                        "TS:Fixed:Class:Assassin",
                        "TS:Fixed:Taz",
                      ],
                      ParentTags: ["TS:Fixed:Universe", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Dynamic", "TS:Fixed:Class"],
                    },
                  },
                  description: "",
                  tags: ["character_c015", "unlock_location_shop", "universe_looney_tunes", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632e7",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "taz-fighter-road_gleamium",
                  name: "Taz gleamium",
                  description: {
                    localizations: {
                      "store_product-taz-fighter-road-description":
                        "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-taz-fighter-road-description":
                              "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
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
                          localizations: { "store_product-taz-fighter-road-tagline": "(Don’t worry. We don’t know what he’s saying either.)" },
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
            slug: "batman-fighter-road",
            name: "Batman",
            description: {
              localizations: {
                "store_product-batman-fighter-road-description":
                  "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "batman-fighter-road",
              name: "Batman",
              description: {
                localizations: {
                  "store_product-batman-fighter-road-description":
                    "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
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
                  name: "character_batman",
                  slug: "character_batman",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/Batman/Character_Batman.Character_Batman",
                    IsUnlockedByDefault: false,
                    ContentLevel: 2,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_batman",
                    AssociatedCharacter: "Batman",
                    DisplayName: "Batman",
                    DisplayNameLocalizationKey: "011AED8A4E960D0F4A471787475A5909",
                    DisplayNameLocalizationNamespace: "[F4D73DCE4F555D2C619676AB3654486B]",
                    FighterClass: "Bruiser",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Batman/Batman_Batman.Batman_Batman",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/BatmanV2/Skins/MI_Batman_RewardThumbnailMaterial.MI_Batman_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Bruiser",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Fixed:Universe:DC",
                        "TS:Dynamic:Caped",
                        "TS:Dynamic:Eyewear",
                        "TS:Dynamic:Headwear",
                        "TS:Dynamic:PremieredinThe80s",
                        "TS:Dynamic:ComicInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:Rich",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:BlackClothing",
                        "TS:Dynamic:Detective",
                        "TS:Dynamic:Heroic",
                        "TS:Fixed:Batman",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_batman", "unlock_location_shop", "universe_dc", "character", "unlockable"],
                  id: "62cf30d0154cdf898c663290",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "batman-fighter-road_gleamium",
                  name: "Batman gleamium",
                  description: {
                    localizations: {
                      "store_product-batman-fighter-road-description":
                        "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-batman-fighter-road-description":
                              "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
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
                            "store_product-batman-fighter-road-tagline": "The World’s Greatest Detective. He is the night. He is Batman.",
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "arya-stark-fighter-road",
            name: "Arya Stark",
            description: {
              localizations: {
                "store_product-arya-stark-fighter-road-description":
                  "A highly mobile master of Water Dancing-based combos and deadly assassin of the highest order. Steal your enemy’s face to keep the rest of the battlefield on their toes.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
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
                    RewardThumbnailMaterial: "/Game/Panda_Main/Characters/Arya/Skins/MI_C006_RewardThumbnail.MI_C006_RewardThumbnail",
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
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Dynamic", "TS:Fixed:FighterDifficulty"],
                    },
                  },
                  description: "",
                  tags: ["character_arya", "unlock_location_shop", "universe_game_of_thrones", "character", "unlockable"],
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-arya-stark-fighter-road-tagline": "She rejected being a lady. What she became was something far deadlier.",
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
            visual_data: [{ name: "Default", layers: [] }],
          },
          {
            slug: "marvin-the-martian-fighter-road",
            name: "Marvin the Martian",
            description: {
              localizations: {
                "store_product-marvin-the-martian-fighter-road-description":
                  "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "marvin-the-martian-fighter-road",
              name: "Marvin the Martian",
              description: {
                localizations: {
                  "store_product-marvin-the-martian-fighter-road-description":
                    "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
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
                  name: "character_C018",
                  slug: "character_C018",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C018/Character_C018.Character_C018",
                    IsUnlockedByDefault: false,
                    ContentLevel: 3,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c018",
                    AssociatedCharacter: "C018",
                    DisplayName: "Marvin The Martian",
                    DisplayNameLocalizationKey: "53112D164A643142BBA1C9A932CC6C7D",
                    DisplayNameLocalizationNamespace: "[14471A7A4F4EB9F1B569C6A97E37DA15]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C018/C018_C018_S00.C018_C018_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C018/Skins/MI_C018_S00_RewardThumbnailMaterial.MI_C018_S00_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Universe:LooneyTunes",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:Headwear",
                        "TS:Dynamic:PremieredinThe80s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Non-Human",
                        "TS:Dynamic:ExtraTerrestrial",
                        "TS:Dynamic:Adult",
                        "TS:Dynamic:RedClothing",
                        "TS:Dynamic:GreenClothing",
                        "TS:Dynamic:WhiteClothing",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Dynamic:Season:Villainous",
                        "TS:Fixed:Class:Mage",
                        "TS:Fixed:Marvin",
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
                  },
                  description: "",
                  tags: ["character_c018", "unlock_location_shop", "universe_looney_tunes", "character", "unlockable"],
                  id: "6373c63b099b728f023be7cc",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "marvin-the-martian-fighter-road_gleamium",
                  name: "Marvin the Martian gleamium",
                  description: {
                    localizations: {
                      "store_product-marvin-the-martian-fighter-road-description":
                        "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-marvin-the-martian-fighter-road-description":
                              "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
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
                          localizations: { "store_product-marvin-the-martian-fighter-road-tagline": "Make way for an earth-shattering kaboom!" },
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
            slug: "gizmo-fighter-road",
            name: "Gizmo",
            description: {
              localizations: {
                "store_product-gizmo-fighter-road-description":
                  "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "gizmo-fighter-road",
              name: "Gizmo",
              description: {
                localizations: {
                  "store_product-gizmo-fighter-road-description":
                    "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
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
                  name: "character_C023A",
                  slug: "character_C023A",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/C023A/character_C023A.character_C023A",
                    IsUnlockedByDefault: false,
                    ContentLevel: 1,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_c023a",
                    AssociatedCharacter: "C023A",
                    DisplayName: "Gizmo",
                    DisplayNameLocalizationKey: "3871D39B4783950EDCE67F95FF3A614B",
                    DisplayNameLocalizationNamespace: "[D65B70984948FF3DAB706EA9BF8A0D4B]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/C023A/C023A_C023A_S00.C023A_C023A_S00",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/C023A/Skins/Skin00/MI_C023A_S00_RewardThumbnailMaterial.MI_C023A_S00_RewardThumbnailMaterial",
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
                        "TS:Fixed:Gizmo",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:FighterDifficulty", "TS:Fixed:Universe", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_c023a", "unlock_location_shop", "universe_gremlins", "character", "unlockable"],
                  id: "631a1206a0f904a256a534f6",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "gizmo-fighter-road_gleamium",
                  name: "Gizmo gleamium",
                  description: {
                    localizations: {
                      "store_product-gizmo-fighter-road-description":
                        "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-gizmo-fighter-road-description":
                              "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-gizmo-fighter-road-tagline": "Heroic Mogwai Warrior. Adorableness incarnate." } },
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
            slug: "velma-fighter-road",
            name: "Velma",
            description: {
              localizations: {
                "store_product-velma-fighter-road-description":
                  "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "velma-fighter-road",
              name: "Velma",
              description: {
                localizations: {
                  "store_product-velma-fighter-road-description":
                    "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
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
                  name: "character_velma",
                  slug: "character_velma",
                  type_class: "unlockable",
                  data: {
                    AssetPath: "/Game/Panda_Main/Characters/Velma/Character_Velma.character_Velma",
                    IsUnlockedByDefault: false,
                    ContentLevel: 2,
                    EnabledForShipping: true,
                    MasteryRewardTrack: "mrt_mastery_velma",
                    AssociatedCharacter: "Velma",
                    DisplayName: "Velma",
                    DisplayNameLocalizationKey: "CE51809D4097E60FAA4FDDBC56B4B5E8",
                    DisplayNameLocalizationNamespace: "[3CF961BA49F5BB83D24A6CAC1B1B5D8E]",
                    FighterClass: "Mage",
                    Rarity: "None",
                    RewardThumbnail: "/Game/Character/Captures/Velma/Velma_Velma.Velma_Velma",
                    RewardThumbnailMaterial:
                      "/Game/Panda_Main/Characters/Velma/Skins/MI_Velma_RewardThumbnailMaterial.MI_Velma_RewardThumbnailMaterial",
                    ItemRewardTags: {
                      GameplayTags: [
                        "TS:Fixed:Class:Mage",
                        "TS:Fixed:Universe:ScoobyDoo",
                        "TS:Fixed:FighterDifficulty:Medium",
                        "TS:Dynamic:Animated",
                        "TS:Dynamic:Eyewear",
                        "TS:Dynamic:PremieredBeforeThe80s",
                        "TS:Dynamic:TvInspired",
                        "TS:Dynamic:Human",
                        "TS:Dynamic:RedClothing",
                        "TS:Dynamic:OrangeClothing",
                        "TS:Fixed:Velma",
                      ],
                      ParentTags: ["TS:Fixed:Class", "TS:Fixed", "TS", "TS:Fixed:Universe", "TS:Fixed:FighterDifficulty", "TS:Dynamic"],
                    },
                  },
                  description: "",
                  tags: ["character_velma", "unlock_location_shop", "universe_scooby_doo", "character", "unlockable"],
                  id: "62cf30d0154cdf898c6632c6",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "velma-fighter-road_gleamium",
                  name: "Velma gleamium",
                  description: {
                    localizations: {
                      "store_product-velma-fighter-road-description":
                        "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
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
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                            "store_product-velma-fighter-road-description":
                              "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: {
                        text: { localizations: { "store_product-velma-fighter-road-tagline": "Jinkies! We’ve got a mystery to solve!" } },
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
              { name: "ColumnWidth", type: "text", type_options: { text: "360" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "RowHeight", type: "text", type_options: { text: "560" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "FillPriority", type: "text", type_options: { text: "COLUMN" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumColumns", type: "text", type_options: { text: "6" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumRows", type: "text", type_options: { text: "100" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              {
                name: "VerticalArea",
                type: "data_only",
                type_options: {},
                offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                data: { VerticalArea: true },
              },
            ],
          },
        ],
        highlight_store_product_quantity: null,
      },
      {
        slug: "fighter-road-store-skip-1",
        template_slug: "fighter-road-store-skip-1",
        name: { localizations: { "layout_area-fighter-road-store-skip-1-name": "Fighter Road Skip 1" } },
        description: "",
        data: { should_show_background_image: false, FeaturedArea: false },
        template_type: "fixed_linear",
        enabled: true,
        items: [],
        visual_data: [
          {
            name: "Default",
            layers: [
              { name: "ColumnWidth", type: "text", type_options: { text: "360" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "RowHeight", type: "text", type_options: { text: "560" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "FillPriority", type: "text", type_options: { text: "COLUMN" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumColumns", type: "text", type_options: { text: "6" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumRows", type: "text", type_options: { text: "100" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              {
                name: "VerticalArea",
                type: "data_only",
                type_options: {},
                offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                data: { VerticalArea: true },
              },
            ],
          },
        ],
        highlight_store_product_quantity: null,
      },
      {
        slug: "fighter-road-store-skip-2",
        template_slug: "fighter-road-store-skip-2",
        name: { localizations: { "layout_area-fighter-road-store-skip-2-name": "Fighter Road Skip 2" } },
        description: "",
        data: { should_show_background_image: false, FeaturedArea: false },
        template_type: "fixed_linear",
        enabled: true,
        items: [
          {
            slug: "fighter-road-5-tiers",
            name: { localizations: { "store_product-fighter-road-5-tiers-name": "Purchase the Next 5 Tiers" } },
            description: { localizations: { "store_product-fighter-road-5-tiers-description": "Purchase the next 5 Fighters!" } },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "fighter-road-5-tiers",
              name: { localizations: { "store_product-fighter-road-5-tiers-name": "Purchase the Next 5 Tiers" } },
              description: { localizations: { "store_product-fighter-road-5-tiers-description": "Purchase the next 5 Fighters!" } },
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
                  name: "fighter-road-tier-purchase-5",
                  slug: "fighter-road-tier-purchase-5",
                  type_class: "consumable",
                  data: { Mrt: "MRT_BaseRosterFighterRoad", TiersToGrant: 5, DisplayName: "Purchase 5 fighters" },
                  description: "",
                  tags: ["mrt", "fighterroad"],
                  id: "66e9a9297af4cd81ec2684ac",
                },
                quantity: 1,
              },
              skus: [
                {
                  sku: "fighter-road-5-tiers_gleamium_sale",
                  name: "Purchase the Next 5 Tiers gleamium sale",
                  description: { localizations: { "store_product-fighter-road-5-tiers-description": "Purchase the next 5 Fighters!" } },
                  data: null,
                  type: "sale",
                  price_type: "virtual_sale",
                  price_type_options: {
                    quantity: 1400,
                    original: {
                      currency_inventory_item: {
                        name: "Gleamium",
                        slug: "gleamium",
                        type_class: "currency",
                        data: {
                          AssetPath: "/Game/Panda_Main/Currencies/Currency_Gleamium.Currency_Gleamium",
                          RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
                          DisplayNameLocalizationKey: "BF1687764A53B3EC34AE22B7065E88A5",
                        },
                        description: "",
                        tags: ["currency", "consumable"],
                        id: "663288a2358a2a62107ca852",
                      },
                      quantity: 2000,
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
                  preferred: true,
                },
                {
                  sku: "fighter-road-5-tiers_gleamium",
                  name: "Purchase the Next 5 Tiers gleamium",
                  description: { localizations: { "store_product-fighter-road-5-tiers-description": "Purchase the next 5 Fighters!" } },
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
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_gleamium.t_ui_icon_gleamium",
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
                        text: { localizations: { "store_product-fighter-road-5-tiers-description": "Purchase the next 5 Fighters!" } },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "AdditionalVisualData",
                      type: "data_only",
                      type_options: {},
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                      data: { UseHydraDisplayName: true, ShowSaleLabel: false },
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
              { name: "ColumnWidth", type: "text", type_options: { text: "360" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "RowHeight", type: "text", type_options: { text: "560" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "FillPriority", type: "text", type_options: { text: "COLUMN" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumColumns", type: "text", type_options: { text: "6" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              { name: "MaxNumRows", type: "text", type_options: { text: "100" }, offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } } },
              {
                name: "VerticalArea",
                type: "data_only",
                type_options: {},
                offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                data: { VerticalArea: true },
              },
            ],
          },
        ],
        highlight_store_product_quantity: null,
      },
    ],
    visual_data: [],
  }