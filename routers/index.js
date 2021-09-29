const express = require('express')
const CurrentWeater = require('./current-wheater.router')

const app = express()

app.use(
  CurrentWeater
)

// app.use((err, req, res, next) => {
//   res.status(err.code || 400).json(err.message || 'Bad request')
//   req.statusCode = err.code || 400
//   req.statusMessage = err.message || 'Bad Request'
// })

module.exports = app