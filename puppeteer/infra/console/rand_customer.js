const puppeteer = require('puppeteer')
const CreateCustomer = require('../../core/usecase/CreateCustomer')
const ListIndexItems = require('../../core/usecase/ListIndexItems')
const PrintCurrentScreen = require('../../core/usecase/PrintCurrentScreen')
const ConsoleLogger = require('../logger/ConsoleLogger')

const main = async () => {
    const logger = new ConsoleLogger()
    logger.debug('iniciando puppeteer')
    const browser = await puppeteer.launch()
    logger.debug('criando nova aba')
    const page = await browser.newPage()
    logger.debug('navegando em projeto cobaia')
    await page.goto('http://localhost:3000')
    await PrintCurrentScreen.execute(page, logger)

    const rn = Math.floor(Math.random() * 1000)
    logger.debug(`num aleatorio: \x1b[33m${rn}\x1b[0m`)
    await CreateCustomer.execute(page, 'Customer ' + rn, 'customer@a' + rn + '.br', logger)

    await PrintCurrentScreen.execute(page, logger)

    await ListIndexItems.execute(page, logger)

    logger.debug('encerrando puppeteer')
    await browser.close()
}

main()
