import express from 'express'
import * as fs from 'fs'
import * as path from 'path'

const app = express()
// Due to using ESM, __dirname cannot be used directly
// FYI. https://www.cnblogs.com/orange-code/p/14876571.html
const __dirname = path.resolve()

app.get('/listUsers', function (req, res) {
    fs.readFile(path.join(__dirname, '/', 'users.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(`Some errors occurred.\n${err.stack}`)
        }
        console.log(data)
        res.end(data)
    })
})

// for adding user
const user = {
    user4: {
        name: 'mohit',
        password: 'password4',
        profession: 'teacher',
        id: 4
    }
}

app.get('/addUser', function (req, res) {
    // fetch data from the file
    fs.readFile(path.join(__dirname, '/', 'users.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(`Some errors occurred.\n${err.stack}`)
        }
        data = JSON.parse(data)
        data.user4 = user.user4
        console.log(data)
        res.end(JSON.stringify(data))
    })
})

app.get('/:id', function (req, res) {
    // fetch data from the file
    fs.readFile(path.join(__dirname, '/', 'users.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(`Some errors occurred.\n${err.stack}`)
        }
        data = JSON.parse(data)
        const user = data['user' + req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

const id = 2

app.get('/deleteUser', function (req, res) {
    // First read existing users.
    // eslint-disable-next-line node/handle-callback-err
    fs.readFile(path.join(__dirname, '/', 'users.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(`Some errors occurred.\n${err.stack}`)
        }
        data = JSON.parse(data)
        delete data['user' + id]

        console.log(data)
        res.end(JSON.stringify(data))
    })
})

const server = app.listen(8081, () => {
    const host = server.address().address
    const port = server.address().port

    console.log('Access >>> http://%s:%s', host, port)
})
