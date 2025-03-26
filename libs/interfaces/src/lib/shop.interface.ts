import { Schema } from 'mongoose';
import { z } from 'zod';
import { Review } from './review.interface';

export enum ShopCategoryEnum {
  Google = 'GOOGLE',
  Instagram = 'INSTAGRAM FEED',
}
export enum ShopStatusEnum {
  HIGHLY = 'HIGHLY',
  Closed = 'CLOSED',
  No = 'NO',
  NotYet = 'NOT YET',
  Ok = 'Ok',
}

export const ShopSchema = z.object({
  _id: z.union([z.instanceof(Schema.Types.ObjectId), z.string()]),
  name: z.string().min(1, 'Shop name is required'),
  district: z.string(),
  description: z.string().optional(),
  categories: z.nativeEnum(ShopCategoryEnum),
  review: z.array(Review),
  tiktokContent: z.string().optional(),
  instagram: z.string().optional(),
  thread: z.string().optional(),
  address: z.string(),
  note: z.string().optional(),
  status: z.nativeEnum(ShopStatusEnum), // Shop status
  createdAt: z.date().optional(), // Timestamp when the shop was created
  updatedAt: z.date().optional(), // Timestamp for the last update
});

// TypeScript type from Zod schema
export type TShop = z.infer<typeof ShopSchema>;
