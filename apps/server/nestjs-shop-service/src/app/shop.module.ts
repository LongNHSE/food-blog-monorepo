import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ShopSchema } from '../schema/shop.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MongooseModule.forRootAsync({
    //   useFactory: () => ({
    //     uri: "process.env.MONGO_CONNECTION_STRING",
    //   }),
    // }),
    // MongooseModule.forFeature([
    //   {
    //     name: 'Shop',
    //     schema: ShopSchema,
    //   },
    // ]),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
