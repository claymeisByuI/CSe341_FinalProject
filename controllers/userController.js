const User = require('../models/userModel');

// Create a single user
exports.createUser = async (req, res) => {
  /*
   #swagger.tags = ['Users']
        #swagger.requestBody = {
        description: 'Create A User',
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/User" },
          }
        }
     }
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
      #swagger.requestBody = {
        description: 'Create A from array',
         required: true,
         content: {
           "application/json": {
             schema: {
            type: "array",
            items: { $ref: "#/components/schemas/User" }
            }
          }
       }
     }
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
           description: 'Create by list',
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: { $ref: "#/components/schemas/User" }
          }

        }
      }
        #swagger.requestBody = {
        description: 'Create A from array',
         required: true,
         content: {
           "application/json": {
             schema: {
            type: "array",
            items: { $ref: "#/components/schemas/User" }
            }
          }
       }
     }
  */
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find users by type
exports.findUsersByType = async (req, res) => {
  /*
     #swagger.tags = ['Users']
      #swagger.responses[200] = {
      description: 'Find a user By Type',
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: { $ref: "#/components/schemas/User" }
          }

        }
      }
   }
  */
  try {
    const users = await User.find({ Type: req.query.type });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user by username
exports.getUserByUsername = async (req, res) => {
  /*
     #swagger.tags = ['Users']
     content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/User" }
        }
      }

  */
  try {
    const user = await User.findOne({ Username: req.params.username });
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
     content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/User" }
        }
      }

  */
  try {
    const user = await User.findOneAndUpdate({ Username: req.params.username }, req.body, { new: true });
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
    const user = await User.findOneAndDelete({ Username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
