const axios = require('axios');
require('dotenv').config();
const FilterPropertiesService = require('./filter-properties.service.js')


class NewsService {
  async get(newsData) {

    const resp = await axios.get(`http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY_NEWS}&categories=health&countries=${newsData.countries}&languages=${newsData.languages}`)
      // console.log(resp);

    return resp.data;
  }
}

module.exports = new NewsService()