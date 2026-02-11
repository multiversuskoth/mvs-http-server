import { logger } from "@mvsi/logger";
import Elysia, { t } from "elysia";
import { MAIN_APP, MVSI_HYDRA_WITH_JWT } from "../../middleware/middlewares";
import { HydraQueryPaginated } from "../../types";
import {
  generateWBPNInvitation,
  getIncomingInvitations,
  getOutgoingInvitations,
  getUserFriendDetails,
  getUserFriendsList,
  sendProfileInvitation,
} from "./friends.service";

const router = new Elysia().use(MVSI_HYDRA_WITH_JWT);

router.get(
  "/friends/me",
  async ({ claims }) => {
    const friends = await getUserFriendsList(claims.id);
    return {
      total: friends.length,
      page: 1,
      page_size: 1000,
      results: friends,
    };
  },
  {
    query: HydraQueryPaginated,
  },
);

router.get(
  "/friends/me/invitations/incoming",
  async ({ claims }) => {
    return await getIncomingInvitations(claims.id);
  },
  {
    query: HydraQueryPaginated,
  },
);

router.get(
  "/friends/me/invitations/outgoing",
  async ({ claims }) => {
    return await getOutgoingInvitations(claims.id);
  },
  {
    query: HydraQueryPaginated,
  },
);

router.post(
  "/friends/me/invitations",
  async ({ claims, body }) => {
    return await generateWBPNInvitation(claims.id, body.account_id);
  },
  {
    body: t.Object({
      account_id: t.String(),
    }),
  },
);

router.put(
  "/ssc/invoke/send_profile_notification",
  async ({ body }) => {
    try {
      await sendProfileInvitation(body.AccountId, body.SenderWBPNAccountID, body.WBPNInvitationID);
    } catch (error) {
      logger.error("Error sending profile invitation", error);
      return "";
    }
  },
  {
    body: t.Object({
      AccountId: t.String(),
      SenderWBPNAccountID: t.String(),
      WBPNInvitationID: t.String(),
      template_id: t.String(),
    }),
  },
);

router.put(
  "/accounts/wb_network/bulk",
  async ({ body }) => {
    const friends = await getUserFriendDetails(body.ids);
    return friends;
  },
  {
    body: t.Object({
      ids: t.Array(t.String()),
    }),
  },
);

router.get("/accounts/wb_network/:id", async ({ params }) => {
  const friends = await getUserFriendDetails([params.id]);
  return friends[0] ?? {};
});

MAIN_APP.use(router);
