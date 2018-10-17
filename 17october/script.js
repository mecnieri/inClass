const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()

const cookiePerser = require('cookie-parser')
const session = require('express-session')
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');
app.set('views', './public/views')
const multerConfig = multer({
    dest: 'public/uploads',

})

// app.use(cookiePerser())
app.get('/', (req, res) => {

})

// multi-part/form-data
app.post('/', multerConfig.single('image'), (req, res) => {
    const imgUrl = path.join('uploads', req.image.filename)
    res.render('index', { imgUrl })
})

app.listen(PORT, () => {
    console.log(`Started listening Port - ${PORT}`);
})