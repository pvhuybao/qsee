/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["qsee.com.vn"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
