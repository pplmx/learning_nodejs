import Router from 'koa-router'

const userRouter = new Router()

userRouter.prefix('user')

userRouter.get('/', async (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h1>hello world!</h1>'
})

export { userRouter }
