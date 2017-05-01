var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Bill entity
var billSchema = new Schema({
  period: {type: String, required: true},
  provider: {type: String, required: true},
  consumption: {type: Number, required: true},
  cost: {type: String, required: true},
  comments: String
});

var Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;