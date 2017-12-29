'use strict'

const joi = require('joi')

const schema = joi.object({
  PORT: joi.number()
}).unknown().required()

const { error, value: envVars } = joi.validate(process.env, schema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  server: {
    port: envVars.PORT
  }
}

module.exports = config
