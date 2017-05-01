var express = require('express');
var router = express.Router();
var billController = require('../controllers/billController');
var common = require('../common');

//Routes for /bills, calls the proper controller depending on the path

// /bills/getBills return the list of bills stored on the db
router.get('/getBills', function(req, res) {
	billController.getBills(function(bills, error){
		if(!error){
			var responseData = bills ? bills : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});

});

// /bills/createBill creates a new bill
router.post('/createBill', function(req, res) {
	if(req.body){
		billController.createBill(req.body, function(error){
			if(error){
				res.json({code: common.codes.ERROR, data: common.messages.POST_ERROR + ": " + error});
			}
			else{
				res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
			}
		});
	}
});

// /bills/deleteBill creates a new bill
router.delete('/deleteBill/:billId', function(req, res) {
	billController.deleteBill(req.params.billId, function(error){
		if(error){
			res.json({code: common.codes.ERROR, data: common.messages.DELETE_ERROR + ": " + error});
		}
		else{
			res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
		}
	});
});

module.exports = router;