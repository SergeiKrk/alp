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
        active: z.boolean().optional(),
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
      title_id: z.string().optional(),
      description: z.string().optional(),
      list_service: z
        .array(
          z.object({
            title: z.string(),
            title_id: z.string().optional(),
            description: z.string().optional(),
            description_pp: z.string().optional(),
            description_ppp: z.string().optional(),
            principle_operation: z.string().optional(),
            principle_operation_title: z.string().optional(),
            image: z.string().optional(),
            advantages_list: z.array(z.string()).optional(),
            advantages_list_title: z.string().optional(),
            advantages_list_title_slim: z.string().optional(),
            disadvantages_list: z.array(z.string()).optional(),
            disadvantages_list_title: z.string().optional(),
            disadvantages_list_title_slim: z.string().optional(),
            info: z.string().optional(),
            link: z.string().optional(),
            price_title: z.string().optional(),
            price_volume_1: z.string().optional(),
            price_1: z.string().optional(),
            price_unit: z.string().optional(),
            price_volume_2: z.string().optional(),
            price_2: z.string().optional(),
            min_volume_price: z.string().optional(),
          })
        )
        .optional(),
    }),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default(['другие']),
    tags: z.array(z.string()).default(['другие']),
  }),
});

export const collections = { uslugi };
