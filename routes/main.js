const express = require('express');
const router = express.Router();
const { login, dashboard } = require('../controllers/main');
const authorizationMiddleware = require('../middleware/auth');

router.get('/dashboard', authorizationMiddleware, dashboard);
router.post('/login', login);

module.exports = router;
