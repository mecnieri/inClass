let http = require('http')

http.createServer(function (req, res) {
    let hh = new Date().getHours()
    let mm = new Date().getMinutes()
    let ss = new Date().getSeconds()
    res.write(`${hh}:${mm}:${ss}`);       // write a response to the client
    res.end();                       // end the response
}).listen(9000);                     // the server listens on port 8080
