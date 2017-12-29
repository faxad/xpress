const jwt = require('jsonwebtoken');

const config = require('../config/auth')

const secret = config.auth.secret;

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
    res.send({'token': jwtBearerToken}) 
  } else {
    res.sendStatus(401); 
  }
}