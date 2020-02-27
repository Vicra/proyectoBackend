const HTTPCodes = require('../sys/httpCodes')
const userService = require('../services/userService')
const utils = require('../sys/utils');

class UserController {

    async createUser(req, res) {
        let response = {
            success: true,
            message: 'success',
            code: HTTPCodes.OK
        }
        try {
            let user = req.body;
            user.salt = utils.getuuid();
            user.encryptedPassword = utils.encrypt(user.password, user.salt);
            const id = await userService.createUser(user);
            response.data = {
                id: id
            };
            res.status(response.code).send(response);
        } catch (error) {
            response.success = false;
            response.message = "Exception: " + error;
            response.code = HTTPCodes.INTERNAL_SERVER_ERROR;
            res.status(response.code).send(response);
        }
    }

    async login(req, res) {
        let user = req.body;
        let response = {
            success: true,
            message: 'success',
            code: HTTPCodes.OK
        }

        const dbUser = await userService.getUserByUsername(user.user);
        console.log('test');
        console.log(dbUser);
        console.log('test2');

        const encrypted = utils.encrypt(user.password, dbUser[0].salt);
        if (encrypted == dbUser[0].encrypted_password) {
            console.log(true);
            res.send(response);
        }
        else {
            console.log(true);
            response.code = HTTPCodes.UNAUTHORIZED;
            response.message = 'Invalid credentials';
            response.success = false;
            res.status(response.code).send(response);
        }
    }

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