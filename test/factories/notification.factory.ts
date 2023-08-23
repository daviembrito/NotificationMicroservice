import { Content } from '@core/entities/content';
import {
  Notification,
  NotificationProperties,
} from '@core/entities/notification';

type Override = Partial<NotificationProperties>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: '1',
    content: new Content('aaaaa'),
    category: 'a',
    readAt: null,
    createdAt: new Date('2000-1-1'),
    ...override,
  });
}
