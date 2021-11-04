const { Schema, model } = require('mongoose')

const CovidCaseSchema = Schema({
  date: Date,
  country: String,
  data: Number
});

CovidCaseSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidCase', CovidCaseSchema);