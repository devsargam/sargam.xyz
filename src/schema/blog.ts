import { z } from 'zod';

export const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
});
