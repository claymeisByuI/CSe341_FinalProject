const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Email: { type: String, required: true, unique: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  PasswordHash: { type: String, required: true },
  Username: { type: String, required: true, unique: true },
  AccountType: { type: String, enum: ['admin', 'customer'], required: true },
  PhoneNumber: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', userSchema, 'Users');
