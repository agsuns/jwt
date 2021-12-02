const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Please provide username and password');
  }

  //only for demo porpuses, you'd usually get the id from the db!
  const _id = new Date().getDate();

  const token = jwt.sign({ username, _id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.status(200).json({ msg: 'user created!', token });
};

const dashboard = async (req, res) => {
  console.log('this is a test');
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username} with id: ${req.user._id}`,
    secret: `Here is your authorized data and lucky number: ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
