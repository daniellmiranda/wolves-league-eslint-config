import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import base from './base.js';

export default tseslint.config(...base, {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    react,
    'jsx-a11y': jsxA11y,
    'react-hooks': reactHooks,
  },
  languageOptions: {
    globals: { ...globals.browser },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
