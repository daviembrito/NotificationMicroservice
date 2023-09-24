import { Notification } from '@core/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.getId(),
      content: notification.getContent().value,
      category: notification.getCategory(),
      recipientId: notification.getRecipientId(),
      readAt: notification.getReadAt(),
      createdAt: notification.getCreatedAt(),
    };
  }
}
