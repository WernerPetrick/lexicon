import { createInertiaApp } from "@inertiajs/react";
import { createElement } from "react";
import { createRoot } from "react-dom/client";

createInertiaApp({
	resolve: (name) => {
		const pages = import.meta.glob("../pages/**/*.jsx", {
			eager: true,
		});
		const page = pages[`../pages/${name}.jsx`];
		if (!page) {
			console.error(`Missing Inertia page component: '${name}.jsx'`);
		}
		return page;
	},

	setup({ el, App, props }) {
		if (el) {
			createRoot(el).render(createElement(App, props));
		} else {
			console.error(
				"Missing root element.\n\n" +
					"If you see this error, it probably means you load Inertia.js on non-Inertia pages.\n" +
					'Consider moving <%= vite_javascript_tag "inertia" %> to the Inertia-specific layout instead.',
			);
		}
	},
});
