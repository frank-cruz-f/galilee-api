var Rating = require('../models/rating');

//Controller for Rating entity
var ratingController = {
	//Creates a new rating for the recipeId on the ratingObj
	createRating: function(ratingObj, callback){
		new Rating({
			recipeId: ratingObj.recipeId,
			comment: ratingObj.comment,
			displayName: ratingObj.displayName,
			points: ratingObj.points}).save(function(error){
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
	//Retrieves the ratings for a given recipeId
	getRatingsForRecipe: function(recipeId, callback){
		 Rating.find({'recipeId': recipeId}, function(error, rating) {
		 	//If there's an error, raises it to the caller of this function.
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(rating, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(rating);
		 		}
		 	}
    	});
	}
}

module.exports = ratingController;
