/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @MessagePattern('getShop')
  getShop() {
    console.log(this.shopService);
    return this.shopService.getShop();
  }

  @MessagePattern('createShop')
  async createShop() {
    return 'utils()';
  }
}
