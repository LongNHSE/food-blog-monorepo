/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  NotFoundException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { ShopService } from './shop.service';
import { CreateShopDto } from '../dto/create-shop.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @MessagePattern('getShop')
  getShop() {
    return this.shopService.getShop();
  }

  @MessagePattern('createShop')
  async createShop(@Payload() createShopDto: CreateShopDto) {
    // throw new RpcException('Error message');
    // throw new Error('Error message');
    const dto = plainToInstance(CreateShopDto, createShopDto);
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new RpcException(new NotFoundException('Product was not found!'));
    }
    return 'utils()';
  }
}
