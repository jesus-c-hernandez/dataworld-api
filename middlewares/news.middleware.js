const NewsValidator = require('../validators/news.validator')


class NewsMiddleware {
  async getHealth(req, res, next) {
    try {
      req.newsData = await NewsValidator.getHealth().validateAsync({
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

  async getScience(req, res, next) {
    try {
      req.newsData = await NewsValidator.getScience().validateAsync({
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

  async getTechnology(req, res, next) {
    try {
      req.newsData = await NewsValidator.getTechnology().validateAsync({
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

module.exports = new NewsMiddleware()