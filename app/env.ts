import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /* ── Server-only variables ────────────────────────────── */
  server: {},

  /* ── Client-side variables (NEXT_PUBLIC_*) ────────────── */
  client: {
    // Business identity
    NEXT_PUBLIC_BUSINESS_NAME: z.string().min(1),
    NEXT_PUBLIC_TAGLINE: z.string().min(1),

    // Lead engineer
    NEXT_PUBLIC_ENGINEER_NAME: z.string().min(1),
    NEXT_PUBLIC_ENGINEER_DEGREE: z.string().min(1),

    // Contact
    NEXT_PUBLIC_PHONE_PRIMARY: z.string().min(1),
    NEXT_PUBLIC_PHONE_SECONDARY: z.string().min(1),
    NEXT_PUBLIC_EMAIL: z.string().email(),

    // Location
    NEXT_PUBLIC_LOCATION_PRIMARY: z.string().min(1),
    NEXT_PUBLIC_LOCATION_SECONDARY: z.string().min(1),
    NEXT_PUBLIC_LOCATION_STATE: z.string().min(1),

    // Social
    NEXT_PUBLIC_INSTAGRAM_HANDLE: z.string().min(1),
    NEXT_PUBLIC_INSTAGRAM_URL: z.string().url(),

    // Working hours
    NEXT_PUBLIC_WORKING_HOURS_WEEKDAY: z.string().min(1),
    NEXT_PUBLIC_WORKING_HOURS_SUNDAY: z.string().min(1),

    // SEO
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_FOUNDED_YEAR: z.string().min(4),
  },

  runtimeEnv: {
    NEXT_PUBLIC_BUSINESS_NAME: process.env.NEXT_PUBLIC_BUSINESS_NAME,
    NEXT_PUBLIC_TAGLINE: process.env.NEXT_PUBLIC_TAGLINE,
    NEXT_PUBLIC_ENGINEER_NAME: process.env.NEXT_PUBLIC_ENGINEER_NAME,
    NEXT_PUBLIC_ENGINEER_DEGREE: process.env.NEXT_PUBLIC_ENGINEER_DEGREE,
    NEXT_PUBLIC_PHONE_PRIMARY: process.env.NEXT_PUBLIC_PHONE_PRIMARY,
    NEXT_PUBLIC_PHONE_SECONDARY: process.env.NEXT_PUBLIC_PHONE_SECONDARY,
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    NEXT_PUBLIC_LOCATION_PRIMARY: process.env.NEXT_PUBLIC_LOCATION_PRIMARY,
    NEXT_PUBLIC_LOCATION_SECONDARY: process.env.NEXT_PUBLIC_LOCATION_SECONDARY,
    NEXT_PUBLIC_LOCATION_STATE: process.env.NEXT_PUBLIC_LOCATION_STATE,
    NEXT_PUBLIC_INSTAGRAM_HANDLE: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE,
    NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    NEXT_PUBLIC_WORKING_HOURS_WEEKDAY: process.env.NEXT_PUBLIC_WORKING_HOURS_WEEKDAY,
    NEXT_PUBLIC_WORKING_HOURS_SUNDAY: process.env.NEXT_PUBLIC_WORKING_HOURS_SUNDAY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_FOUNDED_YEAR: process.env.NEXT_PUBLIC_FOUNDED_YEAR,
  },
});
