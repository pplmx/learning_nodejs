import Router from 'koa-router'

const bookRouter = new Router()

bookRouter.prefix('book')

bookRouter.get('/', async (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h1>hello world!</h1>'
})

export { bookRouter }
