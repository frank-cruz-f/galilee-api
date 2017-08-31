var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Bill entity
var billSchema = new Schema({
  period: {type: String, required: true},
  provider: String,
  consumption: String,
  cost: String,
  comments: String,
  consumptionUnit: String,
  consumptionType: String,
  consumptionFee: String,
  productionUnit1: String,
  productionQuantity1: String,
  productionUnit2: String,
  productionQuantity2: String,
  biomassType: String
});

var Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;