const mongoose = require('mongoose');

// models/brandsModel.js
const brandSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Country: { type: String, required: true },
  StartingDate: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid year!`,
    },
  },
  Logo: { type: String, required: true },
  Headquarters: { type: String, required: true },
  Founders: { type: String, required: true },
});

module.exports = mongoose.model('Brands', brandSchema, 'Brands');
