class FilterPropertiesService {

  filterCurrentWeatherJSON(objectDataJSON) {
    delete objectDataJSON.base
    delete objectDataJSON.sys.type
    delete objectDataJSON.sys.id

    return objectDataJSON
  }

  filterCurrentWeatherArrayFutureJSON(objectDataJSON) {
    objectDataJSON.list.forEach(hour => {
      delete hour.sys
      delete hour.pop
        // console.log(hour);
    });

    return objectDataJSON
  }

}

module.exports = new FilterPropertiesService()