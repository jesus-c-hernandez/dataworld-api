const router = require('express').Router()
const CurrentWeatherMiddleware = require('../middlewares/current-wheater.middleware')
const CurrentWeatherController = require('../controllers/current-wheater.controller')

router.get('/current-weather', CurrentWeatherMiddleware.get, CurrentWeatherController.get)
router.get('/current-weather/future', CurrentWeatherMiddleware.getFuture, CurrentWeatherController.getFuture)
router.get('/next-days', CurrentWeatherMiddleware.getNextDays, CurrentWeatherController.getNextDays )

module.exports = router;