import type { NextConfig } from 'next';
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isDev ? '' : '/swiftpost-next-static-template',
};

export default nextConfig;
