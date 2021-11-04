const { Schema, model } = require('mongoose')

const CovidRecoveredCaseSchema = Schema({
  date: Date,
  dateQuery: String,
  country: String,
  data: Number
});

CovidRecoveredCaseSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidRecoveredDay', CovidRecoveredCaseSchema);