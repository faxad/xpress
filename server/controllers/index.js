'use strict'

const inventory = require('./inventory')
const auth = require('./auth')
const review = require('./review')
const cart = require('./cart')

module.exports = {
  inventory: inventory,
  auth: auth,
  review: review,
  cart: cart
}
