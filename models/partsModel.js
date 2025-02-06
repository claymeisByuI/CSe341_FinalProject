const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  Brand: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v);
      },
      message: (props) => `${props.value} remember its only alphanumeric characters.!`,
    },
  },
  Name: { type: String, required: true },
  Quality: { type: String, enum: ['OEM', 'Aftermarket', 'Used'], required: true },
  Vehicles: [{ type: String }],
  CreatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Parts', partSchema, 'Parts');
