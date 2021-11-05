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

  async getActiveCasesSum(req, res, next) {
    try {
      req.covidData = await CovidValidator.getActiveCasesSum().validateAsync({
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

  async getActiveCasesDay(req, res, next) {
    try {
      req.covidData = await CovidValidator.getActiveCasesDay().validateAsync({
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

  async getRecoveredCasesSum(req, res, next) {
    try {
      req.covidData = await CovidValidator.getRecoveredCasesSum().validateAsync({
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

  async getRecoveredCasesDay(req, res, next) {
    try {
      req.covidData = await CovidValidator.getRecoveredCasesDay().validateAsync({
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

  async getTestSum(req, res, next) {
    try {
      req.covidData = await CovidValidator.getTestSum().validateAsync({
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

  async getTestDay(req, res, next) {
    try {
      req.covidData = await CovidValidator.getTestDay().validateAsync({
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