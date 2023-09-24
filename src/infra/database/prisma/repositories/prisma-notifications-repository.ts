import { Notification } from '@core/entities/notification';
import { NotificationRepository } from '@core/repositories/notification-repository';
import { PrismaService } from '../services/prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({ data: raw });
  }
}
