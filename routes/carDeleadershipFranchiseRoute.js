const express = require('express');
const router = express.Router();
const carDealershipFranchiseController = require('../controllers/carDeleadershipFranchiseController');
const validation = require('../utils/oauth');

router.post('/', validation.isAuthenticated, carDealershipFranchiseController.createCarDealershipFranchise);
router.put('/:franchiseId', validation.isAuthenticated, carDealershipFranchiseController.updateCarDealershipFranchise);
router.get('/', carDealershipFranchiseController.getCarDealershipFranchises);
router.get('/findByBrand', carDealershipFranchiseController.findCarDealershipFranchisesByBrand);
router.get('/:franchiseId', carDealershipFranchiseController.getCarDealershipFranchiseById);
router.delete(
  '/:aftermarketId',
  validation.isAuthenticated,
  carDealershipFranchiseController.deleteCarDealershipFranchiseById,
);

module.exports = router;
