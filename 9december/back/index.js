const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();

app.use(cors('*'))

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(5000, () => {
    console.log('Port - 5000');
})