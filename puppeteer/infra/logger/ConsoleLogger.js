const AbstractLogger = require("../../core/logger/AbstractLogger");

class ConsoleLogger extends AbstractLogger {
    constructor() {
        super()
    }

    _doLog(level, date, message) {
        console.log(
            `[${date.toISOString()}] ${level} ${message}`
        );
    }
}

module.exports = ConsoleLogger
