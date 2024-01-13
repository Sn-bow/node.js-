require('dotenv').config()

const express = require('express')
const cors = require('cors')
const appDataSource = require('./models/dataSource')
const router = require('./routes/router')
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
const port = 3000

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' })
})

const start = async () => {
    await appDataSource.initialize()
        .then(() => {
            console.log("DB 연결 초기화")
        })
        .catch((error) => {
            console.error(error)
            console.log(error)
        })
    try {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        console.error(err)
        console.log("이부분에서 에러나면 웹 서버가 안켜진거임")
        console.log(err)
    }
}

start();


