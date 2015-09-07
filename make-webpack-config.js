var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = function (options) {
  var entry = {
    main: './src/app'
  }
  var loaders = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: options.hotComponents ? ['react-hot', 'babel?stage=0'] : ['babel?stage=0']
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css', 'cssnext']
    }
  ]
  var alias = {

  }
  var externals = [

  ]
  var extensions = ['', '.js', '.jsx', '.css']
  var output = {
    path: __dirname,
    filename: 'bundle.js' + (options.longTermCaching ? '?[chunkhash]' : ''),
    chunkFilename: (options.devServer ? '[id].js' : '[name].js') + (options.longTermCaching ? '?[chunkhash]' : ''),
    sourceMapFilename: 'debugging/[file].map',
    pathinfo: options.debug
  }
  var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/,
    /node_modules[\\\/]items-store[\\\/]/
  ]
  var plugins = [
    new webpack.PrefetchPlugin('react'),
    new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment')
  ]
  plugins.push(new StatsPlugin('stats.json', {
    chunkModules: true,
    exclude: excludeFromStats
  }))
  if (options.commonsChunk) {
    plugins.push(new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js' + (options.longTermCaching ? '?[chunkhash]' : '')))
  }
  if (options.separateStylesheet) {
    plugins.push(new ExtractTextPlugin('bundle.css' + (options.longTermCaching ? '?[contenthash]' : '')))
  }
  if (options.minimize) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin()
    )
  }
  if (options.minimize) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.NoErrorsPlugin()
    )
  }

  return {
    entry: entry,
    output: output,
    module: {
      loaders: loaders
    },
    devtool: options.devtool,
    debug: options.debug,
    externals: externals,
    resolve: {
      extensions: extensions,
      alias: alias
    },
    plugins: plugins,
    devServer: {
      stats: {
        cached: false,
        exclude: excludeFromStats
      }
    },
    cssnext: {
      compress: true,
      features: {
        rem: false,
        pseudoElements: false,
        colorRgba: false
      }
    }
  }
}
