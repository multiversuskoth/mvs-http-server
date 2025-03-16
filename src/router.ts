//* AUTO GENERATED */
import express, { Request, Response } from "express";
import { MVSRequests } from "./interfaces/requests_types";
import { MVSResponses } from "./interfaces/responses_types";
import { MVSQueries } from "./interfaces/queries_types";
import * as h from "./handlers/index";

interface MVSParams {
  id: string;
}

const router = express.Router();
router.post(
  "/access",
  (req: Request<{}, MVSResponses.Access_RESPONSE, MVSRequests.Access_REQUEST, {}>, res: Response<MVSResponses.Access_RESPONSE>) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleAccess(req, res);
  },
);

router.put(
  "/accounts/wb_network/bulk",
  (
    req: Request<
      {},
      MVSResponses.Accounts_wb_network_bulk_RESPONSE,
      MVSRequests.Accounts_wb_network_bulk_REQUEST,
      MVSQueries.Accounts_wb_network_bulk_QUERY
    >,
    res: Response<MVSResponses.Accounts_wb_network_bulk_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleAccounts_wb_network_bulk(req, res);
  },
);

router.put("/batch", (req: Request<{}, MVSResponses.Batch_RESPONSE, MVSRequests.Batch_REQUEST, {}>, res: Response<MVSResponses.Batch_RESPONSE>) => {
  // @ts-ignore TODO : implementation. Remove comment once implemented`
  h.handleBatch(req, res);
});

router.get(
  "/commerce/products",
  (
    req: Request<{}, MVSResponses.Commerce_products_RESPONSE, MVSRequests.Commerce_products_REQUEST, MVSQueries.Commerce_products_QUERY>,
    res: Response<MVSResponses.Commerce_products_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleCommerce_products(req, res);
  },
);

router.get(
  "/commerce/purchases/me",
  (
    req: Request<{}, MVSResponses.Commerce_purchases_me_RESPONSE, MVSRequests.Commerce_purchases_me_REQUEST, MVSQueries.Commerce_purchases_me_QUERY>,
    res: Response<MVSResponses.Commerce_purchases_me_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleCommerce_purchases_me(req, res);
  },
);

router.get(
  "/commerce/steam/mtx_user_info/me",
  (
    req: Request<{}, MVSResponses.Commerce_steam_mtx_user_info_me_RESPONSE, MVSRequests.Commerce_steam_mtx_user_info_me_REQUEST, {}>,
    res: Response<MVSResponses.Commerce_steam_mtx_user_info_me_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleCommerce_steam_mtx_user_info_me(req, res);
  },
);

router.post(
  "/datarouter/api/v1/public/data/clients",
  (
    req: Request<
      {},
      MVSResponses.Datarouter_api_v1_public_data_clients_RESPONSE,
      MVSRequests.Datarouter_api_v1_public_data_clients_REQUEST,
      MVSQueries.Datarouter_api_v1_public_data_clients_QUERY
    >,
    res: Response<MVSResponses.Datarouter_api_v1_public_data_clients_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleDatarouter_api_v1_public_data_clients(req, res);
  },
);

router.put(
  "/drives/multiversus/sync",
  (
    req: Request<{}, MVSResponses.Drives_multiversus_sync_RESPONSE, MVSRequests.Drives_multiversus_sync_REQUEST, {}>,
    res: Response<MVSResponses.Drives_multiversus_sync_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleDrives_multiversus_sync(req, res);
  },
);

router.get(
  "/file_storage",
  (req: Request<{}, MVSResponses.File_storage_RESPONSE, MVSRequests.File_storage_REQUEST, {}>, res: Response<MVSResponses.File_storage_RESPONSE>) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage(req, res);
  },
);

router.get(
  "/file_storage/beginnermode-carousel-keyart",
  (
    req: Request<
      {},
      MVSResponses.File_storage_beginnermode_carousel_keyart_RESPONSE,
      MVSRequests.File_storage_beginnermode_carousel_keyart_REQUEST,
      {}
    >,
    res: Response<MVSResponses.File_storage_beginnermode_carousel_keyart_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_beginnermode_carousel_keyart(req, res);
  },
);

router.get(
  "/file_storage/beginnermode-carousel-thumbnail",
  (
    req: Request<
      {},
      MVSResponses.File_storage_beginnermode_carousel_thumbnail_RESPONSE,
      MVSRequests.File_storage_beginnermode_carousel_thumbnail_REQUEST,
      {}
    >,
    res: Response<MVSResponses.File_storage_beginnermode_carousel_thumbnail_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_beginnermode_carousel_thumbnail(req, res);
  },
);

router.get(
  "/file_storage/harley-rift-s5-keyart",
  (
    req: Request<{}, MVSResponses.File_storage_harley_rift_s5_keyart_RESPONSE, MVSRequests.File_storage_harley_rift_s5_keyart_REQUEST, {}>,
    res: Response<MVSResponses.File_storage_harley_rift_s5_keyart_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_harley_rift_s5_keyart(req, res);
  },
);

router.get(
  "/file_storage/harley-rift-s5-thumbnail",
  (
    req: Request<{}, MVSResponses.File_storage_harley_rift_s5_thumbnail_RESPONSE, MVSRequests.File_storage_harley_rift_s5_thumbnail_REQUEST, {}>,
    res: Response<MVSResponses.File_storage_harley_rift_s5_thumbnail_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_harley_rift_s5_thumbnail(req, res);
  },
);

router.get(
  "/file_storage/s5-bp-carousel-keyart",
  (
    req: Request<{}, MVSResponses.File_storage_s5_bp_carousel_keyart_RESPONSE, MVSRequests.File_storage_s5_bp_carousel_keyart_REQUEST, {}>,
    res: Response<MVSResponses.File_storage_s5_bp_carousel_keyart_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_s5_bp_carousel_keyart(req, res);
  },
);

router.get(
  "/file_storage/s5-bp-carousel-thumbnail",
  (
    req: Request<{}, MVSResponses.File_storage_s5_bp_carousel_thumbnail_RESPONSE, MVSRequests.File_storage_s5_bp_carousel_thumbnail_REQUEST, {}>,
    res: Response<MVSResponses.File_storage_s5_bp_carousel_thumbnail_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_s5_bp_carousel_thumbnail(req, res);
  },
);

router.get(
  "/file_storage/t-discord-qa-carousel-keyart",
  (
    req: Request<
      {},
      MVSResponses.File_storage_t_discord_qa_carousel_keyart_RESPONSE,
      MVSRequests.File_storage_t_discord_qa_carousel_keyart_REQUEST,
      {}
    >,
    res: Response<MVSResponses.File_storage_t_discord_qa_carousel_keyart_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_t_discord_qa_carousel_keyart(req, res);
  },
);

router.get(
  "/file_storage/t-discord-qa-carousel-thumbnail",
  (
    req: Request<
      {},
      MVSResponses.File_storage_t_discord_qa_carousel_thumbnail_RESPONSE,
      MVSRequests.File_storage_t_discord_qa_carousel_thumbnail_REQUEST,
      {}
    >,
    res: Response<MVSResponses.File_storage_t_discord_qa_carousel_thumbnail_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_t_discord_qa_carousel_thumbnail(req, res);
  },
);

router.get(
  "/file_storage/wonderwoman-arena-keyart",
  (
    req: Request<{}, MVSResponses.File_storage_wonderwoman_arena_keyart_RESPONSE, MVSRequests.File_storage_wonderwoman_arena_keyart_REQUEST, {}>,
    res: Response<MVSResponses.File_storage_wonderwoman_arena_keyart_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_wonderwoman_arena_keyart(req, res);
  },
);

router.get(
  "/file_storage/wonderwoman-arena-thumbnail",
  (
    req: Request<
      {},
      MVSResponses.File_storage_wonderwoman_arena_thumbnail_RESPONSE,
      MVSRequests.File_storage_wonderwoman_arena_thumbnail_REQUEST,
      {}
    >,
    res: Response<MVSResponses.File_storage_wonderwoman_arena_thumbnail_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFile_storage_wonderwoman_arena_thumbnail(req, res);
  },
);

router.get(
  "/friends/me",
  (
    req: Request<{}, MVSResponses.Friends_me_RESPONSE, MVSRequests.Friends_me_REQUEST, MVSQueries.Friends_me_QUERY>,
    res: Response<MVSResponses.Friends_me_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFriends_me(req, res);
  },
);

router.get(
  "/friends/me/invitations/incoming",
  (
    req: Request<
      {},
      MVSResponses.Friends_me_invitations_incoming_RESPONSE,
      MVSRequests.Friends_me_invitations_incoming_REQUEST,
      MVSQueries.Friends_me_invitations_incoming_QUERY
    >,
    res: Response<MVSResponses.Friends_me_invitations_incoming_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFriends_me_invitations_incoming(req, res);
  },
);

router.get(
  "/friends/me/invitations/outgoing",
  (
    req: Request<
      {},
      MVSResponses.Friends_me_invitations_outgoing_RESPONSE,
      MVSRequests.Friends_me_invitations_outgoing_REQUEST,
      MVSQueries.Friends_me_invitations_outgoing_QUERY
    >,
    res: Response<MVSResponses.Friends_me_invitations_outgoing_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleFriends_me_invitations_outgoing(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/account-cosmetics-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_account_cosmetics_variant_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/battlepass-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_battlepass_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_battlepass_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_battlepass_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_battlepass_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_battlepass_variant_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/currency-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_currency_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_currency_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_currency_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_currency_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_currency_variant_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/fighter-road-layout/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_fighter_road_layout_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_fighter_road_layout_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_fighter_road_layout_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_fighter_road_layout_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_fighter_road_layout_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/fighter-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_fighter_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_fighter_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_fighter_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_fighter_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_fighter_variant_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/main-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_main_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_main_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_main_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_main_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_main_variant_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/prestige-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_prestige_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_prestige_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_prestige_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_prestige_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_prestige_variant_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/rift-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_rift_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_rift_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_rift_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_rift_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_rift_variant_id(req, res);
  },
);

router.get(
  "/layout/dokken-layout-type/personalized/skin-variant/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Layout_dokken_layout_type_personalized_skin_variant_id_RESPONSE,
      MVSRequests.Layout_dokken_layout_type_personalized_skin_variant_id_REQUEST,
      MVSQueries.Layout_dokken_layout_type_personalized_skin_variant_id_QUERY
    >,
    res: Response<MVSResponses.Layout_dokken_layout_type_personalized_skin_variant_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLayout_dokken_layout_type_personalized_skin_variant_id(req, res);
  },
);

router.put(
  "/leaderboards/bulk/score-and-rank/:id",
  (
    req: Request<MVSParams, MVSResponses.Leaderboards_bulk_score_and_rank_id_RESPONSE, MVSRequests.Leaderboards_bulk_score_and_rank_id_REQUEST, {}>,
    res: Response<MVSResponses.Leaderboards_bulk_score_and_rank_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleLeaderboards_bulk_score_and_rank_id(req, res);
  },
);

router.put(
  "/matches/:id",
  (
    req: Request<MVSParams, MVSResponses.Matches_id_RESPONSE, MVSRequests.Matches_id_REQUEST, {}>,
    res: Response<MVSResponses.Matches_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleMatches_id(req, res);
  },
);

router.get(
  "/matches/all/:id",
  (
    req: Request<MVSParams, MVSResponses.Matches_all_id_RESPONSE, MVSRequests.Matches_all_id_REQUEST, MVSQueries.Matches_all_id_QUERY>,
    res: Response<MVSResponses.Matches_all_id_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleMatches_all_id(req, res);
  },
);

router.post(
  "/matches/matchmaking/1v1-retail/request",
  (
    req: Request<{}, MVSResponses.Matches_matchmaking_1v1_retail_request_RESPONSE, MVSRequests.Matches_matchmaking_1v1_retail_request_REQUEST, {}>,
    res: Response<MVSResponses.Matches_matchmaking_1v1_retail_request_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleMatches_matchmaking_1v1_retail_request(req, res);
  },
);

router.put(
  "/profiles/:id/inventory",
  (
    req: Request<
      MVSParams,
      MVSResponses.Profiles_id_inventory_RESPONSE,
      MVSRequests.Profiles_id_inventory_REQUEST,
      MVSQueries.Profiles_id_inventory_QUERY
    >,
    res: Response<MVSResponses.Profiles_id_inventory_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleProfiles_id_inventory(req, res);
  },
);

router.put(
  "/profiles/bulk",
  (
    req: Request<{}, MVSResponses.Profiles_bulk_RESPONSE, MVSRequests.Profiles_bulk_REQUEST, MVSQueries.Profiles_bulk_QUERY>,
    res: Response<MVSResponses.Profiles_bulk_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleProfiles_bulk(req, res);
  },
);

router.post(
  "/sessions/auth/token",
  (
    req: Request<{}, MVSResponses.Sessions_auth_token_RESPONSE, MVSRequests.Sessions_auth_token_REQUEST, MVSQueries.Sessions_auth_token_QUERY>,
    res: Response<MVSResponses.Sessions_auth_token_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSessions_auth_token(req, res);
  },
);

router.get(
  "/social/me/blocked",
  (
    req: Request<{}, MVSResponses.Social_me_blocked_RESPONSE, MVSRequests.Social_me_blocked_REQUEST, {}>,
    res: Response<MVSResponses.Social_me_blocked_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSocial_me_blocked(req, res);
  },
);

router.post(
  "/ssc/invoke/attempt_daily_refresh",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_attempt_daily_refresh_RESPONSE, MVSRequests.Ssc_invoke_attempt_daily_refresh_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_attempt_daily_refresh_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_attempt_daily_refresh(req, res);
  },
);

router.post(
  "/ssc/invoke/claim_mission_rewards",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_claim_mission_rewards_RESPONSE, MVSRequests.Ssc_invoke_claim_mission_rewards_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_claim_mission_rewards_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_claim_mission_rewards(req, res);
  },
);

router.put(
  "/ssc/invoke/create_party_lobby",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_create_party_lobby_RESPONSE, MVSRequests.Ssc_invoke_create_party_lobby_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_create_party_lobby_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_create_party_lobby(req, res);
  },
);

router.put(
  "/ssc/invoke/game_launch_event",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_game_launch_event_RESPONSE, MVSRequests.Ssc_invoke_game_launch_event_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_game_launch_event_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_game_launch_event(req, res);
  },
);

router.post(
  "/ssc/invoke/get_or_create_mission_object",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_get_or_create_mission_object_RESPONSE, MVSRequests.Ssc_invoke_get_or_create_mission_object_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_get_or_create_mission_object_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_get_or_create_mission_object(req, res);
  },
);

router.put(
  "/ssc/invoke/hiss_amalgamation",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_hiss_amalgamation_RESPONSE, MVSRequests.Ssc_invoke_hiss_amalgamation_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_hiss_amalgamation_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_hiss_amalgamation(req, res);
  },
);

router.put(
  "/ssc/invoke/lock_lobby_loadout",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_lock_lobby_loadout_RESPONSE, MVSRequests.Ssc_invoke_lock_lobby_loadout_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_lock_lobby_loadout_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_lock_lobby_loadout(req, res);
  },
);

router.put(
  "/ssc/invoke/perks_lock",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_perks_lock_RESPONSE, MVSRequests.Ssc_invoke_perks_lock_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_perks_lock_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_perks_lock(req, res);
  },
);

router.put(
  "/ssc/invoke/set_lobby_joinable",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_set_lobby_joinable_RESPONSE, MVSRequests.Ssc_invoke_set_lobby_joinable_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_set_lobby_joinable_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_set_lobby_joinable(req, res);
  },
);

router.put(
  "/ssc/invoke/set_ready_for_lobby",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_set_ready_for_lobby_RESPONSE, MVSRequests.Ssc_invoke_set_ready_for_lobby_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_set_ready_for_lobby_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_set_ready_for_lobby(req, res);
  },
);

router.put(
  "/ssc/invoke/submit_end_of_match_stats",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_submit_end_of_match_stats_RESPONSE, MVSRequests.Ssc_invoke_submit_end_of_match_stats_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_submit_end_of_match_stats_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_submit_end_of_match_stats(req, res);
  },
);

router.put(
  "/ssc/invoke/toast_player",
  (
    req: Request<{}, MVSResponses.Ssc_invoke_toast_player_RESPONSE, MVSRequests.Ssc_invoke_toast_player_REQUEST, {}>,
    res: Response<MVSResponses.Ssc_invoke_toast_player_RESPONSE>,
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented`
    h.handleSsc_invoke_toast_player(req, res);
  },
);

export default router;
