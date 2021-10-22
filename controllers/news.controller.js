const NewsService = require('../services/news.service')

class NewsController {
  async getHealth(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await NewsService.getHealth(req.newsData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getScience(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await NewsService.getScience(req.newsData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getTechnology(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await NewsService.getTechnology(req.newsData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }
}

module.exports = new NewsController()