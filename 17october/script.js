const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()
const mCache = require('memory-cache')



// const cookieParser = require('cookie-parser')
// const session = require('express-session')
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug');
app.set('views', 'public/views')
const multerConfig = multer({
    dest: 'public/uploads',
})

// put(key, value, time, timeoutCallback)
// get(key)

mCache.put("super-cache", 'wow', 300, function (key, value) {
    console.log(`Key - ${key}, Value - ${value}`);
})

console.log(`Super Cache = ${mCache.get('super-cache')}`);

setTimeout(() => {
    console.log(`Super Cache 500ms - ${mCache.get('super-cache')}`);

}, 500);

// app.use(cookieParser())
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'upload.html'))
})

// multi-part/form-data
app.post('/', multerConfig.single('image'), (req, res) => {
    const username = req.body.username;
    const imgUrl = path.join('uploads', req.file.filename)
    res.render('index', { imgUrl, username })
})



const cachePage = (duration) => {
    return (req, res, next) => {

        let key = `__cached__${req.originalUrl || req.url}`
        let pageBody = mCache.get(key);
        if (pageBody) {
            res.sendFile(pageBody)
        }
        else {
            res.sendResponse = res.send;
            res.send = (body) => {
                mCache.put(key, body, duration * 1000)
                res.sendResponse(body)
            }
            next();
        }
    }
}

app.get('/cache', cachePage(4), (req, res) => {
    setTimeout(() => {
        const date = new Date()
        let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        res.render('cached', { time })

    }, 3000);
})

app.listen(PORT, () => {
    console.log(`Started listening Port - ${PORT}`);
})