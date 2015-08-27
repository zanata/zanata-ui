'use strict'

var fs = require('fs')
var postcss = require('postcss')
var atImport = require('postcss-import')

function extractCssComments (cssPath) {
  var css = fs.readFileSync(cssPath, 'utf8')
  var importedCSS =
    postcss()
    .use(atImport())
    .process(css, {
      from: cssPath
    })
    .root

  var comments = ''

  importedCSS.each(function (rule, i) {
    if (rule.type === 'comment') {
      if (rule.text.indexOf('DOC') === 5) {
        comments += rule.text
          .replace(/\n \*/g, '\n')
          .replace(/\n /g, '\n')
          .replace(/\*\sDOC\s/g, '')
          // .replace(/\s$/g, '')
      }
    }
  })

  return comments
}

module.exports = extractCssComments
