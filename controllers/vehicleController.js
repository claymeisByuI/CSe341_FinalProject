// vehiclesController.js
const Vehicle = require('../models/vehicleModel');

// 🚗💨 Create a vehicle
exports.createVehicle = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
        #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/Vehicle" },
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
                   colors_available: ['Red', 'Blue', 'Black']
                 }
               }
             }
          }
        }
     }
    #swagger.responses[201] = {
      description: 'Vehicle created successfully',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Vehicle' }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: `Oopsie! Couldn't save your cool ride: ${error.message}` });
  }
};

// Update a vehicle
exports.updateVehicle = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
    #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/Vehicle" },
             examples: {
               Vehicle: {
                 value: {
                   Brand: 'Toyota',
                   Description: 'A reliable car',
                   Engine_type: 'inline-4',
                   Fuel_type: 'Gasoline',
                   Name: 'Corolla',
                   Transmission: 'Automatic',
                   Year: 2021,
                   Type: 'Hatchback',
                   colors_available: ['Red', 'Blue', 'Black']
                 }
               }
             }
          }
        }
     }
    #swagger.responses[200] = {
      description: 'Vehicle updated successfully',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Vehicle' }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'Vehicle not found',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.vehicleId, req.body, { new: true });
    if (!vehicle) return res.status(404).json({ message: 'Vehicle vanished into the void! 🔎' });
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: `Something went vroom-vroom wrong: ${error.message}` });
  }
};

// Get all vehicles
exports.getVehicles = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
    #swagger.responses[200] = {
      description: 'List of vehicles',
      content: {
        'application/json': {
          schema: { type: 'array', items: { $ref: '#/components/schemas/Vehicle' } }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: `Failed to fetch the garage: ${error.message}` });
  }
};

// Find vehicles by brand
exports.findVehiclesByBrand = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
    #swagger.responses[200] = {
      description: 'List of vehicles by brand',
      content: {
        'application/json': {
          schema: { type: 'array', items: { $ref: '#/components/schemas/Vehicle' } }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicles = await Vehicle.find({ Brand: req.query.brand });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: `Oops, can't find those ${req.query.brand} beauties: ${error.message}` });
  }
};

// Find vehicles by year
exports.findVehiclesByYear = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
    #swagger.responses[200] = {
      description: 'List of vehicles by year',
      content: {
        'application/json': {
          schema: { type: 'array', items: { $ref: '#/components/schemas/Vehicle' } }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicles = await Vehicle.find({ Year: req.query.year });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: `Year ${req.query.year}? Must be a classic! But there's an error: ${error.message}` });
  }
};

// Find vehicles by type
exports.findVehiclesByType = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
    #swagger.responses[200] = {
      description: 'List of vehicles by type',
      content: {
        'application/json': {
          schema: { type: 'array', items: { $ref: '#/components/schemas/Vehicle' } }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicles = await Vehicle.find({ Type: req.query.type });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: `Sorry, no ${req.query.type} in stock! 🚜 ${error.message}` });
  }
};

// Get vehicle by ID
exports.getVehicleById = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
    #swagger.responses[200] = {
      description: 'Vehicle details',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Vehicle' }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'Vehicle not found',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicle = await Vehicle.findById(req.params.vehiclesId);
    if (!vehicle) return res.status(404).json({ message: '🚨 Vehicle missing! Call the authorities! 🚔' });
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: `Error retrieving vehicle. Maybe it ran away? 🏃💨 ${error.message}` });
  }
};

// Delete vehicle by ID
exports.deleteVehicleById = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
    #swagger.responses[200] = {
      description: 'Vehicle deleted successfully',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Message' }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'Vehicle not found',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
    #swagger.responses[400] = {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Error' }
        }
      }
    }
  */
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.vehiclesId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle already ghosted. 👻' });
    res.status(200).json({ message: '🚗💥 Vehicle deleted successfully. Gone but not forgotten!' });
  } catch (error) {
    res.status(400).json({ message: `Couldn't scrap this vehicle. Error: ${error.message}` });
  }
};
