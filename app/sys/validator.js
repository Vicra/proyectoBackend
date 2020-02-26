class Validator {
    isPassport(stringToValidate){
        var regularExpression = /^[a-zA-Z][0-9]{8}$/;
        return regularExpression.test(stringToValidate);
    }

    isText(stringToValidate, min = 1, max = 30){
        // var regularExpression = /^[A-Za-z]{1,30}$/;
        var regularExpression = new RegExp(`^[A-Za-z]{${min},${max}}$`);
        return regularExpression.test(stringToValidate);
    }

    isDate(stringToValidate){
        var regularExpression = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return regularExpression.test(stringToValidate);
    }

    isEmailAddress(stringToValidate){
        var regularExpression = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regularExpression.test(stringToValidate);
    }

    isId(stringToValidate){
        var regularExpression = /^[0-9]{13}$/;
        return regularExpression.test(stringToValidate);
    }

    isPhone(stringToValidate){
        var regularExpression = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return regularExpression.test(stringToValidate);
    }
}

module.exports = new Validator();