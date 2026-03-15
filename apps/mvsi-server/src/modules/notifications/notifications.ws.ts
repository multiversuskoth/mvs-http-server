import { encodeHydraWS, MAIN_WEBSOCKET } from "../../websocket.elysia";
import {
  REALTIME_NOTIFICATION_CHANNEL,
  type RealtimeNotificationMessage,
} from "./notifications.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;

subscriber.subscribe(REALTIME_NOTIFICATION_CHANNEL, (message) => {
  const notification = JSON.parse(message) as RealtimeNotificationMessage;
  MAIN_WEBSOCKET.server?.publish(notification.topic, encodeHydraWS(notification.notification));
});
