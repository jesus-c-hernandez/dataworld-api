const NewsService = require('../services/news.service')

class NewsController {
  async get(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await NewsService.get(req.newsData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }
}

module.exports = new NewsController()