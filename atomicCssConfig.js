var variables = require('./src/constants/styles')

function pxToRem (pixels, baseFontSize) {
  baseFontSize = baseFontSize || '16'
  return +(pixels / baseFontSize).toFixed(3) + 'rem'
}

function flatten (target) {
  var output = {}

  function step (object, prev) {
    Object.keys(object).forEach(function (key) {
      var value = object[key]
      var type = Object.prototype.toString.call(value)
      var isobject = (
      type === '[object Object]' ||
        type === '[object Array]'
      )

      if (isobject && Object.keys(value).length) {
        return step(value, key)
      }

      output[key] = value
    })
  }

  step(target)

  return output
}

// Adding font-families here as sass doesn't like importing them from json.
// Also, we don't need them in sass anyway
var customVars = flatten(
  Object.assign(
    {},
    {
      zsans: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", // eslint-disable-line max-len
      zmono: "'Source Code Pro', Hack, Consolas, monaco, monospace"
    },
    variables
  )
)

module.exports = {
  cssDest: './src/styles/atomic.css',
  configs: {
    breakPoints: {
      oxsm: '@media screen and (max-width: ' + pxToRem(469) + ')',
      sm: '@media screen and (min-width: ' + pxToRem(470) + ')',
      lesm: '@media screen and (max-width: ' + pxToRem(879) + ')',
      md: '@media screen and (min-width: ' + pxToRem(880) + ')',
      lg: '@media screen and (min-width: ' + pxToRem(1200) + ')'
    },
    custom: customVars
  }
}
