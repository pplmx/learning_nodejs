// @ts-ignore
const Router = require('@koa/router')
// @ts-ignore
const router = new Router()

router.prefix('/book')

router.get('/hi', async (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h1>hello world! Book.</h1>'
})

module.exports = { router }
