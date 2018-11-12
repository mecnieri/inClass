const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: "page title", message: "welcome messagge !",
        numbers: [1, 2, 3, 4, 5, 6, 1, 23,]
    })
})

app.listen(PORT, () => {
    console.log(`server on port = ${PORT}`)
})