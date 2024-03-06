import next from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import react from './react.js';

export default tseslint.config(...react, {
  plugins: {
    '@next/next': next,
  },
  rules: {
    ...next.configs.recommended.rules,
    ...next.configs['core-web-vitals'].rules,
  },
});
