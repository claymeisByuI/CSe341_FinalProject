const router = require('express').Router();
router.use('/parts', require('./partsRoute'));
router.use('/user', require('./userRoute'));
router.use('/vehicle', require('./vehicleRoute'));

module.exports = router;
