const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.post('/', usersController.createUser);
router.post('/createWithArray', usersController.createUsersWithArray);
router.post('/createWithList', usersController.createUsersWithList);
router.get('/login', usersController.loginUser);
router.get('/logout', usersController.logoutUser);
router.get('/findByType', usersController.findUsersByType);
router.get('/:username', usersController.getUserByUsername);
router.put('/:username', usersController.updateUserByUsername);
router.delete('/:username', usersController.deleteUserByUsername);

module.exports = router;
