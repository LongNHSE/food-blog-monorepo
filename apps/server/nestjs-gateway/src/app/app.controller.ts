import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from '@food-blog/interfaces';
import { JwtAuthGuard, JwtStrategy } from '@food-blog/nestjs-auth-lib';
import { AuthGuard } from '@nestjs/passport';

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
  login(@Body() loginDto: LoginDto) {
    console.log(loginDto);
    return this.appService.login(loginDto);
  }
}
