//* AUTO GENERATED */
export namespace MVSQueries {
  export interface Accounts_wb_network_bulk_QUERY {
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
     * prices
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
     * FB997705429DAE7D0A9C03B99864315E
     *
     * D00761D945DA9DAA2CF97F9366C23861
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
     * B74FC9EF416D964CBD2B92AD01C00582
     *
     */
    uid: string;
  }

  export interface Friends_me_QUERY {
    null: {};
    /**
     *
     * 1000
     *
     */
    page_size: string;
  }

  export interface Friends_me_invitations_incoming_QUERY {
    null: {};
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
    null: {};
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

  export interface Layout_dokken_layout_type_personalized_account_cosmetics_variant_id_QUERY {
    /**
     *
     * 1741708125
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621725
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_battlepass_variant_id_QUERY {
    /**
     *
     * 1741708125
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621725
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_currency_variant_id_QUERY {
    /**
     *
     * 1741708125
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621725
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_road_layout_id_QUERY {
    /**
     *
     * 1741708125
     *
     * 1741708330
     *
     * 1741708529
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621725
     *
     * 1741621930
     *
     * 1741622129
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_select_layout_id_QUERY {
    /**
     *
     * 1741708243
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621843
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_variant_id_QUERY {
    /**
     *
     * 1741708128
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621728
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_main_variant_id_QUERY {
    /**
     *
     * 1741708125
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621725
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_prestige_variant_id_QUERY {
    /**
     *
     * 1741708128
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621728
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_rift_variant_id_QUERY {
    /**
     *
     * 1741708128
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621728
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_skin_variant_id_QUERY {
    /**
     *
     * 1741708125
     *
     * 1741708611
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741621725
     *
     * 1741622211
     *
     */
    calendar_projection_start: string;
  }

  export interface Leaderboards_ranked_season5_1v1_all_around_id_QUERY {
    /**
     *
     * data.__unused
     *
     */
    account_fields: string;
    /**
     *
     * 4
     *
     */
    count: string;
    /**
     *
     * server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug
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

  export interface Leaderboards_ranked_season5_1v1_all_show_QUERY {
    /**
     *
     * data.__unused
     *
     */
    account_fields: string;
    /**
     *
     * 100
     *
     */
    count: string;
    /**
     *
     * server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.1v1.BestCharacter.CharacterSlug
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

  export interface Leaderboards_ranked_season5_2v2_all_show_QUERY {
    /**
     *
     * data.__unused
     *
     */
    account_fields: string;
    /**
     *
     * 100
     *
     */
    count: string;
    /**
     *
     * server_data.SeasonalData.Season:SeasonFive.Ranked.DataByMode.2v2.BestCharacter.CharacterSlug
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

  export interface Leaderboards_ranked_season5_2v2_character_c036_show_QUERY {
    /**
     *
     * data.__unused
     *
     */
    account_fields: string;
    /**
     *
     * 100
     *
     */
    count: string;
    /**
     *
     * data.__unused
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
     * rift_gamelift_two_player
     *
     */
    templates: string;
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
     * presence
     *
     */
    account_fields: string;
    /**
     *
     * 1
     *
     */
    partial_response: string;
    /**
     *
     * server_data.SeasonalData
     *
     * server_data.SeasonalData.Season:SeasonFive
     *
     */
    fields: string;
  }

  export interface Profiles_search_queries_get_by_username_run_QUERY {
    /**
     *
     * data
     *
     */
    account_fields: string;
    /**
     *
     * 25
     *
     */
    limit: string;
    /**
     *
     * 1
     *
     */
    partial_response: string;
    /**
     *
     * multiversuskoth
     *
     */
    username: string;
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
    null: {};
    /**
     *
     * sdk
     *
     */
    options: string;
  }

  export interface Telemetry_data_datarouter_api_v1_public_data_QUERY {
    /**
     *
     * Production
     *
     */
    AppEnvironment: string;
    /**
     *
     * EOSSDK.PhaseRelease.ReleaseBuild
     *
     */
    AppID: string;
    /**
     *
     * 1.15.3-21924193%20-%20%2B%2BEOSSDK%2BRelease-1.15.3-CL-21924193
     *
     */
    AppVersion: string;
    /**
     *
     * %7BDA00F531-4BB4-DF4E-7044-AD9AF65893E5%7D
     *
     * %7B4385D0A7-48B4-A44E-BC0A-D58E4AF8AA8D%7D
     *
     * %7B3295E0E8-4520-8CD5-D566-4B98A24267C2%7D
     *
     * %7B04A2296A-4D89-139D-8F7F-3DB26B788797%7D
     *
     * %7B31D8AE6C-4003-7D77-BE33-5DA480B71BDD%7D
     *
     * %7B69FDDDCD-4770-B837-5F83-F485D25C34A6%7D
     *
     * %7B29655DA7-4765-AFAE-A60D-98AD456E16B2%7D
     *
     * %7B8624E99B-4381-3C08-2AD6-19A380FA6E94%7D
     *
     */
    SessionID: string;
    /**
     *
     * sdkevents
     *
     */
    UploadType: string;
    /**
     *
     *
     *
     */
    UserID: string;
  }
}
