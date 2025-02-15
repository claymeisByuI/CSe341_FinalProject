// Possibly depricated

// You need to add bcrypt package using npm

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

async function checkPassword(enteredPassword, storedHash) {
  try {
    const match = await bcrypt.compare(enteredPassword, storedHash);
    return match;
  } catch (err) {
    console.error('Error comparing passwords:', err);
    return false; // Or throw the error
  }
}

async function getPasswordHash(enteredPassword) {
  try {
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.PasswordHash)) {
      throw 'Password must be at least 8 characters long and contain at least one number and one special character.';
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.PasswordHash, saltRounds);
    return hashedPassword;
  } catch (err) {
    throw err;
  }
}

function isAuthenticated(req, res, next) {
  if (req.session.user === undefined) {
    res.status(401).send({ message: 'Invalid access.' });
  } else {
    next();
  }
}

// Replace the mongoose model export with exporting the functions for testing
module.exports = { checkPassword, getPasswordHash, isAuthenticated };

// passwords that we need to hash
// I@mABas1cCl!3nt
// I@mAnM3ch4n1c
// I@mAnAdm!n1strat0r

// Example usage (during registration):
// const newUser = new User({ /* ... other user data */, PasswordHash: 'TheNewPassword'});
// await newUser.save(); // The pre('save') middleware will handle hashing and validation

// Example usage (during login):
// const user = await User.findOne({ Username: req.body.username });
// if (user) {
//   const isMatch = await user.comparePassword(req.body.password);
//   if (isMatch) {
//     // Login successful
//   } else {
//     // Incorrect password
//   }
// }
