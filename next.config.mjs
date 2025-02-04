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
