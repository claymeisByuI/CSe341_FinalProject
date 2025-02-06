const User = require('../models/userModel');

// Create a single user
exports.createUser = async (req, res) => {
  /*
     #swagger.tags = ['Users']
  */

  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create multiple users from an array
exports.createUsersWithArray = async (req, res) => {
  /*
     #swagger.tags = ['Users']
  */
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create multiple users from a list
exports.createUsersWithList = async (req, res) => {
  /*
     #swagger.tags = ['Users']
  */
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// User login
exports.loginUser = async (req, res) => {
  // Add authentication logic here
  res.status(200).json({ message: 'User logged in' });
};

// User logout
exports.logoutUser = async (req, res) => {
  res.status(200).json({ message: 'User logged out' });
};

// Find users by type
exports.findUsersByType = async (req, res) => {
  /*
     #swagger.tags = ['Users']
  */
  try {
    const users = await User.find({ type: req.query.type });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user by username
exports.getUserByUsername = async (req, res) => {
  /*
     #swagger.tags = ['Users']
  */
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user by username
exports.updateUserByUsername = async (req, res) => {
  /*
     #swagger.tags = ['Users']
  */
  try {
    const user = await User.findOneAndUpdate({ username: req.params.username }, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user by username
exports.deleteUserByUsername = async (req, res) => {
  /*
     #swagger.tags = ['Users']
  */
  try {
    const user = await User.findOneAndDelete({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
