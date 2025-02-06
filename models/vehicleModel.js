const mongoose = require('mongoose');

// models/vehicleModel.js
const vehicleSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  description: { type: String, required: false },
  engine_type: { type: String, required: true },
  fuel_type: { type: String, required: true },
  name: { type: String, required: true },
  transmission: { type: String, required: true },
  year: { type: Number, required: true },
  type: { type: String, required: true },
  colors_available: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
