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
     * 8D6B85964A3F029F55D1B8B85E76CE2B
     *
     * 1E979DC84EBC6543A4AE2BB24F23BC80
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
     * C38E9943442CBA5BEF501598D3A8358B
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
     * 1742057040
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970640
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_battlepass_variant_id_QUERY {
    /**
     *
     * 1742057040
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970640
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_currency_variant_id_QUERY {
    /**
     *
     * 1742057040
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970640
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_road_layout_id_QUERY {
    /**
     *
     * 1742057040
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970640
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_fighter_variant_id_QUERY {
    /**
     *
     * 1742057043
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970643
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_main_variant_id_QUERY {
    /**
     *
     * 1742057040
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970640
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_prestige_variant_id_QUERY {
    /**
     *
     * 1742057043
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970643
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_rift_variant_id_QUERY {
    /**
     *
     * 1742057043
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970643
     *
     */
    calendar_projection_start: string;
  }

  export interface Layout_dokken_layout_type_personalized_skin_variant_id_QUERY {
    /**
     *
     * 1742057040
     *
     */
    calendar_projection_end: string;
    /**
     *
     * 1741970640
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
    /**
     *
     * server_data.SeasonalData
     *
     * server_data.SeasonalData.Season:SeasonFive
     *
     */
    fields: string;
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
     * 1.15.3-21924193 - ++EOSSDK+Release-1.15.3-CL-21924193
     *
     */
    AppVersion: string;
    /**
     *
     * {53E2CA1D-4BE5-E0D2-C4F0-A6AAFA330F26}
     *
     * {BAE6D68A-4577-B452-469F-EE8B1582B5B0}
     *
     * {76595833-4805-1D18-E0ED-F5970356C7D7}
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
