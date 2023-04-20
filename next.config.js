/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    USE_MIRAGE_SERVER: process.env.USE_MIRAGE_SERVER
  }
}

module.exports = nextConfig
