import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	integrations: [sitemap()],
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
});
