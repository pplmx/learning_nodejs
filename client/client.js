const { io } = require('socket.io-client')
const socket = io('http://127.0.0.1:3000')

socket.on('send', data => {
    console.log(data)
})

socket.emit('message', {
    id: '1',
    txt: 'hello'
})
