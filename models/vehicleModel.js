const mongoose = require('mongoose');

// models/vehicleModel.js
const vehicleSchema = new mongoose.Schema({
  Brand: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Z]/.test(v);
      },
      message: (props) => `${props.value} remember its case sensitive!`,
    },
  },
  Description: { type: String, required: false },
  Engine_type: { type: String, required: true },
  Fuel_type: { type: String, required: true },
  Name: { type: String, required: true },
  Transmission: { type: String, required: true },
  Year: { type: Number, required: true },
  Type: { type: String, required: true },
  colors_available: [{ type: String, required: true }],
  CreatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vehicles', vehicleSchema, 'Vehicles');
