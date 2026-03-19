export const MISSION_OBJECTIVES = {
  misobj_win: {
    slug: "misobj_win",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Win",
          Operator: "==",
          Value: true,
          SelectedValue: "Boolean",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_win",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec788",
  },
  misobj_deal_damage: {
    slug: "misobj_deal_damage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDamageDealt",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Stat:Game:Character:TotalDamageDealt",
          Operator: ">=",
          Value: 1,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_deal_damage",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec789",
  },
  misobj_ringout_any: {
    slug: "misobj_ringout_any",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalRingouts",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_ringout_any",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec78a",
  },
  misobj_constraint_is_pve: {
    slug: "misobj_constraint_is_pve",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Match:IsPvE",
          Operator: "==",
          Value: true,
          SelectedValue: "Boolean",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_constraint_is_pve",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec78b",
  },
  misobj_constraint_is_pvp: {
    slug: "misobj_constraint_is_pvp",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Match:IsPvP",
          Operator: "==",
          Value: true,
          SelectedValue: "Boolean",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_constraint_is_pvp",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec78c",
  },
  misobj_constraint_is_official_game: {
    slug: "misobj_constraint_is_official_game",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Match:IsOfficialGame",
          Operator: "==",
          Value: true,
          SelectedValue: "Boolean",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_constraint_is_official_game",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec78d",
  },
  misobj_acme_sky_drones_destroyed: {
    slug: "misobj_acme_sky_drones_destroyed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:AcmeSkyDronesDestroyed",
          Operator: ">=",
          Value: 4,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_acme_sky_drones_destroyed",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec78e",
  },
  misobj_acme_sky_drones_destroyed_easy: {
    slug: "misobj_acme_sky_drones_destroyed_easy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:AcmeSkyDronesDestroyed",
          Operator: ">=",
          Value: 1,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_acme_sky_drones_destroyed_easy",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec78f",
  },
  misobj_dodge_attacks_medium: {
    slug: "misobj_dodge_attacks_medium",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttacksDodged",
          Operator: ">=",
          Value: 5,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_dodge_attacks_medium",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec790",
  },
  misobj_dodge_attacks_easy: {
    slug: "misobj_dodge_attacks_easy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttacksDodged",
          Operator: ">=",
          Value: 3,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_dodge_attacks_easy",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec791",
  },
  misobj_dodge_attacks_once: {
    slug: "misobj_dodge_attacks_once",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttacksDodged",
          Operator: ">=",
          Value: 1,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_dodge_attacks_once",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec792",
  },
  misobj_safety_spotlight_attacks_dodged_easy: {
    slug: "misobj_safety_spotlight_attacks_dodged_easy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Hazards:SafetySpotlightAttacksDodged",
          Operator: ">=",
          Value: 3,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_safety_spotlight_attacks_dodged_easy",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec793",
  },
  misobj_hit_dash_attack: {
    slug: "misobj_hit_dash_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDashAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_dash_attack",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec794",
  },
  misobj_hit_special_attack: {
    slug: "misobj_hit_special_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_special_attack",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec795",
  },
  misobj_hit_down_attack: {
    slug: "misobj_hit_down_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownNormalAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_down_attack",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec796",
  },
  misobj_hit_up_attack: {
    slug: "misobj_hit_up_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpNormalAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_up_attack",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec797",
  },
  misobj_enemy_frozen_once: {
    slug: "misobj_enemy_frozen_once",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Frozen",
          Operator: ">=",
          Value: 1,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_enemy_frozen_once",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "663c0f944b55072b1d7ec798",
  },
  misobj_armor_break: {
    slug: "misobj_armor_break",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalArmorBreaks",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_armor_break",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec799",
  },
  misobj_dodge: {
    slug: "misobj_dodge",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttacksDodged",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_dodge",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec79a",
  },
  misobj_hit_side_attack: {
    slug: "misobj_hit_side_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideNormalAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_side_attack",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec79b",
  },
  misobj_parry: {
    slug: "misobj_parry",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttacksParried",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_parry",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec79c",
  },
  misobj_enemy_frozen_easy: {
    slug: "misobj_enemy_frozen_easy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Frozen",
          Operator: ">=",
          Value: 1,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_enemy_frozen_easy",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "663c0f944b55072b1d7ec79d",
  },
  misobj_match_map_play_batcave: {
    slug: "misobj_match_map_play_batcave",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Map:Play",
          Operator: "==",
          Value: "TS:Fixed:Maps:M001",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Maps:M001",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_map_play_batcave",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec79e",
  },
  misobj_match_play_as_banana_guard: {
    slug: "misobj_match_play_as_banana_guard",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          Value: "character_BananaGuard",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_play_as_banana_guard",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1717012650,
    },
    id: "663c0f944b55072b1d7ec79f",
  },
  misobj_match_play_as_character_velma: {
    slug: "misobj_match_play_as_character_velma",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          Value: "character_velma",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_play_as_character_velma",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a0",
  },
  misobj_match_character_playas_shaggy: {
    slug: "misobj_match_character_playas_shaggy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          Value: "character_shaggy",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_character_playas_shaggy",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a1",
  },
  misobj_match_play_ffa: {
    slug: "misobj_match_play_ffa",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Mode:Type:Play",
          Operator: "==",
          Value: "ffa",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_play_ffa",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a2",
  },
  misobj_match_play_2v2: {
    slug: "misobj_match_play_2v2",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Mode:Type:Play",
          Operator: "==",
          Value: "2v2",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_play_2v2",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a3",
  },
  misobj_match_play_1v1: {
    slug: "misobj_match_play_1v1",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Mode:Type:Play",
          Operator: "==",
          Value: "1v1",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_play_1v1",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a4",
  },
  misobj_safety_spotlight_hits_outside_spotlight_easy: {
    slug: "misobj_safety_spotlight_hits_outside_spotlight_easy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Hazards:SafetySpotlightHitsOutsideSpotlight",
          Operator: ">=",
          Value: 3,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_safety_spotlight_hits_outside_spotlight_easy",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a5",
  },
  misobj_avoid_taking_safety_spotlight_hits_once: {
    slug: "misobj_avoid_taking_safety_spotlight_hits_once",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Hazards:SafetySpotlightAttacksTaken",
          Operator: "<=",
          Value: 0,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_avoid_taking_safety_spotlight_hits_once",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a6",
  },
  misobj_ro_less_damage: {
    slug: "misobj_ro_less_damage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalRingoutsWithLessDamage",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_ro_less_damage",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a7",
  },
  misobj_atk_damage_dealt: {
    slug: "misobj_atk_damage_dealt",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttackDamageDealt",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Stat:Game:Character:TotalAttackDamageDealt",
          Operator: ">=",
          Value: 1,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_atk_damage_dealt",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a8",
  },
  misobj_ro_more_damage: {
    slug: "misobj_ro_more_damage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalRingoutsWithMoreDamage",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_ro_more_damage",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7a9",
  },
  misobj_spec_damage_dealt: {
    slug: "misobj_spec_damage_dealt",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSpecialDamageDealt",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Stat:Game:Character:TotalSpecialDamageDealt",
          Operator: ">=",
          Value: 1,
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_spec_damage_dealt",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7aa",
  },
  misobj_hit_neutral_attack: {
    slug: "misobj_hit_neutral_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralNormalAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_neutral_attack",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ab",
  },
  misobj_hit_neutral_special: {
    slug: "misobj_hit_neutral_special",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_neutral_special",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ac",
  },
  misobj_hit_up_special: {
    slug: "misobj_hit_up_special",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_up_special",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ad",
  },
  misobj_hit_side_special: {
    slug: "misobj_hit_side_special",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_side_special",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ae",
  },
  misobj_hit_down_special: {
    slug: "misobj_hit_down_special",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_down_special",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7af",
  },
  misobj_hit_normal_attack: {
    slug: "misobj_hit_normal_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNormalAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_hit_normal_attack",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b0",
  },
  misobj_fully_charged_attacks_hit: {
    slug: "misobj_fully_charged_attacks_hit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalFullyChargedAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_fully_charged_attacks_hit",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b1",
  },
  misobj_charge_attacks_hit: {
    slug: "misobj_charge_attacks_hit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalChargeAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_charge_attacks_hit",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b2",
  },
  misobj_taunt: {
    slug: "misobj_taunt",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalTauntsUsed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_taunt",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b3",
  },
  misobj_constraint_has_battlepass_premium: {
    slug: "misobj_constraint_has_battlepass_premium",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Battlepass:HasPremium",
          Operator: "==",
          Value: true,
          SelectedValue: "Boolean",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_constraint_has_battlepass_premium",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b4",
  },
  misobj_match_play_as_character_batman: {
    slug: "misobj_match_play_as_character_batman",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          Value: "character_batman",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_match_play_as_character_batman",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b5",
  },
  misobj_matchplaymap_m007: {
    slug: "misobj_matchplaymap_m007",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Map:Play",
          Operator: "==",
          Value: "TS:Fixed:Maps:M007",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Maps:M007",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_matchplaymap_m007",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715907010,
    },
    id: "663c0f944b55072b1d7ec7b6",
  },
  misobj_use_c002_s02: {
    slug: "misobj_use_c002_s02",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs:Skin",
          Operator: "==",
          Value: "skin_c002_s02",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_use_c002_s02",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b7",
  },
  misobj_use_c002_s03: {
    slug: "misobj_use_c002_s03",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs:Skin",
          Operator: "==",
          Value: "skin_c002_s03",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_use_c002_s03",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b8",
  },
  misobj_use_c001_s02: {
    slug: "misobj_use_c001_s02",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs:Skin",
          Operator: "==",
          Value: "skin_c001_s02",
          SelectedValue: "String",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_use_c001_s02",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7b9",
  },
  misobj_shooting_gallery_targets_destroyed: {
    slug: "misobj_shooting_gallery_targets_destroyed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GalleryTargetsDestroyed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_shooting_gallery_targets_destroyed",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ba",
  },
  misobj_shooting_gallery_balloons_destroyed: {
    slug: "misobj_shooting_gallery_balloons_destroyed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GalleryBalloonsDestroyed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_shooting_gallery_balloons_destroyed",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7bb",
  },
  misobj_treasure_collected: {
    slug: "misobj_treasure_collected",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:TreasureCollected",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_treasure_collected",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7bc",
  },
  misobj_targets_destroyed: {
    slug: "misobj_targets_destroyed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:TargetsDestroyed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      AssetBundleData: {
        Bundles: [],
      },
      Slug: "misobj_targets_destroyed",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7bd",
  },
  misobj_bruiser_tag: {
    slug: "misobj_bruiser_tag",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Class:Bruiser",
          Value: "TS:Fixed:Class:Bruiser",
        },
      ],
      Slug: "misobj_bruiser_tag",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7be",
  },
  misobj_adventure_time_tag: {
    slug: "misobj_adventure_time_tag",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:AdventureTime",
          Value: "TS:Fixed:Universe:AdventureTime",
        },
      ],
      Slug: "misobj_adventure_time_tag",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7bf",
  },
  misobj_dc_tag: {
    slug: "misobj_dc_tag",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:DC",
          Value: "TS:Fixed:Universe:DC",
        },
      ],
      Slug: "misobj_dc_tag",
      bIsEnabled: true,
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c0",
  },
  misobj_crystal_health: {
    slug: "misobj_crystal_health",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:DefenseHealth",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_crystal_health",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c1",
  },
  misobj_save_ally_from_bubble: {
    slug: "misobj_save_ally_from_bubble",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:PopAllyBubble",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_save_ally_from_bubble",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c2",
  },
  misobj_play_coop: {
    slug: "misobj_play_coop",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:PlayCoOp",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_play_coop",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c3",
  },
  misobj_rift_deal_damage: {
    slug: "misobj_rift_deal_damage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDamageDealt",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_deal_damage",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c4",
  },
  misobj_rift_deal_attack_damage: {
    slug: "misobj_rift_deal_attack_damage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttackDamageDealt",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_deal_attack_damage",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c5",
  },
  misobj_rift_deal_special_damage: {
    slug: "misobj_rift_deal_special_damage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSpecialDamageDealt",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_deal_special_damage",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c6",
  },
  misobj_rift_up_ringouts: {
    slug: "misobj_rift_up_ringouts",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpRingouts",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_rift_up_ringouts",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c7",
  },
  misobj_rift_total_damage_taken_medium: {
    slug: "misobj_rift_total_damage_taken_medium",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDamageTaken",
          Operator: "<=",
          SelectedValue: "Integer",
          Value: 100,
        },
      ],
      Slug: "misobj_rift_total_damage_taken_medium",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c8",
  },
  misobj_rift_total_damage_taken_hard: {
    slug: "misobj_rift_total_damage_taken_hard",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDamageTaken",
          Operator: "<=",
          SelectedValue: "Integer",
          Value: 50,
        },
      ],
      Slug: "misobj_rift_total_damage_taken_hard",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7c9",
  },
  misobj_rift_total_damage_taken_easy: {
    slug: "misobj_rift_total_damage_taken_easy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDamageTaken",
          Operator: "<=",
          SelectedValue: "Integer",
          Value: 200,
        },
      ],
      Slug: "misobj_rift_total_damage_taken_easy",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ca",
  },
  misobj_rift_projectile_ringouts: {
    slug: "misobj_rift_projectile_ringouts",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectileRingouts",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_rift_projectile_ringouts",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7cb",
  },
  misobj_rift_no_ringouts_received: {
    slug: "misobj_rift_no_ringouts_received",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalRingoutsReceived",
          Operator: "==",
          SelectedValue: "Integer",
          Value: 0,
        },
      ],
      Slug: "misobj_rift_no_ringouts_received",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7cc",
  },
  misobj_rift_down_ringouts: {
    slug: "misobj_rift_down_ringouts",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownRingouts",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_down_ringouts",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7cd",
  },
  misobj_rift_airtime: {
    slug: "misobj_rift_airtime",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAirTime",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_airtime",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ce",
  },
  misobj_skintag_dynamic_villainous: {
    slug: "misobj_skintag_dynamic_villainous",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Season:Villainous",
          Value: "TS:Dynamic:Season:Villainous",
        },
      ],
      Slug: "misobj_skintag_dynamic_villainous",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7cf",
  },
  misobj_skin_tag_universe_looney_tunes: {
    slug: "misobj_skin_tag_universe_looney_tunes",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:LooneyTunes",
          Value: "TS:Fixed:Universe:LooneyTunes",
        },
      ],
      Slug: "misobj_skin_tag_universe_looney_tunes",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d0",
  },
  misobj_skin_tag_dynamic_non_human: {
    slug: "misobj_skin_tag_dynamic_non_human",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Non-Human",
          Value: "TS:Dynamic:Non-Human",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_non_human",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d1",
  },
  misobj_skin_tag_universe_adventure_time: {
    slug: "misobj_skin_tag_universe_adventure_time",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:AdventureTime",
          Value: "TS:Fixed:Universe:AdventureTime",
        },
      ],
      Slug: "misobj_skin_tag_universe_adventure_time",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d2",
  },
  misobj_skin_tag_universe_scooby_doo: {
    slug: "misobj_skin_tag_universe_scooby_doo",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:ScoobyDoo",
          Value: "TS:Fixed:Universe:ScoobyDoo",
        },
      ],
      Slug: "misobj_skin_tag_universe_scooby_doo",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d3",
  },
  misobj_skin_tag_universe_gremlins: {
    slug: "misobj_skin_tag_universe_gremlins",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:Gremlins",
          Value: "TS:Fixed:Universe:Gremlins",
        },
      ],
      Slug: "misobj_skin_tag_universe_gremlins",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d4",
  },
  misobj_skin_tag_dynamic_human: {
    slug: "misobj_skin_tag_dynamic_human",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Human",
          Value: "TS:Dynamic:Human",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_human",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d5",
  },
  misobj_collect_evidence: {
    slug: "misobj_collect_evidence",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:DefenseHealth:CollectEvidence",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_collect_evidence",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d6",
  },
  misobj_skin_tag_dynamic_detective: {
    slug: "misobj_skin_tag_dynamic_detective",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Detective",
          Value: "TS:Dynamic:Detective",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_detective",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d7",
  },
  misobj_skin_tag_dynamic_comic_dots: {
    slug: "misobj_skin_tag_dynamic_comic_dots",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:ComicDots",
          Value: "TS:Dynamic:ComicDots",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_comic_dots",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d8",
  },
  misobj_use_c034_s01: {
    slug: "misobj_use_c034_s01",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs:Skin",
          Operator: "==",
          SelectedValue: "String",
          Value: "skin_c034_s01",
        },
      ],
      Slug: "misobj_use_c034_s01",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7d9",
  },
  misobj_ghost_hit_self: {
    slug: "misobj_ghost_hit_self",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GhostHitSelf",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_ghost_hit_self",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7da",
  },
  misobj_ghost_hit_opponent: {
    slug: "misobj_ghost_hit_opponent",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GhostHitOpponent",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_ghost_hit_opponent",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7db",
  },
  misobj_skin_tag_universe_friday_13th: {
    slug: "misobj_skin_tag_universe_friday_13th",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:Fridaythe13th",
          Value: "TS:Fixed:Universe:Fridaythe13th",
        },
      ],
      Slug: "misobj_skin_tag_universe_friday_13th",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7dc",
  },
  misobj_skin_tag_dynamic_summer: {
    slug: "misobj_skin_tag_dynamic_summer",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:BeachReady",
          Value: "TS:Dynamic:BeachReady",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_summer",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7dd",
  },
  misobj_skin_tag_dynamic_shark_hats: {
    slug: "misobj_skin_tag_dynamic_shark_hats",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:SharkWeek",
          Value: "TS:Dynamic:SharkWeek",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_shark_hats",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7de",
  },
  misobj_skin_tag_dynamic_matrix: {
    slug: "misobj_skin_tag_dynamic_matrix",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:Matrix",
          Value: "TS:Fixed:Universe:Matrix",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_matrix",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7df",
  },
  misobj_skin_tag_dynamic_graphic_t: {
    slug: "misobj_skin_tag_dynamic_graphic_t",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:GraphicT",
          Value: "TS:Dynamic:GraphicT",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_graphic_t",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e0",
  },
  misobj_match_play_as_character_jason: {
    slug: "misobj_match_play_as_character_jason",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_Jason",
        },
      ],
      Slug: "misobj_match_play_as_character_jason",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e1",
  },
  misobj_rift_goblin_treasure_collected_rare: {
    slug: "misobj_rift_goblin_treasure_collected_rare",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GoblinTreasureCollected:Rare",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_goblin_treasure_collected_rare",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e2",
  },
  misobj_rift_goblin_treasure_collected: {
    slug: "misobj_rift_goblin_treasure_collected",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GoblinTreasureCollected",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_goblin_treasure_collected",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e3",
  },
  misobj_hit_up_ground_attack: {
    slug: "misobj_hit_up_ground_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpGroundNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hit_up_ground_attack",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e4",
  },
  misobj_hit_neutral_ground_attack: {
    slug: "misobj_hit_neutral_ground_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralGroundNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hit_neutral_ground_attack",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e5",
  },
  misobj_hit_down_ground_special: {
    slug: "misobj_hit_down_ground_special",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownGroundSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hit_down_ground_special",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e6",
  },
  misobj_hit_down_air_attack: {
    slug: "misobj_hit_down_air_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownAirNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hit_down_air_attack",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e7",
  },
  misobj_jump_rope_jumps: {
    slug: "misobj_jump_rope_jumps",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:JumpRopeJumps",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_jump_rope_jumps",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e8",
  },
  misobj_skin_tag_universe_tom_and_jerry: {
    slug: "misobj_skin_tag_universe_tom_and_jerry",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:TomandJerry",
          Value: "TS:Fixed:Universe:TomandJerry",
        },
      ],
      Slug: "misobj_skin_tag_universe_tom_and_jerry",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7e9",
  },
  misobj_skin_tag_universe_steven_universe: {
    slug: "misobj_skin_tag_universe_steven_universe",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:StevenUniverse",
          Value: "TS:Fixed:Universe:StevenUniverse",
        },
      ],
      Slug: "misobj_skin_tag_universe_steven_universe",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ea",
  },
  misobj_skin_tag_universe_iron_giant: {
    slug: "misobj_skin_tag_universe_iron_giant",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:IronGiant",
          Value: "TS:Fixed:Universe:IronGiant",
        },
      ],
      Slug: "misobj_skin_tag_universe_iron_giant",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7eb",
  },
  misobj_skin_tag_universe_game_of_thrones: {
    slug: "misobj_skin_tag_universe_game_of_thrones",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:GameOfThrones",
          Value: "TS:Fixed:Universe:GameOfThrones",
        },
      ],
      Slug: "misobj_skin_tag_universe_game_of_thrones",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ec",
  },
  misobj_skin_tag_dynamic_sports_attire: {
    slug: "misobj_skin_tag_dynamic_sports_attire",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:SportsAttire",
          Value: "TS:Dynamic:SportsAttire",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_sports_attire",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ed",
  },
  misobj_skin_tag_dynamic_beach_ready: {
    slug: "misobj_skin_tag_dynamic_beach_ready",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:BeachReady",
          Value: "TS:Dynamic:BeachReady",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_beach_ready",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ee",
  },
  misobj_rift_low_walk_time_hard: {
    slug: "misobj_rift_low_walk_time_hard",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalWalkTime",
          Operator: "<=",
          SelectedValue: "Integer",
          Value: 5,
        },
      ],
      Slug: "misobj_rift_low_walk_time_hard",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ef",
  },
  misobj_buff_applied_enemy_chicken: {
    slug: "misobj_buff_applied_enemy_chicken",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Chicken",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_buff_applied_enemy_chicken",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f0",
  },
  misobj_love_leash_ally: {
    slug: "misobj_love_leash_ally",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Reindog:LoveLeashAlly",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_love_leash_ally",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f1",
  },
  misobj_lebron_pass: {
    slug: "misobj_lebron_pass",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Lebron:Pass",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_lebron_pass",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f2",
  },
  misobj_lebron_defense: {
    slug: "misobj_lebron_defense",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Lebron:Defense",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_lebron_defense",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f3",
  },
  misobj_buy_bmo: {
    slug: "misobj_buy_bmo",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Finn:BuyBmo",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_buy_bmo",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f4",
  },
  misobj_finn_air_projectile_short: {
    slug: "misobj_finn_air_projectile_short",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Finn:AirPojectileDestroy",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_finn_air_projectile_short",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f5",
  },
  misobj_rifts_lazarus_pit_temp_health: {
    slug: "misobj_rifts_lazarus_pit_temp_health",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts:LazarusPit:TempHealth",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rifts_lazarus_pit_temp_health",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f6",
  },
  misobj_rifts_lazarus_pit_fell_in_once: {
    slug: "misobj_rifts_lazarus_pit_fell_in_once",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts:LazarusPit:FellIn",
          Operator: "==",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_rifts_lazarus_pit_fell_in_once",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f7",
  },
  misobj_rifts_lazarus_pit_buffed_ringouts: {
    slug: "misobj_rifts_lazarus_pit_buffed_ringouts",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts:LazarusPit:BuffedRingouts",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rifts_lazarus_pit_buffed_ringouts",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f8",
  },
  misobj_match_play_as_character_bugsbunny: {
    slug: "misobj_match_play_as_character_bugsbunny",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_bugsbunny",
        },
      ],
      Slug: "misobj_match_play_as_character_bugsbunny",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7f9",
  },
  misobj_wonderwoman_lasso_ally: {
    slug: "misobj_wonderwoman_lasso_ally",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:WonderWoman:AllyLasso",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_wonderwoman_lasso_ally",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7fa",
  },
  misobj_match_play_as_character_wonder_woman: {
    slug: "misobj_match_play_as_character_wonder_woman",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_wonder_woman",
        },
      ],
      Slug: "misobj_match_play_as_character_wonder_woman",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7fb",
  },
  misobj_match_play_as_character_tomandjerry: {
    slug: "misobj_match_play_as_character_tomandjerry",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_TomAndJerry",
        },
      ],
      Slug: "misobj_match_play_as_character_tomandjerry",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7fc",
  },
  misobj_match_play_as_character_c015: {
    slug: "misobj_match_play_as_character_c015",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C015",
        },
      ],
      Slug: "misobj_match_play_as_character_c015",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7fd",
  },
  misobj_match_play_as_character_c003_: {
    slug: "misobj_match_play_as_character_c003_",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C003_",
        },
      ],
      Slug: "misobj_match_play_as_character_c003_",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7fe",
  },
  misobj_match_play_as_character_c023b: {
    slug: "misobj_match_play_as_character_c023b",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C023B",
        },
      ],
      Slug: "misobj_match_play_as_character_c023b",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec7ff",
  },
  misobj_match_play_as_character_steven: {
    slug: "misobj_match_play_as_character_steven",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "Character_Steven",
        },
      ],
      Slug: "misobj_match_play_as_character_steven",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec800",
  },
  misobj_match_play_as_character_c020: {
    slug: "misobj_match_play_as_character_c020",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C020",
        },
      ],
      Slug: "misobj_match_play_as_character_c020",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec801",
  },
  misobj_match_play_as_character_creature: {
    slug: "misobj_match_play_as_character_creature",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_creature",
        },
      ],
      Slug: "misobj_match_play_as_character_creature",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec802",
  },
  misobj_match_play_as_character_c019: {
    slug: "misobj_match_play_as_character_c019",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C019",
        },
      ],
      Slug: "misobj_match_play_as_character_c019",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec803",
  },
  misobj_match_play_as_character_c018: {
    slug: "misobj_match_play_as_character_c018",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "Character_C018",
        },
      ],
      Slug: "misobj_match_play_as_character_c018",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec804",
  },
  misobj_match_play_as_character_c016: {
    slug: "misobj_match_play_as_character_c016",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C016",
        },
      ],
      Slug: "misobj_match_play_as_character_c016",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec805",
  },
  misobj_match_play_as_character_jake: {
    slug: "misobj_match_play_as_character_jake",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_jake",
        },
      ],
      Slug: "misobj_match_play_as_character_jake",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec806",
  },
  misobj_match_play_as_character_c017: {
    slug: "misobj_match_play_as_character_c017",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C017",
        },
      ],
      Slug: "misobj_match_play_as_character_c017",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec807",
  },
  misobj_match_play_as_character_c023a: {
    slug: "misobj_match_play_as_character_c023a",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C023A",
        },
      ],
      Slug: "misobj_match_play_as_character_c023a",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec808",
  },
  misobj_match_play_as_character_garnet: {
    slug: "misobj_match_play_as_character_garnet",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_garnet",
        },
      ],
      Slug: "misobj_match_play_as_character_garnet",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec809",
  },
  misobj_match_play_as_character_finn: {
    slug: "misobj_match_play_as_character_finn",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_Finn",
        },
      ],
      Slug: "misobj_match_play_as_character_finn",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec80a",
  },
  misobj_match_play_as_character_c021: {
    slug: "misobj_match_play_as_character_c021",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C021",
        },
      ],
      Slug: "misobj_match_play_as_character_c021",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec80b",
  },
  misobj_match_play_as_character_c006: {
    slug: "misobj_match_play_as_character_c006",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C006",
        },
      ],
      Slug: "misobj_match_play_as_character_c006",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec80c",
  },
  misobj_match_play_as_characterdata_c036: {
    slug: "misobj_match_play_as_characterdata_c036",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "CharacterData_C036",
        },
      ],
      Slug: "misobj_match_play_as_characterdata_c036",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec80d",
  },
  misobj_tanktag: {
    slug: "misobj_tanktag",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Class:Tank",
          Value: "TS:Fixed:Class:Tank",
        },
      ],
      Slug: "misobj_tanktag",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec80e",
  },
  misobj_skin_tag_dynamic_space_jam: {
    slug: "misobj_skin_tag_dynamic_space_jam",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:SpaceJam",
          Value: "TS:Fixed:Universe:SpaceJam",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_space_jam",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec80f",
  },
  misobj_skin_tag_dynamic_universe_rick_and_morty: {
    slug: "misobj_skin_tag_dynamic_universe_rick_and_morty",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:RickandMorty",
          Value: "TS:Fixed:Universe:RickandMorty",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_universe_rick_and_morty",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec810",
  },
  misobj_skin_tag_dynamic_universe_matrix: {
    slug: "misobj_skin_tag_dynamic_universe_matrix",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:Matrix",
          Value: "TS:Fixed:Universe:Matrix",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_universe_matrix",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec811",
  },
  misobj_skin_tag_universe_dc: {
    slug: "misobj_skin_tag_universe_dc",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:DC",
          Value: "TS:Fixed:Universe:DC",
        },
      ],
      Slug: "misobj_skin_tag_universe_dc",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec812",
  },
  misobj_skin_tag_dynamic_yellow_clothing: {
    slug: "misobj_skin_tag_dynamic_yellow_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:YellowClothing",
          Value: "TS:Dynamic:YellowClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_yellow_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec813",
  },
  misobj_skin_tag_dynamic_white_clothing: {
    slug: "misobj_skin_tag_dynamic_white_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:WhiteClothing",
          Value: "TS:Dynamic:WhiteClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_white_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec814",
  },
  misobj_skin_tag_dynamic_valentineon: {
    slug: "misobj_skin_tag_dynamic_valentineon",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:ValentiNeon",
          Value: "TS:Dynamic:ValentiNeon",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_valentineon",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec815",
  },
  misobj_skin_tag_dynamic_undead: {
    slug: "misobj_skin_tag_dynamic_undead",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Undead",
          Value: "TS:Dynamic:Undead",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_undead",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec816",
  },
  misobj_skin_tag_dynamic_tv_og: {
    slug: "misobj_skin_tag_dynamic_tv_og",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:TvInspired",
          Value: "TS:Dynamic:TvInspired",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_tv_og",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec817",
  },
  misobj_skin_tag_dynamic_t_shirt: {
    slug: "misobj_skin_tag_dynamic_t_shirt",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:TShirt",
          Value: "TS:Dynamic:TShirt",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_t_shirt",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec818",
  },
  misobj_skin_tag_dynamic_sword_wielder: {
    slug: "misobj_skin_tag_dynamic_sword_wielder",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:SwordWielder",
          Value: "TS:Dynamic:SwordWielder",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_sword_wielder",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec819",
  },
  misobj_skin_tag_dynamic_spooky: {
    slug: "misobj_skin_tag_dynamic_spooky",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Spooky",
          Value: "TS:Dynamic:Spooky",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_spooky",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec81a",
  },
  misobj_skin_tag_dynamic_semi_formal: {
    slug: "misobj_skin_tag_dynamic_semi_formal",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:SemiFormal",
          Value: "TS:Dynamic:SemiFormal",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_semi_formal",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec81b",
  },
  misobj_skin_tag_dynamic_sandals: {
    slug: "misobj_skin_tag_dynamic_sandals",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Sandals",
          Value: "TS:Dynamic:Sandals",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_sandals",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec81c",
  },
  misobj_skin_tag_dynamic_rich: {
    slug: "misobj_skin_tag_dynamic_rich",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Rich",
          Value: "TS:Dynamic:Rich",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_rich",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec81d",
  },
  misobj_skin_tag_dynamic_red_white_blue_clothing: {
    slug: "misobj_skin_tag_dynamic_red_white_blue_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:RedWhiteandBlueClothing",
          Value: "TS:Dynamic:RedWhiteandBlueClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_red_white_blue_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec81e",
  },
  misobj_skin_tag_dynamic_red_clothing: {
    slug: "misobj_skin_tag_dynamic_red_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:RedClothing",
          Value: "TS:Dynamic:RedClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_red_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec81f",
  },
  misobj_skin_tag_dynamic_purple_clothing: {
    slug: "misobj_skin_tag_dynamic_purple_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PurpleClothing",
          Value: "TS:Dynamic:PurpleClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_purple_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec820",
  },
  misobj_skin_tag_dynamic_pre80s: {
    slug: "misobj_skin_tag_dynamic_pre80s",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PremieredBeforeThe80s",
          Value: "TS:Dynamic:PremieredBeforeThe80s",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_pre80s",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec821",
  },
  misobj_skin_tag_dynamic_pink_clothing: {
    slug: "misobj_skin_tag_dynamic_pink_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PinkClothing",
          Value: "TS:Dynamic:PinkClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_pink_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec822",
  },
  misobj_skin_tag_dynamic_pfg_og: {
    slug: "misobj_skin_tag_dynamic_pfg_og",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PFGOriginal",
          Value: "TS:Dynamic:PFGOriginal",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_pfg_og",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec823",
  },
  misobj_skin_tag_dynamic_orange_clothing: {
    slug: "misobj_skin_tag_dynamic_orange_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:OrangeClothing",
          Value: "TS:Dynamic:OrangeClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_orange_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec824",
  },
  misobj_skin_tag_dynamic_movie_og: {
    slug: "misobj_skin_tag_dynamic_movie_og",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:MovieInspired",
          Value: "TS:Dynamic:MovieInspired",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_movie_og",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec825",
  },
  misobj_skin_tag_dynamic_metallic: {
    slug: "misobj_skin_tag_dynamic_metallic",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Metallic",
          Value: "TS:Dynamic:Metallic",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_metallic",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec826",
  },
  misobj_skin_tag_dynamic_heroic: {
    slug: "misobj_skin_tag_dynamic_heroic",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Heroic",
          Value: "TS:Dynamic:Heroic",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_heroic",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec827",
  },
  misobj_skin_tag_dynamic_heart: {
    slug: "misobj_skin_tag_dynamic_heart",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Heart",
          Value: "TS:Dynamic:Heart",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_heart",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec828",
  },
  misobj_skin_tag_dynamic_green_clothing: {
    slug: "misobj_skin_tag_dynamic_green_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:GreenClothing",
          Value: "TS:Dynamic:GreenClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_green_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec829",
  },
  misobj_skin_tag_dynamic_fuzzy: {
    slug: "misobj_skin_tag_dynamic_fuzzy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Fuzzy",
          Value: "TS:Dynamic:Fuzzy",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_fuzzy",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec82a",
  },
  misobj_skin_tag_dynamic_festiversus: {
    slug: "misobj_skin_tag_dynamic_festiversus",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Festiversus",
          Value: "TS:Dynamic:Festiversus",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_festiversus",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec82b",
  },
  misobj_skin_tag_dynamic_eyewear: {
    slug: "misobj_skin_tag_dynamic_eyewear",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Eyewear",
          Value: "TS:Dynamic:Eyewear",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_eyewear",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec82c",
  },
  misobj_skin_tag_dynamic_et: {
    slug: "misobj_skin_tag_dynamic_et",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:ExtraTerrestrial",
          Value: "TS:Dynamic:ExtraTerrestrial",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_et",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec82d",
  },
  misobj_skin_tag_dynamic_comic_og: {
    slug: "misobj_skin_tag_dynamic_comic_og",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:ComicInspired",
          Value: "TS:Dynamic:ComicInspired",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_comic_og",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec82e",
  },
  misobj_skin_tag_dynamic_comfy_cozy: {
    slug: "misobj_skin_tag_dynamic_comfy_cozy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:ComfyCozy",
          Value: "TS:Dynamic:ComfyCozy",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_comfy_cozy",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec82f",
  },
  misobj_skin_tag_dynamic_caped: {
    slug: "misobj_skin_tag_dynamic_caped",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Caped",
          Value: "TS:Dynamic:Caped",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_caped",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec830",
  },
  misobj_skin_tag_dynamic_blue_clothing: {
    slug: "misobj_skin_tag_dynamic_blue_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:BlueClothing",
          Value: "TS:Dynamic:BlueClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_blue_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec831",
  },
  misobj_skin_tag_dynamic_black_clothing: {
    slug: "misobj_skin_tag_dynamic_black_clothing",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:BlackClothing",
          Value: "TS:Dynamic:BlackClothing",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_black_clothing",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec832",
  },
  misobj_skin_tag_dynamic_animated: {
    slug: "misobj_skin_tag_dynamic_animated",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Animated",
          Value: "TS:Dynamic:Animated",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_animated",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec833",
  },
  misobj_skin_tag_dynamic_alt: {
    slug: "misobj_skin_tag_dynamic_alt",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:AlternativePersona",
          Value: "TS:Dynamic:AlternativePersona",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_alt",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec834",
  },
  misobj_skin_tag_dynamic_adult: {
    slug: "misobj_skin_tag_dynamic_adult",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Adult",
          Value: "TS:Dynamic:Adult",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_adult",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec835",
  },
  misobj_skin_tag_dynamic_90s: {
    slug: "misobj_skin_tag_dynamic_90s",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PremieredinThe90s",
          Value: "TS:Dynamic:PremieredinThe90s",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_90s",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec836",
  },
  misobj_skin_tag_dynamic_80s: {
    slug: "misobj_skin_tag_dynamic_80s",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PremieredinThe80s",
          Value: "TS:Dynamic:PremieredinThe80s",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_80s",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec837",
  },
  misobj_skin_tag_dynamic_20s: {
    slug: "misobj_skin_tag_dynamic_20s",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PremieredinThe2020s",
          Value: "TS:Dynamic:PremieredinThe2020s",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_20s",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec838",
  },
  misobj_skin_tag_dynamic_10s: {
    slug: "misobj_skin_tag_dynamic_10s",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PremieredInThe10s",
          Value: "TS:Dynamic:PremieredInThe10s",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_10s",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec839",
  },
  misobj_skin_tag_dynamic_00s: {
    slug: "misobj_skin_tag_dynamic_00s",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:PremieredinThe00s",
          Value: "TS:Dynamic:PremieredinThe00s",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_00s",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec83a",
  },
  misobj_recommended: {
    slug: "misobj_recommended",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:FighterDifficulty:Low",
          Value: "TS:Fixed:FighterDifficulty:Low",
        },
      ],
      Slug: "misobj_recommended",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec83b",
  },
  misobj_medium: {
    slug: "misobj_medium",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:FighterDifficulty:Medium",
          Value: "TS:Fixed:FighterDifficulty:Medium",
        },
      ],
      Slug: "misobj_medium",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec83c",
  },
  misobj_mage: {
    slug: "misobj_mage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Class:Mage",
          Value: "TS:Fixed:Class:Mage",
        },
      ],
      Slug: "misobj_mage",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec83d",
  },
  misobj_hard: {
    slug: "misobj_hard",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:FighterDifficulty:high",
          Value: "TS:Fixed:FighterDifficulty:high",
        },
      ],
      Slug: "misobj_hard",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec83e",
  },
  misobj_AssassinTag: {
    slug: "misobj_AssassinTag",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Class:Assassin",
          Value: "TS:Fixed:Class:Assassin",
        },
      ],
      Slug: "misobj_AssassinTag",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec83f",
  },
  misobj_match_play_as_character_c028: {
    slug: "misobj_match_play_as_character_c028",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C028",
        },
      ],
      Slug: "misobj_match_play_as_character_c028",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec840",
  },
  misobj_shooting_gallery_score: {
    slug: "misobj_shooting_gallery_score",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:ShootingGalleryScore",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_shooting_gallery_score",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec841",
  },
  misobj_wonder_woman_burst: {
    slug: "misobj_wonder_woman_burst",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:WonderWoman:FullChargeBubble",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_wonder_woman_burst",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec842",
  },
  misobj_up_ringout: {
    slug: "misobj_up_ringout",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpRingouts",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_up_ringout",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec843",
  },
  misobj_stripe_shot: {
    slug: "misobj_stripe_shot",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:Stripe:Gun",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_stripe_shot",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec844",
  },
  misobj_down_ringout: {
    slug: "misobj_down_ringout",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownRingouts",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_down_ringout",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec845",
  },
  misobj_bugs_sandwich_heal: {
    slug: "misobj_bugs_sandwich_heal",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:BugsBunny:HealSandwich",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_bugs_sandwich_heal",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec846",
  },
  misobj_hit_air_attack: {
    slug: "misobj_hit_air_attack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAirAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hit_air_attack",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec847",
  },
  misobj_matchplaymap_trophies_edge: {
    slug: "misobj_matchplaymap_trophies_edge",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Map:Play",
          Operator: "==",
          SelectedValue: "GameplayTag",
          Value: "TS:Fixed:Maps:M003",
          TagValue: "TS:Fixed:Maps:M003",
        },
      ],
      Slug: "misobj_matchplaymap_trophies_edge",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec848",
  },
  misobj_matchplaymap_townsville: {
    slug: "misobj_matchplaymap_townsville",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Map:Play",
          Operator: "==",
          SelectedValue: "GameplayTag",
          Value: "TS:Fixed:Maps:M015",
          TagValue: "TS:Fixed:Maps:M015",
        },
      ],
      Slug: "misobj_matchplaymap_townsville",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1719936425,
    },
    id: "663c0f944b55072b1d7ec849",
  },
  misobj_matchplaymap_m016: {
    slug: "misobj_matchplaymap_m016",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Map:Play",
          Operator: "==",
          SelectedValue: "GameplayTag",
          Value: "TS:Fixed:Maps:M016",
          TagValue: "TS:Fixed:Maps:M016",
        },
      ],
      Slug: "misobj_matchplaymap_m016",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715907010,
    },
    id: "663c0f944b55072b1d7ec84a",
  },
  misobj_playanymode: {
    slug: "misobj_playanymode",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Mode:Type:Play",
          Operator: "==",
          SelectedValue: "String",
          Value: "any",
        },
      ],
      Slug: "misobj_playanymode",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec84b",
  },
  misobj_login: {
    slug: "misobj_login",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Misc:Account:Login",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_login",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec84c",
  },
  misobj_playmatch: {
    slug: "misobj_playmatch",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:WinOrLose",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_playmatch",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec84d",
  },
  misobj_PartnerIsFriend: {
    slug: "misobj_PartnerIsFriend",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:FriendPartner",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_PartnerIsFriend",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec84e",
  },
  misobj_match_rift_play_tech_node_2: {
    slug: "misobj_match_rift_play_tech_node_2",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts",
          Operator: "==",
          SelectedValue: "String",
          Value: "5DB3F20A44F47304FC7075B85AC99957",
        },
      ],
      Slug: "misobj_match_rift_play_tech_node_2",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec84f",
  },
  misobj_rift_guestfighter: {
    slug: "misobj_rift_guestfighter",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs:GuestFighter",
          Operator: "==",
          SelectedValue: "String",
          Value: "any",
        },
      ],
      Slug: "misobj_rift_guestfighter",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec850",
  },
  misobj_rift_completeallnodemissions: {
    slug: "misobj_rift_completeallnodemissions",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts:AllNodeMissionsNewlyCompleted",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_rift_completeallnodemissions",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec851",
  },
  misobj_match_rift_tutorialnodescomplete: {
    slug: "misobj_match_rift_tutorialnodescomplete",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts:TutorialNodesComplete",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_match_rift_tutorialnodescomplete",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec852",
  },
  misobj_match_rift_bossnodecomplete: {
    slug: "misobj_match_rift_bossnodecomplete",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts:BossNodeComplete",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_match_rift_bossnodecomplete",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec853",
  },
  misobj_rift_cauldroncomleted: {
    slug: "misobj_rift_cauldroncomleted",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Rifts:CauldronCompleted",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_rift_cauldroncomleted",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec854",
  },
  misobj_constraint_rift_allnodemissionscomplete: {
    slug: "misobj_constraint_rift_allnodemissionscomplete",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Match:Rifts:AllNodeMissionsComplete",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_constraint_rift_allnodemissionscomplete",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec855",
  },
  misobj_client_openprestigestore: {
    slug: "misobj_client_openprestigestore",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Client:OpenPrestigeStore",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_client_openprestigestore",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec856",
  },
  misobj_client_ftue_levelupgem: {
    slug: "misobj_client_ftue_levelupgem",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Client:Ftue:LevelUpGem",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_client_ftue_levelupgem",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec857",
  },
  misobj_volleyball_shutouts: {
    slug: "misobj_volleyball_shutouts",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:VolleyballShutout",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_volleyball_shutouts",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec858",
  },
  misobj_rift_reflect_projectiles: {
    slug: "misobj_rift_reflect_projectiles",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectilesReflected",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_reflect_projectiles",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec859",
  },
  misobj_rift_block_projectiles: {
    slug: "misobj_rift_block_projectiles",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectilesBlocked",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_block_projectiles",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec85a",
  },
  misobj_rift_total_air_attacks_hit: {
    slug: "misobj_rift_total_air_attacks_hit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAirAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rift_total_air_attacks_hit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec85b",
  },
  misobj_rift_no_attacks_or_specials: {
    slug: "misobj_rift_no_attacks_or_specials",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalAttacksUsed",
          Operator: "==",
          SelectedValue: "Integer",
          Value: 0,
        },
      ],
      Slug: "misobj_rift_no_attacks_or_specials",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec85c",
  },
  misobj_side_ringout: {
    slug: "misobj_side_ringout",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalLeftRingouts",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_side_ringout",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec85d",
  },
  misobj_match_play_as_character_harley: {
    slug: "misobj_match_play_as_character_harley",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_harley",
        },
      ],
      Slug: "misobj_match_play_as_character_harley",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec85e",
  },
  misobj_side_ringout_right: {
    slug: "misobj_side_ringout_right",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalRightRingouts",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_side_ringout_right",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec85f",
  },
  misobj_hit_air_down_special: {
    slug: "misobj_hit_air_down_special",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownAirSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hit_air_down_special",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1715212180,
    },
    updated_at: {
      _hydra_unix_date: 1715212180,
    },
    id: "663c0f944b55072b1d7ec860",
  },
  misobj_debuffs_cleansed: {
    slug: "misobj_debuffs_cleansed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:DebuffsCleansed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_debuffs_cleansed",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1719936425,
    },
    updated_at: {
      _hydra_unix_date: 1719936425,
    },
    id: "668425a9a81dece5374b8588",
  },
  misobj_golf_count: {
    slug: "misobj_golf_count",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GolfCount",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_golf_count",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1719936425,
    },
    updated_at: {
      _hydra_unix_date: 1719936425,
    },
    id: "668425a9a81dece5374b8589",
  },
  misobj_skin_tag_dynamic_shark_week: {
    slug: "misobj_skin_tag_dynamic_shark_week",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:SharkWeek",
          Value: "TS:Dynamic:SharkWeek",
        },
      ],
      Slug: "misobj_skin_tag_dynamic_shark_week",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1719936425,
    },
    updated_at: {
      _hydra_unix_date: 1719936425,
    },
    id: "668425a9a81dece5374b858a",
  },
  misobj_hit_sweet_spot_attacks: {
    slug: "misobj_hit_sweet_spot_attacks",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSweetSpotsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hit_sweet_spot_attacks",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9312",
  },
  misobj_skin_tag_universe_c026: {
    slug: "misobj_skin_tag_universe_c026",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:SamuraiJack",
          Value: "TS:Fixed:Universe:SamuraiJack",
        },
      ],
      Slug: "misobj_skin_tag_universe_c026",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9313",
  },
  misobj_enemy_weakened: {
    slug: "misobj_enemy_weakened",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Weakened",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_enemy_weakened",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9314",
  },
  misobj_enemy_silence: {
    slug: "misobj_enemy_silence",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Silence",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_enemy_silence",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9315",
  },
  misobj_thaw_frost_drone: {
    slug: "misobj_thaw_frost_drone",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Frozen",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_thaw_frost_drone",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9316",
  },
  misobj_power_down_drone: {
    slug: "misobj_power_down_drone",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Frozen",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_power_down_drone",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9317",
  },
  misobj_enemy_ignited: {
    slug: "misobj_enemy_ignited",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Ignited",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_enemy_ignited",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9318",
  },
  misobj_cool_blaze_drone: {
    slug: "misobj_cool_blaze_drone",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Frozen",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_cool_blaze_drone",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb9319",
  },
  misobj_skin_circuit: {
    slug: "misobj_skin_circuit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:CircuitCrew",
          Value: "TS:Dynamic:CircuitCrew",
        },
      ],
      Slug: "misobj_skin_circuit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb931a",
  },
  misobj_skintag_tech: {
    slug: "misobj_skintag_tech",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Tech",
          Value: "TS:Dynamic:Tech",
        },
      ],
      Slug: "misobj_skintag_tech",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb931b",
  },
  misobj_constraint_is_ranked: {
    slug: "misobj_constraint_is_ranked",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Match:IsRanked",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_constraint_is_ranked",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb931c",
  },
  misobj_20xxl: {
    slug: "misobj_20xxl",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:20XXL",
          Value: "TS:Dynamic:20XXL",
        },
      ],
      Slug: "misobj_20xxl",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1721750496,
    },
    updated_at: {
      _hydra_unix_date: 1721750496,
    },
    id: "669fd3e07d13e0649bcb931d",
  },
  misobj_use_neutral_special: {
    slug: "misobj_use_neutral_special",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralSpecialsUsed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_use_neutral_special",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd995345",
  },
  misobj_travel_tube_hit_opponents_into: {
    slug: "misobj_travel_tube_hit_opponents_into",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Hazards:TravelTube:HitOpponentsInto",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_travel_tube_hit_opponents_into",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd995346",
  },
  misobj_race_place: {
    slug: "misobj_race_place",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:RacePlacement",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 5,
        },
      ],
      Slug: "misobj_race_place",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1740428865,
    },
    id: "66c4be1645eaf195cd995347",
  },
  misobj_map_m007_emblem_opened: {
    slug: "misobj_map_m007_emblem_opened",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Map:M007:EmblemOpened",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_map_m007_emblem_opened",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd995348",
  },
  misobj_golf_holes_completed: {
    slug: "misobj_golf_holes_completed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:GolfHolesCompleted",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_golf_holes_completed",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd995349",
  },
  misobj_door_portal_projectile: {
    slug: "misobj_door_portal_projectile",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:DoorPortalProjectile",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_door_portal_projectile",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd99534a",
  },
  misobj_door_portal_enemy: {
    slug: "misobj_door_portal_enemy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:DoorPortalEnemy",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 1,
        },
      ],
      Slug: "misobj_door_portal_enemy",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd99534b",
  },
  misobj_cooldown_abilities_started: {
    slug: "misobj_cooldown_abilities_started",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalCooldownAbilitiesStarted",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_cooldown_abilities_started",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd99534c",
  },
  misobj_buff_applied_enemy_shocked: {
    slug: "misobj_buff_applied_enemy_shocked",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Shocked",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_buff_applied_enemy_shocked",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd99534d",
  },
  misobj_boss_m015_defeated: {
    slug: "misobj_boss_m015_defeated",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Boss:M015:Defeated",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_boss_m015_defeated",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd99534e",
  },
  misobj_skin_tag_universe_c024: {
    slug: "misobj_skin_tag_universe_c024",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:Beetlejuice",
          Value: "TS:Fixed:Universe:Beetlejuice",
        },
      ],
      Slug: "misobj_skin_tag_universe_c024",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd99534f",
  },
  misobj_character_C026: {
    slug: "misobj_character_C026",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C026",
        },
      ],
      Slug: "misobj_character_C026",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1724169750,
    },
    updated_at: {
      _hydra_unix_date: 1724169750,
    },
    id: "66c4be1645eaf195cd995350",
  },
  misobj_shop_purchase: {
    slug: "misobj_shop_purchase",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Shop:Purchase",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_shop_purchase",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268551",
  },
  misobj_shop_free_purchase: {
    slug: "misobj_shop_free_purchase",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Shop:Purchase:Free",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_shop_free_purchase",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268552",
  },
  misobj_shop_dailydeal_purchase: {
    slug: "misobj_shop_dailydeal_purchase",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Shop:Purchase:DailyDeal",
          Operator: "==",
          SelectedValue: "Boolean",
          Value: true,
        },
      ],
      Slug: "misobj_shop_dailydeal_purchase",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268553",
  },
  misobj_armorhitsreceived: {
    slug: "misobj_armorhitsreceived",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalArmorHitsTaken",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_armorhitsreceived",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268554",
  },
  misobj_shmup_enemy_destroyed: {
    slug: "misobj_shmup_enemy_destroyed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:ShmupEnemyDestroyed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_shmup_enemy_destroyed",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268555",
  },
  misobj_skintag_dynamic_beetlejuice: {
    slug: "misobj_skintag_dynamic_beetlejuice",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:Beetlejuice",
          Value: "TS:Fixed:Universe:Beetlejuice",
        },
      ],
      Slug: "misobj_skintag_dynamic_beetlejuice",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268556",
  },
  misobj_skintag_dynamic_ppg: {
    slug: "misobj_skintag_dynamic_ppg",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          Value: "TS:Fixed:Universe:PowerPuffGirls",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_skintag_dynamic_ppg",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268557",
  },
  misobj_skintag_hypergalactic: {
    slug: "misobj_skintag_hypergalactic",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Hypergalactic",
          Value: "TS:Dynamic:Hypergalactic",
        },
      ],
      Slug: "misobj_skintag_hypergalactic",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268558",
  },
  misobj_skintag_diademuertos: {
    slug: "misobj_skintag_diademuertos",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:DiaDeMuertos",
          Value: "TS:Dynamic:DiaDeMuertos",
        },
      ],
      Slug: "misobj_skintag_diademuertos",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268559",
  },
  misobj_skintag_dynamic_crossover: {
    slug: "misobj_skintag_dynamic_crossover",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Crossover",
          Value: "TS:Dynamic:Crossover",
        },
      ],
      Slug: "misobj_skintag_dynamic_crossover",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec26855a",
  },
  misobj_skintag_dynamic_batman85: {
    slug: "misobj_skintag_dynamic_batman85",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Batman85",
          Value: "TS:Dynamic:Batman85",
        },
      ],
      Slug: "misobj_skintag_dynamic_batman85",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec26855b",
  },
  misobj_totalupgroundspecialhit: {
    slug: "misobj_totalupgroundspecialhit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpGroundSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_totalupgroundspecialhit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec26855c",
  },
  misobj_hitupspecialair: {
    slug: "misobj_hitupspecialair",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitupspecialair",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec26855d",
  },
  misobj_totalupgroundednormalhit: {
    slug: "misobj_totalupgroundednormalhit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpGroundNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_totalupgroundednormalhit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec26855e",
  },
  misobj_hitupattackair: {
    slug: "misobj_hitupattackair",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalUpAirNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitupattackair",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec26855f",
  },
  misobj_totalsidegroundspecialhit: {
    slug: "misobj_totalsidegroundspecialhit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideGroundSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_totalsidegroundspecialhit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268560",
  },
  misobj_hitsidespecialair: {
    slug: "misobj_hitsidespecialair",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideAirSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitsidespecialair",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268561",
  },
  misobj_hitsideattackgrounded: {
    slug: "misobj_hitsideattackgrounded",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideGroundNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitsideattackgrounded",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268562",
  },
  misobj_hitsideattackair: {
    slug: "misobj_hitsideattackair",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideAirNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitsideattackair",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268563",
  },
  misobj_totalneutralgroundspecialshit: {
    slug: "misobj_totalneutralgroundspecialshit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralGroundSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_totalneutralgroundspecialshit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268564",
  },
  misobj_hitneutralspecialair: {
    slug: "misobj_hitneutralspecialair",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralAirSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitneutralspecialair",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268565",
  },
  misobj_totalneutralgroundnormalhit: {
    slug: "misobj_totalneutralgroundnormalhit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralGroundNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_totalneutralgroundnormalhit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268566",
  },
  misobj_hitneutralattackair: {
    slug: "misobj_hitneutralattackair",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalNeutralAirNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitneutralattackair",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268567",
  },
  misobj_totaldowngroundspecialshit: {
    slug: "misobj_totaldowngroundspecialshit",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownGroundSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_totaldowngroundspecialshit",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268568",
  },
  misobj_hitdowngroundedattack: {
    slug: "misobj_hitdowngroundedattack",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDownGroundNormalHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_hitdowngroundedattack",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec268569",
  },
  misobj_skintag_dynamic_batman_85: {
    slug: "misobj_skintag_dynamic_batman_85",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Batman85",
          Value: "TS:Dynamic:Batman85",
        },
      ],
      Slug: "misobj_skintag_dynamic_batman_85",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1726589225,
    },
    updated_at: {
      _hydra_unix_date: 1726589225,
    },
    id: "66e9a9297af4cd81ec26856a",
  },
  misobj_matchplaymap_m017: {
    slug: "misobj_matchplaymap_m017",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Map:Play",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Maps:M016",
          Value: "TS:Fixed:Maps:M016",
        },
      ],
      Slug: "misobj_matchplaymap_m017",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1729008147,
    },
    updated_at: {
      _hydra_unix_date: 1729008147,
    },
    id: "670e92130e3027823c1d355a",
  },
  misobj_skin_tag_universe_c027: {
    slug: "misobj_skin_tag_universe_c027",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:PlayAs",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_C027",
        },
      ],
      Slug: "misobj_skin_tag_universe_c027",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1729008147,
    },
    updated_at: {
      _hydra_unix_date: 1729008147,
    },
    id: "670e92130e3027823c1d355b",
  },
  misobj_skintag_dynamic_halloween: {
    slug: "misobj_skintag_dynamic_halloween",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Halloween",
          Value: "TS:Dynamic:Halloween",
        },
      ],
      Slug: "misobj_skintag_dynamic_halloween",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1729008147,
    },
    updated_at: {
      _hydra_unix_date: 1729008147,
    },
    id: "670e92130e3027823c1d355c",
  },
  misobj_constraint_item_owned: {
    slug: "misobj_constraint_item_owned",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          Value: "character_bugs_bunny",
        },
      ],
      Slug: "misobj_constraint_item_owned",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1729008147,
    },
    updated_at: {
      _hydra_unix_date: 1729008147,
    },
    id: "670e92130e3027823c1d355d",
  },
  misobj_win_dotd: {
    slug: "misobj_win_dotd",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:DiaDeMuertos",
          Value: "TS:Dynamic:DiaDeMuertos",
        },
      ],
      Slug: "misobj_win_dotd",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1729008147,
    },
    updated_at: {
      _hydra_unix_date: 1729008147,
    },
    id: "670e92130e3027823c1d355e",
  },
  misobj_win_crossover: {
    slug: "misobj_win_crossover",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Crossover",
          Value: "TS:Dynamic:Crossover",
        },
      ],
      Slug: "misobj_win_crossover",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1729008147,
    },
    updated_at: {
      _hydra_unix_date: 1729008147,
    },
    id: "670e92130e3027823c1d355f",
  },
  misobj_ownsitem_c027: {
    slug: "misobj_ownsitem_c027",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C027",
        },
      ],
      Slug: "misobj_ownsitem_c027",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c590",
  },
  misobj_advenemydestroyed: {
    slug: "misobj_advenemydestroyed",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:ShmupEnemyDestroyed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_advenemydestroyed",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c591",
  },
  misobj_skintag_dynamic_c027: {
    slug: "misobj_skintag_dynamic_c027",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Nubia",
          Value: "TS:Dynamic:Nubia",
        },
      ],
      Slug: "misobj_skintag_dynamic_c027",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c592",
  },
  misobj_winarenatop4: {
    slug: "misobj_winarenatop4",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Arena:Top4",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_winarenatop4",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c593",
  },
  misobj_winarenatop2: {
    slug: "misobj_winarenatop2",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Arena:Top2",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_winarenatop2",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c594",
  },
  misobj_winarena: {
    slug: "misobj_winarena",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Arena:Top1",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_winarena",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c595",
  },
  misobj_arenashopreroll: {
    slug: "misobj_arenashopreroll",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Econ:Sells",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_arenashopreroll",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c596",
  },
  misobj_arenasells: {
    slug: "misobj_arenasells",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Econ:Sells",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_arenasells",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c597",
  },
  misobj_arenarandom: {
    slug: "misobj_arenarandom",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Arena:RandomCharacter",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_arenarandom",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c598",
  },
  misobj_arenapurchases: {
    slug: "misobj_arenapurchases",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Econ:Purchases",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_arenapurchases",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c599",
  },
  misobj_arenaplay: {
    slug: "misobj_arenaplay",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Arena:Play",
          Operator: "==",
          SelectedValue: "Boolean",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: true,
        },
      ],
      Slug: "misobj_arenaplay",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c59a",
  },
  misobj_arenaitemlevel3: {
    slug: "misobj_arenaitemlevel3",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Item:Level3",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_arenaitemlevel3",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c59b",
  },
  misobj_arenaitemlevel2: {
    slug: "misobj_arenaitemlevel2",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Item:Level2",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_arenaitemlevel2",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c59c",
  },
  misobj_arenagoldspent: {
    slug: "misobj_arenagoldspent",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Econ:GoldSpent",
          Operator: "+=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
        },
      ],
      Slug: "misobj_arenagoldspent",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c59d",
  },
  misobj_arenagoldinterest: {
    slug: "misobj_arenagoldinterest",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Econ:InterestEarned",
          Operator: ">=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: 50,
        },
      ],
      Slug: "misobj_arenagoldinterest",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c59e",
  },
  misobj_arenagoldbanked: {
    slug: "misobj_arenagoldbanked",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Arena:Econ:GoldBanked",
          Operator: ">=",
          SelectedValue: "Integer",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: 50,
        },
      ],
      Slug: "misobj_arenagoldbanked",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c59f",
  },
  misobj_ringoutanyarena: {
    slug: "misobj_ringoutanyarena",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalRingouts",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 10,
        },
      ],
      Slug: "misobj_ringoutanyarena",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a0",
  },
  misobj_dealdamagearena: {
    slug: "misobj_dealdamagearena",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalDamageDealt",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 400,
        },
      ],
      Slug: "misobj_dealdamagearena",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a1",
  },
  misobj_skintag_dynamic_winterwonderland: {
    slug: "misobj_skintag_dynamic_winterwonderland",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:WinterWonderland",
          Value: "TS:Dynamic:WinterWonderland",
        },
      ],
      Slug: "misobj_skintag_dynamic_winterwonderland",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a2",
  },
  misobj_skintag_dynamic_mythicvista: {
    slug: "misobj_skintag_dynamic_mythicvista",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:MythicVista",
          Value: "TS:Dynamic:MythicVista",
        },
      ],
      Slug: "misobj_skintag_dynamic_mythicvista",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a3",
  },
  misobj_skintag_dynamic_comfy: {
    slug: "misobj_skintag_dynamic_comfy",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:ComfyCozy",
          Value: "TS:Dynamic:ComfyCozy",
        },
      ],
      Slug: "misobj_skintag_dynamic_comfy",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a4",
  },
  misobj_skintag_dynamic_azarath: {
    slug: "misobj_skintag_dynamic_azarath",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Azarath",
          Value: "TS:Dynamic:Azarath",
        },
      ],
      Slug: "misobj_skintag_dynamic_azarath",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a5",
  },
  misobj_lenoreslam: {
    slug: "misobj_lenoreslam",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:C025:lenoregrab",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_lenoreslam",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a6",
  },
  misobj_grappleally_c004_s23: {
    slug: "misobj_grappleally_c004_s23",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Batman:GrappleAlly",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_grappleally_c004_s23",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a7",
  },
  misobj_electric_c004_s23: {
    slug: "misobj_electric_c004_s23",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Batman:Electric",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_electric_c004_s23",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a8",
  },
  misobj_shocked_gauntlet: {
    slug: "misobj_shocked_gauntlet",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Shocked",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_shocked_gauntlet",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5a9",
  },
  misobj_ownsitem_c025: {
    slug: "misobj_ownsitem_c025",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C025",
        },
      ],
      Slug: "misobj_ownsitem_c025",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5aa",
  },
  misobj_ownsitem_c004_s23: {
    slug: "misobj_ownsitem_c004_s23",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "skin_c004_s23",
        },
      ],
      Slug: "misobj_ownsitem_c004_s23",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5ab",
  },
  misobj_ownsitem_c003_s23: {
    slug: "misobj_ownsitem_c003_s23",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "skin_c003_s23",
        },
      ],
      Slug: "misobj_ownsitem_c003_s23",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5ac",
  },
  misobj_skintag_fixed_c025: {
    slug: "misobj_skintag_fixed_c025",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Raven",
          Value: "TS:Fixed:Raven",
        },
      ],
      Slug: "misobj_skintag_fixed_c025",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5ad",
  },
  misobj_skintag_fixed_c004: {
    slug: "misobj_skintag_fixed_c004",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Batman",
          Value: "TS:Fixed:Batman",
        },
      ],
      Slug: "misobj_skintag_fixed_c004",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5ae",
  },
  misobj_skintag_dynamic_c031: {
    slug: "misobj_skintag_dynamic_c031",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Marceline",
          Value: "TS:Dynamic:Marceline",
        },
      ],
      Slug: "misobj_skintag_dynamic_c031",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5af",
  },
  misobj_skintag_dynamic_c004_s23: {
    slug: "misobj_skintag_dynamic_c004_s23",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:MythicVista",
          Value: "TS:Dynamic:MythicVista",
        },
      ],
      Slug: "misobj_skintag_dynamic_c004_s23",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5b0",
  },
  misobj_skintag_dynamic_c003_s23: {
    slug: "misobj_skintag_dynamic_c003_s23",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Azarath",
          Value: "TS:Dynamic:Azarath",
        },
      ],
      Slug: "misobj_skintag_dynamic_c003_s23",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5b1",
  },
  misobj_skintag_dynamic_c003: {
    slug: "misobj_skintag_dynamic_c003",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Superman",
          Value: "TS:Fixed:Superman",
        },
      ],
      Slug: "misobj_skintag_dynamic_c003",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1731431354,
    },
    updated_at: {
      _hydra_unix_date: 1731431354,
    },
    id: "67338bba180fa11bf187c5b2",
  },
  misobj_total_shield_breaks_from_shield_breaker: {
    slug: "misobj_total_shield_breaks_from_shield_breaker",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalShieldBreaksFromShieldBreaker",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_total_shield_breaks_from_shield_breaker",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f96",
  },
  misobj_van_c014: {
    slug: "misobj_van_c014",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Hitbox:Velma:Van",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_van_c014",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f97",
  },
  misobj_shaggy_sandwich: {
    slug: "misobj_shaggy_sandwich",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Shaggy:SandwichHeal",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_shaggy_sandwich",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f98",
  },
  misobj_shaggy_rage: {
    slug: "misobj_shaggy_rage",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Shaggy:EnragedAttackUsed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_shaggy_rage",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f99",
  },
  misobj_rage_c017: {
    slug: "misobj_rage_c017",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:IronGiant:RageMission",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_rage_c017",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f9a",
  },
  misobj_grab_c014: {
    slug: "misobj_grab_c014",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Hitbox:Velma:GrabAlly",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_grab_c014",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f9b",
  },
  misobj_bombsave_c008: {
    slug: "misobj_bombsave_c008",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Harley:BombSave",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_bombsave_c008",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f9c",
  },
  misobj_uattack_charged_c008: {
    slug: "misobj_uattack_charged_c008",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalFullyChargedAttacksHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_uattack_charged_c008",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f9d",
  },
  misobj_test: {
    slug: "misobj_test",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Steven",
          Value: "TS:Fixed:Steven",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Dynamic:Batman85",
          Value: "TS:Dynamic:Batman85",
        },
        {
          GameplayTag: "Objective:Match:WinOrLose",
          Operator: "+=",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Steven",
        },
      ],
      Slug: "misobj_test",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f9e",
  },
  misobj_teleport_c024: {
    slug: "misobj_teleport_c024",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:BetelGeuse:Teleport",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_teleport_c024",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294f9f",
  },
  misobj_splitnade_c019: {
    slug: "misobj_splitnade_c019",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Morty:SplitNade",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_splitnade_c019",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa0",
  },
  misobj_silence_c036: {
    slug: "misobj_silence_c036",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:AgentSmith:Silence",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_silence_c036",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa1",
  },
  misobj_silence_c023a: {
    slug: "misobj_silence_c023a",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Silence",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_silence_c023a",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa2",
  },
  misobj_saveally_c019: {
    slug: "misobj_saveally_c019",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Morty:AllySave",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_saveally_c019",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa3",
  },
  misobj_ragehit_c035: {
    slug: "misobj_ragehit_c035",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Jason:RageHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_ragehit_c035",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa4",
  },
  misobj_projectileshield_c021: {
    slug: "misobj_projectileshield_c021",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:BlackAdam:ProjectileShield",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_projectileshield_c021",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa5",
  },
  misobj_projectilereverse_c018: {
    slug: "misobj_projectilereverse_c018",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Marvin:ReverseProjectile",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_projectilereverse_c018",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa6",
  },
  misobj_portalkb_c020: {
    slug: "misobj_portalkb_c020",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Rick:PortalKB",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_portalkb_c020",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa7",
  },
  misobj_ownsitem_c036: {
    slug: "misobj_ownsitem_c036",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_c036",
        },
      ],
      Slug: "misobj_ownsitem_c036",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa8",
  },
  misobj_ownsitem_c035: {
    slug: "misobj_ownsitem_c035",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_Jason",
        },
      ],
      Slug: "misobj_ownsitem_c035",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fa9",
  },
  misobj_ownsitem_c034: {
    slug: "misobj_ownsitem_c034",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_BananaGuard",
        },
      ],
      Slug: "misobj_ownsitem_c034",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294faa",
  },
  misobj_ownsitem_c031: {
    slug: "misobj_ownsitem_c031",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C031",
        },
      ],
      Slug: "misobj_ownsitem_c031",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fab",
  },
  misobj_ownsitem_c030: {
    slug: "misobj_ownsitem_c030",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C030",
        },
      ],
      Slug: "misobj_ownsitem_c030",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fac",
  },
  misobj_ownsitem_c028: {
    slug: "misobj_ownsitem_c028",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C028",
        },
      ],
      Slug: "misobj_ownsitem_c028",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fad",
  },
  misobj_ownsitem_c026: {
    slug: "misobj_ownsitem_c026",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C026",
        },
      ],
      Slug: "misobj_ownsitem_c026",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fae",
  },
  misobj_ownsitem_c024: {
    slug: "misobj_ownsitem_c024",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_c024",
        },
      ],
      Slug: "misobj_ownsitem_c024",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294faf",
  },
  misobj_ownsitem_c023b: {
    slug: "misobj_ownsitem_c023b",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C023B",
        },
      ],
      Slug: "misobj_ownsitem_c023b",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb0",
  },
  misobj_ownsitem_c023a: {
    slug: "misobj_ownsitem_c023a",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C023A",
        },
      ],
      Slug: "misobj_ownsitem_c023a",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb1",
  },
  misobj_ownsitem_c022: {
    slug: "misobj_ownsitem_c022",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C025",
        },
      ],
      Slug: "misobj_ownsitem_c022",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb2",
  },
  misobj_ownsitem_c021: {
    slug: "misobj_ownsitem_c021",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C021",
        },
      ],
      Slug: "misobj_ownsitem_c021",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb3",
  },
  misobj_ownsitem_c020: {
    slug: "misobj_ownsitem_c020",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C020",
        },
      ],
      Slug: "misobj_ownsitem_c020",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb4",
  },
  misobj_ownsitem_c019: {
    slug: "misobj_ownsitem_c019",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_c019",
        },
      ],
      Slug: "misobj_ownsitem_c019",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb5",
  },
  misobj_ownsitem_c018: {
    slug: "misobj_ownsitem_c018",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C018",
        },
      ],
      Slug: "misobj_ownsitem_c018",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb6",
  },
  misobj_ownsitem_c017: {
    slug: "misobj_ownsitem_c017",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_C017",
        },
      ],
      Slug: "misobj_ownsitem_c017",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb7",
  },
  misobj_ownsitem_c016: {
    slug: "misobj_ownsitem_c016",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_c16",
        },
      ],
      Slug: "misobj_ownsitem_c016",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb8",
  },
  misobj_ownsitem_c015: {
    slug: "misobj_ownsitem_c015",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_taz",
        },
      ],
      Slug: "misobj_ownsitem_c015",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fb9",
  },
  misobj_ownsitem_c014: {
    slug: "misobj_ownsitem_c014",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_velma",
        },
      ],
      Slug: "misobj_ownsitem_c014",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fba",
  },
  misobj_ownsitem_c013: {
    slug: "misobj_ownsitem_c013",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_finn",
        },
      ],
      Slug: "misobj_ownsitem_c013",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fbb",
  },
  misobj_ownsitem_c012: {
    slug: "misobj_ownsitem_c012",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_garnet",
        },
      ],
      Slug: "misobj_ownsitem_c012",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fbc",
  },
  misobj_ownsitem_c011: {
    slug: "misobj_ownsitem_c011",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_steven",
        },
      ],
      Slug: "misobj_ownsitem_c011",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fbd",
  },
  misobj_ownsitem_c010: {
    slug: "misobj_ownsitem_c010",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_tom_and_jerry",
        },
      ],
      Slug: "misobj_ownsitem_c010",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fbe",
  },
  misobj_ownsitem_c009: {
    slug: "misobj_ownsitem_c009",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_creature",
        },
      ],
      Slug: "misobj_ownsitem_c009",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fbf",
  },
  misobj_ownsitem_c008: {
    slug: "misobj_ownsitem_c008",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_harleyquinn",
        },
      ],
      Slug: "misobj_ownsitem_c008",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc0",
  },
  misobj_ownsitem_c007: {
    slug: "misobj_ownsitem_c007",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_bugs_bunny",
        },
      ],
      Slug: "misobj_ownsitem_c007",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc1",
  },
  misobj_ownsitem_c006: {
    slug: "misobj_ownsitem_c006",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_arya",
        },
      ],
      Slug: "misobj_ownsitem_c006",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc2",
  },
  misobj_ownsitem_c005: {
    slug: "misobj_ownsitem_c005",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_jake",
        },
      ],
      Slug: "misobj_ownsitem_c005",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc3",
  },
  misobj_ownsitem_c004: {
    slug: "misobj_ownsitem_c004",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_batman",
        },
      ],
      Slug: "misobj_ownsitem_c004",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc4",
  },
  misobj_ownsitem_c003: {
    slug: "misobj_ownsitem_c003",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_superman",
        },
      ],
      Slug: "misobj_ownsitem_c003",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc5",
  },
  misobj_ownsitem_c002: {
    slug: "misobj_ownsitem_c002",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_shaggy",
        },
      ],
      Slug: "misobj_ownsitem_c002",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc6",
  },
  misobj_ownsitem_c001: {
    slug: "misobj_ownsitem_c001",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Constraint:Inventory:OwnsItem",
          Operator: "==",
          SelectedValue: "String",
          TagValue: "TS:Fixed:Universe:PowerPuffGirls",
          Value: "character_wonder_woman",
        },
      ],
      Slug: "misobj_ownsitem_c001",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc7",
  },
  misobj_meditate_c026: {
    slug: "misobj_meditate_c026",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalGreyHealthReceived",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_meditate_c026",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc8",
  },
  misobj_maxdance_c012: {
    slug: "misobj_maxdance_c012",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Garnet:FullBuff",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_maxdance_c012",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fc9",
  },
  misobj_kickflip_c023b: {
    slug: "misobj_kickflip_c023b",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Hitbox:Stripe:Kickflip",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_kickflip_c023b",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fca",
  },
  misobj_jerryattach_c010: {
    slug: "misobj_jerryattach_c010",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Jerry:AllyAttach",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_jerryattach_c010",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fcb",
  },
  misobj_grab_c030: {
    slug: "misobj_grab_c030",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_grab_c030",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fcc",
  },
  misobj_face_c034: {
    slug: "misobj_face_c034",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:BananaGuard:Facebox",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_face_c034",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fcd",
  },
  misobj_eatprojectile_c015: {
    slug: "misobj_eatprojectile_c015",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Taz:Eat",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_eatprojectile_c015",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fce",
  },
  misobj_counter_c028: {
    slug: "misobj_counter_c028",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Joker:Counter",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_counter_c028",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "675874d45ca68abece294fcf",
  },
  misobj_cooked_c015: {
    slug: "misobj_cooked_c015",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Taz:Eat",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_cooked_c015",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd0",
  },
  misobj_chargedslide_c031: {
    slug: "misobj_chargedslide_c031",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Marceline:Powerslide",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_chargedslide_c031",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd1",
  },
  misobj_buff_c034: {
    slug: "misobj_buff_c034",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:BananaGuard:Buff",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_buff_c034",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd2",
  },
  misobj_bubble_c018: {
    slug: "misobj_bubble_c018",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Marvin:bubble",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_bubble_c018",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd3",
  },
  misobj_bubble_c011: {
    slug: "misobj_bubble_c011",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Steven:EnemyBubble",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_bubble_c011",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd4",
  },
  misobj_blockprojectile_c023a: {
    slug: "misobj_blockprojectile_c023a",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectilesBlocked",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_blockprojectile_c023a",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd5",
  },
  misobj_armorbreak_c028: {
    slug: "misobj_armorbreak_c028",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalArmorBreaks",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_armorbreak_c028",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd6",
  },
  misobj_allyteleport_c036: {
    slug: "misobj_allyteleport_c036",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:AgentSmith:TeleAlly",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_allyteleport_c036",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd7",
  },
  misobj_allyseed_c020: {
    slug: "misobj_allyseed_c020",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Rick:AllySeed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_allyseed_c020",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd8",
  },
  misobj_skintag_fixed_c036: {
    slug: "misobj_skintag_fixed_c036",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:AgentSmith",
          Value: "TS:Fixed:AgentSmith",
        },
      ],
      Slug: "misobj_skintag_fixed_c036",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fd9",
  },
  misobj_skintag_fixed_c035: {
    slug: "misobj_skintag_fixed_c035",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Jason",
          Value: "TS:Fixed:Jason",
        },
      ],
      Slug: "misobj_skintag_fixed_c035",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fda",
  },
  misobj_skintag_fixed_c034: {
    slug: "misobj_skintag_fixed_c034",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:BananaGuard",
          Value: "TS:Fixed:BananaGuard",
        },
      ],
      Slug: "misobj_skintag_fixed_c034",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fdb",
  },
  misobj_skintag_fixed_c031: {
    slug: "misobj_skintag_fixed_c031",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Marceline",
          Value: "TS:Fixed:Marceline",
        },
      ],
      Slug: "misobj_skintag_fixed_c031",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fdc",
  },
  misobj_skintag_fixed_c030: {
    slug: "misobj_skintag_fixed_c030",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:PowerpuffGirls",
          Value: "TS:Fixed:PowerpuffGirls",
        },
      ],
      Slug: "misobj_skintag_fixed_c030",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fdd",
  },
  misobj_skintag_fixed_c028: {
    slug: "misobj_skintag_fixed_c028",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Joker",
          Value: "TS:Fixed:Joker",
        },
      ],
      Slug: "misobj_skintag_fixed_c028",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fde",
  },
  misobj_skintag_fixed_c027: {
    slug: "misobj_skintag_fixed_c027",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Nubia",
          Value: "TS:Fixed:Nubia",
        },
      ],
      Slug: "misobj_skintag_fixed_c027",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fdf",
  },
  misobj_skintag_fixed_c026: {
    slug: "misobj_skintag_fixed_c026",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:SamuraiJack",
          Value: "TS:Fixed:SamuraiJack",
        },
      ],
      Slug: "misobj_skintag_fixed_c026",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe0",
  },
  misobj_skintag_fixed_c024: {
    slug: "misobj_skintag_fixed_c024",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Universe:Beetlejuice",
          Value: "TS:Fixed:Universe:Beetlejuice",
        },
      ],
      Slug: "misobj_skintag_fixed_c024",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe1",
  },
  misobj_skintag_fixed_c023b: {
    slug: "misobj_skintag_fixed_c023b",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Stripe",
          Value: "TS:Fixed:Stripe",
        },
      ],
      Slug: "misobj_skintag_fixed_c023b",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe2",
  },
  misobj_skintag_fixed_c023a: {
    slug: "misobj_skintag_fixed_c023a",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Gizmo",
          Value: "TS:Fixed:Gizmo",
        },
      ],
      Slug: "misobj_skintag_fixed_c023a",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe3",
  },
  misobj_skintag_fixed_c021: {
    slug: "misobj_skintag_fixed_c021",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:BlackAdam",
          Value: "TS:Fixed:BlackAdam",
        },
      ],
      Slug: "misobj_skintag_fixed_c021",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe4",
  },
  misobj_skintag_fixed_c020: {
    slug: "misobj_skintag_fixed_c020",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Rick",
          Value: "TS:Fixed:Rick",
        },
      ],
      Slug: "misobj_skintag_fixed_c020",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe5",
  },
  misobj_skintag_fixed_c019: {
    slug: "misobj_skintag_fixed_c019",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Morty",
          Value: "TS:Fixed:Morty",
        },
      ],
      Slug: "misobj_skintag_fixed_c019",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe6",
  },
  misobj_skintag_fixed_c018: {
    slug: "misobj_skintag_fixed_c018",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Marvin",
          Value: "TS:Fixed:Marvin",
        },
      ],
      Slug: "misobj_skintag_fixed_c018",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe7",
  },
  misobj_skintag_fixed_c017: {
    slug: "misobj_skintag_fixed_c017",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:IronGiant",
          Value: "TS:Fixed:IronGiant",
        },
      ],
      Slug: "misobj_skintag_fixed_c017",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe8",
  },
  misobj_skintag_fixed_c016: {
    slug: "misobj_skintag_fixed_c016",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:LeBron",
          Value: "TS:Fixed:LeBron",
        },
      ],
      Slug: "misobj_skintag_fixed_c016",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fe9",
  },
  misobj_skintag_fixed_c015: {
    slug: "misobj_skintag_fixed_c015",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Taz",
          Value: "TS:Fixed:Taz",
        },
      ],
      Slug: "misobj_skintag_fixed_c015",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fea",
  },
  misobj_skintag_fixed_c014: {
    slug: "misobj_skintag_fixed_c014",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Velma",
          Value: "TS:Fixed:Velma",
        },
      ],
      Slug: "misobj_skintag_fixed_c014",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294feb",
  },
  misobj_skintag_fixed_c013: {
    slug: "misobj_skintag_fixed_c013",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Finn",
          Value: "TS:Fixed:Finn",
        },
      ],
      Slug: "misobj_skintag_fixed_c013",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fec",
  },
  misobj_skintag_fixed_c012: {
    slug: "misobj_skintag_fixed_c012",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Garnet",
          Value: "TS:Fixed:Garnet",
        },
      ],
      Slug: "misobj_skintag_fixed_c012",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fed",
  },
  misobj_skintag_fixed_c011: {
    slug: "misobj_skintag_fixed_c011",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Steven",
          Value: "TS:Fixed:Steven",
        },
      ],
      Slug: "misobj_skintag_fixed_c011",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fee",
  },
  misobj_skintag_fixed_c010: {
    slug: "misobj_skintag_fixed_c010",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:TomAndJerry",
          Value: "TS:Fixed:TomAndJerry",
        },
      ],
      Slug: "misobj_skintag_fixed_c010",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294fef",
  },
  misobj_skintag_fixed_c009: {
    slug: "misobj_skintag_fixed_c009",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Reindog",
          Value: "TS:Fixed:Reindog",
        },
      ],
      Slug: "misobj_skintag_fixed_c009",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff0",
  },
  misobj_skintag_fixed_c008: {
    slug: "misobj_skintag_fixed_c008",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:HarleyQuinn",
          Value: "TS:Fixed:HarleyQuinn",
        },
      ],
      Slug: "misobj_skintag_fixed_c008",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff1",
  },
  misobj_skintag_fixed_c007: {
    slug: "misobj_skintag_fixed_c007",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:BugsBunny",
          Value: "TS:Fixed:BugsBunny",
        },
      ],
      Slug: "misobj_skintag_fixed_c007",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff2",
  },
  misobj_skintag_fixed_c006: {
    slug: "misobj_skintag_fixed_c006",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Arya",
          Value: "TS:Fixed:Arya",
        },
      ],
      Slug: "misobj_skintag_fixed_c006",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff3",
  },
  misobj_skintag_fixed_c005: {
    slug: "misobj_skintag_fixed_c005",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Jake",
          Value: "TS:Fixed:Jake",
        },
      ],
      Slug: "misobj_skintag_fixed_c005",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff4",
  },
  misobj_skintag_fixed_c003: {
    slug: "misobj_skintag_fixed_c003",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Superman",
          Value: "TS:Fixed:Superman",
        },
      ],
      Slug: "misobj_skintag_fixed_c003",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff5",
  },
  misobj_skintag_fixed_c002: {
    slug: "misobj_skintag_fixed_c002",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Shaggy",
          Value: "TS:Fixed:Shaggy",
        },
      ],
      Slug: "misobj_skintag_fixed_c002",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff6",
  },
  misobj_skintag_fixed_c001: {
    slug: "misobj_skintag_fixed_c001",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:WonderWoman",
          Value: "TS:Fixed:WonderWoman",
        },
      ],
      Slug: "misobj_skintag_fixed_c001",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff7",
  },
  misobj_reflect_c005: {
    slug: "misobj_reflect_c005",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectilesReflected",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_reflect_c005",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff8",
  },
  misobj_bubblestack_c011: {
    slug: "misobj_bubblestack_c011",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Steven:Bubblestack",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_bubblestack_c011",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ff9",
  },
  misobj_skintag_fixed_c027_s3: {
    slug: "misobj_skintag_fixed_c027_s3",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Nubia",
          Value: "TS:Fixed:Nubia",
        },
      ],
      Slug: "misobj_skintag_fixed_c027_s3",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1733850324,
    },
    updated_at: {
      _hydra_unix_date: 1733850324,
    },
    id: "675874d45ca68abece294ffa",
  },
  misobj_shieldbreak: {
    slug: "misobj_shieldbreak",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalShieldBreaksFromShieldBreaker",
          Operator: "+=",
          SelectedValue: "Integer",
        },
      ],
      Slug: "misobj_shieldbreak",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1734455149,
    },
    updated_at: {
      _hydra_unix_date: 1734455149,
    },
    id: "6761af6d4d9418fffefb6d96",
  },
  misobj_loveleashally_eitheror: {
    slug: "misobj_loveleashally_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Reindog:LoveLeashAlly",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Reindog",
          Value: "TS:Fixed:Reindog",
        },
      ],
      Slug: "misobj_loveleashally_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f13f",
  },
  misobj_hitsidespecial_c006_eitheror: {
    slug: "misobj_hitsidespecial_c006_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Arya",
          Value: "TS:Fixed:Arya",
        },
      ],
      Slug: "misobj_hitsidespecial_c006_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f140",
  },
  misobj_debuffscleansed_eitheror: {
    slug: "misobj_debuffscleansed_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:DebuffsCleansed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Nubia",
          Value: "TS:Fixed:Nubia",
        },
      ],
      Slug: "misobj_debuffscleansed_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f141",
  },
  misobj_debuffscleansedeitheror: {
    slug: "misobj_debuffscleansedeitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:DebuffsCleansed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:WonderWoman",
          Value: "TS:Fixed:WonderWoman",
        },
      ],
      Slug: "misobj_debuffscleansedeitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f142",
  },
  misobj_bugssandwichheal_eitheror: {
    slug: "misobj_bugssandwichheal_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Character:BugsBunny:HealSandwich",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:BugsBunny",
          Value: "TS:Fixed:BugsBunny",
        },
      ],
      Slug: "misobj_bugssandwichheal_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f143",
  },
  misobj_rift_blockprojectiles_eitheror: {
    slug: "misobj_rift_blockprojectiles_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectilesBlocked",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Stripe",
          Value: "TS:Fixed:Stripe",
        },
      ],
      Slug: "misobj_rift_blockprojectiles_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f144",
  },
  misobj_c003_eitheror: {
    slug: "misobj_c003_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideGroundSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Superman",
          Value: "TS:Fixed:Superman",
        },
      ],
      Slug: "misobj_c003_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f145",
  },
  misobj_silence_c023a_eitheror: {
    slug: "misobj_silence_c023a_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Silence",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Gizmo",
          Value: "TS:Fixed:Gizmo",
        },
      ],
      Slug: "misobj_silence_c023a_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f146",
  },
  misobj_shocked_gauntlet_eitheror: {
    slug: "misobj_shocked_gauntlet_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Enemies:BuffApplied:Shocked",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Batman",
          Value: "TS:Fixed:Batman",
        },
      ],
      Slug: "misobj_shocked_gauntlet_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f147",
  },
  misobj_shaggy_rage_eitheror: {
    slug: "misobj_shaggy_rage_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Shaggy:EnragedAttackUsed",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Shaggy",
          Value: "TS:Fixed:Shaggy",
        },
      ],
      Slug: "misobj_shaggy_rage_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f148",
  },
  misobj_meditate_c026_eitheror: {
    slug: "misobj_meditate_c026_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalGreyHealthReceived",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:SamuraiJack",
          Value: "TS:Fixed:SamuraiJack",
        },
      ],
      Slug: "misobj_meditate_c026_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f149",
  },
  misobj_maxdance_c012_eitheror: {
    slug: "misobj_maxdance_c012_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Garnet:FullBuff",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Garnet",
          Value: "TS:Fixed:Garnet",
        },
      ],
      Slug: "misobj_maxdance_c012_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f14a",
  },
  misobj_grab_c030_eitheror: {
    slug: "misobj_grab_c030_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalSideSpecialsHit",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:PowerpuffGirls",
          Value: "TS:Fixed:PowerpuffGirls",
        },
      ],
      Slug: "misobj_grab_c030_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f14b",
  },
  misobj_bubblestack_c011_eitheror: {
    slug: "misobj_bubblestack_c011_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Steven:Bubblestack",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Steven",
          Value: "TS:Fixed:Steven",
        },
      ],
      Slug: "misobj_bubblestack_c011_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f14c",
  },
  misobj_bombsave_c008_eitheror: {
    slug: "misobj_bombsave_c008_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Fighter:Harley:BombSave",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:HarleyQuinn",
          Value: "TS:Fixed:HarleyQuinn",
        },
      ],
      Slug: "misobj_bombsave_c008_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f14d",
  },
  misobj_reflect_c010eitheror: {
    slug: "misobj_reflect_c010eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectilesReflected",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:TomAndJerry",
          Value: "TS:Fixed:TomAndJerry",
        },
      ],
      Slug: "misobj_reflect_c010eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f14e",
  },
  misobj_reflect_c005_eitheror: {
    slug: "misobj_reflect_c005_eitheror",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Stat:Game:Character:TotalProjectilesReflected",
          Operator: "+=",
          SelectedValue: "Integer",
        },
        {
          GameplayTag: "Objective:Match:Tag:Skin",
          Operator: "==",
          SelectedValue: "GameplayTag",
          TagValue: "TS:Fixed:Jake",
          Value: "TS:Fixed:Jake",
        },
      ],
      Slug: "misobj_reflect_c005_eitheror",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1738688913,
    },
    updated_at: {
      _hydra_unix_date: 1738688913,
    },
    id: "67a249910eb24e880662f14f",
  },
  misobj_raceplace_top4: {
    slug: "misobj_raceplace_top4",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:RacePlacement",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 2,
        },
      ],
      Slug: "misobj_raceplace_top4",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1742919742,
    },
    updated_at: {
      _hydra_unix_date: 1742919742,
    },
    id: "67e2d83e00593978d03ca8ba",
  },
  misobj_raceplace_top2: {
    slug: "misobj_raceplace_top2",
    global_configuration_type_slug: "mission-objectives",
    ui_editor_type: null,
    data: {
      AssetBundleData: {
        Bundles: [],
      },
      bIsEnabled: true,
      ObjectiveFlags: [
        {
          GameplayTag: "Objective:Match:Special:RacePlacement",
          Operator: ">=",
          SelectedValue: "Integer",
          Value: 4,
        },
      ],
      Slug: "misobj_raceplace_top2",
    },
    private_data: null,
    created_at: {
      _hydra_unix_date: 1742919742,
    },
    updated_at: {
      _hydra_unix_date: 1742919742,
    },
    id: "67e2d83e00593978d03ca8bb",
  },
};
