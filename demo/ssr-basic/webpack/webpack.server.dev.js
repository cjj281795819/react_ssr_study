const WebpackNodeExternals = require('webpack-node-externals')
const { resolvePath } = require('./util');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: resolvePath('../src/server/index.js'),
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/server')
  },
  externals: [WebpackNodeExternals()],
  module: {
    rules: [{
      test: /.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
};