# 🐺 Wolves League ESLint config

## Setup

Install the package, ESLint and Prettier as dev dependencies:

##### NPM

```shell
npm i -D @wolves-league/eslint-config eslint prettier
```

##### PNPM

```shell
pnpm add -D @wolves-league/eslint-config eslint prettier
```

##### Bun

```shell
bun add -D @wolves-league/eslint-config eslint prettier
```

### If you use VSCode

In `settings.json` add the following configuration:

```json
"eslint.useFlatConfig": true,
```

### Node.js/Bun

`eslint.config.mjs`

```javascript
import wlConfig from '@wolves-league/eslint-config';

export default wlConfig.configs.node;
```

### React

`eslint.config.mjs`

```javascript
import wlConfig from '@wolves-league/eslint-config';

export default wlConfig.configs.react;
```

### Next.js

`eslint.config.mjs`

```javascript
import wlConfig from '@wolves-league/eslint-config';

export default wlConfig.configs.next;
```

### Extend the configuration

If you want to extend or override the configuration you can just spread the config inside an array, and add configuration objects:

`eslint.config.mjs`

```javascript
import wlConfig from '@wolves-league/eslint-config';

export default [
  ...wlConfig.configs.node,
  {
    rules: {
      semi: 'error',
    },
  },
];
```

Refer to [ESLint official documentation](https://eslint.org/docs/latest/use/configure/configuration-files) for more information.

### CommonJS

If you need to use CommonJS, you can use the following configuration:

`eslint.config.cjs`

```javascript
const wlConfig = require('@wolves-league/eslint-config');

module.exports = wlConfig.configs.react; // react | node | next
```

### Prettier Configuration

To use Prettier, simply create a `prettier.config.mjs` file in the root of your project and export the config:

```javascript
import wlConfig from '@wolves-league/eslint-config';

export default wlConfig.configs.prettier;
```

### Override or Extend Prettier Configuration

If you need to override or extend the Prettier configuration, spread the config object and add any rule you want. Alternatively, you can ignore the config and use your own.

The following code is an example of extending the Prettier configuration with `prettier-plugin-tailwindcss`:

`prettier.config.mjs`
```javascript
import wlConfig from '@wolves-league/eslint-config';

export default {
  ...wlConfig.configs.prettier, // Omit this line to use the default Prettier configuration and/or use your own
  plugins: ['prettier-plugin-tailwindcss'],
  // Add your custom rules and settings here
};
```
