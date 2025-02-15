/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from '../schema/shop.schema';
import { Model } from 'mongoose';
import { apiSuccess } from '@food-blog/interfaces';
import { CreateShopDto } from '../dto/create-shop.dto';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<Shop>) {}

  async getShop() {
    const result = await this.shopModel.find();
    return result;
  }

  async createShop(shop: CreateShopDto) {
    return this.shopModel.create(shop);
  }
}
