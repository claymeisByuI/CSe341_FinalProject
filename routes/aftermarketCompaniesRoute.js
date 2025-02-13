const express = require('express');
const router = express.Router();
const aftermarketCompaniesController = require('../controllers/aftermarketCompaniesController');

router.post('/', aftermarketCompaniesController.createAftermarketCompany);
router.put('/:aftermarketId', aftermarketCompaniesController.updateAftermarketCompany);
router.get('/', aftermarketCompaniesController.getAftermarketCompanies);
router.get('/findByBrand', aftermarketCompaniesController.findAftermarketCompaniesByBrand);
router.get('/findByVehicle', aftermarketCompaniesController.findAftermarketCompaniesByVehicle);
router.get('/:aftermarketId', aftermarketCompaniesController.getAftermarketCompanyById);
router.delete('/:aftermarketId', aftermarketCompaniesController.deleteAftermarketCompanyById);

module.exports = router;