const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

const authorizationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('Please provide username and password');
  }

  const token = authHeader.split(' ')[1];

  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userInfo;
    next();
  } catch (e) {
    throw new UnauthorizedError('Invalid Token');
  }
  //pass down user information through the req object
};

module.exports = authorizationMiddleware;
