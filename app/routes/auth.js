const express = require("express");

const validateToken = express.Router();
validateToken.use((req, res, next) => {
    const token = req.headers['token'];

    if (token) {
        jwt.verify(token, 'key', (err, decoded) => {
            if (err) {
                let response = {
                    success: false,
                    message: 'Invalid Token',
                    code: HTTPCodes.UNAUTHORIZED
                }
                return res.json(response);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        let response = {
            success: false,
            message: 'Token no proveída.',
            code: HTTPCodes.BAD_REQUEST
        }
        res.send(response);
    }
});

module.exports = validateToken;