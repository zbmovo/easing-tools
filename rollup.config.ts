import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

import babel from './config/plugins/babel'
import clean from './config/plugins/clean'
import * as utils from './config/utils'

import pkg from './package.json'
import type { RollupOptions } from 'rollup'

const config: RollupOptions = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'es',
      format: "module",
      preserveModules: true,
    },
    {
      dir: 'lib',
      format: "commonjs",
      preserveModules: true,
    },
    {
      file: pkg.unpkg,
      format: "umd",
      name: pkg.name,
      sourcemap: true
    },
    {
      file: pkg.unpkg.replace('.js', '.min.js'),
      format: "umd",
      name: pkg.name,
      sourcemap: true,
      plugins: [
        terser()
      ]
    }
  ],
  plugins: [
    clean([
      utils.joinRoot('es'),
      utils.joinRoot('lib'),
      utils.joinRoot('umd'),
    ]),
    resolve({
      extensions: ['.ts', '.json']
    }),
    json({
      namedExports: false
    }),
    babel({
      presets: [
        ["@babel/preset-env", { modules: false }],
        ["@babel/preset-typescript"]
      ]
    }),
  ],
}

export default config
