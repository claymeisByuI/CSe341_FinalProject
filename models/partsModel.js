const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  name: { type: String, required: true },
  quality: { type: String, enum: ['OEM', 'Aftermarket', 'Used'], required: true },
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Part', partSchema);
