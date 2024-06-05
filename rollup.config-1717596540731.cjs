'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var alias = require('@rollup/plugin-alias');
var commonjs = require('@rollup/plugin-commonjs');
var resolve = require('@rollup/plugin-node-resolve');
var replace = require('@rollup/plugin-replace');
var typescript = require('@rollup/plugin-typescript');
var url = require('@rollup/plugin-url');
var svgr = require('@svgr/rollup');
var path = require('path');
var babel = require('rollup-plugin-babel');
var del = require('rollup-plugin-delete');
var dotenv = require('rollup-plugin-dotenv');
var postcss = require('rollup-plugin-postcss');
var styles = require('rollup-plugin-styles');
var rollupPluginTerser = require('rollup-plugin-terser');
var pluginutils = require('@rollup/pluginutils');

function removeDataTestId(options = {}) {
  const filter = pluginutils.createFilter(options.include || ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], options.exclude);
  const dataTestIdPattern = /data-testid/g;

  return {
    name: 'remove-data-testid',
    transform(code, id) {
      if (!filter(id)) return null;

      const transformedCode = code.replace(dataTestIdPattern, '');

      return {
        code: transformedCode,
        map: { mappings: '' },
      };
    },
  };
}

var rollup_config = {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['react'],
  plugins: [
    postcss({
      alias: { find: '@', replacement: path.resolve(__dirname, 'src') },
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    styles({
      mode: ['inject', {
        modules: true,
        exportGlobals: true,
        defaultExport: true,
      }],
    }),
    resolve(),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    }),
    del({ targets: 'dist/*' }),
    rollupPluginTerser.terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
    }),
    typescript(),
    commonjs(),
    dotenv,
    svgr(),
    url({ include: ['**/*.svg'], limit: Infinity }),
    removeDataTestId(),
  ],
};

exports.default = rollup_config;
