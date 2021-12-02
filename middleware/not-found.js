const notFoundMiddleware = (req, res) => {
  res.status(404).send('Content not found');
};

module.exports = notFoundMiddleware;
