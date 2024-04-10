/**
 * @type {import("prettier").Config}
 */
module.exports = {
	printWidth: 80,
	tabWidth: 4,
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	semi: true,
	singleQuote: false,
};
