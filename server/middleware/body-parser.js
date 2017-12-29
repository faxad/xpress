'use strict'

const bodyParser = require('body-parser');

module.exports = [
  // create application/json parser
  bodyParser.json(),
  // create application/x-www-form-urlencoded parser
  bodyParser.urlencoded({extended: true})
]
