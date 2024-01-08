/** @type {import('next').NextConfig} */

// show report on bundle size
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {}

module.exports = withBundleAnalyzer(nextConfig)
