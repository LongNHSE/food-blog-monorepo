import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';
import type { TUser } from '@food-blog/interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getData(@Body() user: TUser): Promise<User> {
    return await this.appService.createUser(user);
  }

  @Post('login')
  async login(@Body() user: any): Promise<User> {
    return await this.appService.login(user);
  }

}
