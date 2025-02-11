const brandsModel = require('./brandModel');
const partsModel = require('./partsModel');
const userModel = require('./userModel');
const vehicleModel = require('./vehicleModel');
const aftermarketCompaniesModel = require('./aftermarketCompaniesModel');
const carDealerFranchiseModel = require('./carDealerFranchiseModel');
const dbConfig = require('../utils');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.brands = require('./brandModel')(mongoose);
db.users = require('./userModel')(mongoose);
db.parts = require('./partsModel')(mongoose);
db.vehicles = require('./vehicleModel')(mongoose);
db.aftermarketCompanies = require('./aftermarketCompaniesModel')(mongoose);
db.carDealerFranchise = require('./carDealerFranchiseModel')(mongoose);

module.exports = {
  db,
  brandsModel,
  partsModel,
  userModel,
  vehicleModel,
  aftermarketCompaniesModel,
  carDealerFranchiseModel,
};
