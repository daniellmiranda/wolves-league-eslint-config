# Wolves League ESLint config

## Setup
Install the package:
```shell
# NPM
npm i -D @wolves-league/eslint-config

# PNPM
pnpm add -D @wolves-league/eslint-config

# Bun
bun add -D @wolves-league/eslint-config
```

Optionally you can separately install `eslint` as long as it's the version `8.21.0` or *newer* as this package requires `FlatConfig`, which will become the default in ESLint version `9.0.0`.

### If you use VSCode
In `settings.json` add the following configuration:
```json
"eslint.experimental.useFlatConfig": true,
```

### Node.js/Bun
```javascript
// eslint.config.js

import wlgEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlgEslintConfig.configs.node;
```

### React
```javascript
// eslint.config.js

import wlgEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlgEslintConfig.configs.react;
```

### Next.js
```javascript
// eslint.config.js

import wlgEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default wlgEslintConfig.configs.next;
```

The examples above use JSDoc annotations to provide type information which makes it easy to expand the configuration with autocomplete.

If you installed `eslint` separately you can use the type from the `eslint` package instead:
```javascript
// eslint.config.js

import wlgEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
export default wlgEslintConfig.configs.node;
```

### Expand the configuration
If you want to expand or override the configuration you can just spread the config inside an array, and add configuration objects:
```javascript
// eslint.config.js

import wlgEslintConfig from '@wolves-league/eslint-config';

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default [...wlgEslintConfig.configs.node, {
  rules: {
    semi: "error"
  }
}];
```
Refer to [ESLint official documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new) for more information.
