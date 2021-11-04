const CovidService = require('../services/covid.service')
const FilterPropertiesService = require('../services/filter-properties.service.js')

class CovidController {
  async getCases(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getCases(req.covidData)
      const newData = FilterPropertiesService.filterCovidJSON(data, 1)
      res.status(200).json({ result: true, data: newData })
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
      const newData = FilterPropertiesService.filterCovidJSON(data, 2)
      res.status(200).json({ result: true, data: newData })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getActiveCases(req, res, next) {
    try {
      // console.log(req.covidData);
      let data = await CovidService.getActiveCases(req.covidData)
      const newData = FilterPropertiesService.filterCovidJSON(data, 3)
      res.status(200).json({ result: true, data: newData })
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
      const newData = FilterPropertiesService.filterCovidJSON(data, 4)
      res.status(200).json({ result: true, data: newData })
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
      const newData = FilterPropertiesService.filterCovidJSON(data, 5)
      res.status(200).json({ result: true, data: newData })
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
      const newData = FilterPropertiesService.filterCovidJSON(data, 6)
      res.status(200).json({ result: true, data: newData })
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
      const newData = FilterPropertiesService.filterCovidJSON(data, 7)
      res.status(200).json({ result: true, data: newData })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

}

module.exports = new CovidController()