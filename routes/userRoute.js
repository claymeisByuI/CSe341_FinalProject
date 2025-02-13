const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const validation = require('../utils/oauth');

router.post('/', validation.isAuthenticated, usersController.createUser);
router.post('/createWithArray', validation.isAuthenticated, usersController.createUsersWithArray);
router.post('/createWithList', validation.isAuthenticated, usersController.createUsersWithList);
router.get('/findByType', usersController.findUsersByType);
router.get('/:username', usersController.getUserByUsername);
router.put('/:username', validation.isAuthenticated, usersController.updateUserByUsername);
router.delete('/:username', validation.isAuthenticated, usersController.deleteUserByUsername);

module.exports = router;
