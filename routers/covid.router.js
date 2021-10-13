const router = require('express').Router()
const CovidMiddleware = require('../middlewares/covid.middleware')
const CovidController = require('../controllers/covid.controller')

router.get('/cases', CovidMiddleware.getCases, CovidController.getCases) //Total of active cases HASTA HOY (ACTIVOS Y NO ACTIVOS)
router.get('/today-cases', CovidMiddleware.getTodayCases, CovidController.getTodayCases) //Total of active cases TODAY
router.get('/active-cases', CovidMiddleware.getActiveCases, CovidController.getActiveCases) //Total of active cases HASTA hoy
router.get('/total-deaths', CovidMiddleware.getTotalDeaths, CovidController.getTotalDeaths) //Total of persons death HASTA hoy
router.get('/today-deaths', CovidMiddleware.getTodayDeaths, CovidController.getTodayDeaths) //Today deaths HOY
router.get('/recovered-cases', CovidMiddleware.getRecoveredCases, CovidController.getRecoveredCases) //Recovered cases HASTA hoy
router.get('/test-totals', CovidMiddleware.getTestTotals, CovidController.getTestTotals) //Test Totals HASTA hoy

module.exports = router;