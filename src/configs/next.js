import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

import react from './react.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  ...react,
  ...fixupConfigRules(...compat.extends('plugin:@next/next/recommended')),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
