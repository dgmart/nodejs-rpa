class LoggerInterface {
    debug(message) {
        throw new Error('Não implementado')
    }

    formatter(message) {
        const date = new Date()
        return `[${date.toISOString()}] ${message}`
    }
}

module.exports = LoggerInterface
