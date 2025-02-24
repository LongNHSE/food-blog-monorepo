import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

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
  getShop() {
    return this.appService.getShop();
  }

  @Post('shop')
  createShop(@Body() createShopDto: any) {
    return this.appService.createShop(createShopDto);
  }
}
