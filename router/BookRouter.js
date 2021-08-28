const Router = require('@koa/router')
const BookController = require('../controller/BookController')
const router = new Router()

router.prefix('/api/v1/books')

router.get('/', BookController.get)

module.exports = { router }
