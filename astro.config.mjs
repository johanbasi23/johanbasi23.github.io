// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import edgeoneAdapter from '@edgeone/astro';

// 
export default defineConfig({
  site: 'https//johanbasi23.github.io',
  adapter: edgeoneAdapter(),
  output: 'static',
  integrations: [react()]
});
