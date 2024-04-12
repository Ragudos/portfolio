import siteConfig from "@/config/site_config.json";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const portfolioProjects = await getCollection("portfolio");

	// Add blogs, articles, and other content to the RSS feed
	const rssContent = [...portfolioProjects];

	return rss({
		title: siteConfig.title + " RSS Feed",
		description:
			"RSS feed for " +
			siteConfig.title +
			". Includes blogs, articles, and other content.",
		site: context.site,

		items: [],

		stylesheet: "/rss/styles.xsl",
	});
}
