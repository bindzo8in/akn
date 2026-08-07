import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters long."),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits.")
    .regex(/^[0-9+\s\-()]{10,15}$/, "Please enter a valid phone number (min 10 digits)."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  projectType: z
    .string()
    .min(1, "Please select a project category."),
  location: z.string().optional(),
  area: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
