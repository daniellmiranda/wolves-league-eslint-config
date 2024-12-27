import globals from 'globals';
import { ConfigArray } from 'typescript-eslint';

import { baseConfig } from './base';

export const nodeConfig: ConfigArray = [
  ...baseConfig,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];
