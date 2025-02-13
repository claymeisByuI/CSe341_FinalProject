const express = require('express');
const router = express.Router();
const partsController = require('../controllers/partsController');
const validation = require('../utils/oauth');

router.post('/', validation.isAuthenticated, partsController.createPart);
router.put('/:partsId', validation.isAuthenticated, partsController.updatePart);
router.get('/', partsController.getAllParts);
router.get('/findByBrand', partsController.getPartsByBrand);
router.get('/findByVehicle', partsController.getPartsByVehicle);
router.get('/findByQuality', partsController.getPartsByQuality);
router.get('/:partsId', partsController.getPartById);
router.delete('/:partsId', validation.isAuthenticated, partsController.deletePart);

module.exports = router;
