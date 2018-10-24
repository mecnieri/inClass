const express = require('express')
const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: true }))
const users = [{
    firstName: "George",
    lastName: "Abzianidze",
    number: "012345678901",
    fathersName: "Nodar",
    birthYear: "1992"
}, {
    firstName: "Thea",
    lastName: "Chagua",
    number: "12345678901",
    fathersName: "Valeri",
    birthYear: "1991"
}, {
    firstName: "Luka",
    lastName: "Kvlividze",
    number: "132345678901",
    fathersName: "Paata",
    birthYear: "1992"
}]
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('home.pug')
})
app.get('/add', (req, res) => {
    res.render('users.pug')
})

app.post('/add', (req, res) => {
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        fathersName: req.body.fathersName,
        birthYear: req.body.birthYear
    }
    users.push(user);
    res.render('users')
    console.log("d");
})

app.post('/us', (req, res) => {
    const { product_name } = req.body;
    let i = users.findIndex(e => e.firstName == product_name);
    if (i != -1) {
        let { firstName, lastName, number, fathersName, birthYear } = users[i]
        res.render('\home',
            {
                firstName,
                lastName,
                number,
                fathersName,
                birthYear
            }
        )
    } else {
        res.send("Sorry cannot find " + product_name + " in our base")
    }
})

app.post('/update', (req, res) => {
    console.log("dsad");
    console.log(req.body);
    res.send('home')
})
















app.listen(PORT)