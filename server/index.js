'use strict'

const logger = require('winston')

const app = require('./app')
const config = require('./config/server')

const port = config.server.port;

app.listen(port,  () => {
  logger.info(`App listening on port ${port}!`)
})
