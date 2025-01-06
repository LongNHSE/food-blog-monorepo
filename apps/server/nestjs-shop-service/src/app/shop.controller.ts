/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { utils } from '@food-blog/utils';

@Controller('api')
export class ShopController {
  // @MessagePattern('getShop')
  @Get('shop')
  async getShop() {
    // const { utils } = await import('@food-blog/utils'); // Use dynamic import here
    console.log('utils', utils());
    return ' utilss()';
  }
}
