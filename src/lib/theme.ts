(function () {
	const preferredTheme = localStorage.getItem("preferred_color_theme");
	if ("dark" === preferredTheme || "light" === preferredTheme)
		document.documentElement.setAttribute("data-theme", preferredTheme);
	else {
		let e = window.matchMedia("(prefers-color-scheme: dark)");
		e.matches
			? document.documentElement.setAttribute("data-theme", "dark")
			: document.documentElement.setAttribute("data-theme", "light");
	}
})();
