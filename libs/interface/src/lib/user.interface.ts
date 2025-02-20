import { z } from 'zod';
const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type UserType = z.infer<typeof User>;
export default User;
