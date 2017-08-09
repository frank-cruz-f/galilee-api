var Client = require('../models/client');
var common = require('../common');

//Controller for Client entity
var clientController = {
	//Creates a new client on the db
	createClient: function(clientObj, callback){
			new Client({
				name: clientObj.name,
				productionUnit: clientObj.productionUnit,
				direction: clientObj.direction,
				location: clientObj.location
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
	//Retrieves all the clients stored on the db
	getClients: function(callback){
		Client.find({}, function(error, clients) {
		 	//If there's an error, raises it to the caller of this function.
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(clients, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(clients);
		 		}
		 	}

    	});
	},
	deleteClient: function(clientId, callback){
		 Client.findByIdAndRemove(clientId, function(error, clients) {
		 	//If there's an error, raises it to the caller of this function.
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(error);
		 	}
		 	else{
		 		if(callback){
		 			callback();
		 		}
		 	}

    	});
	}
}

module.exports = clientController;