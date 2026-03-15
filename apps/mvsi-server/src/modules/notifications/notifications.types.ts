export const REALTIME_NOTIFICATION_CHANNEL = "realtime_notification";

export type RealtimeNotificationMessage = {
  topic: string;
  notification : NotificationTemplate;
};

export type NotificationTemplate = {
  data: {
    template_id: string;
  } & Record<string, any>;
  payload:  {
    template?: string;
  } & Record<string, any>;
  header: "";
  cmd: string;
};