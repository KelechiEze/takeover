import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Add other image hosts you use in your components
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;