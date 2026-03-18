import { redisClient } from "@mvsi/redis";
import { encodeHydraWS, MAIN_WEBSOCKET } from "../../websocket.elysia";
import {
  REALTIME_NOTIFICATION_TOPIC_CHANNEL,
  REALTIME_NOTIFICATION_ARRAY_CHANNEL,
  type RealtimeNotificationTopicMessage,
  type RealtimeNotificationArrayMessage,
} from "./notifications.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;


subscriber.subscribe(REALTIME_NOTIFICATION_TOPIC_CHANNEL, (message) => {
  const notification = JSON.parse(message) as RealtimeNotificationTopicMessage;
  MAIN_WEBSOCKET.server?.publish(notification.topic, encodeHydraWS(notification.notification));
});

subscriber.subscribe(REALTIME_NOTIFICATION_ARRAY_CHANNEL, (message) => {
  const notification = JSON.parse(message) as RealtimeNotificationArrayMessage;
  for (const userId of notification.users) {
    if (notification.exclude.includes(userId)) {
      continue;
    }
    const client = MAIN_WEBSOCKET.decorator.players.get(userId);
    if (client) {
      client.sendBinary(encodeHydraWS(notification.notification));
    }
  }
});
