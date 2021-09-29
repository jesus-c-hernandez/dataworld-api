require('dotenv').config()
const compression = require('compression')
const helmet = require('helmet')
const morgan = require('morgan')
const app = require('express')()
const bodyParser = require('body-parser')
  // const dbHelper = require('./helpers/db.helper')
const config = require('./config')
  // const cron = require('./cron')

// const extraHeaders = [process.env.API_KEY_NAME].join(',')
const API_URL = config.baseURL

app.use(compression())

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    `Origin, X-Requested-With, Content-Type, Accept, Authorization, `
    // ${extraHeaders}`
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
  return null
})

// BodyParser config
app.use(
  bodyParser.json({
    limit: '50mb'
  })
)

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50
  })
)

app.use(helmet())
if (config.api.logger) app.use(morgan('common'))
app.set('trust proxy', true)

app.use(API_URL, require('./routers'))

async function startServer() {
  try {
    console.log('NODE ENV', process.env.NODE_ENV)
    const { port } = config.api
      // await dbHelper.authenticate()
    app.listen(port, () => {
      console.log(
        new Date().toISOString(),
        `Running API ON http://localhost:${port}${API_URL}`
      )
    })
    if (process.env.NODE_ENV === 'development') cron.run()
  } catch (error) {
    console.log(new Date().toISOString(), error)
  }
}

if (!process.env.test) startServer()
module.exports = app