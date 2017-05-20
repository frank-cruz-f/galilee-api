var Equipment = require('../models/equipment');
var common = require('../common');

//Controller for Equipment entity
var equipmentController = {
	//Creates a new equipment on the db
	createEquipment: function(equipmentObj, callback){
		new Equipment({
				equipment: equipmentObj.equipment,
				voltage: equipmentObj.voltage,
				monophase: equipmentObj.monophase,
				mainSwitchCapacity: equipmentObj.mainSwitchCapacity,
				mainSwitchImages: equipmentObj.mainSwitchImages,
				capacity: equipmentObj.capacity,
				electricDesignPlan: equipmentObj.electricDesignPlan,
				mainEquipmentManuals: equipmentObj.mainEquipmentManuals,
				equipmentOperationInfo: equipmentObj.equipmentOperationInfo,
				equipmentMaintenanceProgram: equipmentObj.equipmentMaintenanceProgram,
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
	//Retrieves all the equipments stored on the db
	getEquipmentList: function(callback){
		 Equipment.find({}, function(error, equipments) {
		 	//If there's an error, raises it to the caller of this function.
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(equipments, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(equipments);
		 		}
		 	}

    	});
	},
	deleteEquipment: function(equipmentId, callback){
		 Equipment.findByIdAndRemove(equipmentId, function(error, equipments) {
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

module.exports = equipmentController;