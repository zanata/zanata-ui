var webpack = require('webpack')
var _ = require('lodash')
var defaultConfig = require('./webpack.config.js')

module.exports = _.merge({}, defaultConfig, {
  entry: './src/index',
  module: {
    loaders: [
      defaultConfig.module.loaders[0],
      {
        test: /\.css$/,
        loader: 'style!css?safe'
      }
    ]
  },
  plugins: defaultConfig.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ])
})
