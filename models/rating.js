var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Rating entity
var ratingSchema = new Schema({
  recipeId: {type: Schema.Types.ObjectId, ref:"recipe", required: true},
  comment: String,
  displayName: {type: String, validate:[notNullOrEmpty, "Display Name cannot be null or empty"]},
  points: {type: Number, max: 5, min: 1, required:true}
});

//Validates in order to return a prettified error in case of fail.
function notNullOrEmpty(val){ 
  return val && val !== "";
}

var Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;