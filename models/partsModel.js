const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true }, 
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }], 
  quality: { type: String, enum: ['OEM', 'Aftermarket', 'Used'], required: true }, 
  createdAt: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Part', partSchema);