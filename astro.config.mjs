import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-frontend-masters.netlify.app',
	output: 'hybrid',
	integrations: [
		solid({
			include: ['/src/components/cart.tsx'],
		}),
		react({
			include: ['/src/components/add-to-cart.tsx'],
		}),
	],
	adapter: netlify(),
});
