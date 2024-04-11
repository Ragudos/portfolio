/**
 * Handles whether to show a marquee animation or not. Applies
 * the necessary attributes to the marquee element.
 *
 * This is required for users that do not want
 * to see motions or animations.
 *
 * This assumes that the element passed here has the classname,
 * "marquee-container".
 *
 * @returns a cleanup function to remove the window.matchMedia() listener
 * and a potential setTimeout (when the media changes) when this element gets removed.
 */
export function maybeStartMarquee(el: HTMLElement): () => void {
	const media = window.matchMedia("(prefers-reduced-motion: reduce)");
	let timeout: NodeJS.Timeout | null = null;

	media.addEventListener("change", onMediaChange);
	onMediaChange();

	function onMediaChange() {
		const animationDuration = el.style.getPropertyValue(
			"--_visibility-duration",
		);

		el.setAttribute("data-isloading", "true");

		if (media.matches) {
			const duplicatedChildren = el.querySelectorAll(
				'.marquee-grid > *[aria-hidden="true"]',
			);

			el.setAttribute("data-animate", "false");

			for (let i = 0; i < duplicatedChildren.length; ++i) {
				duplicatedChildren[i].remove();
			}
		} else {
			const children = el.querySelectorAll(".marquee-grid > *");
			const grid = el.querySelector(".marquee-grid");

			el.setAttribute("data-animate", "true");

			for (let i = 0; i < children.length; ++i) {
				const duplicatedNode = children[i].cloneNode(true);

				if (!(duplicatedNode instanceof HTMLElement)) {
					console.error(
						"[Marquee] Duplicated node is not an HTMLElement.",
					);

					return;
				}

				duplicatedNode.setAttribute("aria-hidden", "true");
				grid?.appendChild(duplicatedNode);
			}
		}

		const time = media.matches ? 0 : parseFloat(animationDuration);

		timeout = setTimeout(onTransitionEnd, time);
	}

	function onTransitionEnd() {
		el.setAttribute("data-isloading", "false");
	}

	return () => {
		media.removeEventListener("change", onMediaChange);

		if (timeout) {
			clearTimeout(timeout);
		}
	};
}
