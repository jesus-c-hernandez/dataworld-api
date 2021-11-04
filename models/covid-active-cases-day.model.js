const { Schema, model } = require('mongoose')

const CovidActiveCaseDailySchema = Schema({
  date: Date,
  dateQuery: String,
  country: String,
  data: Number
});

CovidActiveCaseDailySchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidActiveCaseDay', CovidActiveCaseDailySchema);