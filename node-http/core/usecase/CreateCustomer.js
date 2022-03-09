class CreateCustomer {
    constructor(repository, logger) {
        this.repository = repository
        this.logger = logger
    }

    execute(customer) {
        this.logger.debug('inserindo cliente')
        this.repository.save(customer)
    }
}

module.exports = CreateCustomer
