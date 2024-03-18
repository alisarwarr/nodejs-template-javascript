const apiResponse = (params) => {
    const { res, message = "OK", code = 200, err, errors, success = true, data } = params;

    return res.status(code).json({
        success: success,
        statusCode: code,
        message: message,
        errors,
        stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
        data
    });
}


module.exports = {
    apiResponse
};