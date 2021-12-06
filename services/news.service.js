const axios = require("axios");
require("dotenv").config();
const FilterPropertiesService = require("./filter-properties.service.js");

class NewsService {
  async getHealth(newsData) {
    try {
      const resp = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY_NEWS}&categories=health&countries=${newsData.countries}&languages=${newsData.languages}&limit=100&offset=100`
      );
      const totalNews = resp.data.data.length;
      let news = resp.data.data.slice(totalNews - 10);
      return news.reverse();
    } catch (error) {
      return error;
    }
  }

  async getScience(newsData) {
    try {
      const resp = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY_NEWS}&categories=science&countries=${newsData.countries}&languages=${newsData.languages}&limit=100&offset=100`
      );
      const totalNews = resp.data.data.length;
      let news = resp.data.data.slice(totalNews - 10);
      return news.reverse();
    } catch (error) {
      return error;
    }
  }

  async getTechnology(newsData) {
    try {
      const resp = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY_NEWS}&categories=technology&countries=${newsData.countries}&languages=${newsData.languages}&limit=100&offset=100`
      );
      const totalNews = resp.data.data.length;
      let news = resp.data.data.slice(totalNews - 10);
      return news.reverse();
    } catch (error) {
      return error;
    }
  }
}

module.exports = new NewsService();
