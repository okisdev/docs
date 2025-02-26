import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/docs',
      destination: '/docs/apis',
      permanent: true,
    },
    {
      source: '/apis',
      destination: '/docs/apis',
      permanent: true,
    },
    {
      source: '/chat',
      destination: '/docs/chat',
      permanent: true,
    },
    {
      source: '/notion-blog-react',
      destination: '/docs/notion-blog-react',
      permanent: true,
    },
    {
      source: '/notion-photo-react',
      destination: '/docs/notion-photo-react',
      permanent: true,
    },
    {
      source: '/rail',
      destination: '/docs/rail',
      permanent: true,
    },
    {
      source: '/tfl-tube',
      destination: '/docs/tfl-tube',
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.harrly.com',
      },
    ],
  },
};

export default withMDX(config);
