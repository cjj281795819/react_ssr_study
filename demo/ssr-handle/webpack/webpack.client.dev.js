const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolvePath } = require('./util');

module.exports = merge(base, {
  mode: 'development',
  entry: resolvePath('../src/client/index.js'),
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/client')
  },
  module: {
    rules: [{
      test: /.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        libs: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'libs'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      '__isServer': false,
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
  ]
});