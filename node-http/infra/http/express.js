const express = require('express')
const CustomerAdapter = require('../../adapter/CustomerAdapter')
const CreateCustomer = require('../../core/usecase/CreateCustomer')
const ListAllCustomers = require('../../core/usecase/ListAllCustomers')
const ConsoleLogger = require('../logger/consoleLogger')
const CustomersRepositoryMemory = require('../repository/CustomersRepositoryMemory')
const app = express()

const logger = new ConsoleLogger()
const customersRepository = new CustomersRepositoryMemory(logger)
const listall = new ListAllCustomers(customersRepository, logger)
const create = new CreateCustomer(customersRepository, logger)

const corsPolice = (rq, rp, next) => {
    rp.append('Access-Control-Allow-Origin', '*')
    if ('OPTIONS' === rq.method) {
        rp.append('Access-Control-Allow-Methods', '*')
        rp.append('Access-Control-Allow-Headers', '*')
    }
    next()
}
app.use(corsPolice)
app.use(express.json())

app.get('/customers', (rq, rp) => {
    rp.json(listall.execute())
})

app.post('/customers', (rq, rp) => {
    const customer = CustomerAdapter.create(rq.body.email, rq.body.name)
    create.execute(customer)
    rp.json({ status: 'ok' })
})

app.listen(3000, () => {
    logger.debug('servidor iniciado na porta 3000')
})
