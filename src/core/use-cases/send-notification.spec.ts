import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('SendNotification use case', () => {
  let notificationRepository;
  let sendNotification;

  beforeAll(() => {
    notificationRepository = new InMemoryNotificationRepository();
    sendNotification = new SendNotification(notificationRepository);
  });

  it('should be able to send a notification', async () => {
    const { notification } = await sendNotification.execute({
      recipientId: '1',
      category: 'a',
      content: 'aaaaa',
    });

    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
