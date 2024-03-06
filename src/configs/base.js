import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          printWidth: 80,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
        },
        {
          usePrettierrc: false,
        },
      ],
    },
  },
);
