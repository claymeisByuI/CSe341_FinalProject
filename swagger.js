const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const mongooseToSwagger = require('mongoose-to-swagger');

const partsModel = require('./models/partsModel');
const userModel = require('./models/userModel');
const vehicleModel = require('./models/vehicleModel');
const errorModel = require('./models/errorModel');
const brandModel = require('./models/brandModel');
const carDealerFranchiseModel = require('./models/carDealerFranchiseModel');
const aftermarketCompaniesModel = require('./models/aftermarketCompaniesModel');
const mongoose = require('mongoose');

const partsSchema = mongooseToSwagger(partsModel);
const userSchema = mongooseToSwagger(userModel);
const vehicleSchema = mongooseToSwagger(vehicleModel);
const errorSchema = mongooseToSwagger(errorModel);
const brandSchema = mongooseToSwagger(brandModel);
const carDealerFranchiseSchema = mongooseToSwagger(carDealerFranchiseModel);
const aftermarketCompaniesSchema = mongooseToSwagger(aftermarketCompaniesModel);

const doc = {
  openapi: '3.0.0',
  info: {
    title: 'Commercial Vehicle Information Database',
    description: 'Commercial Vehicle Information Database',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server',
    },
    {
      url: 'https://cse-341-final-project-2g2g.onrender.com',
      description: 'render server',
    },
  ],
  components: {
    schemas: {
      Part: partsSchema.properties,
      User: userSchema.properties,
      Vehicle: vehicleSchema.properties,
      Error: errorSchema.properties,
      Brand: brandSchema.properties,
      CarDealerFranchise: carDealerFranchiseSchema.properties,
      AftermarketCompanies: aftermarketCompaniesSchema.properties,
    },
    examples: {
      Vehicle: {
        value: {
          Brand: 'Toyota',
          Description: 'A reliable car',
          Engine_type: 'V6',
          Fuel_type: 'Gasoline',
          Name: 'Camry',
          Transmission: 'Automatic',
          Year: 2021,
          Type: 'Sedan',
          colors_available: ['Red', 'Blue', 'Black'],
        },
      },
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// todo:  This needs to be awaited so the running server is getting the latest swagger.json file and not
//  one when the server started
// generate swagger.json
const generateSwaggerFile = async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
  console.log('Generated swagger file');
};

module.exports = new Promise((resolve, reject) => {
  generateSwaggerFile()
    .then(() => {
      console.log('Swagger setup complete');
      resolve();
    })
    .catch((err) => {
      console.error('Swagger setup failed', err);
      reject(err);
    });
});
