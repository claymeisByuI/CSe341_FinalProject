const express = require('express');
const router = express.Router();
const partsController = require('../controllers/partsController');

router.post('/parts', partsController.createPart);
router.put('/parts/:partsId', partsController.updatePart);
router.get('/parts', partsController.getAllParts);
router.get('/parts/findByBrand', partsController.getPartsByBrand);
router.get('/parts/findByVehicle', partsController.getPartsByVehicle);
router.get('/parts/findByQuality', partsController.getPartsByQuality);
router.get('/parts/:partsId', partsController.getPartById);
router.delete('/parts/:partsId', partsController.deletePart);

module.exports = router;