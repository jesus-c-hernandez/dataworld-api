const router = require('express').Router();
const AuthMiddleware = require('../middlewares/auth.middleware');
const AuthController = require('../controllers/auth.controller');

router.post('/login', AuthMiddleware.login, AuthController.login);
router.get('/renew', AuthMiddleware.renew, AuthController.renew);

module.exports = router;