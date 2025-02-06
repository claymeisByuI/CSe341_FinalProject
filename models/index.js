const partsModel = require('./partsModel');
const userModel = require('./userModel');
const vehicleModel = require('./vehicleModel');
const dbConfig = require('../utils');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require('./userModel')(mongoose);
db.parts = require('./partsModel')(mongoose);
db.vehicles = require('./vehicleModel')(mongoose);

module.exports = {
  db,
  partsModel,
  userModel,
  vehicleModel,
};
