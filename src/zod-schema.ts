import { z } from "zod";

export const enrollNowSchema = z.object({
  phone_number: z.string(),
  parent_name: z.string().min(1),
  academic_level: z.string(),
});

export type EnrollNowSchema = z.infer<typeof enrollNowSchema>;

export const waitlistSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
});

export type WaitlistSchema = z.infer<typeof waitlistSchema>;
