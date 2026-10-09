import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cv = defineCollection({
  loader: glob({ pattern: 'cv.md', base: './src/content' }),
  schema: z.object({
    summary: z.string(),
    experiences: z.array(
      z.object({
        role: z.string(),
        company: z.string(),
        period: z.coerce.string(),
        location: z.string().optional(),
        missions: z.array(z.string()),
      })
    ),
    education: z.array(
      z.object({
        degree: z.string(),
        school: z.string(),
        period: z.coerce.string(),
        details: z.string().optional(),
      })
    ),
    languages: z.array(
      z.object({
        name: z.string(),
        level: z.string(),
      })
    ),
    interests: z.array(z.string()),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: 'skills.md', base: './src/content' }),
  schema: z.object({
    categories: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
        items: z.array(z.string()),
        note: z.string().optional(),
      })
    ),
    projects: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        year: z.coerce.string().optional(),
        tech: z.array(z.string()),
        link: z.string().optional(),
        github: z.string().optional(),
      })
    ),
  }),
});

export const collections = { cv, skills };
