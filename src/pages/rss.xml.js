import siteConfig from "@/config/site_config.json";
import rss from "@astrojs/rss";

export function GET(context) {
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
