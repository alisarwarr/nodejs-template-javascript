const { CustomError } = require("./CustomError");


class BadRequestError extends CustomError {
    constructor(params) {
        const { code, message, logging, errors = [] } = params || {};

        if (errors.length > 0) {
            message = errors[0].msg;
        }
        else {
            errors.push({
                msg: message
            });
        }

        super(message || "Bad request");
        this._code = code || BadRequestError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};
        this._errors = errors || [];

        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    get errors() {
        return this._errors;
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}


BadRequestError._statusCode = 400;
module.exports = BadRequestError;