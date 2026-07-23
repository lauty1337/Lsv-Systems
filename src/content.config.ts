import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
    schema: ({ image }) => z.object({
            title: z.string(),
            titleSEO: z.string(),
            description: z.string(),
            year: z.string(),
            url: z.string().url(),
            tags: z.array(z.string()),
            img: image(),
            imgHero: image(),
            rotate: z.string(),
            mt: z.string(),
        }),
});

export const collections = { projects };
