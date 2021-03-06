const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();

app.use(cors('*'))
app.use(express.urlencoded({ extended: true }))   
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})
app.get('/login', (req, res) => {
    res.json({ user: 'Giorgi' })
})

app.listen(5000, () => {
    console.log('Port - 5000');
})