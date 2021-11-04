const { Schema, model } = require('mongoose')

const CovidActiveCaseSumSchema = Schema({
  date: Date,
  dateQuery: String,
  country: String,
  data: Number
});

CovidActiveCaseSumSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidActiveCaseSum', CovidActiveCaseSumSchema);