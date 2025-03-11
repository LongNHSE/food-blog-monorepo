// libs/user/src/common.ts
import { Schema } from 'mongoose';
import { z } from 'zod';

export const UserSchema = z.object({
  _id: z.union([z.instanceof(Schema.Types.ObjectId), z.string()]),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
  status: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  __v: z.number(),
  avatar: z.string().optional(),
});
  
export type TUser = z.infer<typeof UserSchema>;
