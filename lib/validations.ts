import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string(),
  message: z.string().max(2000),
});
