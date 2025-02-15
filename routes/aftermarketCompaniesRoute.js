const express = require('express');
const router = express.Router();
const aftermarketCompaniesController = require('../controllers/aftermarketCompaniesController');
const validation = require('../utils/oauth');

router.post('/', validation.isAuthenticated, aftermarketCompaniesController.createAftermarketCompany);
router.put('/:aftermarketId', validation.isAuthenticated, aftermarketCompaniesController.updateAftermarketCompany);
router.get('/', aftermarketCompaniesController.getAftermarketCompanies);
router.get('/findByBrand', aftermarketCompaniesController.findAftermarketCompaniesByBrand);
router.get('/findByVehicle', aftermarketCompaniesController.findAftermarketCompaniesByVehicle);
router.get('/:aftermarketId', aftermarketCompaniesController.getAftermarketCompanyById);
router.delete(
  '/:aftermarketId',
  validation.isAuthenticated,
  aftermarketCompaniesController.deleteAftermarketCompanyById,
);

module.exports = router;
