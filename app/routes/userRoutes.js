
var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

router.post('/twoway', userController.createUser);
router.post('/login', userController.login);

module.exports = router;