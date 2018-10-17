const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world dzma!");
});
app.get('/products', (req, res) => {
    res.send("Got a GET request at /products");
});
app.post('/products', (req, res) => {
    res.send("Got a POST request at /products");
});
app.put('/products', (req, res) => {
    res.send("Got a PUT request at /products");
});
app.delete('/products', (req, res) => {
    es.send("Got a DELETE request at /products");
});
app.get('/a/', (req, res) => {
    res.send('/a/')
});

app.get('/users/:userId', (req, res) => {
    res.send("userId: " + req.params.userId);
});

app.listen(3000);
