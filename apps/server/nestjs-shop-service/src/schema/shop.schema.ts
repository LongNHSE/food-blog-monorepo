import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, ObjectId } from 'mongoose';

export interface IShop {
  name: string;
  images?: string[];
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

@Schema({
  timestamps: true,
})
export class Shop extends Document<ObjectId, any, Shop> implements IShop {
  @Prop({ required: true, type: String })
  name!: string;
  @Prop([String])
  images?: string[];
  createdAt!: Date;
  updatedAt!: Date;
}
export type ShopDocument = HydratedDocument<Shop>;
export const ShopSchema = SchemaFactory.createForClass(Shop);
