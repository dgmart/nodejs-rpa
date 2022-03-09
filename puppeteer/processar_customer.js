const puppeteer = require('puppeteer')
const ConsoleLogger = require('./infra/logger/ConsoleLogger')

const main = async () => {
    const logger = new ConsoleLogger()
    logger.debug('iniciando puppeteer')
    const browser = await puppeteer.launch()
    logger.debug('criando nova aba')
    const page = await browser.newPage()
    logger.debug('navegando em projeto cobaia')
    await page.goto('http://localhost:3000')

    logger.debug('acessando formulario de cadastro')
    const anchorForm = await page.$('a')
    const clickresult = await anchorForm.click()

    logger.debug('preenchendo nome e email aleatórios')
    await page.type('#customer_name', 'Customer B')

    logger.debug('salvando screenshot da tela atual')
    const screenshotPath = './screenshots' + '/web_index_' + Math.floor(Math.random() * 11000 - 1000) + '.png'
    await page.screenshot({ path: screenshotPath })
    logger.debug('screenshot salva em ' + screenshotPath)

    logger.debug('encerrando puppeteer')
    await browser.close()
}

try {
    main()
} catch (e) {
    logger.error(e.message)
}
