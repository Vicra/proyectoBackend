
var express = require('express');
var router = express.Router();

const orderController = require('../controllers/orderController')
const { validateToken } = require('../routes/auth')

router.get('/', orderController.getOrders);
router.post('/', orderController.postOrder);

module.exports = router;