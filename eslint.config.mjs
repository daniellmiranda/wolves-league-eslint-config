import wolvesLeague from './src/index.js';

/** @type {Array<import('eslint').Linter.Config>} */
export default [{ files: ['src/**/*.js'] }, wolvesLeague.configs.node];
