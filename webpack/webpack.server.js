const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const { resolvePath } = require('./util');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: resolvePath('../src/server/index.js'),
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/server')
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /.css$/,
      loader: './webpack/loader/css-remove-loader'
    }, {
      test: /.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /.(jpg|jpeg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'img/[name].[hash:7].[ext]',
          esModule: false
        }
      }
    }]
  },
  resolve: {
    alias: {
      '@dist': resolvePath('../dist'),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      '__isServer': true,
      '__isDev': isDev
    }),
    new CleanWebpackPlugin()
  ]
};