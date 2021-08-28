import Router from '@koa/router'
import { BookController } from '../controller/BookController'

const router = new Router()

router.prefix('/api/v1/books')

router.get('/', BookController.get)

module.exports = { router }
