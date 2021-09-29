require('dotenv').config()

function getBaseUrl() {
  return '/api'
}

const config = {
  header: {
    // apiKeyName: process.env.API_KEY_NAME,
    // apiKey: process.env.API_KEY_VALUE,
    // tokenName: process.env.HEADER_NAME_TOKEN
  },
  database: {
    // host: process.env.DB_CONFIG_HOST,
    // username: process.env.DB_CONFIG_USERNAME,
    // password: process.env.DB_CONFIG_PASSWORD,
    // database: process.env.DB_CONFIG_DATABASE,
    // dialect: process.env.DB_CONFIG_DIALECT,
    // port: process.env.DB_CONFIG_PORT
  },
  baseURL: getBaseUrl(),
  //   maxRangeBetweenDatesInHours: process.env.MAX_HOURS_BETWEEN_DATES,
  dateFormat: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  api: {
    port: process.env.HTTP_PORT || 3000,
    logger: process.env.LOGGER === 'true' || false
  }
}

module.exports = config