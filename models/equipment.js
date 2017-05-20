var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Bill entity
var equipmentSchema = new Schema({
  brand: String,
  model: String,
  voltage: Number,
  monophase: Boolean,
  mainSwitchCapacity: Number,
  capacity: Number,
  electricDesignPlan: Boolean,
  mainEquipmentManuals: Boolean,
  equipmentOperationInfo: Boolean,
  equipmentMaintenanceProgram: Boolean,
  picturesLinks: [String]
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;