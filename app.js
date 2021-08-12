import Koa from 'koa'
import http from 'http'
import socket from 'socket.io'
import { registerRouter } from './router/loader.js'

const app = new Koa()
const server = http.createServer(app.callback())
const io = socket(server)

io.on('connection', client => {
    // catch the message from the client
    // the frontend: io.send(message)
    client.on('message', async (message) => {
    })

    // catch the custom info from the client
    // the frontend: io.emit('xxx', message);
    client.on('xxx', async (message) => {
    })

    // listen the close from the client
    client.on('disconnect', async () => {
    })
})

app.use(registerRouter())

server.listen(3000)
