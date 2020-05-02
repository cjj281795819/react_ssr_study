const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolvePath } = require('./util');

module.exports = {
  entry: resolvePath('../src/client/index.js'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
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
      '__isServer': false
    }),
    new CleanWebpackPlugin()
  ]
}