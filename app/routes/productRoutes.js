var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

router.get('/', productController.getProducts);
// router.get('/:id', productController.getProductById);

module.exports = router;