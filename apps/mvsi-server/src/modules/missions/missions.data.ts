export const create_mission_static_data = (accountId: string) => ({
  updated_at: { _hydra_unix_date: 1742223633 },
  owner_id: accountId,
  unique_key: "missions",
  object_type_slug: "player-missions",
  server_data: {
    MissionControllerContainers: {
      miscon_ftue: {
        MissionControllers: {
          misctl_ftue: {
            Missions: [
              {
                mis_ftue_play_rift_matches: {
                  MissionObjectives: [{ Slug: "misobj_playmatch", Progress: 2 }],
                  MissionGuid: "df977cf0-853d-4fc1-805d-0bfac4dbcca4",
                },
              },
              {
                mis_ftue_rift_boss: {
                  MissionObjectives: [{ Slug: "misobj_match_rift_bossnodecomplete", Progress: 0 }],
                  MissionGuid: "423c3d5f-a45a-4207-bf56-2ef6b5739441",
                },
              },
              {
                mis_ftue_rift_guest_fighter: {
                  MissionObjectives: [{ Slug: "misobj_rift_guestfighter", Progress: 2 }],
                  MissionGuid: "36d66526-1bd9-4e54-b4cd-733ee87851a7",
                },
              },
              {
                mis_ftue_rift_break_targets: {
                  MissionObjectives: [{ Slug: "misobj_targets_destroyed", Progress: 0 }],
                  MissionGuid: "e5deabcb-fd19-422c-b94b-53e4f7f0d855",
                },
              },
              {
                mis_ftue_rift_friend_partner: {
                  MissionObjectives: [{ Slug: "misobj_PartnerIsFriend", Progress: 0 }],
                  MissionGuid: "973f6b5a-9cbd-4aff-b0ac-551ff58d4a12",
                },
              },
              {
                mis_ftue_rift_complete_all_node_missions_for_rift: {
                  MissionObjectives: [{ Slug: "misobj_rift_completeallnodemissions", Progress: 0 }],
                  MissionGuid: "859fb80d-36ea-48a1-92db-3831022d6a29",
                },
              },
              {
                mis_ftue_rift_beat_boss_missions_completed: {
                  MissionObjectives: [{ Slug: "misobj_match_rift_bossnodecomplete", Progress: 0 }],
                  MissionGuid: "444fe5b8-0f0b-4780-89cc-a21af2654ba9",
                },
              },
              {
                mis_ftue_rift_collect_rift_cauldron: {
                  MissionObjectives: [{ Slug: "misobj_rift_cauldroncomleted", Progress: 0 }],
                  MissionGuid: "bb5c2a9d-d7de-4919-9877-05073466a449",
                },
              },
            ],
            UsedMissions: [
              "mis_ftue_play_rift_matches",
              "mis_ftue_complete_rift_tutorial_nodes",
              "mis_ftue_rift_boss",
              "mis_ftue_match_play_as_bruiser",
              "mis_match_play_type_2v2",
              "mis_ftue_rift_guest_fighter",
              "mis_ftue_rift_break_targets",
              "mis_ftue_rift_friend_partner",
              "mis_ftue_rift_complete_all_node_missions_for_rift",
              "mis_ftue_upgrade_a_gem",
              "mis_ftue_rift_beat_boss_missions_completed",
              "mis_ftue_rift_collect_rift_cauldron",
              "mis_ftue_play_scooby_do_character",
              "mis_ftue_prestige_store",
            ],
          },
          misctl_ftue_daily_logins: {
            Missions: [],
            UsedMissions: [
              "mis_ftue_login_duplicate_1",
              "mis_ftue_login_twodays",
              "mis_ftue_login_three_days",
              "mis_ftue_login_four_days",
              "mis_ftue_login_five_days",
              "mis_ftue_login_six_days",
              "mis_ftue_login_seven_days",
            ],
          },
          misctl_ftue_timed: {
            Missions: [
              {
                mis_ftue_play_team_friend_pvp: {
                  MissionObjectives: [{ Slug: "misobj_PartnerIsFriend", Progress: 0 }],
                  MissionGuid: "773049df-3c1c-43db-8219-537651344b2e",
                },
              },
            ],
            UsedMissions: [
              "mis_ftue_match_play_pvp_2v2",
              "mis_ftue_deal_damage_pvp",
              "mis_ftue_play_team_friend_pvp",
              "mis_ftue_ringout_pvp",
              "mis_ftue_win_pvp_match",
              "mis_deal_damage_pvp_long",
              "mis_ftue_win_pvp_match_long",
            ],
          },
        },
      },
      miscon_unlockable_c003: {
        MissionControllers: {
          misctl_unlockable_c003: {
            Missions: [
              {
                mis_dealalldamage_c003: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "4990eb42-bfc1-4631-a87f-05e6fc4c9f7e",
                },
                mis_sniper_c003: {
                  MissionObjectives: [{ Slug: "misobj_totalsidegroundspecialhit", Progress: 0 }],
                  MissionGuid: "8149f2b7-64a3-4412-b603-749b3f10b0c8",
                },
                mis_airupspecial_c003: {
                  MissionObjectives: [{ Slug: "misobj_hitupspecialair", Progress: 0 }],
                  MissionGuid: "6d527a15-341c-4de9-bc02-fba569b8933b",
                },
                mis_ringout_c003: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "923b90ee-4cfe-4ff6-aebd-1077ca858cec",
                },
                mis_usetaunts_c003: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "a6b33734-8268-43bb-af36-88c6c2d097a2",
                },
              },
            ],
            UsedMissions: [
              "mis_dealalldamage_c003",
              "mis_sniper_c003",
              "mis_airupspecial_c003",
              "mis_ringout_c003",
              "mis_usetaunts_c003",
            ],
          },
        },
      },
      miscon_unlockable_c019: {
        MissionControllers: {
          misctl_unlockable_c019: {
            Missions: [
              {
                mis_dealalldamage_c019: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "4f34842e-693f-423f-b852-d7a43da90609",
                },
                mis_saveally_c019: {
                  MissionObjectives: [{ Slug: "misobj_saveally_c019", Progress: 0 }],
                  MissionGuid: "0d5519b2-21c2-4b9a-900d-a6198f340576",
                },
                mis_splitnade_c019: {
                  MissionObjectives: [{ Slug: "misobj_splitnade_c019", Progress: 0 }],
                  MissionGuid: "e2e3e651-9b03-444d-815e-4722dcfeda77",
                },
                mis_ringout_c019: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "088d79d1-69c0-44ee-bb7c-443040330595",
                },
                mis_usetaunts_c019: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "a72bd4eb-5c5f-472d-ad51-ba0ca2a641ff",
                },
              },
            ],
            UsedMissions: [
              "mis_dealalldamage_c019",
              "mis_saveally_c019",
              "mis_splitnade_c019",
              "mis_ringout_c019",
              "mis_usetaunts_c019",
            ],
          },
        },
      },
      miscon_unlockable_c016: {
        MissionControllers: {
          misctl_unlockable_c016: {
            Missions: [
              {
                mis_allypass_c016: {
                  MissionObjectives: [{ Slug: "misobj_lebron_pass", Progress: 0 }],
                  MissionGuid: "2898398b-7b4a-439c-b9bf-8e4e3712578b",
                },
                mis_defense_c016: {
                  MissionObjectives: [{ Slug: "misobj_lebron_defense", Progress: 0 }],
                  MissionGuid: "c49043db-9025-456b-90d4-b8c4f65a618a",
                },
                mis_ringout_c016: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 3 }],
                  MissionGuid: "b5c59038-ecff-4b33-a25f-a5e57d3c637f",
                },
                mis_usetaunts_c016: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "d49ea2f1-3dcb-4446-8aa7-77c51a5da75e",
                },
              },
            ],
            UsedMissions: [
              "mis_dealalldamage_c016",
              "mis_allypass_c016",
              "mis_defense_c016",
              "mis_ringout_c016",
              "mis_usetaunts_c016",
            ],
          },
        },
      },
      miscon_unlockable_c011: {
        MissionControllers: {
          misctl_unlockable_c011: {
            Missions: [
              {
                mis_dealalldamage_c011: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "9f78c3f2-7c40-4de1-86ce-c43938e8159e",
                },
                MIS_Bubble_C011: {
                  MissionObjectives: [{ Slug: "misobj_bubble_c011", Progress: 0 }],
                  MissionGuid: "ea29c501-5218-4b74-ae3e-f39a617d08dc",
                },
                mis_bubbleboy_c011: {
                  MissionObjectives: [{ Slug: "misobj_bubblestack_c011", Progress: 0 }],
                  MissionGuid: "653cdebf-31d4-4f59-adbe-3df186e6ca64",
                },
                mis_ringout_c011: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "74d670d7-a312-4b20-96b9-ece371b77dc8",
                },
                mis_usetaunts_c011: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "e58aef94-b816-4966-827a-a468d3e7e24a",
                },
              },
            ],
            UsedMissions: [
              "mis_dealalldamage_c011",
              "MIS_Bubble_C011",
              "mis_bubbleboy_c011",
              "mis_ringout_c011",
              "mis_usetaunts_c011",
            ],
          },
        },
      },
      miscon_battlepassdaily_s5: {
        MissionControllers: {
          misctl_battlepass_daily_base_new: {
            Missions: [
              {
                mis_stats_dealalldamage_pvp: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "750e4070-2fa9-4a79-81bb-382f9eb560c1",
                },
              },
              {
                mis_stats_dealalldamage_pvp: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "b550e86f-1173-4764-9697-bb42ed732a9b",
                },
              },
            ],
            UsedMissions: ["mis_stats_dealalldamage_pvp", "mis_stats_dealalldamage_pvp"],
          },
          misctl_battlepass_daily_base_pve_new: {
            Missions: [
              {
                mis_stats_dealalldamage_pve: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "c6695f64-479d-4b9d-a561-d44c99a226d2",
                },
              },
              {
                mis_stats_dealalldamage_pve: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "280f3b83-2238-467f-8488-0eee93073526",
                },
              },
              {
                mis_stats_dealalldamage_pve: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "93b251f0-9510-4926-82b9-6fde3c6934c9",
                },
              },
            ],
            UsedMissions: [
              "mis_stats_dealalldamage_pve",
              "mis_stats_dealalldamage_pve",
              "mis_stats_dealalldamage_pve",
            ],
          },
          misctl_battlepass_daily_base_ffa_new: {
            Missions: [
              {
                mis_stats_dealalldamage_ffa: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "f1f8ff3e-bef9-4d05-bda9-747b1ebca1f8",
                },
              },
              {
                mis_stats_dealalldamage_ffa: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "8a404929-236e-4cb8-b1fd-c55756929897",
                },
              },
              {
                mis_stats_dealalldamage_ffa: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "7d4b46dc-eb69-4794-b6f0-6700b765f648",
                },
              },
            ],
            UsedMissions: [
              "mis_stats_dealalldamage_ffa",
              "mis_stats_dealalldamage_ffa",
              "mis_stats_dealalldamage_ffa",
            ],
          },
          misctl_battlepass_daily_new_1: {
            Missions: [
              {
                mis_totalupringouts_assassin: {
                  MissionObjectives: [{ Slug: "misobj_up_ringout", Progress: 0 }],
                  MissionGuid: "453a1e1a-6fc1-4939-ad7d-eb42039d8906",
                },
              },
              {
                mis_stats_dealalldamage_assassin: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "3313d2ef-ffe3-4872-80c1-04236af81851",
                },
              },
              {
                mis_usetaunts_pve_mage: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "0d8ce2c3-3423-4943-82e9-987bad6728fe",
                },
              },
              {
                mis_stats_dealalldamage_mage: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "8f41be56-2f23-4e1a-9d9e-e3f137202091",
                },
              },
              {
                mis_dealspecialdamage: {
                  MissionObjectives: [
                    { Slug: "misobj_spec_damage_dealt", Progress: 231.510009765625 },
                  ],
                  MissionGuid: "62d57fc6-1983-486e-9758-74de5300afb5",
                },
              },
              {
                mis_dealattackdamage: {
                  MissionObjectives: [{ Slug: "misobj_atk_damage_dealt", Progress: 0 }],
                  MissionGuid: "d1e9fc68-f464-4b81-853d-45cb185de4df",
                },
              },
              {
                mis_dealalldamage: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "e941eb26-7149-4770-971a-e0732a1766dd",
                },
              },
            ],
            UsedMissions: [
              "mis_totalupringouts_assassin",
              "mis_stats_dealalldamage_assassin",
              "mis_usetaunts_pve_mage",
              "mis_stats_dealalldamage_mage",
              "mis_dealspecialdamage",
              "mis_dealattackdamage",
              "mis_dealalldamage",
            ],
          },
          misctl_battlepass_daily_new_2: {
            Missions: [
              {
                mis_ringout_2v2: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 4 }],
                  MissionGuid: "52002470-04c0-4f60-94c6-839353b3316c",
                },
              },
              {
                mis_ringout_bruiser: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 6 }],
                  MissionGuid: "82a30351-74a7-441a-8ba8-f50aac7bad32",
                },
              },
              {
                mis_stats_dealalldamage_tank: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "c1b8f882-9213-4a58-a836-d3c2a165de3f",
                },
              },
              {
                mis_ringout_with_less_damage_tank_short: {
                  MissionObjectives: [{ Slug: "misobj_ro_more_damage", Progress: 0 }],
                  MissionGuid: "7a7a2e4a-5256-45da-b697-042b31997a7d",
                },
              },
              {
                mis_stats_dealalldamage_bruiser: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "23455ce7-e5d4-4246-a247-1c0c62c9ea6c",
                },
              },
            ],
            UsedMissions: [
              "mis_ringout_2v2",
              "mis_ringout_bruiser",
              "mis_stats_dealalldamage_tank",
              "mis_ringout_with_less_damage_tank_short",
              "mis_stats_dealalldamage_bruiser",
            ],
          },
          misctl_battlepass_daily_hard_new: {
            Missions: [
              {
                mis_stats_total_up_specials_hit_shorth: {
                  MissionObjectives: [{ Slug: "misobj_hit_up_special", Progress: 13 }],
                  MissionGuid: "e512b790-98e8-4868-9060-b718313a0c53",
                },
              },
              {
                mis_stats_total_side_specials_hit_shorth: {
                  MissionObjectives: [{ Slug: "misobj_hit_side_special", Progress: 5 }],
                  MissionGuid: "515b67b3-0b84-49b9-928f-00fb9cc40b60",
                },
              },
              {
                mis_stats_total_attacks_dodged_shorth: {
                  MissionObjectives: [{ Slug: "misobj_dodge", Progress: 0 }],
                  MissionGuid: "029a9e80-6cf4-4a17-838b-70cabfccb014",
                },
              },
              {
                mis_stats_total_down_normals_hith: {
                  MissionObjectives: [{ Slug: "misobj_hit_down_attack", Progress: 0 }],
                  MissionGuid: "5b71c6ce-5d70-46d3-8130-54640c06d84c",
                },
              },
            ],
            UsedMissions: [
              "mis_stats_total_up_specials_hit_shorth",
              "mis_stats_total_side_specials_hit_shorth",
              "mis_stats_total_attacks_dodged_shorth",
              "mis_stats_total_down_normals_hith",
            ],
          },
        },
      },
      miscon_battlepassweekly_s5: {
        MissionControllers: {
          misctl_battlepass_weekly_new: {
            Missions: [
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "b9d292ac-b7cc-4cd3-bff1-93f4ad61e852",
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 1000 }],
                  MissionGuid: "dacbf8b7-e9d1-4425-b6d7-d6986e9d316a",
                  bIsClaimable: true,
                },
              },
              {
                mis_dealspecialdamage_adventuretime_weekly: {
                  MissionObjectives: [{ Slug: "misobj_spec_damage_dealt", Progress: 0 }],
                  MissionGuid: "193a3ae0-b57c-4809-b813-5434600062fd",
                },
              },
              {
                mis_dealattackdamage_looney_weekly: {
                  MissionObjectives: [{ Slug: "misobj_atk_damage_dealt", Progress: 0 }],
                  MissionGuid: "29131d8e-faaf-4560-bd8f-d0bf93f52d6f",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "c3115578-3cc4-4746-9ba2-9b10c88a129a",
                },
              },
              {
                mis_ringout_pvp_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 12 }],
                  MissionGuid: "01726762-c913-419e-ba1b-8933ae85bea9",
                  bIsClaimable: true,
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 1000 }],
                  MissionGuid: "c60c7ed1-de6a-47c5-a315-ac028ee89155",
                  bIsClaimable: true,
                },
              },
              {
                mis_dealspecialdamage_adventuretime_weekly: {
                  MissionObjectives: [{ Slug: "misobj_spec_damage_dealt", Progress: 0 }],
                  MissionGuid: "df5880c3-3518-43ec-b490-521a894a6ca9",
                },
              },
              {
                mis_dealattackdamage_looney_weekly: {
                  MissionObjectives: [{ Slug: "misobj_atk_damage_dealt", Progress: 0 }],
                  MissionGuid: "7e76a93c-fdf8-421d-b5ff-db30f3fc14ca",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "b82d511d-f8b2-4673-81ab-4b6a22fb925b",
                },
              },
              {
                mis_dealspecialdamage_adventuretime_weekly: {
                  MissionObjectives: [{ Slug: "misobj_spec_damage_dealt", Progress: 0 }],
                  MissionGuid: "14166773-faf0-4914-8883-0be3807e8b5b",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "23178be4-61ba-4138-9e29-83c63846d929",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "2bd79f4f-fe3d-427a-a493-f8ed321a936a",
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 1000 }],
                  MissionGuid: "537dca20-1a57-4844-856b-cfdcb730caee",
                  bIsClaimable: true,
                },
              },
              {
                mis_dealspecialdamage_adventuretime_weekly: {
                  MissionObjectives: [{ Slug: "misobj_spec_damage_dealt", Progress: 0 }],
                  MissionGuid: "7c877903-dd93-44b0-a11b-e8ef3e173cb5",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "76824952-612c-4f47-a7de-0b8e9bd96670",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "41ea7d6c-8718-4057-8cfa-de198310a89b",
                },
              },
              {
                mis_usetaunts: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "5a9d8608-1921-4b97-a1c0-bf0aee03ad12",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "17914036-58cd-4e50-8cb8-df095c51bee9",
                },
              },
              {
                mis_ringout_pvp_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 12 }],
                  MissionGuid: "0ce253d5-5714-4b21-9ded-f6ebf398665b",
                  bIsClaimable: true,
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 1000 }],
                  MissionGuid: "1bd92e13-818c-41f7-ade8-cdbde655bb4a",
                  bIsClaimable: true,
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 1000 }],
                  MissionGuid: "5f035b36-ea88-48e3-890e-0a5d7bd568cc",
                  bIsClaimable: true,
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "03eb25d9-9f15-40ad-a33e-b5ef6a3c2547",
                },
              },
              {
                mis_ringout_pvp_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 12 }],
                  MissionGuid: "5c680326-1969-43ca-be6a-a6e7a5f0c47b",
                  bIsClaimable: true,
                },
              },
              {
                mis_usetaunts: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "4d8206eb-5774-40d4-9735-5b06b75a6f69",
                },
              },
              {
                mis_ringout_pve_weekly: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "1ac38a8f-4388-4989-bef5-a8a9fb266f5c",
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "1ac31dbf-416d-4044-a2da-860421a765f7",
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "afca088c-bd48-42a9-9b43-b4d967797b96",
                },
              },
              {
                mis_stats_dealalldamage_ffa_weekly: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "51177443-215b-499e-902e-047fd60831b6",
                },
              },
            ],
            UsedMissions: [
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_dealspecialdamage_adventuretime_weekly",
              "mis_dealattackdamage_looney_weekly",
              "mis_ringout_heroic_weekly",
              "mis_hit_up_attack_air_tank_weekly",
              "mis_usetaunts",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_dealspecialdamage_adventuretime_weekly",
              "mis_dealattackdamage_looney_weekly",
              "mis_ringout_heroic_weekly",
              "mis_hit_up_attack_air_tank_weekly",
              "mis_usetaunts",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_dealspecialdamage_adventuretime_weekly",
              "mis_usetaunts",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_dealspecialdamage_adventuretime_weekly",
              "mis_usetaunts",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_usetaunts",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_usetaunts",
              "mis_ringout_pve_weekly",
              "mis_ringout_pvp_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
              "mis_stats_dealalldamage_ffa_weekly",
            ],
          },
        },
      },
      miscon_unlockable_c020: {
        MissionControllers: {
          misctl_unlockable_c020: {
            Missions: [
              {
                mis_dealalldamage_c020: {
                  MissionObjectives: [{ Slug: "misobj_deal_damage", Progress: 0 }],
                  MissionGuid: "ccfe54f2-f89f-4ea7-a82b-28bda35da1b2",
                },
                mis_allyseed_c020: {
                  MissionObjectives: [{ Slug: "misobj_allyseed_c020", Progress: 0 }],
                  MissionGuid: "e30f999c-f5a6-4cb9-b775-780b6c9df11c",
                },
                mis_portalkb_c020: {
                  MissionObjectives: [{ Slug: "misobj_portalkb_c020", Progress: 0 }],
                  MissionGuid: "bec2e091-4a90-4f4d-9490-97091a3693c2",
                },
                mis_ringout_c020: {
                  MissionObjectives: [{ Slug: "misobj_ringout_any", Progress: 0 }],
                  MissionGuid: "eb3a7a0c-39ce-4543-8c90-87fa58e2b967",
                },
                mis_usetaunts_c020: {
                  MissionObjectives: [{ Slug: "misobj_taunt", Progress: 0 }],
                  MissionGuid: "2fc008dd-d76a-4ea2-8a85-da5eee14e1c1",
                },
              },
            ],
            UsedMissions: [
              "mis_dealalldamage_c020",
              "mis_allyseed_c020",
              "mis_portalkb_c020",
              "mis_ringout_c020",
              "mis_usetaunts_c020",
            ],
          },
        },
      },
      "miscon_event_arenas5-3": {
        MissionControllers: {
          "misctl_event_arenas5-3": {
            Missions: [],
            UsedMissions: [
              "mis_winarena",
              "mis_arenatop4",
              "mis_arenaringouts",
              "mis_arenahave50gold",
              "mis_arenainterest",
              "mis_arenaitemlvl2",
              "mis_arenaitemlvl3",
              "mis_arenaplayasassassin",
              "mis_arenaplayasbruiser",
              "mis_arenaplayasmage",
              "mis_arenaplayasrandom",
              "mis_arenaplayastank",
            ],
          },
        },
      },
    },
    ClaimLocks: {},
  },
  created_at: { _hydra_unix_date: 1717084198 },
  aggregates: {},
  calculations: {},
  id: "6658a026eaec8bdf5a91f886",
  owner: {},
  expire_time: null,
  owner_model: "account",
});
