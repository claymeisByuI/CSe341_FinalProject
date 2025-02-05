const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.post('/user', usersController.createUser);
router.post('/user/createWithArray', usersController.createUsersWithArray);
router.post('/user/createWithList', usersController.createUsersWithList);
router.get('/user/login', usersController.loginUser);
router.get('/user/logout', usersController.logoutUser);
router.get('/users/findByType', usersController.findUsersByType);
router.get('/user/:username', usersController.getUserByUsername);
router.put('/user/:username', usersController.updateUserByUsername);
router.delete('/user/:username', usersController.deleteUserByUsername);


module.exports = router;