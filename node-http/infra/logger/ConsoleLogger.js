const LoggerInterface = require("../../core/logger/LoggerInterface");

class ConsoleLogger extends LoggerInterface{
    debug(message){
        console.log(this.formatter(message));
    }
}

module.exports = ConsoleLogger
