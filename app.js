const Koa = require('koa')
const app = new Koa()
const { createServer } = require('http')
const { registerRouter } = require('./router/loader')
const { listener } = require('./scheduler/scheduler')
const { LOG } = require('./utils/log')

// logger
app.use(async (ctx, next) => {
    const start = Date.now()
    const nsBegin = process.hrtime.bigint()
    await next()
    const ms = Date.now() - start
    const ns = process.hrtime.bigint() - nsBegin
    LOG.info(`[${ctx.method}] ${ctx.url} - ${ms}ms - ${ns}ns`)
})

// body parser
const koaBody = require('koa-body')
app.use(koaBody({
    multipart: true,
    // Patch request body to Node's ctx.req
    patchNode: true
}))

const appServer = createServer(app.callback())
listener(appServer)

// register all routes
app.use(registerRouter())

appServer.listen(3000, () => {
    LOG.info('App is listening on 3000')
})
