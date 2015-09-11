var fs = require('fs')
var svgFile = './src/components/Icons/icons.svg'

fs.readFile(svgFile, 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  var result = data.replace(/ style="position:absolute"/g, '')

  fs.writeFile(svgFile, result, 'utf8', function (err) {
    if (err) return console.log(err)
  })
})
