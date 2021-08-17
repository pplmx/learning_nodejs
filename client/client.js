const { io } = require('socket.io-client')
const { LOG } = require('../utils/log')
const socket = io('http://127.0.0.1:3000')

socket.on('connected', () => {
    LOG.info('Connection is built.')
})

socket.on('send', data => {
    LOG.info(data)
})

socket.emit('message', {
    id: '1',
    txt: 'hello'
})
