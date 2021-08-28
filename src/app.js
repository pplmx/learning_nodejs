import Koa from 'koa'
import { createServer } from 'http'
import { registerRouter } from './router/loader'
import listener from './scheduler/scheduler'
import { LOG } from './utils/log'

// body parser
import koaBody from 'koa-body'

const app = new Koa()

// logger
app.use(async (ctx, next) => {
    const start = Date.now()
    const nsBegin = process.hrtime.bigint()
    await next()
    const ms = Date.now() - start
    const ns = process.hrtime.bigint() - nsBegin
    LOG.info(`[${ctx.method}] ${ctx.status} ${ctx.url} - ${ms}ms - ${ns}ns`)
})
app.use(koaBody({
    multipart: true,
    // Patch request body to Node's ctx.req
    patchNode: true
}))

const appServer = createServer(app.callback())
listener(appServer)

// register all routes
app.use(registerRouter())

app.use(async (ctx) => {
    // we need to explicitly set 404 here
    // so that koa doesn't assign 200 on body=
    ctx.status = 404

    switch (ctx.accepts('html', 'json')) {
    case 'html':
        ctx.type = 'html'
        ctx.body = '<p>Page Not Found</p>'
        break
    case 'json':
        ctx.body = {
            message: 'Page Not Found'
        }
        break
    default:
        ctx.type = 'text'
        ctx.body = 'Page Not Found'
    }
})

appServer.listen(3000, () => {
    LOG.info('App is listening on 3000')
})
