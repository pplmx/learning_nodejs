const { Server } = require('socket.io')
const { LOG } = require('../utils/log')

function listener(appServer) {
    const io = new Server(appServer)
    io.on('connection', socket => {
        LOG.info(`Client: ${socket.handshake.address}. Socket ${socket.id} was created.`)
        socket.emit('connected')
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
            LOG.info(`Client: ${socket.handshake.address}. Socket ${socket.id} was destroyed.`)
        })
    })
}

module.exports = { listener }
