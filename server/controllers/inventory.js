var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

var config = require('../config/db')

const repository = require('./repository')

/**
 * INVENTORY (GET) - Retrieves inventory list for non-authenticated user
 * Includes users review count for each item
 */
module.exports.getItems = (req, res) => {
  repository.getItems(req, res);
}

/**
* INVENTORY (GET) - Retrieves inventory list for authenticated user
* Includes users review count and cart count for each item
*/
module.exports.getItemsForUser = (req, res) => {
  repository.getItemsForUser(req, res)
}

/**
* INVENTORY DETAIL (GET) - Retrieves item detail (includes users reviews)
*/
module.exports.getItemDetail = (req, res) => {
  repository.getItemDetail(req, res)
}

/**
* ITEM/PRODUCT (POST) - Handles adding item to item/product
*/
module.exports.createItem = (req, res) => {
  document =  {
    name: req.body.name,
    code: req.body.code,
    unitPrice: req.body.unitPrice,
    quantityInStock: req.body.quantityInStock,
    releaseDate: req.body.releaseDate,
    description: req.body.description,
    rating: req.body.rating,
    imageUrl: req.body.imageUrl
  }

  repository.createOne(req, res, 'inventory', document)
}

/**
* UPDATE ITEM/PRODUCT - Handles modification of item/product
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
    description: req.body.description,
  }

  repository.reviseOne(req, res, 'inventory', condition, document)
}

/**
* DELETE ITEM/PRODUCT - Handles removing item/product
*/
module.exports.deleteItem = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.params.itemId)
  }

  repository.removeOne(req, res, 'inventory', condition)
}
