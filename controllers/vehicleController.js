// vehiclesController.js
const Vehicle = require('../models/vehicleModel');

// Create a vehicle
exports.createVehicle = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
        #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: { $ref: "#/components/schemas/Vehicle" },
          }
        }
     }
  */
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a vehicle
exports.updateVehicle = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
  */
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.body.id, req.body, { new: true });
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all vehicles
exports.getVehicles = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
  */
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find vehicles by brand
exports.findVehiclesByBrand = async (req, res) => {
  /*
   #swagger.tags = ['Vehicle']
  */
  try {
    const vehicles = await Vehicle.find({ brand: req.query.brand });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find vehicles by year
exports.findVehiclesByYear = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
 */
  try {
    const vehicles = await Vehicle.find({ year: req.query.year });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find vehicles by type
exports.findVehiclesByType = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
 */
  try {
    const vehicles = await Vehicle.find({ type: req.query.type });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get vehicle by ID
exports.getVehicleById = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
 */
  try {
    const vehicle = await Vehicle.findById(req.params.vehiclesId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete vehicle by ID
exports.deleteVehicleById = async (req, res) => {
  /*
  #swagger.tags = ['Vehicle']
 */
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.vehiclesId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
