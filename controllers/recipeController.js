var Recipe = require('../models/recipe');
var common = require('../common');

//Controller for Recipe entity
var recipeController = {
	//Creates a new Recipe
	createRecipe: function(recipeObj, callback){
		new Recipe({
			name:recipeObj.name,
			categoryId: recipeObj.categoryId,
			chefName: recipeObj.chefName,
			ingredients: recipeObj.ingredients,
			prepDescription: recipeObj.prepDescription,
			time: recipeObj.time,
			portions: recipeObj.portions,
			calories: recipeObj.calories
		}).save(function(error){
			//If there's an error, raises it to the caller of this function.
			if(error){
					log.info(common.messages.POST_ERROR + ": " +error);
					callback(error);
			}
			else{
				callback();
			}
		});
	},
	//Updates an existing recipe
	updateRecipe: function(recipeObj, callback){
		Recipe.findOne({'_id':recipeObj._id}, function(error, recipe) {
			//If there's an error, raises it to the caller of this function, if not, proceed with the update
		 	if(error){
		 		log.info(common.messages.POST_ERROR + ": " +error);
		 		callback(recipe, error);
		 	}
		 	else{
		 		recipe.name = recipeObj.name;
		 		recipe.categoryId = recipeObj.categoryId;
		 		recipe.chefName = recipeObj.chefName;
		 		recipe.ingredients = recipeObj.ingredients;
		 		recipe.prepDescription = recipeObj.prepDescription;
		 		recipe.time = recipeObj.time;
		 		recipe.portions = recipeObj.portions;
		 		recipe.calories = recipeObj.calories;

		 		recipe.save(function(error, savedRecipe){
		 			//If there's an error, raises it to the caller of this function
		 			if(error){
		 				log.info(common.messages.POST_ERROR + ": " +error);
		 				if(callback){
		 					callback(savedRecipe, error);
		 				}
		 			}
		 			else{
		 				if(callback){
		 					callback(savedRecipe);
		 				}
		 			}
		 		})
		 	}
    	});
	},
	//Retrieves the recipes for a given categoryId
	getRecipesForCategory: function(categoryId, callback){
		Recipe.find({'categoryId':categoryId}, function(error, categories) {
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(categories, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(categories);
		 		}
		 	}
    	});
	},
	//Retrieves a single recipe for the given recipeId
	getRecipe: function(recipeId, callback){
		Recipe.findOne({'_id':recipeId}, function(error, recipe) {
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(recipe, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(recipe);
		 		}
		 	}
    	});
	},
	//Search using the keyword as regex against the Recipes names, returns multiple matches.
	searchRecipe: function(keyword, callback){
		var regex = new RegExp(keyword, "i");
		Recipe.find({'name': regex}, function(error, recipes){
			//If there's an error, raises it to the caller of this function
			if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(recipes, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(recipes);
		 		}
		 	}
		});
	}

}

module.exports = recipeController;