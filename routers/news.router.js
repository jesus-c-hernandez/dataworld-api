const router = require('express').Router()
const NewsMiddleware = require('../middlewares/news.middleware')
const NewsController = require('../controllers/news.controller')

router.get('/news-health', NewsMiddleware.get, NewsController.get)

module.exports = router;