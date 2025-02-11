const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');

router.post('/brands', brandController.createBrand);
router.put('/brands/:brandId', brandController.updateBrand);
router.get('/brands', brandController.getAllBrands);
router.get('/brands/findByCountry', brandController.findByCountry);
router.get('/brands/findByName', brandController.findByName);
router.get('/brands/:brandId', brandController.getBrandById);
router.delete('/brands/:brandId', brandController.deleteBrand);

module.exports = router;