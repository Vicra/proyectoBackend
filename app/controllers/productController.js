const HTTPCodes = require('../sys/httpCodes')
const productService = require('../services/productService')

class ProductController {
    async getProducts(req, res) {
        let response = {
            success: true,
            message: 'success',
            code: HTTPCodes.OK
        }

        try {
            response.data = await productService.getProducts();
            res.status(response.code).send(response);
        } catch (error) {
            response.success = false;
            response.message = "database exception " + error;
            response.code = HTTPCodes.INTERNAL_SERVER_ERROR;
            res.status(response.code).send(response);
        }
    }
}

module.exports = new ProductController();