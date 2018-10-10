const express = require('express');
const router = express.Router();

let products = [
    { price: 200000000, title: "Apple", id: 0 },
    { price: 30000000000, title: "Google", id: 1 },
    { price: 10000000000000, title: "Nokia", id: 2 },

]

router.get('/', (req, res) => {
    res.render('products/index', { title: "Products Page", products })
})

router.get('/:id(\\d)', (req, res) => {
    let id = req.params.id
    res.send(id)
    res.render('products/detail', { title: `product - ${id}`, products })
})

router.get('/add', (req, res) => {
    res.json({ message: "Products Add page" })
})

module.exports = router;