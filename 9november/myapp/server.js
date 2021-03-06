const fs = require('fs')
const path = require('path')
const express = require('express')
const data = require('./data/data.json')
const app = express()
let id = 0;


const PORT = 3000;
// app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
})

app.get('/api/todos', (req, res) => {
    res.send(data)
})

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (err, html) => {
        if(err) throw err;
        res.setHeader('Content-Type', 'text/html')
        res.send(html)
    })
})


app.listen(PORT)


