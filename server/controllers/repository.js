var mongodb = require('mongodb')
var MongoClient = require('mongodb').MongoClient

var config = require('../config/db')
const con = config.db.host

/**
 * FETCH ALL records for a given collection
 */ 
module.exports.fetchAll = (req, res, collection) => {    
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection(collection).find().toArray(function (err, result) {
      if (err) throw err
      res.send(result)
    })
  })
}

/**
 * FETCH FILTERED records for a given collection
 */
module.exports.fetchFiltered = (req, res, collection, condition) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection(collection).find(condition).toArray(function (err, result) {
      if (err) throw err
      res.send(result);
    })
  })
}

/**
 * FETCH ONE records from a given collection
 */
module.exports.fetchOne = (req, res, collection, condition) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection(collection).findOne(condition, function (err, result) {
      if (err) throw err
      res.send(result);
    })
  })
}

/**
 * CREATE ONE record for a given collection
 */
module.exports.createOne = (req, res, collection, document) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection(collection).insertOne(document).then(function(result) {
      console.log(collection + ' - Inserted');
      res.statusCode = 201;
      res.json(result.ops[0]);
      res.send(result);
    })
  })
}

/**
 * REMOVE ONE record from a given collection
 */
module.exports.removeOne = (req, res, collection, condition) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection(collection).deleteOne(condition).then(function(result) {
      console.log(collection + ' - Deleted');
      res.statusCode = 204;
      res.send(result);
    })
  })
}

/**
 * REVISE ONE record for a given collection
 */
module.exports.reviseOne = (req, res, collection, condition, document) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection(collection).findOneAndUpdate(
      condition,
      { 
        $set: document,
        $currentDate: {
          lastModified: true 
        }
      },
      {
          returnOriginal: false
      }
    ).then(function(result) {
      console.log(collection + ' - Updated');
      //res.statusCode = 204;
      res.json(result.value);
      res.send(result);
    })
  })
}

// INVENTORY

/**
 * LIST inventory for non-authenticated user
 */
module.exports.getItems = (req, res) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err;

    db.collection('inventory').aggregate(
      [
        {
          $lookup: {
            from: "review",
            localField: "_id",
            foreignField: "itemId",
            as: "reviews"
          }
        },
        {
          $project: {
            _id: true,
            name: true,
            code: true,
            releaseDate: true,
            description: true,
            unitPrice: true,
            quantityInStock: true,
            rating: true,
            imageUrl: true,
            reviewsCount: { 
                $size: "$reviews" 
            }
          }
        }
      ]
    ).toArray(function (err, result) {
      if (err) throw err
      
      res.send(result);
    })
  })
}

/**
 * LIST inventory for authenticated user
 */
module.exports.getItemsForUser = (req, res) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err;

    db.collection('inventory').aggregate(
      [
        {
          $lookup: {
            from: "review",
            localField: "_id",
            foreignField: "itemId",
            as: "reviews"
          }
        },
        {
          $lookup: {
            from: "cart",
            localField: "_id",
            foreignField: "itemId",
            as: "cartItems"
          }
        },
        {
          $project: {
            _id: true,
            name: true,
            code: true,
            releaseDate: true,
            description: true,
            unitPrice: true,
            quantityInStock: true,
            rating: true,
            imageUrl: true,
            reviewsCount: { $size: "$reviews" },
            cartCount: {
              "$let": {
                "vars": {
                  "item": {
                    "$arrayElemAt": [
                      {
                        $filter: { 
                          input: "$cartItems", 
                          as: "cartItem", 
                          cond: {
                            $eq: ["$$cartItem.userId", req.params.username] 
                          } 
                        }
                      }, 
                    0]
                  }
                },
                "in": "$$item.quantity"
              }
            }   
          }
        }
      ]
    ).toArray(function (err, result) {
      if (err) throw err
      
      res.send(result);
    })
  })
}

/**
* FETCH item detail (includes users reviews)
*/
module.exports.getItemDetail = (req, res) => {
  MongoClient.connect(con, function (err, db) {
    if (err) throw err;

    db.collection('inventory').aggregate(
      [
        {
          $match : {
            _id : mongodb.ObjectID(req.params.itemId) 
          } 
        },
        {
          $lookup: {
            from: "review",
            localField: "_id",
            foreignField: "itemId",
            as: "reviews"
          }
        },
        {
          $project: {
            _id: true,
            name: true,
            code: true,
            releaseDate: true,
            description: true,
            unitPrice: true,
            quantityInStock: true,
            rating: true,
            imageUrl: true,
            reviews: true,
            reviewsCount: {
              $size: "$reviews"
            }
          }
        }
      ]
    ).next(function (err, result) {
      if (err) throw err
      
      res.send(result);
    })
  })
}

// CART

/**
 * LIST user's cart item(s)
 */
module.exports.getCartItems = (req, res) => {
  let itemId = req.query.itemId

  condition = {
    userId: req.params.username,
  }

  if (itemId) {
    condition['itemId'] = mongodb.ObjectID(req.query.itemId)
    fetchOne(req, res, 'cart', condition) 
  } else {
    MongoClient.connect(con, function (err, db) {
      if (err) throw err;

      db.collection('cart').aggregate(
        [
          { 
            $match: { 
              userId: req.params.username
            } 
          },
          {
            $lookup: {
              from: "inventory",
              localField: "itemId",
              foreignField: "_id",
              as: "item"
            }
          },
          {
            $unwind: "$item"
          },
          {
            $project: {
              _id: true,
              itemId: true,
              "item.name": true,
              "item.code": true,
              "item.unitPrice": true,
              quantity: true,
            }
          }
        ]
      ).toArray(function (err, result) {
        if (err) throw err
        
        res.send(result);
      })
    })
  }
}