import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import compressor from "astro-compressor";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	integrations: [sitemap(), robotsTxt(), compressor()],
	site: "https://aaronragudos.com",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "ph"],
	},
	vite: {
		css: {
			postcss: {
				autoprefixer: {},
			},
		},
	},
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
