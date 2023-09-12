import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import config from './astro.config.mjs'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  ...config,
  compressHTML: true,
  adapter: vercel(),
  output: 'hybrid',
  experimental: {
    ...config.experimental,
    hybridOutput: true
  }
})
