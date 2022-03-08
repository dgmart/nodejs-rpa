class CreateCustomer {
    constructor(repository) {
        this.repository = repository
    }

    execute(customer) {
        this.repository.save(customer)
    }
}

module.exports = CreateCustomer
