import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import vitePreact from '@preact/preset-vite'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://jan-mueller.at',
  server: {
    host: true,
  },
  integrations: [
    image(),
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    vue(),
    robotsTxt(),
    prefetch(),
    preact(),
  ],
  vite: {
    plugins: [vitePreact()],
  },
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
})
