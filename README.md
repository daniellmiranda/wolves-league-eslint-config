# Wolves League ESLint config

## Setup

Install the package and ESLint as dev dependencies:

##### NPM
```shell
npm i -D @wolves-league/eslint-config eslint@8.57.0
```
##### PNPM
```shell
pnpm add -D @wolves-league/eslint-config eslint@8.57.0
```
##### Bun
```shell
bun add -D @wolves-league/eslint-config eslint@8.57.0
```

**You need to install `eslint@8.57.0` because currently the plugins `eslint-plugin-react` and `next/eslint-plugin-next`** does not support ESLint v9. When these packages are fixed, this will not be necessary.

### If you use VSCode

In `settings.json` add the following configuration:

```json
"eslint.experimental.useFlatConfig": true,
```

### Node.js/Bun

`eslint.config.js`

```javascript
import wlEslintConfig from '@wolves-league/eslint-config'; 

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlEslintConfig.configs.node;
```

### React

`eslint.config.js`

```javascript
import wlEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlEslintConfig.configs.react;
```

### Next.js

`eslint.config.js`

```javascript
import wlEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlEslintConfig.configs.next;
```

### Expand the configuration

If you want to expand or override the configuration you can just spread the config inside an array, and add configuration objects:

`eslint.config.js`

```javascript
import wlEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default [
  ...wlEslintConfig.configs.node,
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
```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
const wlEslintConfig = require('@wolves-league/eslint-config');

module.exports = wlEslintConfig.configs.react; // react | node | next
```
