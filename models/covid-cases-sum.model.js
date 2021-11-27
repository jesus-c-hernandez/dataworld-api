const { Schema, model } = require('mongoose')

const CovidCasesSumSchema = Schema({
  date: Date,
  dateQuery: String,
  country: String,
  data: Number
});

CovidCasesSumSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidCasesSum', CovidCasesSumSchema);