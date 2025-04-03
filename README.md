# Stardrop Docs - 星落之书 [![Netlify Status](https://api.netlify.com/api/v1/badges/26158070-e4ca-4e08-90eb-813dba1fe105/deploy-status)](https://app.netlify.com/sites/stardrop-docs/deploys)

这是⭐️落星阁⭐️服务器玩家手册（[Stardrop-Docs](https://stardrop-docs.netlify.app)）主仓库

Here is the main repository for the [Stardrop-Docs](https://stardrop-docs.netlify.app)(Player Guideline).

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
