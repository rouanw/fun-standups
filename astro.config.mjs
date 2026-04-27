import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://funstandups.com',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
});
