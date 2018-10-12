const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('zdarova bratci'));

app.listen(port);



// npm init 


