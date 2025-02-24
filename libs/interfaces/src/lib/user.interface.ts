// libs/user/src/common.ts
import { Schema } from 'mongoose';
import { z } from 'zod';

export const UserSchema = z.object({
  _id: z.instanceof(Schema.Types.ObjectId),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
  status: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
  avatar: z.string().optional(),
});

export type TUser = z.infer<typeof UserSchema>;
