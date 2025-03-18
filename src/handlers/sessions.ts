import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleSessions_auth_token(req: Request<{}, {}, {}, MVSQueries.Sessions_auth_token_QUERY>, res: Response) {
  res.send({
    access_token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjoxLCJpc3MiOiJwcm9kLW5ldHdvcmsiLCJlbnYiOiI2MWJhN2YzMDFjNzE5ZTJhNGZlZjRjMzciLCJwaWQiOiJwYWZkOGQ3OTUwYWExNDg0ZWE3OTFkMDY2NjJmYTc1Y2UiLCJleHAiOjE3NDIzMzA1NTIsInNpZCI6IjczZWMyMGZjLTEyMGMtNGUyOC1hNGFkLTI4MmI3YThlNDVjZCJ9.FgrxtCx4UtCRxYbAeAaZlbKZJOy4teuzuwnnQ0hRDN0",
    expires_in: 86400,
    mfa_required: false,
    sdk: {
      realtime: {
        enabled: true,
        "default-cluster": "ec2-us-east-1-prod-network",
        servers: {
          "ec2-us-east-1-prod-network": {
            "prod-network-realtime-10/1": {
              ws: "ws://100.24.54.107:8101",
              wss: "wss://us-east-1-prod-network-realtime-10.wbagora.com:9101",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-5/1": {
              ws: "ws://107.22.28.83:8101",
              wss: "wss://us-east-1-prod-network-realtime-5.wbagora.com:9101",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-7/2": {
              ws: "ws://44.202.240.184:8102",
              wss: "wss://us-east-1-prod-network-realtime-7.wbagora.com:9102",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-10/2": {
              ws: "ws://100.24.54.107:8102",
              wss: "wss://us-east-1-prod-network-realtime-10.wbagora.com:9102",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-4/1": {
              ws: "ws://44.204.13.72:8101",
              wss: "wss://us-east-1-prod-network-realtime-4.wbagora.com:9101",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-1/1": {
              ws: "ws://3.82.168.122:8101",
              wss: "wss://us-east-1-prod-network-realtime-1.wbagora.com:9101",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-2/2": {
              ws: "ws://3.212.5.165:8102",
              wss: "wss://us-east-1-prod-network-realtime-2.wbagora.com:9102",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-9/2": {
              ws: "ws://3.93.237.241:8102",
              wss: "wss://us-east-1-prod-network-realtime-9.wbagora.com:9102",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-8/1": {
              ws: "ws://18.212.34.2:8101",
              wss: "wss://us-east-1-prod-network-realtime-8.wbagora.com:9101",
              udp: "0.0.0.0:0",
            },
            "prod-network-realtime-4/2": {
              ws: "ws://44.204.13.72:8102",
              wss: "wss://us-east-1-prod-network-realtime-4.wbagora.com:9102",
              udp: "0.0.0.0:0",
            },
          },
        },
      },
    },
    account: {
      updated_at: "2025-03-17T20:42:32+00:00",
      public_id: "pafd8d7950aa1484ea791d06662fa75ce",
      email_verified: false,
      password_set: false,
      mfa_active: false,
      username: "MultiVersusKOTH",
      can_change_username: true,
      age_category: "adult",
      child_age_gate: null,
      adult_age_gate: null,
      age_gate_date: null,
      locale: "en-US",
      avatar: {
        name: "MultiVersus Arya",
        image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg",
        slug: "multiversus-arya",
      },
      completed: true,
      presence_state: 0,
      last_login: "2025-03-17T20:42:32+00:00",
      created_at: "2023-01-23T21:17:48+00:00",
      is_soft_locked: false,
      id: "63cef97ccaf1cd11f09a765b",
      game_links: [
        {
          game: "multiversus",
          public_id: "paee40f62bd814a53bf9f4d21e43ea2c1",
          last_seen_platform: "steam",
          last_game_login: "2025-03-17T20:42:32+00:00",
          last_accessed: "2025-03-17T20:42:29+00:00",
          all_platforms: { steam: { access_time: "2025-03-17T20:42:29+00:00" } },
          age_information: null,
          age_category: "adult",
          child_age_gate: null,
          adult_age_gate: null,
          age_gate_date: null,
          is_requesting_game: true,
          created_at: "2023-01-23T21:17:48+00:00",
        },
      ],
      game_age_category: "adult",
      game_age_information: null,
    },
  });
}
