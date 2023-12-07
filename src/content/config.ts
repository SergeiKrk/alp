import { defineCollection, z } from 'astro:content';

const uslugi = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    descr: z.string(),
    box: z.string(),
    h_one: z.string(),
    min_price: z.string(),
    icon: z.string(),
    list_services: z.array(
      z.object({
        url_id: z.string(),
        name: z.string().optional(),
      })
    ),
    works_slider: z.array(
      z.object({
        img: z.string(),
        alt: z.string(),
      })
    ),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    testImage: z.string().optional(),
    categories: z.array(z.string()).default(['другие']),
    tags: z.array(z.string()).default(['другие']),
  }),
});

export const collections = { uslugi };
