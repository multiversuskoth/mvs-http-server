export const currency_variant_static_data = {
  slug: "currency-layout",
  layout_type_slug: "dokken-layout-type",
  name: "Currency",
  description: "Currency Layout",
  data: null,
  variant_slug: "currency-variant",
  weight: 1,
  enabled: true,
  areas: [
    {
      slug: "special-store",
      template_slug: "special-store",
      name: { localizations: { "layout_area-special-store-name": "Specials" } },
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
      slug: "currency-store",
      template_slug: "currency-store",
      name: { localizations: { "layout_area-currency-store-name": "Currency" } },
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
                filename: "currency_area_background.png",
                md5: "vQBTEvhZjMgxeBX4Y395BA==",
                file_size: 4968,
                mime_type: "image/png",
                content_key:
                  "multiversus/currency_area_background-bd005312f8598cc8317815f8637f7904.png",
                url: "https://d268z57suwau8c.cloudfront.net/dokken/production/multiversus/currency_area_background-bd005312f8598cc8317815f8637f7904.png",
                id: "65a7674688e60d96cb59d39a",
              },
            },
          },
          offset: { x: { _hydra_double: 0 }, y: { _hydra_double: 0 } },
        },
      ],
    },
  ],
};
