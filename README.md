<p align="center">
    <img src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/logo-social-white_0.png">
    <h2 align="center">Airnauts Next.js Template</h2>
</p>

### 🚀 Features

- typescript
- eslint (@airnauts/style-guide)
- prettier (@airnauts/style-guide)
- husky
- lint-staged
- commitlint
- storybook
- next-sitemap
- bundle analyzer

### ⚙️ Usage

There are two methods to use this template in your project:

- Click "Use this template" in GitHub repository page
- Use this pnpm command:

```
pnpm create next-app --example https://github.com/Airnauts/nextjs-template <YOUR_APP_NAME>
```

### 🪄 Scripts

```sh
# Start developing 🎉
dev

# Build production app
build

# Preview app (build and start)
preview

# Build, Start, Preview and Bundle Analyze development app
build:development
start:development
preview:development
analyze:development

# Develop, Build, Start, Preview and Bundle Analyze staging app
dev:staging
build:staging
start:staging
preview:staging
analyze:staging

# Develop, Build, Start, Preview and Bundle Analyze production app
dev:production
build:production
start:production
preview:production
analyze:production

# Create new component
pnpm component
```

### 🌎 Environment Variables

`./env/.env.[...]` - Environment variables stored in the `env` folder are public and can be pushed to the repository.

`./.env.[...]` - Environment variables for local development. They are private and should not be pushed to the repository.

### 📝 Commit Message

We use <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> to standardize commit messages.

### Context

<a href="src/contexts/README.md">Read info about custom "Air Context"</a>

### 🤓 VSCode

You can add the <a href="https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits">Conventional Commits</a> plugin to your VSCode and make life easier!
