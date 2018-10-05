const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send('Hello');
})

app.get('users/:userId', (req, res) => {
    
})

app.listen(3000)