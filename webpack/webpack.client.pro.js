const merge = require('webpack-merge');
const base = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { resolvePath } = require('./util');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'index-[hash:8].js',
    path: resolvePath('../dist/client')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index-[contentHash].css'
    }),
    new webpackManifestPlugin({
      fileName: '../mainfest.json'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ]
})
