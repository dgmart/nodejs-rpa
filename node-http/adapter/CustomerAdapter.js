const Customer = require("../core/entity/Customer");

class CustomerAdapter {
    static create(email, name, id) {
        return new Customer(email, name, id)
    }
}

module.exports = CustomerAdapter
