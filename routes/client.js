var express = require('express');
var router = express.Router();
var clientController = require('../controllers/clientController');
var common = require('../common');

//Routes for /clients, calls the proper controller depending on the path

// /clients/getClients return the list of clients stored on the db
router.get('/getClients', function(req, res) {
	clientController.getClients(function(clients, error){
		if(!error){
			var responseData = clients ? clients : [];
			res.json({code: common.codes.SUCCESS, data: responseData});
		}
		else{
			res.json({code:common.codes.ERROR, data: error});
		}
	});

});

// /clients/createClient creates a new client
router.post('/createClient', function(req, res) {
	if(req.body){
		clientController.createClient(req.body, function(error){
			if(error){
				res.json({code: common.codes.ERROR, data: common.messages.POST_ERROR + ": " + error});
			}
			else{
				res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
			}
		});
	}
});

// /clients/deleteClient creates a new client
router.delete('/deleteClient/:clientId', function(req, res) {
	clientController.deleteClient(req.params.clientId, function(error){
		if(error){
			res.json({code: common.codes.ERROR, data: common.messages.DELETE_ERROR + ": " + error});
		}
		else{
			res.json({code: common.codes.SUCCESS, data: common.messages.SUCCESS});
		}
	});
});

module.exports = router;