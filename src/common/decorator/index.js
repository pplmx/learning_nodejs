/**
 * 请求方法
 */
export const RequestMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch'
}

/**
 * 定义注册的路由数组
 */
export const controllers = []

/**
 * 给controller添加装饰
 * @param {*} value
 */
export function RestController(value = '') {
    return function(target) {
        // 给controller类添加路由前缀
        target.prefix = value
    }
}

/**
 * 给controller类的方法添加装饰
 * value 可选 url
 * method 请求方法
 * middleware 中间件
 */
export function RequestMapping(value = '', method = '', middleware = []) {
    return function(target, name, descriptor) {
        let path
        // 判断有没有定义url
        if (!value) {
            // 取方法名作为路径
            path = `/${name}/`
        } else {
            // 自己定义的url
            path = `/${value}/`
        }
        // 创建router需要的数据 url，method，middleware（可以没有）,最终执行的方法，装饰器队对象的构造函数
        const item = {
            url: path,
            method: method,
            middleware: middleware,
            handler: target[name],
            constructor: target.constructor
        }
        controllers.push(item)
    }
}

export function GetMapping(value = '', middleware = []) {
    return RequestMapping(value, RequestMethod.GET, middleware)
}

export function PostMapping(value = '', middleware = []) {
    return RequestMapping(value, RequestMethod.POST, middleware)
}

export function PutMapping(value = '', middleware = []) {
    return RequestMapping(value, RequestMethod.PUT, middleware)
}

export function DeleteMapping(value = '', middleware = []) {
    return RequestMapping(value, RequestMethod.DELETE, middleware)
}

export function PatchMapping(value = '', middleware = []) {
    return RequestMapping(value, RequestMethod.PATCH, middleware)
}
