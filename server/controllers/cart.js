var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

const repository = require('./repository')

/**
 * Retrieves user's cart item(s)
 * 
 * @api {get} /cart:username List
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName GetCartItems
 * @apiGroup Cart
 *
 * @apiParam (Route Parameters) {String} username Identifier for the user.
 * 
 * @apiSuccess {Mongoid} _id      Identifier for the cart item
 * @apiSuccess {Mongoid} itemId   Identifier for the product
 * @apiSuccess {Number}  quantity Number of the same item in cart
 * @apiSuccess {JSON}    item     Product information for the cart item
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "_id": "5a1d4049802b64ace0d42190",
 *         "itemId": "5a1aa5679dd67514586f5d7a",
 *         "quantity": 3,
 *         "item": {
 *           "name": "abcProduct 1",
 *           "code": "P1",
 *           "unitPrice": "23"
 *       }
 *     ]
 * 
 * @apiSampleRequest /cart/:username
 */
module.exports.getCartItems = (req, res) => {
  repository.getCartItems(req, res);
}

/**
 * Handles adding item to cart
 * 
 * @api {post} /cart Add
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName AddItemToCart
 * @apiGroup Cart
 * 
 * @apiParam {String}  userId   Identifier for the user
 * @apiParam {Mongoid} itemId   Identifier for the product
 * @apiParam {Number}  quantity Quantity of the item in cart
 * 
 * @apiSuccess {Mongoid} _id      Identifier for the review
 * @apiSuccess {String}  userId   Identifier for the user
 * @apiSuccess {Mongoid} itemId   Identifier for the product
 * @apiSuccess {Number}  quantity Quantity of the item in cart
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "_id": "5a1aa5679dd67514586f5d7a",
 *       "userId": "john.doe"
 *       "itemId": "6a1aa5679xd67513586g5d2u",
 *       "quantity": 1
 *     }
 * 
 * @apiSampleRequest /cart
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
 * Handles modification of cart item
 * 
 * @api {put} /cart Modify
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName UpdateCartItem
 * @apiGroup Cart
 * 
 * @apiParam {Mongoid} _id      Identifier for the cart item
 * @apiParam {String}  userId   Identifier for the user
 * @apiParam {Mongoid} itemId   Identifier for the product
 * @apiParam {Number}  quantity Quantity of the item in cart
 * 
 * @apiSuccess {Mongoid} _id      Identifier for the cart item
 * @apiSuccess {String}  userId   Identifier for the user
 * @apiSuccess {Mongoid} itemId   Identifier for the product
 * @apiSuccess {Number}  quantity Quantity of the item in cart
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5a1aa5679dd67514586f5d7a",
 *       "userId": "john.doe"
 *       "itemId": "6a1aa5679xd67513586g5d2u",
 *       "quantity": 2
 *      }
 * 
 * @apiSampleRequest /cart
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
 * Handles removing user cart item
 * 
 * @api {delete} /cart/:cartItemId Remove
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName DeleteCartItem
 * @apiGroup Cart
 * 
 * @apiParam (Route Parameters) {Mongoid} cartItemId Identifier for the cart item
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 OK
 * 
 * @apiSampleRequest /cart
 */
module.exports.deleteCartItem = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.params.cartItemId)
  }

  repository.removeOne(req, res, 'cart', condition)
}