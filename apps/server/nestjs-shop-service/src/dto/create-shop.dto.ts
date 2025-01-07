import { Schema } from 'mongoose';
import { IShop } from '../schema/shop.schema';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateShopDto implements Partial<IShop> {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsOptional()
  images?: string[] | undefined;
}
