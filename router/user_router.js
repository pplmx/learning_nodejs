const Router = require('@koa/router')

const router = new Router()

router.prefix('user')

router.get('/', async (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h1>hello world! User.</h1>'
})

module.exports = { router }
