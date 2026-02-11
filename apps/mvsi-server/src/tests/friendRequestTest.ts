import { randomUUID } from "node:crypto";
import { redisClient, startRedis } from "@mvsi/redis";
import {
  FRIEND_REQUEST_RECEIVED_CHANNEL,
  type FriendRequestNotification,
} from "../modules/friends/friends.types";

await startRedis();
await redisClient.publish(
  FRIEND_REQUEST_RECEIVED_CHANNEL,
  JSON.stringify({
    ReceiverAccountId: "69410f8e2f90cdc9720446bb",
    SenderWBPNAccountID: "566a294d-a5a6-4edf-a96f-2ade9517bafc",
    WBPNInvitationID: randomUUID(),
  } as FriendRequestNotification),
);
