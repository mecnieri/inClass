const express = require('express');
const router = express.Router();

let products = [
    { price: 1000000000, title: "Apple" },
    { price: 10000000, title: "Google" },
    { price: 1000000, title: "Nokia" },

]

router.get('/', (req, res) => {
    res.render('products/index', { title: "Products Page", products })
})
router.get('/add', (req, res) => {
    res.json({ message: "Products Add page" })
})

module.exports = router;