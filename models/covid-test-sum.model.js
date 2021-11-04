const { Schema, model } = require('mongoose')

const CovidTestTotalSchema = Schema({
  date: Date,
  dateQuery: String,
  country: String,
  data: Number
});

CovidTestTotalSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model('CovidTestSum', CovidTestTotalSchema);