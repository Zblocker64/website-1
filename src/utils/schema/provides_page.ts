import { defineCollection, z } from "astro:content";

export const providersPage = defineCollection({
  schema: ({ image }) => {
    return z.object({
      heroSection: z.object({
        title: z.string(),
        description: z.string(),
        heroImage: image(),
        links: z.array(
          z.object({
            label: z.string(),
            link: z.string(),
          }),
        ),
        button: z.object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean(),
        }),
        button2: z.object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean(),
        }),
      }),

      praetorResourcesSection: z.object({
        title: z.string(),
        cards: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            badge: image(),
            link: z.string(),
            linkIcon: z.boolean(),
            linkLabel: z.string(),
          }),
        ),
      }),

      resourcesSection: z.object({
        title: z.string(),
        cards: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            img: image(),
            link: z.string().optional(),
          }),
        ),
      }),

      additionalDeploymentSection: z.object({
        title: z.string(),
        resources: z.array(
          z.object({
            title: z.string(),
            content: z.string(),
            link: z.string(),
          }),
        ),
      }),
    });
  },
});
