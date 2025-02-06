const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicleController');

router.post('/vehicles', vehiclesController.createVehicle);
router.put('/vehicles', vehiclesController.updateVehicle);
router.get('/vehicles', vehiclesController.getVehicles);
router.get('/vehicles/findByBrand', vehiclesController.findVehiclesByBrand);
router.get('/vehicles/findByYear', vehiclesController.findVehiclesByYear);
router.get('/vehicles/findByType', vehiclesController.findVehiclesByType);
router.get('/vehicles/:vehiclesId', vehiclesController.getVehicleById);
router.delete('/vehicles/:vehiclesId', vehiclesController.deleteVehicleById);

module.exports = router;
