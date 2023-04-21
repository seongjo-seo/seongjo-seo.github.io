/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    NAVER_SITE: process.env.NAVER_SITE,
  },
}

module.exports = nextConfig
