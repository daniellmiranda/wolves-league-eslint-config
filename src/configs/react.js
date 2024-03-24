import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import base from './base.js';

export default tseslint.config(...base, {
  plugins: { 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,
  },
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
});
