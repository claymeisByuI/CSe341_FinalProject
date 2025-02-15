const mongoose = require('mongoose');

const carDealerFranchiseSchema = new mongoose.Schema({
  Address: { type: String, required: true },
  Brand: { type: String, required: true },
  City: { type: String, required: true },
  Country: { type: String, required: true },
  Emails: { type: [String], required: true },
  Name: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  State: { type: String, required: true },
});

module.exports = mongoose.model('CarDealerFranchise', carDealerFranchiseSchema);
