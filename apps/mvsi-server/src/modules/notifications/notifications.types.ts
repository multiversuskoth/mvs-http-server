export const REALTIME_NOTIFICATION_TOPIC_CHANNEL = "realtime_notification";
export const REALTIME_NOTIFICATION_ARRAY_CHANNEL = "realtime_notificationArray";

export type RealtimeNotificationTopicMessage = {
  topic: string;
  notification: NotificationTemplate;
};

export type RealtimeNotificationArrayMessage = {
  exclude: string[];
  users: string[];
  notification: NotificationTemplate;
};

export type NotificationTemplate = {
  data: {
    template_id: string;
  } & Record<string, any>;
  payload: {
    template?: string;
  } & Record<string, any>;
  header: "";
  cmd: string;
};
