const Router = require('@koa/router')
const { LOG } = require('../utils/log')
const router = new Router()

router.prefix('/book')
router.get('/hi', async (ctx) => {
    LOG.info(`[${ctx.request.method}] ${ctx.request.url}`)
    ctx.type = 'html'
    ctx.body = '<h1>hello world! Book.</h1>'
})

module.exports = { router }
