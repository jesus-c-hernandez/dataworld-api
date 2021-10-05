const router = require('express').Router()
const CurrentWeatherMiddleware = require('../middlewares/current-wheater.middleware')
const CurrentWeatherController = require('../controllers/current-wheater.controller')

router.get('/current-weather', CurrentWeatherMiddleware.get, CurrentWeatherController.get)

module.exports = router;