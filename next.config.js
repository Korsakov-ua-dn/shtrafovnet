/** @type {import('next').NextConfig} */
const path = require('path');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    USE_MIRAGE_SERVER: process.env.USE_MIRAGE_SERVER
  },
  webpack(config) {
    // disable css-module in Next.js
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    })
    return config;
  },
}

module.exports = nextConfig

