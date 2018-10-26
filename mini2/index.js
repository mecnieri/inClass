const express = require('express')
const app = express()
const PORT = 3000
const users = [{
    firstName: "George",
    lastName: "Abzianidze",
    ID: "101",
    fathersName: "Nodar",
    birthYear: "1992",
    car: ["201", "203"]
}, {
    firstName: "Thea",
    lastName: "Chagua",
    ID: "102",
    fathersName: "Valeri",
    birthYear: "1991",
    car: ["202"]
}, {
    firstName: "Luka",
    lastName: "Kvlividze",
    ID: "103",
    fathersName: "Paata",
    birthYear: "1992",
    car: []
}]
const cars = [{
    mark: "Ford",
    model: "Focus",
    VIN: "201",
    owner: "101"
},
{
    mark: "Mercedes",
    model: "CLS",
    VIN: "202",
    owner: "102"
},
{
    mark: "BMW",
    model: "xuligan",
    VIN: "203",
    owner: "101"
}]

let wantedName;
let wantedCar;

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('home.pug')
})



app.get('/add', (req, res) => {
    res.render('addPerson.pug')
})

app.post('/add', (req, res) => {
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        fathersName: req.body.fathersName,
        birthYear: req.body.birthYear
    }
    user.car = []
    users.push(user);
    res.render('addPerson')
})



app.post('/search', (req, res) => {
    const { wanted } = req.body;
    const { wantedCar } = req.body;
    let i = users.findIndex(e => e.firstName == wanted);
    let k = cars.findIndex(e => e.VIN == wantedCar);
    if (i != -1) {
        let { firstName, lastName, number, fathersName, birthYear, car } = users[i]
        let j = cars.filter(e => e.owner == users[i].ID);
        wantedName = firstName;
        res.render('searched',
            {
                firstName,
                lastName,
                number,
                fathersName,
                birthYear,
                j
            }
        )
    } else {
        res.send(`Sorry cannot find <b>${wanted}</b>  in our base <br><br><br><a href='/'><button>Back to home page</button></a> `)
    }

})
app.post('/searchCar', (req, res) => {
    const { wantedCar } = req.body;
    let k = cars.findIndex(e => e.VIN == wantedCar);
    let q = users.findIndex(e => e.ID == cars[k].owner)
    if (k != -1) {
        let { firstName, lastName, number, fathersName, birthYear, car } = users[q]
        let { mark, model, VIN } = cars[k]
        let j = cars.filter(e => e.owner == users[q].ID);
        res.render('searchedCar',
            {
                mark,
                model,
                VIN,
                firstName,
                lastName,
                number,
                fathersName,
                birthYear,
                j
            }
        )
    } else {
        res.send(`Sorry cannot find <b>${wantedCar}</b>  in our base <br><br><br><a href='/'><button>Back to home page</button></a> `)
    }

})



app.post('/update', (req, res) => {
    let i = users.findIndex(e => e.firstName == wantedName);
    if (i != -1) {
        let { firstName, lastName, number, fathersName, birthYear } = users[i]
        res.render('update', {
            firstName,
            lastName,
            number,
            fathersName,
            birthYear
        })
    }
})

app.post('/push', (req, res) => {
    let i = users.findIndex(e => e.firstName == wantedName);
    res.render('push', { wantedName })

    let user = req.body;
    user.car = []
    users.splice(i, 1, user)
})

app.get('/addCar', (req, res) => {
    res.render('addCar.pug')
})

app.post('/addCar', (req, res) => {
    console.log(wantedName);
    let i = users.findIndex(e => e.firstName == wantedName);
    console.log(users[i]);
    users[i].car.push(req.body.VIN)
    req.body.owner = users[i].ID
    cars.push(req.body)
    res.render('addcar.pug')
})

app.post('/updateCar', (req, res) => {
    console.log(req.body);
    let i = cars.findIndex(e => e.VIN == wantedCar);
    if (i != -1) {
        let { mark, model, VIN, owner } = cars[i]
        res.render('updateCar', {
            mark,
            model,
            VIN,
            owner
        })
    }
})

app.post('/pushCar', (req, res) => {
    let i = users.findIndex(e => e.firstName == wantedCar);
    res.render('pushCar', { wantedCar })
    cars.splice(i, 1, req.body)
})

app.post('/delete', (req, res) => {
    let i = users.findIndex(e => e.firstName == wantedName);
    res.render('delete', { wantedName })
    users.splice(i, 1)
})










app.listen(PORT)