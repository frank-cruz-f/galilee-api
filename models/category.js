var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Category entity
var categorySchema = new Schema({
  name: {type: String, unique:true, required: true}
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;