define({ "api": [https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/https://cartify-backend.herokuapp.com/
  {
    "type": "post",
    "url": "/",
    "title": "Authentication",
    "name": "LogIn",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users unique identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JWT",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization token for the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJhbGciOiJIUzI1N...\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidUserOrPass",
            "description": "<p>Invalid username or password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"InvalidUserOrPass\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/login"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/cart",
    "title": "Add",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "AddItemToCart",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Identifier for the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the item in cart</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the review</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Identifier for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the item in cart</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"_id\": \"5a1aa5679dd67514586f5d7a\",\n  \"userId\": \"john.doe\"\n  \"itemId\": \"6a1aa5679xd67513586g5d2u\",\n  \"quantity\": 1\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/cart"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "delete",
    "url": "/cart/:cartItemId",
    "title": "Remove",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "DeleteCartItem",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "Mongoid",
            "optional": false,
            "field": "cartItemId",
            "description": "<p>Identifier for the cart item</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/cart"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "/cart:username",
    "title": "List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "GetCartItems",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Identifier for the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the cart item</p>"
          },
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Number of the same item in cart</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "item",
            "description": "<p>Product information for the cart item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a1d4049802b64ace0d42190\",\n    \"itemId\": \"5a1aa5679dd67514586f5d7a\",\n    \"quantity\": 3,\n    \"item\": {\n      \"name\": \"abcProduct 1\",\n      \"code\": \"P1\",\n      \"unitPrice\": \"23\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/cart/:username"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "put",
    "url": "/cart",
    "title": "Modify",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "UpdateCartItem",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the cart item</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Identifier for the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the item in cart</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the cart item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Identifier for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the item in cart</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5a1aa5679dd67514586f5d7a\",\n  \"userId\": \"john.doe\"\n  \"itemId\": \"6a1aa5679xd67513586g5d2u\",\n  \"quantity\": 2\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/cart"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "post",
    "url": "/inventory",
    "title": "Add",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "CreateItem",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code assigned to the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantityInStock",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of release.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer rating of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>URL for the product image.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code assigned to the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityInStock",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of release.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>URL for the product image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"_id\": \"5a1aa5679dd67514586f5d7a\",\n  \"name\": \"abcProduct 1\",\n  \"code\": \"P1\",\n  \"unitPrice\": \"50\",\n  \"quantityInStock\": \"5\",\n  \"releaseDate\": null,\n  \"category\": foo,\n  \"description\": \"desc of item\",\n  \"rating\": null,\n  \"imageUrl\": null\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/inventory"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/inventory.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "delete",
    "url": "/inventory/:itemId",
    "title": "Remove",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "DeleteItem",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier of the product.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/inventory"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/inventory.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory",
    "title": "List (unauthenticated)",
    "name": "GetItems",
    "group": "Inventory",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code assigned to the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityInStock",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of release.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>URL for the product image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reviewsCount",
            "description": "<p>Number of reviews submitted by users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a1aa5679dd67514586f5d7a\",\n    \"name\": \"abcProduct 1\",\n    \"code\": \"P1\",\n    \"unitPrice\": \"50\",\n    \"quantityInStock\": \"5\",\n    \"releaseDate\": null,\n    \"category\": foo,\n    \"description\": \"desc of item\",\n    \"rating\": null,\n    \"imageUrl\": null,\n    \"reviewsCount\": 4\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/inventory"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/inventory.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory:username",
    "title": "List (authenticated)",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "GetItemsForUser",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Identifier for the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code assigned to the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityInStock",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of release.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>URL for the product image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reviewsCount",
            "description": "<p>Number of reviews submitted by users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cartCount",
            "description": "<p>Quantity of items in users cart.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5a1aa5679dd67514586f5d7a\",\n    \"name\": \"abcProduct 1\",\n    \"code\": \"P1\",\n    \"unitPrice\": \"50\",\n    \"quantityInStock\": \"5\",\n    \"releaseDate\": null,\n    \"category\": foo,\n    \"description\": \"desc of item\",\n    \"rating\": null,\n    \"imageUrl\": null,\n    \"reviewsCount\": 4,\n    \"cartCount\": 3\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/inventory/:username"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/inventory.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "put",
    "url": "/inventory",
    "title": "Modify",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "UpdateItem",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code assigned to the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantityInStock",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of release.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer rating of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>URL for the product image.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code assigned to the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityInStock",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of release.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>URL for the product image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5a1aa5679dd67514586f5d7a\",\n  \"name\": \"abcProduct 1\",\n  \"code\": \"P1\",\n  \"unitPrice\": \"50\",\n  \"quantityInStock\": \"5\",\n  \"releaseDate\": null,\n  \"category\": foo,\n  \"description\": \"desc of item\",\n  \"rating\": null,\n  \"imageUrl\": null\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/inventory"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/inventory.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "get",
    "url": "/inventory/:itemId/detail",
    "title": "Detail",
    "name": "getItemDetail",
    "group": "Inventory",
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the item.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code assigned to the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unitPrice",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantityInStock",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of release.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Brief description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>URL for the product image.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "reviews",
            "description": "<p>Customer reviews for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reviewsCount",
            "description": "<p>Number of reviews submitted by users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": \"5a1aa5679dd67514586f5d7a\",\n   \"name\": \"abcProduct 1\",\n   \"code\": \"P1\",\n   \"unitPrice\": \"23\",\n   \"quantityInStock\": \"5\",\n   \"releaseDate\": null,\n   \"category\": foo,\n   \"description\": \"desc for P1 goes here (updated)\",\n   \"rating\": null,\n   \"imageUrl\": null,\n   \"reviews\": [\n     {\n       \"_id\": \"5a1ac9a27125da0d842ad5da\",\n       \"userId\": \"574296be03d33378180760ec\",\n       \"itemId\": \"5a1aa5679dd67514586f5d7a\",\n       \"rating\": 0,\n       \"reviewDate\": \"March 19, 2016\",\n       \"comments\": null\n     },\n   ],\n   \"reviewsCount\": 5\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/inventory/:itemId/detail"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/inventory.js",
    "groupTitle": "Inventory"
  },
  {
    "type": "post",
    "url": "/review",
    "title": "Add",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "AddItemReview",
    "group": "Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "reviewDate",
            "description": "<p>Number of items in stock.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>Date of release.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Identifier for the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "reviewDate",
            "description": "<p>Date of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>Comments made by user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"_id\": \"5a1aa5679dd67514586f5d7a\",\n  \"userId\": \"john.doe\",\n  \"itemId\": \"6a1aa5679xd67513586g5d2u\",\n  \"rating\": 4,\n  \"reviewDate\": \"December 20, 2017\",\n  \"remarks\": \"sample remarks\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/review"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/review.js",
    "groupTitle": "Review"
  },
  {
    "type": "delete",
    "url": "/review/:reviewId",
    "title": "Remove",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "DeleteReview",
    "group": "Review",
    "parameter": {
      "fields": {
        "Route Parameters": [
          {
            "group": "Route Parameters",
            "type": "Mongoid",
            "optional": false,
            "field": "reviewId",
            "description": "<p>Identifier of the review.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/review"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/review.js",
    "groupTitle": "Review"
  },
  {
    "type": "put",
    "url": "/review",
    "title": "Modify",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"Bearer :token\""
            ],
            "optional": false,
            "field": "Authorization",
            "description": "<p>Replace <code>:token</code> with Auth Token</p>"
          }
        ]
      }
    },
    "name": "UpdateReview",
    "group": "Review",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the review.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Identifier for the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "reviewDate",
            "description": "<p>Date of review.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>Comments made by user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifier for the review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Identifier for the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Mongoid",
            "optional": false,
            "field": "itemId",
            "description": "<p>Identifier for the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "reviewDate",
            "description": "<p>Date of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>Comments made by user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5a1aa5679dd67514586f5d7a\",\n  \"userId\": \"john.doe\",\n  \"itemId\": \"6a1aa5679xd67513586g5d2u\",\n  \"rating\": 4,\n  \"reviewDate\": \"December 20, 2017\",\n  \"remarks\": \"sample remarks\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://secure-xpress-api.7e14.starter-us-west-2.openshiftapps.com/review"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/review.js",
    "groupTitle": "Review"
  }
] });
