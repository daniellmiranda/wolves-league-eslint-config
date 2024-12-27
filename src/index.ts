import type { Config } from 'prettier';
import { ConfigArray } from 'typescript-eslint';

import { nodeConfig } from './configs/node';
import { prettierConfig } from './configs/prettier';
import { reactConfig } from './configs/react';

const eslintConfig: {
  configs: { node: ConfigArray; react: ConfigArray; prettier: Config };
} = {
  configs: {
    node: nodeConfig,
    react: reactConfig,
    prettier: prettierConfig,
  },
};

export default eslintConfig;
