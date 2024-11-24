import { Linter } from 'eslint';
import { Config as PrettierConfig } from 'prettier';

declare module '@wolves-league/eslint-config' {
  export interface Config {
    node: Linter.Config;
    react: Linter.Config;
    next: Linter.Config;
    prettier: PrettierConfig;
  }

  export const configs: Config;
}
