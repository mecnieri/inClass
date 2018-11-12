const express = require('express');
const App = express();
const path = require('path');
const productsRoutes = require('./src/routes/productRoutes')
const PORT = 3000;
let productsDB = []
App.set('view engine', 'pug');
App.set('views', './src/views');
App.use(express.static(path.join(__dirname, '/public')));
App.use(express.urlencoded({extended:true}));
App.use('/products', productsRoutes)
App.get('/', (req, res) =>{
    res.render('index', {title: "Demo Title", added:false, productsDB})
})
App.post('/', (req, res) =>{
    const {product_name, product_price, product_id} = req.body;
    productsDB.push({product_id, product_name, product_price});
    res.render('index', {title:"Demo Title", added:true, productsDB })
})
App.listen(PORT, () =>{
    console.log('Listen to the port ' + PORT)
})
