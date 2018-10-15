let express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send("gamarjoba")
})

app.listen(3000)


// $ npm install cookie-parser --save-dev
// express

// $ npm install express-session --save-dev