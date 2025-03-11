import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import express from 'express';
import { AppService } from './app.service';
import { ApiResponse, LoginDto } from '@food-blog/interfaces';
import { JwtAuthGuard, JwtStrategy } from '@food-blog/nestjs-auth-lib';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@food-blog/nestjs-user-lib/schema/user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): { message: string } {
    console.log('getData');
    console.log(this.appService);
    return { message: 'Hello API' };
    // return this.appService.getData();
  }

  @Get('shop')
  @UseGuards(JwtAuthGuard)
  getShop() {
    return this.appService.getShop();
  }

  @Post('shop')
  createShop(@Body() createShopDto: any) {
    return this.appService.createShop(createShopDto);
  }

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: express.Response
  ) {
    const result: ApiResponse<{ user: User; accessToken: string } | null> =
      await this.appService.login(loginDto);

    response.cookie('accessToken', result.data?.accessToken, {
      httpOnly: true,
    });

    return result;
  }
}
