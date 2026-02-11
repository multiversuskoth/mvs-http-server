import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA } from "../../middleware/middlewares";

const router = new Elysia().use(MVSI_HYDRA);

router.post(
  "/sessions/auth/token",
  async ({ body, jwt }) => {
    const claims = await jwt.verify(body.code);
    if (!claims) {
      return null;
    }

    return {
      access_token: body.code,
      expires_in: 86400,
      mfa_required: false,
      sdk: {
        realtime: {
          enabled: true,
          "default-cluster": "MVSI-Cluster",
        },
      },
      account: {
        updated_at: "2025-03-18T02:34:01+00:00",
        public_id: claims.public_id,
        email_verified: false,
        password_set: false,
        mfa_active: false,
        username: claims.username,
        can_change_username: true,
        age_category: "adult",
        child_age_gate: null,
        adult_age_gate: null,
        age_gate_date: null,
        locale: "en-US",
        avatar: {
          name: "MultiVersus Arya",
          image_url:
            "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg",
          slug: "multiversus-arya",
        },
        completed: true,
        presence_state: 0,
        last_login: "2025-03-18T02:34:01+00:00",
        created_at: "2023-01-23T21:17:48+00:00",
        is_soft_locked: false,
        id: "63cef97ccaf1cd11f09a765b",
        game_links: [
          {
            game: "multiversus",
            public_id: "paee40f62bd814a53bf9f4d21e43ea2c1",
            last_seen_platform: "steam",
            last_game_login: "2025-03-18T02:34:01+00:00",
            last_accessed: "2025-03-18T02:33:59+00:00",
            all_platforms: { steam: { access_time: "2025-03-18T02:33:59+00:00" } },
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
    };
  },
  {
    body: t.Object({
      code: t.String(),
    }),
  },
);

MAIN_APP.use(router);
