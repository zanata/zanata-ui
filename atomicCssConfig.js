var variables = require('./variables')

function pxToRem (value, baseFontSize) {
  baseFontSize = baseFontSize || '16'
  return +(value / baseFontSize).toFixed(3) + 'rem'
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
      zsans: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif", // eslint-disable-line
      zmono: "'Source Code Pro', Hack, Consolas, monaco, monospace"
    },
    variables
  )
)

module.exports = {
  cssDest: './src/styles/atomic.css',
  configs: {
    breakPoints: {
      sm: '@media screen and (min-width: ' + pxToRem(470) + ')',
      md: '@media screen and (min-width: ' + pxToRem(880) + ')',
      lg: '@media screen and (min-width: ' + pxToRem(1200) + ')'
    },
    custom: customVars,
    classNames: [
      'Lh(1.5)',
      'Ff(zsans)',
      'H(100%)',
      'M(0)',
      // These are needed for generated icon classes
      'W(msn2)',
      'W(msn1)',
      'W(ms0)',
      'W(ms1)',
      'W(ms2)',
      'W(ms3)',
      'W(ms4)',
      'W(ms5)',
      'W(ms6)',
      'H(msn2)',
      'H(msn1)',
      'H(ms0)',
      'H(ms1)',
      'H(ms2)',
      'H(ms3)',
      'H(ms4)',
      'H(ms5)',
      'H(ms6)'
    ]
  }
}
