const Router = require('@koa/router')
const router = new Router()

router.prefix('/user')

router.get('/hi', async (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h1>hello world! User.</h1>'
})

router.get('/', async (ctx) => {
    console.log('hello world! Console.')
    ctx.body = '<h1>Page existed.</h1>'
})

module.exports = { router }
