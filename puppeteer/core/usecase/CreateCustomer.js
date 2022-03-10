class CreateCustomer {
    static async execute(page, name, email, logger) {
        logger.debug('acessando formulario de cadastro')
        await page.goto('http://localhost:3000/add-customer.html')

        // TODO: estudar melhor maneira de identificar o load concluido
        await page.waitForSelector('#customer_name')
        await page.type('#customer_name', name)
        await page.type('#customer_email', email)
        logger.debug('submetendo formulario')
        await page.click('[type="submit"]')

        // TODO: estudar melhor maneira de identificar o load realizado via fetch no index
        await page.waitForNetworkIdle()
    }
}

module.exports = CreateCustomer
