var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

const repository = require('./repository')

/**
 * CART (GET) - Retrieves user's cart item(s)
 */
module.exports.getCartItems = (req, res) => {
  repository.getCartItems(req, res);
}

/**
 * CART ITEM (POST) - Handles adding item to cart
 */
module.exports.addItemToCart = (req, res) => {
  document =  {
    userId: req.body.userId,
    itemId: mongodb.ObjectID(req.body.itemId),
    quantity: req.body.quantity
  }
  
  repository.createOne(req, res, 'cart', document)
}

/**
 * UPDATE CART - Handles modification of cart item
 */
module.exports.updateCartItem = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.body._id)
  }

  document = {
    _id: mongodb.ObjectID(req.body._id),
    userId: req.body.userId,
    itemId: mongodb.ObjectID(req.body.itemId),
    quantity: req.body.quantity
  }

  repository.reviseOne(req, res, 'cart', condition, document)
}

/**
 * DELETE CART ITEM - Handles removing user cart item
 */
module.exports.deleteCartItem = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.params.cartItemId)
  }

  repository.removeOne(req, res, 'cart', condition)
}