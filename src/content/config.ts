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
    banners: z.array(
      z.object({
        img: z.string(),
        alt: z.string(),
        height: z.string(),
      })
    ),
    our_service: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      list_service: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          principle_operation: z.string().optional(),
          image: z.string().optional(),
          advantages_list: z.array(z.string()).optional(),
          disadvantages_list: z.array(z.string()).optional(),
          link: z.string().optional(),
        })
      ),
    }),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    testImage: z.string().optional(),
    categories: z.array(z.string()).default(['другие']),
    tags: z.array(z.string()).default(['другие']),
  }),
});

export const collections = { uslugi };
