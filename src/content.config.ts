import { glob } from "astro/loaders";

import { defineCollection } from "astro:content";

import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./posts/" }),
  schema: z.object({
    title: z.string(),
    up: z.date().transform((date) => date.toISOString().split("T")[0]),
    mod: z.optional(z.date().transform((date) => date.toISOString().split("T")[0])),
    tags: z.array(z.string()),
    lang: z.string(),
  }),
});

export const collections = { posts };
