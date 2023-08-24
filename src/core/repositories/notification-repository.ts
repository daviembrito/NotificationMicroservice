import { Notification } from '@core/entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
