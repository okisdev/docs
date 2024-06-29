import { remarkImage } from 'fumadocs-core/mdx-plugins';
import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: true,
    remarkPlugins: [remarkImage],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
