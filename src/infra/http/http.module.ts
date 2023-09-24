import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NotificationController } from './controllers/notification-controller';

@Module({
  controllers: [NotificationController],
  providers: [AppService],
})
export class HttpModule {}
