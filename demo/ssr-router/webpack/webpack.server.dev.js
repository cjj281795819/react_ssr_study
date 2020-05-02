const merge = require('webpack-merge');
const base = require('./webpack.base');
const WebpackNodeExternals = require('webpack-node-externals')
const { resolvePath } = require('./util');

module.exports = merge(base, {
  mode: 'development',
  target: 'node',
  entry: resolvePath('../src/server/index.js'),
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/server')
  },
  externals: [WebpackNodeExternals()],
});