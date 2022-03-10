class Customer {
    constructor(email, name, id) {
        this.email = email
        this.name = name
        this.id = id ?? null
    }
}

module.exports = Customer
