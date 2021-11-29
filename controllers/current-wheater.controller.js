const CurrentWeatherService = require('../services/current-wheater.service')

class CurrentWeatherController {
  async get(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await CurrentWeatherService.get(req.currentWeather)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getFuture(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await CurrentWeatherService.getFuture(req.currentWeather)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getNextDays(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await CurrentWeatherService.getNextDays(req.currentWeather)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }
}

module.exports = new CurrentWeatherController()