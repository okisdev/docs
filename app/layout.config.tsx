import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "okisdev's docs",
  },
  links: [
    {
      text: 'Harry Yep (@okisdev)',
      url: 'https://okis.dev',
      active: 'url',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/okisdev',
      active: 'url',
    },
  ],
  i18n: true,
};
