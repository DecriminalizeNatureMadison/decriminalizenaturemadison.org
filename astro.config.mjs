import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"
import imageTools from "astro-imagetools"

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [mdx(), icon({include: {"pajamas": ["arrow-right"]}}), tailwind({
    applyBaseStyles: false,
  }), compress(), imageTools({
    formats: ["webp"],
    quality: 100
  })],
  site: "https:///decriminalizenaturemadison.org"
})
