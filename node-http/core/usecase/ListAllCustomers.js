class ListAllCustomers {
    constructor(repository) {
        this.repository = repository
    }

    execute() {
        return this.repository.listAllCustomers()
    }
}

module.exports = ListAllCustomers
