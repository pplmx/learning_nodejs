import { createServer } from 'http'
import { LOG } from './log.js'

createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World\n')
}).listen(8888)

LOG.info('Server running at http://127.0.0.1:8888/')
