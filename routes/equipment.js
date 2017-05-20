var express = require('express');
var router = express.Router();
var equipmentController = require('../controllers/equipmentController');
var common = require('../common');

//Routes for /equipment, calls the proper controller depending on the path

// /equipment/getEquipmentList return the list of equipment stored on the db
router.get('/getEquipmentList', function(req, res) {
	equipmentController.getEquipmentList(function(equipment, error){
		if(!error){
			var responseData = equipment ? equipment : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});

});

// /equipment/createEquipment creates a new equipment
router.post('/createEquipment', function(req, res) {
	if(req.body){
		equipmentController.createEquipment(req.body, function(error){
			if(error){
				res.json({code: common.codes.ERROR, data: common.messages.POST_ERROR + ": " + error});
			}
			else{
				res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
			}
		});
	}
});

// /equipment/deleteEquipment deletes a equipment by id
router.delete('/deleteEquipment/:equipmentId', function(req, res) {
	equipmentController.deleteEquipment(req.params.equipmentId, function(error){
		if(error){
			res.json({code: common.codes.ERROR, data: common.messages.DELETE_ERROR + ": " + error});
		}
		else{
			res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
		}
	});
});

module.exports = router;