const router = require('express').Router()
const CovidMiddleware = require('../middlewares/covid.middleware')
const CovidController = require('../controllers/covid.controller')

router.get('/cases', CovidMiddleware.getCases, CovidController.getCases) //Total of active cases HASTA HOY (ACTIVOS Y NO ACTIVOS)
router.get('/today-cases', CovidMiddleware.getTodayCases, CovidController.getTodayCases) //Total of active cases TODAY
router.get('/active-cases', CovidMiddleware.getActiveCases, CovidController.getActiveCases) //Total of active cases HASTA hoy

module.exports = router;