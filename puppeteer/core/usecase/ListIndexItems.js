class ListIndexItems {
    static async execute(page, logger) {
        await page.goto('http://localhost:3000')

        // TODO: estudar melhor maneira de identificar o load realizado via fetch no index
        await page.waitForNetworkIdle()

        const customers = await page.evaluate(() => {
            const tdSeq = ['id', 'name', 'email']
            const list = []
            document.querySelectorAll('tbody tr').forEach(tr => {
                const customer = {}
                tr.querySelectorAll('td').forEach((td, i) => {
                    customer[tdSeq[i]] = td.innerText
                })
                list.push(customer)
            })
            return list
        })

        logger.debug('lista de clientes encontrados na pagina inicial')
        console.log('id | name | email')
        customers.forEach(customer => {
            console.log(`${customer.id} | ${customer.name} | ${customer.email}`)
        })
    }
}

module.exports = ListIndexItems
