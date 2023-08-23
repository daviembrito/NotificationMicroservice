import { makeNotification } from '@test/factories/notification.factory';

describe('Notification object', () => {
  it('should be able to create a Notification', () => {
    const notification = makeNotification();

    expect(notification).toBeTruthy();
  });
});
