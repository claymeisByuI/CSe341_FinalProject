const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicleController');

router.post('/', vehiclesController.createVehicle);
router.put('/', vehiclesController.updateVehicle);
router.get('/', vehiclesController.getVehicles);
router.get('/findByBrand', vehiclesController.findVehiclesByBrand);
router.get('/findByYear', vehiclesController.findVehiclesByYear);
router.get('/findByType', vehiclesController.findVehiclesByType);
router.get('/:vehiclesId', vehiclesController.getVehicleById);
router.delete('/:vehiclesId', vehiclesController.deleteVehicleById);

module.exports = router;
