import { useEffect } from "react";

export const useEventListener = (e: any, handler: any, passive = false) => {
	useEffect(() => {
		window.addEventListener(e, handler, passive);

		return function remove() {
			window.removeEventListener(e, handler);
		};
	});
};
