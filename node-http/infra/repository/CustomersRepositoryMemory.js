const CustomersRepository = require('../../core/repository/CustomersRepository')

class CustomersRepositoryMemory extends CustomersRepository {
    constructor() {
        super()
        this.database = []
    }

    listAllCustomers() {
        return this.database
    }

    save(customer) {
        if (!customer.id) {
            customer.id = this.database.length + 1
        }
        this.database.unshift(customer)
    }
}

module.exports = CustomersRepositoryMemory
