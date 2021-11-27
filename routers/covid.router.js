const router = require('express').Router()
const CovidMiddleware = require('../middlewares/covid.middleware')
const CovidController = require('../controllers/covid.controller')

router.get('/cases', CovidMiddleware.getCases, CovidController.getCases) //Total of active cases HASTA HOY (ACTIVOS Y NO ACTIVOS)
router.get('/today-cases', CovidMiddleware.getTodayCases, CovidController.getTodayCases) //Total of active cases TODAY
router.get('/active-cases', CovidMiddleware.getActiveCasesSum, CovidController.getActiveCases) //Total of active cases HASTA hoy
router.get('/recovered-cases', CovidMiddleware.getRecoveredCasesSum, CovidController.getRecoveredCasesSum) //Recovered cases HASTA hoy
router.get('/today-deaths', CovidMiddleware.getTodayDeaths, CovidController.getTodayDeaths) //Today deaths HOY
router.get('/total-deaths', CovidMiddleware.getTotalDeaths, CovidController.getTotalDeaths) //Total of persons death HASTA hoy
router.get('/tests', CovidMiddleware.getTestSum, CovidController.getTestSum) //Test Totals HASTA hoy
// router.get('/active-cases-day', CovidMiddleware.getActiveCasesDay, CovidController.getActiveCasesDay) //Total of active cases HASTA hoy
// router.get('/recovered-cases-day', CovidMiddleware.getRecoveredCasesDay, CovidController.getRecoveredCasesDay) //Recovered cases HASTA hoy
// router.get('/test-day', CovidMiddleware.getTestDay, CovidController.getTestDay) //Test Totals HASTA hoy

module.exports = router;