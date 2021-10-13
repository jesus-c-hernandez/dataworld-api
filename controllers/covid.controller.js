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

  async getTotalDeaths(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getTotalDeaths(req.covidData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getTodayDeaths(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getTodayDeaths(req.covidData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getRecoveredCases(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getRecoveredCases(req.covidData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getTestTotals(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getTestTotals(req.covidData)
      res.status(200).json({ result: true, data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

}

module.exports = new CovidController()