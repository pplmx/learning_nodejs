import compose from 'koa-compose'
import glob from 'glob'
import { resolve } from 'path'

const __dirname = resolve()

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
