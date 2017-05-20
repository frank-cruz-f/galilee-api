var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Bill entity
var equipmentSchema = new Schema({
  equipment:[
      {
          brand:String,
          model:String,
          capacity:Number,
          picturesLinks:[String]
      }
  ],
  voltage:Number,
  monophase: Boolean,
  mainSwitchCapacity: Number,
  mainSwitchImages: [String],
  electricDesignPlan: Boolean,
  mainEquipmentManuals: Boolean,
  equipmentOperationInfo: Boolean,
  equipmentMaintenanceProgram: Boolean
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;