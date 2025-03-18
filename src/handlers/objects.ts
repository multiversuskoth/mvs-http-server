import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleObjects_preferences_unique_id_id1(req: Request<{}, {}, {}, {}>, res: Response) {
  res.send({
    updated_at: { _hydra_unix_date: 1724119417 },
    owner_id: "63cef97ced0619f458cfac8f",
    unique_key: "63cef97ced0619f458cfac8f",
    object_type_slug: "preferences",
    data: {
      Characters: {
        CharacterPreferences: {
          character_C017: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/C017/DataAssets/Taunt_C017_Default.Taunt_C017_Default", Slug: "taunt_irongiant_default" },
            ],
          },
          character_C018: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/C018/DataAssets/Taunts/Taunt_C018_Default.Taunt_C018_Default", Slug: "taunt_c018_default" },
            ],
          },
          character_C020: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/C020/DataAssets/Taunts/Taunt_C020_Default.Taunt_C020_Default", Slug: "taunt_c020_taunt_0" },
            ],
          },
          character_C021: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/C021/DataAssets/Taunt_C021_Default.Taunt_C021_Default", Slug: "taunt_c021_default" },
            ],
          },
          character_C023A: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/C023A/DataAssets/Taunts/Taunt_C023A_Default.Taunt_C023A_Default",
                Slug: "taunt_c023A_default",
              },
            ],
          },
          character_C023B: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/C023B/DataAssets/Taunts/Taunt_C023B_Default.Taunt_C023B_Default",
                Slug: "taunt_c023b_default",
              },
            ],
          },
          character_arya: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/Arya/DataAssets/Taunts/Taunt_Arya_Default.Taunt_Arya_Default", Slug: "taunt_arya_default" },
            ],
          },
          character_batman: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/BatmanV2/DataAssets/Taunts/Taunt_Batman_Default.Taunt_Batman_Default",
                Slug: "taunt_batman_default",
              },
            ],
          },
          character_bugs_bunny: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/BugsBunnyV2/DataAssets/Taunts/Taunt_BugsBunny_Default.Taunt_BugsBunny_Default",
                Slug: "taunt_bugs_default",
              },
            ],
          },
          character_c019: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/C019/DataAssets/Taunts/Taunt_C019_Default.Taunt_C019_Default", Slug: "taunt_c019_default" },
            ],
          },
          character_c16: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/c016/DataAssets/Taunts/Taunt_c016_Default.Taunt_C016_Default", Slug: "taunt_c016_default" },
            ],
          },
          character_creature: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/Creature/DataAssets/Taunts/Taunt_Creature_Default.Taunt_Creature_Default",
                Slug: "taunt_creature_default",
              },
            ],
          },
          character_finn: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/Finn/DataAssets/Taunts/Taunt_Finn_Default.Taunt_Finn_Default",
                Slug: "taunt_finn_baby_default",
              },
            ],
          },
          character_garnet: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/Garnet/CharData/Taunts/Taunt_Garnet_Default.Taunt_Garnet_Default",
                Slug: "taunt_garnet_default",
              },
            ],
          },
          character_harleyquinn: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/HarleyQuinn/DataAssets/Taunts/Taunt_Harley_Default.Taunt_Harley_Default",
                Slug: "taunt_harley_default",
              },
            ],
          },
          character_jake: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/Jake/DataAssets/Taunts/Taunt_Jake_Default.Taunt_Jake_Default", Slug: "taunt_jake_default" },
            ],
          },
          character_shaggy: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/Shaggy/DataAssets/Taunts/Taunt_Shaggy_Default.Taunt_Shaggy_Default",
                Slug: "taunt_shaggy_default",
              },
            ],
          },
          character_steven: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/Steven/DataAssets/Taunts/Taunt_Steven_Default.Taunt_Steven_Default",
                Slug: "taunt_steven_default",
              },
            ],
          },
          character_superman: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/Superman/DataAssets/Taunts/Taunt_Superman_CrackNeck.Taunt_Superman_CrackNeck",
                Slug: "taunt_superman_crack_neck",
              },
            ],
          },
          character_taz: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/C015/DataAssets/Taunts/Taunt_C015_Default.Taunt_C015_Default", Slug: "Taunt_Taz_Default" },
            ],
          },
          character_tom_and_jerry: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/TomAndJerry/DataAssets/Taunts/Taunt_TomAndJerry_Default.Taunt_TomAndJerry_Default",
                Slug: "taunt_tomandjerry_default",
              },
            ],
          },
          character_velma: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/Velma/DataAssets/Taunts/Taunt_Velma_Default.Taunt_Velma_Default",
                Slug: "taunt_velma_default",
              },
            ],
          },
          character_wonder_woman: {
            SkinData: { AssetPath: "", Slug: "" },
            TauntDatas: [
              {
                AssetPath: "/Game/Panda_Main/Characters/WonderWomanV2/DataAssets/Taunts/Taunt_WonderWoman_HandsOnHips.Taunt_WonderWoman_HandsOnHips",
                Slug: "taunt_wonder_woman_hands_on_hips",
              },
            ],
          },
          character_C028: {
            TauntDatas: [
              { AssetPath: "/Game/Panda_Main/Characters/C028/DataAssets/Taunts/Taunt_C028_Default.Taunt_C028_Default", Slug: "Taunt_C028_Default" },
            ],
          },
        },
      },
      ControlPreferences: { ControllerPreferences: { ControlScheme: "Recommended" } },
      GlobalEquippables: {
        AnnouncerPack: {
          AssetPath: "/Game/Panda_Main/Blueprints/Rewards/AnnouncerPacks/DefaultAnnouncerPack.DefaultAnnouncerPack",
          Slug: "announcer_pack_default",
        },
        Banner: { AssetPath: "/Game/Panda_Main/PreMatch/Banners/Default/Banner_NewDefault.Banner_NewDefault", Slug: "banner_default" },
        RingOutVfx: { AssetPath: "/Game/Panda_Main/Blueprints/Rewards/RingOutVfx/ROV_Default.ROV_Default", Slug: "ring_out_vfx_default" },
        StatTracker: {
          AssetPath: "/Game/Panda_Main/Blueprints/Rewards/StatTrackingBundle/StatTrackingBundle_Default.StatTrackingBundle_Default",
          Slug: "stat_tracking_bundle_default",
        },
        StatTracker2: { AssetPath: "", Slug: "" },
        StatTracker3: { AssetPath: "", Slug: "" },
      },
      MapLevels: { MapLevelPreferences: {} },
      OnlinePreferences: { AutoPartyEnabled: true, CrossplayOption: "Enabled", DMCAModeEnabled: false },
      UIPreferences: { UIStyle: "Recommended" },
    },
    server_data: null,
    created_at: { _hydra_unix_date: 1674508742 },
    aggregates: {},
    calculations: {},
    server_owner_data: null,
    id: "63cef9c67bb9195e68282359",
    owner: {},
    expire_time: null,
    owner_model: "account",
  });
}
