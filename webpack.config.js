const
  fs = require('fs'),
  glob = require('glob'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ImageminWebpackPlugin = require('imagemin-webpack-plugin').default,
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  imageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin'),
  autoprefixer = require('autoprefixer')
  discardDuplicates =  require('postcss-discard-duplicates'),
  combineDuplicatedSelectos = require('postcss-combine-duplicated-selectors'),
  mqPacker = require('css-mqpacker'),
  PurgecssWebpackPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: `${__dirname}/src`
}
  
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
    'styles.css.ig': './src/scss/main.scss',
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
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: { browser: ['last 2 versions', 'edge 16-18'] },
              plugins: () => [ autoprefixer, mqPacker, discardDuplicates, combineDuplicatedSelectos ]
            }
          },
          { loader: 'sass-loader', options: { outputStyle: 'compressed' } }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', options: { presets: ['@babel/preset-env' ] } }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: './src/img', to: 'assets/img/[name].[ext]' }
    ]),
    new ImageminWebpackPlugin({
      plugins: [imageminJpegRecompress({ quality: 50 })],
      pngquant: { quality: 50 },
      svgo: { quality: 50 },
      gifsicle: { quality: 50 }
    }),
    new imageminWebpWebpackPlugin({
      config: [{ test: /\.jpe?g/, options: { quality:  50 } }], strict: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.css'
    }),
    new PurgecssWebpackPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
    ...htmlPlugins
  ]
}

module.exports = config