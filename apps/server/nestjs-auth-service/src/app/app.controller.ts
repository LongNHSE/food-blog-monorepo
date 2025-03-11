import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';
import type { ApiResponse, LoginDto, TUser } from '@food-blog/interfaces';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getData(@Body() user: TUser): Promise<User> {
    return await this.appService.createUser(user);
  }

  @MessagePattern('login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body() user: LoginDto
  ): Promise<ApiResponse<{ user: User; accessToken: string } | null> | null> {
    return await this.appService.login(user);
  }
}
