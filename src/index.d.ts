import type { Linter } from "eslint";

declare module '@wolves-league/eslint-config' {
  export type Config = Linter.FlatConfig;
  export interface WolvesLeagueEslintConfig {
    configs: {
      node: Config;
      react: Config;
      next: Config;
    }
  }

  const wolvesLeagueEslintConfig: WolvesLeagueEslintConfig;
  export default wolvesLeagueEslintConfig;
}