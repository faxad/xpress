const joi = require('joi')
var dotenv = require('dotenv')
const result = dotenv.config()

const schema = joi.object({
  SECRET: joi.required()
}).unknown()

const { error, value: envVars } = joi.validate(process.env, schema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  auth: {
    secret: envVars.SECRET
  }
}
  
module.exports = config