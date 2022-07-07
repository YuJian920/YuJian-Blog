/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
  images: {
    domains: ["yujian-bolg-1308518379.cos.ap-guangzhou.myqcloud.com"],
  },
};

module.exports = nextConfig;
