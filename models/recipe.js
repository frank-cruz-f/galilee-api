const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Recipe entity
const recipeSchema = new Schema({
  name: {type: String, unique:true, validate:[nameValidator, "Recipe Name cannot be empty"]},
  categoryId: {type: Schema.Types.ObjectId, ref:"category", required:true},
  chefName: {type: String, validate:[nameValidator, "Chef Name cannot be empty"]},
  ingredients: {
  	type: [{
  		name: String,
  		amount: Number,
      unit: String
  	}],
  	validate: [arrayLimit, 'Ingredients amount and name cannot be empty'],
    required: true,
    min:1
  },
  prepDescription: {type:[String], validate:[prepMinimun, 'Preparation steps cannot be empty']},
  time: {type: Number, min:0},
  portions: {type: Number, min:0},
  calories: {type: Number, min:0}
});

//Validations block in order to return a prettified error in case of fail.

function arrayLimit(val) {
  return val.length >= 1 && ingredientsNotEmpty(val);
}

function prepMinimun(val) {
  return val.length >= 1 && prepStepsNotEmpty(val);
}

function ingredientsNotEmpty(ingredients){
  var result = true;
  for (var i = 0; i < ingredients.length; i++) {
    result = result && ingredients[i].name !== "" && ingredients[i].amount !== "";
    if(!result){
      break;
    }
  }
  return result;
}

function prepStepsNotEmpty(prepSteps) {
  var result = true;
  for (var i = 0; i < prepSteps.length; i++) {
    result = result && prepSteps[i] !== "";
    if(!result){
      break;
    }
  }
  return result;
}

function nameValidator(val){
  return val && val !== "";
}

//End of validations block

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;