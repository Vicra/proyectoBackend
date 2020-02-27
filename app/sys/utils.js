var crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

class Utils {
    constructor() {
        this.algorithm = 'aes256';
    }

    encrypt(valueToEncrypt, key) {
        var cipher = crypto.createCipher(this.algorithm, key);
        var encrypted = cipher.update(valueToEncrypt, 'utf8', 'hex')
            + cipher.final('hex');
        return encrypted;
    }

    getuuid() {
        return uuidv4();
    }
}

module.exports = new Utils();