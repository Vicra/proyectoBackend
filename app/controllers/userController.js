const HTTPCodes = require('../sys/httpCodes')
const userService = require('../services/userService')

class UserController {

    async getUsers(_req, res) {
        let response = {
            success: true,
            message: 'success',
            code: HTTPCodes.OK
        }
        try {
            const users = userService.getUsers();
            console.log('users');
            console.log(users);
            response.data = users;
        } catch (error) {
            response.success = false;
            response.message = error.message;
            response.code = 503;
        }
        res.send(response);
    }

    getUserById(req, res) {
        const idParam = req.params.id;

        let response = {
            success: true,
            message: 'success',
            code: HTTPCodes.OK
        }
        if (isNaN(idParam)) {
            response.success = false;
            response.message = 'Bad Request';
            response.code = 400;
            res.status(response.code).send(response);
        }

        try {
            const user = userService.getUserById(idParam);
            response.data = user;
        } catch (error) {
            response.success = false;
            response.message = error.message;
            response.code = 503;
            res.status(response.code).send(response);
        }
        res.status(response.code).send(response);
    }
}

module.exports = new UserController();