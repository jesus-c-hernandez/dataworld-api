const router = require('express').Router();
const AuthMiddleware = require('../middlewares/auth.middleware');
const AuthController = require('../controllers/auth.controller');

router.post('/login', AuthMiddleware.login, AuthController.login)

module.exports = router;