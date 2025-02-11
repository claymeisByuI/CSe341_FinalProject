const mongoose = require('mongoose');

const aftermarketCompaniesSchema = new mongoose.Schema({
  Address: { type: String, required: true },
  Brands_work_with: { type: [String], required: true },
  Country: { type: String, required: true },
  Name: { type: String, required: true },
  State: { type: String, required: true },
  Vehicles: { type: [String], required: true },
  Certified_Mechanics: { type: Number, required: true },
  City: { type: String, required: true }
});

module.exports = mongoose.model('AftermarketCompanies', aftermarketCompaniesSchema);