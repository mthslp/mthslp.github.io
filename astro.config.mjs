import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mthslp.github.io',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
