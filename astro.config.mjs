import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://evanwolfe.dev',
  integrations: [
    // Expressive Code must come before MDX
    expressiveCode({
      // Light by default; dark only applies if <html data-theme="dark"> is set
      themes: ['github-light', 'github-dark'],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      plugins: [pluginLineNumbers()],
      defaultProps: { showLineNumbers: false },
      styleOverrides: {
        borderRadius: '0.6rem',
        codeFontFamily: "'JetBrains Mono', ui-monospace, monospace",
        codeFontSize: '0.85rem',
        frames: { shadowColor: 'transparent' },
      },
    }),
    mdx(),
    sitemap(),
  ],
});
