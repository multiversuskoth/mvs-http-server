import { MAIN_WEBSOCKET } from "../../websocket.elysia";
import { FRIEND_REQUEST_RECEIVED_CHANNEL, type FriendRequestNotification } from "./friends.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;
const clients = MAIN_WEBSOCKET.decorator.players;

subscriber.subscribe(FRIEND_REQUEST_RECEIVED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as FriendRequestNotification;
  sendFriendRequestNotification(notification);
});

export async function sendFriendRequestNotification(notification: FriendRequestNotification) {
  const client = clients.get(notification.ReceiverAccountId);
  if (client) {
    client.data.sendHydra(client, {
      data: {
        template_id: "WBPNFriendRequestReceivedNotification",
        SenderWBPNAccountID: notification.SenderWBPNAccountID,
        WBPNInvitationID: notification.WBPNInvitationID,
      },
      payload: {
        match: {
          id: notification.ReceiverAccountId,
        },
        custom_notification: "realtime",
      },
      header: "",
      cmd: "profile-notification",
    });
  }
}
