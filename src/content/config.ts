import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			video: z.string(),
			videoBanner: image().refine((img) => img.width >= 1000),
			title: z.string().min(1),
			name: z.string().min(1),
			description: z.string().min(1),
			startedOn: z
				.string()
				.pipe(z.coerce.date())
				.transform((date) => {
					return new Date(date);
				}),
		}),
});

export const collections = {
	portfolio: portfolioCollection,
};
