const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send('Hello');
})

app.get('users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`user ID - ${userId}`)
})

app.listen(3000)