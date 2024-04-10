type BatchListenersParameters<T extends HTMLElement> = {
	callback: (evt: Event) => void;
	element: T;
};

/**
 * batches multiple listeners for the same event
 */
export function batchListeners<T extends HTMLElement>(
	eventName: keyof HTMLElementEventMap,
	parameters: BatchListenersParameters<T>[],
): void {
	for (let i = 0; i < parameters.length; ++i) {
		const { callback, element } = parameters[i];

		element.addEventListener(eventName, callback);
	}
}
