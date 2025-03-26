import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ShopCategoryEnum, ShopStatusEnum } from '@food-blog/interfaces';

export class CreateShopDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  district!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsEnum(ShopCategoryEnum)
  categories!: ShopCategoryEnum;

  @IsOptional()
  @IsString()
  tiktokContent?: string;

  @IsOptional()
  @IsString()
  instagram?: string;

  @IsOptional()
  @IsString()
  thread?: string;

  @IsNotEmpty()
  @IsString()
  address!: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsNotEmpty()
  @IsEnum(ShopStatusEnum)
  status!: ShopStatusEnum;
}
