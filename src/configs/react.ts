import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import { ConfigArray, ConfigWithExtends } from 'typescript-eslint';
import { baseConfig } from './base';

export const reactConfig: ConfigArray = [
  ...baseConfig,
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat!.recommended as ConfigWithExtends,
  reactPlugin.configs.flat!['jsx-runtime'] as ConfigWithExtends,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-compiler/react-compiler': 'error',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
