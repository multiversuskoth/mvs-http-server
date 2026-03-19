import { encodeHydraWS, MAIN_WEBSOCKET } from "../../websocket.elysia";
import {
  REALTIME_NOTIFICATION_ARRAY_CHANNEL,
  REALTIME_NOTIFICATION_TOPIC_CHANNEL,
  type RealtimeNotificationTopicMessage,
  type RealtimeNotificationUsersMessage,
} from "./notifications.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;

subscriber.subscribe(REALTIME_NOTIFICATION_TOPIC_CHANNEL, (message) => {
  const notification = JSON.parse(message) as RealtimeNotificationTopicMessage;
  MAIN_WEBSOCKET.server?.publish(notification.topic, encodeHydraWS(notification.data));
});

subscriber.subscribe(REALTIME_NOTIFICATION_ARRAY_CHANNEL, (message) => {
  const notification = JSON.parse(message) as RealtimeNotificationUsersMessage;
  for (const userId of notification.users) {
    if (notification.exclude.includes(userId)) {
      continue;
    }
    const client = MAIN_WEBSOCKET.decorator.players.get(userId);
    if (client) {
      client.sendBinary(encodeHydraWS(notification.data));
    }
  }
});
