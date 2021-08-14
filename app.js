const Koa = require('koa')
const app = new Koa()
const { createServer } = require('http')
const { Server } = require('socket.io')
const { registerRouter } = require('./router/loader')

const server = createServer(app.callback())
const io = new Server(server)

io.on('connection', socket => {
    console.log(`${socket.id} has connected. Address: ${socket.handshake.address}`)
    socket.emit('send', `hello, ${socket.handshake.address}`)

    // catch the message from the client
    // the frontend: io.send(message)
    socket.on('message', async (message) => {
    })

    // catch the custom info from the client
    // the frontend: io.emit('xxx', message);
    socket.on('xxx', async (message) => {
    })

    // listen the close from the client
    socket.on('disconnect', async () => {
        console.log('Disconnection with <<<<<<<<<')
    })
})

// register all routes
app.use(registerRouter())

server.listen(3000, () => {
    console.log('App is listening on 3000')
})
