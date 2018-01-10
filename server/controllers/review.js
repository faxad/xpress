var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

const repository = require('./repository')

/**
 * Handles creation of product's review
 * 
 * @api {post} /review Add
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName AddItemReview
 * @apiGroup Review
 * 
 * @apiParam {String}  userId     Name of the product.
 * @apiParam {Mongoid} itemId     Identifier for the product.
 * @apiParam {Number}  rating     Price of the product.
 * @apiParam {Date}    reviewDate Number of items in stock.
 * @apiParam {String}  remarks    Date of release.
 * 
 * @apiSuccess {Mongoid} _id        Identifier for the review.
 * @apiSuccess {String}  userId     Identifier for the user.
 * @apiSuccess {Mongoid} itemId     Identifier for the product.
 * @apiSuccess {Number}  rating     Price of the product.
 * @apiSuccess {Date}    reviewDate Date of review.
 * @apiSuccess {String}  remarks    Comments made by user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "_id": "5a1aa5679dd67514586f5d7a",
 *       "userId": "john.doe",
 *       "itemId": "6a1aa5679xd67513586g5d2u",
 *       "rating": 4,
 *       "reviewDate": "December 20, 2017",
 *       "remarks": "sample remarks"
 *      }
 * 
 * @apiSampleRequest /review
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
 * Handles removing user review
 * 
 * @api {delete} /review/:reviewId Remove
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName DeleteReview
 * @apiGroup Review
 * 
 * @apiParam (Route Parameters) {Mongoid} reviewId Identifier of the review.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 OK
 * 
 * @apiSampleRequest /review
 */
module.exports.deleteReview = (req, res) => {
  condition = {
    _id: mongodb.ObjectID(req.params.reviewId)
  }

  removeOne(req, res, 'review', condition)
}

/**
 * Handles modification of user review
 * 
 * @api {put} /review Modify
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName UpdateReview
 * @apiGroup Review
 * 
 * @apiParam {Mongoid} _id        Identifier for the review.
 * @apiParam {String}  userId     Identifier for the user.
 * @apiParam {Mongoid} itemId     Identifier for the product.
 * @apiParam {Number}  rating     Price of the product.
 * @apiParam {Date}    reviewDate Date of review.
 * @apiParam {String}  remarks    Comments made by user.
 *  
 * @apiSuccess {Mongoid} _id        Identifier for the review.
 * @apiSuccess {String}  userId     Identifier for the user.
 * @apiSuccess {Mongoid} itemId     Identifier for the product.
 * @apiSuccess {Number}  rating     Price of the product.
 * @apiSuccess {Date}    reviewDate Date of review.
 * @apiSuccess {String}  remarks    Comments made by user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5a1aa5679dd67514586f5d7a",
 *       "userId": "john.doe",
 *       "itemId": "6a1aa5679xd67513586g5d2u",
 *       "rating": 4,
 *       "reviewDate": "December 20, 2017",
 *       "remarks": "sample remarks"
 *      }
 * 
 * @apiSampleRequest /review
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
