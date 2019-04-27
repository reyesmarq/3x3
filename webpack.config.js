const
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  module: {
    rules: []
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html'
    })
  ]
}

module.exports = config