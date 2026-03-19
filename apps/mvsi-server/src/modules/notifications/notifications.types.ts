export const REALTIME_NOTIFICATION_TOPIC_CHANNEL = "realtime_notification";
export const REALTIME_NOTIFICATION_ARRAY_CHANNEL = "realtime_notificationArray";

export type RealtimeNotificationTopicMessage = {
  topic: string;
  data: NotificationTemplate;
};

export type RealtimeNotificationUsersMessage = {
  exclude: string[];
  users: string[];
  data: NotificationTemplate;
};

export type NotificationTemplate = {
  data: NotificationData;
  payload: {
    template?: string;
  } & Record<string, any>;
  header: "";
  cmd: string;
};

export type NotificationData = {
  template_id: string;
} & Record<string, any>;
