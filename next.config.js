const getAppEnvs = require('./scripts/getAppEnvs');

const { envs } = getAppEnvs();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: envs,
  compiler: {
    removeConsole: process.env.APP_ENV === 'production',
  },
};

module.exports = nextConfig;
