var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Bill entity
var billSchema = new Schema({
  period: {type: String, required: true},
  provider: {type: String, required: true},
  consumption: {type: String, required: true},
  cost: {type: String, required: true},
  comments: String,
  consumptionUnity: String,
  consumptionType: String,
  consumptionFee: String,
  productionUnity: String
});

var Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;