# 🐺 Wolves League ESLint config

## Setup

Install the package and ESLint as dev dependencies:

##### NPM

```shell
npm i -D @wolves-league/eslint-config eslint
```

##### PNPM

```shell
pnpm add -D @wolves-league/eslint-config eslint
```

##### Bun

```shell
bun add -D @wolves-league/eslint-config eslint
```

### If you use VSCode

In `settings.json` add the following configuration:

```json
"eslint.useFlatConfig": true,
```

### Node.js/Bun

`eslint.config.js`

```javascript
import wlConfig from "@wolves-league/eslint-config";

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlConfig.configs.node;
```

### React

`eslint.config.js`

```javascript
import wlConfig from "@wolves-league/eslint-config";

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlConfig.configs.react;
```

### Next.js

`eslint.config.js`

```javascript
import wlConfig from "@wolves-league/eslint-config";

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlConfig.configs.next;
```

### Extend the configuration

If you want to extend or override the configuration you can just spread the config inside an array, and add configuration objects:

`eslint.config.js`

```javascript
import wlConfig from "@wolves-league/eslint-config";

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default [
  ...wlConfig.configs.node,
  {
    rules: {
      semi: "error",
    },
  },
];
```

Refer to [ESLint official documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new) for more information.

### CommonJS

If you need to use CommonJS, you can use the following configuration:

`eslint.config.js`

```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
const wlConfig = require("@wolves-league/eslint-config");

module.exports = wlConfig.configs.react; // react | node | next
```
