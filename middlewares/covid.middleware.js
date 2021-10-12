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

}

module.exports = new CovidMiddleware()