const request = require('request');
const gzip = require('zlib')
const fs = require('fs');
let req = request('http://techub.ge');


// readableStream.pipe(writableStream);

// req.pipe(process.stdout);

// req.pipe(fs.createWriteStream('techub.html'));
req.pipe(gzip.createGzip()).pipe(fs.createWriteStream('techub.html.gz'));