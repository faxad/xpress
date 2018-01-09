const jwt = require('jsonwebtoken');

const config = require('../config/auth')

const secret = config.auth.secret;

/**
 * @api {post} / Authentication
 * @apiName LogIn
 * @apiGroup Auth
 *
 * @apiParam {String} username Users unique identifier.
 * @apiParam {String} password Users password.
 *
 * @apiSuccess {JWT} token Authorization token for the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1N...",
 *     }
 * 
 * @apiError InvalidUserOrPass Invalid username or password.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "InvalidUserOrPass"
 *     }
 *
 * @apiSampleRequest http://localhost:8000/login
 */
module.exports.logIn = (req, res) => {
  // TODO: replace with actual implementation
  if (true) {
    var jwtBearerToken = jwt.sign(
      {
        userId: '101010110101'
      },
      secret,
      {
        algorithm: 'HS256',                
        expiresIn: 9999,
        issuer: 'Xpress-Auth',
        subject: 'Authenticate & Authorize'
      }
    );
    res.send({
      'token': jwtBearerToken
    }) 
  } else {
    res.statusCode = 401;
    res.send({
      error: "InvalidUserOrPass"
    });
  }
}