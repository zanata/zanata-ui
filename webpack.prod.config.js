var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var _ = require('lodash')
var defaultConfig = require('./webpack.config.js')
var bundleDest = __dirname + '/dist'

module.exports = _.merge({}, defaultConfig, {
  cache: false,
  output: {
    path: bundleDest,
    filename: 'zanata-ui.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          presets: ['react', 'stage-0', 'es2015']
        },
        babelrc: false
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css',
          'autoprefixer?browsers=last 2 versions'
        )
      }
    ]
  },
  plugins: defaultConfig.plugins.concat([
    new ExtractTextPlugin('zanata-ui.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ])
})
