//* AUTO GENERATED */
export namespace MVSQueries {
  export interface Accounts_wb_network_bulk_QUERY {
    /**
     *
     * identity
     *
     */
    fields: string[];
    /**
     *
     * 1
     *
     */
    partial_response: string;
  }

  export interface Commerce_products_QUERY {
    /**
     *
     * -1
     *
     */
    count: string;
    /**
     *
     * slug
     *
     */
    fields: string[];
    /**
     *
     * 1
     *
     */
    partial_response: string;
  }

  export interface Commerce_purchases_me_QUERY {
    /**
     *
     * 25
     *
     * 100
     *
     */
    count: string;
    /**
     *
     * 1
     *
     */
    page: string;
    /**
     *
     * transient_failure
     *
     * open
     *
     */
    state: string;
  }

  export interface Datarouter_api_v1_public_data_clients_QUERY {
    /**
     *
     * 3a212c0da4f1438e840c21565df4b6fe
     *
     */
    AppEnvironment: string;
    /**
     *
     * 5f8c5b9a91ca4e33b4afe3040b27e45e
     *
     */
    AppID: string;
    /**
     *
     * 1.15.3-21924193
     *
     */
    AppVersion: string;
    /**
     *
     * 288DB7BB451287FB0EB77082104ED488
     *
     * FE723BDD42D7172B258EBA8F991C2CC3
     *
     */
    SessionID: string;
    /**
     *
     * eteventstream
     *
     */
    UploadType: string;
  }

  export interface Dokken_v1_event_QUERY {
    /**
     *
     * steam
     *
     */
    platform: string;
    /**
     *
     * 7815489B4C877F1B2F909DB8F7D1A473
     *
     */
    uid: string;
  }

  export interface Friends_me_QUERY {
    /**
     *
     * 1000
     *
     */
    page_size: string;
  }

  export interface Friends_me_invitations_incoming_QUERY {
    /**
     *
     * 1000
     *
     */
    page_size: string;
    /**
     *
     * open
     *
     */
    state: string;
  }

  export interface Friends_me_invitations_outgoing_QUERY {
    /**
     *
     * 1000
     *
     */
    page_size: string;
    /**
     *
     * open
     *
     */
    state: string;
  }

  export interface Global_configuration_types_calendarflags_global_configurations_QUERY {
    /**
     *
     * 1000
     *
     */
    count: string;
    /**
     *
     * 1
     *
     */
    page: string;
    /**
     *
     * 1
     *
     */
    partial_response: string;
  }

  export interface Global_configuration_types_wwshopconfiguration_global_configurations_QUERY {
    /**
     *
     * 1000
     *
     */
    count: string;
    /**
     *
     * 1
     *
     */
    page: string;
    /**
     *
     * 1
     *
     */
    partial_response: string;
  }

  export interface Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_QUERY {
    /**
     *
     * 1742175002
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088602
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_battlepass_variant_id_QUERY {
    /**
     *
     * 1742175002
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088602
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_currency_variant_id_QUERY {
    /**
     *
     * 1742175002
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088602
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_road_layout_id_QUERY {
    /**
     *
     * 1742175002
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088602
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_variant_id_QUERY {
    /**
     *
     * 1742175005
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088605
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_main_variant_id_QUERY {
    /**
     *
     * 1742175002
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088602
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_prestige_variant_id_QUERY {
    /**
     *
     * 1742175005
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088605
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_rift_variant_id_QUERY {
    /**
     *
     * 1742175005
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088605
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_skin_variant_id_QUERY {
    /**
     *
     * 1742175002
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1742088602
     *
     */
    calendar_projection_start: string;
  }

  export interface Matches_all_id_QUERY {
    /**
     *
     * 10
     *
     */
    count: string;
    /**
     *
     * server_data
     *
     */
    fields: string;
    /**
     *
     * 1
     *
     */
    page: string;
    /**
     *
     * 2v2_container
     *
     */
    templates: string[];
  }

  export interface Profiles_id_inventory_QUERY {
    /**
     *
     * show_currency_sources
     *
     */
    fields: string;
    /**
     *
     * 1
     *
     */
    partial_response: string;
  }

  export interface Profiles_bulk_QUERY {
    /**
     *
     * data
     *
     */
    account_fields: string[];
    /**
     *
     * 1
     *
     */
    partial_response: string;
  }

  export interface Sdk_v1_default_QUERY {
    /**
     *
     * WIN
     *
     */
    platformId: string;
  }

  export interface Sdk_v1_product_5f8c5b9a91ca4e33b4afe3040b27e45e_QUERY {
    /**
     *
     * 29da23b21f7f41319c7fa5e86e20dc2b
     *
     * dc943966edb54a6eb9c1334ca8cc1990
     *
     */
    deploymentId: string;
    /**
     *
     * WIN
     *
     */
    platformId: string;
  }

  export interface Sessions_auth_token_QUERY {
    /**
     *
     * account
     *
     */
    options: string[];
  }
}
