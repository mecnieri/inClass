const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Init App
const app = express();


//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


// გაგიმარტივებს გატესტვას თავიდანვე თუ შენით ჩასვამ ხოლმე რამე ობიექტს 
let cars = [{
    make: "blah",
    model: "bluh",
    vin: "blih",
    car_id: "bleh",
    color: "bloh",
}];



//Home Route
app.get('/', function (req, res) {
    res.render('index');
});
//Adding Car Form 
app.get('/cars/add', function (req, res) {
    res.render('car-form');
})

// აქ add ზედმეტი იყო, იმიტომ რომ car-form.pug ში მე-5 ხაზეე პოსტავ http://localhost:3000/cars ამ ლინკზე 
app.post('/cars', function (req, res) {
    const object = {
        make: req.body.make,
        model: req.body.model,
        vin: req.body.vin,
        car_id: req.body.car_id,
        color: req.body.color,
    }

    cars.push(object);

    // აქვე კარგი იქნება თუ დააკონსოლებ ხოლმე. გაარკვევ მუშაობს თუ არა კოდი 
    console.log(cars)
    // მას შემდეგ რაც დარწმუნდები რომ cars-ში მართლაც ემატება შენი ობიექტები,
    // მერე საჭიროა ამ ობიექტებზე შევძლოთ წვდომა. 

    // აქ დაგჭირდება ერეიში ძებნის კოდის დაწერა, მე მაგას გამოვტოვებ 
    // და მაგალითისთვის ავიღებ 1-ს. ანუ ვითომ უკვე მოვძებნე საჭირო ობიექტი და მისი ინდექსია 1 


    // შემდეგ ვიყენებთ ობიექტის დესტრუქტურიზაციას. 
    // ამ დროს ობიექტის ფროფერთები გარდაიქმნებიან ჩვეულებრივ ცვლადებად (variable)
    // ამ ცვლადებს გადავცემ car.pugს 16 დან 20 ხაზამდე
    let { make, model, vin, car_id, color } = cars[1]
    res.render('car', {
        make,
        model,
        vin,
        car_id,
        color
    })

})

//Add Car route
app.get('/cars', function (req, res) {
    res.render('car');

})

//Adding Person from form
app.get('/person', function (req, res) {
    res.render('person');
});

// //Adding Person Route
app.get('/person/add', function (req, res) {
    res.render('person-form');
});


//Start Server
app.listen(3000, function () {
    console.log('server started on port 3000...');
})