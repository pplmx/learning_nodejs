export class BookController {
    static async create(ctx) {
        ctx.body = {
            code: 0,
            message: 'Create Success'
        }
    }

    static async delete(ctx) {
        ctx.body = {
            code: 0,
            message: 'Delete Success'
        }
    }

    static async update(ctx) {
        ctx.body = {
            code: 0,
            message: 'Update Success'
        }
    }

    static async get(ctx) {
        ctx.body = {
            code: 0,
            message: 'Get Success'
        }
    }
}
