import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://provolution.org',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
