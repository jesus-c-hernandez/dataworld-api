const CovidValidator = require('../validators/covid.validator')


class CovidMiddleware {
  async getCases(req, res, next) {
    try {
      req.covidData = await CovidValidator.getCases().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.covidData);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getTodayCases(req, res, next) {
    try {
      req.covidData = await CovidValidator.getTodayCases().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.covidData);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getActiveCases(req, res, next) {
    try {
      req.covidData = await CovidValidator.getActiveCases().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.covidData);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getTotalDeaths(req, res, next) {
    try {
      req.covidData = await CovidValidator.getTotalDeaths().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.covidData);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getTodayDeaths(req, res, next) {
    try {
      req.covidData = await CovidValidator.getTodayDeaths().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.covidData);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getRecoveredCases(req, res, next) {
    try {
      req.covidData = await CovidValidator.getRecoveredCases().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.covidData);
      next()
    } catch (error) {
      next(error)
    }
  }

  async getTestTotals(req, res, next) {
    try {
      req.covidData = await CovidValidator.getTestTotals().validateAsync({
          ...req.query,
          ...req.params,
          ...req.body
        })
        // console.log(req.covidData);
      next()
    } catch (error) {
      next(error)
    }
  }

}

module.exports = new CovidMiddleware()