const http = require('http')

const memoryDb = [
    { id: 2, name: 'Customer B', email: 'custom@r.b' },
    { id: 1, name: 'Customer A', email: 'custom@r.a' },
];

const server = http.createServer((rq, rp) => {
    console.log(['rq ' + rq.url, 'mtd ' + rq.method])
    rp.setHeader('Access-Control-Allow-Origin', 'http://localhost')
    rp.setHeader('Content-Type', 'application/json')
    switch (rq.url) {
        case '/customers':
            if ('GET' == rq.method) {
                rp.end(JSON.stringify(memoryDb))
            } else if ('POST' == rq.method) {
                var body = ''
                rq.on('data', data => {
                    body += data
                })
                rq.on('end', () => {
                    const customer = JSON.parse(body)
                    customer.id = memoryDb.length + 1
                    memoryDb.unshift(customer)
                    rp.end(JSON.stringify({ status: 'ok' }))
                })
            }
            break
        default:
            rp.writeHead(404)
            rp.end(JSON.stringify({ status: 'error', message: 'page not found' }))
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('server iniciado')
})
