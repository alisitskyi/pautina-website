/** @type {import('next').NextConfig} */
const nextConfig = {
  // @ts-ignore
  allowedDevOrigins: [
    'fundamentals-differences-absence-merit.trycloudflare.com',
    '*.trycloudflare.com',
    'localhost:3000',
  ],
  images: {
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
