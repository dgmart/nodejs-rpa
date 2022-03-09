const LoggerInterface = require("./LoggerInterface")

class AbstractLogger extends LoggerInterface {
    debug(message) {
        const date = new Date()
        return this._doLog('DEBUG', date, message)
    }

    error(message) {
        const date = new Date()
        return this._doLog('ERROR', date, message)
    }

    _doLog(level, date, message) {
        throw new Error('Não implementado')
    }
}

module.exports = AbstractLogger
 