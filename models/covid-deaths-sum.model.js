const { Schema, model } = require('mongoose')

const CovidDeathsSumSchema = Schema({
  date: Date,
  country: String,
  data: Number
});

CovidDeathsSumSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidDeathsSum', CovidDeathsSumSchema);