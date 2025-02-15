const mongoose = require('mongoose');

// models/brandsModel.js
const brandSchema = new mongoose.Schema({
  Country: { type: String, required: true },
  Founders: { type: String, required: true },
  Headquarters: { type: String, required: true },
  Logo: { type: String, required: true },
  Name: { type: String, required: true },
  StartingDate: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Brands', brandSchema, 'Brands');
