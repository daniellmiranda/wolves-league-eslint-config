import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslintReactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import eslintReactRecommended from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginReactCompiler from 'eslint-plugin-react-compiler';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

import base from './base.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  ...base,
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:jsx-a11y/recommended'),
  ...fixupConfigRules(eslintReactRecommended),
  ...fixupConfigRules(eslintReactJsxRuntime),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      eslintPluginReactCompiler,
    },
    rules: {
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
