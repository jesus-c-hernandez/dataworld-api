class FilterPropertiesService {

  filterCurrentWeatherJSON(objectDataJSON) {
    delete objectDataJSON.base
    delete objectDataJSON.sys.type
    delete objectDataJSON.sys.id

    return objectDataJSON
  }

}

module.exports = new FilterPropertiesService()