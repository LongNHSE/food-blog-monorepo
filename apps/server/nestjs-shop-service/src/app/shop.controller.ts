/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ShopService } from './shop.service';

@Controller('api')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @MessagePattern('getShop')
  getShop() {
    return this.shopService.getShop();
  }

  @MessagePattern('createShop')
  async createShop() {
    return 'utils()';
  }
}
