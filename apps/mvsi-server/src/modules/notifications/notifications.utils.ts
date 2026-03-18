import { redisClient } from "@mvsi/redis";
import {
  REALTIME_NOTIFICATION_ARRAY_CHANNEL,
  REALTIME_NOTIFICATION_TOPIC_CHANNEL,
  type RealtimeNotificationArrayMessage,
  type RealtimeNotificationTopicMessage,
} from "./notifications.types";

export async function broadcastNotificationToTopic(message: RealtimeNotificationTopicMessage) {
  await redisClient.publish(REALTIME_NOTIFICATION_TOPIC_CHANNEL, JSON.stringify(message));
}

export async function broadcastNotificationToUsers(message: RealtimeNotificationArrayMessage) {
  await redisClient.publish(REALTIME_NOTIFICATION_ARRAY_CHANNEL, JSON.stringify(message));
}
