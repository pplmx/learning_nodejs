const Koa = require('koa')
const app = new Koa()
const { createServer } = require('http')
const { registerRouter } = require('./router/loader')
const { listener } = require('./scheduler/scheduler')
const { LOG } = require('./utils/log')

const appServer = createServer(app.callback())
listener(appServer)

// register all routes
app.use(registerRouter())

appServer.listen(3000, () => {
    LOG.info('App is listening on 3000')
})
