import path from 'path'
import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default [{
  input: path.join(__dirname, '..', 'src', 'components', 'Datepicker.vue'),
  output: [
    {
      file: 'dist/vuejs-datepicker.js',
      format: 'umd',
      name: 'vuejsDatepicker'
    },
    {
      file: 'dist/vuejs-datepicker.common.js',
      format: 'cjs'
    },
    {
      file: 'dist/vuejs-datepicker.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    vue({css: true}),
    postcss({plugins: [autoprefixer()]}),
    commonjs(),
    babel({exclude: 'node_modules/**'})
  ]
}, {
  input: path.join(__dirname, '..', 'src', 'components', 'Datepicker.vue'),
  output: {
    file: 'dist/vuejs-datepicker.min.js',
    format: 'umd',
    name: 'vuejsDatepicker'
  },
  plugins: [
    vue({css: true}),
    postcss({plugins: [autoprefixer()]}),
    commonjs(),
    terser(),
    babel({exclude: 'node_modules/**'})
  ]
},{
  input: path.join(__dirname, '..', 'example', 'main.js'),
  output: {
    file: path.join(__dirname, '..', 'docs', 'demo.min.js'),
    format: 'iife',
    name: 'demo',
    sourcemap: true
  },
  plugins: [
    vue({
      css: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      mainFields: ['module', 'main']
    }),
    commonjs(),
    terser(),
    babel({exclude: 'node_modules/**'}),
  ]
}]
