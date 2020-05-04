const base = require('./webpack.base');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolvePath } = require('./util');

module.exports = merge(base, {
  mode: 'development',
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/client')
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
  ]
});