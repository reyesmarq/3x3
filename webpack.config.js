const
  fs = require('fs'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin')

let
  htmlPlugins = [],
  pugDir = `${__dirname}/src/pug/content`

fs.readdirSync(pugDir).forEach(file => {
  if (file.match(/\.pug$/)) {
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        filename: `index.html`,
        template: `${pugDir}/${file}`
      })
    )
  } else {
    let nestedFile = fs.readdirSync(`${pugDir}/${file}`)
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        filename: `${file}/index.html`,
        template: `${pugDir}/${file}/${nestedFile}`
      })
    )
  }
})
  
const config = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'pug-html-loader', options: { basedir: `${__dirname}/src/pug` } }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/pug/content/index.pug'
    // })
    ...htmlPlugins
  ]
}

module.exports = config