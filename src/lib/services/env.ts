import process from "node:process";
import "server-only";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  GLPI_APP_TOKEN: z.string(),
  GLPI_USER_TOKEN: z.string(),
  GLPI_API_URL: z.string().url(),
  RESEND_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
