const { CustomError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const errorHandlingMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    console.log("I'm extended from a custom error");
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
};

module.exports = errorHandlingMiddleware;
