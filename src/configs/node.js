import globals from 'globals';
import tseslint from 'typescript-eslint';

import base from './base.js';

export default tseslint.config(...base, {
  files: ['**/*.{js,mjs,cjs,ts}'],
  languageOptions: {
    globals: { ...globals.node },
  },
});
