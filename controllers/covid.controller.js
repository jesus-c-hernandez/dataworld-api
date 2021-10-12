const CovidService = require('../services/covid.service')

class CovidController {
  async getCases(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getCases(req.covidData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }
  async getTodayCases(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getTodayCases(req.covidData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getActiveCases(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getActiveCases(req.covidData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

}

module.exports = new CovidController()