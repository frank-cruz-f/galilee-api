var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Client entity
var clientSchema = new Schema({
  name: {type: String, required: true},
  productionUnit: String,
  direction: String,
  location: String
});

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;