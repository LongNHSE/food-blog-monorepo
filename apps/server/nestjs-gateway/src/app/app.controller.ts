import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): { message: string } {
    console.log('getData');
    return { message: 'Hello API' };
    // return this.appService.getData();
  }

  @Get('shop')
  getShop() {
    console.log('getShop');
    return this.appService.getShop();
  }
}
