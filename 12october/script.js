const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const port = 3000;

app.get('/'), (req, res) => {
    res.render('index', { title: "Demo title" })

}
app.use(cookieParser("cipher"));
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.cookie("username", "Davit Giorgobiani")
    res.cookie("cart", { item: [1, 2, 3] });
    res.cookie("forever", "Forever Value", { maxAge: 10000 })
    // res.cookie('color', `${input.value}`)
    res.cookie('signed', "ragac texti", { signed: true })
    console.log(req.query.favcolor);
    console.log(res.backgroundColor)
    res.sendFile(__dirname + '/index.html');
});

app.get('/cookies', (req, res) => {
    res.write(`<h1> Usermane - ${req.cookies.username}  </h1>`);
    res.write(`<h1> forever - ${req.cookies.forever} </h1>`)
    res.write(`<h1> Cart - ${req.cookies.cart.item.join(' ')}</h1>`)
    res.write(`<h1> Signed - ${req.signedCookies['signed']}</h1>`)
    res.end()
})

app.get('/clear', (req, res) => {
    res.clearCookie('username')
    res.clearCookie('cart')
    res.send("cookies have been removed")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// 1 - npm init
// 2 - express
// 3 - nodemon