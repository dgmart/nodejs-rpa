class ListAllCustomers {
    constructor(repository, logger) {
        this.repository = repository
        this.logger = logger
    }

    execute() {
        this.logger.debug('listando clientes do repositório')
        return this.repository.listAllCustomers()
    }
}

module.exports = ListAllCustomers
