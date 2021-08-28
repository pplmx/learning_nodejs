const Router = require('@koa/router')
const UserController = require('../controller/UserController')
const router = new Router()

router.prefix('/api/v1/users')

router
    .get('/', UserController.get)
    .post('/', UserController.create)

module.exports = { router }
