import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'
import replaceExt from 'replace-ext'

const config = {
  input: 'src/AutolinkerWrapper.js',
  external: ['autolinker', 'react', 'prop-types'],
  plugins: [babel({ exclude: ['node_modules/**'] })],
}

export default [
  // browser-friendly UMD build
  {
    ...config,
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'AutolinkerWrapper',
      globals: {
        autolinker: 'Autolinker',
        react: 'React',
        'prop-types': 'PropTypes',
      },
    },
  },

  // minified browser-friendly UMD build
  {
    ...config,
    output: {
      file: replaceExt(pkg.browser, '.min.js'),
      format: 'umd',
      name: 'AutolinkerWrapper',
      globals: {
        autolinker: 'Autolinker',
        react: 'React',
        'prop-types': 'PropTypes',
      },
    },
    plugins: [...config.plugins, uglify()],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    ...config,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
]
