const mongoose = require('mongoose');

const aftermarketCompanySchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Country: { type: String, required: true },
  Brands: [{ type: String, required: true }], // Brands the company works with
  CertifiedMechanics: { type: Number, required: true }, // Number of certified mechanics
  Vehicles: [{ type: String, required: true }], // Vehicles the company deals with
  CreatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AftermarketCompany', aftermarketCompanySchema, 'AftermarketCompanies');