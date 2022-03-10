const express = require('express')

const logdebug = message => {
    const date = new Date()
    console.log(`[${date.toISOString()}] DEBUG ${message}`)
}
const app = express()

const staticFilesLogger = (rq, rp, nx) => {
    logdebug(rq.url)
    nx()
}
app.use(staticFilesLogger)
app.use(express.static(__dirname))
app.listen(3000, () => {
    logdebug('servidor estatico iniciado na porta 3000')
})
