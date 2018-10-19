let express = require('express')
let app = express()
let products = [{
    id: 0,
    name: "chair",
    price: 50
}, {
    id: 1,
    name: "table",
    price: 150
}, {
    id: 2,
    name: "TV",
    price: 200
}]

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/products', (req, res) => {
    let names = []
    for (n in products) {
        names.push(products[n].name)
    }
    res.send(names.join(', '))
})

app.get('/product/id/:id', (req, res) => {
    res.send(products[req.params.id])
})

app.get('/product', (req, res) => {
    let found = products.find((el) => el.name == req.query.name);
    res.send(found)
})
app.post('/products/add/:id/:name/:price', (req, res) => {
    products.push({
        id: req.params.id,
        name: req.params.name,
        price: req.params.price
    })
    console.log(products);
    res.send(products)
})

app.get('/products/add/:id/:name/:price', (req, res) => {
    res.send(products)
})

app.delete('/products/delete/:id', (req, res) => {
    let index = products.findIndex((e) => e == req.params.id)
    products.splice(index, 1);
        console.log(products);
})
app.listen(3000)