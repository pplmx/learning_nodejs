import compose from 'koa-compose'
import glob from 'glob'
import { resolve } from 'path'

export const registerRouter = () => {
    const routers = []
    glob.sync(resolve(__dirname, './', '**/*.js'))
        .filter(file => (file.indexOf('loader.js') === -1))
        .forEach(routerFile => {
            const { router } = require(routerFile)
            routers.push(router.routes())
            routers.push(router.allowedMethods())
        })
    return compose(routers)
}
