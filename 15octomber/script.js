const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const cookiePerser = require('cookie-parser')
const session = require('express-session')

let myPages = {
    main: {
        url: '/',
        count: 0
    },
    contact: {
        url: '/contact',
        count: 0
    }
}
// console.log(session);
app.use(cookiePerser())
app.use(session({
    secret: 'super cat',
    name: "demo-site",
    resave: true,
    saveUninitialized: false
}))

// req.cookies
// req.session
app.get(myPages.main.url, (req, res) => {
    if (req.session.main) {
        req.session.main.count++;
        res.send(`you visited HOME PAGE ${req.session.main.count} times `)
    } else {
        req.session.main = myPages.main;
        res.send("welcome to HOMEPAGE");
    }
})
app.get(myPages.contact.url, (req, res) => {
    if (req.session.contact) {
        req.session.contact.count++;
        res.send(`CONTACT ${req.session.contact.count} times `)
    } else {
        req.session.contact = myPages.contact;
        res.send("welcome to demo site");
    }
})

app.get('/destroy', (req, res) => {
    req.session.destroy(()=> {
        res.send('Session deleted')
    })
})

app.listen(PORT, () => {
    console.log('Started listening to ' + PORT);
});


// 1 -  $ npm install cookie-parser --save-dev
// 2 -  $ npm install express
// 3 -  $ npm install express-session --save-dev