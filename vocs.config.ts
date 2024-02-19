import { defineConfig } from 'vocs'

export default defineConfig({
  baseUrl: 'https://docs.okis.dev',
  title: 'okisdev docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
     {
      text: 'Guides',
      collapsed: false,
      items: [
        {
          text: 'Blog',
          link: '/docs/guides/blog',
        },
        {
          text: 'Code Snippets',
          link: '/docs/guides/code-snippets',
        },
        {
          text: 'CSS & Styling',
          link: '/docs/guides/styling',
        },
        {
          text: 'Dynamic OG Images',
          link: '/docs/guides/og-images',
        },
        {
          text: 'Layouts',
          link: '/docs/guides/layouts',
        },
        {
          text: 'Markdown Snippets',
          link: '/docs/guides/markdown-snippets',
        },
        {
          text: 'Sidebar & Top Navigation',
          link: '/docs/guides/navigation',
        },
        {
          text: 'Theming',
          link: '/docs/guides/theming',
        },
        {
          text: 'Twoslash',
          link: '/docs/guides/twoslash',
        },
      ],
    },
  ],
})
