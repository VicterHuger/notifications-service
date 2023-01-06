import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('notifications')
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  async getNotifications() {
    return await this.prisma.notification.findMany();
  }
  }
}
