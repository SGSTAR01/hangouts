import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 2 characters long." })
      .max(50, { message: "Name must be at most 50 characters long." })
      .regex(/^[a-zA-Z\s]*$/, { message: "Name must contain only alphabets." })
      .trim(),
    username: z
      .string()
      .min(3, { message: "Username must be at least 2 characters long." })
      .max(30, { message: "Username must be at most 50 characters long." })
      .regex(/^[a-zA-Z0-9]*$/, {
        message: "Username must contain only alphabets and numbers.",
      })
      .trim(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long." })
      .max(50, { message: "Be at most 50 characters long." })
      .regex(/[a-zA-Z]/, {
        message: "Contain at least one UpperCase and LowerCase letter.",
      })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
  });

export const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty." }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        username?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
