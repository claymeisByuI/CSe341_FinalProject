const mongoose = require('mongoose');

const carDealerFranchiseSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Brand: { type: String, required: true },
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
  PhoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{3}-\d{4}$/.test(v); // Ensures the PhoneNumber is in the format "555-1212"
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  Emails: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v.every((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)); // Ensures each email is valid
      },
      message: (props) => `${props.value} contains invalid email addresses!`,
    },
  },
});

module.exports = mongoose.model('CarDealerFranchise', carDealerFranchiseSchema, 'CarDealerFranchise');
