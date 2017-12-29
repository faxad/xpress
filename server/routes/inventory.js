'use strict'

const express = require('express')
const expressJwt = require('express-jwt');
const routes = express();

const controllers = require('../controllers')
const config = require('../config/auth')

const checkAuth = expressJwt({
  secret: config.auth.secret
});

routes.get('/', controllers.inventory.getItems);
routes.post('/', checkAuth, controllers.inventory.createItem);
routes.put('/', checkAuth, controllers.inventory.updateItem);
routes.delete('/:itemId', checkAuth, controllers.inventory.deleteItem);
routes.get('/:username', checkAuth, controllers.inventory.getItemsForUser);
routes.get('/:itemId/detail', controllers.inventory.getItemDetail);

module.exports = routes
