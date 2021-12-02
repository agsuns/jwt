require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5004;

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlingMiddleware = require('./middleware/errorHandler');

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
