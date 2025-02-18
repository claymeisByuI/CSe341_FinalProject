const mongoose = require('mongoose');

const carDealerFranchiseSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Brands: [{ type: String, required: true }],
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Country: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Email: { type: String, required: true },
});

module.exports = mongoose.model('CarDealerFranchise', carDealerFranchiseSchema, 'CarDealerFranchise');
