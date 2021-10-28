const router = require('express').Router()
const NewsMiddleware = require('../middlewares/news.middleware')
const NewsController = require('../controllers/news.controller')

router.get('/news-health', NewsMiddleware.getHealth, NewsController.getHealth)
router.get('/news-science', NewsMiddleware.getScience, NewsController.getScience)
router.get('/news-technology', NewsMiddleware.getTechnology, NewsController.getTechnology)

module.exports = router;