import { Linter } from 'eslint';
import { Config as PrettierConfig } from 'prettier';

declare module '@wolves-league/eslint-config' {
  export interface Config {
    node: Linter.FlatConfig;
    react: Linter.FlatConfig;
    next: Linter.FlatConfig;
    prettier: PrettierConfig;
  }

  export const configs: Config;
}
