// const http = require('http');
const express = require('express');
const path = require('path');
const debug = require('debug')('app')
const chalk = require('chalk');
const morgan = require('morgan');

let app = express();
let port = 3000;

app.use( morgan('tiny') )

app.use( express.static('public') );
app.use( express.static('src/views') );

app.use( '/css' , express.static( path.join(__dirname, '/node_modules/bootstrap/dist/css') ) );
app.use( '/js' , express.static( path.join(__dirname, '/node_modules/bootstrap/dist/js') ) );
app.use( '/js' , express.static( path.join(__dirname, '/node_modules/jquery/dist') ) );


app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendfile( path.join(__dirname, 'src/views/', 'index.html') );
})

app.get('/products', (req, res) => {
    // res.send('Hello Products');
    res.sendfile( path.join(__dirname, 'src/views/', 'products.html') );
})

app.listen(port, (err) => {
    // console.log(`listening on port - ${port}`);
    debug(`listening on port - ${ chalk.green(port) }`);
})

// http.createServer(  (req, res) => {
//     res.write("Hello NodeJs Server.");
//     res.end();
// }).listen(8000);
 