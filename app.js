import Koa from 'koa'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { registerRouter } from './router/loader.js'

const app = new Koa()
const server = createServer(app.callback())
const io = new Server(server)

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

server.listen(3000, () => {
    console.log('App is listening on 3000')
})
