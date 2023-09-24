import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/services/prisma.service';

@Module({
  providers: [PrismaService],
})
export class DatabaseModule {}
