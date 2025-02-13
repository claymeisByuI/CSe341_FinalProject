const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicleController');
const validation = require('../utils/oauth');

router.post('/', validation.isAuthenticated, vehiclesController.createVehicle);
router.put('/:vehicleId', validation.isAuthenticated, vehiclesController.updateVehicle);
router.get('/', vehiclesController.getVehicles);
router.get('/findByBrand', vehiclesController.findVehiclesByBrand);
router.get('/findByYear', vehiclesController.findVehiclesByYear);
router.get('/findByType', vehiclesController.findVehiclesByType);
router.get('/:vehiclesId', vehiclesController.getVehicleById);
router.delete('/:vehiclesId', validation.isAuthenticated, vehiclesController.deleteVehicleById);

module.exports = router;
