/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ShopController {
  @MessagePattern('getShop')
  getShop() {
    return 'Shop';
  }
}
