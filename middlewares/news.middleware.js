const NewsValidator = require('../validators/news.validator')


class NewsMiddleware {
  async get(req, res, next) {
    try {
      req.newsData = await NewsValidator.get().validateAsync({
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