// libs/user/src/common.ts
import { z } from 'zod';

export const UserSchema = z.object({
  // _id: z.string(),
  firstName: z.string(),
  // lastName: z.string(),
  // username: z.string(),
  // email: z.string().email(),
  // password: z.string(),
  // role: z.string(),
  // status: z.string(),
  // createdAt: z.date(),
  // updatedAt: z.date(),
  // __v: z.number(),
  // refreshToken: z.string(),
  // avatar: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;
