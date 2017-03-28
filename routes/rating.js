var express = require('express');
var router = express.Router();
var ratingController = require('../controllers/ratingController');
var common = require('../common');


//Routes for /ratings, calls the proper controller depending on the path

// /ratings/getRatingsForRecipe/{recipeId} returns a list of ratings for the given recipeId parameter
router.get('/getRatingsForRecipe/:recipeId', function(req, res){
	ratingController.getRatingsForRecipe(req.params.recipeId, function(ratings, error){
		if(!error){
			var responseData = ratings ? ratings : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});
});

// /ratings/createRating creates a new rating
router.post('/createRating', function(req, res) {
	if(req.body){
		ratingController.createRating(req.body, function(error){
			if(error && error.message){
				log.info(common.messages.POST_ERROR + ": " + error);
				res.json({code: common.codes.ERROR, data: common.messages.POST_ERROR + ": " + error});
			}
			else{
				res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
			}
		});
	}
});

module.exports = router;