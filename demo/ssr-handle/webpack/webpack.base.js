const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(jpg|png|jpeg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'img/[name].[hash:7].[ext]',
          esModule: false
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}