const withAppEnvs = require('./scripts/withAppEnvs');
const withSvgLoader = require('./scripts/withSvgLoader');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
let nextConfig = withSvgLoader(
  withAppEnvs(
    withBundleAnalyzer({
      compiler: {
        removeConsole: process.env.APP_ENV === 'production',
      },
    })
  )
);

module.exports = nextConfig;
