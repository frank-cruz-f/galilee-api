var express = require('express');
var router = express.Router();
var recipeController = require('../controllers/recipeController');
var common = require('../common');

//Routes for /recipes, calls the proper controller depending on the path

// /recipes/getRecipesForCategory/{categoryId} returns the list of recipes for the categoryId parameter
router.get('/getRecipesForCategory/:categoryId', function(req, res) {
	recipeController.getRecipesForCategory(req.params.categoryId, function(categories, error){
		if(!error){
			var responseData = categories ? categories : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			log.info(common.codes.ERROR + ": " + error);
			res.json({code:common.codes.ERROR, data: error});
		}
	});
});

// /recipes/getRecipe/{recipeId} return the recipe for the recipeId parameter
router.get('/getRecipe/:recipeId', function(req, res) {
	recipeController.getRecipe(req.params.recipeId, function(recipe, error){
		if(!error){
			var responseData = recipe ? recipe : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});
});

// /recipes/searchRecipe?keyword={keyword} return the recipes which names matches with the keyword via regular expression
router.get('/searchRecipe', function(req, res){
	recipeController.searchRecipe(req.query.keyword, function(recipes, error){
		if(!error){
			var responseData = recipes ? recipes : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});
});

// /recipes/createRecipe creates a new recipe
router.post('/createRecipe', function(req, res) {
	if(req.body){
		recipeController.createRecipe(req.body, function(error){
			if(error && error.message){
				res.json({code: common.codes.ERROR, data: common.messages.POST_ERROR + ": " + error});
			}
			else{
				res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
			}
		});
	}
});
// /recipes/updateRecipe update an existing recipe
router.post('/updateRecipe', function(req, res) {
	if(req.body){
		recipeController.updateRecipe(req.body, function(recipe, error){
			if(error && error.message){
				res.json({code: common.codes.ERROR, data: common.messages.POST_ERROR + ": " + error});
			}
			else{
				res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
			}
		});
	}
});

module.exports = router;