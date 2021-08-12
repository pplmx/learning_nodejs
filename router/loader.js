const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

export const registerRouter = () => {
    const routers = []
    glob.sync(resolve(__dirname, './', '**/*.js'))
        .filter(value => (value.indexOf('loader.js') === -1))
        // eslint-disable-next-line array-callback-return
        .map(router => {
            routers.push(require(router).routes())
            routers.push(require(router).allowedMethods())
        })
    return compose(routers)
}
