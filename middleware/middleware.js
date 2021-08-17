const { LOG } = require('../utils/log')
const compose = require('koa-compose')
const koaBody = require('koa-body')
const { registerRouter } = require('../router/loader')

const logger = async (ctx, next) => {
    const start = Date.now()
    const nsBegin = process.hrtime.bigint()
    await next()
    const ms = Date.now() - start
    const ns = process.hrtime.bigint() - nsBegin
    LOG.info(`[${ctx.method}] ${ctx.url} - ${ms}ms - ${ns}ns`)
}

const bodyParser = koaBody({
    multipart: true,
    // Patch request body to Node's ctx.req
    patchNode: true
})

const pageNotFound = async (ctx) => {
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
}

const loadMiddlewares = compose([
    logger,
    bodyParser,
    pageNotFound,
    registerRouter
])

module.exports = { loadMiddlewares }
