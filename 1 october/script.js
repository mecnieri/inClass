const http = require('http')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Express ... nodemon Reload')
})

    .listen(3000)