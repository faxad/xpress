'use strict'

const joi = require('joi')

const schema = joi.object({
  ENV: joi.string()
    .allow(['dev', 'test', 'prod'])
}).unknown().required()

const { error, value: envVars } = joi.validate(process.env, schema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  env: envVars.ENV
}

module.exports = config
