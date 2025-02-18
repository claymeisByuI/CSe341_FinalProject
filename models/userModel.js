const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Email: { type: String, required: true, unique: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  UserName: { type: String, required: true, unique: true },
  AccountType: { type: String, enum: ['admin', 'customer'], required: true },
  PhoneNumber: { type: String, required: true },
});
// // Pre-save middleware to hash the password and perform validation
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('PasswordHash')) return next();
//   try {
//     if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.PasswordHash)) {
//       return next(new Error("Password must be at least 8 characters long and contain at least one number and one special character."));
//     }
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(this.PasswordHash, saltRounds);
//     this.PasswordHash = hashedPassword;
//     next();
//   } catch (err) {
//     return next(err);
//   }
// });
module.exports = mongoose.model('Users', userSchema, 'Users');
