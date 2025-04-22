import { z } from 'zod';

export const ShopSchema = z.object({
  id: z.string().uuid(), // Unique identifier for the shop
  name: z.string().min(1, 'Shop name is required'), // Shop name
  description: z.string().optional(), // Optional shop description
  ownerId: z.string().uuid(), // ID of the owner (User ID)
  categories: z.array(z.string()), // List of category names
  products: z.array(z.string().uuid()), // List of product IDs
  logoUrl: z.string().url().optional(), // Optional shop logo
  bannerUrl: z.string().url().optional(), // Optional shop banner image
  contactEmail: z.string().email('Invalid email format'), // Contact email
  contactPhone: z.string().min(10).max(15).optional(), // Optional phone number
  address: z
    .object({
      street: z.string(),
      city: z.string(),
      state: z.string().optional(),
      zipCode: z.string().optional(),
      country: z.string(),
    })
    .optional(), // Optional address field
  createdAt: z.date(), // Timestamp when the shop was created
  updatedAt: z.date(), // Timestamp for the last update
  status: z.enum(['active', 'inactive', 'pending']), // Shop status
});

// TypeScript type from Zod schema
export type TShop = z.infer<typeof ShopSchema>;
