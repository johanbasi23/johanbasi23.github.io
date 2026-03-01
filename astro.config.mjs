// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://johanbasi23.github.io',
  // Si tu repo NO se llama johanbasi23.github.io sino algo como "mi-portfolio":
  // base: '/nombre-del-repo',
  output: 'static',
  integrations: [react()]
});
