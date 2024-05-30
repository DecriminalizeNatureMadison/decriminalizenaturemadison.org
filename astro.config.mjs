import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"
import { astroImageTools } from "astro-imagetools"

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [mdx(), icon({include: {"pajamas": ["arrow-right"]}}), tailwind({
    applyBaseStyles: false,
  }), compress(), astroImageTools],
  site: "https:///decriminalizenaturemadison.org"
})
