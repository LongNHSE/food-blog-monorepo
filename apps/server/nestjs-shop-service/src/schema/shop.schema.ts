import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, ObjectId } from 'mongoose';

import {
  ShopCategoryEnum,
  ShopStatusEnum,
  TReview,
  TShop,
} from '@food-blog/interfaces';

@Schema({
  timestamps: true,
})
export class Shop extends Document<ObjectId, any, TShop> implements TShop {
  @Prop({ required: true, type: String })
  name!: string;

  @Prop({ required: true, type: String })
  district!: string;

  @Prop({ required: false, type: String })
  description!: string;

  @Prop({ required: true, type: Object.values(ShopCategoryEnum) })
  categories!: ShopCategoryEnum;

  @Prop({ required: false, type: String })
  tiktokContent!: string;

  @Prop({ required: false, type: String })
  instagram!: string;

  @Prop({ required: false, type: String })
  threads!: string;

  @Prop({ required: true, type: String })
  address!: string;

  @Prop({ required: false, type: String })
  note!: string;

  @Prop({
    required: false,
    type: Object.values(ShopStatusEnum),
    default: ShopStatusEnum.No,
  })
  status!: ShopStatusEnum;

  review!: TReview[];
}
export type ShopDocument = HydratedDocument<Shop>;
export const ShopSchema = SchemaFactory.createForClass(Shop);
