const mongoose = require('mongoose');

const aftermarketCompanySchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Country: { type: String, required: true },
  Brands: [{ type: String, required: true }],
  CertifiedMechanics: { type: Number, required: true },
  Vehicles: [{ type: String, required: true }],
});

module.exports = mongoose.model('AftermarketCompany', aftermarketCompanySchema, 'AftermarketCompanies');
