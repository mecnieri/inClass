let express = require('express')
let app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
 
// app.get('/', (req, res) => {
//     // res.send('dama')
// })

app.listen(3000)