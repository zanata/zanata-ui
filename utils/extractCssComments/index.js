'use strict'

var fs = require('fs')
var postcss = require('postcss')
var atImport = require('postcss-import')

function extractCssComments (cssPath, cb) {
  var css = fs.readFileSync(cssPath, 'utf8')
  postcss()
  .use(atImport())
  .process(css, {
    from: cssPath
  }).then(function(result) {
    var comments = ''
    result.root.each(function (rule, i) {
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
    if (typeof cb === 'function') cb(comments)
  })
}

module.exports = extractCssComments
