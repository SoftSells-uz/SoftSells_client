/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/order",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://softsells.uz" },
          {
            key: "Access-Control-Allow-Methods",
            value: "POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.vectorstock.com",
        port: "",
        pathname: "/i/1000x1000/03/74/**",
      },
    ],
    domains: [
      "main.d2psr22hn6d68i.amplifyapp.com",
      "firebasestorage.googleapis.com",
      "cdn.vectorstock.com",
    ],
  },
};

module.exports = nextConfig;
