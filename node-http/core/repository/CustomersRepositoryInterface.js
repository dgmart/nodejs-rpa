class CustomersRepositoryInterface {
    constructor(logger) {
        this.logger = logger
    }

    listAllCustomers() {
        throw new Error('Não implementado')
    }

    save(customer) {
        throw new Error('Não implementado')
    }
}

module.exports = CustomersRepositoryInterface
