// @ts-check
import { defineConfig, svgoOptimizer } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
  devToolbar: {
    enabled: false,
  },
});