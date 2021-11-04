class FilterPropertiesService {

  base = {
    date: "",
    country: "Mexico",
    data: 10977398,
    desc: ""
  }

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
    });

    return objectDataJSON
  }

  filterCovidJSON(objectDataJSON, n) {
    let newObjectDataJSON = []
    console.log(objectDataJSON);
    objectDataJSON.forEach(dato => {
      this.base.date = dato.date
      this.base.country = dato.country
      this.base.data = dato.data
      switch (n) {
        case 1:
          this.base.desc = "Total de casos hasta el día de HOY"
          break;
        case 2:
          this.base.desc = "Total de casos del día de HOY"
          break;
        case 3:
          this.base.desc = "Total de casos activos hasta el día de HOY"
          break;
        case 4:
          this.base.desc = "Total de muertes hasta el día de HOY"
          break;
        case 5:
          this.base.desc = "Total de muertes del día de HOY"
          break;
        case 6:
          this.base.desc = "Total de casos recuperados hasta el día de HOY"
          break;
        case 7:
          this.base.desc = "Total de pruebas hasta el día de HOY"
          break;
        default:
          break;
      }
      newObjectDataJSON.push(this.base)
    });

    return newObjectDataJSON
  }

}

module.exports = new FilterPropertiesService()