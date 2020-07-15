class WeatherException extends Error {
    constructor(message, statusCode = 400) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = "WeatherException";
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = WeatherException;
