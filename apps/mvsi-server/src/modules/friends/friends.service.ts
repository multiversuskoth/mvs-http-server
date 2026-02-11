import { FriendModel } from "@mvsi/database/models/Friends";
import { InvitationModel } from "@mvsi/database/models/Invitations";
import { PlayerModel } from "@mvsi/database/models/Player";
import { logger } from "@mvsi/logger";
import { redisClient } from "@mvsi/redis";
import { ObjectId } from "mongodb";
import { getAssetsByType } from "../../loadAssets";
import { getPlayersPresence } from "../playerPresence/playerPresence.service";
import { FRIEND_REQUEST_RECEIVED_CHANNEL, type FriendRequestNotification } from "./friends.types";

export async function generateWBPNInvitation(senderId: string, receiverPublicId: string) {
  const senderObjectId = new ObjectId(senderId);

  const receiverPlayer = await PlayerModel.findOne({ public_id: receiverPublicId });
  if (!receiverPlayer) {
    throw new Error("Receiver player not found");
  }

  const invitation = await InvitationModel.insertOne({
    sent_from: senderObjectId,
    sent_to: receiverPlayer._id,
    state: "open",
  });

  return {
    id: invitation._id,
    sent_from: senderObjectId,
    sent_to: receiverPlayer._id,
    state: "open",
    account: {
      public_id: receiverPlayer.public_id,
      username: receiverPlayer.name,
    },
  };
}

export async function sendProfileInvitation(
  ReceiverAccountId: string,
  SenderWBPNAccountID: string,
  WBPNInvitationID: string,
) {
  await redisClient.publish(
    FRIEND_REQUEST_RECEIVED_CHANNEL,
    JSON.stringify({
      ReceiverAccountId,
      SenderWBPNAccountID,
      WBPNInvitationID,
    } as FriendRequestNotification),
  );

  return;
}

export async function getOutgoingInvitations(accountId: string) {
  const invitations = await InvitationModel.aggregate([
    {
      $match: {
        sent_from: new ObjectId(accountId),
      },
    },
    {
      $lookup: {
        from: "players",
        localField: "sent_to",
        foreignField: "_id",
        as: "playerData",
      },
    },
    {
      $addFields: {
        player: { $arrayElemAt: ["$playerData", 0] },
        id: { $toString: "$_id" },
      },
    },
    {
      $project: {
        _id: 0,
        id: 1,
        sent_from: 1,
        sent_to: 1,
        state: 1,
        account: {
          public_id: "$player.public_id",
          username: "$player.name",
          avatar: {
            name: "Nope",
            image_url: "Nope",
          },
        },
      },
    },
  ]);

  return {
    total: invitations.length,
    page: 1,
    page_size: 1000,
    results: invitations,
  };
}

export async function getIncomingInvitations(accountId: string) {
  const invitations = await InvitationModel.aggregate([
    {
      $match: {
        sent_to: new ObjectId(accountId),
      },
    },
    {
      $lookup: {
        from: "players",
        localField: "sent_from",
        foreignField: "_id",
        as: "playerData",
      },
    },
    {
      $addFields: {
        player: { $arrayElemAt: ["$playerData", 0] },
      },
    },
    {
      $project: {
        _id: 1,
        sent_from: 1,
        sent_to: 1,
        state: 1,
        account: {
          public_id: "$player.public_id",
          username: "$player.name",
        },
      },
    },
  ]);
  return {
    total: invitations.length,
    page: 1,
    page_size: 1000,
    results: invitations,
  };
}

export async function getUserFriendsList(userId: string) {
  const userFriends = await FriendModel.findById(new ObjectId(userId));
  if (!userFriends) {
    logger.error("Tried to query friends from an invalid userId");
    return [];
  }
  return userFriends.friends.map((f) => f.toHexString());
}

export async function getUserFriendDetails(publicIds: readonly string[]) {
  console.log("yrdtttt", publicIds);
  const players = await PlayerModel.find({ public_id: { $in: publicIds.map((id) => id) } });
  const playersPresenceState = await getPlayersPresence(players.map((f) => f._id.toHexString()));
  return players.map((f) => {
    const presenceState =
      playersPresenceState.find((p) => p.profileId === f.profile_id.toHexString())?.status ===
      "online"
        ? "online"
        : "offline";
    return {
      id: f._id,
      "identity.default_username": true,
      presence: presenceState,
      "identity.alternate.wb_network": [{ id: f.public_id, username: f.name, avatar: null }],
      "server_data.ProfileIcon.AssetPath": getAssetsByType("ProfileIconData").find(
        (p) => p.slug === f.profile_icon,
      )?.assetPath,
    };
  });
}
