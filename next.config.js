/** @type {import('next').NextConfig} */

const withLinaria = require('next-linaria');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// @ts-ignore
const linariaConfig = withLinaria({
  reactStrictMode: true,
  linaria: {
    cacheDirectory:
      process.env.NODE_ENV === 'production'
        ? '.next/cache/.linaria-cache'
        : '.linaria-cache',
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    dangerouslyAllowSVG: true,
  },
});

module.exports = withPlugins([linariaConfig, withBundleAnalyzer]);

module.exports.linariaConfig = linariaConfig;
