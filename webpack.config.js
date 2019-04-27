const
  fs = require('fs'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
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
  entry: {
    'assets/css/styles.css.ig': './src/scss/main.scss',
    'assets/js/scripts.js': './src/es/index.js'
  },

  output: {
    filename: '[name]',
    publicPath: '/'
  },
  
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'pug-html-loader', options: { basedir: `${__dirname}/src/pug` } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { outputStyle: 'compressed' } }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.css'
    }),
    ...htmlPlugins
  ]
}

module.exports = config