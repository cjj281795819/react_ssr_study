const merge = require('webpack-merge');
const base = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { resolvePath } = require('./util');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'index-[contentHash:10].js',
    path: resolvePath('../dist/client')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index-[contentHash:10].css'
    }),
    new webpackManifestPlugin({
      fileName: '../mainfest.json',
      filter: ({ name }) => {
        const ext = name.slice(name.lastIndexOf('.'));
        return ext === '.js' || ext === '.css';
      }
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ]
})
