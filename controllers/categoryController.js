var Category = require('../models/category');
var common = require('../common');

//Controller for Category entity
var categoryController = {
	//Creates a new category on the db
	createCategory: function(categoryObj, callback){
		new Category({
				name:categoryObj.name
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
	//Retrieves a category based on the id
	getCategory: function(categoryId, callback){
		Category.findOne({'_id':categoryId}, function(error, category) {
			//If there's an error, raises it to the caller of this function.
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(category, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(category);
		 		}
		 	}
    	});
	},
	//Retrieves all the categories stored on the db
	getCategories: function(callback){
		 Category.find({}, function(error, categories) {
		 	//If there's an error, raises it to the caller of this function.
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
	}
}

module.exports = categoryController;