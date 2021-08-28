import Router from '@koa/router'
import { UserController } from '../controller/UserController'

const router = new Router()

router.prefix('/api/v1/users')

router
    .get('/', UserController.get)
    .post('/', UserController.create)

module.exports = { router }
