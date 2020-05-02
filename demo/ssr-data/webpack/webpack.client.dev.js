const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');
const { resolvePath } = require('./util');

module.exports = merge(base, {
  mode: 'development',
  entry: resolvePath('../src/client/index.js'),
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/client')
  },
  plugins: [
    new webpack.DefinePlugin({
      '__isServer': false,
    }),
  ]
});