/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ichef.bbci.co.uk'], // domains allowed
    deviceSizes: [320, 640, 860, 1000], // sets the breakpoint for an image
  },
  distDir: 'build',
};

module.exports = nextConfig;
