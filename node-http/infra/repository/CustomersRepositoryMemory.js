const CustomersRepositoryInterface = require('../../core/repository/CustomersRepositoryInterface')
const database = require('../database/memory')

class CustomersRepositoryMemory extends CustomersRepositoryInterface {
    constructor(logger) {
        super(logger)
        this.tableName = 'customers'
    }

    listAllCustomers() {
        this.logger.debug(database.count(this.tableName) + ' cliente(s) encontrados')
        return database.findAll(this.tableName)
    }

    save(customer) {
        customer = database.insert(this.tableName, customer)
        this.logger.debug('cliente inserido com o ID ' + customer.id)
    }
}

module.exports = CustomersRepositoryMemory
