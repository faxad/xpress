'use strict'

const express = require('express')
const expressJwt = require('express-jwt');
const routes = express();

const controllers = require('../controllers')
const config = require('../config/auth')

const checkAuth = expressJwt({
  secret: config.auth.secret
});

routes.post('/', checkAuth, controllers.review.addItemReview);
routes.put('/', checkAuth, controllers.review.updateReview);
routes.delete('/:reviewId', checkAuth, controllers.review.deleteReview);

module.exports = routes
