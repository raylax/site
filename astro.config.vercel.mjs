import { defineConfig } from 'astro/config'
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
