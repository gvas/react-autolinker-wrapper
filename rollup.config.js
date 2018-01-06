import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import pkg from './package.json'
import replaceExt from 'replace-ext'

const config = {
  input: 'src/AutolinkerWrapper.js',
  external: ['autolinker', 'react', 'prop-types'],
  plugins: process.env.NODE_ENV == 'production'
    ? [
      babel({ exclude: ['node_modules/**'] }),
      uglify({}, minify),
    ]
    : [
      babel({ exclude: ['node_modules/**'] }),
    ],
}

const getName = name =>
  process.env.NODE_ENV == 'production'
    ? replaceExt(name, '.min.js')
    : name

export default [
  {
    ...config,
    output: [
      {
        // browser-friendly UMD build
        file: getName(pkg.browser),
        format: 'umd',
        name: 'AutolinkerWrapper',
        globals: {
          autolinker: 'Autolinker',
          react: 'React',
          'prop-types': 'PropTypes',
        },
      },
      { /*CommonJS (for Node)*/ file: getName(pkg.main), format: 'cjs' },
      { /*ES module (for bundlers)*/ file: getName(pkg.module), format: 'es' },
    ],
  },
]
