'use strict'

const joi = require('joi')

const schema = joi.object({
  PORT: joi.number(),
  IP: joi.string()
}).unknown().required()

const { error, value: envVars } = joi.validate(process.env, schema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  server: {
    port: envVars.PORT,
    ip: envVars.IP
  }
}

module.exports = config
