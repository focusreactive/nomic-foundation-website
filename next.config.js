/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const path = require('path');
const withLinaria = require('next-linaria');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const linariaConfig = withLinaria({
  reactStrictMode: true,
  linaria: {
    cacheDirectory:
      process.env.NODE_ENV === 'production'
        ? '.next/cache/.linaria-cache'
        : '.linaria-cache',
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    dangerouslyAllowSVG: true,
    domains: ['img.shields.io', 'hardhat.org'],
  },
});

module.exports = withPlugins([linariaConfig, withBundleAnalyzer]);
module.exports.linariaConfig = linariaConfig;
