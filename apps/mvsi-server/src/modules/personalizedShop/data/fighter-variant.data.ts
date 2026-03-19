export const fighter_variant_static_data ={
    slug: "fighter-layout",
    layout_type_slug: "dokken-layout-type",
    name: "Fighter Store",
    description: "Fighter store Main",
    data: null,
    variant_slug: "fighter-variant",
    weight: 3,
    enabled: true,
    areas: [
      {
        slug: "fighter-store-layout-main",
        template_slug: "fighter-store-layout-main",
        name: { localizations: { "layout_area-fighter-store-layout-main-name": "Fighter Store" } },
        description: "",
        data: { should_show_background_image: false, FeaturedArea: false },
        template_type: "fixed_linear",
        enabled: true,
        items: [
          {
            slug: "marceline",
            name: "Marceline",
            description: {
              localizations: {
                "store_product-marceline-description":
                  "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "marceline",
              name: "Marceline",
              description: {
                localizations: {
                  "store_product-marceline-description":
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
                  sku: "marceline_character-unlock-ticket-currency",
                  name: "Marceline character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-marceline-description":
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
                  enabled: true,
                  is_available_for_purchase: true,
                  visual_data: [],
                  preferred: true,
                },
                {
                  sku: "marceline_character_currency",
                  name: "Marceline character_currency",
                  description: {
                    localizations: {
                      "store_product-marceline-description":
                        "Marcy is a fun-loving, 1,000-year-old, Vampire Queen who’s come from the Kingdom of Ooo to suck some red and blow some minds with her trusty axe. While she’s ultimately a force for good, be very careful to stay on her good side… or you’ll get a taste of her true demon/vampire form!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                            "store_product-marceline-description":
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
                      type_options: { text: { localizations: { "store_product-marceline-tagline": "All hail the Vampire Queen!" } } },
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
          null,
          {
            slug: "raven",
            name: "Raven",
            description: {
              localizations: {
                "store_product-raven-description":
                  "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "raven",
              name: "Raven",
              description: {
                localizations: {
                  "store_product-raven-description":
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
                  sku: "raven_character-unlock-ticket-currency",
                  name: "Raven character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-raven-description":
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
                  enabled: true,
                  is_available_for_purchase: true,
                  visual_data: [],
                  preferred: true,
                },
                {
                  sku: "raven_character_currency",
                  name: "Raven character_currency",
                  description: {
                    localizations: {
                      "store_product-raven-description":
                        "A founding member of the (new) Teen Titans, Raven’s half-demon parentage grants her incredible magical abilities. Between her telekinesis, flight, projection of her Soul-Self, and control over darkness itself, she’s a powerful ally for the team in the war for the Multiverse.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                            "store_product-raven-description":
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
                      type_options: { text: { localizations: { "store_product-raven-tagline": "Azarath Metrion Zinthos!" } } },
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
          null,
          {
            slug: "nubia",
            name: "Nubia",
            description: {
              localizations: {
                "store_product-nubia-description":
                  "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "nubia",
              name: "Nubia",
              description: {
                localizations: {
                  "store_product-nubia-description":
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
                  sku: "nubia_character-unlock-ticket-currency",
                  name: "Nubia character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-nubia-description":
                        "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
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
                  enabled: true,
                  is_available_for_purchase: true,
                  visual_data: [],
                  preferred: true,
                },
                {
                  sku: "nubia_character_currency",
                  name: "Nubia character_currency",
                  description: {
                    localizations: {
                      "store_product-nubia-description":
                        "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "nubia_gleamium",
                  name: "Nubia gleamium",
                  description: {
                    localizations: {
                      "store_product-nubia-description":
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
                  enabled: false,
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
                            "store_product-nubia-description":
                              "Nubia is a mighty Amazon warrior and hunter who was sent through the Multiverse to recover stolen artifacts. Now she’s stuck here, but she’s decided to lend her magical spear and incredible warrior prowess to the cause of justice. Once she’s got you in her sights, watch out!",
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
                      type_options: { text: { localizations: { "store_product-nubia-tagline": "Explorer. Guardian of Doom’s Doorway." } } },
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
          null,
          {
            slug: "power-puff-girls",
            name: "Powerpuff Girls",
            description: {
              localizations: {
                "store_product-power-puff-girls-description":
                  "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "power-puff-girls",
              name: "Powerpuff Girls",
              description: {
                localizations: {
                  "store_product-power-puff-girls-description":
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
                  sku: "power-puff-girls_character-unlock-ticket-currency",
                  name: "Powerpuff Girls character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-power-puff-girls-description":
                        "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
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
                  enabled: true,
                  is_available_for_purchase: true,
                  visual_data: [],
                  preferred: true,
                },
                {
                  sku: "power-puff-girls_character_currency",
                  name: "Powerpuff Girls character_currency",
                  description: {
                    localizations: {
                      "store_product-power-puff-girls-description":
                        "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "power-puff-girls_gleamium",
                  name: "Powerpuff Girls gleamium",
                  description: {
                    localizations: {
                      "store_product-power-puff-girls-description":
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
                    quantity: 1250,
                  },
                  recurrence_is_active: false,
                  max_per_recurrence: null,
                  current_recurrence_purchase_count: 0,
                  valid_user_segments: true,
                  is_price_valid: true,
                  enabled: false,
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
                            "store_product-power-puff-girls-description":
                              "Blossom, Bubbles, and Buttercup are here to save the day! This high-flying, heavy-hitting, super-powered trio has arrived from Townsville to put all those nasty bad guys in their place. They know that sharing is caring, so they take turns being the leader and putting their own special spin on things.",
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
                      type_options: { text: { localizations: { "store_product-power-puff-girls-tagline": "Sugar, Spice, and Everything Nice!" } } },
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
            slug: "beetlejuice",
            name: "Beetlejuice",
            description: {
              localizations: {
                "store_product-beetlejuice-description":
                  "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "beetlejuice",
              name: "Beetlejuice",
              description: {
                localizations: {
                  "store_product-beetlejuice-description":
                    "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
                },
              },
              data: null,
              already_owned: true,
              number_times_purchased: 1,
              times_can_purchase: 1,
              is_player_purchasable: false,
              is_store_purchasable: true,
              enabled: true,
              has_active_sku: true,
              valid_user_segments: true,
              is_purchasable: false,
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
                  sku: "beetlejuice_gleamium",
                  name: "Beetlejuice gleamium",
                  description: {
                    localizations: {
                      "store_product-beetlejuice-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "beetlejuice_character_currency",
                  name: "Beetlejuice character_currency",
                  description: {
                    localizations: {
                      "store_product-beetlejuice-description":
                        "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "beetlejuice_character-unlock-ticket-currency",
                  name: "Beetlejuice character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-beetlejuice-description":
                        "The Ghost With The Most is here straight from the Afterlife to deliver his unique blend of undead charm. Frights and delights abound as this shapeshifting “Bio-Exorcist”. Deploying ghoulish attacks and creepy-crawly companions to send a chill up the Multiverse’s spine.",
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
                          localizations: {
                            "store_product-beetlejuice-description":
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
                      type_options: { text: { localizations: { "store_product-beetlejuice-tagline": "The Juice is Loose, Baby!" } } },
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
            slug: "samurai-jack",
            name: "Samurai Jack",
            description: {
              localizations: {
                "store_product-samurai-jack-description":
                  "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "samurai-jack",
              name: "Samurai Jack",
              description: {
                localizations: {
                  "store_product-samurai-jack-description":
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
                  sku: "samurai-jack_gleamium",
                  name: "Samurai Jack gleamium",
                  description: {
                    localizations: {
                      "store_product-samurai-jack-description":
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
                    quantity: 1250,
                  },
                  recurrence_is_active: false,
                  max_per_recurrence: null,
                  current_recurrence_purchase_count: 0,
                  valid_user_segments: true,
                  is_price_valid: true,
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "samurai-jack_character_currency",
                  name: "Samurai Jack character_currency",
                  description: {
                    localizations: {
                      "store_product-samurai-jack-description":
                        "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "samurai-jack_character-unlock-ticket-currency",
                  name: "Samurai Jack character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-samurai-jack-description":
                        "After being flung into the future by the evil Aku, the warrior known as Jack has embarked on a relentless quest to return to the past. With his unmatched swordsmanship and incredible agility, he's truly a force to be reckoned with. When he's not busy vanquishing evil, Jack enjoys a relaxing cup of tea.",
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
                          localizations: {
                            "store_product-samurai-jack-description":
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
                      type_options: { text: { localizations: { "store_product-samurai-jack-tagline": "Gotta get back… back to the past." } } },
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
            slug: "jason",
            name: "Jason Vorhees",
            description: {
              localizations: {
                "store_product-jason-description":
                  "A hulking tank with some shocking abilities to move around the battlefield, Jason is here to make every day Friday the 13th. Whether terrifying his opponents with his empty stare or his deadly machete, he’s in the running to be the Multiverse’s worst nightmare.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "jason",
              name: "Jason Vorhees",
              description: {
                localizations: {
                  "store_product-jason-description":
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
                  sku: "jason_character-unlock-ticket-currency",
                  name: "Jason Vorhees character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-jason-description":
                        "A hulking tank with some shocking abilities to move around the battlefield, Jason is here to make every day Friday the 13th. Whether terrifying his opponents with his empty stare or his deadly machete, he’s in the running to be the Multiverse’s worst nightmare.",
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
                  enabled: true,
                  is_available_for_purchase: true,
                  visual_data: [],
                  preferred: true,
                },
                {
                  sku: "jason_character_currency",
                  name: "Jason Vorhees character_currency",
                  description: {
                    localizations: {
                      "store_product-jason-description":
                        "A hulking tank with some shocking abilities to move around the battlefield, Jason is here to make every day Friday the 13th. Whether terrifying his opponents with his empty stare or his deadly machete, he’s in the running to be the Multiverse’s worst nightmare.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "jason_gleamium",
                  name: "Jason Vorhees gleamium",
                  description: {
                    localizations: {
                      "store_product-jason-description":
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
                  enabled: false,
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
                            "store_product-jason-description":
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
                      type_options: { text: { localizations: { "store_product-jason-tagline": "Unstoppable monster from beyond the grave." } } },
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
            slug: "agent-smith",
            name: "Agent Smith",
            description: {
              localizations: {
                "store_product-agent-smith-description":
                  "Smith is one of the deadliest Agents ever tasked with defending the Matrix. With his staggering speed, uncanny aim, and insatiable hunger for control he’s ready to make the Multiverse his playground.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "agent-smith",
              name: "Agent Smith",
              description: {
                localizations: {
                  "store_product-agent-smith-description":
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
                  sku: "agent-smith_character-unlock-ticket-currency",
                  name: "Agent Smith character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-agent-smith-description":
                        "Smith is one of the deadliest Agents ever tasked with defending the Matrix. With his staggering speed, uncanny aim, and insatiable hunger for control he’s ready to make the Multiverse his playground.",
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
                  enabled: true,
                  is_available_for_purchase: true,
                  visual_data: [],
                  preferred: true,
                },
                {
                  sku: "agent-smith_character_currency",
                  name: "Agent Smith character_currency",
                  description: {
                    localizations: {
                      "store_product-agent-smith-description":
                        "Smith is one of the deadliest Agents ever tasked with defending the Matrix. With his staggering speed, uncanny aim, and insatiable hunger for control he’s ready to make the Multiverse his playground.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "agent-smith_gleamium",
                  name: "Agent Smith gleamium",
                  description: {
                    localizations: {
                      "store_product-agent-smith-description":
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
                  enabled: false,
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
                            "store_product-agent-smith-description":
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
                            "store_product-agent-smith-tagline": "Programmed to defend the Matrix, what he became was something far more",
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
            slug: "the-joker",
            name: "The Joker",
            description: {
              localizations: {
                "store_product-the-joker-description":
                  "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "the-joker",
              name: "The Joker",
              description: {
                localizations: {
                  "store_product-the-joker-description":
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
                  sku: "the-joker_gleamium",
                  name: "The Joker gleamium",
                  description: {
                    localizations: {
                      "store_product-the-joker-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "the-joker_character_currency",
                  name: "The Joker character_currency",
                  description: {
                    localizations: {
                      "store_product-the-joker-description":
                        "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "the-joker_character-unlock-ticket-currency",
                  name: "The Joker character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-the-joker-description":
                        "Unleash a toybox of gadgets to cause chaos on the battlefield. Use everything from pogosticks to balloons to keep on the move. Fling a deck of razor sharp playing cards to keep the edge on your enemies.",
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
                          localizations: {
                            "store_product-the-joker-description":
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
                      type_options: { text: { localizations: { "store_product-the-joker-tagline": "The Clown Prince of Crime is here!" } } },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                      data: { UseHydraDisplayName: false, ShowSaleLabel: false },
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
          null,
          {
            slug: "morty",
            name: "Morty",
            description: { localizations: { "store_product-morty-description": "He's a Morty. All bark, no bite. What more could you want?" } },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "morty",
              name: "Morty",
              description: { localizations: { "store_product-morty-description": "He's a Morty. All bark, no bite. What more could you want?" } },
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
                  sku: "morty_gleamium",
                  name: "Morty gleamium",
                  description: { localizations: { "store_product-morty-description": "He's a Morty. All bark, no bite. What more could you want?" } },
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "morty_character_currency",
                  name: "Morty character_currency",
                  description: { localizations: { "store_product-morty-description": "He's a Morty. All bark, no bite. What more could you want?" } },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "morty_character-unlock-ticket-currency",
                  name: "Morty character-unlock-ticket-currency",
                  description: { localizations: { "store_product-morty-description": "He's a Morty. All bark, no bite. What more could you want?" } },
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
                        text: { localizations: { "store_product-morty-description": "He's a Morty. All bark, no bite. What more could you want?" } },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-morty-tagline": "Aw geez, it’s a fighting game." } } },
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
            slug: "rick",
            name: "Rick",
            description: { localizations: { "store_product-rick-description": "Let me deus ex machina this sh*t and go home!" } },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "rick",
              name: "Rick",
              description: { localizations: { "store_product-rick-description": "Let me deus ex machina this sh*t and go home!" } },
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
                  sku: "rick_gleamium",
                  name: "Rick gleamium",
                  description: { localizations: { "store_product-rick-description": "Let me deus ex machina this sh*t and go home!" } },
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "rick_character_currency",
                  name: "Rick character_currency",
                  description: { localizations: { "store_product-rick-description": "Let me deus ex machina this sh*t and go home!" } },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "rick_character-unlock-ticket-currency",
                  name: "Rick character-unlock-ticket-currency",
                  description: { localizations: { "store_product-rick-description": "Let me deus ex machina this sh*t and go home!" } },
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
                        text: { localizations: { "store_product-rick-description": "Let me deus ex machina this sh*t and go home!" } },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-rick-tagline": "Come on guys. It's Rick. He’s a genius." } } },
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
            slug: "jake-the-dog",
            name: "Jake the Dog",
            description: {
              localizations: {
                "store_product-jake-the-dog-description":
                  "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "jake-the-dog",
              name: "Jake the Dog",
              description: {
                localizations: {
                  "store_product-jake-the-dog-description":
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
                  sku: "jake-the-dog_gleamium",
                  name: "Jake the Dog gleamium",
                  description: {
                    localizations: {
                      "store_product-jake-the-dog-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "jake-the-dog_character_currency",
                  name: "Jake the Dog character_currency",
                  description: {
                    localizations: {
                      "store_product-jake-the-dog-description":
                        "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "jake-the-dog_character-unlock-ticket-currency",
                  name: "Jake the Dog character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-jake-the-dog-description":
                        "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
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
                          localizations: {
                            "store_product-jake-the-dog-description":
                              "Jake’s magical Stretchy Powers let him deal massive damage and surprise the heck out of his opponents on the battlefield. He loves to get in their faces and mess 'em up!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-jake-the-dog-tagline": "Those Stretchy Powers are a trip, dude." } } },
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
            slug: "finn-the-human",
            name: "Finn the Human",
            description: {
              localizations: {
                "store_product-finn-the-human-description":
                  "Finn's bombastic sword skills will make short work of his opponents. The more hits he lands, the more coins he earns… and those coins can buy some pretty sweet power-ups.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "finn-the-human",
              name: "Finn the Human",
              description: {
                localizations: {
                  "store_product-finn-the-human-description":
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
                  sku: "finn-the-human_gleamium",
                  name: "Finn the Human gleamium",
                  description: {
                    localizations: {
                      "store_product-finn-the-human-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "finn-the-human_character_currency",
                  name: "Finn the Human character_currency",
                  description: {
                    localizations: {
                      "store_product-finn-the-human-description":
                        "Finn's bombastic sword skills will make short work of his opponents. The more hits he lands, the more coins he earns… and those coins can buy some pretty sweet power-ups.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "finn-the-human_character-unlock-ticket-currency",
                  name: "Finn the Human character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-finn-the-human-description":
                        "Finn's bombastic sword skills will make short work of his opponents. The more hits he lands, the more coins he earns… and those coins can buy some pretty sweet power-ups.",
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
                          localizations: {
                            "store_product-finn-the-human-description":
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
                        text: { localizations: { "store_product-finn-the-human-tagline": "He’ll slay anything that’s evil, that’s his deal!" } },
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
            slug: "garnet",
            name: "Garnet",
            description: {
              localizations: {
                "store_product-garnet-description":
                  "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "garnet",
              name: "Garnet",
              description: {
                localizations: {
                  "store_product-garnet-description":
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
                  sku: "garnet_gleamium",
                  name: "Garnet gleamium",
                  description: {
                    localizations: {
                      "store_product-garnet-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "garnet_character_currency",
                  name: "Garnet character_currency",
                  description: {
                    localizations: {
                      "store_product-garnet-description":
                        "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "garnet_character-unlock-ticket-currency",
                  name: "Garnet character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-garnet-description":
                        "Garnet hits (and dances) harder than just about anyone else. And those fists aren’t just for show - She can even launch them like missiles across the battlefield!",
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
                          localizations: {
                            "store_product-garnet-description":
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
                        text: { localizations: { "store_product-garnet-tagline": "Protector of Earth and possessor of unshakeable rhythm." } },
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
            slug: "bugs-bunny",
            name: "Bugs Bunny",
            description: {
              localizations: {
                "store_product-bugs-bunny-description":
                  "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "bugs-bunny",
              name: "Bugs Bunny",
              description: {
                localizations: {
                  "store_product-bugs-bunny-description":
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
                  sku: "bugs-bunny_gleamium",
                  name: "Bugs Bunny gleamium",
                  description: {
                    localizations: {
                      "store_product-bugs-bunny-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "bugs-bunny_character_currency",
                  name: "Bugs Bunny character_currency",
                  description: {
                    localizations: {
                      "store_product-bugs-bunny-description":
                        "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "bugs-bunny_character-unlock-ticket-currency",
                  name: "Bugs Bunny character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-bugs-bunny-description":
                        "First rule of showbiz: Always keep ‘em guessing, doc. Bugs has a bag of tricks so deep that not even he always knows what he’ll pull out to wallop or whack his enemies with next.",
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
                          localizations: {
                            "store_product-bugs-bunny-description":
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
                        text: { localizations: { "store_product-bugs-bunny-tagline": "The rascaliest rabbit this side of Kalamazoo." } },
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
            slug: "black-adam",
            name: "Black Adam",
            description: {
              localizations: {
                "store_product-black-adam-description":
                  "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "black-adam",
              name: "Black Adam",
              description: {
                localizations: {
                  "store_product-black-adam-description":
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
                  sku: "black-adam_gleamium",
                  name: "Black Adam gleamium",
                  description: {
                    localizations: {
                      "store_product-black-adam-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "black-adam_character_currency",
                  name: "Black Adam character_currency",
                  description: {
                    localizations: {
                      "store_product-black-adam-description":
                        "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "black-adam_character-unlock-ticket-currency",
                  name: "Black Adam character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-black-adam-description":
                        "The ruler of Kahndaq, Black Adam is perfectly equipped to keep control of the battlefield with his aerial mobility and mastery over lightning itself.",
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
                          localizations: {
                            "store_product-black-adam-description":
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
                        text: { localizations: { "store_product-black-adam-tagline": "The ruler of Kahndaq bows to no mortal man." } },
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
            slug: "stripe",
            name: "Stripe",
            description: {
              localizations: {
                "store_product-stripe-description":
                  "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "stripe",
              name: "Stripe",
              description: {
                localizations: {
                  "store_product-stripe-description":
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
                  sku: "stripe_gleamium",
                  name: "Stripe gleamium",
                  description: {
                    localizations: {
                      "store_product-stripe-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "stripe_character_currency",
                  name: "Stripe character_currency",
                  description: {
                    localizations: {
                      "store_product-stripe-description":
                        "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "stripe_character-unlock-ticket-currency",
                  name: "Stripe character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-stripe-description":
                        "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
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
                          localizations: {
                            "store_product-stripe-description":
                              "From buzz saws to dynamite, Stripe’s got the meanest toybox this side of the Erie Canal. Combined with his teeth, claws, and lack of moral compass he’s the perfect deadly assassin.",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-stripe-tagline": "Mean. Green. Obscene." } } },
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
            slug: "steven-universe",
            name: "Steven Universe",
            description: {
              localizations: {
                "store_product-steven-universe-description":
                  "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "steven-universe",
              name: "Steven Universe",
              description: {
                localizations: {
                  "store_product-steven-universe-description":
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
                  sku: "steven-universe_gleamium",
                  name: "Steven Universe gleamium",
                  description: {
                    localizations: {
                      "store_product-steven-universe-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "steven-universe_character_currency",
                  name: "Steven Universe character_currency",
                  description: {
                    localizations: {
                      "store_product-steven-universe-description":
                        "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "steven-universe_character-unlock-ticket-currency",
                  name: "Steven Universe character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-steven-universe-description":
                        "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
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
                          localizations: {
                            "store_product-steven-universe-description":
                              "With his unbreakable shields, Steven loves protecting his allies and helping them get around in fun ways. And don’t forget about Watermelon Steven!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-steven-universe-tagline": "Half-human, half-Gem, all hero." } } },
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
            slug: "tom-and-jerry",
            name: "Tom and Jerry",
            description: {
              localizations: {
                "store_product-tom-and-jerry-description":
                  "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "tom-and-jerry",
              name: "Tom and Jerry",
              description: {
                localizations: {
                  "store_product-tom-and-jerry-description":
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
                  sku: "tom-and-jerry_gleamium",
                  name: "Tom and Jerry gleamium",
                  description: {
                    localizations: {
                      "store_product-tom-and-jerry-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "tom-and-jerry_character_currency",
                  name: "Tom and Jerry character_currency",
                  description: {
                    localizations: {
                      "store_product-tom-and-jerry-description":
                        "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "tom-and-jerry_character-unlock-ticket-currency",
                  name: "Tom and Jerry character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-tom-and-jerry-description":
                        "Tom will go to any lengths to try and get his mousey nemesis. Learning to use that to your advantage will let you surprise your opponents with all sorts of unexpected attacks!",
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
                          localizations: {
                            "store_product-tom-and-jerry-description":
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
                            "store_product-tom-and-jerry-tagline":
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
            slug: "lebron-james",
            name: "LeBron James",
            description: {
              localizations: {
                "store_product-lebron-james-description":
                  "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "lebron-james",
              name: "LeBron James",
              description: {
                localizations: {
                  "store_product-lebron-james-description":
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
                  sku: "lebron-james_gleamium",
                  name: "LeBron James gleamium",
                  description: {
                    localizations: {
                      "store_product-lebron-james-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "lebron-james_character_currency",
                  name: "LeBron James character_currency",
                  description: {
                    localizations: {
                      "store_product-lebron-james-description":
                        "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "lebron-james_character-unlock-ticket-currency",
                  name: "LeBron James character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-lebron-james-description":
                        "A fast-moving bruiser with the ability to control the battlefield from afar, LeBron has left the Serververse and entered the Multiverse! As the leader of the Tune Squad, he’s also got the power to amp up his teammates with his weapon of choice: His basketball, duh.",
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
                          localizations: {
                            "store_product-lebron-james-description":
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
                        text: { localizations: { "store_product-lebron-james-tagline": "Champion. Icon. Teammate. Father. Philanthropist." } },
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
            slug: "the-iron-giant",
            name: "The Iron Giant",
            description: {
              localizations: {
                "store_product-the-iron-giant-description":
                  "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "the-iron-giant",
              name: "The Iron Giant",
              description: {
                localizations: {
                  "store_product-the-iron-giant-description":
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
                  sku: "the-iron-giant_gleamium",
                  name: "The Iron Giant gleamium",
                  description: {
                    localizations: {
                      "store_product-the-iron-giant-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "the-iron-giant_character_currency",
                  name: "The Iron Giant character_currency",
                  description: {
                    localizations: {
                      "store_product-the-iron-giant-description":
                        "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "the-iron-giant_character-unlock-ticket-currency",
                  name: "The Iron Giant character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-the-iron-giant-description":
                        "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
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
                          localizations: {
                            "store_product-the-iron-giant-description":
                              "With his massive size and mighty jetboots, the Iron Giant is dedicated to protecting his friends and fighting evil. If you hurt the people he cares about… watch out!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-the-iron-giant-tagline": "Robotic hero from beyond the stars." } } },
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
            slug: "superman",
            name: "Superman",
            description: {
              localizations: {
                "store_product-superman-description":
                  "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "superman",
              name: "Superman",
              description: {
                localizations: {
                  "store_product-superman-description":
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
                  sku: "superman_gleamium",
                  name: "Superman gleamium",
                  description: {
                    localizations: {
                      "store_product-superman-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "superman_character_currency",
                  name: "Superman character_currency",
                  description: {
                    localizations: {
                      "store_product-superman-description":
                        "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "superman_character-unlock-ticket-currency",
                  name: "Superman character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-superman-description":
                        "Superman’s Kryptonian physiology makes him one of the toughest fighters in the Multiverse. He can soar through the air, absorb and deal damage in huge amounts, and even freeze enemies in their tracks!",
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
                          localizations: {
                            "store_product-superman-description":
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
                            "store_product-superman-tagline": "Founding member of the Justice League, and one of Earth’s mightiest heroes.",
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
            slug: "reindog",
            name: "Reindog",
            description: {
              localizations: {
                "store_product-reindog-description":
                  "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "reindog",
              name: "Reindog",
              description: {
                localizations: {
                  "store_product-reindog-description":
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
                  sku: "reindog_gleamium",
                  name: "Reindog gleamium",
                  description: {
                    localizations: {
                      "store_product-reindog-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "reindog_character_currency",
                  name: "Reindog character_currency",
                  description: {
                    localizations: {
                      "store_product-reindog-description":
                        "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "reindog_character-unlock-ticket-currency",
                  name: "Reindog character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-reindog-description":
                        "Don’t be fooled by the fluffy face! Reindog’s powerful gem grants him magical abilities to both fling around dangerous projectiles and whisk his allies out of danger!",
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
                          localizations: {
                            "store_product-reindog-description":
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
                            "store_product-reindog-tagline": "Fluffy Guardian of Zanifeer’s royal family and 6th wearer of the gem of power!",
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
            slug: "harley-quinn",
            name: "Harley Quinn",
            description: {
              localizations: {
                "store_product-harley-quinn-description":
                  "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "harley-quinn",
              name: "Harley Quinn",
              description: {
                localizations: {
                  "store_product-harley-quinn-description":
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
                  sku: "harley-quinn_gleamium",
                  name: "Harley Quinn gleamium",
                  description: {
                    localizations: {
                      "store_product-harley-quinn-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "harley-quinn_character_currency",
                  name: "Harley Quinn character_currency",
                  description: {
                    localizations: {
                      "store_product-harley-quinn-description":
                        "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "harley-quinn_character-unlock-ticket-currency",
                  name: "Harley Quinn character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-harley-quinn-description":
                        "Fast-moving mistress of chaos with an arsenal of punishing combos. She’s come to the Multiverse armed with explosive goodies that are as deadly and unpredictable as she is.",
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
                          localizations: {
                            "store_product-harley-quinn-description":
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
                          localizations: { "store_product-harley-quinn-tagline": "She’s tried being a good guy, but being bad is too much fun." },
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
            slug: "wonder-woman",
            name: "Wonder Woman",
            description: {
              localizations: {
                "store_product-wonder-woman-description":
                  "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "wonder-woman",
              name: "Wonder Woman",
              description: {
                localizations: {
                  "store_product-wonder-woman-description":
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
                  sku: "wonder-woman_gleamium",
                  name: "Wonder Woman gleamium",
                  description: {
                    localizations: {
                      "store_product-wonder-woman-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "wonder-woman_character_currency",
                  name: "Wonder Woman character_currency",
                  description: {
                    localizations: {
                      "store_product-wonder-woman-description":
                        "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "wonder-woman_character-unlock-ticket-currency",
                  name: "Wonder Woman character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-wonder-woman-description":
                        "Wonder Woman can absorb the toughest blows anyone tries to throw at her. But with her sword at her side and her lasso to pull foes in, she dishes it out just as well as she takes it!",
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
                          localizations: {
                            "store_product-wonder-woman-description":
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
                            "store_product-wonder-woman-tagline": "Amazon Princess. Daughter of Zeus. Founding member of the Justice League.",
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
            slug: "taz",
            name: "Taz",
            description: {
              localizations: {
                "store_product-taz-description":
                  "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "taz",
              name: "Taz",
              description: {
                localizations: {
                  "store_product-taz-description":
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
                  sku: "taz_gleamium",
                  name: "Taz gleamium",
                  description: {
                    localizations: {
                      "store_product-taz-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "taz_character_currency",
                  name: "Taz character_currency",
                  description: {
                    localizations: {
                      "store_product-taz-description":
                        "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "taz_character-unlock-ticket-currency",
                  name: "Taz character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-taz-description":
                        "A chaotic tornado with a bottomless pit for a stomach, Taz is one dangerous customer. He hits hard, bites harder, and isn’t afraid to try and eat whoever gets in his way.",
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
                          localizations: {
                            "store_product-taz-description":
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
                        text: { localizations: { "store_product-taz-tagline": "(Don’t worry. We don’t know what he’s saying either.)" } },
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
            slug: "batman",
            name: "Batman",
            description: {
              localizations: {
                "store_product-batman-description":
                  "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "batman",
              name: "Batman",
              description: {
                localizations: {
                  "store_product-batman-description":
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
                  sku: "batman_gleamium",
                  name: "Batman gleamium",
                  description: {
                    localizations: {
                      "store_product-batman-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "batman_character_currency",
                  name: "Batman character_currency",
                  description: {
                    localizations: {
                      "store_product-batman-description":
                        "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "batman_character-unlock-ticket-currency",
                  name: "Batman character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-batman-description":
                        "Able to blend into the shadows before jumping out with a huge arsenal of gadgets, master the content of Batman’s utility belt to adapt to any situation.",
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
                          localizations: {
                            "store_product-batman-description":
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
                        text: { localizations: { "store_product-batman-tagline": "The World’s Greatest Detective. He is the night. He is Batman." } },
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
            slug: "arya-stark",
            name: "Arya Stark",
            description: {
              localizations: {
                "store_product-arya-stark-description":
                  "A highly mobile master of Water Dancing-based combos and deadly assassin of the highest order. Steal your enemy’s face to keep the rest of the battlefield on their toes.",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "arya-stark",
              name: "Arya Stark",
              description: {
                localizations: {
                  "store_product-arya-stark-description":
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
                  sku: "arya-stark_gleamium",
                  name: "Arya Stark gleamium",
                  description: {
                    localizations: {
                      "store_product-arya-stark-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "arya-stark_character_currency",
                  name: "Arya Stark character_currency",
                  description: {
                    localizations: {
                      "store_product-arya-stark-description":
                        "A highly mobile master of Water Dancing-based combos and deadly assassin of the highest order. Steal your enemy’s face to keep the rest of the battlefield on their toes.",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "arya-stark_character-unlock-ticket-currency",
                  name: "Arya Stark character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-arya-stark-description":
                        "A highly mobile master of Water Dancing-based combos and deadly assassin of the highest order. Steal your enemy’s face to keep the rest of the battlefield on their toes.",
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
                          localizations: {
                            "store_product-arya-stark-description":
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
                            "store_product-arya-stark-tagline": "She rejected being a lady. What she became was something far deadlier.",
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
            slug: "marvin-the-martian",
            name: "Marvin the Martian",
            description: {
              localizations: {
                "store_product-marvin-the-martian-description":
                  "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "marvin-the-martian",
              name: "Marvin the Martian",
              description: {
                localizations: {
                  "store_product-marvin-the-martian-description":
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
                  sku: "marvin-the-martian_gleamium",
                  name: "Marvin the Martian gleamium",
                  description: {
                    localizations: {
                      "store_product-marvin-the-martian-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "marvin-the-martian_character_currency",
                  name: "Marvin the Martian character_currency",
                  description: {
                    localizations: {
                      "store_product-marvin-the-martian-description":
                        "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "marvin-the-martian_character-unlock-ticket-currency",
                  name: "Marvin the Martian character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-marvin-the-martian-description":
                        "Armed with the latest in Ray Gun technology, Marvin is ready to zip around the battlefield and conquer the Multiverse… in the name of Mars!",
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
                          localizations: {
                            "store_product-marvin-the-martian-description":
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
                        text: { localizations: { "store_product-marvin-the-martian-tagline": "Make way for an earth-shattering kaboom!" } },
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
            slug: "gizmo",
            name: "Gizmo",
            description: {
              localizations: {
                "store_product-gizmo-description":
                  "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "gizmo",
              name: "Gizmo",
              description: {
                localizations: {
                  "store_product-gizmo-description":
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
                  sku: "gizmo_gleamium",
                  name: "Gizmo gleamium",
                  description: {
                    localizations: {
                      "store_product-gizmo-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "gizmo_character_currency",
                  name: "Gizmo character_currency",
                  description: {
                    localizations: {
                      "store_product-gizmo-description":
                        "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "gizmo_character-unlock-ticket-currency",
                  name: "Gizmo character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-gizmo-description":
                        "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
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
                          localizations: {
                            "store_product-gizmo-description":
                              "Gizmo loves sharing his toys and helping his friends on the battlefield. He especially loves finding ways to mess up the other team’s plans!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-gizmo-tagline": "Heroic Mogwai Warrior. Adorableness incarnate." } } },
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
            slug: "velma",
            name: "Velma",
            description: {
              localizations: {
                "store_product-velma-description":
                  "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
              },
            },
            data: null,
            type: "store",
            embedded_object_type: "store_product",
            embedded_object: {
              slug: "velma",
              name: "Velma",
              description: {
                localizations: {
                  "store_product-velma-description":
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
                  sku: "velma_gleamium",
                  name: "Velma gleamium",
                  description: {
                    localizations: {
                      "store_product-velma-description":
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
                  enabled: false,
                  is_available_for_purchase: false,
                  visual_data: [],
                  preferred: false,
                },
                {
                  sku: "velma_character_currency",
                  name: "Velma character_currency",
                  description: {
                    localizations: {
                      "store_product-velma-description":
                        "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
                    },
                  },
                  data: null,
                  type: "virtual",
                  price_type: "virtual",
                  price_type_options: {
                    currency_inventory_item: {
                      name: "Character Currency",
                      slug: "character_currency",
                      type_class: "currency",
                      data: {
                        AssetPath: "/Game/Panda_Main/Currencies/Currency_CharacterCurrency.Currency_CharacterCurrency",
                        RewardThumbnail: "/Game/Panda_Main/UI/Assets/Icons/currencyicons_2024/t_ui_icon_fightercurrency.t_ui_icon_fightercurrency",
                      },
                      description: "",
                      tags: ["currency"],
                      id: "663288a2358a2a62107ca8ee",
                    },
                    quantity: 3000,
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
                  sku: "velma_character-unlock-ticket-currency",
                  name: "Velma character-unlock-ticket-currency",
                  description: {
                    localizations: {
                      "store_product-velma-description":
                        "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
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
                          localizations: {
                            "store_product-velma-description":
                              "With the clue-hunting skills at her disposal, Velma can power up and help her friends. Find evidence around the battlefield to solve mysteries and become even stronger!",
                          },
                        },
                      },
                      offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
                    },
                    {
                      name: "Tagline",
                      type: "text",
                      type_options: { text: { localizations: { "store_product-velma-tagline": "Jinkies! We’ve got a mystery to solve!" } } },
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
                  ingame_path: "/Script/Engine.Texture2D'/Game/Panda_Main/UI/Assets/Icons/ui_icons_fighters.ui_icons_fighters'",
                },
                offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
              },
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
                  filename: "backgroundart_store_fighterpage.png",
                  md5: "FMvomguSbnOXFBa9h31Vrw==",
                  file_size: 6293482,
                  mime_type: "image/png",
                  content_key: "multiversus/backgroundart_store_fighterpage-14cbe89a0b926e73971416bd877d55af.png",
                  url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/backgroundart_store_fighterpage-14cbe89a0b926e73971416bd877d55af.png",
                  id: "65aa326643edfa8b063ca713",
                },
              },
            },
            offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
          },
        ],
      },
    ],
  }