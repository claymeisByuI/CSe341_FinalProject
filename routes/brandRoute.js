const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const validation = require('../utils/oauth');

router.post('/brands', validation.isAuthenticated, brandController.createBrand);
router.put('/brands/:brandId', validation.isAuthenticated, brandController.updateBrand);
router.get('/brands', brandController.getAllBrands);
router.get('/brands/findByCountry', brandController.findByCountry);
router.get('/brands/findByName', brandController.findByName);
router.get('/brands/:brandId', brandController.getBrandById);
router.delete('/brands/:brandId', validation.isAuthenticated, brandController.deleteBrand);

module.exports = router;
