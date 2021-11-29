const CurrentWeatherValidator = require('../validators/current-wheater.validator')


class CurrentWeatherMiddleware {
  async get(req, res, next) {
    try {
      req.currentWeather = await CurrentWeatherValidator.get().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.currentWeather);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getFuture(req, res, next) {
    try {
      req.currentWeather = await CurrentWeatherValidator.getFuture().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.currentWeather);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getNextDays(req, res, next) {
    try {
      req.currentWeather = await CurrentWeatherValidator.getNextDays().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.currentWeather);
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new CurrentWeatherMiddleware()