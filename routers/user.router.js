const router = require('express').Router();
const UserMiddleware = require('../middlewares/user.middleware');
const UserController = require('../controllers/user.controller');

router.post('/users', UserMiddleware.create, UserController.create)
router.put('/users/:id', UserMiddleware.update, UserController.update)
router.get('/users', UserMiddleware.get, UserController.get)

module.exports = router;

