module.exports = [
  require('./make-webpack-config')({
    separateStylesheet: true,
    devtool: 'source-map'
  })
]
