/** @type {import('next').NextConfig} */
const nextConfig = {
  // @ts-ignore
  allowedDevOrigins: [
    'fundamentals-differences-absence-merit.trycloudflare.com',
    '*.trycloudflare.com',
    'localhost:3000',
  ],
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pautina-rooms.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pautina-rooms.com',
      },
    ],
  },
};

export default nextConfig;
