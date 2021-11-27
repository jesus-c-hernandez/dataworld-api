const CovidService = require('../services/covid.service')
const FilterPropertiesService = require('../services/filter-properties.service.js')

class CovidController {
  async getCases(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getCases(req.covidData)
      res.status(200).json({ result: true, data: data })
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
      res.status(200).json({ result: true, data: data })
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
      res.status(200).json({ result: true, data: data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getRecoveredCasesSum(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getRecoveredCasesSum(req.covidData)
      res.status(200).json({ result: true, data: data })
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
      res.status(200).json({ result: true, data: data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  async getTotalDeaths(req, res, next) {
    try {
      const data = await CovidService.getCases(req.covidData)
      res.status(200).json({ result: true, data: data })
      next()
    } catch (error) {
      console.log(error);
    }
  }

  async getTestSum(req, res, next) {
    try {
      // console.log(req.covidData);
      const data = await CovidService.getTestSum(req.covidData)
      res.status(200).json({ result: true, data: data })
      next()
    } catch (error) {
      res.status(400).json({ result: false, error })
      next(error)
    }
  }

  // async getActiveCasesDay(req, res, next) {
  //   try {
  //     // console.log(req.covidData);
  //     let data = await CovidService.getActiveCasesDay(req.covidData)
  //     const newData = FilterPropertiesService.filterCovidJSON(data, 8)
  //     res.status(200).json({ result: true, data: newData })
  //     next()
  //   } catch (error) {
  //     res.status(400).json({ result: false, error })
  //     next(error)
  //   }
  // }

  // async getRecoveredCasesDay(req, res, next) {
  //   try {
  //     // console.log(req.covidData);
  //     const data = await CovidService.getRecoveredCasesDay(req.covidData)
  //     const newData = FilterPropertiesService.filterCovidJSON(data, 9)
  //     res.status(200).json({ result: true, data: newData })
  //     next()
  //   } catch (error) {
  //     res.status(400).json({ result: false, error })
  //     next(error)
  //   }
  // }

  // async getTestDay(req, res, next) {
  //   try {
  //     // console.log(req.covidData);
  //     const data = await CovidService.getTestDay(req.covidData)
  //     const newData = FilterPropertiesService.filterCovidJSON(data, 10)
  //     res.status(200).json({ result: true, data: newData })
  //     next()
  //   } catch (error) {
  //     res.status(400).json({ result: false, error })
  //     next(error)
  //   }
  // }

}

module.exports = new CovidController()