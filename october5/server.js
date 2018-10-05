const express = require('express')
const app = express();
let id = 0
let products = [{ name: "Apple", id: id++, price: 4000 },
{ name: "Samsung", id: id++, price: 3500 }];

app.get('/', (req, res) => {
    res.send('Hello dasd');
})

app.get('users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`user ID - ${userId}`)
})

// query string
app.get('/products', (req, res) => {
    res.send(
        products.map(product => {
            return `<h2 id="product-${product.id}" data-id="${product.id}" 
            onclick="window.location.replace('http://localhost:3000/products/${product.id}')"> ${product.name} </h2>`
        }).join('')
    )
})


app.get('/products/:productId', (req, res)=>{
    const id = req.params.productId;
    const Product = products[id];
    const response = `
    <a href="http://localhost:3000/products/"> Go back </a>
    <h1>${Product.name} </h1>
    <hr>
    <h2>Price $${Product.price}, Id - ${Product.id} </h2>
    `;

    res.send(response)
})


app.listen(3000)