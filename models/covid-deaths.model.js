const { Schema, model } = require('mongoose')

const CovidCasesSchema = Schema({
  date: Date,
  country: String,
  data: Number
});

CovidCasesSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidDeath', CovidCasesSchema);