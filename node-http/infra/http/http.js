const http = require('http')
const CustomersRepository = require('../repository/CustomersRepositoryMemory')
const CreateCustomerAction = require('../../core/usecase/CreateCustomer')
const ListAllCustomersAction = require('../../core/usecase/ListAllCustomers')
const CustomerAdapter = require('../../adapter/CustomerAdapter')
const ConsoleLogger = require('../logger/consoleLogger')

const logger = new ConsoleLogger()
const customersRepository = new CustomersRepository(logger)
const listall = new ListAllCustomersAction(customersRepository, logger)
const create = new CreateCustomerAction(customersRepository, logger)

const server = http.createServer((rq, rp) => {
    rp.setHeader('Access-Control-Allow-Origin', '*')
    if ('OPTIONS' == rq.method) {
        rp.setHeader('Access-Control-Allow-Methods', '*')
        rp.setHeader('Access-Control-Allow-Headers', '*')
        rp.end()
        return
    }
    rp.setHeader('Content-Type', 'application/json')
    switch (rq.url) {
        case '/customers':
            if ('GET' == rq.method) {
                rp.end(JSON.stringify(listall.execute()))
            } else if ('POST' == rq.method) {
                var body = ''
                rq.on('data', data => {
                    body += data
                })
                rq.on('end', () => {
                    const rawCustomer = JSON.parse(body)
                    const customer = CustomerAdapter.create(rawCustomer.email, rawCustomer.name)
                    create.execute(customer)
                    rp.end(JSON.stringify({ status: 'ok' }))
                })
            }
            break
        default:
            rp.writeHead(404)
            rp.end(JSON.stringify({ status: 'error', message: 'page not found' }))
    }
})

server.listen(3001, '127.0.0.1', () => {
    logger.debug('servidor iniciado na porta 3001')
})
