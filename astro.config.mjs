import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import remarkToc from 'remark-toc'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://inurl.org',
  integrations: [sitemap(), tailwind(), react(), mdx()],
  compressHTML: true,
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
  }
})
