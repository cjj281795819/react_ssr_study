const { resolvePath } = require('./util');

module.exports = {
  mode: 'development',
  entry: resolvePath('../src/client/index.js'),
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/client')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
};