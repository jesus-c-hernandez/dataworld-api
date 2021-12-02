const router = require('express').Router()
const CitiyController = require ('../controllers/city.controller')

router.get('/cities', CitiyController.get )

module.exports = router;