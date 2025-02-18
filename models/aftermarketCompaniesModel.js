const mongoose = require('mongoose');

const aftermarketCompanySchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  City: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return isNaN(v);
      },
      message: (props) => `${props.value} should not be a number!`,
    },
  },
  State: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return isNaN(v);
      },
      message: (props) => `${props.value} should not be a number!`,
    },
  },
  Country: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return isNaN(v);
      },
      message: (props) => `${props.value} should not be a number!`,
    },
  },
  Brands: [{ type: String, required: true }],
  CertifiedMechanics: { type: Number, required: true },
  Vehicles: [{ type: String, required: true }],
});

module.exports = mongoose.model('AftermarketCompany', aftermarketCompanySchema, 'AftermarketCompanies');
