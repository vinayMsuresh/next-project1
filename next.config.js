/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodburl : 'mongodb://localhost:27017/next_project1',
    saltRounds : 10,
    jwtSecret: 'fedlkrfq;ferf'
  }
}

module.exports = nextConfig
