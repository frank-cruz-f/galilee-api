var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/categoryController');
var common = require('../common');

//Routes for /categories, calls the proper controller depending on the path

// /categories/getCategories return the list of categories stored on the db
router.get('/getCategories', function(req, res) {
	categoryController.getCategories(function(categories, error){
		if(!error){
			var responseData = categories ? categories : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});

});

// /categories/getCategory/{categoryId} return a single category with the given categoryId
router.get('/getCategory/:categoryId', function(req, res){
	categoryController.getCategory(req.params.categoryId, function(category, error){
		if(!error){
			var responseData = category ? category : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});
});

// /categories/createCategory creates a new category
router.post('/createCategory', function(req, res) {
	if(req.body){
		categoryController.createCategory(req.body, function(error){
			if(error){
				res.json({code: common.codes.ERROR, data: common.messages.POST_ERROR + ": " + error});
			}
			else{
				res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
			}
		});
	}
});

module.exports = router;