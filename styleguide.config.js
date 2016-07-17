var defaultWebpackConfig = require('./webpack.config.js')
var path = require('path')
var glob = require('glob');

var serverHost = process.env.OPENSHIFT_NODEJS_IP || 'localhost'
var serverPort = process.env.OPENSHIFT_NODEJS_PORT || 3000

module.exports = {
  title: 'Zanata UI Style Guide',
  components: './src/components/*/index.{js,jsx}',
  template: './index.html',
  serverHost: serverHost,
  serverPort: serverPort,
  updateWebpackConfig: function (webpackConfig, env) {
    webpackConfig.entry.push(path.join(__dirname, 'src/styles/base.css'))
    webpackConfig.entry.push(path.join(__dirname, 'src/styles/atomic.css'))
    webpackConfig.entry.push(path.join(__dirname, 'src/styles/animations.css'))
    webpackConfig.entry.push(path.join(__dirname, 'src/styles/extras.css'))
    webpackConfig.entry.push(path.join(__dirname, 'src/styles/styleguide.css'))
    webpackConfig.entry.push(path.join(__dirname, 'src/styles/components/LogoLoader.css'))
    webpackConfig.entry.push(path.join(__dirname, 'src/styles/components/Select.css'))
    webpackConfig.module.loaders =
      webpackConfig.module.loaders
        .concat(defaultWebpackConfig.module.loaders)
    return webpackConfig
  }
}
