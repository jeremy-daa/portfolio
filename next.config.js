/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.UPLOADER_PROTOCOL,
        hostname: process.env.UPLOADER_HOSTNAME,
      },
    ],
  },
};

module.exports = nextConfig;
