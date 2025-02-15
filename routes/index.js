const router = require('express').Router();
router.use('/parts', require('./partsRoute'));
router.use('/user', require('./userRoute'));
router.use('/vehicle', require('./vehicleRoute'));
router.use('/brand', require('./brandRoute'));
router.use('/aftermarketComp', require('./aftermarketCompaniesRoute'));
router.use('/', require('./authenticate.routes'));

module.exports = router;
