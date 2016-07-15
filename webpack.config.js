var webpack = require('webpack')
var path = require('path')
var bundleDest = __dirname + '/dist'

module.exports = {
  entry: './src/index.js',
  output: {
    path: bundleDest,
    filename: 'zanata-ui.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'atomic-loader?configPath=' + __dirname +
          '/atomicCssConfig.js' +
          '!babel?presets[]=react,presets[]=stage-0,presets[]=es2015'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css']
  },
  node: {
    __dirname: true
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
}
