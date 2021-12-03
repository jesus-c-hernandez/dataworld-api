const NewsService = require('../services/news.service')

class NewsController {
  async getHealth(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await NewsService.getHealth(req.newsData)
      if( data.isAxiosError ){
        res.status(400).json({ result: false, data: error })
      }
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, data: error })
      next(error)
    }
  }

  async getScience(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await NewsService.getScience(req.newsData)
      if( data.isAxiosError ){
        res.status(400).json({ result: false, data: error })
      }
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, data: error })
      next(error)
    }
  }

  async getTechnology(req, res, next) {
    try {
      // console.log(req.currentWeather);
      const data = await NewsService.getTechnology(req.newsData)
      if( data.isAxiosError ){
        res.status(400).json({ result: false, data: error })
      }
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, data: error })
      next(error)
    }
  }
}

module.exports = new NewsController()