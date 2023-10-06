const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
}

module.exports = withNextra(nextConfig)
