import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkToc from 'remark-toc';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), tailwind(), react(), mdx()],
  markdown: {
    remarkPlugins: [remarkToc],
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true
    }
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/**']
      }
    }
  },
  output: "server",
  adapter: vercel()
});