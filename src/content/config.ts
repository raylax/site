import { defineCollection, z } from 'astro:content'

const post = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
    tags: z.array(z.string())
  })
})

export const collections = { post }
