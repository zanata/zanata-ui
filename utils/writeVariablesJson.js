var jsonfile = require('jsonfile')
var variables = require('../variables')
var file = './variables.json'

jsonfile.writeFile(file, variables, {spaces: 2}, function (err) {
  err && console.error(err)
})
