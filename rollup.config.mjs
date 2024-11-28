import terser from '@rollup/plugin-terser';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es',
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
    ],
    plugins: [terser()],
  },
];
