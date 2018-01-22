var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

var config = require('../config/db')

const repository = require('./repository')

/**
 * Retrieves inventory list for non-authenticated user
 * 
 * @api {get} /inventory List (unauthenticated)
 * @apiName GetItems
 * @apiGroup Inventory
 *
 * @apiSuccess {Mongoid} _id             Identifier for the product.
 * @apiSuccess {String}  name            Name of the product.
 * @apiSuccess {String}  code            Code assigned to the product.
 * @apiSuccess {Number}  unitPrice       Price of the product.
 * @apiSuccess {Number}  quantityInStock Number of items in stock.
 * @apiSuccess {Date}    releaseDate     Date of release.
 * @apiSuccess {String}  category        Category of product.
 * @apiSuccess {String}  description     Brief description of the product.
 * @apiSuccess {Number}  rating          Customer rating of the product.
 * @apiSuccess {String}  imageUrl        URL for the product image.
 * @apiSuccess {Number}  reviewsCount    Number of reviews submitted by users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "_id": "5a1aa5679dd67514586f5d7a",
 *         "name": "abcProduct 1",
 *         "code": "P1",
 *         "unitPrice": "50",
 *         "quantityInStock": "5",
 *         "releaseDate": null,
 *         "category": foo,
 *         "description": "desc of item",
 *         "rating": null,
 *         "imageUrl": null,
 *         "reviewsCount": 4
 *        }
 *      ]
 * 
 * @apiSampleRequest /inventory
 */
module.exports.getItems = (req, res) => {
  repository.getItems(req, res);
}

/**
 * Retrieves inventory list for authenticated user
 * 
 * @api {get} /inventory:username List (authenticated)
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName GetItemsForUser
 * @apiGroup Inventory
 *
 * @apiParam (Route Parameters) {String} username Identifier for the user.
 * 
 * @apiSuccess {Mongoid} _id             Identifier for the product.
 * @apiSuccess {String}  name            Name of the product.
 * @apiSuccess {String}  code            Code assigned to the product.
 * @apiSuccess {Number}  unitPrice       Price of the product.
 * @apiSuccess {Number}  quantityInStock Number of items in stock.
 * @apiSuccess {Date}    releaseDate     Date of release.
 * @apiSuccess {String}  description     Brief description of the product.
 * @apiSuccess {String}  category        Category of product.
 * @apiSuccess {Number}  rating          Customer rating of the product.
 * @apiSuccess {String}  imageUrl        URL for the product image.
 * @apiSuccess {Number}  reviewsCount    Number of reviews submitted by users.
 * @apiSuccess {Number}  cartCount       Quantity of items in users cart.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "_id": "5a1aa5679dd67514586f5d7a",
 *         "name": "abcProduct 1",
 *         "code": "P1",
 *         "unitPrice": "50",
 *         "quantityInStock": "5",
 *         "releaseDate": null,
 *         "category": foo,
 *         "description": "desc of item",
 *         "rating": null,
 *         "imageUrl": null,
 *         "reviewsCount": 4,
 *         "cartCount": 3
 *        }
 *      ]
 * 
 * @apiSampleRequest /inventory/:username
 */
module.exports.getItemsForUser = (req, res) => {
  repository.getItemsForUser(req, res)
}

/**
 * Retrieves item detail (includes users reviews)
 * 
 * @api {get} /inventory/:itemId/detail Detail
 * @apiName getItemDetail
 * @apiGroup Inventory
 *
 * @apiParam (Route Parameters) {String} itemId Identifier for the item.
 * 
 * @apiSuccess {Mongoid} _id             Identifier for the product.
 * @apiSuccess {String}  name            Name of the product.
 * @apiSuccess {String}  code            Code assigned to the product.
 * @apiSuccess {Number}  unitPrice       Price of the product.
 * @apiSuccess {Number}  quantityInStock Number of items in stock.
 * @apiSuccess {Date}    releaseDate     Date of release.
 * @apiSuccess {String}  description     Brief description of the product.
 * @apiSuccess {String}  category        Category of product.
 * @apiSuccess {Number}  rating          Customer rating of the product.
 * @apiSuccess {String}  imageUrl        URL for the product image.
 * @apiSuccess {JSON}    reviews         Customer reviews for the product.
 * @apiSuccess {Number}  reviewsCount    Number of reviews submitted by users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "_id": "5a1aa5679dd67514586f5d7a",
 *        "name": "abcProduct 1",
 *        "code": "P1",
 *        "unitPrice": "23",
 *        "quantityInStock": "5",
 *        "releaseDate": null,
 *        "category": foo,
 *        "description": "desc for P1 goes here (updated)",
 *        "rating": null,
 *        "imageUrl": null,
 *        "reviews": [
 *          {
 *            "_id": "5a1ac9a27125da0d842ad5da",
 *            "userId": "574296be03d33378180760ec",
 *            "itemId": "5a1aa5679dd67514586f5d7a",
 *            "rating": 0,
 *            "reviewDate": "March 19, 2016",
 *            "comments": null
 *          },
 *        ],
 *        "reviewsCount": 5
 *      } 
 * 
 * @apiSampleRequest /inventory/:itemId/detail
 */
module.exports.getItemDetail = (req, res) => {
  repository.getItemDetail(req, res)
}

/**
 * Handles adding item to item/product
 * 
 * @api {post} /inventory Add
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName CreateItem
 * @apiGroup Inventory
 * 
 * @apiParam {String}  name            Name of the product.
 * @apiParam {String}  code            Code assigned to the product.
 * @apiParam {Number}  unitPrice       Price of the product.
 * @apiParam {Number}  quantityInStock Number of items in stock.
 * @apiParam {Date}    releaseDate     Date of release.
 * @apiParam {String}  category        Category of product.
 * @apiParam {String}  description     Brief description of the product.
 * @apiParam {Number}  rating          Customer rating of the product.
 * @apiParam {String}  imageUrl        URL for the product image.
 * 
 * @apiSuccess {Mongoid} _id             Identifier for the product.
 * @apiSuccess {String}  name            Name of the product.
 * @apiSuccess {String}  code            Code assigned to the product.
 * @apiSuccess {Number}  unitPrice       Price of the product.
 * @apiSuccess {Number}  quantityInStock Number of items in stock.
 * @apiSuccess {Date}    releaseDate     Date of release.
 * @apiSuccess {String}  category        Category of product.
 * @apiSuccess {String}  description     Brief description of the product.
 * @apiSuccess {Number}  rating          Customer rating of the product.
 * @apiSuccess {String}  imageUrl        URL for the product image.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "_id": "5a1aa5679dd67514586f5d7a",
 *       "name": "abcProduct 1",
 *       "code": "P1",
 *       "unitPrice": "50",
 *       "quantityInStock": "5",
 *       "releaseDate": null,
 *       "category": foo,
 *       "description": "desc of item",
 *       "rating": null,
 *       "imageUrl": null
 *      }
 * 
 * @apiSampleRequest /inventory
 */
module.exports.createItem = (req, res) => {
  document =  {
    name: req.body.name,
    code: req.body.code,
    unitPrice: req.body.unitPrice,
    quantityInStock: req.body.quantityInStock,
    releaseDate: req.body.releaseDate,
    category: req.body.category,
    description: req.body.description,
    rating: req.body.rating,
    imageUrl: req.body.imageUrl
  }

  repository.createOne(req, res, 'inventory', document)
}

/**
 * Handles modification of item/product
 * 
 * @api {put} /inventory Modify
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName UpdateItem
 * @apiGroup Inventory
 * 
 * @apiParam {Mongoid}  _id             Name of the product.
 * @apiParam {String}   name            Name of the product.
 * @apiParam {String}   code            Code assigned to the product.
 * @apiParam {Number}   unitPrice       Price of the product.
 * @apiParam {Number}   quantityInStock Number of items in stock.
 * @apiParam {Date}     releaseDate     Date of release.
 * @apiParam {String}  category        Category of product.
 * @apiParam {String}   description     Brief description of the product.
 * @apiParam {Number}   rating          Customer rating of the product.
 * @apiParam {String}   imageUrl        URL for the product image.
 * 
 * @apiSuccess {Mongoid} _id             Identifier for the product.
 * @apiSuccess {String}  name            Name of the product.
 * @apiSuccess {String}  code            Code assigned to the product.
 * @apiSuccess {Number}  unitPrice       Price of the product.
 * @apiSuccess {Number}  quantityInStock Number of items in stock.
 * @apiSuccess {Date}    releaseDate     Date of release.
 * @apiSuccess {String}  category        Category of product.
 * @apiSuccess {String}  description     Brief description of the product.
 * @apiSuccess {Number}  rating          Customer rating of the product.
 * @apiSuccess {String}  imageUrl        URL for the product image.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5a1aa5679dd67514586f5d7a",
 *       "name": "abcProduct 1",
 *       "code": "P1",
 *       "unitPrice": "50",
 *       "quantityInStock": "5",
 *       "releaseDate": null,
 *       "category": foo,
 *       "description": "desc of item",
 *       "rating": null,
 *       "imageUrl": null
 *      }
 * 
 * @apiSampleRequest /inventory
 */
module.exports.updateItem = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.body._id)
  }

  document = {
    name: req.body.name,
    code: req.body.code,
    unitPrice: req.body.unitPrice,
    quantityInStock: req.body.quantityInStock,
    releaseDate: req.body.releaseDate,
    category: req.body.category,
    description: req.body.description,
  }

  repository.reviseOne(req, res, 'inventory', condition, document)
}

/**
 * Handles removing item/product
 * 
 * @api {delete} /inventory/:itemId Remove
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName DeleteItem
 * @apiGroup Inventory
 * 
 * @apiParam (Route Parameters) {Mongoid} itemId Identifier of the product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 OK
 * 
 * @apiSampleRequest /inventory
 */
module.exports.deleteItem = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.params.itemId)
  }

  repository.removeOne(req, res, 'inventory', condition)
}
