//* AUTO GENGERATED */
import express, { Request, Response } from "express";
import { MVSRequests } from "./interfaces/requests_types";
import { MVSResponses } from "./interfaces/responses_types";
import { MVSQueries } from "./interfaces/queries_types";
import {handleAccounts_wb_network_bulk} from "./handlers/accounts";
import {handleProfiles_bulk} from "./handlers/profiles";
import {handleAccess} from "./handlers/access";

interface MVSParams {
  id: string;
}

const router = express.Router();

router.use(express.json())

router.post(
  "/access",
  (
    req: Request<
      {},
      MVSResponses.Access_RESPONSE,
      MVSRequests.Access_REQUEST,
      {}
    >,
    res: Response
  ) => {
    handleAccess(req, res);
  }
);
router.put(
  "/accounts/me/relationships/:id/block",
  (
    req: Request<
      MVSParams,
      MVSResponses.Accounts_me_relationships_id_block_RESPONSE,
      MVSRequests.Accounts_me_relationships_id_block_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleAccounts_me_relationships_id_block(req, res);
  }
);
router.put(
  "/accounts/me/relationships/:id/unblock",
  (
    req: Request<
      MVSParams,
      MVSResponses.Accounts_me_relationships_id_unblock_RESPONSE,
      MVSRequests.Accounts_me_relationships_id_unblock_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleAccounts_me_relationships_id_unblock(req, res);
  }
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
    res: Response
  ) => {
    handleAccounts_wb_network_bulk(req, res);
  }
);
router.put(
  "/batch",
  (
    req: Request<
      {},
      MVSResponses.Batch_RESPONSE,
      MVSRequests.Batch_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleBatch(req, res);
  }
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
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleDatarouter_api_v1_public_data_clients(req, res);
  }
);
router.put(
  "/drives/multiversus/sync",
  (
    req: Request<
      {},
      MVSResponses.Drives_multiversus_sync_RESPONSE,
      MVSRequests.Drives_multiversus_sync_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleDrives_multiversus_sync(req, res);
  }
);
router.post(
  "/friends/me/invitations",
  (
    req: Request<
      {},
      MVSResponses.Friends_me_invitations_RESPONSE,
      MVSRequests.Friends_me_invitations_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleFriends_me_invitations(req, res);
  }
);
router.put(
  "/leaderboards/bulk/score-and-rank/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Leaderboards_bulk_score_and_rank_id_RESPONSE,
      MVSRequests.Leaderboards_bulk_score_and_rank_id_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleLeaderboards_bulk_score_and_rank_id(req, res);
  }
);
router.put(
  "/matches/:id",
  (
    req: Request<
      MVSParams,
      MVSResponses.Matches_id_RESPONSE,
      MVSRequests.Matches_id_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleMatches_id(req, res);
  }
);
router.post(
  "/matches/matchmaking/1v1-retail/request",
  (
    req: Request<
      {},
      MVSResponses.Matches_matchmaking_1v1_retail_request_RESPONSE,
      MVSRequests.Matches_matchmaking_1v1_retail_request_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleMatches_matchmaking_1v1_retail_request(req, res);
  }
);
router.post(
  "/matches/matchmaking/ranked-1v1-retail/request",
  (
    req: Request<
      {},
      MVSResponses.Matches_matchmaking_ranked_1v1_retail_request_RESPONSE,
      MVSRequests.Matches_matchmaking_ranked_1v1_retail_request_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleMatches_matchmaking_ranked_1v1_retail_request(req, res);
  }
);
router.post(
  "/matches/matchmaking/request/:id/cancel",
  (
    req: Request<
      MVSParams,
      MVSResponses.Matches_matchmaking_request_id_cancel_RESPONSE,
      MVSRequests.Matches_matchmaking_request_id_cancel_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleMatches_matchmaking_request_id_cancel(req, res);
  }
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
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleProfiles_id_inventory(req, res);
  }
);
router.put(
  "/profiles/bulk",
  (
    req: Request<
      {},
      MVSResponses.Profiles_bulk_RESPONSE,
      MVSRequests.Profiles_bulk_REQUEST,
      MVSQueries.Profiles_bulk_QUERY
    >,
    res: Response
  ) => {
    handleProfiles_bulk(req, res);
  }
);
router.post(
  "/sessions/auth/token",
  (
    req: Request<
      {},
      MVSResponses.Sessions_auth_token_RESPONSE,
      MVSRequests.Sessions_auth_token_REQUEST,
      MVSQueries.Sessions_auth_token_QUERY
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSessions_auth_token(req, res);
  }
);
router.put(
  "/social/me/block/p2a3c488f51fb4bb19c8689be86997b8a",
  (
    req: Request<
      {},
      MVSResponses.Social_me_block_p2a3c488f51fb4bb19c8689be86997b8a_RESPONSE,
      MVSRequests.Social_me_block_p2a3c488f51fb4bb19c8689be86997b8a_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSocial_me_block_p2a3c488f51fb4bb19c8689be86997b8a(req, res);
  }
);
router.put(
  "/social/me/unblock/p2a3c488f51fb4bb19c8689be86997b8a",
  (
    req: Request<
      {},
      MVSResponses.Social_me_unblock_p2a3c488f51fb4bb19c8689be86997b8a_RESPONSE,
      MVSRequests.Social_me_unblock_p2a3c488f51fb4bb19c8689be86997b8a_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSocial_me_unblock_p2a3c488f51fb4bb19c8689be86997b8a(req, res);
  }
);
router.post(
  "/ssc/invoke/attempt_daily_refresh",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_attempt_daily_refresh_RESPONSE,
      MVSRequests.Ssc_invoke_attempt_daily_refresh_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_attempt_daily_refresh(req, res);
  }
);
router.put(
  "/ssc/invoke/claim_all_milestone_reward_track_tiers",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_claim_all_milestone_reward_track_tiers_RESPONSE,
      MVSRequests.Ssc_invoke_claim_all_milestone_reward_track_tiers_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_claim_all_milestone_reward_track_tiers(req, res);
  }
);
router.put(
  "/ssc/invoke/claim_milestone_reward_track_tiers",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_claim_milestone_reward_track_tiers_RESPONSE,
      MVSRequests.Ssc_invoke_claim_milestone_reward_track_tiers_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_claim_milestone_reward_track_tiers(req, res);
  }
);
router.post(
  "/ssc/invoke/claim_mission_rewards",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_claim_mission_rewards_RESPONSE,
      MVSRequests.Ssc_invoke_claim_mission_rewards_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_claim_mission_rewards(req, res);
  }
);
router.put(
  "/ssc/invoke/create_custom_game_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_create_custom_game_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_create_custom_game_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_create_custom_game_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/create_party_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_create_party_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_create_party_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_create_party_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/equip_banner",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_equip_banner_RESPONSE,
      MVSRequests.Ssc_invoke_equip_banner_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_equip_banner(req, res);
  }
);
router.put(
  "/ssc/invoke/equip_stat_tracker",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_equip_stat_tracker_RESPONSE,
      MVSRequests.Ssc_invoke_equip_stat_tracker_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_equip_stat_tracker(req, res);
  }
);
router.put(
  "/ssc/invoke/equip_taunt",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_equip_taunt_RESPONSE,
      MVSRequests.Ssc_invoke_equip_taunt_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_equip_taunt(req, res);
  }
);
router.put(
  "/ssc/invoke/game_launch_event",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_game_launch_event_RESPONSE,
      MVSRequests.Ssc_invoke_game_launch_event_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_game_launch_event(req, res);
  }
);
router.post(
  "/ssc/invoke/get_or_create_mission_object",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_get_or_create_mission_object_RESPONSE,
      MVSRequests.Ssc_invoke_get_or_create_mission_object_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_get_or_create_mission_object(req, res);
  }
);
router.put(
  "/ssc/invoke/invite_to_player_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_invite_to_player_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_invite_to_player_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_invite_to_player_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/join_custom_game_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_join_custom_game_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_join_custom_game_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_join_custom_game_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/kick_from_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_kick_from_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_kick_from_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_kick_from_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/leave_player_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_leave_player_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_leave_player_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_leave_player_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/lobby_code",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_lobby_code_RESPONSE,
      MVSRequests.Ssc_invoke_lobby_code_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_lobby_code(req, res);
  }
);
router.put(
  "/ssc/invoke/lock_lobby_loadout",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_lock_lobby_loadout_RESPONSE,
      MVSRequests.Ssc_invoke_lock_lobby_loadout_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_lock_lobby_loadout(req, res);
  }
);
router.put(
  "/ssc/invoke/perks_lock",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_perks_lock_RESPONSE,
      MVSRequests.Ssc_invoke_perks_lock_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_perks_lock(req, res);
  }
);
router.put(
  "/ssc/invoke/perks_purchase",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_perks_purchase_RESPONSE,
      MVSRequests.Ssc_invoke_perks_purchase_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_perks_purchase(req, res);
  }
);
router.put(
  "/ssc/invoke/perks_set_character_page",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_perks_set_character_page_RESPONSE,
      MVSRequests.Ssc_invoke_perks_set_character_page_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_perks_set_character_page(req, res);
  }
);
router.put(
  "/ssc/invoke/promote_to_lobby_leader",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_promote_to_lobby_leader_RESPONSE,
      MVSRequests.Ssc_invoke_promote_to_lobby_leader_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_promote_to_lobby_leader(req, res);
  }
);
router.put(
  "/ssc/invoke/rematch_accept",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_rematch_accept_RESPONSE,
      MVSRequests.Ssc_invoke_rematch_accept_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_rematch_accept(req, res);
  }
);
router.put(
  "/ssc/invoke/send_profile_notification",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_send_profile_notification_RESPONSE,
      MVSRequests.Ssc_invoke_send_profile_notification_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_send_profile_notification(req, res);
  }
);
router.put(
  "/ssc/invoke/set_enabled_maps_for_custom_game",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_set_enabled_maps_for_custom_game_RESPONSE,
      MVSRequests.Ssc_invoke_set_enabled_maps_for_custom_game_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_set_enabled_maps_for_custom_game(req, res);
  }
);
router.put(
  "/ssc/invoke/set_game_mode_for_custom_game",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_set_game_mode_for_custom_game_RESPONSE,
      MVSRequests.Ssc_invoke_set_game_mode_for_custom_game_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_set_game_mode_for_custom_game(req, res);
  }
);
router.put(
  "/ssc/invoke/set_lobby_joinable",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_set_lobby_joinable_RESPONSE,
      MVSRequests.Ssc_invoke_set_lobby_joinable_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_set_lobby_joinable(req, res);
  }
);
router.put(
  "/ssc/invoke/set_mode_for_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_set_mode_for_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_set_mode_for_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_set_mode_for_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/set_ready_for_lobby",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_set_ready_for_lobby_RESPONSE,
      MVSRequests.Ssc_invoke_set_ready_for_lobby_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_set_ready_for_lobby(req, res);
  }
);
router.put(
  "/ssc/invoke/set_world_buffs_for_custom_game",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_set_world_buffs_for_custom_game_RESPONSE,
      MVSRequests.Ssc_invoke_set_world_buffs_for_custom_game_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_set_world_buffs_for_custom_game(req, res);
  }
);
router.put(
  "/ssc/invoke/start_custom_match",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_start_custom_match_RESPONSE,
      MVSRequests.Ssc_invoke_start_custom_match_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_start_custom_match(req, res);
  }
);
router.put(
  "/ssc/invoke/submit_end_of_match_stats",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_submit_end_of_match_stats_RESPONSE,
      MVSRequests.Ssc_invoke_submit_end_of_match_stats_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_submit_end_of_match_stats(req, res);
  }
);
router.put(
  "/ssc/invoke/switch_custom_game_lobby_team",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_switch_custom_game_lobby_team_RESPONSE,
      MVSRequests.Ssc_invoke_switch_custom_game_lobby_team_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_switch_custom_game_lobby_team(req, res);
  }
);
router.put(
  "/ssc/invoke/toast_player",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_toast_player_RESPONSE,
      MVSRequests.Ssc_invoke_toast_player_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_toast_player(req, res);
  }
);
router.put(
  "/ssc/invoke/update_int_setting_for_custom_game",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_update_int_setting_for_custom_game_RESPONSE,
      MVSRequests.Ssc_invoke_update_int_setting_for_custom_game_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_update_int_setting_for_custom_game(req, res);
  }
);
router.put(
  "/ssc/invoke/update_team_style_for_custom_game",
  (
    req: Request<
      {},
      MVSResponses.Ssc_invoke_update_team_style_for_custom_game_RESPONSE,
      MVSRequests.Ssc_invoke_update_team_style_for_custom_game_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    handleSsc_invoke_update_team_style_for_custom_game(req, res);
  }
);
router.post(
  "/virtual_commerce/purchases/:id/toasts_gleamium",
  (
    req: Request<
      MVSParams,
      MVSResponses.Virtual_commerce_purchases_id_toasts_gleamium_RESPONSE,
      MVSRequests.Virtual_commerce_purchases_id_toasts_gleamium_REQUEST,
      {}
    >,
    res: Response
  ) => {
    // @ts-ignore TODO : implementation. Remove comment once implemented
    const response = handleVirtual_commerce_purchases_id_toasts_gleamium(
      req,
      res
    );

    res.json(response);
  }
);
export default router;
