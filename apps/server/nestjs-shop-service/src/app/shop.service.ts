/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from '../schema/shop.schema';
import { Model } from 'mongoose';
import { apiSuccess } from '@food-blog/interfaces';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<Shop>) {}

  async getShop() {
    console.log('getShop');
    const result = await this.shopModel.find();
    return apiSuccess<Shop[]>(result, 'Successfully get shop data', 200);
  }

  async createShop(shop: Shop) {
    return this.shopModel.create(shop);
  }
}
