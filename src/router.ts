//* AUTO GENERATED */
import express, { Request, Response } from "express";
import { MVSQueries } from "./interfaces/queries_types";
import * as h from "./handlers";
import { batchMiddleware } from "./middleware/batchMiddleware";

interface MVSParams {
  id: string;
}

const router = express.Router();
router.post("/access", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleAccess(req, res);
});

router.put("/accounts/wb_network/bulk", (req: Request<{}, {}, {}, MVSQueries.Accounts_wb_network_bulk_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleAccounts_wb_network_bulk(req, res);
});

router.put("/batch", batchMiddleware, (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleBatch(req, res);
});

router.get("/commerce/products", (req: Request<{}, {}, {}, MVSQueries.Commerce_products_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleCommerce_products(req, res);
});

router.get("/commerce/purchases/me", (req: Request<{}, {}, {}, MVSQueries.Commerce_purchases_me_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleCommerce_purchases_me(req, res);
});

router.get("/commerce/steam/mtx_user_info/me", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleCommerce_steam_mtx_user_info_me(req, res);
});

router.post(
  "/datarouter/api/v1/public/data/clients",
  (req: Request<{}, {}, {}, MVSQueries.Datarouter_api_v1_public_data_clients_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleDatarouter_api_v1_public_data_clients(req, res);
  }
);

router.put("/drives/multiversus/sync", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleDrives_multiversus_sync(req, res);
});

router.get("/file_storage", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage(req, res);
});

router.get("/file_storage/beginnermode-carousel-keyart", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_beginnermode_carousel_keyart(req, res);
});

router.get("/file_storage/beginnermode-carousel-thumbnail", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_beginnermode_carousel_thumbnail(req, res);
});

router.get("/file_storage/harley-rift-s5-keyart", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_harley_rift_s5_keyart(req, res);
});

router.get("/file_storage/harley-rift-s5-thumbnail", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_harley_rift_s5_thumbnail(req, res);
});

router.get("/file_storage/s5-bp-carousel-keyart", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_s5_bp_carousel_keyart(req, res);
});

router.get("/file_storage/s5-bp-carousel-thumbnail", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_s5_bp_carousel_thumbnail(req, res);
});

router.get("/file_storage/t-discord-qa-carousel-keyart", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_t_discord_qa_carousel_keyart(req, res);
});

router.get("/file_storage/t-discord-qa-carousel-thumbnail", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_t_discord_qa_carousel_thumbnail(req, res);
});

router.get("/file_storage/wonderwoman-arena-keyart", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_wonderwoman_arena_keyart(req, res);
});

router.get("/file_storage/wonderwoman-arena-thumbnail", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFile_storage_wonderwoman_arena_thumbnail(req, res);
});

router.get("/friends/me", (req: Request<{}, {}, {}, MVSQueries.Friends_me_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFriends_me(req, res);
});

router.get("/friends/me/invitations/incoming", (req: Request<{}, {}, {}, MVSQueries.Friends_me_invitations_incoming_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFriends_me_invitations_incoming(req, res);
});

router.get("/friends/me/invitations/outgoing", (req: Request<{}, {}, {}, MVSQueries.Friends_me_invitations_outgoing_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleFriends_me_invitations_outgoing(req, res);
});

router.get(
  "/global_configuration_types/calendarflags/global_configurations",
  (req: Request<{}, {}, {}, MVSQueries.Global_configuration_types_calendarflags_global_configurations_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleGlobal_configuration_types_calendarflags_global_configurations(req, res);
  }
);

router.get(
  "/global_configuration_types/wwshopconfiguration/global_configurations",
  (req: Request<{}, {}, {}, MVSQueries.Global_configuration_types_wwshopconfiguration_global_configurations_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleGlobal_configuration_types_wwshopconfiguration_global_configurations(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/account-cosmetics-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_account_cosmetics_variant_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/battlepass-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_battlepass_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_battlepass_variant_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/currency-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_currency_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_currency_variant_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/fighter-road-layout/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_fighter_road_layout_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_fighter_road_layout_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/fighter-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_fighter_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_fighter_variant_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/main-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_main_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_main_variant_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/prestige-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_prestige_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_prestige_variant_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/rift-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_rift_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_rift_variant_id(req, res);
  }
);

router.get(
  "/layout/dokken-layout-type/personalized/skin-variant/:id",
  (req: Request<MVSParams, {}, {}, MVSQueries.Layout_dokken_layout_type_personalized_skin_variant_id_QUERY>, res: Response) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_skin_variant_id(req, res);
  }
);

router.put("/matches/:id", (req: Request<MVSParams, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleMatches_id(req, res);
});

router.get("/matches/all/:id", (req: Request<MVSParams, {}, {}, MVSQueries.Matches_all_id_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleMatches_all_id(req, res);
});

router.post("/matches/matchmaking/1v1-retail/request", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleMatches_matchmaking_1v1_retail_request(req, res);
});

router.get("/objects/preferences/unique/:id/:id1", (req: Request<MVSParams, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleObjects_preferences_unique_id_id1(req, res);
});

router.put("/profiles/:id/inventory", (req: Request<MVSParams, {}, {}, MVSQueries.Profiles_id_inventory_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleProfiles_id_inventory(req, res);
});

router.put("/profiles/bulk", (req: Request<{}, {}, {}, MVSQueries.Profiles_bulk_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleProfiles_bulk(req, res);
});

router.post("/sessions/auth/token", (req: Request<{}, {}, {}, MVSQueries.Sessions_auth_token_QUERY>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSessions_auth_token(req, res);
});

router.get("/social/me/blocked", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSocial_me_blocked(req, res);
});

router.post("/ssc/invoke/attempt_daily_refresh", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_attempt_daily_refresh(req, res);
});

router.post("/ssc/invoke/claim_mission_rewards", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_claim_mission_rewards(req, res);
});

router.put("/ssc/invoke/create_party_lobby", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_create_party_lobby(req, res);
});

router.put("/ssc/invoke/game_launch_event", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_game_launch_event(req, res);
});

router.get("/ssc/invoke/get_calendar_events", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_get_calendar_events(req, res);
});

router.get("/ssc/invoke/get_country_code", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_get_country_code(req, res);
});

router.get("/ssc/invoke/get_equipped_cosmetics", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_get_equipped_cosmetics(req, res);
});

router.get("/ssc/invoke/get_gm_leaderboards", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_get_gm_leaderboards(req, res);
});

router.get("/ssc/invoke/get_hiss_calendar_events", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_get_hiss_calendar_events(req, res);
});

router.get("/ssc/invoke/get_milestone_reward_tracks", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_get_milestone_reward_tracks(req, res);
});

router.post("/ssc/invoke/get_or_create_mission_object", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_get_or_create_mission_object(req, res);
});

router.put("/ssc/invoke/hiss_amalgamation", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_hiss_amalgamation(req, res);
});

router.get("/ssc/invoke/load_rifts", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_load_rifts(req, res);
});

router.get("/ssc/invoke/perks_get_all_pages", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_perks_get_all_pages(req, res);
});

router.put("/ssc/invoke/perks_lock", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_perks_lock(req, res);
});

router.get("/ssc/invoke/ranked_data", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_ranked_data(req, res);
});

router.put("/ssc/invoke/rematch_decline", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_rematch_decline(req, res);
});

router.put("/ssc/invoke/set_lobby_joinable", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_set_lobby_joinable(req, res);
});

router.put("/ssc/invoke/set_ready_for_lobby", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_set_ready_for_lobby(req, res);
});

router.put("/ssc/invoke/submit_end_of_match_stats", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_submit_end_of_match_stats(req, res);
});

router.put("/ssc/invoke/toast_player", (req: Request<{}, {}, {}, {}>, res: Response) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleSsc_invoke_toast_player(req, res);
});

export default router;
