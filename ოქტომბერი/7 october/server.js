const express = require('express');
const app = express()
const path = require('path')
const PORT = 3000;
let id = 0;
let products = [{ name: "Apple", id: id++, price: 4000 },
{ name: "Samsung", id: id++, price: 3500 }];

// app.get('/', (req, res) => {
//     // res.send({ text: "Hello text" })
//     // res.sendFile(path.join(__dirname, '/public', 'index.html'))
//     res.sendFile('index.html', { root: path.join(__dirname, '/public') })
// })

app.get('/admin', (req, res) => {
    res.redirect('/')
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    let product = products.find(p => p.id == id)
    if (!product) {
        // return res.status(404).send("No product found")
        return res.sendStatus(404)
    }
    else {
        res.json(product)
    }
})

app.get('/products/:name', (req, res) => {
    const name = req.params.name;
    let product = products.find(p => p.name == name)
    if (!product) {
        // return res.status(404).send("No product found")
        return res.sendStatus(404)
    }
    else {
        res.json(product)
    }
})
// app.get('/', (req, res) => {
//     res.send('Hello dasd');
// })

let myMid = function (req, res, next) {
    console.log(`${req.ip}, ${req.hostname} Middleware function`);
    next()
}
let timeLog = function (req, res, next) {
    let time = new Date();
    req.requestTime = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
    next()
}


app.use(myMid);
app.use(timeLog); 
app.use(express.static(path.join(__dirname, '/public',)))

app.get('/', (req, res) => {
    console.log(`Index.html - ${req.requestTime}`);
    res.sendfile(`Index.html`)
})

app.listen(PORT, () => {
    console.log(`server on port = ${PORT}`)
})