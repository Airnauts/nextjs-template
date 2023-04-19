const path = require('path');
const fs = require('fs');

module.exports = function getAppEnvs() {
  const projectDir = process.cwd();

  let APP_ENV = process.env.APP_ENV;

  if (!APP_ENV) {
    console.warn('\x1b[33m%s\x1b[0m', '⚙️ APP_ENV is not set. Using production');

    // We use production as default because it will be used
    // by e.g. Vercel and Netlify when building the app via `npm run build`
    APP_ENV = 'production';
  }

  const envFilePath = path.join(projectDir, 'env', `.env.${APP_ENV}`);

  if (!fs.existsSync(envFilePath)) {
    throw new Error(`.env.${APP_ENV} file not found`);
  }

  // Create object from .env file
  const envsObject = fs
    .readFileSync(envFilePath)
    .toString()
    .split('\n')
    .map((line) => {
      const [key, value] = line.split('=');
      return { [key]: value };
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

  console.log('\x1b[33m%s\x1b[0m', '⚙️ Using env file:', envFilePath);

  return {
    APP_ENV: APP_ENV,
    ...envsObject,
  };
};
