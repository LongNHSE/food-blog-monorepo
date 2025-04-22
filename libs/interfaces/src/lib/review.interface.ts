import { Schema } from 'mongoose';
import { z } from 'zod';

export const Review = z.object({
  _id: z.union([z.instanceof(Schema.Types.ObjectId), z.string()]),
  userId: z.union([z.instanceof(Schema.Types.ObjectId), z.string()]),
  blogId: z.union([z.instanceof(Schema.Types.ObjectId), z.string()]).optional(),
  reviewId: z
    .union([z.instanceof(Schema.Types.ObjectId), z.string()])
    .optional(),
  content: z.string(),
  rating: z.number(),
  createdAt: z.date(), // Timestamp when the shop was created
  updatedAt: z.date(), // Timestamp for the last update
});

export type TReview = z.infer<typeof Review>;
