import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters!" })
    .max(100, { message: "Title must not exceed 100 characters!" }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters!" })
    .max(500, { message: "Description must not exceed 500 characters!" }),

  location: z
    .string()
    .min(3, { message: "Location must be at least 3 characters!" })
    .max(100, { message: "Location must not exceed 100 characters!" })
    .optional(),

  exactTimeToHangout: z
    .union([z.string(), z.date()])
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Invalid date format!",
    })
    .optional(),
    
});

