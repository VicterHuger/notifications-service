import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  async getNotifications() {
    return await this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    return await this.prisma.notification.create({
      data: {
        ...body,
      },
    });
  }
}
