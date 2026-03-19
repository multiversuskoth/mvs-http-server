export const FRIEND_REQUEST_RECEIVED_CHANNEL = "friend:request:received";

export type FriendRequestNotification = {
  ReceiverAccountId: string;
  SenderWBPNAccountID: string;
  WBPNInvitationID: string;
};
