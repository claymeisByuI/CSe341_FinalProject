const express = require('express');
const router = express.Router();
const partsController = require('../controllers/partsController');

router.post('/', partsController.createPart);
router.put('/:partsId', partsController.updatePart);
router.get('/', partsController.getAllParts);
router.get('/findByBrand', partsController.getPartsByBrand);
router.get('/findByVehicle', partsController.getPartsByVehicle);
router.get('/findByQuality', partsController.getPartsByQuality);
router.get('/:partsId', partsController.getPartById);
router.delete('/:partsId', partsController.deletePart);

module.exports = router;
