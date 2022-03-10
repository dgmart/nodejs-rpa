const path = require('path')

class PrintCurrentScreen {
    static async execute(page, logger) {
        logger.debug('salvando screenshot da tela atual')
        const screenshotPath = path.resolve(__dirname + '/../../screenshots' + '/web_screen_' + Math.floor(Math.random() * 1000) + '.png')
        await page.screenshot({ path: screenshotPath })
        logger.debug(`screenshot salva em \x1b[36m${screenshotPath}\x1b[0m`)
    }
}

module.exports = PrintCurrentScreen
