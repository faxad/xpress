'use strict'

const logger = require('winston')

const app = require('./app')
const config = require('./config/server')

const port = config.server.port;
const ip = config.server.ip;

app.listen(port,  ip, () => {
  logger.info(`App listening on port ${port}!`)
})
