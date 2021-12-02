const express = require('express')
const CurrentWeater = require('./current-wheater.router')
const CovidRoter = require('./covid.router')
const NewsRouter = require('./news.router')
const UserRouter = require('./user.router')
const AuthRouter = require('./auth.router')
const CityRouter = require('./city.router')

const app = express()

app.use(
  CurrentWeater,
  CovidRoter,
  NewsRouter,
  UserRouter,
  AuthRouter,
  CityRouter
)

// app.use((err, req, res, next) => {
//   res.status(err.code || 400).json(err.message || 'Bad request')
//   req.statusCode = err.code || 400
//   req.statusMessage = err.message || 'Bad Request'
// })

module.exports = app