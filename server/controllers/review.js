var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

const repository = require('./repository')

/**
 * ITEM/PRODUCT REVIEW (POST) - Handles creation of product's review
 */
module.exports.addItemReview = (req, res) => {
  document =  {
    userId: req.body.userId,
    itemId: mongodb.ObjectID(req.body.itemId),
    rating: req.body.rating,
    reviewDate: req.body.reviewDate,
    remarks: req.body.remarks
  }
  
  repository.createOne(req, res, 'review', document)
}

/**
 * DELETE ITEM/PRODUCT REVIEW - Handles removing user review
 */
module.exports.deleteReview = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.params.reviewId)
  }

  removeOne(req, res, 'review', condition)
}

/**
 * UPDATE ITEM/PRODUCT REVIEW - Handles modification of user review
 */
module.exports.updateReview = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.body._id)
  }

  document = {
    _id: mongodb.ObjectID(req.body._id),
    userId: req.body.userId,
    itemId: mongodb.ObjectID(req.body.itemId),
    rating: req.body.rating,
    reviewDate: req.body.reviewDate,
    comments: req.body.comments
  }

  reviseOne(req, res, 'review', condition, document)
}
